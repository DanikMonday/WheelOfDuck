// Se vinculan las variables a elementos del html mediante clases y/o id

const container = document.querySelector('.carrusel-items')
const circulo = document.querySelector('.circulo1')
const dianas = document.getElementsByClassName('circulo1')
const puntos = document.querySelector('#contador')

const open = document.getElementById('open');//varible open, trae al elemento por su id open
const modal_container = document.getElementById('modal_container');//varible hace referencia al id modal_container y la invoca
const close = document.getElementById('close');// variable close trae el elemento por su id close

let score = 0 

const cursor = document.querySelector(".cursor");
const patoeliminado = document.querySelector('#patos')

/** esta función llama al array almacenado en local 
 * storage y convierte sus elementos de un archivo JSON
 *   al formato en el que se encuentra el elemento originalmente.
 */

function obtenerArray() {
    arrayN = JSON.parse(localStorage.getItem('arrayNom'))
    // console.log(arrayN.length)
}

obtenerArray()

/**el siguiente ciclo for clona las dianas con los patos el número
 *  de veces que le indique la extensión del array de nombres que tenemos.  */

for (let x = 0; x < (arrayN.length-1); x++) {
    container.appendChild(circulo.cloneNode(true))
}

// Se declaran nuevas variables que corresponden a archivos de audio y su respectivo nombre
let sound1 = new Audio ('play3.mp3');
let sound2 = new Audio ('play2.mp3');
let sound3 = new Audio ('gameover.mp3');

/**el siguiente ciclo for se encarga de recorrer cada uno de los
 *  elementos clonados para lograr que el addeventlistener tenga 
 * efecto en cada uno de ellos. Con este evento lo que logramos 
 * es eliminar un nombre del array cuando se dispara a un blanco 
 * y eliminar uno de los objetos clonados. Al final tenemos un 
 * condicional if el cual nos lleva a la página de game over cuando 
 * el arrayN.lenght es igual a cero.   */

for (let x = 0; x < (dianas.length); x++) {
    dianas[x].addEventListener('click',(e)=>{
        const eliminado = arrayN.splice((0),1)
        score+=1
        modal_container.classList.add('show'); 
        // const eliminado = arrayN.splice((Math.floor( Math.random()*(arrayN.length))),1)
        console.log(arrayN)
        console.log(eliminado)
        container.removeChild(dianas[0])
        puntos.innerHTML = 'Puntos: ' + String(score)
        patoeliminado.innerHTML = 'Pato Eliminado: ' + String(eliminado);
        // Cuando se detecte el click sobre las dianas se reproduce el sound3 
        sound2.play();
        if (arrayN.length==0) {
        window.open('./final.html')
        // Cuando el arreglo arrayN no tenga mas elementos se pausa el sound1
        // y se reproduce el sonido sound3
        sound3.play();
        sound1.pause();
        }
    })
}

close.addEventListener('click', () => {
    modal_container.classList.remove('show');
});

// Se agrega el metodo addEventListener para detectar el movimiento del mouse y situar sus 
// coordenadas en la pantalla
function movimientoCursor() {
    window.addEventListener("mousemove", (e) => {
    cursor.style.top = e.pageY + "px";
    cursor.style.left = e.pageX + "px";
    });

}

movimientoCursor();

// Para los botones de reproduccion de musica se agrega el metodo que detecta un click sobre cada uno 
// y se asigna la funcion de play para reproducir y pause para detener

playOn.addEventListener('click',()=> {
    sound1.play();
});
playOff.addEventListener('click',()=> {
    sound1.pause();
});
