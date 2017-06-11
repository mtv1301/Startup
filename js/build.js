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
/**
 * Created by Tetiana on 05.03.2017.
 */
console.log('start module1 logic');
/**
 * Created by Tetiana on 05.03.2017.
 */
console.log('start module2 logic');


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiLCJtb2R1bGUxLmpzIiwibW9kdWxlMi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJidWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IFRldGlhbmEgb24gMDUuMDMuMjAxNy5cclxuICovXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAkKFwiLmNyb3NzXCIpLmhpZGUoKTtcclxuXHJcbiAgICAkKFwiLmhhbWJ1cmdlci1tZW51XCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnbWVudSBkaXNwbGF5OiBzaG93Jyk7XHJcbiAgICAgICAgJChcIi5zdHlsZS1tZW51LXNtYWxsXCIpLnNsaWRlVG9nZ2xlKFwic2xvd1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoXCIuaGFtYnVyZ2VyLW1lbnVcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKFwiLmNyb3NzXCIpLnNob3coKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgJChcIi5jcm9zc1wiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ21lbnUgZGlzcGxheTogbm9uZScpO1xyXG4gICAgICAgICQoXCIuc3R5bGUtbWVudS1zbWFsbFwiKS5zbGlkZVRvZ2dsZShcInNsb3dcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKFwiLmNyb3NzXCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgJChcIi5oYW1idXJnZXItbWVudVwiKS5zaG93KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgICQoXCIuaGFtYnVyZ2VyLW1lbnVcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCJoZWFkZXJcIikuYWRkQ2xhc3MoIFwiYmx1clwiICk7XHJcbiAgICB9KTtcclxuICAgICQoXCIuY3Jvc3NcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoIFwiaGVhZGVyXCIgKS5yZW1vdmVDbGFzcyggXCJibHVyXCIgKTtcclxuICAgIH0pO1xyXG4gICAgJChcIi5waWN0dXJlXzFfMVwiKS5oaWRlKCk7XHJcbiAgICAkKFwiLmljb24td2hpdGVcIikuaGlkZSgpO1xyXG4gICAgJChcIi5ob3Zlcl9pbWdcIikubW91c2VvdmVyKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLmhvdmVyX2ltZ1wiKS5oaWRlKCk7XHJcbiAgICAgICAgJChcIi5waWN0dXJlXzFfMVwiKS5zaG93KCk7XHJcbiAgICAgICAgJChcIi5pY29uLXdoaXRlXCIpLnNob3coKTtcclxuICAgIH0pO1xyXG4gICAgJChcIi5waWN0dXJlXzFfMVwiKS5tb3VzZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIi5waWN0dXJlXzFfMVwiKS5oaWRlKCk7XHJcbiAgICAgICAgJChcIi5ob3Zlcl9pbWdcIikuc2hvdygpO1xyXG4gICAgICAgICQoXCIuaWNvbi13aGl0ZVwiKS5oaWRlKCk7XHJcbiAgICB9KTtcclxuICAgICQoXCIuaWNvblwiKS5tb3VzZW92ZXIoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIuaG92ZXJfaW1nXCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiLnBpY3R1cmVfMV8xXCIpLnNob3coKTtcclxuICAgICAgICAkKFwiLmljb24td2hpdGVcIikuc2hvdygpO1xyXG4gICAgfSk7XHJcbiAgICAkKFwiLmljb25cIikubW91c2VvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIuaG92ZXJfaW1nXCIpLnNob3coKTtcclxuICAgICAgICAkKFwiLnBpY3R1cmVfMV8xXCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiLmljb24td2hpdGVcIikuaGlkZSgpO1xyXG5cclxuICAgIH0pO1xyXG5cclxufSk7IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgVGV0aWFuYSBvbiAwNS4wMy4yMDE3LlxyXG4gKi9cclxuY29uc29sZS5sb2coJ3N0YXJ0IG1vZHVsZTEgbG9naWMnKTsiLCIvKipcclxuICogQ3JlYXRlZCBieSBUZXRpYW5hIG9uIDA1LjAzLjIwMTcuXHJcbiAqL1xyXG5jb25zb2xlLmxvZygnc3RhcnQgbW9kdWxlMiBsb2dpYycpO1xyXG5cclxuIl19
