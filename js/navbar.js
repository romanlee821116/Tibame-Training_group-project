$(document).ready(function() {    

    //判斷是否已登入
    if (localStorage.account||sessionStorage.account) {
        $('.nav_logOut').fadeIn();
        $('.navbar-icon .fa-user').css('color','#f7c242');
    } else {
        $('.nav_logOut').fadeOut();
    }
    
    // 
    // 點擊人頭打開
    $('body').on('click', '.navbar-icon .fa-user', function() {
        // ----------嘗試用load寫-----------
        
        // // 隱藏所有頁面
        $('.footer').hide();
        $('.navbar').hide();
        if (localStorage.account||sessionStorage.account) {
            window.location.href = '../page/member.html';
        } else {
            // $('.memberShow').fadeIn(700);
            $('body').addClass('stopScroll');
            // $('.memberShow').load('login.html').hide();
            $('.memberShow').load('../page/login.html');
        };
    });
    // 點擊漢堡打開
    $('body').on('click', '.ham_select a:nth-child(7)', function() {
        // // 隱藏所有頁面
        $('.footer').hide();
        $('.navbar').hide();
        if (localStorage.account||sessionStorage.account) {
            // window.location.href = 'member.html';
            window.location.href = '../page/member.html';
            $('.mavbar-icon .fas .fa-user').css('color', '#f7c242');
        } else {
            $('.memberShow').fadeIn(700);
            $('body').addClass('stopScroll');
        };
    });
    
    // 點擊關閉
    $('body').on('click', '.loginClose', function() {
        $('.memberShow').fadeOut(500);
        $('.footer').show();
        $('.navbar').show();
        $('body').removeClass('stopScroll');
    });

    //登出
    $('.nav_logOut').click(function() {
            console.log('log out');
            localStorage.removeItem('account');
            sessionStorage.removeItem('account');
            $('.nav_logOut').fadeOut();
            $('.navbar-icon .fas .fa-user').css('color', '#bb866a');
            window.history.back();
        })
    

});