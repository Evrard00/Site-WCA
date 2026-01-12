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

                <!-- Navigation Links -->
                <nav class="nav">
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
    }
}

// Load navbar when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadNavbar);
} else {
    loadNavbar();
}