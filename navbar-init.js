// Common navbar initialization for all pages
document.addEventListener('DOMContentLoaded', function() {
    // Add nav-active class to header for pages other than home
    const header = document.querySelector('.header');
    if (header) {
        header.classList.add('nav-active');
    }
    
    // Initialize smooth scroll for navigation links
    initNavigation();
});

/**
 * Gestion de la navigation smooth scroll
 */
function initNavigation() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Éviter de traiter les liens vides
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}
