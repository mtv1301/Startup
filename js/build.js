/**
 * Created by Tetiana on 05.03.2017.
 */

/**
 * Created by Tetiana on 05.03.2017.
 */
console.log('start module1 logic');
/**
 * Created by Tetiana on 05.03.2017.
 */
console.log('start module2 logic');
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiLCJtb2R1bGUxLmpzIiwibW9kdWxlMi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FDSEE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBUZXRpYW5hIG9uIDA1LjAzLjIwMTcuXHJcbiAqL1xyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBUZXRpYW5hIG9uIDA1LjAzLjIwMTcuXHJcbiAqL1xyXG5jb25zb2xlLmxvZygnc3RhcnQgbW9kdWxlMSBsb2dpYycpOyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IFRldGlhbmEgb24gMDUuMDMuMjAxNy5cclxuICovXHJcbmNvbnNvbGUubG9nKCdzdGFydCBtb2R1bGUyIGxvZ2ljJyk7Il19
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