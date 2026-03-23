 //v. app.js - Main application
import { getAllProducts, searchProducts } from "./product.js";
import { addToCart, getCartItems, getCartTotal, updateQuantity, removeFromCart } from "./cart.js";
import { processPayment } from "./payment.js";

console.log("=== E-Commerce Store ===");

console.log("\nAll Products:");
console.log(getAllProducts());

console.log("\nSearching phone:");
console.log(searchProducts("phone"));

console.log("\nAdding to Cart");
console.log(addToCart(1,2));
console.log(addToCart(3,3));
console.log(addToCart(1,1));

console.log("\nCart Items");
console.log(getCartItems());
console.log("Cart Total:", getCartTotal());

console.log("\nUpdating Quantity");
console.log(updateQuantity(1,2));

console.log("\nRemoving Item");
console.log(removeFromCart(3));

console.log("\nUpdated Cart");
console.log(getCartItems());
console.log("Cart Total:", getCartTotal());

console.log("\nCheckout");
const order = processPayment("upi","WELCOME10");

console.log(order);
                  