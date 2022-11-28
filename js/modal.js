// variables abrir/cerrar de la ventana modal, eventlistener.
const open = document.getElementById('open');//varible open, trae al elemento por su id open
const modal_container = document.getElementById('modal_container');//varible hace referencia al id modal_container y la invoca
const close = document.getElementById('close');// variable close trae el elemento por su id close
//Evento listener click, con la funcion para la variable añadiendo la clase show
open.addEventListener('click', () => {
  modal_container.classList.add('show');  
  
});
//Evento listener click, con la funcion para la variable removiendo la clase show
close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});