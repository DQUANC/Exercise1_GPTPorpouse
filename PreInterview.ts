/*
Pre interview exercise
*/

interface person {
    name: string,
    age: number
};

interface singer extends person {
    musicalGenre: string,
    status: string,
    singerId: number
};

class personClass {
    actionGen(): void {
        console.log('Walking...');
    };
};

class singerClass extends personClass{
    singers: singer[] = []

    add(newSinger: singer): string{
        this.singers.push(newSinger);
        return 'Succesfully added.';
    };

    list(): singer[]{
        return this.singers;
    };

    actionSing(): string{
        return 'Singing...';
    };
};

const singer_ = new singerClass();

console.log(singer_.add({name: 'Sebastian', age: 25, musicalGenre: 'Pop', status: 'Active', singerId: 1}));

singer_.actionGen();
console.log(singer_.actionSing());

console.log(singer_.list());