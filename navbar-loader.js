// Load navbar on all pages
function loadNavbar() {
    // Déterminer le texte et le lien du bouton CTA selon la page
    let ctaText = 'Contactez-nous';
    let ctaLink = 'contact.html';
    
    if (window.location.pathname.includes('contact.html')) {
        ctaText = 'Demandez un devis';
        ctaLink = 'quote.html';
    } else if (window.location.pathname.includes('quote.html')) {
        ctaText = 'Contactez-nous';
        ctaLink = 'contact.html';
    }
    
    const navbarHTML = `<header class="header nav-active">
        <div class="navbar-pill">
            <div class="navbar-content">
                <!-- Logo -->
                <a href="index.html" class="logo">
                    <img src="WCA.png" alt="WCA Logo" class="logo-img">
                </a>

                <!-- Hamburger Menu Button -->
                <button class="hamburger" id="hamburger" aria-label="Menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <!-- Navigation Links -->
                <nav class="nav" id="navMenu">
                    <ul class="nav-list">
                        <li><a href="index.html#about" class="nav-link">À propos</a></li>
                        <li><a href="index.html#services" class="nav-link">Services</a></li>
                        <li><a href="index.html#fleet" class="nav-link">Notre Flotte</a></li>
                        <li><a href="index.html#commitments" class="nav-link">Engagements</a></li>
                    </ul>
                </nav>

                <!-- CTA Button -->
                <a href="${ctaLink}" class="btn btn-pill btn-contact" title="${ctaText}">
                    <span class="btn-text-desktop">${ctaText}</span>
                    <svg class="btn-icon-mobile" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: none;">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                </a>
            </div>
        </div>
    </header>`;

    const navbarContainer = document.getElementById('navbar-container');
    if (navbarContainer) {
        navbarContainer.innerHTML = navbarHTML;
        
        // Initialize hamburger menu functionality
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('navMenu');
        
        if (hamburger && navMenu) {
            hamburger.addEventListener('click', function() {
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
            });
            
            // Close menu when a link is clicked
            const navLinks = navMenu.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.addEventListener('click', function() {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                });
            });
        }
    }
}

// Load navbar when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadNavbar);
} else {
    loadNavbar();
}