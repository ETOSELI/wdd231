// Load JSON Data and Generate Cards
fetch('data/discover.json')
    .then(response => response.json())
    .then(data => {
        const gallery = document.getElementById('gallery-container');
        data.items.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = 'card';
            card.style.gridArea = `card${index + 1}`;
            card.innerHTML = `
                <h2>${item.name}</h2>
                <figure>
                    <img src="${item.image}" alt="${item.name}" loading="lazy">
                </figure>
                <address>${item.address}</address>
                <p>${item.description}</p>
                <button>Learn More</button>
            `;
            gallery.appendChild(card);
        });
    })
    .catch(error => console.error('Error loading data:', error));

// Last Visit Tracking
const visitMessage = document.getElementById('visit-message');
const lastVisit = localStorage.getItem('lastVisit');
const currentDate = Date.now();

if (!lastVisit) {
    visitMessage.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const daysSinceLastVisit = Math.floor((currentDate - lastVisit) / (1000 * 60 * 60 * 24));
    visitMessage.textContent = daysSinceLastVisit < 1 ? 
        "Back so soon! Awesome!" : 
        `You last visited ${daysSinceLastVisit} ${daysSinceLastVisit === 1 ? 'day' : 'days'} ago.`;
}

localStorage.setItem('lastVisit', currentDate);

// Update Footer
document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;