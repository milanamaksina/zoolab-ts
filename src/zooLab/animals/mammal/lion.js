"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lion = void 0;
var meat_js_1 = require("../../food/meat.js");
var mammal_js_1 = require("./mammal.js");
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        var _this = _super.call(this) || this;
        _this.requiredSpaceSqFt = 1000;
        _this.friends = ['Lion'];
        var meat = new meat_js_1.Meat();
        _this.favoriteFood.push(meat.constructor);
        return _this;
    }
    return Lion;
}(mammal_js_1.Mammal));
exports.Lion = Lion;
