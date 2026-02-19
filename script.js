document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Reveal Animations on Scroll
    const observerOptions = {
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });

    // Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Contact Form submission (Webhook connection)
    const contactForm = document.querySelector('.contact-form');
    const webhookUrl = 'https://insider-stunning.app.n8n.cloud/webhook/632c2c52-f63c-4a05-8c27-ca7f7cd24a1c';

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const submitBtn = document.getElementById('submitForm');
            const originalText = submitBtn.innerText;

            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());

            submitBtn.disabled = true;
            submitBtn.innerText = 'Enviando...';

            try {
                // Usamos URLSearchParams y mode: no-cors para maximizar compatibilidad local (protocolo file://)
                await fetch(webhookUrl, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: new URLSearchParams(data).toString()
                });

                // Con no-cors no podemos validar response.ok, pero el envío se realiza en la mayoría de los casos
                alert('¡Gracias! Tu mensaje ha sido enviado correctamente a Hermanos Asesores.');
                contactForm.reset();

            } catch (error) {
                console.error('Error al enviar:', error);
                alert('Hubo un problema al enviar el formulario. Por favor, inténtalo de nuevo.');
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerText = originalText;
            }
        });
    }

    // Flip cards handling on mobile (tap instead of hover)
    const cards = document.querySelectorAll('.card-wrapper');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                card.querySelector('.service-card').style.transform =
                    card.querySelector('.service-card').style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
            }
        });
    });
});
