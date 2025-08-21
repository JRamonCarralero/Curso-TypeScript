// enum es un tipo de dato que nos permite almacenar valores constantes
var UsersRole;
(function (UsersRole) {
    UsersRole["ADMIN"] = "ADMIN";
    UsersRole["USER"] = "USER";
    UsersRole["GUEST"] = "GUEST";
})(UsersRole || (UsersRole = {}));
var userRole = UsersRole.ADMIN;
console.log(userRole);
var Users;
(function (Users) {
    Users[Users["ADMIN"] = 0] = "ADMIN";
    Users[Users["USER"] = 1] = "USER";
    Users[Users["GUEST"] = 2] = "GUEST";
})(Users || (Users = {}));
var user = Users.ADMIN;
console.log(user);
