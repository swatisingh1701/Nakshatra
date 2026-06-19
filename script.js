// ===== Custom Cursor =====
function initializeCustomCursor() {
    const cursor = document.querySelector('.custom-cursor');
    const follower = document.querySelector('.cursor-follower');
    
    let posX = 0, posY = 0;
    let followerX = 0, followerY = 0;
    
    document.addEventListener('mousemove', (e) => {
        posX = e.clientX;
        posY = e.clientY;
        
        cursor.style.left = posX + 'px';
        cursor.style.top = posY + 'px';
    });
    
    // Smooth follower animation
    setInterval(() => {
        followerX += (posX - followerX) * 0.15;
        followerY += (posY - followerY) * 0.15;
        
        follower.style.left = followerX + 'px';
        follower.style.top = followerY + 'px';
    }, 10);
    
    // Hover effect on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .planet-card, .constellation-card, .gallery-item, .timeline-content, .about-card');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
            follower.classList.add('hover');
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
            follower.classList.remove('hover');
        });
    });
}

// ===== Planet Data =====
const planets = [
    {
        name: "Sun",
        emoji: "☀",
        image: "https://images.unsplash.com/photo-1614728853913-1e222a800c69?w=300&h=300&fit=crop",
        distance: "0 AU (Center)",
        description: "The star at the center of our Solar System, providing energy for life on Earth.",
        fact: "The Sun accounts for 99.86% of the Solar System's total mass!"
    },
    {
        name: "Earth",
        emoji: "🌍",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&h=300&fit=crop",
        distance: "1 AU (149.6 million km)",
        description: "The only known planet to harbor life, with water covering 71% of its surface.",
        fact: "Earth is the only planet not named after a Greek or Roman god!"
    },
    {
        name: "Moon",
        emoji: "🌕",
        image: "https://images.unsplash.com/photo-1522030299830-16b8d3d849ee?w=300&h=300&fit=crop",
        distance: "1.003 AU (384,400 km from Earth)",
        description: "Earth's only natural satellite, influencing tides and inspiring countless stories.",
        fact: "The Moon is moving away from Earth at 3.8 cm per year!"
    },
    {
        name: "Mars",
        emoji: "🔴",
        image: "https://images.unsplash.com/photo-1615672967592-0d113e856000?w=300&h=300&fit=crop",
        distance: "1.524 AU (227.9 million km)",
        description: "The Red Planet, with the largest volcano and canyon in the Solar System.",
        fact: "Mars has the tallest mountain in the Solar System - Olympus Mons (22 km high)!"
    },
    {
        name: "Saturn",
        emoji: "🪐",
        image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=300&h=300&fit=crop",
        distance: "9.582 AU (1.43 billion km)",
        description: "Famous for its stunning ring system, Saturn is the second-largest planet.",
        fact: "Saturn could float in water because it's mostly gas and has low density!"
    },
    {
        name: "Jupiter",
        emoji: "♃",
        image: "https://images.unsplash.com/photo-1614728853914-9b2b5c45e9f9?w=300&h=300&fit=crop",
        distance: "5.203 AU (778.5 million km)",
        description: "The largest planet in our Solar System, with a massive storm called the Great Red Spot.",
        fact: "Jupiter has 95 confirmed moons and could fit 1,300 Earths inside!"
    },
    {
        name: "Neptune",
        emoji: "🔵",
        image: "https://images.unsplash.com/photo-1614728854012-4b0d4ad4f1ce?w=300&h=300&fit=crop",
        distance: "30.05 AU (4.5 billion km)",
        description: "The farthest planet, with the fastest winds in the Solar System up to 2,100 km/h.",
        fact: "One year on Neptune equals 165 Earth years!"
    }
];

// ===== Space Facts =====
const spaceFacts = [
    "One day on Venus is longer than a year on Venus!",
    "Neutron stars are incredibly dense - a sugar-cube-sized amount would weigh 1 billion tons!",
    "Saturn could float in water because it's mostly gas and has low density!",
    "There are more stars in the universe than grains of sand on all Earth's beaches!",
    "The Sun makes up 99.86% of the Solar System's total mass!",
    "Space is completely silent because there's no air to carry sound waves!",
    "A light-year is about 9.46 trillion kilometers - the distance light travels in one year!",
    "The Universe is expanding faster than the speed of light!",
    "Black holes can bend light itself, making them invisible!",
    "There's a planet called HD 189733 b where it rains glass sideways!",
    "The Moon is moving away from Earth at 3.8 cm per year!",
    "Jupiter's Great Red Spot is a storm that's been raging for 350 years!",
    "Venus is the hottest planet in our Solar System at 465°C!",
    "There are approximately 2 trillion galaxies in the observable universe!",
    "The night sky is dark because the Universe has a finite age!"
];

// ===== Initialize Planet Cards =====
function createPlanetCards() {
    const planetGrid = document.getElementById('planet-grid');
    
    planets.forEach((planet, index) => {
        const card = document.createElement('div');
        card.className = 'planet-card fade-in';
        card.style.animationDelay = `${index * 0.1}s`;
        card.innerHTML = `
            <img src="${planet.image}" alt="${planet.name}" class="planet-image" 
                 onerror="this.src='https://dummyimage.com/200x200/1a1a4e/ffffff&text=${planet.emoji}'">
            <h3>${planet.emoji} ${planet.name}</h3>
            <p class="planet-distance">Distance: ${planet.distance}</p>
            <p class="planet-desc">${planet.description}</p>
            <p class="planet-fact">💡 ${planet.fact}</p>
        `;
        planetGrid.appendChild(card);
    });
}

