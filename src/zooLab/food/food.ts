export abstract class Food {
  constructor() {
    if (this.constructor === Food) {
      throw new Error("Can't create instance of Food abstract class");
    }
  }
}
