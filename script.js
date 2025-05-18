// Loading Screen Animation
window.addEventListener('load', function() {
    const loader = document.querySelector('.loader');
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 1500);
});

// Background Particles Animation
function createParticles() {
    const bgAnimation = document.getElementById('bg-animation');
    const particleCount = window.innerWidth < 768 ? 30 : 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('bg-particle');
        
        // Random properties
        const size = Math.random() * 5 + 1;
        const posX = Math.random() * window.innerWidth;
        const delay = Math.random() * 5;
        const duration = Math.random() * 10 + 10;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}px`;
        particle.style.bottom = `-10px`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        
        bgAnimation.appendChild(particle);
    }
}


createParticles();

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Scroll Animation for Sections
function checkScroll() {
    const sections = document.querySelectorAll('.about-img, .about-text, .portfolio-item, .contact-info, .contact-form');
    const windowHeight = window.innerHeight;
    
    sections.forEach(section => {
        const sectionPosition = section.getBoundingClientRect().top;
        const scrollPosition = windowHeight * 0.8;
        
        if (sectionPosition < scrollPosition) {
            section.classList.add('visible');
        }
    });
    
    // Back to Top Button
    const backToTop = document.getElementById('backToTop');
    if (window.scrollY > 500) {
        backToTop.classList.add('active');
    } else {
        backToTop.classList.remove('active');
    }
}

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);

// Back to Top Button
document.getElementById('backToTop').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// Form Submission
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simpan form data atau kirim ke server
        const formData = new FormData(this);
        
        // Tampilkan pesan sukses
        alert('Pesan Anda telah terkirim! Saya akan segera menghubungi Anda kembali.');
        this.reset();
    });
}

// Enhanced Rocket Animation
const rocketBtn = document.getElementById('backToTop');
const rocket = document.querySelector('.rocket');
const rocketFlames = document.querySelectorAll('.flame');
const starsContainer = document.querySelector('.stars-container');

// Show/hide rocket based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        rocketBtn.classList.add('visible');
    } else {
        rocketBtn.classList.remove('visible');
    }
});

// Hover effects
rocketBtn.addEventListener('mouseenter', () => {
    rocketFlames.forEach(flame => {
        flame.style.opacity = '0.7';
    });
    rocket.style.transform = 'translateY(-5px)';
});

rocketBtn.addEventListener('mouseleave', () => {
    if (!rocket.classList.contains('launch')) {
        rocketFlames.forEach(flame => {
            flame.style.opacity = '0';
        });
        rocket.style.transform = 'translateY(0)';
    }
});

// Rocket click handler
rocketBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Create star particles
    createStarParticles();
    
    // Add launch animation
    rocket.classList.add('launch');
    rocketFlames.forEach(flame => {
        flame.style.opacity = '1';
    });
    
    // Scroll to top
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    
    // Reset rocket after animation completes
    setTimeout(() => {
        rocket.classList.remove('launch');
        rocketBtn.classList.remove('visible');
        rocketFlames.forEach(flame => {
            flame.style.opacity = '0';
        });
    }, 2000);
});

function createStarParticles() {
    starsContainer.innerHTML = '';
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Random properties
        const size = Math.random() * 3 + 1;
        const posX = Math.random() * 60 - 30;
        const duration = Math.random() * 3 + 2;
        const delay = Math.random() * 1;
        
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `50%`;
        star.style.top = `50%`;
        star.style.marginLeft = `${posX}px`;
        star.style.setProperty('--duration', `${duration}s`);
        star.style.animationDelay = `${delay}s`;
        
        // Animation
        star.style.animation = `starTrail ${duration}s linear forwards`;
        
        starsContainer.appendChild(star);
    }
}

// Background particles
function createParticles() {
    const bgAnimation = document.getElementById('bg-animation');
    const particleCount = window.innerWidth < 768 ? 30 : 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('bg-particle');
        
        // Random properties
        const size = Math.random() * 5 + 1;
        const posX = Math.random() * window.innerWidth;
        const delay = Math.random() * 5;
        const duration = Math.random() * 10 + 10;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}px`;
        particle.style.bottom = `-10px`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        
        bgAnimation.appendChild(particle);
    }
}

// Scroll animations
function animateOnScroll() {
    const elements = document.querySelectorAll('.about-content, .portfolio-grid, .contact-container');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    
    // Set initial state for scroll animations
    document.querySelectorAll('.about-content, .portfolio-grid, .contact-container').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
    });
    
    // Loading screen
    setTimeout(() => {
        document.querySelector('.loader').style.opacity = '0';
        setTimeout(() => {
            document.querySelector('.loader').style.display = 'none';
        }, 500);
    }, 1500);
});

