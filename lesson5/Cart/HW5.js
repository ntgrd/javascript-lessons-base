const cartProduct = {
    render(product) {
        return `<div class="product">
                    <div>Type: ${product.type}</div>
                    <div>Quantity: ${product.quantity}</div>
                    <div>Price: ${product.price}</div>`
    }
}

const cart = {
    cartListBlock: null,
    cartBlock: null,
    cartButton: null,
    cartProduct,
    goods: [
        {
            id_product: 1 ,
            type: 'shirt',
            quantity: 5,
            price: 500
        },
        {
            id_product: 2 ,
            type: 'sweeter',
            quantity: 10,
            price: 1000
        },
        {
            id_product: 3 ,
            type: 'trousers',
            quantity: 20,
            price: 1500
        }
    ],
    
    init() {
        // let cartList = document.querySelector('.cart-list');
        // if (cartList !== null) cartList.remove(); //очистка корзины
        //
        this.cartBlock = document.querySelector('.cart');
        this.cartListBlock = document.createElement('div');
        this.cartBlock.appendChild(this.cartListBlock);
        this.cartListBlock.classList.add('cart-list');
        
        this.cartButton = document.querySelector('.cart-button');
        this.cartButton.addEventListener('click', this.clearCart.bind(this));
        
        this.render();
    },
    
    render() {
        if (this.goods.length) {
            this.goods.forEach(good => {
                this.cartListBlock.insertAdjacentHTML('beforeend', cartProduct.render(good));
            });
            this.cartListBlock.insertAdjacentHTML('beforeend', `<div class = "Total">Goods in cart <b>${this.countCart()}</b> Total price ${this.countCartPrice()}</div>`);
        } else {
            this.cartListBlock.textContent = 'Cart empty';
        }
        console.log('1, cart.goods');
    },
    clearCart() {
        this.goods = [];
        this.render();
    },
    
    countCartPrice() {
        return this.goods.reduce((accum, element) => accum + element.quantity * element.price, 0);
    },
    countCart() {
        return this.goods.length;
    }
};

cart.init();

    // console.log(cart.countCartPrice());
