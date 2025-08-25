"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_module_1 = require("./utils.module"); // al importar el módulo, se puede acceder a sus exportaciones
// import { * as Utils } from "./utils.module"; // Estaríamos importando todo el módulo en la variable Utils
var myNumber = 10 * utils_module_1.PI;
console.log(myNumber);
var myUser = {
    id: (0, utils_module_1.generatedId)(),
    name: "Max"
};
console.log(myUser);
