"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZooApp = void 0;
var ZooApp = /** @class */ (function () {
    function ZooApp(name) {
        this.zoos = [];
        this.name = name;
        console.log("Created Zoo App ".concat(this.name, "."));
    }
    ZooApp.prototype.AddZoo = function (zoo) {
        this.zoos.push(zoo);
        console.log("Zoo from ".concat(zoo.location, " added to ").concat(this.name, " Zoo App."));
    };
    return ZooApp;
}());
exports.ZooApp = ZooApp;
