$(document).ready(function() {
    console.log('navbar loading');
    
    if(window.location.pathname == '/index.html'){
        console.log('homepage');
        $('.memberShow').load('page/login.html').hide();
    }else{
        $('.memberShow').load('login.html').hide();
    }
    // 儲存人頭為會員中心
    // window.onload = function (){
    //     if($('#loginFormPage .loginButton').hasClass('loginOK')){
    //         $('.navbar-icon>a:first').addClass('loginOK');
    //         console.log('have');
    //     }
    // };
    
    // 點擊打開
    $('.navbar-icon .fa-user').click(function(){
        // console.log('navbar icon click');
        // ----------嘗試用load寫-----------
        // // 隱藏所有頁面
        $('.footer').hide();
        $('.navbar').hide();    
        
        // // 開啟登入註冊or會員中心
        if($('#loginFormPage .loginButton').hasClass('loginOK') || $('.navbar-icon>a:first').hasClass('loginOK')){
            window.location.href = 'member.html';
            // console.log('haveclass');
        }else{
            $('.memberShow').fadeIn(700);
            $('body').addClass('stopScroll');
            // console.log('noclass');
        };
        // ---------------------------------
        
        
        
        // 全部用跳轉頁面寫------------
        // if($('.navbar-icon>a:first').hasClass('loginOK')){
        //     window.location.href = 'member.html';
        // }else{
        //     window.location.href = 'login.html';
        // };

        
        
    });
    // 點擊關閉
    $('body').on('click','.loginClose',function(){
        $('.memberShow').fadeOut(500);
        $('.footer').show();
        $('.navbar').show();
        $('body').removeClass('stopScroll');
    });

});