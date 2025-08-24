interface PersonInterface {
    name: string;
    code: string | number;
    charge: number;
    description?: string;
    sayHello: () => string; 
}

class PersonClass {
    sayHello() {
        console.log("hola");
    }
}

// La interface es descriptiva, la clase es ejecutable (modelamos un objeto)

const personInterface: PersonInterface = {
    name: "Max",
    code: "123",
    charge: 12,
    sayHello: () => "hola"
}

const personClass: PersonClass = new PersonClass();


interface PetInterface {
    sayHello: () => string
}

class PetClass {
    sayHello() {
        return "hola";
    }
}

class Dog implements PetInterface { // Al implementar el interface, se deben implementar todos los metodos
    sayHello() {
        return "woof";
    }
}

class Cat extends PetClass {} //Al extender, los metodos se heredan

export {}