var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal() {
        this.name = "generic animal"; // se puede poner public, pero no es necesario
        this.age = 10; // solo se puede acceder desde la propia clase, no desde fuera
        this.id = "lll"; // se puede acceder desde la propia clase y desde las clases heredadas, pero no desde fuera
    }
    Animal.prototype.sayHi = function () {
        console.log("Grrr");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        var _this = _super.call(this) || this; // llamamos al constructor de la clase padre SIEMPRE
        _this.type = "pastor aleman";
        return _this;
    }
    Dog.prototype.sayHi = function () {
        this.id = "123";
        console.log("Woof");
    };
    return Dog;
}(Animal));
var myAnimal = new Animal(); // llamamos al constructor
myAnimal.sayHi();
var dog = new Dog();
dog.sayHi();
console.log(dog.type);
