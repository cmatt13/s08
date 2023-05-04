const pokemonTrainer = {};

pokemonTrainer.name = "Ash",
pokemonTrainer.age = 21,
pokemonTrainer.pokemon = ["Charizard", "Magikarp", "Pikachu"],
pokemonTrainer.friends = {
	May: ["Raichu", "Gyarados"],
	brock: ["Snorlax", "Vaporeon"]
    
};

pokemonTrainer.talk = function(){
	console.log("Pikachu! I choose you!");
};

pokemonTrainer.talk();

console.log(pokemonTrainer.name);
console.log(pokemonTrainer["age"]);
console.log(pokemonTrainer.pokemon);
console.log(pokemonTrainer.friends);

function Pokemon(name, level){
	this.name = name;
	this.level = level;
	this.health = level * 20;
	this.attack = level * 10;
}

const charizard = new Pokemon("Charizard", 90);
const magikarp = new Pokemon("Magikarp", 80);
const pikachu = new Pokemon("Pikachu", 88);

Pokemon.prototype.tackle = function(battlePokemon){
	battlePokemon.health -= this.attack;
    if (battlePokemon.health <= 0) {
    	this.faint(battlePokemon);
    }
};

Pokemon.prototype.faint = function(battlePokemon){
	console.log(battlePokemon.name + "is fainted");
};

pikachu.tackle(magikarp);
console.log(magikarp.health);