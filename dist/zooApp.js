export class ZooApp {
    constructor(name) {
        this.zoos = [];
        this.name = name;
        console.log(`Created Zoo App ${this.name}.`);
    }
    AddZoo(zoo) {
        this.zoos.push(zoo);
        console.log(`Zoo from ${zoo.location} added to ${this.name} Zoo App.`);
    }
}
//# sourceMappingURL=zooApp.js.map