/**
 -- Exercise 3: Product Inventory System --
Requirements:
✅ Define a Product interface with:

id: number
name: string
price: number
quantity: number

✅ Create a ProductInventory class that:

Stores a list of products.

Provides methods:

addProduct(product: Product): void → adds a new product.
getProductById(id: number): Product | undefined → retrieves product by ID.
updateQuantity(id: number, quantity: number): void → updates the quantity.
calculateInventoryValue(): number → calculates the total value of all products (price × quantity).
 */

interface product {
    id: number,
    name: string,
    price: number,
    quantity: number
}

class ProductInventory {
    private products: product[] = []

    //Create -- C
        addProduct(Product: product): void {
            this.products.push(Product)
        }

    // Read -- R
        findProduct(id: number): product | undefined{
            return this.products.find(p => p.id === id)
        }

    // Update -- U
        updateQuantity(id: number, quantity: number): void {
            const product = this.findProduct(id);
            if (product) {
                product.quantity = quantity;
            }
        }

        updatePrice(id: number, price: number): void {
            const product = this.findProduct(id);
            if (product) {
                product.price = price;
            }
        }

    // Delete -- D
        deleteProduct(id: number): void {
            this.products.splice(id, 1)
        }

    // List products 
        listProducts(): product[]{
            return this.products
        }
    
    // Calculate the total value of all the products
        calculateInventoryValue(): number {
            return this.products.reduce((total, p) => total + (p.price * p.quantity), 0);
        }
}

// Example usage:
const inventory = new ProductInventory();

inventory.addProduct({ id: 1, name: "Laptop", price: 1000, quantity: 5 });
inventory.addProduct({ id: 2, name: "Mouse", price: 50, quantity: 20 });
inventory.addProduct({ id: 2, name: "Monitor", price: 500, quantity: 15 });

console.log("Inventory Value:", inventory.calculateInventoryValue());

inventory.updateQuantity(0, 3);
inventory.updateQuantity(1, 15);
inventory.updateQuantity(2, 10);

console.log("List of products: ", inventory.listProducts());
console.log("Updated Inventory Value:", inventory.calculateInventoryValue());

inventory.updatePrice(0, 1500);
inventory.updatePrice(1, 100);
inventory.updatePrice(2, 600);

console.log("List of products: ", inventory.listProducts());
console.log("Updated Inventory Value:", inventory.calculateInventoryValue());

inventory.deleteProduct(2);
console.log("List of products: ", inventory.listProducts());

inventory.findProduct(1);