// Event listeners
window.addEventListener('scroll', animateOnScroll);

// Form submission animation
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button');
        btn.textContent = 'Mengirim...';
        btn.style.transform = 'scale(0.95)';
        
        // Simulate form submission
        setTimeout(() => {
            btn.textContent = 'Terkirim!';
            btn.style.backgroundColor = '#4CAF50';
            setTimeout(() => {
                btn.textContent = 'Kirim Pesan';
                btn.style.backgroundColor = '';
                btn.style.transform = '';
                form.reset();
            }, 2000);
        }, 1500);
    });
}

// Create stars and shooting stars
function createNightSky() {
    const starsContainer = document.querySelector('.stars-container');
    const twinklingContainer = document.querySelector('.twinkling-stars');
    const starCount = 150;
    const shootingStarCount = 3;
    
    // Create normal stars
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        const size = Math.random() * 2 + 0.5;
        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * window.innerHeight;
        const duration = Math.random() * 5 + 3;
        const delay = Math.random() * 5;
        
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${posX}px`;
        star.style.top = `${posY}px`;
        star.style.setProperty('--duration', `${duration}s`);
        star.style.animationDelay = `${delay}s`;
        
        starsContainer.appendChild(star);
    }
    
    // Create twinkling stars (bigger ones)
    for (let i = 0; i < starCount/3; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        const size = Math.random() * 3 + 1;
        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * window.innerHeight;
        const duration = Math.random() * 4 + 2;
        const delay = Math.random() * 4;
        
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${posX}px`;
        star.style.top = `${posY}px`;
        star.style.setProperty('--duration', `${duration}s`);
        star.style.animationDelay = `${delay}s`;
        
        twinklingContainer.appendChild(star);
    }
    
    // Create shooting stars
    for (let i = 0; i < shootingStarCount; i++) {
        const shootingStar = document.createElement('div');
        shootingStar.classList.add('shooting-star');
        
        const size = Math.random() * 2 + 1;
        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * window.innerHeight/2;
        const duration = Math.random() * 10 + 5;
        const delay = Math.random() * 20;
        
        shootingStar.style.width = `${size}px`;
        shootingStar.style.height = `${size}px`;
        shootingStar.style.left = `${posX}px`;
        shootingStar.style.top = `${posY}px`;
        shootingStar.style.setProperty('--duration', `${duration}s`);
        shootingStar.style.animationDelay = `${delay}s`;
        
        // Add tail
        shootingStar.style.boxShadow = `0 0 ${size*3}px ${size}px white`;
        
        twinklingContainer.appendChild(shootingStar);
    }
}

// Initialize night sky
document.addEventListener('DOMContentLoaded', () => {
    createNightSky();
    
    // Recreate stars when window resizes
    window.addEventListener('resize', () => {
        document.querySelectorAll('.star, .shooting-star').forEach(star => star.remove());
        createNightSky();
    });
});

// Initialize solar system
function initSolarSystem() {
    const planets = document.querySelectorAll('.planet');
    const distances = [10, 16, 22, 28, 36, 44, 52, 60]; // in vmin
    
    planets.forEach((planet, index) => {
        planet.style.setProperty('--distance', `${distances[index]}vmin`);
    });
}

// Call this in your DOMContentLoaded event
document.addEventListener('DOMContentLoaded', () => {
    createNightSky();
    initSolarSystem();
    
    window.addEventListener('resize', () => {
        document.querySelectorAll('.star, .shooting-star').forEach(star => star.remove());
        createNightSky();
    });
});

// Create meteors
function createMeteors() {
    const nightSky = document.querySelector('.night-sky');
    for (let i = 0; i < 5; i++) {
        const meteor = document.createElement('div');
        meteor.className = 'meteor';
        meteor.style.left = `${Math.random() * 100}%`;
        meteor.style.top = `${Math.random() * 100}%`;
        meteor.style.animationDelay = `${Math.random() * 10}s`;
        nightSky.appendChild(meteor);
    }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    createMeteors();
    createConstellations();
});

// Parallax Effect
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    document.querySelector('.moon').style.transform = `translateY(${scrollY * 0.3}px)`;
    document.querySelector('.astronaut').style.transform = `translate(-50%, ${-50 + scrollY * 0.2}%)`;
});

