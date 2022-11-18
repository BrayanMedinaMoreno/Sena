(() => {
  fetch("")
    .then((res) => res.json)
    .then((res) => {
      fillingTable(res)
    })
    .catch((err) => console.log(err));
})();

const fillingTable = (info) => {
  document.getElementById('table').innerHTML+= `${info}`
}
