var message = "Hello World";
console.log(message);
//.Create variable  having different types like string, number, array,object.
var stringi = "hey";
var nos = 1;
var arr = [1, 2, 3, 4];
console.log(arr);
var obj = { "buttrer": "fly", "sus": 1 };
console.log(obj);
// Define a class named Space. Add following property into it.
// MilesPerKilometer - number
// Name – string
// Create constructor having name as first parameter and it must be string. Similar goes with milesPerKilometer. Set the class properties using this keyword
var Space = /** @class */ (function () {
    function Space(stringi, mpkn) {
        this.name = stringi;
        this.MilesPerKilometer = mpkn;
    }
    return Space;
}());
var solar = new Space("Solar System", 12);
console.log(solar.name);
console.log(solar.MilesPerKilometer);
// 4. Declare 2 variables empName and empDep, give proper values to the variables with type declaration. 
// create an output string with template literal and type.
// reference output string:  Vijaya works for UI department.
var empName = "harshil";
var empDep = "comps";
console.log("".concat(empName, " works for ").concat(empDep, " department"));
// 5. Create a Modules.ts
// Add two classes Addition and Substraction
// Create sum and subtract methods in respective class
// Import the modules inside others file and execute the sum and subtract methods.
