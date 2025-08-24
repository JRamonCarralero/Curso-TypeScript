"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatedId = exports.PI = void 0;
exports.PI = 3.14; // exportamos la constante PI directamente, no hace falta agruparla en un namespace
var generatedId = function () { return Math.floor(Math.random() * 100); };
exports.generatedId = generatedId;
