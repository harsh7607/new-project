// ------------ Humburger Menu --------- //

document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menuButton');
    const hamburgerIcon = document.getElementById('hamburgerIcon');
    const closeIcon = document.getElementById('closeIcon');
    const mobileMenu = document.getElementById('mobileMenu');

    // Toggle menu on button click
    menuButton.addEventListener('click', function() {
        const isMenuOpen = mobileMenu.style.display === 'block';
        mobileMenu.style.display = isMenuOpen ? 'none' : 'block';
        hamburgerIcon.style.display = isMenuOpen ? 'block' : 'none';
        closeIcon.style.display = isMenuOpen ? 'none' : 'block';
    });

    // Close menu on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            mobileMenu.style.display = 'none';
            hamburgerIcon.style.display = 'block';
            closeIcon.style.display = 'none';
        }
    });
});





// ------------ Image slide --------- //


let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds
showSlide(currentIndex); // Show the first slide initially