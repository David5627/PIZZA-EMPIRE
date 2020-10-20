// const { prototype } = require("./jquery-3.5.1");

$(document).ready(function () {
    $("#piza1").hover(function () {
        $(".overlay1").toggle();
    });
    $("#piza2").hover(function () {
        $(".overlay2").toggle();
    });
    $("#piza3").hover(function () {
        $(".overlay3").toggle();
    });
    $("#piza4").hover(function () {
        $(".overlay4").toggle();
    });
    $("#piza5").hover(function () {
        $(".overlay5").toggle();
    });
    $("#piza6").hover(function () {
        $(".overlay6").toggle();
    });
    $("#piza7").hover(function () {
        $(".overlay7").toggle();
    });
    $("#piza8").hover(function () {
        $(".overlay8").toggle();
    });
});


function myFunction(){
    event.preventDefault();
    const selectedCrust = document.getElementById("crust").value;
    const selectedSize = document.getElementById("size").value;
    const actualCrust = parseInt(selectedCrust);
    const actualSize = parseInt(selectedSize);
    console.log(actualCrust);
    console.log(actualSize);
    var selectedToping = document.getElementById("toping");
    var actualToping = parseInt(selectedToping)
    console.log(actualToping);

    var selectedFresh = document.getElementById("dk").value;
    var actualFresh = parseInt(selectedFresh);
    console.log(actualFresh);
    const totalPrice = (actualSize + actualCrust + actualToping) * actualFresh;
    console.log(totalPrice);


    alert("your order of " + totalPrice + " piza has been recieved.Your total amount is " + totalPrice + "")
}

function myButton(){
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var location = document.getElementById("lct").value;
    alert(name + " your order has been recieved and will be delivered at " + location + " within a short period of time or we will email you through " + email)
}










