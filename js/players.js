/**relacionamos los elementos a los que queremos dar funcionalidad 
 con js. arrayNombres es un array vacío ya que en este se almacena 
 los datos de los coders que van a ser eliminados */

const form = document.getElementById('submit_Player');
const list = document. querySelector('.lista');
const start = document.querySelector('#start')
const arrayNombres = [];

/*el símbolo ‘?’ aparece delante de form y star como una forma 
de verificar si el elemento existe dentro del html. El addeventlistener 
detecta el evento submit dentro del input y ejecuta la función llamada
“función” la cual va llenando el array vacío con los nombres que el usuario ingresa.
 */

form?.addEventListener('submit', funcion )
function funcion (event){
    event.preventDefault()
    const inputValue = event.target.player_name.value
    const newitem = document.createElement('li')
    newitem.appendChild(document.createTextNode(inputValue))
    list.appendChild(newitem)
    event.target.player_name.value=''
    //agregando la matriz de nombres 
    arrayNombres.push(inputValue)
    console.log(arrayNombres)
}

/**En el segundo addeventlistener reordena aleatoriamente
 *  el array de nombres anteriormente formado. y este se
 *  almacena en el local storage para que no desaparezca en cuando se cambia de página   
 */

start?.addEventListener('click', (e)=>{
    // e.preventDefault()
    arrayNombres.sort(()=>Math.random()-0.5)
    console.log(arrayNombres)
    // const aleat = Math.floor(Math.random()*arrayNombres.length)
    // console.log(arrayNombres[aleat])
    localStorage.setItem('arrayNom', JSON.stringify (arrayNombres))
})
