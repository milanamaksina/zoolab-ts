import { Grass } from "../../food/grass.js";
import { Bird } from "./bird.js";

export class Parrot extends Bird {
  constructor() {
    super();
    this.requiredSpaceSqFt = 5;
    this.friends = ["Parrot", "Bison", "Elephant", "Turtle"];
    let grass = new Grass();
    this.favoriteFood.push(grass.constructor);
  }
}
