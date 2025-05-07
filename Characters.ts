/**
 * A project to create lists of villians and heroes, those should be different classes and a CRUD for both
 */

interface Person {
    name: string,
    age?: number,
    genre: string,
    country: string,
    status: string,
    habilities: string
};

interface Hero extends Person {
    heroId: number,
    heroName: string,
};

interface Villian extends Person {
    villianId: number,
    villianName: string,
};

class CharacterManager<T extends Person> {
    private Character: T[] = [];

    // Create -- C
        addCharacter(NewCharacter: T): string {
            this.Character.push(NewCharacter);
            return (`The caracter ${NewCharacter} is succesfully created.`);
        };
    
    // Read -- R
        listCharacters(): T[]{
            return this.Character;
        };

        getCharacterById(id: number, idField: keyof T): T | undefined{
            return this.Character.find(i => i[idField] === id);
        };
    
    // Update -- U
        updateCharacter(id: number, newInfo: T, idField: keyof T): T | undefined {
            let index = this.Character.findIndex(i => i[idField] === id);
            if(index !== -1){
                this.Character[index] = newInfo;
                console.log(`The character with id: ${id} succesfully updated.`)
                return this.Character[index];
            } else {
                console.log(`The caracter with Id: ${id} doen't exist.`);
                return undefined;
            };
        };

    // Delete -- D
        deleteCharacter(id: number, idField: keyof T): T | undefined {
            let index = this.Character.findIndex(i => i[idField] === id);
            if(index !== -1){
                console.log(`---- Succesfully deleted. ----`);
                console.log(`------- The caracter: `);
                this.Character.splice(index, 1)
                return this.Character[index];
            } else {
                console.log(`The character with id: ${id} doen't exist.`);
                return undefined;
            };
        };
};

class HeroManager extends CharacterManager<Hero>{};
class VillianManager extends CharacterManager<Villian>{};

// Example use

const heroManager = new HeroManager();
const villianManager = new VillianManager();

// Create -C
// Hero

heroManager.addCharacter({
    name: 'Yoram', 
    age: 22, 
    genre: 'M', 
    country: 'Col', 
    status: 'Active', 
    habilities: 'Super intelligence, control the sound.', 
    heroId: 1, 
    heroName: 'DsLatorre'
});
heroManager.addCharacter({
    name: 'Gad', 
    age: 21, 
    genre: 'M', 
    country: 'Gt', 
    status: 'Active', 
    habilities: 'Fly, invisibility, telequinesis', 
    heroId: 2, 
    heroName: 'DqCruz'
});
heroManager.addCharacter({
    name: 'Pepe', 
    age: 21, 
    genre: 'M', 
    country: 'Gt', 
    status: 'Active', 
    habilities: 'Fly, invisibility, telequinesis', 
    heroId: 3, 
    heroName: 'Pecas'
});

// Villian

villianManager.addCharacter({
    name: 'Efrain', 
    age: 24, 
    genre: 'M', 
    country: 'Gt', 
    status: 'Active', 
    habilities: 'Super ridiculus, ShitMind', 
    villianId: 1, 
    villianName: 'The KKs'
});
villianManager.addCharacter({
    name: 'Brandon', 
    age: 22, 
    genre: 'M', 
    country: 'Gt', 
    status: 'Active', 
    habilities: 'Super ridiculus, ShitMind, Super Lair', 
    villianId: 2, 
    villianName: 'The KKs 2.0'
});
villianManager.addCharacter({
    name: 'Deuel', 
    age: 23, 
    genre: 'M', 
    country: 'Gt', 
    status: 'Active', 
    habilities: 'Super ridiculus, ShitMind', 
    villianId: 3, 
    villianName: 'The KKs 3.0'
});

// Read -- R
//console.log("List of heroes: ", heroManager.listCharacters());
console.log("List of villians: ", villianManager.listCharacters()); 

//console.log("Hero Searched: ", heroManager.getCharacterById(1, "heroId"));
//console.log("Villian seaarched: ", villianManager.getCharacterById(2, "villianId"));

// Update -- U

heroManager.updateCharacter(3,
    {
    name: 'Pepe', 
    age: 30, 
    genre: 'M', 
    country: 'Gt', 
    status: 'Active', 
    habilities: 'None', 
    heroId: 2, 
    heroName: 'Pecas'
}, "heroId"
);

// Delete -- D 

console.log(villianManager.deleteCharacter(1, "villianId"));
console.log("List of villians: ", villianManager.listCharacters()); 