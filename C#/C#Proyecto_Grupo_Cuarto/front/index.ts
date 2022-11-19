const table:HTMLElement|null = document.getElementById('table');

const fillinTable = (props:Array<any>):void => {
    props.map((user)=>{
        table.innerHTML+=`<tr><td>${user.ID_Booster}</td></tr>`
    })
    
}

window.onload = () => {
  fetch("http://www.boosters.somee.com/api/usuario")
    .then((res:Response) => res.json())
    .then((res:Array<any>) => {
      fillinTable(res);
      console.log(res);
    });
};
