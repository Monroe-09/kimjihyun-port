$(function(){
  // Portopolio Slider 
  $('.mockup-slider').slick({
    infinite: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
  });
  // Portpolio Click 
  $('.tabbtn_port label').click(function(){
    $(this).siblings().removeClass('active')
    $(this).addClass('active')
  })
  // Web Mouseover
  $('.web').mouseover(function(){
    $('.intro_web').addClass('active')
  })
  $('.web').mouseout(function(){
    $('.intro_web').removeClass('active')
  })
  // Header Scroll
  $(window).scroll(function(){
    if($(window).scrollTop() > 50) {
      $('header').addClass('active')
    }
    else {
      $('header').removeClass('active')
    }
  })
  // Mobile Header Modal trigger 
  $('.trigger_header').click(function(){
    $(this).toggleClass('active')
    $('.r_header').toggleClass('active')
  })
  $('.r_header a , section').click(function(){
    $('.r_header , .trigger_header ').removeClass('active')
  })
})
