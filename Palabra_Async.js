/*
* El uso de la palabra "Async", nos facilitara el uso de promesas
*/

// Sintaxis basica de una promesa en JavaScript

let promesa = new Promise((correcto, incorrecto) => {
    let expresion = true;

    if (expresion) {
        correcto('RESOLVED then()');
    } else {
        incorrecto('REJECTED .catch()');
    }
});

/*
promesa.then(
    resolved => {
        console.log(resolved);
    },
    rejected => {
        console.log(rejected);
    }
);
*/

// * Cuando trabajamos con la palabra "async", estamos indicando que una funcion esta obligada a regresar una promesa
async function miFuncionConPromesa () {
    return 'saludos con promesa y async';
}

// * Sin embargo dado a que esto  es una función normal es necesario colocar parantesis para mandar a llamar a la promesa
miFuncionConPromesa().then((valor) => {
    console.log(valor);
});
// * Por lo tanto podemos converitr una función en una promesa, simplemente agregaqndo "async"
// * Y lo que retorne lo podemos consumir meidnate le método THEN()


