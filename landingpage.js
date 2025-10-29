// Custom JavaScript for additional functionality

// Wait for the DOM to fully load before executing the script
document.addEventListener('DOMContentLoaded', function() {
    // Select all anchor links that link to sections within the page
    const links = document.querySelectorAll('a[href^="#"]');
    // Loop through each link
    links.forEach(link => {
        // Add a click event listener to each link
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent the default anchor click behavior
            const targetId = this.getAttribute('href'); // Get the target section ID
            const targetElement = document.querySelector(targetId); // Select the target element
            // Scroll smoothly to the target element
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
