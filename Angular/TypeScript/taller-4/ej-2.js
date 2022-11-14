"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _coche_año, _robot_marca, _robot_color, _PC_procesador, _PC_ram;
class coche {
    constructor(modelo, año) {
        _coche_año.set(this, void 0);
        this.modelo = modelo;
        __classPrivateFieldSet(this, _coche_año, año, "f");
    }
    speed() {
        console.log('la velocidad es 420km/h');
    }
    descripcion() {
        const fecha = new Date();
        const salida = fecha.getFullYear() - __classPrivateFieldGet(this, _coche_año, "f");
        console.log(`El ${this.modelo} salio en el año ${__classPrivateFieldGet(this, _coche_año, "f")} y tiene ${salida} años de antiguedad`);
    }
}
_coche_año = new WeakMap();
const honda = new coche('honda civic', 2000);
honda.speed();
honda.descripcion();
class robot {
    constructor(capacidad, activo) {
        _robot_marca.set(this, 'Motoman');
        _robot_color.set(this, 'azul');
        this.capacidad = capacidad;
        this.activo = activo;
    }
    aviableColors() {
        console.log(`el modelo esta disponible en ${__classPrivateFieldGet(this, _robot_color, "f")} o gris`);
    }
    sayBrand() {
        console.log(`la marca de este robot es ${__classPrivateFieldGet(this, _robot_marca, "f")}`);
    }
    sayCapacity() {
        console.log(`este robot puede mover ${this.capacidad} kilos de carga`);
    }
    sayIfActive() {
        this.activo
            ? console.log('Este robot esta activo y trabajando')
            : console.log('Este robot esta inactivo');
    }
}
_robot_marca = new WeakMap(), _robot_color = new WeakMap();
const roboto = new robot(120, true);
roboto.aviableColors();
roboto.sayBrand();
roboto.sayCapacity();
roboto.sayIfActive();
class PC {
    constructor(marca, grafica, procesador, ram) {
        _PC_procesador.set(this, void 0);
        _PC_ram.set(this, void 0);
        this.marca = marca;
        this.grafica = grafica;
        __classPrivateFieldSet(this, _PC_procesador, procesador, "f");
        __classPrivateFieldSet(this, _PC_ram, ram, "f");
    }
    fucntional() {
        console.log('esta computadora es funcional desde hace 2 años');
    }
    operaciones() {
        console.log('Esta computadora es capaz de realizar 500 millones de operaciones por segundo');
    }
    addingRam(add) {
        __classPrivateFieldSet(this, _PC_ram, __classPrivateFieldGet(this, _PC_ram, "f") + add, "f");
        console.log(`la capacidad de la ram ahora es ${__classPrivateFieldGet(this, _PC_ram, "f")}`);
    }
    components() {
        console.log(`Esta computadora de la mara ${this.marca} cuenta con los siguientes componentes: procesador ${__classPrivateFieldGet(this, _PC_procesador, "f")}, grafica ${this.grafica} y ${__classPrivateFieldGet(this, _PC_ram, "f")} GB de ram`);
    }
}
_PC_procesador = new WeakMap(), _PC_ram = new WeakMap();
const computer = new PC('Asus', 'rtx 3090 ti', 'intel i9 12900k', 32);
computer.fucntional();
computer.operaciones();
computer.addingRam(8);
computer.components();
