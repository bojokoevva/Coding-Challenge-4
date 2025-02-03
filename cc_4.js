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