let promiseArray = [];
let promesa1 = new Promise((resolve, reject) => {
    const mensaje = "Primer promesa cumplida";
    const error = "Primer promesa fallida";
    setTimeout(function () {
        resolve(mensaje);
    }, 3000);
})
    .then((res) => promiseArray.push(res))
    .catch((err) => console.log(err));
let promesa2 = new Promise((resolve, reject) => {
    const mensaje = "Segunda promesa cumplida";
    const error = "Segunda promesa fallida";
    setTimeout(function () {
        resolve(mensaje);
    }, 2000);
})
    .then((res) => promiseArray.push(res))
    .catch((err) => console.log(err));
let promesa3 = new Promise((resolve, reject) => {
    const mensaje = "Tercera promesa cumplida";
    const error = "Tercera promesa fallida";
    setTimeout(function () {
        resolve(mensaje);
    }, 2500);
})
    .then((res) => promiseArray.push(res))
    .catch((err) => console.log(err));
let promesa4 = new Promise((resolve, reject) => {
    const mensaje = "Cuarta promesa cumplida";
    const error = "Cuarta promesa fallida";
    setTimeout(function () {
        resolve(mensaje);
    }, 4200);
})
    .then((res) => promiseArray.push(res))
    .catch((err) => console.log(err));
Promise.race([promesa3, promesa4]).then((value) => {
    console.log(value);
}).catch(() => console.log('Error'));
function imprimir() {
    promiseArray.forEach(element => {
        console.log(element);
    });
}
setTimeout(function () { imprimir(); }, 8000);
