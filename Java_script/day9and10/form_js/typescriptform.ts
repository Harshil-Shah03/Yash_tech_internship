document.querySelector("button")?.addEventListener("click",validate);


function validate():void{
   const fname:string =( document.querySelector(".fname")as HTMLInputElement).value;
   const lname:string =( document.querySelector(".lname")as HTMLInputElement).value;
   const email:string =( document.querySelector(".email")as HTMLInputElement).value;
   const pass:string = (document.querySelector(".password")as HTMLInputElement).value;
   const conf:string = (document.querySelector(".confirm")as HTMLInputElement).value;
   const email_id:any=/^[^\s@]+@[^\s@]+.[\s@]+$/
   const alpha_num_regex:any = /^[a-zA-Z0-9]+$/
   const lname_regex:any = /^[a-zA-Z]+/
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