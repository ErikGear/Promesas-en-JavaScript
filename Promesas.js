/*
Promesas en JavaScript
* En una promesa vamos a utilizar funciones del tipo Callback

* Una PROMESA, es basicamente codigo que tiene varios estados
* Y vamos a poder lanzar una peticion en caso de que la promesa se haya lanzado
* correctamente (se procesa con la funcion then()) RESOLVED y en caso que que haya ocurrido algun error
* entonces se manda a llamar el caso de REJECTED --> se procesa con la funcion catch(),
? Por lo tanto en una promesa tenemos DOS CAMINOS
*/
"use strict";

// * Sintaxis basica para crear una promesa
// Tenemos que pasarle dos parametros, estos tiene que ser funciones del tipo Callback
// El primer parametro es una funcion Callback en caso de que haya sido resuelta correctamente la promesa then() RESOLVED
// El segundo parametro es una funcion Callback en caso de que no hay sido resuelta correctamente REJECTED --> se procesa con la funcion catch().

// * Pero todo esto lo vamos a recibir como una funcion de tipo CALLBACK
// * Es por eso que estamos utilizando una funcion flecha a la cual le pasamos las dos funciones como parametros

let miPromesa = new Promise((resolver, rechazar) => {
  let expresion = true;

  if (expresion) {
    resolver("Resolvio correcto");
  } else {
    rechazar("Se produjo un error");
  }
});

//Ejecutando la promesa con le metodo THEN y CATCH
miPromesa
  .then((valor) => console.log(valor))
  .catch((valor) => console.log(valor));
