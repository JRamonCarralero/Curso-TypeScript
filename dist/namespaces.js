/*
    Los namespaces nos permiten agrupar funciones y clases en un mismo archivo
*/
var DatabaseEntity;
(function (DatabaseEntity) {
    var User = /** @class */ (function () {
        function User(id, name, age) {
            this.id = id;
            this.name = name;
            this.age = age;
        }
        return User;
    }());
    DatabaseEntity.User = User;
    var myUser = new User(1, "Max", 12);
    console.log(myUser);
})(DatabaseEntity || (DatabaseEntity = {}));
var myOtherUser = new DatabaseEntity.User(2, "Kevin", 19);
console.log(myOtherUser);
/// <reference path="./namespaces.ts" />
// es la manera de importar un namespace
var myNewUser = new DatabaseEntity.User(3, "Lia", 21);
console.log(myNewUser);
