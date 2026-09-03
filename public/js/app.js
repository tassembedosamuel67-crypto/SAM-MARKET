let cart = [];
let products = [];

document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 SAM MARKET chargé');
    loadProducts();
    checkServerHealth();
    loadCartFromLocalStorage();
});

async function checkServerHealth() {
    try {
        const response = await fetch('/api/health');
        const data = await response.json();
        console.log('✅ Serveur:', data.message);
    } catch (error) {
        console.error('❌ Erreur:', error);
    }
}

function loadProducts() {
    products = [
        { id: 1, name: 'Téléphone Samsung Galaxy', description: 'Excellent état', price: 150000, emoji: '📱', seller: 'SAM Electronics' },
        { id: 2, name: 'Ordinateur Portable ASUS', description: 'Intel i5, 8GB RAM', price: 350000, emoji: '💻', seller: 'Tech Store' },
        { id: 3, name: 'Vélo Mountain Bike', description: '21 vitesses', price: 85000, emoji: '🚴', seller: 'Sports Plus' },
        { id: 4, name: 'Chaussures Nike', description: 'Taille 42', price: 45000, emoji: '👟', seller: 'Fashion Hub' },
        { id: 5, name: 'Livre Les Misérables', description: 'Edition originale', price: 15000, emoji: '📚', seller: 'Bookstore BF' },
        { id: 6, name: 'Caméra Go Pro Hero 11', description: '4K, waterproof', price: 200000, emoji: '📹', seller: 'Pro Gear' }
    ];
    displayProducts(products);
}

function displayProducts(productsToDisplay) {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = productsToDisplay.map(product => `
        <div class="product-card">
            <div class="product-image">${product.emoji}</div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-description">${product.description}</div>
                <div style="font-size: 0.8rem; color: #999; margin-bottom: 0.5rem;">Par: ${product.seller}</div>
                <div class="product-price">${product.price.toLocaleString('fr-BF')} FCFA</div>
                <div class="product-actions">
                    <button class="btn-add-cart" onclick="addToCart(${product.id})">🛒 Ajouter</button>
                    <button class="btn-view-details" onclick="viewProductDetails(${product.id})">Détails</button>
                </div>
            </div>
        </div>
    `).join('');
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({...product, quantity: 1});
    }
    
    saveCartToLocalStorage();
    updateCartDisplay();
    showNotification(`✅ "${product.name}" ajouté au panier!`);
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Votre panier est vide</p>';
        return;
    }
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartItems.innerHTML = `<p><strong>${totalItems}</strong> article(s) • <strong>${totalPrice.toLocaleString('fr-BF')}</strong> FCFA</p>`;
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCartToLocalStorage();
    updateCartDisplay();
}

function viewProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        alert(`${product.name}\n\nPrix: ${product.price.toLocaleString('fr-BF')} FCFA\nVendeur: ${product.seller}`);
    }
}

function saveCartToLocalStorage() {
    localStorage.setItem('sammarket-cart', JSON.stringify(cart));
}

function loadCartFromLocalStorage() {
    const savedCart = localStorage.getItem('sammarket-cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartDisplay();
    }
}

function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.classList.add('show');
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
}

console.log('✨ SAM MARKET - Prêt pour le succès!');