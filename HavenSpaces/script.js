document.addEventListener('DOMContentLoaded', () => {
    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Section Reveals on Scroll
    const sections = document.querySelectorAll('.section');

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
        const imgAfter = slider.querySelector('.img-after'); // clip AFTER image

        // Initialize handle to match input value
        if (input) {
            handle.style.left = `${input.value}%`;
            if (imgAfter) {
                imgAfter.style.clipPath = `inset(0 ${100 - input.value}% 0 0)`;
            }
        }

        input.addEventListener('input', (e) => {
            const value = e.target.value;
            // Clip the AFTER image to reveal/hide it over the BEFORE image
            if (imgAfter) {
                imgAfter.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
            }
            // Move the handle to match slider position
            if (handle) {
                handle.style.left = `${value}%`;
            }
        });

        const button = slider.querySelector('.slider-button');
        if (button) {
            // Hover glow effects
            input.addEventListener('mouseenter', () => button.classList.add('dragging'));
            input.addEventListener('mouseleave', () => button.classList.remove('dragging'));

            // Drag glow and bounce logic
            input.addEventListener('mousedown', () => button.classList.add('dragging'));
            input.addEventListener('touchstart', () => button.classList.add('dragging'));

            const triggerBounce = () => {
                button.classList.remove('dragging');
                button.classList.add('bounce');
                setTimeout(() => {
                    button.classList.remove('bounce');
                }, 400); // matches animation duration
            };

            input.addEventListener('mouseup', triggerBounce);
            input.addEventListener('touchend', triggerBounce);
        }

        const tagline = slider.querySelector('.slider-tagline');
        if (tagline) {
            const hideTagline = () => {
                tagline.classList.add('fade-out');
                // Remove listeners so it only triggers once
                input.removeEventListener('mousedown', hideTagline);
                input.removeEventListener('touchstart', hideTagline);
            };

            input.addEventListener('mousedown', hideTagline);
            input.addEventListener('touchstart', hideTagline);
        }
    });

    // 3. Parallax Background Zoom Effect
    const heroBgs = document.querySelectorAll('.hero-bg');
    let scrollTimeout;

    if (heroBgs.length > 0 && !prefersReducedMotion) {
        window.addEventListener('scroll', () => {
            // Apply zoom while scrolling
            heroBgs.forEach(bg => {
                bg.style.transform = 'scale(1.05)';
            });

            // Clear previous timeout and set a new one to revert scale when scroll stops
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                heroBgs.forEach(bg => {
                    bg.style.transform = 'scale(1.0)';
                });
            }, 150); // 150ms after scroll stops
        }, { passive: true });
    }
});

