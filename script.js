// Form submission handler
document.getElementById('rsvpForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        guests: document.getElementById('guests').value,
        dietary: document.getElementById('dietary').value,
        message: document.getElementById('message').value,
        timestamp: new Date().toLocaleString('it-IT')
    };
    
    // Save to localStorage (for demo purposes)
    let responses = JSON.parse(localStorage.getItem('rsvpResponses')) || [];
    responses.push(formData);
    localStorage.setItem('rsvpResponses', JSON.stringify(responses));
    
    // Show success message
    showSuccessMessage();
    
    // Reset form
    this.reset();
});

function showSuccessMessage() {
    const form = document.getElementById('rsvpForm');
    const message = document.createElement('div');
    message.className = 'success-message';
    message.innerHTML = `
        <div class="success-content">
            <h3>✓ Conferma Ricevuta!</h3>
            <p>Grazie! La tua conferma è stata registrata.</p>
            <p>Riceverai un'email di conferma a breve.</p>
        </div>
    `;
    
    form.parentNode.insertBefore(message, form);
    
    // Add styling for success message
    const style = document.createElement('style');
    style.textContent = `
        .success-message {
            background: #4caf50;
            color: white;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 20px;
            animation: slideDown 0.5s ease;
        }
        
        .success-content h3 {
            margin-bottom: 10px;
            font-size: 1.3rem;
        }
        
        .success-content p {
            margin: 5px 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: 0.95rem;
        }
        
        @keyframes slideDown {
            from {
                opacity: 0;
                transform: translateY(-10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
    
    // Remove message after 5 seconds
    setTimeout(() => {
        message.remove();
    }, 5000);
}

// Smooth scroll navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add scroll animation for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.event-card, .travel-card, .gallery-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Console message
console.log('%cBenvenuti al nostro matrimonio! 💕', 'font-size: 20px; color: #c41e3a; font-weight: bold;');
