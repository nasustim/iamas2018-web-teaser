"use strict";

(function () {
    $("#container").css({
        height: $(window).height
    });
})();

$(window).scroll(function () {
    var per = $(this).scrollTop() / $(document).innerHeight();
    $("#container").css({
        "background-color": "rgba(255,255,255," + per + ")"
    });
});