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

function obtenerArray() {
    arrayN = JSON.parse(localStorage.getItem('arrayNom'))
    // console.log(arrayN.length)
}

obtenerArray()

for (let x = 0; x < (arrayN.length-1); x++) {
    container.appendChild(circulo.cloneNode(true))
}



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
        if (arrayN.length==0) {
        window.open('./final.html')
            
        }
    })
}

close.addEventListener('click', () => {
    modal_container.classList.remove('show');
});

function movimientoCursor() {
    window.addEventListener("mousemove", (e) => {
    cursor.style.top = e.pageY + "px";
    cursor.style.left = e.pageX + "px";
    });

}

movimientoCursor();
