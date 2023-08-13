"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Zoo = void 0;
var Zoo = /** @class */ (function () {
    function Zoo(location) {
        this.enclosures = [];
        this.location = location;
        console.log("Created new zoo in ".concat(this.location, "."));
    }
    Zoo.prototype.AddEnclosure = function (enclosure) {
        this.enclosures.push(enclosure);
        console.log("Added new enclosure \"".concat(enclosure.name, "\" with square feet: ").concat(enclosure.squareFeet, " ft to ").concat(this.location, " zoo."));
    };
    Zoo.prototype.FindAvailableEnclosure = function (animal) {
        if (this.enclosures.length > 0) {
            for (var i = 0; i < this.enclosures.length; i++) {
                var enclosureOccupiedSpace = 0;
                var isFriendly = true;
                for (var j = 0; j < this.enclosures[i].animals.length; j++) {
                    enclosureOccupiedSpace +=
                        this.enclosures[i].animals[j].requiredSpaceSqFt;
                    if (!animal.IsFriendlyWith(this.enclosures[i].animals[j])) {
                        isFriendly = false;
                    }
                }
                if (animal.requiredSpaceSqFt &&
                    enclosureOccupiedSpace + animal.requiredSpaceSqFt <
                        this.enclosures[i].squareFeet &&
                    isFriendly) {
                    console.log("Found an enclosure.");
                    return this.enclosures[i];
                }
                else {
                    console.log("No enclosures available.");
                }
            }
        }
        else {
            console.log("At least one enclosure required.");
            return null;
        }
    };
    Zoo.prototype.AddAnimal = function (animal) {
        var enclosure = this.FindAvailableEnclosure(animal);
        if ((enclosure === null || enclosure === void 0 ? void 0 : enclosure.constructor.name) === "Enclosure") {
            enclosure.AddAnimal(animal);
        }
    };
    Zoo.prototype.RemoveAnimal = function (animal) {
        var enclosure = this.FindEnclosureContainingAnimal(animal);
        if (enclosure) {
            enclosure.RemoveAnimal(animal);
        }
    };
    Zoo.prototype.FindEnclosureContainingAnimal = function (targetAnimal) {
        for (var _i = 0, _a = this.enclosures; _i < _a.length; _i++) {
            var enclosure = _a[_i];
            if (enclosure.HasAnimal(targetAnimal)) {
                return enclosure;
            }
        }
        return undefined;
    };
    return Zoo;
}());
exports.Zoo = Zoo;
