$(document).ready(function(){

  $(".mob_btn").click(function(){
    $(this).toggleClass("active");
    $(".gnb_list").stop(true,true).slideToggle("fast");
  });

});