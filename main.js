// Mock Data for Specialties
const products = [
    {
        id: 1,
        name: "Kẹo Dừa Bến Tre",
        price: "45.000đ",
        origin: "Bến Tre",
        description: "Hương vị béo ngậy, thơm lừng từ nước cốt dừa nguyên chất.",
        category: "Bánh kẹo",
        image: "https://th.bing.com/th/id/OIP.GQ7g0mBxz0kKGc7jaDK4-AHaFj?w=318&h=191&c=7&r=0&o=7&pid=1.7&rm=3",
        images: [
            "https://th.bing.com/th/id/OIP.GQ7g0mBxz0kKGc7jaDK4-AHaFj?w=318&h=191&c=7&r=0&o=7&pid=1.7&rm=3",
            "img/keodua.png",
            "img/image copy.png",
            "https://cdn.tgdd.vn/Files/2021/04/16/1343750/cach-lam-keo-dua-ben-tre-tai-nha-deo-thom-ngon-chuan-vi-202104161049283738.jpg"
        ],
        badge: "Bán chạy"
    },
    {
        id: 2,
        name: "Nem Lai Vung",
        price: "65.000đ",
        origin: "Đồng Tháp",
        description: "Đặc sản nức tiếng Đồng Tháp với vị chua thanh, giòn sần sật.",
        category: "Thực phẩm",
        image: "https://th.bing.com/th/id/OIP.mp96VZwE_Mh5gj1QbrRKIwHaE8?w=263&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
        images: [
            "https://th.bing.com/th/id/OIP.mp96VZwE_Mh5gj1QbrRKIwHaE8?w=263&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
            "img/image copy 12.png",
            "img/image copy 3.png",
            "https://nemlaivung.com.vn/wp-content/uploads/2019/11/nem-lai-vung-dong-thap.jpg"
        ],
        badge: "Đặc biệt"
    },
    {
        id: 3,
        name: "Bánh Pía Sóc Trăng",
        price: "120.000đ",
        origin: "Sóc Trăng",
        description: "Lớp vỏ mỏng mềm, nhân đậu xanh sầu riêng đậm đà.",
        category: "Bánh kẹo",
        image: "https://th.bing.com/th/id/R.ca943f001e9cbe2584e3fdcc62354526?rik=C3Ej4QnW2V%2buGQ&pid=ImgRaw&r=0",
        images: [
            "https://th.bing.com/th/id/R.ca943f001e9cbe2584e3fdcc62354526?rik=C3Ej4QnW2V%2buGQ&pid=ImgRaw&r=0",
            "https://media.cooky.vn/recipe/g4/31604/s800x800/cooky-recipe-636402432822459955.JPG",
            "https://static.vinwonders.com/production/banh-pia-soc-trang-1.jpg"
        ],
        badge: "Mới"
    },
    {
        id: 4,
        name: "Mắm Thái Châu Đốc",
        price: "85.000đ",
        origin: "An Giang",
        description: "Sự kết hợp hoàn hảo giữa mắm cá và đu đủ bào sợi giòn ngọt.",
        category: "Đồ khô & Mắm",
        image: "https://www.sgtiepthi.vn/wp-content/uploads/2019/10/m%E1%BA%AFm-3.jpg",
        images: [
            "https://www.sgtiepthi.vn/wp-content/uploads/2019/10/m%E1%BA%AFm-3.jpg",
            "img/image copy 4.png",
            "https://mientaycogi.com/wp-content/uploads/2021/04/mam-thai-chau-doc.jpg"
        ],
        badge: "Gia truyền"
    },
    {
        id: 5,
        name: "Vú Sữa Lò Rèn",
        price: "95.000đ/kg",
        origin: "Tiền Giang",
        description: "Vỏ mỏng, ruột dày, hương vị ngọt thanh và dòng sữa trắng đục béo ngậy đặc trưng.",
        category: "Trái cây tươi",
        image: "https://th.bing.com/th/id/R.a78476ddac2710a2bec92ec33474e4c9?rik=YOPVhaYCdEQd9g&pid=ImgRaw&r=0",
        images: [
            "https://th.bing.com/th/id/R.a78476ddac2710a2bec92ec33474e4c9?rik=YOPVhaYCdEQd9g&pid=ImgRaw&r=0",
            "img/image copy 13.png",
            "https://static.vinwonders.com/production/vu-sua-lo-ren-vinh-kim-1.jpg"
        ],
        badge: "Hữu cơ"
    },
    {
        id: 6,
        name: "Tôm Khô Cà Mau",
        price: "450.000đ/kg",
        origin: "Cà Mau",
        description: "Tôm đất tự nhiên phơi khô, thịt chắc, màu đỏ cam bắt mắt và vị ngọt đậm đà.",
        category: "Đồ khô & Mắm",
        image: "https://th.bing.com/th/id/OIP.pDexYkj9yNEERLv77RxOSQHaE6?w=235&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
        images: [
            "https://th.bing.com/th/id/OIP.pDexYkj9yNEERLv77RxOSQHaE6?w=235&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
            "https://tomkhocamau.com/wp-content/uploads/2018/11/tom-kho-ca-mau.jpg"
        ],
        badge: "Cao cấp"
    },
    {
        id: 7,
        name: "Đường Thốt Nốt",
        price: "75.000đ/kg",
        origin: "An Giang",
        description: "Nấu thủ công từ nước mật hoa thốt nốt, vị ngọt dịu, thơm lừng và giàu khoáng chất.",
        category: "Bánh kẹo",
        image: "https://th.bing.com/th/id/OIP.ED1_EeHEc-vv4UyBWr55zQHaEJ?w=279&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
        images: [
            "https://th.bing.com/th/id/OIP.ED1_EeHEc-vv4UyBWr55zQHaEJ?w=279&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
            "https://static.vinwonders.com/production/duong-thot-not-an-giang-1.jpg"
        ],
        badge: "Tự nhiên"
    },
    {
        id: 8,
        name: "Quýt Hồng Sa Đéc",
        price: "60.000đ/kg",
        origin: "Đồng Tháp",
        description: "Quả to, vỏ mỏng màu hồng cam tuyệt đẹp, mọng nước và có vị chua ngọt thanh mát.",
        category: "Trái cây tươi",
        image: "https://th.bing.com/th/id/OIP.dI7o5olnCQsjO6qdCwzoywHaE1?w=259&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
        images: [
            "https://th.bing.com/th/id/OIP.dI7o5olnCQsjO6qdCwzoywHaE1?w=259&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
            "https://media.vov.vn/sites/default/files/styles/large/public/2021-01/quyt_hong_3.jpg"
        ],
        badge: "Mùa vụ"
    },
    {
        id: 9,
        name: "Bánh Phồng Chuối Sơn Đốc",
        price: "55.000đ/gói",
        origin: "Bến Tre",
        description: "Nướng lên giòn rụm, thơm nức mùi chuối chín nướng hòa quyện cùng vị béo của nước cốt dừa.",
        category: "Bánh kẹo",
        image: "https://down-vn.img.susercontent.com/file/vn-11134207-7ra0g-m8j2yt10jslec6",
        images: [
            "https://down-vn.img.susercontent.com/file/vn-11134207-7ra0g-m8j2yt10jslec6",
            "https://static.vinwonders.com/production/banh-phong-son-doc-1.jpg"
        ],
        badge: "Giòn tan"
    },
    {
        id: 10,
        name: "Rượu Sim Phú Quốc",
        price: "180.000đ/chai",
        origin: "Kiên Giang",
        description: "Lên men tự nhiên từ trái sim rừng mọng nước, vị ngọt chát nhẹ đặc trưng, tốt cho tiêu hóa.",
        category: "Đồ uống",
        image: "https://resortsinternational.vn/wp-content/uploads/2021/04/ruou-sim-phu-quoc-resorts-international.jpg",
        images: [
            "https://resortsinternational.vn/wp-content/uploads/2021/04/ruou-sim-phu-quoc-resorts-international.jpg",
            "https://static.vinwonders.com/production/ruou-sim-phu-quoc-1.jpg"
        ],
        badge: "Đặc sản đảo"
    },
    {
        id: 11,
        name: "Gạo Huyết Rồng",
        price: "45.000đ/kg",
        origin: "Long An",
        description: "Hạt gạo thon dài, lớp cám màu đỏ sẫm, khi nấu chín mềm xốp và vô cùng dồi dào dinh dưỡng.",
        category: "Thực phẩm",
        image: "https://bizweb.dktcdn.net/100/004/714/articles/cong-dung-gao-huyet-rong.jpg?v=1564994994027",
        images: [
            "https://bizweb.dktcdn.net/100/004/714/articles/cong-dung-gao-huyet-rong.jpg?v=1564994994027",
            "https://static.vinwonders.com/production/gao-huyet-rong-long-an-1.jpg"
        ],
        badge: "Bổ dưỡng"
    },
    {
        id: 12,
        name: "Khô Cá Sặc",
        price: "150.000đ/kg",
        origin: "Cà Mau",
        description: "Cá sặc đồng tẩm ướp vừa miệng, phơi đủ nắng, đem chiên hoặc nướng ăn cùng cơm trắng cực hao.",
        category: "Đồ khô & Mắm",
        image: "https://th.bing.com/th/id/OIP.GA-ggXuzdBf5a-SlJvdfzwHaGS?w=244&h=207&c=7&r=0&o=7&pid=1.7&rm=3",
        images: [
            "https://th.bing.com/th/id/OIP.GA-ggXuzdBf5a-SlJvdfzwHaGS?w=244&h=207&c=7&r=0&o=7&pid=1.7&rm=3",
            "https://mientaycogi.com/wp-content/uploads/2021/04/kho-ca-sac-ran-ca-mau.jpg"
        ],
        badge: "Ngon cơm"
    }
];

