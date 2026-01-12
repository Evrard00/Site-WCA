/* ========================
   INITIALIZATION & EVENTS
   ======================== */

console.log('Script.js chargé');

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded déclenché');
    initHeaderScroll();
    initNavigation();
    initScrollIndicator();
    initAboutToggle();
    initScrollButton();
    initModals();
});

/**
 * Gestion du toggle "Lire plus / Réduire" dans la section À propos
 */
function initAboutToggle() {
    const toggleBtn = document.querySelector('.about-toggle-btn');
    const expandableText = document.querySelector('.about-text-expandable');
    
    console.log('initAboutToggle called', { toggleBtn, expandableText });
    
    if (!toggleBtn || !expandableText) {
        console.warn('Éléments non trouvés pour le toggle');
        return;
    }
    
    toggleBtn.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Toggle button clicked');
        const isExpanded = this.dataset.expanded === 'true';
        
        if (isExpanded) {
            // Réduire
            expandableText.classList.remove('expanded');
            toggleBtn.dataset.expanded = 'false';
            toggleBtn.classList.remove('expanded');
            toggleBtn.querySelector('.btn-text').textContent = 'Lire Plus';
        } else {
            // Dérouler
            expandableText.classList.add('expanded');
            toggleBtn.dataset.expanded = 'true';
            toggleBtn.classList.add('expanded');
            toggleBtn.querySelector('.btn-text').textContent = 'Réduire';
        }
    });
}


function initScrollIndicator() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (!scrollIndicator) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 150) {
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.pointerEvents = 'none';
            scrollIndicator.style.transition = 'opacity 0.4s ease';
        } else {
            scrollIndicator.style.opacity = '1';
            scrollIndicator.style.pointerEvents = 'auto';
            scrollIndicator.style.transition = 'opacity 0.4s ease';
        }
    });
}

/**
 * Gestion du header au scroll
 */
function initHeaderScroll() {
    const header = document.querySelector('.header');
    const heroSection = document.querySelector('#hero');
    
    if (!heroSection) return;
    
    // Fonction pour vérifier si on est dans le hero
    function updateHeaderClass() {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const scrollY = window.scrollY;
        
        if (scrollY >= heroBottom) {
            header.classList.add('nav-active');
        } else {
            header.classList.remove('nav-active');
        }
    }
    
    // Écouter le scroll
    window.addEventListener('scroll', updateHeaderClass, { passive: true });
    
    // Vérifier au chargement
    updateHeaderClass();
}

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

/**
 * Gestion du bouton de scroll (flèche flottante)
 */
function initScrollButton() {
    const scrollButton = document.getElementById('scrollButton');
    
    if (!scrollButton) return;
    
    // Afficher/masquer et changer l'icône selon la position
    window.addEventListener('scroll', () => {
        const footer = document.querySelector('.footer');
        const footerTop = footer.offsetTop;
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;
        
        // Afficher le bouton après avoir scrollé
        if (scrollY > 500) {
            scrollButton.classList.add('active');
        } else {
            scrollButton.classList.remove('active');
        }
        
        // Changer l'icône si on est près du footer
        if (scrollY + windowHeight > footerTop - 200) {
            // Près du footer, afficher flèche vers le haut
            scrollButton.classList.add('scroll-up');
        } else {
            // Loin du footer, afficher flèche vers le bas
            scrollButton.classList.remove('scroll-up');
        }
    });
    
    // Clic sur le bouton
    scrollButton.addEventListener('click', () => {
        const footer = document.querySelector('.footer');
        const footerTop = footer.offsetTop;
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;
        
        if (scrollY + windowHeight > footerTop - 200) {
            // Si près du footer, aller en haut
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            // Sinon, aller au footer
            window.scrollTo({
                top: footerTop,
                behavior: 'smooth'
            });
        }
    });
}

/**
 * Tracking des interactions
 */
function trackEvent(eventName, eventData) {
    // Google Analytics ou autre système
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventData);
    }
}

/**
 * Gestion des modals de contact et devis
 */
function initModals() {
    const contactBtn = document.querySelector('[href="#contact"]');
    const contactModal = document.getElementById('contactModal');
    const contactForm = document.getElementById('contactForm');
    const contactSuccess = document.getElementById('contactSuccess');

    const quoteButtons = document.querySelectorAll('[data-modal="quote"]');
    const quoteModal = document.getElementById('quoteModal');
    const quoteForm = document.getElementById('quoteForm');
    const quoteSuccess = document.getElementById('quoteSuccess');

    // Ouvrir modal Contactez-nous
    if (contactBtn && contactModal) {
        contactBtn.addEventListener('click', function(e) {
            e.preventDefault();
            openModal(contactModal);
            contactForm.style.display = 'flex';
            contactSuccess.style.display = 'none';
        });
    }

    // Ouvrir modal Demandez un devis
    quoteButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            openModal(quoteModal);
            quoteForm.style.display = 'flex';
            quoteSuccess.style.display = 'none';
        });
    });

    // Fermer les modals
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            closeModal(modal);
        });
    });

    // Fermer au clic sur overlay
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', function() {
            const modal = this.closest('.modal');
            closeModal(modal);
        });
    });

    // Soumettre formulaire contact
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Contact form submitted');
            
            // Validation basique
            const nom = this.querySelector('input[placeholder*="Nom"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const societe = this.querySelector('input[placeholder*="Société"]').value;
            const telephone = this.querySelector('input[type="tel"]').value;
            const message = this.querySelector('textarea').value;
            
            if (nom && email && societe && telephone && message) {
                // Masquer formulaire et afficher message de succès
                contactForm.style.display = 'none';
                contactSuccess.style.display = 'block';
                
                // Optionnel: fermer modal après 3 secondes
                setTimeout(() => {
                    closeModal(contactModal);
                }, 3000);
            }
        });
    }

    // Soumettre formulaire devis
    if (quoteForm) {
        quoteForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Quote form submitted');
            
            // Validation basique
            const nom = this.querySelector('input[placeholder*="Nom"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const societe = this.querySelector('input[placeholder*="Société"]').value;
            const telephone = this.querySelector('input[type="tel"]').value;
            const typeService = this.querySelector('select').value;
            
            if (nom && email && societe && telephone && typeService) {
                // Masquer formulaire et afficher message de succès
                quoteForm.style.display = 'none';
                quoteSuccess.style.display = 'block';
                
                // Optionnel: fermer modal après 3 secondes
                setTimeout(() => {
                    closeModal(quoteModal);
                }, 3000);
            }
        });
    }

    // Fermer modal avec Échap
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const activeModal = document.querySelector('.modal.active');
            if (activeModal) {
                closeModal(activeModal);
            }
        }
    });
}

function openModal(modal) {
    if (!modal) return;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
}