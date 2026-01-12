// Load footer on all pages
function loadFooter() {
    const footerHTML = `<footer class="footer">
    <div class="footer-wrapper">
        <div class="footer-content">
            <!-- Column 1: Logo & Description -->
            <div class="footer-column">
                <div class="footer-logo-wrapper">
                    <img src="WCA.png" alt="WCA Logo" class="footer-logo-img">
                </div>
                <p class="footer-description">Le professionnalisme à votre service. Expertise en distribution de produits pétroliers et marchandises diverses depuis 2014.</p>
                <div class="footer-social">
                    <a href="https://www.instagram.com/wca_logistics?igsh=bHB6NjBqcm81Y3ht" class="footer-social-icon" title="Instagram">
                        <svg viewBox="0 0 24 24" fill="white"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2m-.5 2C5.1 4 3.5 5.6 3.5 7.3v9.4c0 1.7 1.6 3.3 3.3 3.3h9.4c1.7 0 3.3-1.6 3.3-3.3V7.3c0-1.7-1.6-3.3-3.3-3.3H7.3m11.6 1.6c.6 0 1.2.6 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.6-1.2-1.2.6-1.2 1.2-1.2M12 7c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5m0 1.5c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5z"/></svg>
                    </a>
                    <a href="#" class="footer-social-icon" title="Facebook">
                        <svg viewBox="0 0 24 24" fill="white"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    </a>
                </div>
            </div>

            <!-- Column 2: Quick Links -->
            <div class="footer-column">
                <h4 class="footer-title">Liens Rapides</h4>
                <ul class="footer-menu">
                    <li><a href="index.html#about">À propos de nous</a></li>
                    <li><a href="index.html#services">Nos Services</a></li>
                    <li><a href="index.html#commitments">Nos Engagements</a></li>
                    <li><a href="careers.html">Carrières</a></li>
                </ul>
            </div>

            <!-- Column 3: Contact Info -->
            <div class="footer-column">
                <h4 class="footer-title">Contact</h4>
                <div class="footer-contact">
                    <p class="footer-label">Adresse :</p>
                    <p class="footer-text">Abidjan, Côte d'Ivoire</p>
                    
                    <p class="footer-label">Téléphone :</p>
                    <p class="footer-text"><a href="tel:+22524000000">+225 22 00 00 00</a></p>
                    
                    <p class="footer-label">Email :</p>
                    <p class="footer-text"><a href="mailto:contact@wca-ci.com">contact@wca-ci.com</a></p>
                </div>
            </div>

            <!-- Column 4: Newsletter -->
            <div class="footer-column">
                <h4 class="footer-title">Infolettre</h4>
                <p class="footer-newsletter-text">Recevez nos actualités logistiques</p>
                <form class="newsletter-form">
                    <input type="email" placeholder="Votre email" class="newsletter-input" required>
                    <button type="submit" class="newsletter-btn">S'inscrire</button>
                </form>
                <div class="footer-badges">
                    <div class="badge">
                        <span class="badge-icon">🛡️</span>
                        <span>100% Géolocalisé</span>
                    </div>
                    <div class="badge">
                        <span class="badge-icon">✓</span>
                        <span>Maintenance Certifiée</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer Bottom -->
        <div class="footer-bottom">
            <p>&copy; 2014-2026 West Coast Atlantic (WCA). Tous droits réservés.</p>
        </div>
    </div>
</footer>`;

    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        footerContainer.innerHTML = footerHTML;
    }
}

// Load footer when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadFooter);
} else {
    loadFooter();
}