// Menu Data
const menuData = {
    "Soups": [
        { name: "Lemon Corrionder Soup", price: "189.00", type: "veg" },
        { name: "Veg Hot And Sour Soup", price: "189.00", type: "veg" },
        { name: "Veg Manchow Soup", price: "189.00", type: "veg" },
        { name: "Veg Sweet Corn Soup", price: "189.00", type: "veg" },
        { name: "Chicken Hot And Sour Soup", price: "209.00", type: "non-veg" },
        { name: "Chicken Lemon Corrionder Soup", price: "209.00", type: "non-veg" },
        { name: "Chicken Manchow Soup", price: "209.00", type: "non-veg" },
        { name: "Chicken Sweet Corn Soup", price: "209.00", type: "non-veg" },
        { name: "Dragon Soup", price: "180.00", type: "non-veg" },
        { name: "Mutton Bone Soup", price: "229.00", type: "non-veg" },
        { name: "Mutton Soup", price: "229.00", type: "non-veg" }
    ],
    "Starters": [
        { name: "Chilli Mushroom", price: "329.00", type: "veg" },
        { name: "Crispy Baby Corn", price: "329.00", type: "veg" },
        { name: "Panneer 65", price: "349.00", type: "veg" },
        { name: "Panneer Majestic", price: "349.00", type: "veg" },
        { name: "Sesmi Veg", price: "329.00", type: "veg" },
        { name: "Veg Hong Kong", price: "329.00", type: "veg" },
        { name: "Veg Manchirian", price: "319.00", type: "veg" },
        { name: "Veg Sangirilla", price: "329.00", type: "veg" },
        { name: "Egg 65", price: "269.00", type: "egg" },
        { name: "Egg Chilli", price: "279.00", type: "egg" },
        { name: "Egg Manchurian", price: "279.00", type: "egg" },
        { name: "Ginger Egg", price: "279.00", type: "egg" },
        { name: "Abudabi Chicken", price: "439.00", type: "non-veg" },
        { name: "Chicken Majestic", price: "437.00", type: "non-veg" },
        { name: "Chilli Chicken", price: "379.00", type: "non-veg" },
        { name: "Dragon Chicken", price: "439.00", type: "non-veg" },
        { name: "Ginger Chicken", price: "499.00", type: "non-veg" },
        { name: "Lemon Chicken", price: "399.00", type: "non-veg" },
        { name: "Mangolian Chicken", price: "439.00", type: "non-veg" },
        { name: "Red Hot Chicken", price: "439.00", type: "non-veg" },
        { name: "Rr Chicken", price: "439.00", type: "non-veg" },
        { name: "Schezwan Chicken", price: "399.00", type: "non-veg" },
        { name: "Apollo Fish", price: "399.00", type: "non-veg" },
        { name: "Chilli Fish", price: "399.00", type: "non-veg" },
        { name: "Fish 65", price: "399.00", type: "non-veg" },
        { name: "Fish Hong Kong", price: "399.00", type: "non-veg" },
        { name: "Garlic Fish", price: "399.00", type: "non-veg" },
        { name: "Chilli Mutton", price: "559.00", type: "non-veg" },
        { name: "Mutton 85", price: "549.00", type: "non-veg" },
        { name: "Mutton Ghee Roast", price: "579.00", type: "non-veg" },
        { name: "Mutton Manchurian", price: "529.00", type: "non-veg" },
        { name: "Chilli Prawn", price: "439.00", type: "non-veg" },
        { name: "Loose Prawn", price: "439.00", type: "non-veg" },
        { name: "Prawn 65", price: "439.00", type: "non-veg" },
        { name: "Prawn Hong Kong", price: "479.00", type: "non-veg" },
        { name: "Prawn Manchurian", price: "439.00", type: "non-veg" }
    ],
    "Tandoori": [
        { name: "Achari Tikka", price: "479.00", type: "veg" },
        { name: "Chicken Tikka", price: "449.00", type: "non-veg" },
        { name: "Malai Tikka", price: "449.00", type: "veg" },
        { name: "Tandoori Chicken Full", price: "689.00", type: "non-veg" },
        { name: "Tandoori Chicken Half", price: "379.00", type: "non-veg" },
        { name: "Tangdi Kabab Full", price: "399.00", type: "non-veg" },
        { name: "Tangdi Kabab Half", price: "229.00", type: "non-veg" },
        { name: "Chicken Fried Wings 6pcs", price: "399.00", type: "non-veg" },
        { name: "Chicken Lollipop 6pcs", price: "439.00", type: "non-veg" },
        { name: "Tango Chicken Full", price: "949.00", type: "non-veg" },
        { name: "Tango Chicken Half", price: "499.00", type: "non-veg" }
    ],
    "Main Course": [
        { name: "Egg Burji", price: "229.00", type: "egg" },
        { name: "Egg Curry", price: "279.00", type: "egg" },
        { name: "Butter Chicken Boneless", price: "419.00", type: "non-veg" },
        { name: "Chicken Chittinad Boneless", price: "439.00", type: "non-veg" },
        { name: "Chicken Curry Boneless", price: "399.00", type: "non-veg" },
        { name: "Kadai Chicken Boneless", price: "419.00", type: "non-veg" },
        { name: "Methi Chicken Curry Boneless", price: "439.00", type: "non-veg" },
        { name: "Mughalai Chicken Boneless", price: "439.00", type: "non-veg" },
        { name: "Kadai Veg", price: "319.00", type: "veg" },
        { name: "Kaju Curry", price: "389.00", type: "veg" },
        { name: "Kaju Panneer", price: "369.00", type: "veg" },
        { name: "Kaju Tomato Curry", price: "349.00", type: "veg" },
        { name: "Methi Chaman", price: "349.00", type: "veg" },
        { name: "Mixed Veg Curry", price: "309.00", type: "veg" },
        { name: "Mushroom Curry", price: "339.00", type: "veg" },
        { name: "Panneer Butter Masala", price: "349.00", type: "veg" },
        { name: "Panneer Tikka Masala", price: "349.00", type: "veg" },
        { name: "Fish Curry Boneless", price: "399.00", type: "non-veg" },
        { name: "Gongura Prawn", price: "449.00", type: "non-veg" },
        { name: "Kadai Prawn", price: "449.00", type: "non-veg" },
        { name: "Prawn Curry", price: "429.00", type: "non-veg" },
        { name: "Gongura Mutton Curry", price: "569.00", type: "non-veg" },
        { name: "Kadai Mutton Curry", price: "569.00", type: "non-veg" },
        { name: "Mutton Curry", price: "529.00", type: "non-veg" },
        { name: "Mutton Roghen Josh", price: "579.00", type: "non-veg" },
        { name: "Chicken Curry", price: "379.00", type: "non-veg" },
        { name: "Gongura Chicken Curry", price: "399.00", type: "non-veg" },
        { name: "Punjabi Chicken Curry", price: "419.00", type: "non-veg" },
        { name: "Tangdi Masala", price: "439.00", type: "non-veg" }
    ],
    "Biryani": [
        { name: "Kaju Biryani", price: "349.00", type: "veg" },
        { name: "Mushroom Biryani", price: "349.00", type: "veg" },
        { name: "Panneer Biryani", price: "349.00", type: "veg" },
        { name: "Veg Biryani Full", price: "320.00", type: "veg" },
        { name: "Veg Biryani Single", price: "180.00", type: "veg" },
        { name: "Veg Chittinad Biryani", price: "399.00", type: "veg" },
        { name: "Butta Biryani Full", price: "599.00", type: "non-veg" },
        { name: "Chicken Dum Biryani Full", price: "349.00", type: "non-veg" },
        { name: "Chicken Fry Biryani Full", price: "349.00", type: "non-veg" },
        { name: "Chicken Sp Biryani", price: "349.00", type: "non-veg" },
        { name: "Lollipop Biryani Full", price: "479.00", type: "non-veg" },
        { name: "Lollipop Biryani Single", price: "319.00", type: "non-veg" },
        { name: "Mixed Biryani", price: "499.00", type: "non-veg" },
        { name: "Mughalai Biryani", price: "479.00", type: "non-veg" },
        { name: "Pot Biryani Full", price: "499.00", type: "non-veg" },
        { name: "Rambo Biryani", price: "499.00", type: "non-veg" },
        { name: "Rio Special Biryani", price: "569.00", type: "non-veg" },
        { name: "Tikka Biryani", price: "449.00", type: "non-veg" },
        { name: "Wings Biryani Full", price: "479.00", type: "non-veg" },
        { name: "Wings Biryani Single", price: "319.00", type: "non-veg" },
        { name: "Chicken Fry Biryani [Half]", price: "249.00", type: "non-veg" },
        { name: "Chicken Dum Biryani [Half]", price: "249.00", type: "non-veg" },
        { name: "Gongura Mutton Biryani Full", price: "569.00", type: "non-veg" },
        { name: "Gongura Mutton Biryani Single", price: "349.00", type: "non-veg" },
        { name: "Mutton Fry Biryani Full", price: "529.00", type: "non-veg" },
        { name: "Mutton Fry Biryani Single", price: "329.00", type: "non-veg" },
        { name: "Mutton Ghee Roast Biryani", price: "569.00", type: "non-veg" },
        { name: "Special Mutton Biryani", price: "569.00", type: "non-veg" },
        { name: "Fish Biryani Full", price: "479.00", type: "non-veg" },
        { name: "Fish Biryani Single", price: "289.00", type: "non-veg" },
        { name: "Prawn Biryani Full", price: "479.00", type: "non-veg" },
        { name: "Prawn Biryani Single", price: "299.00", type: "non-veg" },
        { name: "Pot Briyani", price: "499.00", type: "non-veg" }
    ],
    "Fried Rice": [
        { name: "Chicken Fried Rice", price: "299.00", type: "non-veg" },
        { name: "Egg Fried Rice", price: "249.00", type: "egg" },
        { name: "Mixed Fried Rice Non Veg", price: "379.00", type: "non-veg" },
        { name: "Mushroom Fried Rice", price: "299.00", type: "veg" },
        { name: "Panneer Fried Rice", price: "299.00", type: "veg" },
        { name: "Schezwan Chicken Fried Rice", price: "399.00", type: "non-veg" },
        { name: "Schezwan Fried Rice", price: "249.00", type: "veg" },
        { name: "Sp Chicken Fried Rice", price: "399.00", type: "non-veg" },
        { name: "Sp Mushroom Fried Rice", price: "339.00", type: "veg" },
        { name: "Sp Panneer Fried Rice", price: "349.00", type: "veg" },
        { name: "Special Veg Fried Rice", price: "319.00", type: "veg" },
        { name: "Veg Fried Rice", price: "229.00", type: "veg" }
    ],
    "Breads": [
        { name: "Aaloo Rarota", price: "129.00", type: "veg" },
        { name: "Butter Naan", price: "99.00", type: "veg" },
        { name: "Garlic Naan", price: "109.00", type: "veg" },
        { name: "Panner Kulcha", price: "129.00", type: "veg" },
        { name: "Plain Naan", price: "89.00", type: "veg" },
        { name: "Plain Roti", price: "49.00", type: "veg" },
        { name: "Pulka", price: "25.00", type: "veg" },
        { name: "Stuffed Kulcha", price: "119.00", type: "veg" },
        { name: "Tandoori Roti", price: "59.00", type: "veg" }
    ],
    "Combos": [
        { name: "2 ROTI + Mix VEG CURRY", price: "199.00", type: "veg" },
        { name: "3 Pulka + Mix Veg Curry", price: "199.00", type: "veg" },
        { name: "1 Butter NAAN + Mix VEG CURRY", price: "199.00", type: "veg" }
    ],
    "Specials & Beverages": [
        { name: "Blue Angel", price: "99.00", type: "veg" },
        { name: "Electrical Shocker", price: "109.00", type: "veg" },
        { name: "Litchi Delight", price: "99.00", type: "veg" },
        { name: "Mango Mocktail", price: "89.00", type: "veg" },
        { name: "Orange Mocktail", price: "99.00", type: "veg" },
        { name: "Pine Apple Mocktail", price: "99.00", type: "veg" },
        { name: "Strawberry Mocktail", price: "109.00", type: "veg" },
        { name: "Virgin Mojito", price: "89.00", type: "veg" },
        { name: "Vanilla Milkshake", price: "159.00", type: "veg" },
        { name: "Strawberry Milkshake", price: "159.00", type: "veg" },
        { name: "American Nuts Milk Shake", price: "229.00", type: "veg" },
        { name: "Black Current Milkshake", price: "199.00", type: "veg" },
        { name: "Butterscotch Milk Shake", price: "199.00", type: "veg" },
        { name: "Chocklate Milk Shake", price: "179.00", type: "veg" }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    const tabsContainer = document.getElementById('menuTabs');
    const gridContainer = document.getElementById('menuGrid');

    // Initialize Tabs
    const categories = Object.keys(menuData);
    categories.forEach((category, index) => {
        const btn = document.createElement('button');
        btn.className = `tab-btn ${index === 0 ? 'active' : ''}`;
        btn.textContent = category;
        btn.onclick = () => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderMenu(category);
        };
        tabsContainer.appendChild(btn);
    });

    // Render Function
    function renderMenu(category) {
        gridContainer.innerHTML = '';
        const items = menuData[category];
        items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'menu-item animate-up'; // Add animation class
            card.innerHTML = `
                <div class="item-info">
                    <h4>${item.name}</h4>
                    <span class="item-badge ${item.type.toLowerCase().includes('non') ? 'non-veg' : item.type.toLowerCase()}">${item.type}</span>
                </div>
                <div class="item-price">₹${item.price}</div>
            `;
            gridContainer.appendChild(card);
        });
    }

    // Initial Render
    renderMenu(categories[0]);

    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    mobileBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = mobileBtn.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Scroll Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-up, .feature-card, .review-card, .footer').forEach(el => {
        observer.observe(el);
    });

    // --- GOLD DUST PARTICLE SYSTEM ---
    const canvas = document.getElementById('bg-canvas');
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resize);
    resize();

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            // Particles move slowly upwards or drift
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5 - 0.2; // Slight upward drift
            this.size = Math.random() * 2 + 0.5; // Small dust specks
            this.color = `rgba(255, 215, 0, ${Math.random() * 0.5 + 0.1})`; // Gold opacity
            this.life = Math.random() * 1000;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            // Wrap around screen
            if (this.x < 0) this.x = width;
            if (this.x > width) this.x = 0;
            if (this.y < 0) this.y = height;
            if (this.y > height) this.y = 0;

            // Twinkle effect
            if (Math.random() > 0.98) {
                this.size = Math.random() * 2.5 + 0.5;
            }
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }

    function initParticles() {
        particles = [];
        const particleCount = window.innerWidth < 768 ? 50 : 100; // Performance optimization
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, width, height);

        // Draw deep gradient background frame by frame (optional, but CSS handles it better for performance)
        // We let CSS handle the base gradient, this draws ON TOP.

        particles.forEach(p => {
            p.update();
            p.draw();
        });

        // Add a subtle "Aurora" mouse connection line if close? 
        // Nah, keep it clean dust for now.

        requestAnimationFrame(animateParticles);
    }

    initParticles();
    animateParticles();
});
