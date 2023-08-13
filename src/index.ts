import { ZooApp } from "./zooApp.js";
import { Lion } from "./zooLab/animals/mammal/lion.js";
import { Turtle } from "./zooLab/animals/reptile/turtle.js";
import { Enclosure } from "./zooLab/enclosure.js";
import { Zoo } from "./zooLab/zoo.js";

let zooApp = new ZooApp('zooApp1');
let zoo1 = new Zoo('location1');
let zoo2 = new Zoo('location2');
zooApp.AddZoo(zoo1);
zooApp.AddZoo(zoo2);

let enclosure1 = new Enclosure('Lions', 4500);
let enclosure2 = new Enclosure('Birds', 25);

zoo1.AddEnclosure(enclosure1);
zoo1.AddEnclosure(enclosure2);

let lion1 = new Lion();
let lion2 = new Lion();
let lion3 = new Lion();
let lion4 = new Lion();

let turtle1 = new Turtle();

zoo1.AddAnimal(lion1);
zoo1.AddAnimal(lion2);
zoo1.AddAnimal(lion3);
zoo1.AddAnimal(lion4);

zoo1.RemoveAnimal(lion1);

zoo1.AddAnimal(turtle1);
