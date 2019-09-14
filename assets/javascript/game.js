

//player objects

var characters = [{
    name: 'gandalf',
    health: 180,
    attackpower: Math.floor(Math.random() * 25) + 25
},
{   
    name: 'gimley',
    health: 150,
    attackpower: Math.floor(Math.random() * 25) + 30
},
{   
    name: 'aragorn',
    health: 150,
    attackpower: Math.floor(Math.random() * 25) + 30
},
{   
    name: 'legolas',
    health: 200,
    attackpower: Math.floor(Math.random() * 25) + 20
},
{   
    name: 'sauron',
    health: 500,
    attackpower: Math.floor(Math.random() * 25) + 40
    // attackpower: () => Math.floor(Math.random() * 25) + 40
}];

let fighter = {};
let enemy = characters[4];
let chosenFighterSlot = document.getElementById('chosenFighterColumn');
let isFighterChosen = false;


// Loads characters into the fighter Screen
document.addEventListener('click', event => {
   
if (event.target.id === 'arButton'){
    isFighterChosen = true;
    fighter = characters[2];
    chosenFighterSlot.innerHTML = '';
    chosenFighterSlot.innerHTML += '<img src="./assets/images/aragorn.jpg" id="fighterImage">';
    chosenFighterSlot.innerHTML += '<h4 id="updateHealth">Health Points: 150</h4>';
}else if(event.target.id === 'legButton'){
    isFighterChosen = true;
    fighter = characters[3];
    chosenFighterSlot.innerHTML = '';
    chosenFighterSlot.innerHTML += '<img src="./assets/images/legolas.png" id="fighterImage">';
    chosenFighterSlot.innerHTML += '<h4 id="updateHealth">Health Points: 200</h4>';
}else if(event.target.id === 'gimButton'){
    isFighterChosen = true;
    fighter = characters[1];
    chosenFighterSlot.innerHTML = '';
    chosenFighterSlot.innerHTML += '<img src="./assets/images/gimley.jpg" id="fighterImage">';
    chosenFighterSlot.innerHTML += '<h4 id="updateHealth">Health Points: 150</h4>';
}else if(event.target.id === 'ganButton'){
    isFighterChosen = true;
    fighter = characters[0];
    chosenFighterSlot.innerHTML = '';
    chosenFighterSlot.innerHTML += '<img src="./assets/images/gandalf_new.jpg" id="fighterImage">';
    chosenFighterSlot.innerHTML += '<h4 id="updateHealth">Health Points: 180</h4>';
}})


document.getElementById('attackButton').addEventListener('click', event => {
    var newText = document.getElementById('statRow');
    var newHealth = document.getElementById('updateHealth');
    var sauronNewHealth = document.getElementById('sauronHealth')
    newText.innerHTML = '';
    newHealth.innerHTML = '';
    sauronNewHealth.innerHTML = '';
    let enemyHitStrength = enemy.attackpower;
    let fighterHitStrength = fighter.attackpower;
    fighter.health -= enemyHitStrength;
    enemy.health -= (fighterHitStrength);
    newHealth.innerHTML += 'Health Points: ' + fighter.health;
    sauronNewHealth.innerHTML += 'Health Points: ' + enemy.health;
    newText.innerHTML += 'You hit Sauron for ' + fighterHitStrength + ', '
    
    newText.innerHTML += 'Sauron Hit you for ' + enemyHitStrength;

    
})

const newHero = function() {
when

}