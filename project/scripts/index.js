document.addEventListener('DOMContentLoaded', () => {
    // Fetch and display event data
    fetch('events.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const eventsList = document.getElementById('data/events-list');
            eventsList.innerHTML = ''; // Clear placeholder text

            data.events.forEach(event => {
                const div = document.createElement('div');
                div.textContent = `${event.date}: ${event.title}`;
                eventsList.appendChild(div);
            });
        })
        .catch(error => {
            console.error('Error loading events:', error);
            document.getElementById('events-list').textContent = 'Failed to load events.';
        });

    // Update Footer with Copyright Year and Last Modified Date
    document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

    // Form submission
    document.getElementById('volunteer-form').addEventListener('submit', (event) => {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const availability = document.getElementById('availability').value;

        if (name && email && availability) {
            alert(`Thank you, ${name}! Your availability has been noted.`);
            localStorage.setItem('volunteerData', JSON.stringify({ name, email, availability }));
        } else {
            alert('Please fill out all fields.');
        }
    });
});
