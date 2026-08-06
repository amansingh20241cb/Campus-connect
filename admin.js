const token = localStorage.getItem("token");
const user = JSON.parse(localStorage.getItem("user"));

if (!token || !user || user.role !== "admin") {
    window.location.href = "login.html";
}

async function loadStats() {
    const response = await fetch("http://localhost:5000/api/admin/stats", {
        headers: {"Authorization": `Bearer ${token}`}
    });
    const data = await response.json();

    document.getElementById("students").textContent = data.students;
    document.getElementById("events").textContent = data.events;
    document.getElementById("registrations").textContent = data.registrations;
}

async function loadRegistrations() {
    const response = await fetch("http://localhost:5000/api/admin/registrations", {
        headers: {"Authorization": `Bearer ${token}`}
    });
    const data = await response.json();
    const table = document.getElementById("registrationTable");

    if (data.length === 0) {
        table.innerHTML = `<tr><td colspan="5" class="text-center">No registrations yet.</td></tr>`;
        return;
    }

    table.innerHTML = data.map(item => `
        <tr>
            <td>${item.name}</td>
            <td>${item.email}</td>
            <td>${item.title}</td>
            <td>${item.event_date}</td>
            <td>${item.registered_at}</td>
        </tr>
    `).join("");
}

document.getElementById("eventForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
        title: document.getElementById("title").value,
        description: document.getElementById("description").value,
        category: document.getElementById("category").value,
        event_date: document.getElementById("event_date").value,
        event_time: document.getElementById("event_time").value,
        venue: document.getElementById("venue").value,
        capacity: document.getElementById("capacity").value,
        organizer: document.getElementById("organizer").value
    };

    const response = await fetch("http://localhost:5000/api/events", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();
    alert(result.message);

    if (response.ok) {
        document.getElementById("eventForm").reset();
        loadStats();
        loadRegistrations();
    }
});

function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "index.html";
}

loadStats();
loadRegistrations();
