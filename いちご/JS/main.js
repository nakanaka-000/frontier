//ローディング画面のアニメーション設定




$(function(){

    // スクロールでふわっと表示させるためのCSSクラス付与
    function fadeUpAnime() {
        $('.fadeUpTrigger').each(function(){
            var elemPos = $(this).offset().top-10; //要素からtop-50pxを取得
            var scroll = $(window).scrollTop(); //windowからのスクロール位置を取得
            var windowHeight = $(window).height(); //表示領域の高さ取得

            if (scroll > elemPos - windowHeight ) {
                $(this).addClass('fadeUp');
            }
        });
    }


    $('.fadeUpTriggerDelay').each(function(i, el){
        //時間差表示のための設定
        var delay = 0.1; // 表示開始時間の差分（秒）

        $(el).css({
            'animation-delay': (delay * i) + 's'
        });

        window.scroll(function(){
            delay = 0.1;
        });
        
    });

    var letters = $('.fadeUpTriggerDelay');
    var count = 0;
    letters.hide();
  
    function showNextLetter() {
      if (count < letters.length) {
        letters.eq(count).fadeIn(500, function() {
            count++;
            showNextLetter();
        });
      }
    }
  
    $(window).scroll(function(){
      var elemPos = $('#howto, #news').offset().top-10;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
  
      if (scroll > elemPos - windowHeight ) {
        showNextLetter();
      }
    });


    //画像がフェードインするCSSクラス付与
    function fadeInAnime() {
        $('.fadeInTrigger').each(function(){
        var elemPos = $(this).offset().top-10;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height(); 

        if (scroll > elemPos - windowHeight ) {
            $(this).addClass('fadeIn');
        }
        });
    }


    //fadeAnime関数を実行
    $(window).scroll(function(){
        fadeUpAnime();
        fadeInAnime();
    });
    $(window).on('load', function(){
        fadeUpAnime();
        fadeInAnime();
    });
    

    //hamburgerメニューの動作設定
    $('#hamburger').on('click', function(){
        $(this).toggleClass('open');
        $('#sp-nav').toggleClass('open');
    });
    $('.menu-close').on('click', function(){
        $('#hamburger').removeClass('open');
        $('#sp-nav').removeClass('open');
    });

    //chatbotの設定
    $('.js-bot-open').on('click', function(){
        $(this).addClass('hidden');
        $('.chatbot-window').addClass('open');
    });
    $('.close').on('click', function(){
        $('.js-bot-open').removeClass('hidden');
        $('.chatbot-window').removeClass('open');
    });
    

});