$(window).scroll(function() {
  if ($(this).scrollTop()>=400) {
    // длительность анимации - 'slow'
    // тип анимации -  'linear'
    $('.hid').fadeIn('slow','linear');
  }
  else {
    // длительность анимации - 'fast'
    // тип анимации -  'swing'
    $('.hid').fadeOut('fast','swing');
  }


});
