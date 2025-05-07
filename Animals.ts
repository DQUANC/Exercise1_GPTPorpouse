/**
 * This project is a small project to practice:
 * - Classes 
 * - Interfaces
 * - Objects
 */

interface animal {
    animalId: number,
    name: string,
    specie: string
};

class Animal {
    animals: animal[] = [];

    move(): string{
        return "Walking...";
    };
};

class Dog extends Animal {
    dogs: animal[] = []

    sound(): string{
        return "Barking..."
    };

    tree(quantity: number): void {
        const structure: string = '*';
        for(let i = 0; i <= quantity; i += 2){
            const simbol = structure.repeat(i);
            const space = ' '.repeat((quantity - i)/2);
            console.log(`${space} ${simbol}`);
        };
    };
};

const smallDog = new Dog();
const randomAnimal = new Animal();

console.log("Action: ", randomAnimal.move());
console.log("Action: ", smallDog.sound());

smallDog.tree(20);