document.querySelector("#start").addEventListener("click",startAnimation);
document.querySelector("#stop").addEventListener("click",stopAnimation)





var animationinterval;
function startAnimation(){
    animationinterval = setInterval(move,1000);

    alert("start");
}

function stopAnimation(){
    clearInterval(animationinterval);
    alert("stop");
}

function move(){
    
    var x1 = Math.floor(Math.random()*(document.getElementById("container").clientWidth-document.getElementById("square1").clientWidth))
    var x2 = Math.floor((Math.random()*document.getElementById("container").clientWidth-document.getElementById("square2").clientWidth))
   
    var y1 = Math.floor(Math.random()*(document.getElementById("container").clientHeight-document.getElementById("square1").clientHeight))
    var y2 = Math.floor((Math.random()*document.getElementById("container").clientHeight-document.getElementById("square2").clientHeight))

    document.getElementById("square1").style.right = x1+"px";
    document.getElementById("square2").style.right = x2+"px";

    document.getElementById("square1").style.top = y1+"px";
    document.getElementById("square2").style.top = y2+"px";
}
