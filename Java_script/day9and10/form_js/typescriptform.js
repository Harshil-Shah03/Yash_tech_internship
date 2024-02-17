var _a;
(_a = document.querySelector("button")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", validate);
function validate() {
    var fname = document.querySelector(".fname").value;
    var lname = document.querySelector(".lname").value;
    var email = document.querySelector(".email").value;
    var pass = document.querySelector(".password").value;
    var conf = document.querySelector(".confirm").value;
    var email_id = /^[^\s@]+@[^\s@]+.[\s@]+$/;
    var alpha_num_regex = /^[a-zA-Z0-9]+$/;
    var lname_regex = /^[a-zA-Z]+/;
    if (!alpha_num_regex.test(fname)) {
        alert("please enter alphanumeric charachters only in fname");
    }
    if (!lname_regex.test(lname)) {
        alert("please enter alphabets only in lname");
    }
    if (!email_id.test(email)) {
        alert("Please enter Valid email");
    }
    if (pass != conf) {
        alert("Password and confirm passowrd should match");
    }
}
