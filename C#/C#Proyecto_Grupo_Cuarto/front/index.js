var table = document.getElementById('table');
var fillinTable = function (props) {
    props.map(function (user) {
        table.innerHTML += "<tr><td>".concat(user.ID_Booster, "</td></tr>");
    });
};
window.onload = function () {
    fetch("http://www.boosters.somee.com/api/usuario")
        .then(function (res) { return res.json(); })
        .then(function (res) {
        fillinTable(res);
        console.log(res);
    });
};
