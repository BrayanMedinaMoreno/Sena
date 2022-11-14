// ● Cree e instancie una clase coche con un método no estático y otro estático, dos propiedades, una pública
// y una privada, ambas deben ser pasadas al constructor.
class coche{
    modelo:string;
    #año:number;
    speed(){
        console.log('la velocidad es 420km/h');
    }
    descripcion(){
        const fecha = new Date();
        const salida:number = fecha.getFullYear()-this.#año
        console.log(`El ${this.modelo} salio en el año ${this.#año} y tiene ${salida} años de antiguedad`);
    }
    constructor(modelo:string, año:number){
        this.modelo=modelo;
        this.#año=año;
    }
}

const honda:coche = new coche('honda civic', 2000);
honda.speed();
honda.descripcion();

// ● Cree e instancie una clase robot con dos métodos no estáticos y dos estáticos, cuatro propiedades, dos
// públicas y dos privadas, dos deben ser pasadas al constructor, las otras dos, deben ser inicializadas
// dentro de la clase.
type color = 'azul'|'gris'

class robot {
    #marca:string='Motoman';
    #color:color='azul';
    capacidad:number;
    activo:boolean;
    aviableColors(){
        console.log(`el modelo esta disponible en ${this.#color} o gris`);
    }
    sayBrand (){
        console.log(`la marca de este robot es ${this.#marca}`);
    }
    sayCapacity(){
        console.log(`este robot puede mover ${this.capacidad} kilos de carga`);
    }
    sayIfActive(){
        this.activo
        ? console.log('Este robot esta activo y trabajando')
        : console.log('Este robot esta inactivo');
    }
    constructor(capacidad:number, activo:boolean){
        this.capacidad=capacidad;
        this.activo=activo;
    }
}

const roboto:robot = new robot(120, true);
roboto.aviableColors();
roboto.sayBrand();
roboto.sayCapacity();
roboto.sayIfActive();

// ● Cree e instancie una clase PC con dos métodos no estáticos y dos estáticos, cuatro propiedades, dos
// públicas y dos privadas, todas deben ser pasadas al constructor.

class PC{
    marca:string;
    grafica:string;
    #procesador:string;
    #ram:number;

    fucntional(){
        console.log('esta computadora es funcional desde hace 2 años');
    }
    operaciones(){
        console.log('Esta computadora es capaz de realizar 500 millones de operaciones por segundo');
    }
    addingRam(add:number){
        this.#ram+=add
        console.log(`la capacidad de la ram ahora es ${this.#ram} GB`);
    }
    components(){
        console.log(`Esta computadora de la mara ${this.marca} cuenta con los siguientes componentes: procesador ${this.#procesador}, grafica ${this.grafica} y ${this.#ram} GB de ram`);
    }

    constructor(marca:string, grafica:string, procesador:string, ram:number){
        this.marca=marca;
        this.grafica=grafica;
        this.#procesador=procesador;
        this.#ram=ram;
    }
}

const computer:PC = new PC('Asus', 'rtx 3090 ti', 'intel i9 12900k', 32);
computer.fucntional();
computer.operaciones();
computer.addingRam(8);
computer.components();