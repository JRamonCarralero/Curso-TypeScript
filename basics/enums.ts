// enum es un tipo de dato que nos permite almacenar valores constantes

enum Users {
    ADMIN,
    USER,
    GUEST
}
const user: Users = Users.ADMIN; 
console.log(user); // va a devolverse 0, la posicion del enum

enum UsersRole {
    ADMIN = "ADMIN",
    USER = "USER",
    GUEST = "GUEST",
}

const userRole: UsersRole = UsersRole.ADMIN;
console.log(userRole);