// Initialize UI
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
    setupEventListeners();
    initNavbarScroll();
});

// Render Product Cards
function renderProducts(items) {
    const grid = document.getElementById('productGrid');
    if (!grid) return;
    
    grid.innerHTML = items.map(product => `
        <div class="product-card" onclick="if(!event.target.closest('.add-to-cart')) window.location.href='product-detail.html?id=${product.id}'" style="cursor: pointer;">
            <div class="product-img-wrapper">
                <div class="product-badge">${product.badge}</div>
                <img src="${product.image}" alt="${product.name}" class="product-img">
            </div>
            <div class="product-details">
                <h3>${product.name}</h3>
                <div class="product-origin">
                    <i data-lucide="map-pin" style="width:14px"></i>
                    <span>${product.origin}</span>
                </div>
                <p class="product-description">${product.description || ""}</p>
                <div class="product-footer">
                    <span class="price">${product.price}</span>
                    <button class="add-to-cart" onclick="event.stopPropagation(); addToCart(${product.id})">
                        <i data-lucide="plus"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    // Re-initialize icons for dynamic content
    if (window.lucide) {
        lucide.createIcons();
    }
}

// Event Listeners
function setupEventListeners() {
    // Tabs filtering
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            const category = tab.textContent;
            if (category === 'Tất cả') {
                renderProducts(products);
            } else {
                const filtered = products.filter(p => p.category === category);
                renderProducts(filtered);
            }
        });
    });

    // Login button simulation
    const loginBtn = document.getElementById('loginBtn');
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            alert('Chức năng đăng nhập đang được phát triển!');
        });
    }

    // Seller channel simulation
    const sellerBtn = document.getElementById('sellerBtn');
    if (sellerBtn) {
        sellerBtn.addEventListener('click', () => {
            window.location.href = 'shop/dashboard.html';
        });
    }
}

// Navbar scroll effect
function initNavbarScroll() {
    const nav = document.getElementById('navbar');
    if (!nav) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            // Only remove if it doesn't have a permanent class (if you decide to add one)
            if (!nav.classList.contains('permanent-opaque')) {
                nav.classList.remove('scrolled');
            }
        }
    });
}

// Global Actions
let cartCount = 0;
window.addToCart = (id) => {
    cartCount++;
    document.querySelector('.cart-count').textContent = cartCount;
    const product = products.find(p => p.id === id);
    
    // Notification effect
    const btn = event.currentTarget;
    btn.style.background = '#2E7D32';
    btn.innerHTML = '<i data-lucide="check"></i>';
    lucide.createIcons();
    
    setTimeout(() => {
        btn.style.background = '#1A1A1A';
        btn.innerHTML = '<i data-lucide="plus"></i>';
        lucide.createIcons();
    }, 1500);
};

// Dynamic Mobile Navbar Logic
function initMobileNavbar() {
    const navContainer = document.querySelector('.nav-container');
    const navLinks = document.querySelector('.nav-links');
    if (!navContainer || !navLinks) return;

    // Check if toggle already exists
    if (document.getElementById('menuToggle')) return;

    // Create menu toggle button
    const menuToggle = document.createElement('button');
    menuToggle.className = 'menu-toggle';
    menuToggle.id = 'menuToggle';
    menuToggle.setAttribute('aria-label', 'Toggle navigation menu');
    menuToggle.innerHTML = '<i data-lucide="menu"></i>';

    // Insert menu toggle in container
    navContainer.appendChild(menuToggle);

    // Create mobile actions container inside nav-links if not exists
    let mobileActions = navLinks.querySelector('.mobile-actions');
    if (!mobileActions) {
        mobileActions = document.createElement('div');
        mobileActions.className = 'mobile-actions';
        
        // Clone buttons for mobile view to preserve layout
        const loginBtn = document.querySelector('.login-btn');
        const sellerBtn = document.querySelector('.seller-btn');
        
        if (loginBtn) {
            const loginClone = loginBtn.cloneNode(true);
            loginClone.classList.add('mobile-action-btn');
            mobileActions.appendChild(loginClone);
        }
        if (sellerBtn) {
            const sellerClone = sellerBtn.cloneNode(true);
            sellerClone.classList.add('mobile-action-btn');
            mobileActions.appendChild(sellerClone);
        }
        navLinks.appendChild(mobileActions);
    }

    // Toggle menu state
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        navLinks.classList.toggle('active');
        const isActive = navLinks.classList.contains('active');
        menuToggle.innerHTML = isActive ? '<i data-lucide="x"></i>' : '<i data-lucide="menu"></i>';
        if (window.lucide) {
            lucide.createIcons();
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navLinks.classList.contains('active') && !e.target.closest('#navbar')) {
            navLinks.classList.remove('active');
            menuToggle.innerHTML = '<i data-lucide="menu"></i>';
            if (window.lucide) {
                lucide.createIcons();
            }
        }
    });
}

// Initialize everything safely
document.addEventListener('DOMContentLoaded', () => {
    initNavbarScroll();
    initMobileNavbar();
    if (typeof renderProducts === 'function') {
        renderProducts(products);
    }
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
