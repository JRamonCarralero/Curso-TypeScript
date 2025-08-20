let age: number = 12;
let name: string = "Max";
let toggle: boolean = true;
let user: Object = {
    name: "Max",
    age: 12
};
let fruits: string[] = ["apple", "banana"];

let response: any = "hello";
response = { name: "Max" };
response = true;

function saludar(): void {
    console.log("hola");
}

let response2: undefined = undefined;
let response3: null = null;

let notSure: unknown = 4;
notSure = "maybe a string instead";
notSure = false;

let response5: number | null = 5;
response5?.toString(); // ? indica que se realice si no es null

let response6: number | null = null;
//response6?.toString(); da error por el tipo never, estamos indicando que es null

type ResponseTypeService = string | undefined;
let response7: ResponseTypeService = undefined;
let response8: ResponseTypeService = "hola";

// Type Assertion
let response9: any = "hola";
let response10: string = response9 as string; // casteamos el any a string
console.log(response10.toUpperCase());

// const canvas = <HTMLCanvasElement>document.getElementById("canvas");
// const canvas = document.getElementById("canvas") as HTMLCanvasElement;
// 2 formas distintas de castear tipos



export {}; // Añado el export para que lo reconozca como un modulo propio y no usa variables globales