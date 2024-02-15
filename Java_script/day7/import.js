"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var modules_1 = require("./modules");
var modules_2 = require("./modules");
var add = new modules_1.Addition(1, 2);
var sub = new modules_2.Subtraction(5, 2);
console.log("".concat(add.a, " + ").concat(add.b, " = ").concat(add.add()));
console.log("".concat(sub.a, " - ").concat(sub.b, " = ").concat(sub.sub()));
