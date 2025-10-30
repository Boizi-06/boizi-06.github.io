
document.addEventListener('DOMContentLoaded', function () {
    // Initialize variables
    const loader = document.querySelector('.loader');
    const backToTopButton = document.querySelector('.back-to-top');
    const timelineItems = document.querySelectorAll('.timeline-item');
    const contactForm = document.getElementById('contact-form');

    // Custom cursor
    const cursor = document.querySelector('.custom-cursor');
    const cursorDot = document.querySelector('.cursor-dot');

    if (window.innerWidth > 991) {
        document.addEventListener('mousemove', function (e) {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';

            cursorDot.style.left = e.clientX + 'px';
            cursorDot.style.top = e.clientY + 'px';
        });

        document.addEventListener('mousedown', function () {
            cursor.classList.add('active');
        });

        document.addEventListener('mouseup', function () {
            cursor.classList.remove('active');
        });

        // Add hover effect for links, buttons, etc.
        const interactiveElements = document.querySelectorAll('a, button, .cyber-box, input, textarea');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', function () {
                cursor.classList.add('active');
            });

            el.addEventListener('mouseleave', function () {
                cursor.classList.remove('active');
            });
        });
    }

    // Initialize AOS with refined settings
    AOS.init({
        duration: 800,
        easing: 'ease-out',
        once: true,
        offset: 50,
        disable: 'mobile'
    });

    // Terminal Loader Animation
    const loaderOutputLines = document.querySelectorAll('.loader-output-line');
    const loaderProgressBar = document.querySelector('.loader-progress-bar');

    let lineIndex = 0;
    const showNextLine = () => {
        if (lineIndex < loaderOutputLines.length) {
            loaderOutputLines[lineIndex].style.opacity = 1;
            loaderOutputLines[lineIndex].style.transform = 'translateX(0)';
            lineIndex++;
            setTimeout(showNextLine, 400);
        }
    };

    // Start loader animations
    setTimeout(function () {
        showNextLine();
        loaderProgressBar.style.width = '100%';

        setTimeout(function () {
            loader.classList.add('fade-out');

            setTimeout(function () {
                // Initialize main page animations
                initPageAnimations();
            }, 500);
        }, 3000);
    }, 500);

    // Main page animations
    function initPageAnimations() {
        // Initialize GSAP and ScrollTrigger
        initGSAPAnimations();

        // Initialize digital rain effect
        initDigitalRain();

        // Initialize particles
        initParticles();

        // Initialize typing effect
        initTypingEffect();

        // Initialize skill bars
        initSkillBars();
    }

    // Initialize GSAP animations
    function initGSAPAnimations() {
        // Timeline animations
        gsap.utils.toArray('.timeline-item').forEach((item, index) => {
            ScrollTrigger.create({
                trigger: item,
                start: 'top 80%',
                onEnter: () => {
                    item.classList.add('active');
                },
                once: true
            });
        });

        // Cyber box animations
        gsap.utils.toArray('.cyber-box').forEach((box) => {
            ScrollTrigger.create({
                trigger: box,
                start: 'top 85%',
                onEnter: () => {
                    gsap.to(box, {
                        opacity: 1,
                        duration: 0.5,
                        ease: 'power2.out'
                    });
                },
                once: true
            });
        });
    }

    // Initialize Digital Rain
    function initDigitalRain() {
        const digitalRain = document.getElementById('digital-rain');
        if (!digitalRain) return;

        const characters = '01100101010111101010101110101010111010010101010110101010';
        const columns = Math.floor(window.innerWidth / 20);

        for (let i = 0; i < columns; i++) {
            const column = document.createElement('div');
            column.className = 'rain-column';
            column.style.left = (i * 20) + 'px';
            column.style.animationDuration = 3 + Math.random() * 8 + 's';
            column.style.animationDelay = Math.random() * 5 + 's';

            let columnText = '';
            const length = 5 + Math.floor(Math.random() * 15);
            for (let j = 0; j < length; j++) {
                columnText += characters.charAt(Math.floor(Math.random() * characters.length)) + '<br>';
            }

            column.innerHTML = columnText;
            digitalRain.appendChild(column);
        }
    }

    // Initialize Particles
    function initParticles() {
        if (typeof particlesJS !== 'undefined' && document.getElementById('particles-js')) {
            particlesJS('particles-js', {
                particles: {
                    number: {
                        value: 50,
                        density: {
                            enable: true,
                            value_area: 800
                        }
                    },
                    color: {
                        value: "#00ffd5"
                    },
                    shape: {
                        type: "triangle",
                        stroke: {
                            width: 0,
                            color: "#000000"
                        }
                    },
                    opacity: {
                        value: 0.2,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: false
                        }
                    },
                    size: {
                        value: 3,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 2,
                            size_min: 0.3,
                            sync: false
                        }
                    },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: "#00ffd5",
                        opacity: 0.2,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 1,
                        direction: "none",
                        random: true,
                        straight: false,
                        out_mode: "out",
                        bounce: false,
                        attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 1200
                        }
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
                            distance: 100,
                            duration: 0.4
                        },
                        push: {
                            particles_nb: 4
                        },
                        remove: {
                            particles_nb: 2
                        }
                    }
                },
                retina_detect: true
            });
        }
    }

    // Initialize typing effect
    function initTypingEffect() {
        const typingText = document.getElementById('typing-text');
        if (!typingText) return;

        const text = "FontEnd Developer ";
        let i = 0;

        function typeWriter() {
            if (i < text.length) {
                typingText.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }

        setTimeout(typeWriter, 1000);
    }

    // Initialize skill bars
    function initSkillBars() {
        const skillBars = document.querySelectorAll('.skill-level-bar');

        setTimeout(() => {
            skillBars.forEach(bar => {
                const width = bar.getAttribute('data-width');
                bar.style.width = width;
            });
        }, 1500);
    }

    // Navbar scroll effect
    window.addEventListener('scroll', function () {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        }

        // Back to top button
        if (backToTopButton) {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('active');
            } else {
                backToTopButton.classList.remove('active');
            }
        }

        // Update active nav link
        updateActiveNavLink();
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: 'smooth'
                });

                // Close navbar on mobile when clicking a link
                const navbarToggler = document.querySelector('.navbar-toggler');
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                    navbarToggler.click();
                }
            }
        });
    });

    // Back to top button click event
    if (backToTopButton) {
        backToTopButton.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Telegram form submission
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const formStatus = document.getElementById('form-status');
            if (formStatus) {
                formStatus.style.display = 'block';
                formStatus.innerHTML = '<div style="color: var(--accent-cyan); padding: 15px; border: 1px solid var(--accent-cyan); border-radius: 4px;"><i class="fas fa-spinner fa-spin" style="margin-right: 8px;"></i>Sending message...</div>';
            }

            const name = document.getElementById('name') ? document.getElementById('name').value : '';
            const email = document.getElementById('email') ? document.getElementById('email').value : '';
            const subject = document.getElementById('subject') ? document.getElementById('subject').value : '';
            const message = document.getElementById('message') ? document.getElementById('message').value : '';

            // Telegram Bot details
            const botToken = 'myBotToken'; // Your bot token
            const chatId = 'myChatID';     // Your chat ID

            // Format message for Telegram
            const telegramMessage =
                `🔔 New Contact Form Message 🔔\n\n` +
                `👤 Name: ${name}\n` +
                `📧 Email: ${email}\n` +
                `📝 Subject: ${subject}\n` +
                `💬 Message: ${message}`;

            // Send to Telegram
            fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: telegramMessage
                })
            })
                .then(response => response.json())
                .then(data => {
                    if (data.ok && formStatus) {
                        formStatus.innerHTML = '<div style="color: var(--accent-cyan); padding: 15px; border: 1px solid var(--accent-cyan); border-radius: 4px;"><i class="fas fa-check-circle" style="margin-right: 8px;"></i>Message sent successfully!</div>';
                        contactForm.reset();
                        setTimeout(() => {
                            formStatus.style.display = 'none';
                        }, 5000);
                    } else if (formStatus) {
                        formStatus.innerHTML = '<div style="color: var(--accent-red); padding: 15px; border: 1px solid var(--accent-red); border-radius: 4px;"><i class="fas fa-exclamation-circle" style="margin-right: 8px;"></i>Something went wrong. Please try again.</div>';
                        console.error('Telegram API Error:', data);
                    }
                })
                .catch(error => {
                    if (formStatus) {
                        formStatus.innerHTML = '<div style="color: var(--accent-red); padding: 15px; border: 1px solid var(--accent-red); border-radius: 4px;"><i class="fas fa-exclamation-triangle" style="margin-right: 8px;"></i>Network error. Please check your connection.</div>';
                    }
                    console.error('Network Error:', error);
                });
        });
    }

    // Call updateActiveNavLink once on load
    updateActiveNavLink();

    // Three.js Background Effects
    function initThreeJsBackground() {
        if (typeof THREE === 'undefined') return;

        const canvasContainer = document.createElement('div');
        canvasContainer.id = 'canvas-container';
        document.body.appendChild(canvasContainer);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0);
        canvasContainer.appendChild(renderer.domElement);

        // Create grid of small cubes
        const cubes = [];
        const cubeGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
        const cubeMaterial = new THREE.MeshBasicMaterial({
            color: 0x00ffd5,
            wireframe: true,
            transparent: true,
            opacity: 0.2
        });

        for (let i = 0; i < 50; i++) {
            const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
            cube.position.x = (Math.random() - 0.5) * 20;
            cube.position.y = (Math.random() - 0.5) * 20;
            cube.position.z = (Math.random() - 0.5) * 20 - 10;
            cube.rotation.x = Math.random() * Math.PI;
            cube.rotation.y = Math.random() * Math.PI;

            scene.add(cube);
            cubes.push({
                mesh: cube,
                rotationSpeed: {
                    x: (Math.random() - 0.5) * 0.01,
                    y: (Math.random() - 0.5) * 0.01
                }
            });
        }

        camera.position.z = 5;

        // Animation loop
        function animate() {
            requestAnimationFrame(animate);

            cubes.forEach(cube => {
                cube.mesh.rotation.x += cube.rotationSpeed.x;
                cube.mesh.rotation.y += cube.rotationSpeed.y;
            });

            renderer.render(scene, camera);
        }

        animate();

        // Handle window resize
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
    }

    // Initialize Three.js effects if window width > 768
    if (window.innerWidth > 768) {
        setTimeout(() => {
            initThreeJsBackground();
        }, 4000);
    }

    // Glitch text effect initialization
    setTimeout(() => {
        const glitchTexts = document.querySelectorAll('.glitch-effect');
        glitchTexts.forEach(text => {
            const content = text.textContent;
            text.setAttribute('data-text', content);
        });
    }, 1000);
});

// Check if element is in viewport - function definition outside DOMContentLoaded
function isElementInViewport(el) {
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight * 0.85) &&
        rect.bottom >= 0
    );
}

// Update active navigation link based on scroll position - function definition outside DOMContentLoaded
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentSection) {
            link.classList.add('active');
        }
    });
}
