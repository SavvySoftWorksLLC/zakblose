//= require jquery
//= require materialize

$(function() {
  $('.parallax').parallax()
})

// jQuery Scroll Animations
$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'))
    if( target.length ) {
      event.preventDefault()
      if(target.selector == '#team')
        $('html, body').animate({
          scrollTop: $(target).offset().top - 400
        }, 500)
      else
        $('html, body').stop().animate({
          scrollTop: target.offset().top
        }, 500)
    }
})
