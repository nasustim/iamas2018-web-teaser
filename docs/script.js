"use strict";

(function () {})();

$(window).scroll(function () {
    var per = $(this).scrollTop() / $(document).innerHeight();
    $("body").css({
        "background-color": "rgba(100,100,100," + per + ")"
    });
});