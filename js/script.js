// jquery_______start
$(document).ready(function(){

  const BODY = $("body");
  const mobBtn = $(".mob_btn");

  //Mobile Menu
  mobBtn.on("click", function () {
    BODY.toggleClass("mOpen");
  });

});
// jquery_______end

$(document).ready(function() {
  
  $(window).scroll(function() {
      if ($(this).scrollTop() > 20) {
          $('#topBtn').fadeIn();
      } else {
          $('#topBtn').fadeOut();
      }
  });

  
  $('#topBtn').on('click', function(event) {
      event.preventDefault();
      window.scrollTo({
          top: 0,
          behavior: 'smooth' 
      });
  });
});



