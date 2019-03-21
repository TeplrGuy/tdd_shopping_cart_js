const Item = require("./Item")

class Cart {
    constructor() {
        this.items = new Map();
        this.totalPrice = 0;
    }

    getItems() {
        return this.items;
    }

    getTotalPrice() {
        this.totalQuantities = 0;
        this.getItems().forEach((v, k) => {
            this.totalQuantities += v
        });
        return `Your Total Price: ${this.totalPrice} and Number of Items in the cart: ${this.totalQuantities}`;
    }

    addItem(newItem, quantity) {
        this.items.set(newItem, 
            this.items.get(newItem) === undefined ? 
            quantity : quantity + this.items.get(newItem));
        this.totalPrice += quantity * newItem.price;
    }

    removeItem(item, quantity) {
        const intialQuantity = this.items.get(item)
        const quantityDifference = intialQuantity - quantity
        if (intialQuantity < 0)
            return "This item is not in your cart"
        if (quantityDifference < 0)
            return "You cannot remove more items than you have"
        let tmpArr = [];
        this.items.set(item,
            quantityDifference
        );
        this.getItems()
            .forEach((v, k) => {
                tmpArr.push(`${k.name} x${v} - $${k.price * this.items.get(k)}`)
        });
        
        return tmpArr[0];
    }

    getItemQuantities() {
        let tmpArr = [];
        this.getItems().forEach((v, k) => tmpArr.push(`${k.name} - x${v}`));
        return tmpArr;

    }

    getItemizedList() {
        let tmpArr = [];
        this.getItems()
            .forEach((v, k) => tmpArr.push(`${k.name} x${v} - $${k.price * this.items.get(k)}`));
        return tmpArr;

    }

    getItemsonSale() {
        let tmpArr = [];
        this.getItems()
            .forEach((v, k) => {
                if (k.onSale === true)
                    tmpArr.push(`${k.name} x${v} - $${k.price * this.items.get(k)}`)
            });
            return tmpArr
    }

}


module.exports = Cart;
