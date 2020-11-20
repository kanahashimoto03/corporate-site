//スクロールヘッダー

$(function(){
  var $win = $(window),
      $fv = $('.mainFv'),
      $header = $('.header'),
      fvHeight = $fv.outerHeight();
      fixedClass = 'fixed';
    $win.on('load scroll', function(){
      var value = $(this).scrollTop();
      if($win.width() > 760){
        if( value > fvHeight ){
          $header.addClass(fixedClass);
      }else{
        $header.removeClass(fixedClass);
      }
      }
    });
});


//fvスライダー
  $('.slider').slick({
    autoplay:true,
    autoplaySpeed: 2000,
    speed:1000,
    fade: true,
    cssEase: 'linear'
  });

//ハンバーガーメニュー

$('.hamburger__btn').on('click', function(){
  $('.header__navi').fadeToggle(300);
  $(this).toggleClass('cross');
  $('body').toggleClass('noscroll');
});





