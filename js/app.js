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




//* INDEX HTML - FONDO EFECTO PANORÁMICA 360°

// Variable para seleccionar el elemento que contendrá el fondo
const panoramicImage = document.querySelector('.panoramic-image');

// Variable para la ruta de la imagen
const pathImage = './img/fondoPrincipal.jpg';

// Variable para cargar la imagen de fondo: Se carga la librería Panolens js, y se accede al método ImagePanorama, el cual recibe como argumento la ruta de la imagen.
const panoramic = new PANOLENS.ImagePanorama(pathImage);

// Variable para ajustar la vista de la imagen: Se carca la librería Panolens js, y se accede al método Viewer, el cual recibe como argumento valores de tipo objeto.
const view = new PANOLENS.Viewer({
  container: panoramicImage, // Contenedor de la imagen en el DOM
  autoRotate: true, // Permite que la imagen rote automáticamente
  autoRotateSpeed: 0.2, // Velocidad de la autorotación
  controlBar: false, // Quita los controles de pantalla completa
  cameraFov: 90, // Acercamiento de la cámara sobre la imagen
});

// Se llama la variable que contiene el valor del método Viewer, y se accede al método add el cual permite cargar la imagen
view.add(panoramic);

// Este metodo permite posicionar la imagen en diferentes coordenadas x, y, z y la duración
view.tweenControlCenter(new THREE.Vector3(50, 10, 0), 0);

// Este método permite deshabilitar el zoom sobre la imagen
view.OrbitControls.noZoom = true;
