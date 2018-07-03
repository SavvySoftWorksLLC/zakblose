console.log('dr.')
$(function() {
  console.log('ass')
  $(".filter-button").click(function(){
      var value = $(this).attr('data-filter')
      
      if(value == "all") {
          $('.filter').show('1000')
      } else {
        $(".filter").not('.'+value).hide('3000')
        $('.filter').filter('.'+value).show('3000')
      }
  })
  
  if ($(".filter-button").removeClass("active")) {
    $(this).removeClass("active");
  }
  $(this).addClass("active");
})
console.log('hat')
