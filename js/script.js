// --- script.js for Digital Business Cards (using query parameters) ---

// Extract Profile Name from Query Parameter (e.g., ?profile=example)
const urlParams = new URLSearchParams(window.location.search);
const profileName = urlParams.get('profile'); // Get the 'profile' query parameter

console.log("Profile Name (from query parameter):", profileName);

// Check if profileName is available in the URL
if (profileName) {
    console.log("Fetching Profile:", profileName);
    const fetchUrl = `/profiles/${profileName}.json`; // Relative path to profile JSON
    console.log("Fetch URL:", fetchUrl);

    fetch(fetchUrl)
        .then(response => {
            if (!response.ok) {
                console.error("Fetch failed:", response.status, response.statusText);
                throw new Error(`Profile not found: ${profileName}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Profile data:", data);
            generateCard(data);
        })
        .catch(error => {
            console.error("Fetch Error:", error);
            document.getElementById('card-container').innerHTML = `<p>Error loading profile: ${error.message}</p>`;
        });
} else {
    // Handle case where 'profile' parameter is missing (homepage/root URL)
    document.getElementById('card-container').innerHTML = `<p>Welcome! Please select a profile by adding <b>?profile=yourProfileName</b> to the URL (e.g., ?profile=example)</p>`;
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