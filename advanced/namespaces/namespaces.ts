/*
    Los namespaces nos permiten agrupar funciones y clases en un mismo archivo
*/

namespace DatabaseEntity {
    export class User { // para poder usarlo fuera del namespace hay que exportarlo
        id: number;
        name: string;
        age: number;

        constructor(id: number, name: string, age: number) {
            this.id = id;
            this.name = name;
            this.age = age;
        }
    }

    const myUser = new User(1, "Max", 12);
    console.log(myUser);
}

const myOtherUser = new DatabaseEntity.User(2, "Kevin", 19);
console.log(myOtherUser);