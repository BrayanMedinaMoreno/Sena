//ejemplo de scope 
//etsa es una variable a la que se puede acceder en cualquier parte del codigo de este archivo
//ademas se le puede cambiar el valor ya que se le declara con un let
let globlalVar:number = 10; 

function adding (numToAdd:number):number {
  //esta es una varibale a la que solo se puede acceder adentro de la funcion adding
  //ya que aqui fue donde fue declarada
  //Ademas al ser una constante siempre tendra como valor asginado el mismo con el cual fue declarado
  const result:number = globlalVar+numToAdd
  return result;
}

// console.log(result); //al solo estar en el scope de adding este log dara un error
console.log(globlalVar); //al ser declarada en el cuerpo del archivo este log dara el valor de la variable
