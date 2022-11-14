const encadenar = (estado) => {
    let promesa1 = new Promise((resolve) => {
        const mensaje = "Somos ADSI";
        resolve(mensaje);
    }).then((res) => {
        console.log(res);
        let promesa2 = new Promise((resolve, reject) => {
            if (estado) {
                const mensaje = "Somos programadores";
                resolve(mensaje);
            }
            else {
                reject("Promesa 2 no cumplida");
            }
        })
            .then((res) => {
            console.log(res);
            let promesa3 = new Promise((resolve) => {
                const mensaje = "Hacemos mover el mundo";
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
let carrera = new Promise((resolve, reject) => {
    const mensaje = "promesa resuelta";
    const error = new Error("info error");
    setTimeout(function () {
        resolve(mensaje);
    }, 1000);
    setTimeout(function () {
        reject(error);
    }, 5000);
})
    .then((res) => console.log(res))
    .catch((err) => console.log(err));