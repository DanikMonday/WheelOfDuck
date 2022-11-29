const form = document.getElementById('submit_Player');
const list = document. querySelector('.lista');
const start = document.querySelector('#start')
const arrayNombres = [];


form.addEventListener('submit', funcion )
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

start.addEventListener('click', (e)=>{
    e.preventDefault()
    arrayNombres.sort(()=>Math.random()-0.5)
    console.log(arrayNombres)
    // const aleat = Math.floor(Math.random()*arrayNombres.length)
    // console.log(arrayNombres[aleat])
})


