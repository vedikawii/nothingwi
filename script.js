// script.js

// Function to handle button click events
function selectOption(option) {
    if (option === 1) {
        window.location.href = 'page2.html'; // Redirect to page 2
    } else if (option === 2) {
        window.location.href = 'page3.html'; // Redirect to page 3
    } else {
        alert('Invalid option!');
    }
}

// Disable option 2 button on page 3
document.getElementById('no-option').addEventListener('mouseover', function() {
    this.disabled = true;
});
