(()=>{
    $("#container").css({
        height: $(window).height
    });
})();

$(window).scroll(function() {
    let per = $(this).scrollTop() / $(document).innerHeight();
    $("#container").css({
        "background-color": `rgba(100,100,100,${ per })`
    });
});