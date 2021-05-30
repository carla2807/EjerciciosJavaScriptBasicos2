/*
4.- Crear una variable que contenga el valor 'La Manzana es Verde' y utilizarlo para:
a.- Convertirlo a minúscula y mostrar el resultado (método toLowerCase).
b.- Obtener los últimos 4 caracteres del string (método substring).
c.- Obtener los caracteres 3, 4 y 5 del string (método substring).
d.- Obtener un array con las palabras que hay en el string, asumiendo que cada
palabra termina cuando se encuentra el carácter espacio (método split).
*/

/*a*/
var string = 'La Manzana es Verde';
console.log(string.toLowerCase());

/*b*/
let frutas2 = 'La Manzana es Verde';
console.log(frutas2.substring(15));

/*c*/
let fruts = 'La Manzana es Verde';
console.log(fruts.substring(4,7));

/*d*/

let frutas3 = 'La Manzana es Verde';
console.log(frutas3.split(''));