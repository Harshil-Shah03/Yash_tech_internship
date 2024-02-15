// Create a function to check the blocked scope with let and const.
function calculateAmount(boolVal) {
    let amount = 0; 
    var amount2 = 0;
    
    if(boolVal)
     {let amount = 1; 
        const amount2 =1;
        
        // scope of this amount ends with next closing bracket]
    } return amount2;}
    console.log(calculateAmount(true));
     // output: 0


// B) Create a function which will return a string of template literals
//    Input - let name1 = "Vijaya", let name2 = "Sujal", let name3 = "Lokesh"
//    Output - {name1} {name2} and {name3} are UI Developers at Yash Technologies.

// C) Print the values of keys in console using destructuring assignment in given object
//    Input - let temp = {name1: "Vijaya", name2: "Sujal", name3: "Lokesh"}


stringify = (dict)=>{
    var{name1,name2,name3} = dict;
    
    console.log(`${name1} ${name2} and ${name3} are UI Developers at Yash Technologies.`)

}
let temp = {name1: "Vijaya", name2: "Sujal", name3: "Lokesh"}
stringify(temp)


// D) Create a Map, set 3 key values, get all three values. Use your own variable name for creating Map, Use your own key values
var harshil = new Map();
harshil.set("a",1);
harshil.set("b",2);
harshil.set("c",3);
console.log(harshil);
blah1 =harshil.get("a");
blah2 =harshil.get("b");
blah3 =harshil.get("c");
console.log(blah1);
console.log(blah2);
console.log(blah3);




// E) Create a Set, add values, alert the size of Set
const set_i = new Set();
set_i.add(1)
set_i.add(2)
set_i.add('dwesqdesw')
set_i.add('fdewfd')
set_i.add(54)
set_i.add(54)
console.log(`The size of set is ${set_i.size}`)





// F) Check if below experession is true or false
// 	Input - isFinite(1/100000)
console.log(isFinite(1/100000))
// G) Check if below experession is true or false
// 	Input1 - isNaN("Vijaya")
console.log(isNaN("Vijaya"))

// 	Input2 = isNan(10)
console.log(isNaN(10))