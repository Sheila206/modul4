//Jamies js kode 
//inspireret af youtube video:"[titel]" [link]
// Brugt AI til hjælp: DeepSeek AI, Prompts ligger inde på afleveringsmapppen
// W3 Schools: 
//Carousel klassen
class Carousel {
    constructor(container) {
        this.container = container;
        this.slides = Array.from(container.querySelectorAll('.hero__slide'));
        this.prevBtn = container.querySelector('.hero__nav--prev');
        this.nextBtn = container.querySelector('.hero__nav--next');
        this.dotsContainer = container.querySelector('.hero__dots');
        
        this.currentIndex = 0;
        this.interval = null;
        this.intervalTime = 3000; // tid
        
        this.init();
    }
    
    init() {
        // Opret indikatorprikker
        this.createDots();
        
        // Opdater visning
        this.updateSlides();
        
        // Start automatisk skift
        this.startAutoSlide();
        
        // Tilføjer event listeners
        this.prevBtn.addEventListener('click', () => this.prevSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());
        
        // Stop auto-slide når musen er over carousel
        this.container.addEventListener('mouseenter', () => this.stopAutoSlide());
        this.container.addEventListener('mouseleave', () => this.startAutoSlide());
        
        // Touch support til mobil
        this.setupTouchEvents();
    }
    
    createDots() {
        this.slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('hero__dot');
            dot.addEventListener('click', () => this.goToSlide(index));
            this.dotsContainer.appendChild(dot);
        });
    }
    
    updateDots() {
        const dots = this.dotsContainer.querySelectorAll('.hero__dot');
        dots.forEach((dot, index) => {
            if (index === this.currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }
    
    updateSlides() {
        // Skjuler alle slides
        this.slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Vis detnuværende slide
        this.slides[this.currentIndex].classList.add('active');
        
        // Opdaterer dots
        this.updateDots();
    }
    
    nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        this.updateSlides();
        this.resetAutoSlide();
    }
    
    prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        this.updateSlides();
        this.resetAutoSlide();
    }
    
    goToSlide(index) {
        this.currentIndex = index;
        this.updateSlides();
        this.resetAutoSlide();
    }
    
    startAutoSlide() {
        if (this.interval) return;
        this.interval = setInterval(() => {
            this.nextSlide();
        }, this.intervalTime);
    }
    
    stopAutoSlide() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }
    
    resetAutoSlide() {
        this.stopAutoSlide();
        this.startAutoSlide();
    }
    
    setupTouchEvents() {
        let touchStartX = 0;
        let touchEndX = 0;
        
        this.container.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        this.container.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe(touchStartX, touchEndX);
        });
    }
    
    handleSwipe(start, end) {
        const swipeThreshold = 50;
        const diff = start - end;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe venstre
                this.nextSlide();
            } else {
                // Swipe til højre
                this.prevSlide();
            }
        }
    }
}

// Initialiser carousel når DOM er loaded
document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.querySelector('.hero__carousel-container');
    if (carouselContainer) {
        new Carousel(carouselContainer);
    }
});