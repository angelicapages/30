const grilla = document.querySelector(".grilla")

let tamaño1 = prompt("Dime un frutinivel: facil, medio o dificil?")
let tamaño = tamaño1.toLowerCase()

const transformarAFacil = () => {
    crearGrilla(6, 6)
}

const transformarAMedio=()=>{
    crearGrilla(10,10)
}

const transformarADificil=()=>{
    crearGrilla(15,15)
}

const crearGrilla = (ancho, alto) => {
    const anchoDeGrilla = 50 * ancho
    grilla.style.width = `${anchoDeGrilla}px`
    // alternativa
    // grilla.style.width = String(anchoDeGrilla) + 'px'
    // grilla.style.width = anchoDeGrilla + 'px'

    const obtenerNumeroAlAzar = () => {
        return Math.floor((Math.random() * 6))
    }

    const items = ['🍉', '🍐', '🍌', '🍇', '🍎', '🍊']

    const obtenerFrutaAlAzar = (items) => {
        return items[obtenerNumeroAlAzar()]
    }

    const listaDeFrutas = []

    for (let i = 0; i < alto * ancho; i++) {
        listaDeFrutas[i] = obtenerFrutaAlAzar(items)
    }

    grilla.innerHTML = ''
    for (let i = 0; i < listaDeFrutas.length; i++) {
        grilla.innerHTML += `<div>${listaDeFrutas[i]}</div>`
    }
}


if (tamaño == "facil") {
    console.log("facil")
    transformarAFacil()
}
else if (tamaño == "medio") {
    transformarAMedio()
}
else if (tamaño == "dificil") {
    transformarADificil()
}

// Consigna

// Al iniciar la pagina, pedir mediante un prompt que el usuario elija una difcultad
// Facil es 9*9
// Mediano es 6*6
// Dificil es 4*4



// variable acumuladora 
// siempre se declaran inmediatamente antes del for
// se declaran con valor vacio, 0 para numeros, "" para strings
// en cada vuelta del for se usa += para ir acumulando los valores del array

// const nombres = ["sol", "angie", "rebe"]
// let nombresEnString = ''
// for (let i = 0; i < nombres.length; i++) {
 //   console.log("estoy en la vuelta", i)
//   nombresEnString += nombres[i]  
// }

// const numeros = [1, 8, 7, 4, 9, 9]
// let total = 0
// for (let i = 0; i < numeros.length; i++) {
//   console.log("estoy en la vuelta", i)
//   total += numeros[i]
//   console.log(total)
// }