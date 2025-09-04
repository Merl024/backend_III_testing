import express from "express"
import compression from "compression"

const app = express()

const PORT = 8080

/* 
Cuando tenemos aplicaciones o pantallas que pesan demasiado por su contenido, se ocupa la libreria
compression para poder comprimir el contenido y reducir el tiempo de carga de la pantalla 
*/

app.use(compression({ brotli: { enabled: true, zlib: { } } }))

app.get("/", (req, res)=>{
    let string = "Hola, Coders, soy un string ridiculamente largo "

    for(let i = 0; i < 1e6; i++){
        string += "Hola, Coders, soy un string ridiculamente largo " 
    }

    res.send(string)
})

app.listen(PORT, () => {
    console.log(`Server running in ${PORT}`);
})