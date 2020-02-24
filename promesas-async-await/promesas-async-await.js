// Se emplea la API de Star Wars para hacer consultas de los
// personaes principales. Se utiliza async-await para realizar tareas
// asíncronas

const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const luke_url = `${API_URL}${PEOPLE_URL.replace(':id', '1')}`
const options = { crossDomain: true }


function obtenerPersonaje(id) {
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $.get(url, options, function (data) {
            resolve(data)
        })
            .fail(() => reject(id))
    })
}

function onError(id) {
    console.log(`Sucedió un error al obtener el personaje ${id}`)
}

// Función asíncrona 
async function obtenerPersonajes() {
    var ids = [1, 2, 3, 4, 5, 6, 7]
    var promesas = ids.map(id => obtenerPersonaje(id))
    try {
        // la siguiente linea se ejecuta de manera asíncrona,
        // await (palabra reservada) detiene la ejecución hasta que las 
        // promesas sean resueltas
        var personajes = await Promise.all(promesas)
        console.log(personajes)
    } catch (id) {
        onError(id)
    }
}

obtenerPersonajes()


