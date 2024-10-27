window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
        window.location.reload();
    }
});


// Initialize cart from localStorage safely, ensuring it's an array
let cart = [];
if (typeof localStorage !== "undefined") {
    const storedCart = localStorage.getItem('cart');
    cart = storedCart ? JSON.parse(storedCart) : [];
} else {
    console.error("LocalStorage is not available.");
}

// Update cart count display
function updateCartCount() {
    const cartItemsCount = document.querySelector('.cart-items-count');
    if (cartItemsCount) {
        cartItemsCount.innerHTML = cart.length;
    } else {
        console.error("Cart items count element not found.");
    }
}

// Save cart back to localStorage
function saveCartInLocalStorage() {
    if (typeof localStorage !== "undefined") {
        localStorage.setItem('cart', JSON.stringify(cart));
    } else {
        console.error("LocalStorage is not available.");
    }
}

// Add to cart function
export function addToCart(name) {
    console.log("Adding to cart:", name);
    
    // Ensure cart is loaded correctly before proceeding
    cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Find if item already exists in cart
    let element = cart.find(item => item.name === name);

    if (element) {
        element.quantity += 1;
    } else {
        cart.push({
            name: name,
            quantity: 1
        });
    }

    console.log("Updated cart:", cart);

    updateCartCount();
    saveCartInLocalStorage();
}
