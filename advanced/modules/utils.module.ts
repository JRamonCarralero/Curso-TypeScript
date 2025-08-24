export const PI = 3.14; // exportamos la constante PI directamente, no hace falta agruparla en un namespace

export interface User {
    id: number,
    name: string
}

export const generatedId = () => Math.floor(Math.random() * 100);