/**
 * Create all needed to manage the users of a system (clients and employees)
 */

interface Person {
    name: string;
    surname: string;
    age?: number;
    status: string;
}

interface Client extends Person {
    clientId: number;
    email: string;
    phone: string;
    address?: string;
}

interface Employee extends Person {
    employeeId: number;
    email: string;
    phone: string;
    job: string;
}

class PersonManager<T extends Person> {
    protected items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    update(id: number, newItem: T, idField: keyof T): T | undefined {
        const index = this.items.findIndex(i => i[idField] === id);
        if (index !== -1) {
            this.items[index] = newItem;
            return this.items[index];
        } else {
            console.warn(`Item with ID ${id} not found.`);
            return undefined;
        }
    }

    delete(id: number, idField: keyof T): void {
        const index = this.items.findIndex(i => i[idField] === id);
        if (index !== -1) {
            this.items.splice(index, 1);
            console.log(`Item with ID ${id} deleted successfully.`);
        } else {
            console.warn(`Item with ID ${id} not found.`);
        }
    }

    getById(id: number, idField: keyof T): T | undefined {
        return this.items.find(i => i[idField] === id);
    }

    list(): T[] {
        return this.items;
    }
}

class ClientManager extends PersonManager<Client> {}

class EmployeeManager extends PersonManager<Employee> {}

// === Usage ===

const clientManager = new ClientManager();
const employeeManager = new EmployeeManager();

clientManager.add({
    name: "Yoram",
    surname: "ben Israel",
    age: 22,
    status: "Active",
    clientId: 1,
    email: "yoram@email.com",
    phone: "+57",
    address: "Colombia"
});

clientManager.add({
    name: "Gad",
    surname: "ben Meushar",
    age: 21,
    status: "Active",
    clientId: 2,
    email: "gad@email.com",
    phone: "+502",
    address: "Guatemala"
});

clientManager.add({
    name: "Uri",
    surname: "ben Meushar",
    age: 18,
    status: "Non-Active",
    clientId: 3,
    email: "uri@email.com",
    phone: "+502",
    address: "Guatemala"
});

console.log("Clients:", clientManager.list());

employeeManager.add({
    name: "Alexander",
    surname: "Olivares",
    age: 22,
    status: "Half-Active",
    employeeId: 1,
    email: "alexander@email.com",
    phone: "+502",
    job: "Call-Center"
});

employeeManager.add({
    name: "Ana Maria",
    surname: "Polo",
    age: 50,
    status: "Active",
    employeeId: 2,
    email: "anamaria@email.com",
    phone: "+1",
    job: "Judge"
});

console.log("Employees:", employeeManager.list());

const client = clientManager.getById(2, "clientId");
console.log("Get Client by ID 2:", client);

const employee = employeeManager.getById(2, "employeeId");
console.log("Get Employee by ID 2:", employee);

clientManager.update(2, {
    name: "Gad Updated",
    surname: "ben Meushar",
    age: 22,
    status: "Active",
    clientId: 2,
    email: "gadnew@email.com",
    phone: "+503",
    address: "New Address"
}, "clientId");

employeeManager.update(2, {
    name: "Ana Maria Updated",
    surname: "Polo",
    age: 51,
    status: "Active",
    employeeId: 2,
    email: "anamaria.new@email.com",
    phone: "+1",
    job: "Senior Judge"
}, "employeeId");

console.log("Updated Clients:", clientManager.list());
console.log("Updated Employees:", employeeManager.list());

clientManager.delete(3, "clientId");
employeeManager.delete(2, "employeeId");

console.log("Final Clients:", clientManager.list());
console.log("Final Employees:", employeeManager.list());
