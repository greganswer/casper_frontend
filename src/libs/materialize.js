import $ from 'jquery/dist/jquery';
import 'materialize-css/dist/js/materialize';

$(() => {
  $('.jsParallax').parallax();
  $('select').material_select();
  $('.jsButtonCollapse').sideNav();
  $('.materialboxed').materialbox();
  $('.datepicker').pickadate({ selectMonths: true, selectYears: 20 });
  $('.dropdown-button').dropdown({ constrainWidth: false, alignment: 'right' });
  $('nav .dropdown-button').dropdown({ alignment: 'right', hover: true, belowOrigin: true });

  const $carousel = $('.carousel.carousel-slider');
  $carousel.carousel({ fullWidth: true, indicators: true });
  setInterval(() => $carousel.carousel('next'), 6000);
});
