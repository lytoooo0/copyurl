// Create a button element
var button = document.createElement("button");
button.textContent = "URL";
button.id = "floatingButton"; // Assign an ID for styling

// Add a click event listener to the button
button.addEventListener("click", function() {
    var url = window.location.href; // Get the current URL
    copyToClipboard(url); // Call the function to copy to clipboard
    button.textContent = "URL";
});

// Append the button to the body of the document
document.body.appendChild(button);

// Function to copy text to clipboard
function copyToClipboard(text) {
    var tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    button.textContent = "Copied";
}
