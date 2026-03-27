//Jamies js kode 
// Brugt AI til hjælp: DeepSeek AI, Prompts ligger inde på afleveringsmapppen
// W3 Schools er brugt til at forstå og huske ord fra AI svar: this, constructor, Carousel Example, Carousel Options, JavaScript Booleans, HTML DOM Element classList



// Nye karrusel

// Variabler
let slides = [];
let currentIndex = 0;
let autoInterval = null;
const intervalTid = 4000;

// DOM
let container, prevBtn, nextBtn, dotsContainer;

// prikkerne der bliver lavet
function createDots() {
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('div');
        dot.classList.add('hero__dot');
        dot.addEventListener('click', function() { goToSlide(i); });
        dotsContainer.appendChild(dot);
    }
}

// Opdaterer prikker (markerer aktiv)
function updateDots() {
    const dots = dotsContainer.querySelectorAll('.hero__dot');
    for (let i = 0; i < dots.length; i++) {
        if (i === currentIndex) {
            dots[i].classList.add('active');
        } else {
            dots[i].classList.remove('active');
        }
    }
}

// Opdaterer slides for at vise det aktive slide synlighed ^
function updateSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    slides[currentIndex].classList.add('active');
    updateDots();
}

// det næste slide -----
function nextSlide() {
    if (currentIndex + 1 >= slides.length) {
        currentIndex = 0;
    } else {
        currentIndex = currentIndex + 1;
    }
    updateSlides();
    resetAutoSlide();
}

// Forrige slide -----
function prevSlide() {
    if (currentIndex - 1 < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = currentIndex - 1;
    }
    updateSlides();
    resetAutoSlide();
}

// Går til bestemt slide
function goToSlide(index) {
    currentIndex = index;
    updateSlides();
    resetAutoSlide();
}

// Automatiske skift
function startAutoSlide() {
    if (autoInterval !== null) return;
    autoInterval = setInterval(nextSlide, intervalTid);
}

function stopAutoSlide() {
    if (autoInterval !== null) {
        clearInterval(autoInterval);
        autoInterval = null;
    }
}

function resetAutoSlide() {
    stopAutoSlide();
    startAutoSlide();
}

// touch og swipe til mobil
function setupTouchEvents() {
    let touchStartX = 0;
    
    container.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    container.addEventListener('touchend', function(e) {
        const touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    });
}

// Starter det hele
function startCarousel() {
    container = document.querySelector('.hero__carousel-container');
    if (!container) return;
    
    slides = Array.from(container.querySelectorAll('.hero__slide'));
    prevBtn = container.querySelector('.hero__nav--prev');
    nextBtn = container.querySelector('.hero__nav--next');
    dotsContainer = container.querySelector('.hero__dots');
    
    createDots();
    updateSlides();
    startAutoSlide();
    
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    
    container.addEventListener('mouseenter', stopAutoSlide);
    container.addEventListener('mouseleave', startAutoSlide);
    
    setupTouchEvents();
}

// Vent på siden indlæses
document.addEventListener('DOMContentLoaded', startCarousel);