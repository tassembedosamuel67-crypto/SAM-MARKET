// Variables globales
let cart = [];
let products = [];
let allProducts = [];

// Initialiser l'application
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 SAM MARKET - Version GitHub Pages');
    loadProducts();
    loadCartFromLocalStorage();
});

// Charger les produits
function loadProducts() {
    allProducts = [
        {
            id: 1,
            name: 'Téléphone Samsung Galaxy A52',
            description: 'Excellent état, batterie neuve, écran 6.5 pouces',
            price: 150000,
            category: 'Téléphones',
            emoji: '📱',
            seller: 'SAM Electronics',
            stock: 5
        },
        {
            id: 2,
            name: 'Ordinateur Portable ASUS VivoBook',
            description: 'Intel i5, 8GB RAM, 256GB SSD, Windows 11',
            price: 350000,
            category: 'Électronique',
            emoji: '💻',
            seller: 'Tech Store',
            stock: 3
        },
        {
            id: 3,
            name: 'Vélo Mountain Bike Terrain',
            description: '21 vitesses, pneus tout terrain, cadre aluminium',
            price: 85000,
            category: 'Sports',
            emoji: '🚴',
            seller: 'Sports Plus',
            stock: 2
        },
        {
            id: 4,
            name: 'Chaussures Nike Air Max',
            description: 'Taille 42, couleur blanche, confortable',
            price: 45000,
            category: 'Mode',
            emoji: '👟',
            seller: 'Fashion Hub',
            stock: 10
        },
        {
            id: 5,
            name: 'Livre Les Misérables',
            description: 'Edition originale de Victor Hugo, bon état',
            price: 15000,
            category: 'Livres',
            emoji: '📚',
            seller: 'Bookstore BF',
            stock: 7
        },
        {
            id: 6,
            name: 'Caméra GoPro Hero 11',
            description: '4K, waterproof, batterie et accessoires inclus',
            price: 200000,
            category: 'Électronique',
            emoji: '📹',
            seller: 'Pro Gear',
            stock: 1
        }
    ];

    products = allProducts;
    displayProducts(products);
}

// Afficher les produits
function displayProducts(productsToDisplay) {
    const productsGrid = document.getElementById('productsGrid');

    if (productsToDisplay.length === 0) {
        productsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem;">Aucun produit trouvé</p>';
        return;
    }

    productsGrid.innerHTML = productsToDisplay.map(product => `
        <div class="product-card">
            <div class="product-image">${product.emoji}</div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-description">${product.description}</div>
                <div class="product-seller">Par: ${product.seller}</div>
                <div class="product-price">${product.price.toLocaleString('fr-BF')} FCFA</div>
                <div style="font-size: 0.8rem; color: #666; margin-bottom: 0.5rem;">Stock: ${product.stock}</div>
                <div class="product-actions">
                    <button class="btn-add-cart" onclick="addToCart(${product.id})">🛒 Ajouter</button>
                    <button class="btn-view-details" onclick="viewProductDetails(${product.id})">Détails</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Ajouter au panier
function addToCart(productId) {
    const product = allProducts.find(p => p.id === productId);

    if (!product) {
        showNotification('Produit non trouvé');
        return;
    }

    if (product.stock === 0) {
        showNotification('Produit en rupture de stock');
        return;
    }

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        if (existingItem.quantity < product.stock) {
            existingItem.quantity++;
        } else {
            showNotification('Stock insuffisant');
            return;
        }
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    saveCartToLocalStorage();
    updateCartDisplay();
    showNotification(`✅ "${product.name}" ajouté au panier!`);
}

// Mettre à jour le panier
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

// Retirer du panier
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCartToLocalStorage();
    updateCartDisplay();
    showCartModal();
    showNotification('Produit retiré du panier');
}

// Voir les détails
function viewProductDetails(productId) {
    const product = allProducts.find(p => p.id === productId);

    if (!product) {
        showNotification('Produit non trouvé');
        return;
    }

    alert(`📦 ${product.name}\n\nDescription: ${product.description}\nPrix: ${product.price.toLocaleString('fr-BF')} FCFA\nVendeur: ${product.seller}\nStock: ${product.stock}\n\nCliquez sur "Ajouter" pour acheter!`);
}

// Sauvegarder le panier
function saveCartToLocalStorage() {
    localStorage.setItem('sammarket-cart', JSON.stringify(cart));
}

// Charger le panier
function loadCartFromLocalStorage() {
    const savedCart = localStorage.getItem('sammarket-cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartDisplay();
    }
}

// Notification
function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Rechercher
function searchProducts() {
    const query = document.getElementById('searchInput').value.toLowerCase();

    if (!query) {
        products = allProducts;
        displayProducts(products);
        return;
    }

    const filtered = allProducts.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
    );

    products = filtered;
    displayProducts(filtered);
    showNotification(`${filtered.length} produit(s) trouvé(s)`);
}

// Filtrer par catégorie
function filterByCategory(category) {
    const filtered = allProducts.filter(p => p.category.includes(category));
    products = filtered;
    displayProducts(filtered);
    showNotification(`Catégorie "${category}" - ${filtered.length} produit(s)`);
    document.getElementById('produits').scrollIntoView({ behavior: 'smooth' });
}

// Afficher le panier
function showCart() {
    showCartModal();
}

function showCartModal() {
    const modal = document.getElementById('cartModal');
    const cartModalItems = document.getElementById('cartModalItems');
    const cartTotal = document.getElementById('cartTotal');

    if (cart.length === 0) {
        cartModalItems.innerHTML = '<p>Votre panier est vide</p>';
        cartTotal.innerHTML = '';
    } else {
        const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

        cartModalItems.innerHTML = '<table style="width: 100%; border-collapse: collapse;">' +
            cart.map(item => `
                <tr style="border-bottom: 1px solid #ddd; padding: 0.5rem 0;">
                    <td style="padding: 0.5rem;">${item.name}</td>
                    <td style="padding: 0.5rem; text-align: right;">x${item.quantity}</td>
                    <td style="padding: 0.5rem; text-align: right;">${(item.price * item.quantity).toLocaleString('fr-BF')} FCFA</td>
                    <td style="padding: 0.5rem;"><button onclick="removeFromCart(${item.id})" style="background: red; color: white; border: none; padding: 0.3rem 0.5rem; cursor: pointer; border-radius: 3px;">✕</button></td>
                </tr>
            `).join('') +
            '</table>';

        cartTotal.innerHTML = `Total: <span style="color: var(--primary-color);">${totalPrice.toLocaleString('fr-BF')} FCFA</span>`;
    }

    modal.style.display = 'block';
}

// Fermer le modal
function closeCart() {
    document.getElementById('cartModal').style.display = 'none';
}

// Passer la commande
function checkout() {
    if (cart.length === 0) {
        showNotification('Votre panier est vide');
        return;
    }

    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const message = `Commande confirmée!\n\nTotal: ${totalPrice.toLocaleString('fr-BF')} FCFA\n\nMerci pour votre achat sur SAM MARKET!`;

    alert(message);
    cart = [];
    saveCartToLocalStorage();
    updateCartDisplay();
    closeCart();
    showNotification('Commande passée avec succès!');
}

// Fermer le modal en cliquant en dehors
window.onclick = function(event) {
    const modal = document.getElementById('cartModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

console.log('✨ SAM MARKET v1.0 - Hébergé sur GitHub Pages!');
