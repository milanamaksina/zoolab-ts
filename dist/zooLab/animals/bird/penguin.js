import { Meat } from "../../food/meat.js";
import { Bird } from "./bird.js";
export class Penguin extends Bird {
    constructor() {
        super();
        this.requiredSpaceSqFt = 10;
        this.friends = ["Penguin"];
        let meet = new Meat();
        this.favoriteFood.push(meet.constructor);
    }
}
//# sourceMappingURL=penguin.js.map