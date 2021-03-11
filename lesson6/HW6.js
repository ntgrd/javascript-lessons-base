const catalogProduct = {
    render(product) {
        return `<div class="product">
                    <img class="catalog__img" src=${product.img} alt="photo">
                    <div>Type: ${product.type}</div>
                    <div>Price: ${product.price}</div>
                    <button class="catalog__button" data-id_product="${product.id_product}">Add to cart</button>                    
            </div>`;
    },
}

const catalog = {
    catalogProduct,
    products: [
        {
            id_product: '1',
            img: 'img/card-1.png',
            type: 'shirt',
            price: 500
        },
        {
            id_product: '2',
            img: 'img/card-2.png',
            type: 'sweeter',
            price: 1000
        },
        {
            id_product: '3',
            img: 'img/card-3.png',
            type: 'trousers',
            price: 1500
        }
    ],

    render() {
        let catalogElement = document.getElementById('catalog');
        catalogElement.classList.add('catalog');

        let catalogHeading = document.createElement('h2');
        catalogHeading.textContent = "Catalog:";
        catalogHeading.classList.add('catalog__heading');
        catalogElement.appendChild(catalogHeading);

        let catalogContainer = document.createElement('div');
        catalogContainer.classList.add('catalog__container');

        this.products.forEach(product => catalogContainer.insertAdjacentHTML('beforeend', catalogProduct.render(product)));
        catalogElement.appendChild(catalogContainer);
        this.initClick();
    },
    initClick() {
        document.querySelector('body').addEventListener('click', (event) => {
            this.ClickHandler(event);
        });
    },
    ClickHandler(event) {
        if (event.target.className === 'catalog__button') this.ClickHandlerAddToCart(event)
        else {
            return};
    },

    ClickHandlerAddToCart(event) {
        //проверяем наличие товара в корзине
        let productNew = cart.goods.find(el => el.id_product === event.target.dataset.id_product);
        console.log(productNew)

        if (productNew === undefined) {
            let productCatalog = this.products.find(el => el.id_product === event.target.dataset.id_product);
            cart.goods.push({
                id_product: productCatalog.id_product,
                type: productCatalog.type,
                price: productCatalog.price,
                quantity: 1,
            })
// console.log (cart.goods)
        }
        else {
            let index = cart.goods.indexOf(productNew);
            if (~index) {
                cart.goods[index].quantity += 1;
            }
        }
        cart.init();
    }
}

catalog.render()

const cartProduct = {
    render(product) {
        return `<div class="product">
                    <div>Type: ${product.type}</div>
                    <div>Quantity: ${product.quantity}</div>
                    <div>Price: ${product.price}</div>`;
    },
}

const cart = {
    cartListBlock: null,
    cartBlock: null,
    cartButton: null,
    cartProduct,
    goods: [
        // {
        //     id_product: '1',
        //     type: 'shirt',
        //     quantity: 1,
        //     price: 500
        // },
        // {
        //     id_product: '2',
        //     type: 'sweeter',
        //     quantity: 1,
        //     price: 1000
        // },
        // {
        //     id_product: '3',
        //     type: 'trousers',
        //     quantity: 1,
        //     price: 1500
        // }
    ],

    init() {
        let cartList = document.querySelector('.cart-list');
        if (cartList !== null) cartList.remove(); //очистка корзины


        this.cartBlock = document.querySelector('.cart');
        //let cartHeading = document.createElement('h2');
        this.cartBlock.textContent = "Cart:";
        //cartHeading.classList.add('catalog__heading');
        //this.cartBlock.appendChild(cartHeading);
        this.cartListBlock = document.createElement('div');
        this.cartBlock.appendChild(this.cartListBlock);
        this.cartListBlock.classList.add('cart-list');

        this.cartButton = document.querySelector('.cart-button');
        this.cartButton.addEventListener('click', this.clearCart.bind(this));

        this.render();
    },

    render() {
        if (this.goods.length) {
            this.goods.forEach(product => {
                this.cartListBlock.insertAdjacentHTML('beforeend', cartProduct.render(product));
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
