class Product {
    constructor(name, id, price, stock) {
        this.name = name,
        this.id = id,
        this.price = price,
        this.stock = stock
    };// Sets up product as a class 
    getDetails() {
        return `Item: ${this.name}, ID: ${this.id}, Price: $${this.price}, Available Stock: ${this.stock}`
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