# Digital Business Card Project

This project is a dynamic digital business card that displays information fetched from a JSON file. It is designed to be easily customizable and deployable for individual use, utilizing **query parameters** to specify which profile to display.

## Files Included

*   `index.html`: The main HTML file that structures the business card layout.
*   `css/styles.css`: The CSS file containing all the styling to visually present the business card.
*   `js/script.js`: The JavaScript file responsible for:
    *   Fetching JSON data based on the `profile` query parameter in the URL.
    *   Dynamically generating the business card content in the HTML.
    *   Handling image placeholders and social media icons.
*   `profiles/`: This directory contains your profile JSON files. For example, `profiles/example.json`.
*   `README.md`: This file, providing information and instructions about the project.
*   `layout_design.png` (or similar name): (Optional) An image file of the layout design wireframe for reference.

## Setup Instructions

1.  **Project File Structure:** Ensure all files (`index.html`, the `css` folder, the `js` folder, the `profiles` folder, and `README.md`) are in the same root directory of your project. The CSS file (`styles.css`) should be inside the `css` folder, the JavaScript file (`script.js`) inside the `js` folder, and your JSON profile files (e.g., `example.json`) inside the `profiles` folder.

2.  **JSON Profile File:**
    *   Create JSON files and place them in the `profiles/` directory.  Choose filenames that will identify each profile (e.g., `example.json`, `profile1.json`, `myprofile.json`).
    *   Each JSON file should contain your business card information in the following structure. **Use a unique filename for each profile JSON file**:

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
                    "url": "[https://linkedin.com/in/your-linkedin-profile](https://linkedin.com/in/your-linkedin-profile)"
                }
            ],
            "profilePic": "URL_TO_YOUR_PROFILE_PICTURE.jpg" (Optional: Add your profile picture URL here)
        }
        ```
    *   **Remember to replace the placeholder information with your actual details** in each JSON profile file you create.
    *   **Profile Picture:** To display a profile picture, include the `"profilePic"` field in your JSON with the URL of your image. If this field is omitted, the "Image placeholder" text will be displayed.

3.  **Open `index.html` in your Browser for Local Testing:**
    *   To view the base business card layout (without a specific profile loaded), simply open `index.html` in any web browser. You should see the "Welcome" message.
    *   **To test a specific profile locally:** Open `index.html` in your browser and manually add a query parameter to the URL in the address bar. For example, if you have a profile file named `example.json`, use the URL: `index.html?profile=example`. You should see the business card populated with data from `profiles/example.json`.
    *   **Using a Local Server (Recommended for more accurate testing):** For more reliable local testing that mirrors a live server environment, it's recommended to run a simple local web server (like Python's `http.server` or Node.js `http-server`) from your project directory.  Then access your business card in the browser using URLs like `http://localhost:8000/index.html?profile=example`.

4.  **Deployment to a Live Server:**

    *   **Upload Files:** Upload all project files (including the `css`, `js`, and `profiles` folders and `index.html`) to your web server. Ensure the file structure is maintained on the server.
    *   **Access via URL with Query Parameter:**  Once deployed, you will access your digital business cards by adding a `?profile=` query parameter to the URL of your `index.html` file.

        For example, if your domain is `www.yourdomain.com` and you have a profile JSON file named `myprofile.json` in the `profiles` folder on your server, you would access this business card using the URL:

        `www.yourdomain.com/index.html?profile=myprofile`

        Or, if `index.html` is in the root directory of your domain:

        `www.yourdomain.com/?profile=myprofile`

    *   **No Code Change Needed:** The provided JavaScript code (`js/script.js`) is designed to work directly on a live server without changes. It dynamically reads the `profile` query parameter from the URL.
    *   **Verification:** After deploying, access your digital business card through URLs with the `?profile=` parameter. Verify that the correct JSON data is loaded and the business card is displayed as expected for each profile.

## How to Use

Once deployed, your digital business cards are accessed by using URLs with the `?profile=` query parameter.  To view a specific business card:

1.  **Create a JSON profile file** (e.g., `myprofile.json`) in the `profiles/` directory containing the business card information.
2.  **Access the business card** by opening the `index.html` file in your browser and adding the query parameter `?profile=yourProfileFilename` to the URL, where `yourProfileFilename` is the filename of your JSON profile file (without the `.json` extension).

    For example, if your domain is `www.example.com`, your `index.html` is in the root directory, and you created `profiles/myprofile.json`, you would access this business card at:

    `www.example.com/?profile=myprofile`

## Customization

*   **Profile Picture:** Add or update the `"profilePic"` URL in your JSON file to change the profile image.
*   **Social Media Links:** Modify the `socialLinks` array in your JSON to update the Email and LinkedIn links.
*   **Styling:**  Customize the visual appearance of the business card by editing the CSS rules in `css/styles.css`. You can change colors, fonts, layout, and more.
*   **Adding More Social Links/Information:**  You can extend the data structure in your JSON files and modify the `generateCard` function in `js/script.js` to display additional information or social media links beyond Email and LinkedIn. You would also need to update the HTML and CSS accordingly to present these new elements.

## Technologies Used

*   HTML5
*   CSS3
*   JavaScript
*   JSON
*   FontAwesome (for icons)
*   Poppins Font (from Google Fonts)

## Author

[Nyashadzashe Ndhlovu] 

---