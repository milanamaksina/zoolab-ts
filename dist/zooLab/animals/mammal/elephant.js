import { Grass } from '../../food/grass.js';
import { Mammal } from './mammal.js';
export class Elephant extends Mammal {
    constructor() {
        super();
        this.requiredSpaceSqFt = 1000;
        this.friends = ['Bison', 'Parrot', 'Turtle'];
        let grass = new Grass();
        this.favoriteFood.push(grass.constructor);
    }
}
//# sourceMappingURL=elephant.js.map