import $ from 'jquery';
import fadeInElements from './_fadeInElements';

$(() => {

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

});