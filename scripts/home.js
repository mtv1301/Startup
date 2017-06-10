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
    $(".picture_1_1").hide();
    $(".icon-white").hide();
    $(".hover_img").mouseover(function () {
        $(".hover_img").hide();
        $(".picture_1_1").show();
        $(".icon-white").show();
    });
    $(".picture_1_1").mouseout(function () {
        $(".picture_1_1").hide();
        $(".picture_2_2").hide();
        $(".picture_3_3").hide();
        $(".picture_4_4").hide();
        $(".hover_img").show();
        $(".icon-white").hide();
    });
    $(".icon").mouseover(function () {
        $(".hover_img").hide();
        $(".picture_1_1").show();
        $(".icon-white").show();
    });
    $(".icon").mouseout(function () {
        $(".hover_img").show();
        $(".picture_1_1").hide();
        $(".icon-white").hide();

    });

});