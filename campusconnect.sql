CREATE DATABASE IF NOT EXISTS campusconnect;
USE campusconnect;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('student', 'admin') DEFAULT 'student',
    phone VARCHAR(20),
    course VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE events (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    description TEXT NOT NULL,
    category VARCHAR(100) NOT NULL,
    event_date DATE NOT NULL,
    event_time TIME NOT NULL,
    venue VARCHAR(200) NOT NULL,
    capacity INT DEFAULT 100,
    organizer VARCHAR(100),
    image VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE registrations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    event_id INT NOT NULL,
    registered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE CASCADE,
    UNIQUE(user_id, event_id)
);

CREATE TABLE feedback (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    event_id INT NOT NULL,
    rating INT NOT NULL,
    comment TEXT,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE CASCADE
);

INSERT INTO users (name, email, password, role)
VALUES ('Administrator', 'admin@campusconnect.com', 'admin123', 'admin');

INSERT INTO events
(title, description, category, event_date, event_time, venue, capacity, organizer)
VALUES
('Web Development Workshop',
 'Learn modern web development technologies including HTML, CSS, JavaScript and APIs.',
 'Technology', '2026-09-15', '10:00:00', 'Computer Lab 1', 100,
 'Computer Science Department'),
('Annual Cultural Fest',
 'A college-wide cultural event featuring music, dance and competitions.',
 'Cultural', '2026-09-20', '11:00:00', 'College Auditorium', 500,
 'Cultural Committee'),
('Inter College Cricket',
 'Inter-college cricket tournament.',
 'Sports', '2026-09-25', '09:00:00', 'College Ground', 200,
 'Sports Committee');
