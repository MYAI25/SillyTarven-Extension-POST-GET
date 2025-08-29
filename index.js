// Import necessary SillyTavern modules.
import { getContext } from '../../../extensions.js';

// Define the path to your extension's folder.
const extensionName = "Reqa";
const extensionFolderPath = `extensions/third-party/${extensionName}`;

// This function runs when the extension is loaded.
jQuery(async () => {
    // Load the HTML file for the UI.
    const windowHtml = await $.get(`${extensionFolderPath}/window.html`);

    // Append the UI to the extensions settings panel.
    $("#extensions_settings").append(windowHtml);

    // Get references to the UI elements using jQuery.
    const getButton = $('#reqa-get-btn');
    const postButton = $('#reqa-post-btn');
    const urlInput = $('#reqa-url');
    const bodyInput = $('#reqa-body');
    const responseOutput = $('#reqa-response');

    // --- Function to handle GET requests ---
    async function handleGetRequest() {
        const url = urlInput.val();
        if (!url) {
            responseOutput.text("Error: URL is required.");
            return;
        }

        responseOutput.text("Sending GET request...");

        try {
            // Use the Fetch API to make the request.
            const response = await fetch(url);
            const data = await response.json();
            // Display the formatted JSON response.
            responseOutput.text(JSON.stringify(data, null, 2));
        } catch (error) {
            responseOutput.text(`Error: ${error.message}`);
        }
    }

    // --- Function to handle POST requests ---
    async function handlePostRequest() {
        const url = urlInput.val();
        const body = bodyInput.val();

        if (!url) {
            responseOutput.text("Error: URL is required.");
            return;
        }

        // Validate that the body is valid JSON before sending.
        try {
            JSON.parse(body);
        } catch (error) {
            responseOutput.text("Error: POST Body is not valid JSON.");
            return;
        }

        responseOutput.text("Sending POST request...");

        try {
            // Use the Fetch API with the POST method and JSON body.
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: body
            });
            const data = await response.json();
            // Display the formatted JSON response.
            responseOutput.text(JSON.stringify(data, null, 2));
        } catch (error) {
            responseOutput.text(`Error: ${error.message}`);
        }
    }

    // --- Attach event listeners to the buttons ---
    getButton.on('click', handleGetRequest);
    postButton.on('click', handlePostRequest);
});