const fs = require("fs");
const path = "../data/archivos.json"
function leerArchivo() {
  const json = fs.readFileSync(path, "utf-8");
  const array = JSON.parse(json);
  return array;
}
console.log(leerArchivo())


function guardar(parametro){
    let newLista = JSON.stringify(parametro);
    fs.writeFileSync(path,newLista);
}