const container = document.querySelector('.carrusel-items')
const circulo = document.querySelector('.circulo1')
const dianas = document.getElementsByClassName('circulo1')

const cursor = document.querySelector(".cursor");


const patoeliminado = document.querySelector('#patos')

function obtenerArray() {
    arrayN = JSON.parse(localStorage.getItem('arrayNom'))
    console.log(arrayN.length)
}

obtenerArray()


for (let x = 0; x < (arrayN.length-1); x++) {
    container.appendChild(circulo.cloneNode(true))
}


for (let x = 0; x < (dianas.length); x++) {
    dianas[x].addEventListener('click',(e)=>{
        const eliminado = arrayN.splice((x),1)
        // const eliminado = arrayN.splice((Math.floor( Math.random()*(arrayN.length))),1)
        console.log(arrayN)
        // console.log(eliminado)
        container.removeChild(dianas[x])

        patoeliminado.innerHTML = 'Pato Eliminado: ' + String(eliminado);
    })
}

function movimientoCursor() {
  window.addEventListener("mousemove", (e) => {
    cursor.style.top = e.pageY + "px";
    cursor.style.left = e.pageX + "px";
  });

}

movimientoCursor();
 

