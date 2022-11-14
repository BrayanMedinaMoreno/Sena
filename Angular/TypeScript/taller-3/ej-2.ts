// ● Cree tres promesas promesa1, promesa2 y promesa3, de tal manera que la promesa1 siempre
// se resuelva con la cadena “Somos ADSI”, que la promesa2 tenga dos opciones, resolverse o
// rechazarse; de tal forma que si se resuelva lo haga con la cadena “ Somos programadores” ,
// pero si se rechaza lo haga lanzando un error “Promesa 2 no cumplida” (use una variable y un
// condicional doble para controlar la resolución o rechazo de la promesa, p.e. una variable estado,
// velocidad, edad etc). Por último, la promesa3 siempre se debe resolver con la cadena “,
// Hacemos mover el mundo”. Encadene las promesas de tal manera que cuando la promesa1 se
// cumpla, imprima desde su .then el mensaje con el que se resolvió y retorne la promesa2 y
// cuando ésta última se cumpla, imprima desde su .then el mensaje con el que se resolvió y
// retorne la promesa3, y cuando la promesa 3 se cumpla imprima desde su .then el mensaje con
// el que se resolvió. Implemente .catch para manejar el error que puede ocurrir en la promesa2, en
// caso de que ocurra el rechazo, imprima el mensaje del error mediante err.message.
const encadenar = (estado: boolean) => {
  let promesa1 = new Promise((resolve) => {
    const mensaje: string = "Somos ADSI";
    resolve(mensaje);
  }).then((res) => {
    console.log(res);

    let promesa2 = new Promise((resolve, reject) => {
      if (estado) {
        const mensaje: string = "Somos programadores";
        resolve(mensaje);
      } else {
        reject("Promesa 2 no cumplida");
      }
    })
      .then((res) => {
        console.log(res);
        let promesa3 = new Promise((resolve) => {
          const mensaje: string = "Hacemos mover el mundo";
          resolve(mensaje);
        }).then((res) => console.log(res));
        return promesa3;
      })
      .catch((err) => console.log(err));

    return promesa2;
  });

  return promesa1;
};

encadenar(true);

// ● Cree una promesa cuyo resolve y reject dependan cada uno de una llamada asíncrona usando
// setTimeout y así, su rechazo o resolución dependerá del proceso asíncrono que termine
// primero. Implemente métodos .then y .catch. Si la promesa se rechaza, lance el error con new
// Error(‘info error’) en el reject e imprima el stack del error en .catch, si se cumple, resuelva la
// promesa con la cadena “promesa resuelta” e imprímalo en el .then
let carrera:object = new Promise((resolve, reject) => {
  const mensaje: string = "promesa resuelta";
  const error:object = new Error("info error");
  setTimeout(function () {
    resolve(mensaje);
  }, 1000);
  setTimeout(function () {
    reject(error);
  }, 5000);
})
  .then((res) => console.log(res))
  .catch((err) => console.log(err));