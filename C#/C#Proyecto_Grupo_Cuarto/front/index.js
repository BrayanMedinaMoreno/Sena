const table = document.getElementById("table");

const fillinTable = (props) => {
  props.map((user) => {
    table.innerHTML += `<tr class='row-1'><td class='campo'>${user.ID_Booster}</td>
    <td class='campo'>${user.Usuario_Booster}</td>
    <td class='campo'>${user.Discord_Booster}</td>
    <td class='campo'>${user.Correo_Booster}</td>
    <td class='campo'>${user.Pais_Booster}</td>
    <td class='campo'>${user.Rango_Booster}</td>
    <td class='campo'>${user.Servidores_Booster}</td>
    <td class='campo'>${user.Metodo_de_pago_Booster}</td>
    <td class='campo'>${user.Posiciones_Booster}</td>
    <td class='campo'>${user.Tipo_de_Booster}</td>
    <td class='campo'>${user.Fecha_de_Ingreso_Booster}</td>
    </tr>`;
  });
};

window.onload = () => {
  fetch("http://www.boosters.somee.com/api/usuario")
    .then((res) => res.json())
    .then((res) => {
      fillinTable(res);
      console.log(res);
    });
};
