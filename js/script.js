$(document).ready(function(){
    $('nav.navbar ul li').click(function(){
      $(this).addClass("active");
      $(this).siblings().removeClass("active");
  });
  });