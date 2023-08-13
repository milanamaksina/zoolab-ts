import { Zoo } from "./zooLab/zoo.js";

export class ZooApp {
  zoos: Zoo[] = [];
  name: string;

  constructor(name: string) {
    this.name = name;
    console.log(`Created Zoo App ${this.name}.`);
  }

  AddZoo(zoo: Zoo): void {
    this.zoos.push(zoo);
    console.log(`Zoo from ${zoo.location} added to ${this.name} Zoo App.`);
  }
}
