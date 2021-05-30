/*
2.-Crear un Array que contenga al menos 3 nombres de frutas y utilizar el bucle for in
para recórrelo y mostrar dichos valores con la función console.log
*/

/*3.- Al Array del ejercicio anterior utilizarlo para:
a.- Ordenar el array alfabéticamente y mostrar el resultado (método sort).
b.- Agregar un elemento al final y al principio del arreglo (métodos push y
unshift).
c.- Eliminar un elemento al final y al principio del arreglo (métodos pop y
shift).
d.- Invertir el orden de los elementos en el array (método reverse).
e.- Recorrer el array utilizando el bucle while (usar la propiedad length del array
en la condición) y guardar los valores en una variable del tipo string
concatenandolos. Mostrar el valor de la variable al final.
f.- Recorrer el array utilizando el bucle for y mostrar cada uno de los valores
convirtiéndolos a mayúsculas (método toUpperCase de la clase String).*/

var frutas = ['Manzana','Pera','Banana','Naranja'];
for (var index in frutas){
   console.log(frutas[index]);
}

/*a*/
var frutas = ['Manzana','Pera','Banana','Naranja'];
console.log(frutas.sort());

/*b*/

function AgregarElemento(arr){
   arr.unshift("I");
   arr.push("VIII");
  
   return arr;
  
  }

console.log(AgregarElemento(['Manzana','Pera','Banana','Naranja']));


/*c*/

function QuitarElemento(arr2){
   arr2.shift("Manzana");
   arr2.pop("Naranja");
   return arr2;
   }

console.log(QuitarElemento(['Manzana','Pera','Banana','Naranja']));

/*d*/
var frutas = ['Manzana','Pera','Banana','Naranja'];
frutas.reverse();
console.log(frutas);

/*e*/

var frutas = ['Manzana','Pera','Banana','Naranja'];

var numeroFrutas = frutas.length -1;
var i = 0;
while (i <= numeroFrutas) {
   document.write(frutas[i] + "<br>");
   i++;

}


/*f*/

var frutas = ['Manzana','Pera','Banana','Naranja'];
for ( i = 0; i < frutas.length; i++) {
   console.log(frutas[i].toUpperCase());
   
}


