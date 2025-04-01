// js/script.js

const container = document.getElementById('card-container');

if (company && profileName) {
    fetch(`profiles/${company}/profiles.json`)
        .then(response => response.json())
        .then(data => {
            const profile = data.cards.find(card => card.profile === profileName);

            if (profile) {
                const cardElement = document.createElement('div');
                cardElement.classList.add('card');

                cardElement.innerHTML = `
                    <div class="image-container">
                        <img src="${profile.profilePic}" alt="Profile Picture">
                    </div>
                    <div class="details">
                        <h1>${profile.name}</h1>
                        <h2>${profile.title}</h2>
                        <p class="email">${profile.email}</p>
                    </div>
                    <div class="contact-links">
                        <a href="${profile.email}" target="_blank">Email</a>
                        <a href="${profile.linkedin}" target="_blank">LinkedIn</a>
                    </div>
                    <div class="about-section">
                        <h3>About</h3>
                        <p>${profile.about}</p>
                    </div>
                    
                    <div class="website-section">
                        <p><a href="${profile.website}" target="_blank">${profile.website}</a></p>
                    </div>
                `;

                container.appendChild(cardElement);
            } else {
                container.textContent = 'Profile not found.';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            container.textContent = 'Error loading company data.';
        });
} else {
    container.textContent = 'Company or profile not specified in the URL.';
}