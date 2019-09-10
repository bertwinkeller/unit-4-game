// global variables

characterHealth = 0
characterAttackDamage = 0
sauronHealth = 400
sauronAttackDamage = 50

var chosenFighterSlot = document.getElementById('chosenFighterColumn')



document.addEventListener('click', event => {
if (event.target.id === 'arButton'){
    chosenFighterSlot.innerHTML += '<img src="./assets/images/aragorn.jpg" id="fighterImage">'
}
})


