$(document).ready(function() {
    // $('.memberShow').load('login.html').hide();
    if(window.location.pathname == '/index.html'){
        console.log('homepage');
        $('.memberShow').load('page/login.html').hide();
    }else{
        console.log('other');
        $('.memberShow').load('login.html').hide();
    };
    // 儲存人頭為會員中心
    // window.onload = function (){
    //     if($('#loginFormPage .loginButton').hasClass('loginOK')){
    //         $('.navbar-icon>a:first').addClass('loginOK');
    //         console.log('have');
    //     }
    // };
    if(window.location.pathname == '/index.html'){
        console.log('homepage');
        $('.memberShow').load('page/login.html').hide();
    }else{
        $('.memberShow').load('login.html').hide();
    }
    // 點擊人頭打開
    $('body').on('click','.navbar-icon .fa-user',function(){
    // $('.navbar-icon .fa-user').click(function(){   
        // ----------嘗試用load寫-----------
        // // 隱藏所有頁面
        console.log('clickhead');
        $('.footer').hide();
        $('.navbar').hide();

        // // 開啟登入註冊or會員中心
        if($('#loginFormPage .loginButton').hasClass('loginOK') || $('.navbar-icon>a:first').hasClass('loginOK')){
            // window.location.href = 'member.html';
            if(window.location.pathname == '/index.html'){
                window.location.href = 'page/member.html';
            }else{
                window.location.href = 'member.html';
            };
        }else{
            // $('.memberShow').fadeIn(700);
            // $('.memberShow').load('login.html').fadeIn(700);
            $('.memberShow').fadeIn(700);
            $('body').addClass('stopScroll');
        };
        // ---------------------------------

        // 全部用跳轉頁面寫------------
        // if($('.navbar-icon>a:first').hasClass('loginOK')){
        //     window.location.href = 'member.html';
        // }else{
        //     window.location.href = 'login.html';
        // };

    });

    // 點擊漢堡打開
    $('body').on('click','.ham_select a:last',function(){
        // $('.navbar-icon .fa-user').click(function(){   
            // ----------嘗試用load寫-----------
            // // 隱藏所有頁面
            console.log('clickhamm');
            $('.footer').hide();
            $('.navbar').hide();
    
            // // 開啟登入註冊or會員中心
            $('.memberShow').fadeIn(700);
             $('body').addClass('stopScroll');
    
        });


    // 點擊關閉
    $('body').on('click', '.loginClose', function() {
        $('.memberShow').fadeOut(500);
        $('.footer').show();
        $('.navbar').show();
        $('body').removeClass('stopScroll');
    });

});