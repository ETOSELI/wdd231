// Set the timestamp value
document.getElementById('timestamp').value = new Date().toISOString();

// Open modals when "Learn More" links are clicked
document.querySelectorAll('.card a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const modalId = link.getAttribute('href').substring(1);
        document.getElementById(modalId).showModal();
    });
});

// Update footer year and last modified date
document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;