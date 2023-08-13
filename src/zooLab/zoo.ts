import { Animal } from "./animals/animal.js";
import { Enclosure } from "./enclosure.js";

export class Zoo {
  enclosures: Enclosure[] = [];
  location: string;

  constructor(location: string) {
    this.location = location;
    console.log(`Created new zoo in ${this.location}.`);
  }

  AddEnclosure(enclosure: Enclosure): void {
    this.enclosures.push(enclosure);
    console.log(
      `Added new enclosure "${enclosure.name}" with square feet: ${enclosure.squareFeet} ft to ${this.location} zoo.`
    );
  }

  FindAvailableEnclosure(animal: Animal): Enclosure | null | undefined {
    if (this.enclosures.length > 0) {
      for (let i = 0; i < this.enclosures.length; i++) {
        let enclosureOccupiedSpace = 0;
        let isFriendly = true;
        for (let j = 0; j < this.enclosures[i].animals.length; j++) {
          enclosureOccupiedSpace +=
            this.enclosures[i].animals[j].requiredSpaceSqFt;
          if (!animal.IsFriendlyWith(this.enclosures[i].animals[j])) {
            isFriendly = false;
          }
        }
        if (
          animal.requiredSpaceSqFt &&
          enclosureOccupiedSpace + animal.requiredSpaceSqFt <
            this.enclosures[i].squareFeet &&
          isFriendly
        ) {
          console.log("Found an enclosure.");
          return this.enclosures[i];
        } else {
          console.log("No enclosures available.");
        }
      }
    } else {
      console.log("At least one enclosure required.");
      return null;
    }
  }

  AddAnimal(animal: Animal): void {
    const enclosure = this.FindAvailableEnclosure(animal);
    if (enclosure?.constructor.name === "Enclosure") {
      enclosure.AddAnimal(animal);
    }
  }

  RemoveAnimal(animal: Animal): void {
    const enclosure = this.FindEnclosureContainingAnimal(animal);
    if (enclosure) {
      enclosure.RemoveAnimal(animal);
    }
  }

  FindEnclosureContainingAnimal(
    targetAnimal: Animal
  ): Enclosure | undefined {
      for (const enclosure of this.enclosures) {
        if (enclosure.HasAnimal(targetAnimal)) {
          return enclosure;
        }
      }
    return undefined;
  }
}
