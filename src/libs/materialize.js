import $ from 'jquery/dist/jquery';
import 'materialize-css/dist/js/materialize';

$(() => {
  $('.jsButtonCollapse').sideNav();
  $('select').material_select();
  $('.jsParallax').parallax();
  $('.datepicker').pickadate({ selectMonths: true, selectYears: 20 });
  $('.dropdown-button').dropdown({ constrainWidth: false, alignment: 'right' });
  $('nav .dropdown-button').dropdown({ alignment: 'right', hover: true, belowOrigin: true });

  const $carousel = $('.carousel.carousel-slider');
  $carousel.carousel({ fullWidth: true, indicators: true });
  setInterval(() => $carousel.carousel('next'), 6000);
});
