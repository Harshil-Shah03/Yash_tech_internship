// Introduction to DOM
// DOM Methods
// Manipulating documents using DOM
// DOM Animations
// Use of JQuery in Manipulating DOM.
// Assignment


//changing text_align font_size  font family of h1 using get Element by ID
document.getElementById("list").style.textAlign = "center";
document.getElementById("list").style.fontSize = "90px";
document.getElementById("list").style.fontFamily = "sans-serif";


// bg color of all div tag
 div = document.getElementsByTagName("div");
 for (let i=0; i<div.length;i++){
    div[i].style.backgroundColor = "red";

 }

 //add new column dynamically to the table
 var tbl = document.getElementsByTagName("table")[0];
 var rows = tbl.getElementsByTagName("tr");
 var th = document.createElement("th")
 th.innerHTML="New Column"
 rows[0].appendChild(th)
 
 for (var i = 1; i < rows.length; i++) {
     var td = document.createElement("td");
     td.innerHTML = "New Column";
     rows[i].appendChild(td);
 }


 //add text shadow to all paragraphs
 p = document.getElementsByTagName("p");
 for(let i in p){
    p[i].style.textShadow = "15px 51px 11px"
 }
 
//deletes company
 function d_company(){
   tbl = document.getElementsByTagName("table")[0];
   var tr = tbl.getElementsByTagName("tr");
   for(var i = 0; i < tr.length; i++){
      tr[i].removeChild(tr[i].firstChild);

   }
 }
 //deletes contact
 function d_contact(){
   tbl = document.getElementsByTagName("table")[0];
   var tr = tbl.getElementsByTagName("tr");
   tr[0].removeChild(tr[0].getElementsByTagName("th")[1]);
   for(let i=1; i<tr.length;i++){
      tr[i].removeChild(tr[i].getElementsByTagName("td")[1]);
   }

 }

//  // Get all rows in the table
//  var rows = tbl.getElementsByTagName("tr");
 
//  // Loop through each row and add a new table cell (td) to it
//  for (var i = 0; i < rows.length; i++) {
//      var td = document.createElement("td");
//      td.innerHTML = "New Column";
//      rows[i].appendChild(td);
//  }
