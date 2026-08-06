const express = require("express");
const mysql = require("mysql2/promise");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10
});

app.get("/", (req, res) => {
    res.json({ message: "CampusConnect API is running" });
});

app.post("/api/register", async (req, res) => {
    try {
        const { name, email, password, phone, course } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                message: "Name, email and password are required"
            });
        }

        const [existing] = await pool.query(
            "SELECT id FROM users WHERE email = ?", [email]
        );

        if (existing.length > 0) {
            return res.status(400).json({
                message: "Email already registered"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await pool.query(
            `INSERT INTO users
            (name, email, password, phone, course)
            VALUES (?, ?, ?, ?, ?)`,
            [name, email, hashedPassword, phone || "", course || ""]
        );

        res.status(201).json({ message: "Registration successful" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

app.post("/api/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const [users] = await pool.query(
            "SELECT * FROM users WHERE email = ?", [email]
        );

        if (users.length === 0) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        const user = users[0];
        let passwordMatch = false;

        if (user.password === "admin123" && user.role === "admin") {
            passwordMatch = password === "admin123";

            if (passwordMatch) {
                const hashed = await bcrypt.hash(password, 10);
                await pool.query(
                    "UPDATE users SET password = ? WHERE id = ?",
                    [hashed, user.id]
                );
            }
        } else {
            passwordMatch = await bcrypt.compare(password, user.password);
        }

        if (!passwordMatch) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        const token = jwt.sign(
            { id: user.id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        res.json({
            message: "Login successful",
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role,
                phone: user.phone,
                course: user.course
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

function authenticate(req, res, next) {
    const header = req.headers.authorization;

    if (!header) {
        return res.status(401).json({
            message: "Authentication required"
        });
    }

    const token = header.split(" ")[1];

    try {
        req.user = jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch (error) {
        res.status(401).json({
            message: "Invalid or expired token"
        });
    }
}

function adminOnly(req, res, next) {
    if (req.user.role !== "admin") {
        return res.status(403).json({
            message: "Admin access required"
        });
    }
    next();
}

app.get("/api/events", async (req, res) => {
    try {
        const [events] = await pool.query(
            "SELECT * FROM events ORDER BY event_date ASC"
        );
        res.json(events);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Unable to fetch events" });
    }
});

app.get("/api/events/:id", async (req, res) => {
    try {
        const [events] = await pool.query(
            "SELECT * FROM events WHERE id = ?", [req.params.id]
        );

        if (events.length === 0) {
            return res.status(404).json({ message: "Event not found" });
        }

        res.json(events[0]);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

app.post("/api/events", authenticate, adminOnly, async (req, res) => {
    try {
        const {
            title, description, category, event_date, event_time,
            venue, capacity, organizer, image
        } = req.body;

        await pool.query(
            `INSERT INTO events
            (title, description, category, event_date, event_time,
             venue, capacity, organizer, image)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                title, description, category, event_date, event_time,
                venue, capacity || 100, organizer || "", image || ""
            ]
        );

        res.status(201).json({
            message: "Event created successfully"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Unable to create event" });
    }
});

app.delete("/api/events/:id", authenticate, adminOnly, async (req, res) => {
    try {
        await pool.query(
            "DELETE FROM events WHERE id = ?", [req.params.id]
        );
        res.json({ message: "Event deleted" });
    } catch (error) {
        res.status(500).json({ message: "Unable to delete event" });
    }
});

app.post("/api/events/:id/register", authenticate, async (req, res) => {
    try {
        const eventId = req.params.id;
        const userId = req.user.id;

        const [existing] = await pool.query(
            `SELECT id FROM registrations
             WHERE user_id = ? AND event_id = ?`,
            [userId, eventId]
        );

        if (existing.length > 0) {
            return res.status(400).json({
                message: "Already registered"
            });
        }

        const [event] = await pool.query(
            "SELECT capacity FROM events WHERE id = ?", [eventId]
        );

        if (event.length === 0) {
            return res.status(404).json({ message: "Event not found" });
        }

        const [count] = await pool.query(
            `SELECT COUNT(*) AS total
             FROM registrations WHERE event_id = ?`,
            [eventId]
        );

        if (count[0].total >= event[0].capacity) {
            return res.status(400).json({ message: "Event is full" });
        }

        await pool.query(
            `INSERT INTO registrations (user_id, event_id)
             VALUES (?, ?)`,
            [userId, eventId]
        );

        res.json({ message: "Successfully registered" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Registration failed" });
    }
});

app.get("/api/my-events", authenticate, async (req, res) => {
    try {
        const [events] = await pool.query(
            `SELECT events.*, registrations.registered_at
             FROM registrations
             JOIN events ON registrations.event_id = events.id
             WHERE registrations.user_id = ?
             ORDER BY events.event_date`,
            [req.user.id]
        );

        res.json(events);
    } catch (error) {
        res.status(500).json({
            message: "Unable to fetch registered events"
        });
    }
});

app.get("/api/profile", authenticate, async (req, res) => {
    try {
        const [users] = await pool.query(
            `SELECT id, name, email, phone, course, role, created_at
             FROM users WHERE id = ?`,
            [req.user.id]
        );

        res.json(users[0]);
    } catch (error) {
        res.status(500).json({
            message: "Unable to fetch profile"
        });
    }
});

app.get("/api/admin/stats", authenticate, adminOnly, async (req, res) => {
    try {
        const [[users]] = await pool.query(
            "SELECT COUNT(*) AS total FROM users WHERE role='student'"
        );
        const [[events]] = await pool.query(
            "SELECT COUNT(*) AS total FROM events"
        );
        const [[registrations]] = await pool.query(
            "SELECT COUNT(*) AS total FROM registrations"
        );

        res.json({
            students: users.total,
            events: events.total,
            registrations: registrations.total
        });
    } catch (error) {
        res.status(500).json({
            message: "Unable to fetch statistics"
        });
    }
});

app.get("/api/admin/registrations", authenticate, adminOnly, async (req, res) => {
    try {
        const [registrations] = await pool.query(
            `SELECT registrations.id, users.name, users.email,
                    events.title, events.event_date,
                    registrations.registered_at
             FROM registrations
             JOIN users ON registrations.user_id = users.id
             JOIN events ON registrations.event_id = events.id
             ORDER BY registrations.registered_at DESC`
        );

        res.json(registrations);
    } catch (error) {
        res.status(500).json({
            message: "Unable to fetch registrations"
        });
    }
});

app.listen(PORT, () => {
    console.log(`CampusConnect server running on http://localhost:${PORT}`);
});
