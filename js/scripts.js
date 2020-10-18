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

// $(document).ready(function () {
//     $("#order").click(function (event) {

//         $(".delivery").toggle();

//     });
//     $(".delivery").click(function () {
//         $("#order") .toggle();

//     });
// event.preventDefault();

// });
function myFunction(){
    $("#DK").hide();
    $(".choice").show();
}
function checkOut(){
    $(".delivery").show();
    $(".choice").hide();
}





// $(document).ready(function () {
//     $(".choice").click(function () {
//         $("#btn").toggle();

//     });
//     $("#btn").click(function () {
//         $(".choice").toggle();

//     });
//     prevent("default")

// });



