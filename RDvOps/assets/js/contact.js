// Contact Form Functionality
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.querySelector('.submit-btn');
    
    if (contactForm && submitBtn) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Validate form
            if (!name || !email || !subject || !message) {
                showNotification('Por favor completa todos los campos', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Por favor ingresa un email válido', 'error');
                return;
            }
            
            // Simulate sending (replace with actual email service)
            submitBtn.innerHTML = '<i class=\"fas fa-spinner fa-spin\"></i> Enviando...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                showNotification('¡Mensaje enviado correctamente! Te responderé pronto.', 'success');
                contactForm.reset();
                submitBtn.innerHTML = '<i class=\"fas fa-paper-plane\"></i> Enviar Mensaje';
                submitBtn.disabled = false;
            }, 2000);
        });
    }
    
    // Email validation
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Notification system
    function showNotification(message, type) {
        // Remove existing notifications
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create notification
        const notification = document.createElement('div');
        notification.className = 
otification notification-;
        notification.innerHTML = 
            <div class=\"notification-content\">
                <i class=\"fas fa-\"></i>
                <span></span>
                <button class=\"notification-close\">
                    <i class=\"fas fa-times\"></i>
                </button>
            </div>
        ;
        
        // Add styles for notification
        const notificationStyles = 
            <style>
                .notification {
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    background: white;
                    color: #333;
                    padding: 0;
                    border-radius: 10px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
                    z-index: 10000;
                    max-width: 400px;
                    animation: slideInRight 0.3s ease;
                }
                
                .notification-success {
                    border-left: 4px solid #28a745;
                }
                
                .notification-error {
                    border-left: 4px solid #dc3545;
                }
                
                .notification-content {
                    display: flex;
                    align-items: center;
                    padding: 15px;
                    gap: 10px;
                }
                
                .notification-content i:first-child {
                    color: inherit;
                    font-size: 1.2rem;
                }
                
                .notification-success .notification-content i:first-child {
                    color: #28a745;
                }
                
                .notification-error .notification-content i:first-child {
                    color: #dc3545;
                }
                
                .notification-close {
                    background: none;
                    border: none;
                    color: #666;
                    cursor: pointer;
                    padding: 5px;
                    margin-left: auto;
                }
                
                .notification-close:hover {
                    color: #333;
                }
                
                @keyframes slideInRight {
                    from {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
                
                @keyframes slideOutRight {
                    from {
                        transform: translateX(0);
                        opacity: 1;
                    }
                    to {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                }
            </style>
        ;
        
        // Add styles if not already added
        if (!document.querySelector('#notification-styles')) {
            const styleSheet = document.createElement('div');
            styleSheet.id = 'notification-styles';
            styleSheet.innerHTML = notificationStyles;
            document.head.appendChild(styleSheet);
        }
        
        // Add to body
        document.body.appendChild(notification);
        
        // Close button functionality
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        });
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentElement) {
                notification.style.animation = 'slideOutRight 0.3s ease';
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
    }
});

// Contact method click tracking (optional analytics)
document.addEventListener('DOMContentLoaded', function() {
    const contactMethods = document.querySelectorAll('.contact-method');
    contactMethods.forEach(method => {
        method.addEventListener('click', function() {
            const methodType = this.querySelector('.contact-details h4').textContent;
            console.log(Contact method clicked: );
            // Add analytics tracking here if needed
        });
    });
});
