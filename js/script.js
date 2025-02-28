// js/script.js

const path = window.location.pathname;
const parts = path.split('/');
const profileName = parts[parts.length - 1]; // Get the last part of the URL

// Check if profileName is empty (root URL)
if (profileName) {
    console.log("Profile Name:", profileName); // Added log
    const fetchUrl = `/profiles/${profileName}.json`;

    fetch(fetchUrl)
        .then(response => {
            if (!response.ok) {
                console.error("Fetch failed:", response.status, response.statusText);
                throw new Error('Profile not found');
            }
            return response.json();
        })
        .then(data => {
            console.log("Profile data:", data);
            generateCard(data);
        })
        .catch(error => {
            console.error(error);
            document.getElementById('card-container').innerHTML = `<p>${error.message}</p>`;
        });
} else {
    // Handle root URL (e.g., display a welcome message, a list of profiles, etc.)
    document.getElementById('card-container').innerHTML = `<p>Welcome! Please select a profile from the URL.</p>`;
}

function generateCard(data) {
    const cardContainer = document.getElementById('card-container');
    const card = document.createElement('div');
    card.className = 'card';

    // Image Container
    const imageContainer = document.createElement('div');
    imageContainer.className = 'image-container';

    if (data.profilePic) {
        const profileImage = document.createElement('img');
        profileImage.className = 'placeholder';
        profileImage.src = data.profilePic;
        profileImage.alt = 'Profile Picture of ' + data.name;
        imageContainer.appendChild(profileImage);
    } else {
        const placeholderText = document.createElement('span');
        placeholderText.className = 'image-placeholder-text';
        placeholderText.innerText = 'Image placeholder';
        imageContainer.appendChild(placeholderText);
    }

    // Details Section
    const details = document.createElement('div');
    details.className = 'details';
    const name = document.createElement('h1');
    name.innerText = data.name;
    const title = document.createElement('h2');
    title.innerText = data.title;
    const email = document.createElement('p');
    email.className = 'email';
    email.innerText = data.email;
    details.appendChild(name);
    details.appendChild(title);
    details.appendChild(email);

    // Contact Links Section
    const contactLinks = document.createElement('div');
    contactLinks.className = 'contact-links';

    data.socialLinks.forEach(link => {
        if (link.label === 'Email' || link.label === 'LinkedIn') {
            const anchor = document.createElement('a');
            anchor.href = link.url;
            anchor.textContent = link.label;

            if (link.label === 'Email') {
                anchor.innerHTML = '<i class="fas fa-envelope"></i> Email';
            } else if (link.label === 'LinkedIn') {
                anchor.innerHTML = '<i class="fab fa-linkedin"></i> LinkedIn';
            }

            contactLinks.appendChild(anchor);
        }
    });

    // About Section
    const aboutSection = document.createElement('div');
    aboutSection.className = 'about-section';
    const aboutHeading = document.createElement('h3');
    aboutHeading.innerText = 'About';
    const aboutText = document.createElement('p');
    aboutText.innerText = data.about;
    aboutSection.appendChild(aboutHeading);
    aboutSection.appendChild(aboutText);

    // Website Section
    const websiteSection = document.createElement('div');
    websiteSection.className = 'website-section';
    const websiteText = document.createElement('p');
    websiteText.innerText = data.website;
    websiteSection.appendChild(websiteText);

    card.appendChild(imageContainer);
    card.appendChild(details);
    card.appendChild(contactLinks);
    card.appendChild(aboutSection);
    card.appendChild(websiteSection);
    cardContainer.appendChild(card);
}