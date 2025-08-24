"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Arrow functions
var sayHi = function (name) { return console.log("Hi ".concat(name)); };
sayHi("Max");
// function
function sum(a, b) {
    return a + b;
}
console.log(sum(1, 2));
// Estamos tipando las funciones, parámetros y el retorno
var response = {
    id: 1,
    name: "Max",
    charge: "developer",
    age: 12
};
function show(_a) {
    var name = _a.name, other = __rest(_a, ["name"]);
    console.log(name);
    console.log(other);
    return 1;
}
show(response);
