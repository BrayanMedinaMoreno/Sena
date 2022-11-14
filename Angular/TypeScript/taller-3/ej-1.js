let saludo = new Promise((resolve) => {
    const cadena = "Somos programadores, hacemos mover el mundo";
    resolve(cadena);
}).then((res) => console.log(res));
let error = new Promise((resolve, reject) => {
    reject("Ha ocurrido un error desconocido");
}).catch((err) => console.log(err));
const estrato = (estrato) => {
    let subsidio = new Promise((resolve, reject) => {
        if (estrato) {
            if (estrato > 0 && estrato < 6) {
                if (estrato <= 2) {
                    resolve(`tiene derecho a subsidio por ser estrato ${estrato}`);
                }
                else {
                    resolve(`no tiene derecho a subsidio por ser de estrato ${estrato}`);
                }
            }
            else {
                reject("ingrese un estrato valido");
            }
        }
    })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
};
estrato("xd");
let potencia = new Promise((resolve) => {
    const X = 2;
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
