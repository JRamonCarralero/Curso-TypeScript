interface Person {
    name: string;
    code: string | number;
    charge: number;
    description?: string; // opcional
    sayHello: () => string; // función que va a devolver un string, no define la función, solo la firma
}

let person: Person = {
    name: "Max",
    code: "01",
    charge: 12,
    description: "Max",
    sayHello: () => "hola",
};

let secondPerson: Person = {
    name: "Ben",
    code: "",
    charge: 1,
    sayHello: () => "hola",
};

export {}