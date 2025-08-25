// Tipos genéricos

interface MyInterface<T> { // Por lo general lo llamamos T, y el campo field será del tipo que pasamos
    field: T;
}

const myValue: MyInterface<string> = {
    field: "hola"
}

const myNumber: MyInterface<number> = {
    field: 1
}

interface Example {
    id: number;
    name: string;
}

const myGeneric: MyInterface<Example> = {
    field: {
        id: 1,
        name: "Max"
    }
}


class MyClass<T> {
    field: T;

    constructor(field: T) {
        this.field = field;
    }
}

const myObject = new MyClass<Example>({
    id: 1,
    name: "Max"
});

const myObject2 = new MyClass<string>("hola");


function getData<T>(id: string): Promise<T> | void {}
getData<string>("1");


// Example with Class

interface UserResponse {
    id: number;
    name: string;
}

class HttpResponse<T> {
    data: T;
    status: number;
    code: number;

    constructor(data: T, status: number, code: number) {
        this.data = data;
        this.status = status;
        this.code = code;
    }
}

const fetchUser = (): UserResponse => ({ id: 1, name: "Max" });

const response = new HttpResponse<UserResponse>(fetchUser(), 200, 1);
console.log(response);


// Another Expample

class CRUD<T> {
    private items: T[] = [];

    constructor(items: T[]) {
        this.items = items;
    }

    addItem(item: T): void {
        this.items.push(item);
    }

    removeLastItem(): void {
        this.items.pop();
    }

    printItems(): T[] {
        return this.items;
    }
}

const users: UserResponse[] = [
    { id: 1, name: "Max" },
    { id: 2, name: "Lia" },
    { id: 3, name: "John" }
];

const userCRUD: CRUD<UserResponse> = new CRUD<UserResponse>(users);
console.log(userCRUD.printItems());

userCRUD.addItem({ id: 4, name: "Max" });
console.log(userCRUD.printItems());
userCRUD.removeLastItem();
console.log(userCRUD.printItems());