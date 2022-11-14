// ● Dos variables lógicas
let firstBool:boolean = true;
let secondBool:boolean = false;

// ● Dos variables numéricas
let firstNumber:number = 10;
let secondNumber:number = 20;

// ● Dos variables any
let anyValue:any = 'hello world'
let anotherValue:any = true

// ● Dos variables string
let firstString:string = 'this is a string';
let secondString:string = 'another string';

// ● Cree una plantilla de strings para mostrar un mensaje de bienvenida al usuario luego de
// registrarse en nuestro sitio, por ejemplo. “Bienvenida Paula Pérez a nuestro sitio web, gracias por
// registrarte”. Este template debe usar dos variables, nombres y apellidos

function personName (firstName:string, lastName:string):string {
  const fullName = `Bienvenido/a ${firstName} ${lastName} a nuestro sitio web, gracias por
  registrarte`

  return fullName;
}

console.log(personName('Alex', 'Lopez'));


