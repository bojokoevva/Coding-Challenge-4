// Task 1: If Statements - Customer Discounts

let purchaseAmount = 150; 
if (purchaseAmount > 100) {
    let discount = purchaseAmount * 0.1; // Apply a 10% discount if amount > $100
    purchaseAmount -= discount;
}
console.log(`Final amount after discount: $${purchaseAmount}`); 


// Task 2: For Loop - Sales Report

let sales = [120, 85, 200, 150, 90]; 
let totalSales = 0;
for (let i = 0; i < sales.length; i++) {
    totalSales += sales[i]; // Calculate total sales
}
console.log(`Total sales: $${totalSales}`); 


// Task 3: While Loop - Inventory Depletion

let stock = 10; 
while (stock > 0) {
    console.log(`Decreasing stock, current stock: ${stock}`); 
    stock--; // Decrease stock by 1
}


// Task 4: Do...While Loop - Customer Survey

let responses = 0; // Initialize responses to 0
do {
    responses++; // Simulate user input
    console.log(`Collected response #${responses}`); 
} while (responses < 3);


// Task 5: For...In Loop - Employee Information

let employee = {
    name: "Alice",
    position: "Manager",
    salary: 75000
};
for (let key in employee) {
    console.log(`${key}: ${employee[key]}`); 
}


// Task 6: For...Of Loop - Product Listings

let products = ["Laptop", "Mouse", "Keyboard"]; // Array of product names
for (let product of products) {
    console.log(`Product: ${product}`); 
}


// Task 7: forEach() Method - Order Processing

let orders = [101, 102, 103]; // Array of order IDs
orders.forEach(order => console.log(`Processing order ID: ${order}`)); // Log each order ID


// Task 8: Function Declaration - Tax Calculation

function calculateTax(amount, taxRate) {
    return amount * taxRate; // Calculate and return the tax
}
let taxAmount = calculateTax(200, 0.07); // Example usage
console.log(`Calculated tax: $${taxAmount}`); 


// Task 9: Function Expressions - Discount Application

let applyDiscount = function(price, discountPercent) {
    return price - (price * discountPercent); // Return discounted price
};
let discountedPrice = applyDiscount(100, 0.2); // Example usage
console.log(`Discounted price: $${discountedPrice}`); 