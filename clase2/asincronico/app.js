//  Funcion de suma de dos numeros
function suma(a,b){
    return a + b
}

// Funcion de simulaciond de login

function login (username, password){
    const validarUser = {
        username: 'admin',
        password: '1234'
    }

    if(username === validarUser.username && password === validarUser.password){
        return 'Login exitoso'
    } else {
        return 'Credenciales incorrectas'
    }
}

export default { login, suma };
 