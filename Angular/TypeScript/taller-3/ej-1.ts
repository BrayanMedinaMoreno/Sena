// ●Cree y ejecute una promesa que siempre se resuelva, y que lo haga con un string “Somos
// programadores, hacemos mover el mundo”, de tal manera que en su .then, se imprima tal string mediante
// console.log
let saludo = new Promise((resolve) => {
  const cadena: string = "Somos programadores, hacemos mover el mundo";
  resolve(cadena);
}).then((res) => console.log(res));

// ● Cree y ejecute una promesa que siempre se rechace, y que lo haga con un string “Ha ocurrido un error
// desconocido.”, de tal manera que en su .catch, se imprima tal string mediante console.log
let error = new Promise((resolve, reject) => {
  reject("Ha ocurrido un error desconocido");
}).catch((err) => console.log(err));

// ● La entrega de subsidios en una institución pública depende de si el estrato de la persona es menor o igual
// a 2. Cree un programa que implemente una variable que guarde el estrato del usuario, y mediante la
// evaluación de tal variable, muestre si el usuario tiene derecho o no a un subsidio usando promesas, de tal
// manera que si la variable contiene un valor numérico entre 1 y 6, la promesa se resuelva con un string
// que indique si el usuario tiene o no derecho al subsidio, tal string deberá ser imprimido en el .then de la
// promesa con console.log. En caso de que la variable contenga un valor nó válido la promesa se debe
// rechazar lanzando el siguiente error: new Error("Estrato no válido"), tal error debe ser mostrado en
// el .catch de la promesa de la siguiente manera: console.log('Ha ocurrido un error: ', err.message),
// tenga en cuenta que err, es la información del error(motivo de rechazo) que se pasa desde el
// reject al catch como parámetro de nombre err.
const estrato = (estrato: any) => {
  let subsidio = new Promise((resolve, reject) => {
    if (estrato) {
      if (estrato > 0 && estrato < 6) {
        if (estrato <= 2) {
          resolve(`tiene derecho a subsidio por ser estrato ${estrato}`);
        } else {
          resolve(`no tiene derecho a subsidio por ser de estrato ${estrato}`);
        }
      } else {
        reject("ingrese un estrato valido");
      }
    }
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

estrato("xd");

// ● Cree una promesa que implemente 4 métodos .then en cadena de tal manera que la promesa se
// resuelva inicialmente con el valor 2 <resolve(2)> y los siguientes métodos .then eleven al
// cuadrado el valor pasado, imprimiendo al final el mensaje “el valor final es: X” donde x es el
// resultado final del encadenamiento
let potencia = new Promise((resolve) => {
  const X: number = 2;
  resolve(X);
})
  .then((res) => {
    const X = Number(res) ** 2;
    return X;
  })
  .then((res) => {
    const X = Number(res) ** 2;
    return X;
  })
  .then((res) => {
    const X = Number(res) ** 2;
    return X;
  })
  .then((res) => {
    const X = Number(res) ** 2;
    console.log("El valor final es: ", X);
  });