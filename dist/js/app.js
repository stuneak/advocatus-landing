"use strict";function initSlider(){var e=new Siema({selector:".clients__slider",duration:350,easing:"ease-out",perPage:1,startIndex:0,draggable:!1,threshold:20,loop:!0});$(".clients__slider-item").map(function(e,t){$(".clients__slider-counter").append('<div class="clients__slider-dot"></div>')});var t=$(".clients__slider-dot");$(t[e.currentSlide]).addClass("clients__slider-dot--active"),t.map(function(i,s){$(s).on("click",function(){e.goTo(i),$(".clients__slider-dot").removeClass("clients__slider-dot--active"),$(t[e.currentSlide]).addClass("clients__slider-dot--active")})}),setInterval(function(){e.next(),$(".clients__slider-dot").removeClass("clients__slider-dot--active"),$(t[e.currentSlide]).addClass("clients__slider-dot--active")},4e3)}$(document).ready(function(){initSlider(),$('a[href^="#"]').on("click",function(){var e=$(this).attr("href");$("body").animate({scrollTop:$(e).offset().top},500)});var e=$(".faq__item--title"),t=$(".faq__item--subtitle");e.map(function(e,i){$(i).on("click",function(){$(i).hasClass("faq__item--title--active")?($(i).removeClass("faq__item--title--active"),$(t[e]).fadeOut().delay(100).removeClass("faq__item--subtitle--active")):($(i).addClass("faq__item--title--active"),$(t[e]).fadeIn().delay(100).addClass("faq__item--subtitle--active"))})})});