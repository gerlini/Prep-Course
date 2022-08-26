// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  longitud=array.length-1;
  return array[longitud];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  longitud=array.length;
  return longitud;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (let i= 0; i<array.length; i++) {
    array[i] = array[i]+1;
  }
return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  frase=palabras[0];
  for (let i = 1; i < palabras.length; i++) {
     frase = frase +" " + palabras[i] ; 
  }
  return frase;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    comp=array[i];
  if (comp===elemento){
   return true;}
  }
  return false;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  suma=numeros[0];
  for (let i = 1; i < numeros.length; i++) {
    suma=suma+numeros[i];
  }
  return suma;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  notas=0;
  cantidad=resultadosTest.length;
  for (let i = 0; i < resultadosTest.length; i++) {
    notas=notas+resultadosTest[i];
  }
  promedio=notas/cantidad
  return promedio;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  mayor=numeros[0];
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i]>mayor) {
      mayor=numeros[i];
    }
  }
  return mayor;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
 if (arguments.length === 0) {
  return 0;
 }
 var argx = arguments[0];
 for (let i = 1; i < arguments.length; i++) {
   argx = argx * arguments[i];
 }
 return argx;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  mayora=18;
  contador=0;
for (let i = 0; i < arreglo.length; i++) {
  if (arreglo[i]>mayora) {
    contador=contador+1;
  }
}
return contador;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí
   if (numeroDeDia===7 || numeroDeDia===1) {
   return "Es fin de semana"
  }
  return "Es dia Laboral"
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  comp=n+"";
  comp=comp[0];
  if (comp==="9") {
    return true
  }
  return false;
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí 
  iguala=arreglo[0];
  bool=true;
  for (let i = 1; i < arreglo.length; i++) {
    if (iguala===arreglo[i]) {
      bool=true
    } 
      if (iguala!==arreglo[i]) {
        bool = false;
        return bool; 
      } 
  }
  return bool;
  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var nuevosmeses = [];
  for (let i = 0; i < array.length ; i++) {
    if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
      nuevosmeses.push(array[i]);  
    }   
    if (nuevosmeses.length===3) {
      return nuevosmeses;    
    }
  }
  return "No se encontraron los meses pedidos";
}
//if (array.includes("Enero") && array.includes("Marzo") && array.includes("Noviembre")) {
//  nuevosmeses.push("Enero");
//  nuevosmeses.push("Marzo");
//  nuevosmeses.push("Noviembre");
//  return nuevosmeses;
//}
//return "No se encontraron los meses pedidos"
  // if (array.includes("Marzo") ) {
   //   if (array.includes("Noviembre")){
   //              nuevosmeses.push("Enero");
   //              nuevosmeses.push("Marzo");
   //              nuevosmeses.push("Noviembre");
   //              return nuevosmeses
   //   }
   // }

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  array2=[];
  for (let i = 0; i < array.length; i++) {
    if (array[i]>100) {
      array2.push(array[i])
    }
  }
  return array2;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var cont = 0 ;
  var numeros = [] ; 
  for (let i = 1 ; i <= 10 ; i++) {
     numero = numero + 2; 
      cont = i ;
       numeros.push(numero)
       if (numero===cont){
        break;
       }
  }
  if (numero===cont) {
    return "Se interrumpió la ejecución" ;
  }
  return numeros;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var cont = 0 ;
  var numeros = [] ; 
  for (let i = 1 ; i <= 10 ; i++) {
    if (i===5){
      continue;
     }
     numero = numero + 2; 
      cont = i ;
       numeros.push(numero)
 
  }

  return numeros;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
