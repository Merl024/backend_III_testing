import {Command} from 'commander'

const program = new Command()

program
        // Va a recibir un valor, descripcion, valor por defecto
        .option('-p <port> ', "", 9090)
        // En caso que sea una letra es solo un guion, pero si es una palabra, son dos guiones. 
        .option('--mode <mode>', "", "development" )
        // Esta es una opcion requeria, es decir que tirara error si no se pasa. 
        // .requiredOption('--user <user> ', "")

program.parse()

export const options = program.opts()
