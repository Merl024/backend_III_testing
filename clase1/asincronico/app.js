// Los dos primeros argumentos son figos. 
console.log("Argumentos", process.argv);

const firstArg = process.argv[2]

// Poner en la terminal: node app.js *argumentos*
console.log("Primer argumento no fijo -> ", firstArg); // node app.js 1, 2 


/** El entorno de produccion es donde esta el producto final con la db con registros reales.  */