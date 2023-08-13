import { Grass } from "../../food/grass.js";
import { Reptile } from "./reptile.js";

export class Turtle extends Reptile {
  constructor() {
    super();
    this.requiredSpaceSqFt = 5;
    this.friends = ["Parrot", "Bison", "Elephant", "Turtle"];
    let grass = new Grass();
    this.favoriteFood.push(grass.constructor);
  }
}
