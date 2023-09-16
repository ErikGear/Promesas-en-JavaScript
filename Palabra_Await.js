/*
La palabra reservada "await"
Lo que va hacer es esperar el resultado de una promesa
*/

//* async/await
//? "await" solo se puede usar dentro de una funcion declarada con "async"
async function funcionConPromesa() {
    let miPromesa = new Promise(resolver => {
        resolver('Promesa con await');
    });

    //ya no es necesario cosnumir la promesa con THEN()
    console.log( await miPromesa );
    // "await" lo que hace es mandar a llamar la promesa "funcionConPromesa"
    //  y 
}

funcionConPromesa();