/* usar json
pasar los objetos a formato array
luego generar el recorrido al dom 
usar un map*/



const resultado = 
Object.keys(data) // Primero obtienes las llaves del objeto, es decir 1,2,3 en un array
.map( key => ({ id: key, value: data[key]  }) ); // Luego lo ciclas y haces un nuevo array, referenciando al original

console.log(resultado);