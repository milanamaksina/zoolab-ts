"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedTime = void 0;
var FeedTime = /** @class */ (function () {
    function FeedTime() {
        this.feedTime = this.GetTime();
    }
    FeedTime.prototype.GetTime = function () {
        return new Date();
    };
    return FeedTime;
}());
exports.FeedTime = FeedTime;
