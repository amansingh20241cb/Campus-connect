let allEvents = [];

async function loadEvents() {
    try {
        const response = await fetch("http://localhost:5000/api/events");
        allEvents = await response.json();
        displayEvents(allEvents);
    } catch (error) {
        document.getElementById("eventsContainer").innerHTML =
            `<div class="col-12"><div class="alert alert-danger">Unable to connect to server.</div></div>`;
    }
}

function displayEvents(events) {
    const container = document.getElementById("eventsContainer");

    if (events.length === 0) {
        container.innerHTML = `<div class="col-12 text-center"><h4>No events found</h4></div>`;
        return;
    }

    container.innerHTML = events.map(event => `
        <div class="col-md-4">
            <div class="event-card">
                <span class="badge bg-primary">${event.category}</span>
                <h4 class="mt-3">${event.title}</h4>
                <p>${event.description}</p>
                <hr>
                <p>📅 ${formatDate(event.event_date)}</p>
                <p>⏰ ${event.event_time}</p>
                <p>📍 ${event.venue}</p>
                <p>👥 Capacity: ${event.capacity}</p>
                <button class="btn btn-primary w-100" onclick="registerEvent(${event.id})">
                    Register
                </button>
            </div>
        </div>
    `).join("");
}

function formatDate(date) {
    return new Date(date).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });
}

async function registerEvent(id) {
    const token = localStorage.getItem("token");

    if (!token) {
        alert("Please login before registering.");
        window.location.href = "login.html";
        return;
    }

    try {
        const response = await fetch(`http://localhost:5000/api/events/${id}/register`, {
            method: "POST",
            headers: {"Authorization": `Bearer ${token}`}
        });

        const result = await response.json();
        alert(result.message);
    } catch (error) {
        alert("Unable to register.");
    }
}

document.getElementById("search").addEventListener("input", function () {
    const search = this.value.toLowerCase();

    const filtered = allEvents.filter(event =>
        event.title.toLowerCase().includes(search) ||
        event.category.toLowerCase().includes(search) ||
        event.venue.toLowerCase().includes(search)
    );

    displayEvents(filtered);
});

loadEvents();
