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


$(document).ready(function() {
    $('.nav').hover(function() {
        $('a').addClass('add');
    }, function() {
        $('a').removeClass('add');
    });
});
