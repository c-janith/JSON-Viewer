# JSON-Viewer
Overview
JSON Viewer is a simple web application that allows users to fetch and view JSON data from any URL. This tool is especially useful for developers and data enthusiasts who need a quick and easy way to visualize JSON data from various sources.

Features
User-Friendly Interface: A clean and straightforward design makes it easy to use.
Fetch JSON Data: Input any URL that returns JSON data, and the application will fetch and display the formatted JSON.
Error Handling: Provides clear error messages if the JSON data cannot be fetched.
Static Frontend: Hosted on GitHub Pages for easy access and maintenance.
Dynamic Backend: Hosted on Heroku to handle fetching data from external URLs securely.
Live Demo
Frontend: GitHub Pages Link
Backend: Hosted on Heroku (URL will be used internally by the frontend JavaScript)
How It Works
Input URL: Enter the URL of the JSON file you want to fetch in the input field.
Fetch JSON: Click the "Fetch JSON" button to retrieve the data.
View JSON: The formatted JSON data will be displayed in the viewer.
Usage
Clone the Repository:
bash
Copy code
git clone https://github.com/yourusername/yourrepository.git
Navigate to the Project Directory:
bash
Copy code
cd yourrepository
Run Locally:
Backend: Ensure you have Python and Flask installed. Run python app.py to start the server.
Frontend: Open index.html in your web browser to test locally.
Hosting
Frontend on GitHub Pages: Ensure all static files (HTML, CSS, JS) are in the repository.
Backend on Heroku: Deploy the Flask application to handle the fetch requests.
Files Structure
graphql
Copy code
your_project/
├── app.py                  # Flask backend to fetch JSON
├── requirements.txt        # Python dependencies
├── runtime.txt             # Python version for Heroku
├── Procfile                # Heroku process file
├── templates/
│   └── index.html          # Main HTML file
└── static/
    ├── styles.css          # CSS styles
    └── script.js           # JavaScript for fetching JSON
Contributing
Contributions are welcome! Please submit a pull request or open an issue to discuss any changes.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Setup Instructions
Hosting Static Frontend on GitHub Pages
Create a Repository:

Create a new repository on GitHub.
Upload Files:

Push your project files (HTML, CSS, JS) to the repository.
Enable GitHub Pages:

Go to your repository settings, navigate to the "Pages" section, and enable GitHub Pages from the main branch.
Hosting Flask Backend on Heroku
Prepare the Backend:

Ensure you have a Procfile, requirements.txt, and runtime.txt in your project.
Deploy to Heroku:

Use the Heroku CLI to create a new app and push your backend code.
Update JavaScript:

Modify your script.js to point to your Heroku app for fetching JSON data.
With this setup, you'll have a robust, easy-to-use JSON Viewer that leverages the power of both GitHub Pages and Heroku. Enjoy visualizing your JSON data effortlessly!
