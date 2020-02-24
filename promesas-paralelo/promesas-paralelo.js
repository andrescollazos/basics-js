/* Se emplea la API de Star Wars para hacer consultas de los */
/* personaes principales. Se utilizan promesas encadenadas en paralelo*/

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

// Para hacer el llamado a múltiples promesas, nos apoyamos en un array de ids
// con el que luego construimos otro arreglo de Promesas

var ids = [1, 2, 3, 4, 5, 6, 7]
// var promesas = ids.map(function (id) {
//     return obtenerPersonaje(id)
// })

// Encadenar promesas de forma parelela (no es posible con callbacks)
var promesas = ids.map(id => obtenerPersonaje(id))
Promise.all(promesas)
    .then(personajes => console.log(personajes))
    .catch(onError)
