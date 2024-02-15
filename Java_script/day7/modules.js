"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subtraction = exports.Addition = void 0;
// 5. Create a Modules.ts
// Add two classes Addition and Subtraction
// Create sum and subtract methods in respective class
// Import the modules inside others file and execute the sum and subtract methods.
var Addition = /** @class */ (function () {
    function Addition(a, b) {
        this.a = a;
        this.b = b;
    }
    Addition.prototype.add = function () {
        return this.a + this.b;
    };
    return Addition;
}());
exports.Addition = Addition;
var Subtraction = /** @class */ (function () {
    function Subtraction(a, b) {
        this.a = a;
        this.b = b;
    }
    Subtraction.prototype.sub = function () {
        return this.a - this.b;
    };
    return Subtraction;
}());
exports.Subtraction = Subtraction;
