const form = document.getElementById('submit_Player');
const list = document. querySelector('.lista');

form.addEventListener('submit', (event)=> {
    event.preventDefault()
    const inputValue = event.target.player_name.value // hace referencia al elemento html que tiene el addeventlistener 
    const newitem = document.createElement('li')
    newitem.appendChild(document.createTextNode(inputValue))
    list.appendChild(newitem)
    event.target.player_name.value = ''
})



