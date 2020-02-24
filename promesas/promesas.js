/* Se emplea la API de Star Wars para hacer consultas de los */
/* personaes principales. Se utilizan promesas de forma serial*/ 

const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const luke_url = `${API_URL}${PEOPLE_URL.replace(':id', '1')}`
const options = { crossDomain: true }


function obtenerPersonaje(id) {
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $.get(url, options, function(data) {
            resolve(data)
        })
        .fail(() => reject(id))
    })
}

function onError(id) {
    console.log(`Sucedió un error al obtener el personaje ${id}`)
}

obtenerPersonaje(1)
    .then(personaje => {
        console.log(`El personaje 1 es ${personaje.name}`)

        return obtenerPersonaje(2)
    })
    .then(personaje2 => {
        console.log(`El personaje 2 es ${personaje2.name}`)

        return obtenerPersonaje(3)
    })
    .then(personaje3 => {
        console.log(`El personaje 3 es ${personaje3.name}`)

        return obtenerPersonaje(4)
    })
    .then(personaje4 => {
        console.log(`El personaje 4 es ${personaje4.name}`)
    })
    .catch(onError)

