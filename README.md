# Digital Business Card Project

This project is a dynamic digital business card that displays information fetched from a JSON file. It is designed to be easily customizable and deployable for individual use.

## Files Included

*   `index.html`: The main HTML file that structures the business card layout.
*   `css/styles.css`:  The CSS file containing all the styling to visually present the business card according to the provided layout design.
*   `js/script.js`: The JavaScript file responsible for:
    *   Fetching the JSON data based on the subdomain.
    *   Dynamically generating the business card content in the HTML.
    *   Handling image placeholders and social media icons.
*   `profiles/`: This directory should contain your profile JSON files. For example, `profiles/name.json`.
*   `css/styles.css`: (Already mentioned, but listed again for clarity as a key file)
*   `README.md`: This file, providing information and instructions about the project.
*   `layout_design.png` (or similar name): The image file of the layout design wireframe (for reference during development and customization).

## Setup Instructions

1.  **Project File Structure:** Ensure all files (`index.html`, the `css` folder, the `js` folder, the `profiles` folder, and `README.md`) are in the same root directory of your project. The CSS file (`styles.css`) should be inside the `css` folder, the JavaScript file (`script.js`) inside the `js` folder, and your JSON profile file (e.g., `name.json`) inside the `profiles` folder.

2.  **JSON Profile File:**
    *   Create a JSON file named according to your desired subdomain and place it in the `profiles/` directory. For example, if your desired subdomain is `your-name`, name the file `name.json` and put it in `profiles/name.json`.
    *   The JSON file should contain your business card information in the following structure:

        ```json
        {
            "name": "Your Name",
            "title": "Your Title",
            "email": "[email address removed]",
            "website": "[www.yourwebsite.com](https://www.google.com/search?q=https://www.yourwebsite.com)",
            "about": "A brief description about you.",
            "socialLinks": [
                {
                    "label": "Email",
                    "url": "mailto:[email address removed]"
                },
                {
                    "label": "LinkedIn",
                    "url": "[https://linkedin.com/in/your-linkedin-profile](https://www.google.com/search?q=https://linkedin.com/in/your-linkedin-profile)"
                }
            ],
            "profilePic": "URL_TO_YOUR_PROFILE_PICTURE.jpg" (Optional: Add your profile picture URL here)
        }
        ```
    *   **Remember to replace the placeholder information with your actual details.**
    *   **Profile Picture:**  To display a profile picture, include the `"profilePic"` field in your JSON with the URL of your image. If this field is omitted, the "Image placeholder" text will be displayed.

3.  **Open `index.html` in your Browser:**  To view the business card locally, simply open the `index.html` file in any web browser. The JavaScript will attempt to fetch a JSON file based on `localhost` as the hostname, which might not directly work for local viewing unless you are running a local server that serves the `profiles` directory. For local testing, you might need to adjust the `fetchUrl` in `js/script.js` to point directly to your JSON file for testing (e.g.,  `fetchUrl = 'profiles/name.json';` temporarily for testing locally). **Remember to revert this change before deploying.**

4.  **Deployment to a Live Server:**

    *   **Upload Files:** Upload all project files (including the `css`, `js`, and `profiles` folders and `index.html`) to your web server.  Ensure the file structure is maintained on the server.
    *   **Domain/Subdomain Setup:** Configure your domain or subdomain to point to the directory where you have uploaded these files. For example, you might use a subdomain like `name.digitalcards.co.za`.
    *   **Update for Live Domain (Important):** **When deploying to a live server, you need to access the digital business card via a subdomain (or your main domain). The JavaScript code is designed to dynamically fetch the JSON profile based on the subdomain.**
        *   **No Code Change Needed (Usually):**  In most cases, the JavaScript code as provided (`js/script.js`) should work directly on a live server without changes, as it dynamically determines the subdomain from `window.location.hostname`.
        *   **Verification:** After deploying, access your digital business card through your configured subdomain (e.g., `name.digitalcards.co.za`). Verify that the correct JSON data is loaded and the business card is displayed as expected.

## How to Use

Once deployed, your digital business card will be accessible via a unique subdomain of `digitalcards.co.za`. For example, if you want to create a business card for "your-name," you would:

1.  Create a JSON file named `name.json` in the `profiles/` directory with "Your Name's" information.
2.  Configure a subdomain `name.digitalcards.co.za` to point to the project files on your server.
3.  Access the business card by visiting `name.digitalcards.co.za`.

The JavaScript will automatically fetch `profiles/name.json` and display the corresponding business card.

## Customization

*   **Profile Picture:**  Add or update the `"profilePic"` URL in your JSON file to change the profile image.
*   **Social Media Links:** Modify the `socialLinks` array in your JSON to update the Email and LinkedIn links.
*   **Social Media Icons:**
    *   The project currently includes placeholder social media icons (Twitter, Facebook, Instagram, GitHub).
    *   To change the social media platforms or URLs, modify the `socialPlatforms` array in `js/script.js`. Update the `url` property for each platform with your actual social media profile URLs.
    *   To customize the icons further (add more platforms, change icons), you may need to update the `socialPlatforms` array and potentially the CSS (`css/styles.css`) and HTML structure in `js/script.js`.

## Technologies Used

*   HTML5
*   CSS3
*   JavaScript
*   JSON
*   FontAwesome (for social media icons)
*   Poppins Font (from Google Fonts)

## Author

[Nyashadzashe-Ndhlovu] 

---
