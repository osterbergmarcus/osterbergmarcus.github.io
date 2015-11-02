$(document).ready(function(){
  //slie down about me
      $('.about-toggle').click(function(){
          $("#about-panel").slideToggle("slow");
      });
      
      $('.blog-toggle').click(function(){
          $("#blog-panel").slideToggle("slow");
      });

//sroll to top
var whereScroll = 100;
$(window).scroll(function(){

    var position = $(window).scrollTop();

    if(position > whereScroll)
    {
        $('.backtotop').fadeIn();
    }
    else
    {
        $('.backtotop').fadeOut();
    }
});

$('.backtotop').on('click', function(){
    $(window).scrollTop(0);
    $(this).fadeOut();
});

});
