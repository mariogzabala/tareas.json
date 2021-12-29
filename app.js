// Manera 1


let fs = require('fs');  // importo libreria para leer archivos de texto

let obj_json = fs.readFileSync('./servicios/tareas.json');  // Leo el archivo con o sin 'utf-8'
let obj_literal = JSON.parse(obj_json);  // convierto el archivo

console.log(obj_literal);



// Manera 2


let obj_literal2 = require('./servicios/tareas.json');

console.log(obj_literal2);






