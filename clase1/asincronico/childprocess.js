import { exec } from 'child_process';

// Ejecutar un comando 'Ls' para Listar archivos en eL directorio actual
exec('dir', (error, stdout, stderr) => {
    if (error) {
        console.error(`Error al ejecutar el comando: ${error.message}`)
        return 
    }

    if (stderr) {
        console.error(`Error en la salida: ${stderr}`)
        return
    }

    console.log(`Resultado del comando: \n${stdout}`);  
})

