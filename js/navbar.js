$(document).ready(function() {
    // ------引入登入註冊頁面------
    // 載入會員頁面
    $('.memberShow').load('login.html').hide();
    // $('.memberShow').load('member.html').hide();

    // 點擊打開
    $('.navbar-icon>a:first').click(function(){
        // 隱藏所有頁面
        $('.memberAll').hide();
        $('.footer').hide();
        $('.navbar').hide();    
        
        // 開啟登入註冊or會員中心
        // if($('#loginFormPage .loginButton').hasClass('loginOK')){
        //     $('.memberShow').load('member.html').fadeIn(700);
        // }else{
            $('.memberShow').load('login.html').fadeIn(700);
        // };
        
        
    });
    // 點擊關閉
    $('body').on('click','.loginClose',function(){
        $('.memberShow').fadeOut(500);
        $('.memberAll').show();
        $('.footer').show();
        $('.navbar').show();
    });

});