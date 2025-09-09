// ===== INICIALIZACIÓN ===== 
document.addEventListener("DOMContentLoaded", function() {
    // Inicializar AOS
    AOS.init({
        duration: 1000,
        easing: "ease-out-cubic",
        once: true,
        offset: 100
    });

    // Inicializar Particles.js
    initializeParticles();

    // Configurar navegación
    setupNavigation();

    // Configurar smooth scroll
    setupSmoothScroll();

    // Configurar efectos hover
    setupHoverEffects();

    // Configurar animaciones de números
    setupCounterAnimations();
});

// ===== PARTICLES.JS CONFIGURATION =====
function initializeParticles() {
    if (typeof particlesJS !== "undefined") {
        particlesJS("particles-js", {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: "#00d4ff"
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000000"
                    }
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#00d4ff",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 6,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "repulse"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 400,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });
    }
}

// ===== NAVEGACIÓN =====
function setupNavigation() {
    const navbar = document.querySelector(".navbar");
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");

    // Scroll effect
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
            
            // Animate hamburger
            const hamburgers = navToggle.querySelectorAll(".hamburger");
            hamburgers.forEach((line, index) => {
                line.style.transform = navMenu.classList.contains("active") 
                    ? `rotate(${index === 0 ? "45deg" : index === 1 ? "0" : "-45deg"})` 
                    : "rotate(0)";
                line.style.opacity = index === 1 && navMenu.classList.contains("active") ? "0" : "1";
            });
        });
    }

    // Close mobile menu on link click
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (navMenu.classList.contains("active")) {
                navMenu.classList.remove("active");
                const hamburgers = navToggle.querySelectorAll(".hamburger");
                hamburgers.forEach((line, index) => {
                    line.style.transform = "rotate(0)";
                    line.style.opacity = "1";
                });
            }
        });
    });

    // Active link highlighting
    const sections = document.querySelectorAll("section[id]");
    
    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });
}

// ===== SMOOTH SCROLL =====
function setupSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const headerOffset = 80;
                const elementPosition = targetSection.offsetTop;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
}

// ===== HOVER EFFECTS =====
function setupHoverEffects() {
    // Floating icons animation
    const floatingIcons = document.querySelectorAll(".floating-icon");
    
    floatingIcons.forEach(icon => {
        icon.addEventListener("mouseenter", () => {
            icon.style.transform = "translateY(-10px) scale(1.1)";
            icon.style.boxShadow = "0 15px 35px rgba(0, 212, 255, 0.4)";
        });
        
        icon.addEventListener("mouseleave", () => {
            icon.style.transform = "translateY(0) scale(1)";
            icon.style.boxShadow = "0 8px 40px rgba(0, 0, 0, 0.3)";
        });
    });

    // Button effects
    const buttons = document.querySelectorAll(".btn");
    
    buttons.forEach(button => {
        button.addEventListener("mouseenter", () => {
            button.style.transform = "translateY(-2px) scale(1.02)";
        });
        
        button.addEventListener("mouseleave", () => {
            button.style.transform = "translateY(0) scale(1)";
        });
    });

    // Social links effects
    const socialLinks = document.querySelectorAll(".social-link");
    
    socialLinks.forEach(link => {
        link.addEventListener("mouseenter", () => {
            link.style.transform = "translateY(-5px) rotate(5deg)";
        });
        
        link.addEventListener("mouseleave", () => {
            link.style.transform = "translateY(0) rotate(0deg)";
        });
    });
}

// ===== COUNTER ANIMATIONS =====
function setupCounterAnimations() {
    const counters = document.querySelectorAll(".stat-number");
    const observerOptions = {
        threshold: 0.7
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
            }
        });
    }, observerOptions);

    counters.forEach(counter => {
        observer.observe(counter);
    });
}

function animateCounter(element) {
    const target = parseInt(element.getAttribute("data-target"));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ===== PARALLAX EFFECT =====
function setupParallax() {
    window.addEventListener("scroll", () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll("[data-speed]");
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// ===== LOADING ANIMATION =====
window.addEventListener("load", () => {
    // Hide loading screen if exists
    const loader = document.querySelector(".loader");
    if (loader) {
        loader.style.opacity = "0";
        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }

    // Initialize parallax after load
    setupParallax();
});

// ===== UTILITIES =====
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance optimization for scroll events
const optimizedScroll = debounce(() => {
    // Scroll optimizations here
}, 10);

window.addEventListener("scroll", optimizedScroll);

// ===== CONTACT FORM =====
function setupContactForm() {
    const form = document.querySelector(".contact-form");
    
    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            // Show loading state
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
            submitBtn.disabled = true;
            
            // Simulate form submission (replace with actual API call)
            setTimeout(() => {
                // Reset form
                form.reset();
                
                // Reset button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                
                // Show success message
                showNotification("¡Mensaje enviado correctamente!", "success");
            }, 2000);
        });
    }
}

// ===== NOTIFICATIONS =====
function showNotification(message, type = "info") {
    const notification = document.createElement("div");
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === "success" ? "fa-check-circle" : "fa-info-circle"}"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add("show");
    }, 100);
    
    // Hide notification
    setTimeout(() => {
        notification.classList.remove("show");
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Initialize contact form when DOM is ready
document.addEventListener("DOMContentLoaded", setupContactForm);
