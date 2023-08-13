"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
var feedTime_js_1 = require("../animals/feedTime.js");
var Animal = /** @class */ (function () {
    function Animal() {
        this.feedTimes = [];
        this.feedSchedule = [];
        this.friends = [];
        this.favoriteFood = [];
        this.isSick = false;
        if (this.constructor === Animal) {
            throw new Error('You cannot create an instance of Abstract Class.');
        }
    }
    Animal.prototype.IsFriendlyWith = function (animal) {
        return this.friends.includes(animal.constructor.name);
    };
    Animal.prototype.Feed = function (food) {
        var feedTime = new feedTime_js_1.FeedTime().feedTime;
        if (this.favoriteFood.includes(food.constructor)) {
            this.feedTimes.push(feedTime);
            console.log("at ".concat(feedTime, " animal ").concat(this.constructor.name, " was feed"));
        }
        else {
            console.log("".concat(this.constructor.name, " doesn't eat ").concat(food.constructor.name));
        }
    };
    Animal.prototype.AddFeedSchedule = function (hours) {
        this.feedSchedule.push(hours);
    };
    return Animal;
}());
exports.Animal = Animal;
