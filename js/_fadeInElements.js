/**
 * Created by akihiro on 2017/09/03.
 */

import $ from 'jquery';
import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';
import plugin from 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'
import {TweenMax, Power2, TimelineLite} from "gsap";


module.exports = function(ele, _delay){
  let $target = $(ele);
  let duration = 1.2;
  let delay = (_delay) ? _delay: 0;
  let endStyle = {
    opacity: 1,
    transform: 'translate3d(0,0,0)',
    ease: 'Power2.easeOut',
    delay: delay
  };
  let controller = new ScrollMagic.Controller();
  $target.each(function(){
    $(this).addClass('is-show-animation')
    let tween = TweenMax.to($(this),duration, endStyle)
    let scene = new ScrollMagic.Scene({triggerHook: 0.7,triggerElement: this, reverse:false})
      .setTween(tween)
      .addTo(controller);
  })

}



