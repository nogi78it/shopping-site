$(function(){
$(document).ready(function(){
    $('.owl-carousel').owlCarousel(
        {
            loop: true,
            nav: false,
            dots: true,
            items: 1,
            autoplay: true
 
            
        }
    );


      $("#open-menu").click(function () {
        $(this).next().slideToggle();
      });
      
       $(".categories li").click(function () {
        location.href = "list.html";
      });
 
  });
    
    
    
$(window).load(function(){
  $("#list_img img").click(function(){
    var img_src = $(this).attr("src");
    $("#display_img img").attr("src", img_src);
  });
});
});