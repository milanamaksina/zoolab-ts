"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enclosure = void 0;
var Enclosure = /** @class */ (function () {
    function Enclosure(name, squareFeet) {
        this.name = name;
        this.animals = [];
        this.squareFeet = squareFeet;
    }
    Enclosure.prototype.AddAnimal = function (animal) {
        this.animals.push(animal);
        console.log("".concat(animal.constructor.name, " added in ").concat(this.name, " enclosure."));
    };
    Enclosure.prototype.RemoveAnimal = function (animal) {
        var index = this.animals.indexOf(animal);
        if (index !== -1) {
            this.animals.splice(index, 1);
            console.log("".concat(animal.constructor.name, " removed from ").concat(this.name, " enclosure."));
        }
    };
    Enclosure.prototype.HasAnimal = function (targetAnimal) {
        return this.animals.includes(targetAnimal);
    };
    return Enclosure;
}());
exports.Enclosure = Enclosure;
