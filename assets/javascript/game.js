// global variables
var playerChosen = false;


//player objects

var characters = [{
    name: 'gandalf',
    health: 180,
    attackpower: () => Math.floor(Math.random() * 25) + 25
},
{   
    name: 'gimley',
    health: 150,
    attackpower: () => Math.floor(Math.random() * 25) + 30
},
{   
    name: 'aragorn',
    health: 150,
    attackpower: () => Math.floor(Math.random() * 25) + 30
},
{   
    name: 'legolas',
    health: 200,
    attackpower: () => Math.floor(Math.random() * 25) + 20
},
{   
    name: 'sauron',
    health: 500,
    attackpower: () => Math.floor(Math.random() * 25) + 40
}];

let fighter = {};
let enemy = characters[4];
let chosenFighterSlot = document.getElementById('chosenFighterColumn');
// let isFighterChosen = False;


// Loads characters into the fighter Screen
document.addEventListener('click', event => {
   
if (event.target.id === 'arButton'){
    // isFighterChosen = True;
    fighter = characters[2];
    chosenFighterSlot.innerHTML = '';
    chosenFighterSlot.innerHTML += '<img src="./assets/images/aragorn.jpg" id="fighterImage">';
    chosenFighterSlot.innerHTML += '<h4>Health Points: 150</h4>';
}else if(event.target.id === 'legButton'){
    // isFighterChosen = True;
    fighter = characters[3];
    chosenFighterSlot.innerHTML = '';
    chosenFighterSlot.innerHTML += '<img src="./assets/images/legolas.png" id="fighterImage">';
    chosenFighterSlot.innerHTML += '<h4>Health Points: 200</h4>';
}else if(event.target.id === 'gimButton'){
    // isFighterChosen = True;
    fighter = characters[1];
    chosenFighterSlot.innerHTML = '';
    chosenFighterSlot.innerHTML += '<img src="./assets/images/gimley.jpg" id="fighterImage">';
    chosenFighterSlot.innerHTML += '<h4>Health Points: 150</h4>';
}else if(event.target.id === 'ganButton'){
    // isFighterChosen = True;
    fighter = characters[0];
    chosenFighterSlot.innerHTML = '';
    chosenFighterSlot.innerHTML += '<img src="./assets/images/gandalf_new.jpg" id="fighterImage">';
    chosenFighterSlot.innerHTML += '<h4>Health Points: 180</h4>';
}})

const printInfo = () =>{
    
    
}


document.getElementById('attackButton').addEventListener('click', event => {
    fighter.health -= enemy.attackpower();
    enemy.health -= fighter.attackpower();
    // fighter -= characters[characters.length - 1].attackpower()
    // characters[characters.length - 1] -= fighter.attackpower()
    console.log(fighter.health);
    console.log(enemy.health);
    
})