// Create image slider using JavaScript. No third party plugin can be used.
// Bonus Point – Creating slider with multiple effects

document.querySelector("#left").addEventListener("click",left);
document.querySelector("#right").addEventListener("click",right);

img_arr = ["img1.avif","img2.avif","img3.avif"]
index = 0;
function left(){
    alert("Left clicked");
    if (index==0){index = 3}
    index = (index-1);
    alert(img_arr[index]);
    document.querySelector("img").setAttribute("src",img_arr[index]);


}

function right(){
    alert("right clicked");
    index = (index+1)%3;
    alert(img_arr[index]);
    document.querySelector("img").setAttribute("src",img_arr[index]);

}





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
// 3.Write a polyfills for bind function, map array, find array. (Use prototype to implement this)
// 4. Implement #2 with typescript as well.