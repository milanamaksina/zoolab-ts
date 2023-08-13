import { FeedTime } from '../animals/feedTime.js';

export class Animal {
  feedTimes: Date[] = [];
  feedSchedule: number[] = [];
  friends: string[] = [];
  requiredSpaceSqFt: number;
  favoriteFood: any[] = [];
  isSick: boolean = false;

  constructor() {
    if (this.constructor === Animal) {
      throw new Error('You cannot create an instance of Abstract Class.');
    }
  }

  IsFriendlyWith(animal: Animal): boolean {
    return this.friends.includes(animal.constructor.name);
  }

  Feed(food: any): void {
    const feedTime: Date = new FeedTime().feedTime;
    if (this.favoriteFood.includes(food.constructor)) {
      this.feedTimes.push(feedTime);
      console.log(
        `at ${feedTime} animal ${this.constructor.name} was feed`
      );
    } else {
      console.log(`${this.constructor.name} doesn't eat ${food.constructor.name}`);
    }
  }

  AddFeedSchedule(hours: number): void {
    this.feedSchedule.push(hours);
  }
}