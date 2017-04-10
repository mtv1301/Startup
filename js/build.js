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
/**
 * Created by Tetiana on 05.03.2017.
 */
console.log('start module1 logic');
/**
 * Created by Tetiana on 05.03.2017.
 */
console.log('start module2 logic');
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiLCJtb2R1bGUxLmpzIiwibW9kdWxlMi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQ0hBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1aWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgVGV0aWFuYSBvbiAwNS4wMy4yMDE3LlxyXG4gKi9cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICQoXCIuY3Jvc3NcIikuaGlkZSgpO1xyXG5cclxuICAgICQoXCIuaGFtYnVyZ2VyLW1lbnVcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdtZW51IGRpc3BsYXk6IHNob3cnKTtcclxuICAgICAgICAkKFwiLnN0eWxlLW1lbnUtc21hbGxcIikuc2xpZGVUb2dnbGUoXCJzbG93XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJChcIi5oYW1idXJnZXItbWVudVwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoXCIuY3Jvc3NcIikuc2hvdygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICAkKFwiLmNyb3NzXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnbWVudSBkaXNwbGF5OiBub25lJyk7XHJcbiAgICAgICAgJChcIi5zdHlsZS1tZW51LXNtYWxsXCIpLnNsaWRlVG9nZ2xlKFwic2xvd1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoXCIuY3Jvc3NcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKFwiLmhhbWJ1cmdlci1tZW51XCIpLnNob3coKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgJChcIi5oYW1idXJnZXItbWVudVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcImhlYWRlclwiKS5hZGRDbGFzcyggXCJibHVyXCIgKTtcclxuICAgIH0pO1xyXG4gICAgJChcIi5jcm9zc1wiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCggXCJoZWFkZXJcIiApLnJlbW92ZUNsYXNzKCBcImJsdXJcIiApO1xyXG4gICAgfSk7XHJcbn0pOyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IFRldGlhbmEgb24gMDUuMDMuMjAxNy5cclxuICovXHJcbmNvbnNvbGUubG9nKCdzdGFydCBtb2R1bGUxIGxvZ2ljJyk7IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgVGV0aWFuYSBvbiAwNS4wMy4yMDE3LlxyXG4gKi9cclxuY29uc29sZS5sb2coJ3N0YXJ0IG1vZHVsZTIgbG9naWMnKTsiXX0=
