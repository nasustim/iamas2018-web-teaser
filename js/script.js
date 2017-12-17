(()=>{

    console.log($(window).height());

    $("#container").css({
        "height": $(window).height + "px"
    });
    $("#header").css({
        "margin": `${$(window).height() - $("#title-block").height() - 20}px auto 20px auto`
    });
})();

$(window).scroll(function() {
    let per = $(this).scrollTop() / $(document).innerHeight();
    $("#container").css({
        "background-color": `rgba(255,255,255,${ per })`
    });
});