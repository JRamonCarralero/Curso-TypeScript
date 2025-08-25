// los mapped types son un tipo de dato que nos permite crear tipos de manera dinámica

interface Person {
    name: string;
    age: number;
}

interface GetPerson {
    getName: () => string;
    getAge: () => number;
}

/*
    Recorremos las keys de la interface que le damos
    y crea una función para cada atributo de la interface donde devuelve ese atributo
    y mapeamos el nombre de la key a un string con la primera letra en mayúscula
*/
type Getter<T> = {
    [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
}

type GetterPerson = Getter<Person>;
const getPerson: GetterPerson = {
    getName: () => "Max",
    getAge: () => 12
}


interface Animal {
    name: string;
    age: number;
    isAlive: boolean;
    type: string;
}

type GetterAnimal = Getter<Animal>;
const getAnimal: GetterAnimal = {
    getName: () => "Max",
    getAge: () => 12,
    getIsAlive: () => true,
    getType: () => "dog"
}

export {}