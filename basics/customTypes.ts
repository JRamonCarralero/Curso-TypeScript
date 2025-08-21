type Person = {
    name: string;
    code: string | number;
    description?: string;
}

const person: Person = {
    name: "Max",
    code: "01",
    description: "Max",
}

type ServiceResponse = string | null | number | undefined;
let response: ServiceResponse = "hola";

type UserCharges = 'admin' | 'user' | 'guest';
let userCharge: UserCharges = 'admin';

export {};