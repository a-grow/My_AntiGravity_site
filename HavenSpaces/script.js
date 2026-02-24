document.addEventListener('DOMContentLoaded', () => {
    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Section Reveals on Scroll
    const sections = document.querySelectorAll('.section');
    
    // If reduced motion is preferred, immediately show all elements without transition
    if (prefersReducedMotion) {
        sections.forEach(section => {
            section.classList.add('active');
        });
    } else {
        const revealOptions = {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        };

        const revealOnScroll = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, revealOptions);

        sections.forEach(section => revealOnScroll.observe(section));
    }

    // 2. Before/After Slider Logic
    const sliders = document.querySelectorAll('.before-after-slider');
    
    sliders.forEach(slider => {
        const input = slider.querySelector('.slider-input');
        const handle = slider.querySelector('.slider-handle');
        const imgBefore = slider.querySelector('.img-before');

        slider.addEventListener('input', (e) => {
            const value = e.target.value;
            // The before image is on top, revealing the after image underneath as it shrinks
            imgBefore.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
            handle.style.left = `${value}%`;
        });
    });
});
