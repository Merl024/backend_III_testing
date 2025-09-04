import { suma, login } from './app.js'

test('Suma de 2 + 3 para obtener 5', () => { 
    expect(suma(2,3)).toBe(5)
})

describe('Test de login', () => {
    test('Login con credenciales correctas', () => { 
        expect(login('admin', '1234')).toBe('Login exitoso')
    })

    test('Login con credenciales incorrectas', () => {
        expect(login('melisa', '2345')).toBe('Credenciales incorrectas')
    })
})

// Para correr poner npm test (script hecho en package.json)