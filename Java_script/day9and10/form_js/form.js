// 2. Create User Registration form,
// First Name – It should be alphanumeric only(use Regex here) + Required validation.
// Last Name – It should be characters only(use Regex here) + Required validation.
// Gender – Radio Button (Male & Female) Required validation
// Email ID – Required + Email pattern match
// Password – It should minimum 8 characters with at least one uppercase Mandatory.
// Confirm password – should match the password + Required
// Terms and condition – checkbox (Required Validation)
// Submit Button – Display error message while clicking on submit button if validation rules are not passed.
// Once all the validation rules passes then display the values filled inside a table. In this case user registration form will be hidden and the table will be displayed.

document.querySelector("button").addEventListener("click",validate);
function validate(){
    fname = document.querySelector(".fname").value;
    lname = document.querySelector(".lname").value;
    email = document.querySelector(".email").value;
    pass = document.querySelector(".password").value;
    conf = document.querySelector(".confirm").value;
    email_id=/^[^\s@]+@[^\s@]+.[\s@]+$/
    alpha_num_regex = /^[a-zA-Z0-9]+$/
    lname_regex = /^[a-zA-Z]+/
    if(!alpha_num_regex.test(fname)){
        
        alert("please enter alphanumeric charachters only in fname");
        }
    if(!lname_regex.test(lname)){
        alert("please enter alphabets only in lname");

    }
    if(!email_id.test(email)){
        alert("Please enter Valid email")
    }
    if(pass != conf){
        alert("Password and confirm passowrd should match")
    }
    
    
}
// 3.Write a polyfills for bind function, map array, find array. (Use prototype to implement this)
// 4. Implement #2 with typescript as well.