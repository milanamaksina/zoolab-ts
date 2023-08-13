import { FeedTime } from '../animals/feedTime.js';
export class Animal {
    constructor() {
        this.feedTimes = [];
        this.feedSchedule = [];
        this.friends = [];
        this.favoriteFood = [];
        this.isSick = false;
        if (this.constructor === Animal) {
            throw new Error('You cannot create an instance of Abstract Class.');
        }
    }
    IsFriendlyWith(animal) {
        return this.friends.includes(animal.constructor.name);
    }
    Feed(food) {
        const feedTime = new FeedTime().feedTime;
        if (this.favoriteFood.includes(food.constructor)) {
            this.feedTimes.push(feedTime);
            console.log(`at ${feedTime} animal ${this.constructor.name} was feed`);
        }
        else {
            console.log(`${this.constructor.name} doesn't eat ${food.constructor.name}`);
        }
    }
    AddFeedSchedule(hours) {
        this.feedSchedule.push(hours);
    }
}
//# sourceMappingURL=animal.js.map