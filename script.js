document.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const zoomImage = document.getElementById('zoom-image');
    const scrollDown = document.querySelector('.scroll-down');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
        header.classList.add('small');
        scrollDown.classList.add('hidden'); // Hide the arrow
    } else {
        header.classList.remove('small');
        scrollDown.classList.remove('hidden'); // Show the arrow
    }

    // Calculate zoom level based on scroll position
    const maxZoom = 1.5; // Maximum zoom level
    const minZoom = 1; // Minimum zoom level
    const zoomLevel = maxZoom - (scrollPosition / 1000); // Adjust the divisor to control zoom speed

    // Apply zoom level to the image
    zoomImage.style.transform = `scale(${Math.max(minZoom, zoomLevel)})`;
});