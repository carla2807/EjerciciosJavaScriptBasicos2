/*
6.- Crear una función que reciba como parámetro un string y que devuelva ese mismo
string con la primera letra DE CADA PALABRA convertida a mayúscula.
7.- Crear una función que reciba como parámetro un string y que devuelva la cantidad
de vocales que posee.
8.- Dado el siguiente código determinar qué valores poseerán las variables miNumero y
miArray al final del script.
function miFuncion(unNumero, unArray){
++unNumero;
unArray.pop();
}
var miNumero = 15;
var miArray = ['Un texto', true, 4, 5];
miFuncion(miNumero, miArray);
*/

/*6*/

var sentence = 'the quick brown fox jumped over the lazy dog';

var capitalizeString = (str) => str[0].toUpperCase() 
+ str.slice(1).toLowerCase();

var words = sentence.split(' ').map(capitalizeString);
var capitalizedSentence = words.join(' ');

console.log(capitalizedSentence);


/*7*/
function contarVocales(texto){
let contadorVocales = 0;
let vocales = ['a','e','i','o','u','A','E','I','O','U']

for (let i = 0; i < texto.length; i++) {
    if (vocales.indexOf(texto[i])>=0) {
        contadorVocales++;
    }   
}

return contadorVocales;
}

console.log(contarVocales('JavaScript'));


/*8*/

var miNumero = 15;
var miArray = ['Un texto', true, 4, 5];

function miFuncion(unNumero, unArray){
    ++unNumero;
    unArray.pop();
    }
   
    miFuncion(miNumero, miArray);

/*var miNumero = 15;. Cada iteracion incrementa valor de a una unidad
/*var miArray = ['Un texto', true, 4]*/