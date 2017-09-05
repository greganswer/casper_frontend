import $ from 'jquery/dist/jquery';
import 'materialize-css/dist/js/materialize';

$(function() {
  var $carousel;
  $('.jsButtonCollapse').sideNav();
  $('select').material_select();
  $('.jsParallax').parallax();
  $('.datepicker').pickadate({ selectMonths: true, selectYears: 20 });
  $('.dropdown-button').dropdown({ constrainWidth: false, alignment: 'right' });
  $('nav .dropdown-button').dropdown({ alignment: 'right', hover: true, belowOrigin: true });

  $carousel = $('.carousel.carousel-slider');
  $carousel.carousel({ fullWidth: true, indicators: true });
  setInterval(() => {
    return $carousel.carousel('next');
  }, 6000);
});
