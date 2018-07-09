$(function() {
  // jQuery Scroll Animations
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'))
    console.log(target)
    console.log(target.length)
    if(target.length) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top - 56
        }, 500)
    }
  })

  // jumbotron icons
  // on load
  $(".icons-calendar").show()
  $(".icons-return").hide()
  $(".icons-gallery").show()

  // on scroll
  $(document).scroll(function () {
    if ($(window).scrollTop() >= 24) {
      $(".icons-calendar").fadeOut(1000)
      $(".icons-return").fadeIn(2000)
      $(".icons-gallery").fadeOut(1000)
    } else {
      $(".icons-calendar").fadeIn(2000)
      $(".icons-return").fadeOut(1000)
      $(".icons-gallery").fadeIn(2000)
    }
  })

  // splash overlay
  $.fn.center = function () {
    this.css("position","absolute")
    return this
  }
  $("#overlay").show()
  $("#overlay-content").show().center()
  setTimeout(function(){    
    $("#overlay").fadeOut( 1600, "linear" )
  }, 500)

  // gallery
  $(".filter-button").click(function(){
    var value = $(this).attr('data-filter');

    if(value == "all") {
      $('.filter').show('1000');
    } else {
      $(".filter").not('.'+value).hide('2000');
      $('.filter').filter('.'+value).show('2000')
    }
  })
})

