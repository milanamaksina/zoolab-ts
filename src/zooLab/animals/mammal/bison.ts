import { Grass } from "../../food/grass.js";
import { Mammal } from "./mammal.js";

export class Bison extends Mammal {
  constructor() {
    super();
    this.requiredSpaceSqFt = 1000;
    this.friends = ["Lion"];
    let grass = new Grass();
    this.favoriteFood.push(grass.constructor);
  }
}
