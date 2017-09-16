import $ from 'jquery/dist/jquery';

/**
 * Scroll a div from right to left, to reveal it's contents
 * @param  {string} className The class name of the element
 * @return {void}
 */
export default function scrollRightToLeft(className) {
  const $wrapper = $(className);
  $wrapper.scrollLeft($wrapper[0].scrollWidth);
  $wrapper.animate({ scrollLeft: 0 }, $wrapper[0].scrollWidth * 2);
}