// Randomize rocket flight
document.addEventListener('DOMContentLoaded', function() {
    // Randomize rocket start position and speed
    const rocket = document.querySelector('.flying-rocket');
    const randomTop = Math.random() * 50 + 10; // Between 10% and 60%
    const randomDuration = Math.random() * 15 + 20; // Between 20s and 35s
    
    rocket.style.top = `${randomTop}%`;
    rocket.style.animationDuration = `${randomDuration}s`;
    
    // Create random bubbles for astronaut
    setInterval(() => {
        createBubble(document.querySelector('.astronaut-bubbles'));
    }, 3000);
});

function createBubble(container) {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    bubble.style.left = `${Math.random() * 20 - 10}px`;
    bubble.style.width = `${Math.random() * 8 + 4}px`;
    bubble.style.height = bubble.style.width;
    bubble.style.animationDuration = `${Math.random() * 3 + 2}s`;
    
    container.appendChild(bubble);
    
    // Remove bubble after animation
    setTimeout(() => {
        bubble.remove();
    }, 3000);
}

// Create bubbles
function createBubbles() {
    const container = document.querySelector('.bubbles-container');
    
    // Clear old bubbles
    container.innerHTML = '';
    
    // Create 3 bubbles
    for (let i = 0; i < 3; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        
        // Random properties
        const size = Math.random() * 10 + 5;
        const delay = Math.random() * 2;
        const posX = Math.random() * 20 - 10;
        
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${posX}px`;
        bubble.style.animationDelay = `${delay}s`;
        
        container.appendChild(bubble);
    }
}

// Initialize every 3 seconds
document.addEventListener('DOMContentLoaded', () => {
    createBubbles();
    setInterval(createBubbles, 3000);
    
    // Fallback jika gambar error
    const astronautImg = document.querySelector('.astronaut');
    astronautImg.onerror = function() {
        this.src = 'https://images.icon-icons.com/2286/PNG/512/astronaut_flag_space_univers_galaxia_spaceman_rocketman_moon_icon_141226.png';
    };
});

// Make clouds more dynamic
document.addEventListener('DOMContentLoaded', function() {
    const cloudsContainer = document.querySelector('.clouds-container');
    
    // Create additional random clouds
    for (let i = 0; i < 3; i++) {
        createRandomCloud();
    }
    
    function createRandomCloud() {
        const cloud = document.createElement('div');
        cloud.className = 'cloud';
        
        // Random properties
        const width = Math.random() * 200 + 100;
        const height = width * 0.3;
        const top = Math.random() * 80 + 10; // 10% to 90%
        const duration = Math.random() * 30 + 20; // 20-50s
        const delay = Math.random() * 20;
        
        cloud.style.width = `${width}px`;
        cloud.style.height = `${height}px`;
        cloud.style.top = `${top}%`;
        cloud.style.left = `-${width}px`;
        cloud.style.animation = `cloudFloat ${duration}s linear infinite ${delay}s`;
        cloud.style.opacity = Math.random() * 0.2 + 0.1;
        
        cloudsContainer.appendChild(cloud);
    }
});

// Create additional random planets
document.addEventListener('DOMContentLoaded', function() {
    const planetsContainer = document.querySelector('.floating-planets');
    
    // Create 2 more random planets
    for (let i = 0; i < 2; i++) {
        createRandomPlanet();
    }
    
    function createRandomPlanet() {
        const planet = document.createElement('div');
        planet.className = 'floating-planet';
        
        // Random properties
        const size = Math.random() * 60 + 40;
        const colors = [
            'radial-gradient(circle at 30% 30%,rgb(87, 252, 72), #e17055)',
            'radial-gradient(circle at 70% 30%, #00cec9,rgb(0, 26, 255))',
            'radial-gradient(circle at 50% 30%, #fd79a8,rgb(232, 13, 221))'
        ];
        const color = colors[Math.floor(Math.random() * colors.length)];
        const top = Math.random() * 80 + 10;
        const left = Math.random() * 80 + 10;
        const duration = Math.random() * 20 + 20;
        
        planet.style.width = `${size}px`;
        planet.style.height = `${size}px`;
        planet.style.background = color;
        planet.style.top = `${top}%`;
        planet.style.left = `${left}%`;
        planet.style.animation = `floatPlanet${Math.floor(Math.random() * 3) + 1} ${duration}s infinite ease-in-out`;
        planet.style.opacity = '0.8';
        
        planetsContainer.appendChild(planet);
    }
});