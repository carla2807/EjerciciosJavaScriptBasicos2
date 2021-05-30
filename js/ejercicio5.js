/*
5.- Crear una función que reciba como parámetro un string y que devuelva ese mismo
string con la primera letra convertida a mayúscula.
*/

function capFirstLetter(str){
return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capFirstLetter("hola soy una funcion"));
