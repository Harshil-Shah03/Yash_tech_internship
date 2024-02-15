import { Addition } from "./modules";
import {Subtraction}from "./modules";

var add =new Addition(1,2)
var sub =new Subtraction(5,2)
console.log(`${add.a} + ${add.b} = ${add.add()}`);
console.log(`${sub.a} - ${sub.b} = ${sub.sub()}`);