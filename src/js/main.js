import $ from "jquery";
import "popper.js";
import "bootstrap";

// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import Swiper styles
import 'swiper/swiper-bundle.css';

var menu = ['Slide 1', 'Slide 2', 'Slide 3']
var mySwiper = new Swiper ('.swiper-container', {
    lazy:true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
			clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (menu[index]) + '</span>';
        },
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip()
})