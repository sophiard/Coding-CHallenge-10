// Task 1 
class Product {
    constructor(name, id, price, stock) {
        this.name = name,
        this.id = id,
        this.price = price,
        this.stock = stock
    } // Sets up product as a class 
    getDetails() {
        return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Available Stock: ${this.stock}`;
    }
    updateStock(quantity) {
        if (quantity > this.stock) {
            return `Not Enough Available Stock For This Item`; // if order was higher than stock available 
        }
        this.stock -= quantity; // This helps reduce stock and quantity 
    }
};

const prod1 = new Product("Laptop", 101, 1200, 10);
console.log("Task 1 part 1:", prod1.getDetails());
prod1.updateStock(3);
console.log("Task 1 part 2:", prod1.getDetails());  
// logged output 

// Task 2 - Created Order Class
class Order {
    constructor(orderId, product, quantity) {
        this.orderId = orderId,
        this.product = product,
        this.quantity = quantity; // set up orderId, product, and quantity 

        this.product.updateStock(this.quantity); // updates the stock
    }
    getOrderDetails() {
        const totalPrice = this.product.price * this.quantity; // calculates the total price 
        return `Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${totalPrice}`; // returning the order details
    }
};

const order1 = new Order(501, prod1, 2);
console.log("Task 2 part 1:", order1.getOrderDetails());
console.log("Task 2 part 2:", prod1.getDetails()); 
// logging output 

// Task 3 - Created Inventory Class
class Inventory {
    constructor() {
        this.products = []; // sets up an array
        this.orders = [];
    }
    addProduct(product) {
        this.products.push(product); // adds a new product 
    }

    listProducts() { 
        this.products.forEach(product => console.log(product.getDetails()));
    }// creates lists for product 

    placeOrder(orderId, product, quantity) {
        if (product.stock >= quantity) {
            let order = new Order(orderId, product, quantity);
            this.orders.push(order); 
        } else {
            return `not available right now : ${product.name}`;
        }
    }// shows product and order if available or if not available will say 

//task 4 
    listOrders() {
        this.orders.forEach(order => console.log("Task 4:", order.getOrderDetails())); 
    }

    // Task 5 Implementing Product Restocking 
    restockProduct(productId, quantity) {
        let product = this.products.find(product => product.id === productId);
        if (product) {
            product.stock += quantity;
        }
    }
}

const inventory = new Inventory();
inventory.addProduct(prod1);
inventory.listProducts(); 

// Task 4 logging 
inventory.placeOrder(601, prod1, 2);
inventory.listOrders(); 
console.log("task 4:", prod1.getDetails()); 

// Task 5 logging
inventory.restockProduct(101, 5);
console.log("Task 5:", prod1.getDetails());