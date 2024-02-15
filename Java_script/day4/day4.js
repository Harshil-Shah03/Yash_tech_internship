// E)Create a closure which will change the value of outer function variable inside inner function
// Display the old and new value in console
// 	Input - outer function name = outerFunction
// 	  inner function name = innerFunction
// 	  old value - "Mobile",
// 	  new value - "Laptop“

outer_function = ()=>{
    value = "Mobile";
    cnt = 0
    inner_function = ()=>{
        value = "Laptop"
        cnt+=1;
        return cnt
    }
    return inner_function()
}

console.log(outer_function())
console.log(outer_function())
console.log(outer_function())
console.log(outer_function())
console.log(outer_function())









// G) Create function multiply which has below signature
//   multiply(2)(3)(4)
function multiply(a){
    return function(b){
        return function(c){
            return a*b*c;
        }
    }
}
console.log(multiply(2)(3)(4))
