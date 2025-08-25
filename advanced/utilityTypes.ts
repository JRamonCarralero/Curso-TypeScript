// Son mappedTypes que tiene TypeScript incluidos
// En la documentación de TypeScript, se encuentran todos los que ofrecen
// https://www.typescriptlang.org/docs/handbook/utility-types.html

interface Task {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}

// Partial es un tipo de dato que nos permite hacer parcialmente un objeto
// Hace que todos los atributos sean opcionales
function updateTask(id: number, fieldsToUpdate: Partial<Task>) {
    console.log(id, fieldsToUpdate);
}

const newTask = { title: "Kevin" };
updateTask(1, newTask);

// Required es un tipo de dato que nos permite hacer obligatorios todos los atributos de un objeto
function createTask(fields: Required<Task>) {
    console.log(fields);
}

const newTask2 = { id: 1, title: "Kevin", completed: true, description: "Description" };
createTask(newTask2);

// Records es un tipo de dato que nos permite crear un objeto con un conjunto de keys y types
interface CatInfo {
    age: number;
    name: string;
}

type CatName = "miffy" | "boris" | "mordred";
const cats: Record<CatName, CatInfo> = {
    miffy: { age: 10, name: "miffy" },
    boris: { age: 5, name: "boris" },
    mordred: { age: 16, name: "mordred" },
};

// Omit es un tipo de dato que nos permite omitir un atributo de un objeto
type CatInfo2 = Omit<CatInfo, "name">;

// Pick es un tipo de dato que nos permite seleccionar un atributo de un objeto
type CatName2 = Pick<CatInfo, "name">;