import { Meat } from '../../food/meat.js';
import { Reptile } from './reptile.js';

export class Snake extends Reptile {
  constructor() {
    super();
    this.requiredSpaceSqFt = 2;
    this.friends = ['Snake'];
    let meat = new Meat();
    this.favoriteFood.push(meat.constructor);
  }
}