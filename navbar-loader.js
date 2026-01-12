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
                <a href="${ctaLink}" class="btn btn-pill btn-contact">
                    <span>${ctaText}</span>
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