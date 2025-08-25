// Tipos genéricos
var myValue = {
    field: "hola"
};
var myNumber = {
    field: 1
};
var myGeneric = {
    field: {
        id: 1,
        name: "Max"
    }
};
var MyClass = /** @class */ (function () {
    function MyClass(field) {
        this.field = field;
    }
    return MyClass;
}());
var myObject = new MyClass({
    id: 1,
    name: "Max"
});
var myObject2 = new MyClass("hola");
function getData(id) { }
getData("1");
var HttpResponse = /** @class */ (function () {
    function HttpResponse(data, status, code) {
        this.data = data;
        this.status = status;
        this.code = code;
    }
    return HttpResponse;
}());
var fetchUser = function () { return ({ id: 1, name: "Max" }); };
var response = new HttpResponse(fetchUser(), 200, 1);
console.log(response);
// Another Expample
var CRUD = /** @class */ (function () {
    function CRUD(items) {
        this.items = [];
        this.items = items;
    }
    CRUD.prototype.addItem = function (item) {
        this.items.push(item);
    };
    CRUD.prototype.removeLastItem = function () {
        this.items.pop();
    };
    CRUD.prototype.printItems = function () {
        return this.items;
    };
    return CRUD;
}());
var users = [
    { id: 1, name: "Max" },
    { id: 2, name: "Lia" },
    { id: 3, name: "John" }
];
var userCRUD = new CRUD(users);
console.log(userCRUD.printItems());
userCRUD.addItem({ id: 4, name: "Max" });
console.log(userCRUD.printItems());
userCRUD.removeLastItem();
console.log(userCRUD.printItems());
