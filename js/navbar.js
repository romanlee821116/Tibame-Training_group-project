$(function() {
    // ------引入登入註冊頁面------
    // 載入會員頁面
    $('.memberShow').load('login.html').hide();
    // 點擊打開
    $('.navbar-icon>a:first').click(function(){
        $('.memberAll').hide();
        $('.footer').hide();
        $('.navbar').hide();
        $('.memberShow').load('login.html').fadeIn(700);
    });
    // 點擊關閉
    $('body').on('click','.loginClose',function(){
        $('.memberShow').fadeOut(500);
        $('.memberAll').show();
        $('.footer').show();
        $('.navbar').show();
    });

});