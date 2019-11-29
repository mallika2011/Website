// *********************** carousel *********************************

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1;}
  if (n < 1) {slideIndex = x.length;}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}


// ********************* change ***************************************
var image =  document.getElementById("like-img");

function change()
{

    image.classList.add("fa-heart");
    image.classList.remove("fa-heart-o");

    var delayInMilliseconds = 1000; //1 second

    setTimeout(function() {
      image.classList.add("fa-heart-o");
      image.classList.remove("fa-heart");


    }, delayInMilliseconds);
}

//*************************LIKE ***************************************
var clicks = 0;

function initiateClicks() {
    var clickStr = localStorage.getItem("clicks");
    if(clickStr == undefined){
        localStorage.setItem("clicks", 0);
        clicks = 0;
    }else{
        clicks = parseInt(clickStr);
    }
    document.getElementById("clicks").innerHTML = clicks;
}

function doClick() {
    clicks += 1;
    localStorage.setItem("clicks", clicks);
    document.getElementById("clicks").innerHTML = clicks;
}

document.getElementById("clickButton").onclick = doClick;
initiateClicks();

// ********************** NAV *****************************************

window.onscroll = function() {myFunction();};

var fix = document.getElementById("fix");
var sticky = fix.offsetTop;

function myFunction() {
if (window.pageYOffset >= sticky) {
  fix.classList.add("sticky");
} else {
  fix.classList.remove("sticky");
}
}
