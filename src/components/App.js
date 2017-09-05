import React, { Component } from 'react';
import '../css/App.css';
import 'materialize-css/dist/js/materialize';
import $ from 'jquery/dist/jquery';
import Header from './Header';

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

export default class App extends Component {
  render() {
    return <Header />;
  }
}
