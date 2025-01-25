// JSON data representing chamber members
const members = [
    {
        "name": "ABC Corp",
        "address": "123 Main St, Nairobi, Kenya",
        "phone": "+254 700-111-222",
        "website": "http://abccorp.com",
        "image": "images/abccorp.png",
        "membershipLevel": "gold",
        "info": "A leading corporation in technology."
    },
    {
        "name": "XYZ Enterprises",
        "address": "456 Second St, Nairobi, Kenya",
        "phone": "+254 700-222-333",
        "website": "http://xyzenterprises.com",
        "image": "images/xyzenterprises.png",
        "membershipLevel": "silver",
        "info": "Specializing in innovative solutions."
    },
    {
        "name": "Tech Solutions",
        "address": "789 Third St, Nairobi, Kenya",
        "phone": "+254 700-333-444",
        "website": "http://techsolutions.com",
        "image": "images/techsolutions.png",
        "membershipLevel": "bronze",
        "info": "Expert in IT services and support."
    },
    {
        "name": "Creative Media",
        "address": "321 Fourth St, Nairobi, Kenya",
        "phone": "+254 700-444-555",
        "website": "http://creativemedia.com",
        "image": "images/creativemedia.png",
        "membershipLevel": "gold",
        "info": "Leading media agency in Kenya."
    },
    {
        "name": "Eco Products",
        "address": "654 Fifth St, Nairobi, Kenya",
        "phone": "+254 700-555-666",
        "website": "http://ecoproducts.com",
        "image": "images/ecoproducts.png",
        "membershipLevel": "silver",
        "info": "Sustainable products for everyday use."
    },
    {
        "name": "Finance Hub",
        "address": "987 Sixth St, Nairobi, Kenya",
        "phone": "+254 700-666-777",
        "website": "http://financehub.com",
        "image": "images/financehub.jpeg",
        "membershipLevel": "bronze",
        "info": "Expert financial consultancy services."
    },
    {
        "name": "Health & Wellness",
        "address": "159 Seventh St, Nairobi, Kenya",
        "phone": "+254 700-777-888",
        "website": "http://healthandwellness.com",
        "image": "images/healthandwellness.jpeg",
        "membershipLevel": "gold",
        "info": "Promoting health and wellness in the community."
    }
];

function displaySpotlights() {
    const spotlightContainer = document.querySelector(".spotlights");

    // Filter for gold and silver members
    const eligibleMembers = members.filter(member =>
        member.membershipLevel === "gold" || member.membershipLevel === "silver"
    );

    // Randomly select 2-3 members
    const selectedMembers = eligibleMembers.sort(() => 0.5 - Math.random()).slice(0, 3);

    // Inject member data into HTML
    spotlightContainer.innerHTML = selectedMembers.map(member => `
        <div class="spotlight">
            <img src="${member.image}" alt="${member.name} Logo" class="spotlight-logo">
            <h3>${member.name}</h3>
            <p>${member.info}</p>
            <p><strong>Address:</strong> ${member.address}</p>
            <p><strong>Phone:</strong> ${member.phone}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
        </div>
    `).join("");
}

document.addEventListener("DOMContentLoaded", displaySpotlights);
