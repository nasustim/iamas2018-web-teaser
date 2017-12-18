import $ from 'jquery';
import fadeInElements from './_fadeInElements';

$(() => {


  $("#container").css({
    "height": $(window).height + "px"
  });
  $("#header").css({
    "margin": `${$(window).height() - $("#title-block").height() - 20}px auto 20px auto`
  });
  $(window).on('resize', ()=>{
    $("#container").css({
      "height": $(window).height + "px"
    });
    $("#header").css({
      "margin": `${$(window).height() - $("#title-block").height() - 20}px auto 20px auto`
    });
  });

  fadeInElements('.js-fadein');

  $(window).on('scroll', ()=> {
    let per = $(this).scrollTop() / $(document).innerHeight();
    $("#container").css({
      "background-color": `rgba(255,255,255,${ per })`
    });
  });

});