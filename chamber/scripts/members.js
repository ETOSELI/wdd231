// Dynamically load members
async function loadMembers() {
    const response = await fetch('data/members.json');
    const members = await response.json();
    const container = document.querySelector('.members-container');
    container.innerHTML = ''; // Clear previous content

    members.forEach(member => {
        const card = document.createElement('div');
        card.className = 'member-card';
        card.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}">
            <h4>${member.name}</h4>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">Website</a>
            <p>Membership Level: ${member.membershipLevel}</p>
            <p>${member.info}</p>
        `;
        container.appendChild(card);
    });
}

// Toggle View Function
let isGridView = true; // Start with grid view

function toggleView() {
    const container = document.querySelector('.members-container');
    if (isGridView) {
        container.classList.remove('grid-view');
        container.classList.add('list-view');
    } else {
        container.classList.remove('list-view');
        container.classList.add('grid-view');
    }
    isGridView = !isGridView; // Toggle the view state
}

// Footer Updates
document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Event Listener for the Toggle Button
document.getElementById('toggleView').addEventListener('click', toggleView);

// Load members on page load
loadMembers();
