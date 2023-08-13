import { Animal } from "./animals/animal.js";
import { Zoo } from "./zoo.js";

export class Enclosure {
  name: string;
  animals: Animal[];
  squareFeet: number;

  constructor(name: string, squareFeet: number) {
    this.name = name;
    this.animals = [];
    this.squareFeet = squareFeet;
  }

  AddAnimal(animal: Animal): void {
    this.animals.push(animal);
    console.log(`${animal.constructor.name} added in ${this.name} enclosure.`);
  }

  RemoveAnimal(animal: Animal): void {
    const index = this.animals.indexOf(animal);
    if (index !== -1) {
      this.animals.splice(index, 1);
      console.log(`${animal.constructor.name} removed from ${this.name} enclosure.`)
    }
  }

  HasAnimal(targetAnimal: Animal): boolean {
    return this.animals.includes(targetAnimal);
  }
}
