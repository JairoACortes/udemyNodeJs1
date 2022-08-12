const deadpool = {
    name: "Wayen",
    lastName: "Winston",
    power: "Healing",
    getName() {
        return `${this.name} ${this.lastName}`
    }
}
// const namee=deadpool.name;
// const apellido=deadpool.lastName;
// const power=deadpool.power;
// const {name: namee, lastName, power} = deadpool;
// console.log(namee, lastName, power);

function imprimeHeroe({name: namee, lastName, power}){
    console.log(namee, lastName, power);
}

// imprimeHeroe(deadpool);

const heroes = ["deadpool", "superman", "batman"]

// const h1 = heroes[0];
// const h2 = heroes[1];
// const h3 = heroes[2];
const [ , ,h3] = heroes

console.log(h3);