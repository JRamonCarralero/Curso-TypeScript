interface Person {
    name: string;
    age: number;
}

interface Employee extends Person {
    employeeId: number;
}
const newEmployee: Employee = {
    name: "Max",
    age: 12,
    employeeId: 1,
}


// también pueden extenderse tipos, pero no puedo extender un tipo de una interfaz
type Item = {
    id: number;
    name: string;
    price: number;
}
interface CartItem extends Item {
    quantity: number;
}
const cartItem: CartItem = {
    id: 1,
    name: "Max",
    price: 12,
    quantity: 1,
}


type User = {
    id: string;
}
type Admin = User & Person;
const myAdmin : Admin = {
    id: "1",
    name: "Max",
    age: 12
}


type ServiceResponseToken = string | null | number | undefined;
// este tipo no puede declararse en interfaces, solo en type

type UserTypes = 'admin' | 'user' | 'guest';
const userCharge: UserTypes = 'admin';
// estos valores tampoco pueden darse en las interfaces


interface Developer {
    name: string;
    age: number;
    languages: string[];
}
interface Developer {
    phone: string;
}
const developer: Developer = {
    name: "Max",
    age: 12,
    languages: ["js"],
    phone: "123"
}
// interpreta que las 2 interfaces son la misma
// Puedo tener interfaces importadas, y añadirle campos en mi fichero, sin tocar la interface original, solo se modificara en mi fichero



export {};