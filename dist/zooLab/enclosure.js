export class Enclosure {
    constructor(name, squareFeet) {
        this.name = name;
        this.animals = [];
        this.squareFeet = squareFeet;
    }
    AddAnimal(animal) {
        this.animals.push(animal);
        console.log(`${animal.constructor.name} added in ${this.name} enclosure.`);
    }
    RemoveAnimal(animal) {
        const index = this.animals.indexOf(animal);
        if (index !== -1) {
            this.animals.splice(index, 1);
            console.log(`${animal.constructor.name} removed from ${this.name} enclosure.`);
        }
    }
    HasAnimal(targetAnimal) {
        return this.animals.includes(targetAnimal);
    }
}
//# sourceMappingURL=enclosure.js.map