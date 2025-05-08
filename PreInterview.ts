/**
- Pre interview Practice 
 */

class animal {
    action(): void{
        console.log('walking...');
    };
};

class dog extends animal {
    sound(): void {
        console.log('Woof Woof...');
    };
};

const Dog = new dog();

Dog.action();
Dog.sound();