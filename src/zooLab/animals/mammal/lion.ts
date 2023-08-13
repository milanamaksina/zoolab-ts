import { Meat } from '../../food/meat.js';
import { Mammal } from './mammal.js';

export class Lion extends Mammal {
  constructor() {
    super();
    this.requiredSpaceSqFt = 1000;
    this.friends = ['Lion'];
    let meat = new Meat();
    this.favoriteFood.push(meat.constructor);
  }
}