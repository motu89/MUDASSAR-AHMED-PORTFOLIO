// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Scroll to top button functionality
    const scrollTopBtn = document.getElementById('scroll-top');
    
    // Show/hide scroll to top button based on scroll position
    const toggleScrollTopBtn = () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    };
    
    // Scroll to top when button is clicked
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Listen for scroll events to toggle button visibility
    window.addEventListener('scroll', toggleScrollTopBtn);
    toggleScrollTopBtn(); // Initial check
    // Set theme to dark by default
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    
    // Progress bar functionality
    const progressBar = document.getElementById('progress-bar');
    
    const updateProgressBar = () => {
        const scrollPosition = window.scrollY;
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        const progress = (scrollPosition / totalHeight) * 100;
        progressBar.style.width = progress + '%';
    };
    
    window.addEventListener('scroll', updateProgressBar);
    updateProgressBar(); // Initial call
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Scroll animations for sections
    const animateOnScroll = function() {
        const sections = [
            document.querySelector('.about-content'),
            document.querySelector('.skills-container')
        ];
        
        // Animate all education items
        const educationItems = document.querySelectorAll('.education-item');
        
        const projectCards = document.querySelectorAll('.project-card');
        const timelineItems = document.querySelectorAll('.timeline-item');
        const contactItems = document.querySelectorAll('.contact-item');
        const socialLinks = document.querySelector('.social-links');
        
        // Function to check if element is in viewport
        const isInViewport = function(element) {
            if (!element) return false;
            const rect = element.getBoundingClientRect();
            return (
                rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
                rect.bottom >= 0
            );
        };
        
        // Animate sections when they come into view
        sections.forEach(section => {
            if (section && isInViewport(section)) {
                section.classList.add('animate');
            }
        });
        
        // Animate education items with delay
        educationItems.forEach((item, index) => {
            if (isInViewport(item)) {
                setTimeout(() => {
                    item.classList.add('animate');
                }, index * 150);
            }
        });
        
        // Animate project cards with delay
        projectCards.forEach((card, index) => {
            if (isInViewport(card)) {
                setTimeout(() => {
                    card.classList.add('animate');
                }, index * 100);
            }
        });
        
        // Animate timeline items with delay
        timelineItems.forEach((item, index) => {
            if (isInViewport(item)) {
                setTimeout(() => {
                    item.classList.add('animate');
                }, index * 200);
            }
        });
        
        // Animate contact items with delay
        contactItems.forEach((item, index) => {
            if (isInViewport(item)) {
                setTimeout(() => {
                    item.classList.add('animate');
                }, index * 150);
            }
        });
        
        // Animate social links
        if (socialLinks && isInViewport(socialLinks)) {
            socialLinks.classList.add('animate');
        }
    };
    
    // Run animation check on load and scroll
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('resize', animateOnScroll);
    
    // Initial check for animations
    setTimeout(animateOnScroll, 100);
    
    // Add active class to navigation links based on scroll position
    const updateActiveNavLink = function() {
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.scrollY;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('a[href^="#"]').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };
    
    window.addEventListener('scroll', updateActiveNavLink);
    
    // Add pulse animation to WhatsApp button
    const whatsappBtn = document.querySelector('.whatsapp-btn');
    if (whatsappBtn) {
        setInterval(() => {
            whatsappBtn.classList.add('pulse');
            setTimeout(() => {
                whatsappBtn.classList.remove('pulse');
            }, 1000);
        }, 3000);
    }
    
    // Add CSS for pulse animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
        }
        
        .pulse {
            animation: pulse 1s ease-in-out;
        }
    `;
    document.head.appendChild(style);
});
