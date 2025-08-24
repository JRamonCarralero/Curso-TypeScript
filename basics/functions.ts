// Arrow functions
const sayHi = (name: string) => console.log(`Hi ${name}`);

sayHi("Max");

// function
function sum(a: number, b: number): number {
    return a + b;
}

console.log(sum(1, 2));

// Estamos tipando las funciones, parámetros y el retorno


const response = {
    id: 1,
    name: "Max",
    charge: "developer",
    age: 12
}
function show({ name, ...other }: { id: number; name: string; charge: string; age: number }): number {
    console.log(name);
    console.log(other);
    return 1
}
show(response);


export {};