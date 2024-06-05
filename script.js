document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('footer .btn');
    const pages = document.querySelectorAll('.page');

    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetPage = document.getElementById(targetId);

            pages.forEach(page => {
                page.classList.remove('active');
            });

            targetPage.classList.add('active');
        });
    });

    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        slides.forEach(slide => slide.style.display = 'none');
        slides[index].style.display = 'block';
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    // Start the auto-sliding functionality
    slideInterval = setInterval(nextSlide, 1000); // Change 3000 to adjust the slide interval in milliseconds

    showSlide(currentSlide);

    const background = document.querySelector('.dynamic-background');
    const currentTime = new Date().getHours();
    if (currentTime >= 6 && currentTime < 18) {
        background.style.backgroundImage = 'url("day-background.jpg")';
    } else {
        background.style.backgroundImage = 'url("night-background.jpg")';
    }

    const workButtons = document.querySelectorAll('.work-btn');

    workButtons.forEach(button => {
        button.addEventListener('click', function() {
            const sectionId = this.getAttribute('data-section');
            const targetSection = document.getElementById(sectionId);

            pages.forEach(page => {
                page.classList.remove('active');
            });

            targetSection.classList.add('active');
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById('background-music');
    var musicControl = document.getElementById('music-control');
    
    // Automatically play the music when the page loads
    audio.play();

    // Toggle play/pause on button click
    window.toggleMusic = function() {
        if (audio.paused) {
            audio.play();
            musicControl.textContent = 'Pause Music';
        } else {
            audio.pause();
            musicControl.textContent = 'Play Music';
        }
    }
});