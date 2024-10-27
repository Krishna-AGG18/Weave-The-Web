window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
        window.location.reload();
    }
});


export let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart) cart = [];

updateCartCount();
export function updateCartCount(){
    document.querySelector('.cart-items-count')
        .innerHTML = cart.length;
}

export function saveCartInLocalStorage(){
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(name){
    cart = JSON.parse(localStorage.getItem('cart'));
    let element;

    cart.forEach((value) => {
        if (name === value.name) element = value;
    })

    if (element){
        element.quantity += 1;
    }
    else{
        cart.push({
            name: name,
            quantity: 1
        })
    }
    console.log(cart);
    updateCartCount();

    saveCartInLocalStorage();
}

export function removeFromCart(name){
    let newCart = [];
    cart.forEach((value) =>{
        if (value.name !== name){
            newCart.push(value);
        }
    })
    cart = newCart;

    updateCartCount();

    saveCartInLocalStorage();
}