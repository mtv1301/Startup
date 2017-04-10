/**
 * Created by Tetiana on 05.03.2017.
 */
$(document).ready(function () {

    $(".cross").hide();

    $(".hamburger-menu").click(function () {
        console.log('menu display: show');
        $(".style-menu-small").slideToggle("slow", function () {
            $(".hamburger-menu").hide();
            $(".cross").show();
        });
    });
    $(".cross").click(function () {
        console.log('menu display: none');
        $(".style-menu-small").slideToggle("slow", function () {
            $(".cross").hide();
            $(".hamburger-menu").show();
        });
    });
    $(".hamburger-menu").click(function () {
        $("header").addClass( "blur" );
    });
    $(".cross").click(function () {
        $( "header" ).removeClass( "blur" );
    });
});