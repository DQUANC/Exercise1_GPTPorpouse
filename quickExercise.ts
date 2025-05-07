/**
 * This is a quick exercise to practice the classes, interfaces and objects
 */

interface person {
    name: string,
    age: number,
    genre: string
};

interface singer extends person {
    musicalGenre: string,
    status: string
    singerId: number
};

class artist<T extends person>{
    artists: T[] = [];

    add(newArtist: T): void {
        this.artists.push(newArtist);
        console.log(`Artist created succesfully.`);
    };

    list(): T[] {
        return this.artists;
    };

    getArtistById(id: number, idField: keyof T): T | undefined {
        let index: number = this.artists.findIndex(i => i[idField] === id);
        if(index !== -1){
        return this.artists.find(i => i[idField] === id);
        } else {
            console.log(`The artist with id: ${id} doesn't exist.`);
            return undefined;
        };
    };

    update(id: number, idField: keyof T, newInfo: T): void {
        let index: number = this.artists.findIndex(i => i[idField] === id);
        if(index !== -1){
            this.artists[id - 1] = newInfo;
            console.log(`The artist have been updated succesfully.`);
        } else {
            console.log(`The artist with id ${id} doesn't exist.`);
        };
    };

    delete(id: number, idField: keyof T): void {
        let index: number = this.artists.findIndex(i => i[idField] === id);
        if(index !== -1){
            console.log(`The artist with id ${id} have been deleted succesfylly`);
            this.artists.splice(id - 1, 1);
        } else {
            console.log(`The artist with id ${id} doesn't exist.`);
        };
    };
};

const singer = new artist<singer>()

singer.add({name: 'Yoram', age: 22, genre: 'M', musicalGenre: 'Rock', status: 'Active', singerId: 1});
singer.add({name: 'Andres', age: 25, genre: 'F', musicalGenre: 'Pop', status: 'Non-Active', singerId: 2});
singer.add({name: 'Sebastian', age: 24, genre: 'M', musicalGenre: 'Indie', status: 'Active', singerId: 3});
console.log(`List of singers: `, singer.list());

singer.update(2, 
    "singerId", 
    {
    name: 'Camila', 
    age: 22, 
    genre: 'F', 
    musicalGenre: 'Lirical', 
    status: 'Non-Active', 
    singerId: 2
    }
);

console.log(`List of singers: `,singer.list());

singer.delete(3, "singerId");
singer.delete(4, "singerId");

console.log(`List of singers: `,singer.list());
