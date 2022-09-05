class Ninja {
    constructor(name, health = 3, speed = 3, strength = 3){
        this.name = name
        this.health = health 
        this.speed = speed
        this.strength = strength
    }


    sayName() {
        console.log(`${this.name} is my name.`);
    }

    showStats() {
        console.log(`Stats: Name- ${this.name} Health- ${this.health} Speed- ${this.speed} Strength- ${this.strength} `)
    }

    drinkSake() {
        this.health += 10
        console.log(`You drank Sake and now your health is at ${this.health}`)
    }
}
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
