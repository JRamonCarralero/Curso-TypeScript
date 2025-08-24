class Animal {
    name: string = "generic animal"; // se puede poner public, pero no es necesario
    private age: number = 10; // solo se puede acceder desde la propia clase, no desde fuera
    protected id: string = "lll"; // se puede acceder desde la propia clase y desde las clases heredadas, pero no desde fuera

    constructor() {}

    sayHi() {
        console.log("Grrr");
    }
}

class Dog extends Animal { // hereda de Animal
    type: string = "pastor aleman";

    constructor() {
        super(); // llamamos al constructor de la clase padre SIEMPRE
    }

    sayHi() {
        this.id = "123"; 
        console.log("Woof");
    }
}


const myAnimal = new Animal();  // llamamos al constructor
myAnimal.sayHi();

const dog = new Dog();
dog.sayHi();
console.log(dog.type);