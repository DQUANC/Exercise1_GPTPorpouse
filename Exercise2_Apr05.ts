/**
 * Exercise: Build a Simple User Management Module
Requirements:
Write a TypeScript module that:
✅ Defines a User interface with fields: id (number), name (string), email (string), and isActive (boolean).
✅ Creates a UserManager class that:

Has a private array to store users.

Provides methods:

addUser(user: User): void → adds a new user.

getUserById(id: number): User | undefined → finds a user by ID.

deactivateUser(id: number): void → sets isActive to false.

listActiveUsers(): User[] → returns only active users.
 */

interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

class UserManager {
    private users: User[] = [];

    addUser(user: User): void {
        this.users.push(user);
    }

    getUserById(id: number): User | undefined {
        return this.users.find(u => u.id === id);
    }

    deactivateUser(id: number): void {
        const user = this.getUserById(id);
        if (user) {
            user.isActive = false;
        }
    }

    listActiveUsers(): User[] {
        return this.users.filter(u => u.isActive);
    }
}

// Example usage:
const manager = new UserManager();
manager.addUser({ id: 1, name: "Alice", email: "alice@example.com", isActive: true });
manager.addUser({ id: 2, name: "Bob", email: "bob@example.com", isActive: true });

console.log(manager.listActiveUsers());
manager.deactivateUser(1);
console.log(manager.listActiveUsers());
