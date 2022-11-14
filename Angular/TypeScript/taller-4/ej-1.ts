// ● Cree una función que reciba como argumento un número y retorne el cuadrado de éste cómo una
// promesa usando Async para ello. Luego, llame a la función y trate de imprimir su valor de retorno. ¿Cuál
// es el resultado de la impresión? ¿un valor numérico ? ¿una promesa ?
const square = async (number: number) => {
  const result: number = number ** 2;
  return result;
};

console.log(square(5));

// ● Cree una función llamada “resultado” que retorne una promesa usando “return new Promise”, de tal
// manera que la promesa en su bloque de instrucciones implemente setTimeout demorandose seis
// segundos para resolverse con valor 8. Luego, llame a la función e imprima su resultado, ¿qué resultado
// obtiene? ¿una promesa?, ¿ un entero ?
const resultado = async (): Promise<number> => {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      const operation: number = 2 * Math.sqrt(2 * 2);
      resolve(operation);
    }, 6000);
  }).then((res) => {
    return Number(res);
  });
};

console.log(resultado());

// ● Cree una función llamada “cuadradoAsincrono” que llame en su bloque de instrucciones a la función
// “resultado” de tal manera que la ejecución se detenga hasta obtener el valor retornado por “resultado”,
// luego, eleve tal valor al cuadrado y este sea impreso. Use Async - Await. ¿ Qué imprimió ? ¿una
// promesa?, ¿ un entero ?
const cuadradoAsincrono = async () => {
  const number = await resultado();
  const formatting = Number(number)
  const result = formatting**2;
  console.log(result);
  
  return result
};

console.log(cuadradoAsincrono());


// ● Responda:
// a) ¿Qué cláusula usamos para que una función retorne una promesa sin crearla explícitamente
// dentro de la función ?


// b) Si necesitamos capturar el valor de una promesa, ¿ qué cláusula usamos ?
/*se utiliza la palababra clave return*/

// c) ¿Cuál es la condición para poder usar la cláusula await ?
/*declarar la funcion como asincrona utilizando la palabra clave async*/
