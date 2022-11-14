// ● Cree cuatro promesas donde cada una para resolverse dependa de un setTimeout, de tal
// manera que cada promesa se resuelva en tiempos diferentes. Ejecute las cuatro promesas de
// forma paralela, e imprima los cuatro resultados de resolución(recuerde que estos resultados van
// en un arreglo, se sugiere use .foreach). No olvide .catch, qué pasa si una de las promesas falla al
// estar las cuatro en paralelo ?. Haga una implementación de Promise.race con dos de las
// promesas anteriores.
let promiseArray: Array<any> = [];

let promesa1: object = new Promise((resolve, reject) => {
  const mensaje: string = "Primer promesa cumplida";
  const error: string = "Primer promesa fallida";
  setTimeout(function () {
    resolve(mensaje);
  }, 3000);
})
  .then((res) => promiseArray.push(res))
  .catch((err) => console.log(err));

let promesa2: object = new Promise((resolve, reject) => {
  const mensaje: string = "Segunda promesa cumplida";
  const error: string = "Segunda promesa fallida";
  setTimeout(function () {
    resolve(mensaje);
  }, 2000);
})
  .then((res) => promiseArray.push(res))
  .catch((err) => console.log(err));

let promesa3: object = new Promise((resolve, reject) => {
  const mensaje: string = "Tercera promesa cumplida";
  const error: string = "Tercera promesa fallida";
  setTimeout(function () {
    resolve(mensaje);
  }, 2500);
})
  .then((res) => promiseArray.push(res))
  .catch((err) => console.log(err));

let promesa4: object = new Promise((resolve, reject) => {
  const mensaje: string = "Cuarta promesa cumplida";
  const error: string = "Cuarta promesa fallida";
  setTimeout(function () {
    resolve(mensaje);
  }, 4200);
})
  .then((res) => promiseArray.push(res))
  .catch((err) => console.log(err));

Promise.race([promesa3, promesa4])
  .then((value) => {
    console.log(value);
  })
  .catch(() => console.log("Error"));

function imprimir() {
  promiseArray.forEach((element) => {
    console.log(element);
  });
}

setTimeout(function () {
  imprimir();
}, 8000);
