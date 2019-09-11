// global variables

var gandalf = {
    health: 180,
    attackpower: 30,
}
var gimley = {
    health: 150,
    attackpower: 40,
}
var aragorn = {
    health: 150,
    attackpower: 40,
}
var legolas = {
    health: 200,
    attackpower: 25,
}
var sauron = {
    health: 500,
    attackpower: 20,
}

function initializeGame() {

var chosenFighterSlot = document.getElementById('chosenFighterColumn')


// Loads characters into the fighter Screen
document.addEventListener('click', event => {
if (event.target.id === 'arButton'){
    chosenFighterSlot.innerHTML = ''
    chosenFighterSlot.innerHTML += '<img src="./assets/images/aragorn.jpg" id="fighterImage">'
    chosenFighterSlot.innerHTML += '<h4>Health Points: 150</h4>'
}else if(event.target.id === 'legButton'){
    chosenFighterSlot.innerHTML = ''
    chosenFighterSlot.innerHTML += '<img src="./assets/images/legolas.png" id="fighterImage">'
    chosenFighterSlot.innerHTML += '<h4>Health Points: 200</h4>'
}else if(event.target.id === 'gimButton'){
    chosenFighterSlot.innerHTML = ''
    chosenFighterSlot.innerHTML += '<img src="./assets/images/gimley.jpg" id="fighterImage">'
    chosenFighterSlot.innerHTML += '<h4>Health Points: 150</h4>'
}else if(event.target.id === 'ganButton'){
    chosenFighterSlot.innerHTML = ''
    chosenFighterSlot.innerHTML += '<img src="./assets/images/gandalf_new.jpg" id="fighterImage">'
    chosenFighterSlot.innerHTML += '<h4>Health Points: 180</h4>'
}})}

initializeGame()