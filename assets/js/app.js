// KPM Marketing Website JavaScript
(function() {
    'use strict';
    
    // Mobile menu toggle functionality
    function initMobileMenu() {
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        const mobileMenu = document.querySelector('.mobile-menu');
        
        if (mobileMenuToggle && mobileMenu) {
            mobileMenuToggle.addEventListener('click', function() {
                mobileMenu.classList.toggle('active');
                
                // Update button aria-expanded for accessibility
                const isExpanded = mobileMenu.classList.contains('active');
                mobileMenuToggle.setAttribute('aria-expanded', isExpanded);
                
                // Animate hamburger menu icon
                const spans = mobileMenuToggle.querySelectorAll('span');
                if (isExpanded) {
                    spans[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                    spans[1].style.opacity = '0';
                    spans[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
                } else {
                    spans[0].style.transform = 'none';
                    spans[1].style.opacity = '1';
                    spans[2].style.transform = 'none';
                }
            });
            
            // Close mobile menu when clicking on a link
            const mobileMenuLinks = mobileMenu.querySelectorAll('a');
            mobileMenuLinks.forEach(link => {
                link.addEventListener('click', function() {
                    mobileMenu.classList.remove('active');
                    mobileMenuToggle.setAttribute('aria-expanded', 'false');
                    
                    // Reset hamburger icon
                    const spans = mobileMenuToggle.querySelectorAll('span');
                    spans[0].style.transform = 'none';
                    spans[1].style.opacity = '1';
                    spans[2].style.transform = 'none';
                });
            });
            
            // Close mobile menu when clicking outside
            document.addEventListener('click', function(event) {
                if (!mobileMenuToggle.contains(event.target) && 
                    !mobileMenu.contains(event.target) && 
                    mobileMenu.classList.contains('active')) {
                    mobileMenu.classList.remove('active');
                    mobileMenuToggle.setAttribute('aria-expanded', 'false');
                    
                    // Reset hamburger icon
                    const spans = mobileMenuToggle.querySelectorAll('span');
                    spans[0].style.transform = 'none';
                    spans[1].style.opacity = '1';
                    spans[2].style.transform = 'none';
                }
            });
        }
    }
    
    // Smooth scrolling for anchor links
    function initSmoothScrolling() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    // Header scroll effect
    function initHeaderScrollEffect() {
        const header = document.querySelector('.header');
        let lastScrollTop = 0;
        
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.98)';
                header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.boxShadow = 'none';
            }
            
            lastScrollTop = scrollTop;
        });
    }
    
    // Contact form handling (if we add one later)
    function initContactForm() {
        const contactForm = document.querySelector('#contact-form');
        
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Basic form validation
                const formData = new FormData(contactForm);
                const name = formData.get('name');
                const email = formData.get('email');
                const message = formData.get('message');
                
                if (!name || !email || !message) {
                    alert('Please fill in all required fields.');
                    return;
                }
                
                // Email validation
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    alert('Please enter a valid email address.');
                    return;
                }
                
                // In a real implementation, you would send this data to a server
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
            });
        }
    }
    
    // Intersection Observer for scroll animations
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        // Observe elements that should animate on scroll
        const animateElements = document.querySelectorAll('.card, .section-title, .section-subtitle');
        animateElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }
    
    // Update copyright year
    function updateCopyrightYear() {
        const yearElement = document.querySelector('#current-year');
        if (yearElement) {
            yearElement.textContent = new Date().getFullYear();
        }
    }
    
    // Announcement banner functionality
    function initAnnouncementBanner() {
        const banner = document.querySelector('#announcement-banner');
        const closeButton = document.querySelector('.announcement__close');
        const storageKey = 'kpm_announcement_v1';
        
        if (!banner || !closeButton) return;
        
        // Check if banner was previously dismissed
        const isDismissed = localStorage.getItem(storageKey) === 'true';
        
        if (isDismissed) {
            banner.classList.add('hidden');
            return;
        }
        
        // Handle dismiss button click
        function dismissBanner() {
            banner.classList.add('hidden');
            localStorage.setItem(storageKey, 'true');
        }
        
        // Add click event listener
        closeButton.addEventListener('click', dismissBanner);
        
        // Add keyboard event listener for accessibility
        closeButton.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                dismissBanner();
            }
        });
        
        // Handle scroll to products CTA
        const productsLink = banner.querySelector('.announcement__cta--products');
        if (productsLink) {
            productsLink.addEventListener('click', function(e) {
                e.preventDefault();
                const productsSection = document.getElementById('products');
                if (productsSection) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const bannerHeight = banner.classList.contains('hidden') ? 0 : banner.offsetHeight;
                    const targetPosition = productsSection.offsetTop - headerHeight - bannerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        }
    }
    
    // Initialize all functionality when DOM is loaded
    function init() {
        initMobileMenu();
        initSmoothScrolling();
        initHeaderScrollEffect();
        initContactForm();
        initScrollAnimations();
        updateCopyrightYear();
        initAnnouncementBanner();
    }
    
    // Initialize when DOM is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
})();