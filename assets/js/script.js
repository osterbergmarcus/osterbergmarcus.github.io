$(window).load(function (){
  $('.container').hide().fadeIn(1500);
});

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
