# Reqa - A SillyTavern HTTP Request Extension

## Description

**Reqa** is a simple utility extension for SillyTavern that allows you to send GET and POST requests to any URL and view the server's response directly within the SillyTavern interface. This can be useful for testing APIs, triggering webhooks, or interacting with other web services without leaving your chat session.

## Features

-   Send HTTP GET requests.
-   Send HTTP POST requests with a JSON body.
-   View the formatted JSON response from the server.
-   Simple and intuitive user interface integrated into the extensions menu.

## Installation

1.  Navigate to the `public/extensions/third-party/` directory within your SillyTavern installation folder.
2.  Create a new folder named `Extension-Reqa`.
3.  Place the following files inside the `Extension-Reqa` folder:
    -   `manifest.json`
    -   `index.js`
    -   `style.css`
    -   `README.md` (optional, for your reference)
4.  Restart SillyTavern.
5.  The "Reqa" extension will now be available in the extensions menu on the right-hand panel.

## How to Use

1.  Open SillyTavern and click on the extensions icon to open the extensions menu.
2.  Scroll to find the **Reqa - HTTP Client** panel.
3.  **For GET Requests:**
    -   Enter the full URL into the "URL" input field.
    -   Click the "Send GET" button.
4.  **For POST Requests:**
    -   Enter the full URL into the "URL" input field.
    -   Enter your JSON data into the "POST Body (JSON)" text area.
    -   Click the "Send POST" button.
5.  The server's response will be displayed in the "Response" area below the buttons.

---```