

//player objects
// Contains Name, Health, and Randomized Attack Power

var characters = [{
    name: 'Gandalf',
    health: 180,
    attackpower: Math.floor(Math.random() * 25) + 15
},
{
    name: 'Gimley',
    health: 150,
    attackpower: Math.floor(Math.random() * 25) + 15
},
{
    name: 'Aragorn',
    health: 150,
    attackpower: Math.floor(Math.random() * 25) + 15
},
{
    name: 'Legolas',
    health: 200,
    attackpower: Math.floor(Math.random() * 25) + 15
},
{
    name: 'Sauron',
    health: 500,
    attackpower: Math.floor(Math.random() * 25) + 25
    // attackpower: () => Math.floor(Math.random() * 25) + 40
}];

// Global Variables

let fighter = {};
let enemy = characters[4];
let chosenFighterSlot = document.getElementById('chosenFighterColumn');
let sauronColumn = document.getElementById('sauroncol');
let isFighterChosen = false;


// Loads characters into the fighter Screen
// Takes Button inputs and appends corresponding image and text to DOM
// Sets Fighter Variable to correct element in array
document.addEventListener('click', event => {

    if (event.target.id === 'arButton') {
        isFighterChosen = true;
        fighter = characters[2];
        chosenFighterSlot.innerHTML = '';
        chosenFighterSlot.innerHTML += '<img src="./assets/images/aragorn.jpg" id="fighterImage">';
        chosenFighterSlot.innerHTML += '<h4 id="updateHealth">Health Points: 150</h4>';
    } else if (event.target.id === 'legButton') {
        isFighterChosen = true;
        fighter = characters[3];
        chosenFighterSlot.innerHTML = '';
        chosenFighterSlot.innerHTML += '<img src="./assets/images/legolas.png" id="fighterImage">';
        chosenFighterSlot.innerHTML += '<h4 id="updateHealth">Health Points: 200</h4>';
    } else if (event.target.id === 'gimButton') {
        isFighterChosen = true;
        fighter = characters[1];
        chosenFighterSlot.innerHTML = '';
        chosenFighterSlot.innerHTML += '<img src="./assets/images/gimley.jpg" id="fighterImage">';
        chosenFighterSlot.innerHTML += '<h4 id="updateHealth">Health Points: 150</h4>';
    } else if (event.target.id === 'ganButton') {
        isFighterChosen = true;
        fighter = characters[0];
        chosenFighterSlot.innerHTML = '';
        chosenFighterSlot.innerHTML += '<img src="./assets/images/gandalf_new.jpg" id="fighterImage">';
        chosenFighterSlot.innerHTML += '<h4 id="updateHealth">Health Points: 180</h4>';
    }
})

//function that checks to see if hero wins or Sauron wins
//asks for new character when one is defeated
//clears column depending on winner and loser
const newHero = function () {
    if(fighter.health <= 0) {
        let deadHeroMessage = `${fighter.name} was killed by Sauron! Choose another fighter to destroy him and bring peace to Middle Earth!`;
        alert(deadHeroMessage);
        chosenFighterSlot.innerHTML = '';
    }else if(enemy.health <= 0 || fighter.health <= 0) {
        let deadEnemyMessage = `${fighter.name} killed Sauron and brought peace to Middle Earth! Refresh the Page to play again!`;
        alert(deadEnemyMessage);
        sauronColumn.innerHTML = '';

    }
};

//attack button functionality
//updates dom with hit and damage information for both users
// calls function to select a new hero to fight sauron
document.getElementById('attackButton').addEventListener('click', event => {
    var newText = document.getElementById('statRow');
    var newHealth = document.getElementById('updateHealth');
    var sauronNewHealth = document.getElementById('sauronHealth');
    newText.innerHTML = '';
    newHealth.innerHTML = '';
    sauronNewHealth.innerHTML = '';
    let enemyHitStrength = enemy.attackpower;
    let fighterHitStrength = fighter.attackpower;
    fighter.health -= enemyHitStrength;
    enemy.health -= (fighterHitStrength);
    newHealth.innerHTML += 'Health Points: ' + fighter.health;
    sauronNewHealth.innerHTML += 'Health Points: ' + enemy.health;
    newText.innerHTML += `${fighter.name} hit Sauron for ` + fighterHitStrength + ' dmg , ';
    newText.innerHTML += `Sauron Hit ${fighter.name} for ` + enemyHitStrength + ' dmg';
    newHero();

})
