// // Extract the subdomain (profile name) from the URL
// const subdomain = window.location.hostname.split('.')[0]; // e.g., "john-doe"

// // Fetch the profile data
// fetch(`/profiles/${subdomain}.json`)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Profile not found');
//         }
//         return response.json();
//     })
//     .then(data => {
//         // Populate the profile data
//         document.getElementById('name').innerText = data.name;
//         document.getElementById('email').innerText = data.email;
//         document.getElementById('phone').innerText = data.phone;
//         document.getElementById('bio').innerText = data.bio;
//     })
//     .catch(error => {
//         console.error(error);
//         document.getElementById('profile').innerHTML = `<p>${error.message}</p>`;
//     });


// Extract the subdomain (profile name) from the URL

// Extract the subdomain (profile name) from the URL
// Extract the subdomain (profile name) from the URL


// Extract the subdomain (profile name) from the URL

// Extract the subdomain (profile name) from the URL
// Extract the subdomain (profile name) from the URL

const hostname = window.location.hostname;
const subdomain = hostname.split('.')[0];
const fetchUrl = `/profiles/${subdomain}.json`;

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

function generateCard(data) {
    const cardContainer = document.getElementById('card-container');
    const card = document.createElement('div');
    card.className = 'card';

    // Image Container
    const imageContainer = document.createElement('div');
    imageContainer.className = 'image-container';

    // Check if profilePic URL exists in the JSON data
    if (data.profilePic) {
        const profileImage = document.createElement('img');
        profileImage.className = 'placeholder'; // You can keep the 'placeholder' class for styling if needed
        profileImage.src = data.profilePic;
        profileImage.alt = 'Profile Picture of ' + data.name; // Accessibility alt text
        imageContainer.appendChild(profileImage);
    } else {
        // If profilePic is not available, show the placeholder text
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
    email.className = 'email'; // Added class for email
    email.innerText = data.email;
    details.appendChild(name);
    details.appendChild(title);
    details.appendChild(email);

    // Contact Links Section (Email and LinkedIn Buttons)
    const contactLinks = document.createElement('div');
    contactLinks.className = 'contact-links';

    data.socialLinks.forEach(link => {
        if (link.label === 'Email' || link.label === 'LinkedIn') {
            const anchor = document.createElement('a');
            anchor.href = link.url;
            anchor.textContent = link.label; // Use textContent for button labels

             // You can add icons here later, for example:
             if (link.label === 'Email') {
                 anchor.innerHTML = '<i class="fas fa-envelope"></i> Email'; // Email icon
             } else if (link.label === 'LinkedIn') {
                 anchor.innerHTML = '<i class="fab fa-linkedin"></i> LinkedIn'; // LinkedIn icon
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

    // Social Icons Section (Now with FontAwesome Icons)
    const socialIcons = document.createElement('div');
    socialIcons.className = 'social-icons';
    const socialPlatforms = [
        { platform: 'twitter', iconClass: 'fab fa-twitter', url: '#' }, // Replace '#' with actual URLs
        { platform: 'facebook', iconClass: 'fab fa-facebook', url: '#' },
        { platform: 'instagram', iconClass: 'fab fa-instagram', url: '#' },
        { platform: 'github', iconClass: 'fab fa-github', url: '#' }
    ];

    socialPlatforms.forEach(platform => {
        const iconLink = document.createElement('a');
        iconLink.href = platform.url; // Use the URL from the platform object
        iconLink.ariaLabel = platform.platform; // Accessibility label
        const icon = document.createElement('i');
        icon.className = platform.iconClass; // Use the icon class from the platform object
        iconLink.appendChild(icon);
        socialIcons.appendChild(iconLink);
    });


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
    card.appendChild(socialIcons);
    card.appendChild(websiteSection);
    cardContainer.appendChild(card);
}