// ===== Random Fact Generator =====
function initializeFactGenerator() {
    const generateBtn = document.getElementById('generate-fact');
    const factDisplay = document.getElementById('fact-display');
    
    generateBtn.addEventListener('click', () => {
        const randomFact = spaceFacts[Math.floor(Math.random() * spaceFacts.length)];
        const factText = factDisplay.querySelector('.fact-text');
        
        factText.style.animation = 'factFade 0.5s ease-out';
        setTimeout(() => {
            factText.textContent = randomFact;
            factText.style.animation = 'factFade 0.5s ease-in';
        }, 200);
        
        generateBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            generateBtn.style.transform = '';
        }, 150);
    });
}

// ===== Auto-changing Did You Know Facts =====
function initializeDidYouKnow() {
    const didyouknowFact = document.getElementById('didyouknow-fact');
    let currentFactIndex = 0;
    
    function updateFact() {
        const factText = didyouknowFact.querySelector('.fact-text');
        
        factText.style.animation = 'factFade 0.5s ease-out';
        setTimeout(() => {
            factText.textContent = spaceFacts[currentFactIndex];
            factText.style.animation = 'factFade 0.5s ease-in';
            currentFactIndex = (currentFactIndex + 1) % spaceFacts.length;
        }, 250);
    }
    
    // Initialize with first fact
    didyouknowFact.querySelector('.fact-text').textContent = spaceFacts[0];
    
    // Change fact every 6 seconds
    setInterval(updateFact, 6000);
}

// ===== Quote Carousel =====
function initializeQuoteCarousel() {
    const quoteItems = document.querySelectorAll('.quote-item');
    const prevBtn = document.getElementById('quote-prev');
    const nextBtn = document.getElementById('quote-next');
    let currentIndex = 0;
    
    function showQuote(index) {
        quoteItems.forEach(item => item.classList.remove('active'));
        quoteItems[index].classList.add('active');
    }
    
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + quoteItems.length) % quoteItems.length;
        showQuote(currentIndex);
    });
    
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % quoteItems.length;
        showQuote(currentIndex);
    });
}

// ===== Navigation =====
function initializeNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.getElementById('navbar');
    
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    
    const sections = document.querySelectorAll('section[id]');
    
    function setActiveLink() {
        const scrollY = window.scrollY;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 150;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', setActiveLink);
    setActiveLink();
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                e.preventDefault();
                targetSection.scrollIntoView({ behavior: 'smooth' });
                navMenu.classList.remove('active');
            }
        });
    });
}

// ===== Scroll Animations =====
function initializeScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');
    const sections = document.querySelectorAll('section');
    
    function checkFade() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('visible');
            }
        });
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.style.opacity = '1';
            }
        });
    }
    
    window.addEventListener('scroll', checkFade);
    window.addEventListener('load', checkFade);
    setTimeout(checkFade, 100);
}

// ===== Back to Top Button =====
function initializeBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===== Begin Journey Button =====
function initializeBeginJourney() {
    const beginBtn = document.getElementById('begin-journey');
    
    beginBtn.addEventListener('click', () => {
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    });
}

// ===== Gallery Hover Zoom =====
function initializeGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.querySelector('img').style.transform = 'scale(1.2)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.querySelector('img').style.transform = 'scale(1)';
        });
    });
}

// ===== Navbar Shadow on Scroll =====
function initializeNavbarShadow() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 2px 40px rgba(99, 102, 241, 0.4)';
        } else {
            navbar.style.boxShadow = '0 2px 20px rgba(99, 102, 241, 0.2)';
        }
    });
}

// ===== Parallax Effect for Moon =====
function initializeParallax() {
    const moon = document.querySelector('.moon-image');
    
    if (moon) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            const moonSpeed = scrolled * 0.3;
            moon.style.transform = `translateY(${moonSpeed}px) rotate(${moonSpeed * 0.1}deg)`;
        });
    }
}

// ===== Type Effect for Hero Title =====
function initializeTypeEffect() {
    const title = document.querySelector('.hero-title');
    if (title) {
        title.style.opacity = '0';
        setTimeout(() => {
            title.style.opacity = '1';
        }, 100);
    }
}

// ===== Initialize Everything =====
document.addEventListener('DOMContentLoaded', () => {
    // Initialize custom cursor
    initializeCustomCursor();
    
    // Initialize all features
    createPlanetCards();
    initializeFactGenerator();
    initializeDidYouKnow();
    initializeQuoteCarousel();
    initializeNavigation();
    initializeScrollAnimations();
    initializeBackToTop();
    initializeBeginJourney();
    initializeGallery();
    initializeNavbarShadow();
    initializeParallax();
    initializeTypeEffect();
    
    // Add visible class to all sections after load
    setTimeout(() => {
        document.querySelectorAll('section').forEach((section, index) => {
            section.style.opacity = '0';
            section.style.transition = `opacity 0.8s ease-out ${index * 0.2}s`;
        });
    }, 100);
});

// ===== Performance Optimization =====
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            initializeScrollAnimations();
            ticking = false;
        });
        ticking = true;
    }
});
