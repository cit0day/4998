// Elements
const animationContainer = document.getElementById('animation-container');
const loader = document.getElementById('loader');
const mainContent = document.getElementById('main-content');
const audio = document.getElementById('background-music');
const interactiveImage = document.getElementById('interactive-image');

// Start interactive image animation on page load
window.onload = () => {
    // Start the rotation and fade-in of the interactive image
    interactiveImage.classList.add('active');

    // After the image animation (3 seconds), remove the animation container entirely
    setTimeout(() => {
        animationContainer.remove(); // This removes the animation container from the DOM
        loader.classList.remove('hidden'); // Show the loader after animation
    }, 5000); // 3 seconds for the animation, matching the CSS duration
};

// Loader interaction and switching to the main content
const animatedText = document.querySelector('.animated-text');

animatedText.addEventListener('click', () => {
    loader.classList.add('hidden'); // Hide the loader
    mainContent.classList.remove('hidden'); // Show the main content
    audio.play(); // Start the background audio
});
