// Task 1: If Statements - Customer Discounts

let purchaseAmount = 150; // Declare a variable for the purchase amount
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