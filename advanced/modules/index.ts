import { PI, generatedId } from "./utils.module"; // al importar el módulo, se puede acceder a sus exportaciones
import { User as Person } from "./utils.module";

// import { * as Utils } from "./utils.module"; // Estaríamos importando todo el módulo en la variable Utils

const myNumber = 10 * PI;
console.log(myNumber);

const myUser: Person = {
    id: generatedId(),
    name: "Max"
}

console.log(myUser);