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
