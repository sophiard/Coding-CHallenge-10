//task 1 
class Product {
    constructor(name, id, price, stock) {
        this.name = name,
        this.id = id,
        this.price = price,
        this.stock = stock
    };// Sets up product as a class 
    getDetails() {
        return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Available Stock: ${this.stock}`
    }
    updateStock(quantity){
       if(quantity > this.stock) {
        return `Not Enough Available Stock For This Item`; // if order wa shigher than stock available 
       }
       this.stock -= quantity;// This helps reduce stock and quanitiy 
    }
};
const prod1 = new Product("Laptop", 101, 1200, 10);
console.log("Task 1 part 1:", prod1.getDetails());
prod1.updateStock(3);
console.log("Task 1 part 2:", prod1.getDetails());  
//logged output 


// Task 2 - Created Order Class
class Order {
    constructor(orderId, product, quantity) {
        this.orderId = orderId,
        this.product = product,
        this.quantity = quantity
        //set up orderid, producut, and quanitty 

        this.product.updateStock(this.quantity) //updates the stock
    }
    getOrderDetails(){
        const totalPrice = this.product.price * this.quantity //calculates the total price 
        return `Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${totalPrice}`;
    }// retuning the order detials
};
const order1 = new Order(501, prod1, 2);
console.log("Task 2 part 1:", order1.getOrderDetails());
console.log("Task 2 part 2:", prod1.getDetails()); 
//logging output 

//Task 3 - Created Inventory Class
class Inventory {
    constructor() {
        this.products = []; //sets up an array
    }
    addProduct(product) {
        this.products.push(product); //adds a new product 
    }

    listProducts() { 
        this.products.forEach(product => console.log(product.getDetails()));
    }
}

const inventory = new Inventory();
inventory.addProduct(prod1);
inventory.listProducts();
//logged new output 

