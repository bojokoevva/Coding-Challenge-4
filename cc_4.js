// Task 1: If Statements - Customer Discounts

let purchaseAmount = 150; // Declare a variable for the purchase amount
if (purchaseAmount > 100) {
    let discount = purchaseAmount * 0.1; // Apply a 10% discount if amount > $100
    purchaseAmount -= discount;
}
console.log(`Final amount after discount: $${purchaseAmount}`); 
