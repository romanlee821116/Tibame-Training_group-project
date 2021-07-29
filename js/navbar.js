$(document).ready(function() {
    console.log(window.location.pathname);
    if (window.location.pathname == '/index.html'|| window.location.pathname == 'https://tibamef2e.com/tfd102/project/g3/index.html') {
        console.log('homepage');
        $('.memberShow').load('page/login.html').hide();
    } else {
        $('.memberShow').load('login.html').hide();
    }
    // 點擊人頭打開
    $('body').on('click', '.navbar-icon .fa-user', function() {
        // ----------嘗試用load寫-----------
        // // 隱藏所有頁面
        console.log('clickhead');
        $('.footer').hide();
        $('.navbar').hide();
        if (localStorage.loginStatus == 'Login') {
            // window.location.href = 'member.html';
            if (window.location.pathname == '/index.html') {
                window.location.href = 'page/member.html';
            } else {
                window.location.href = 'member.html';
            };
        } else {
            $('.memberShow').fadeIn(700);
            $('body').addClass('stopScroll');
        };
    });
    // 點擊漢堡打開
    $('body').on('click', '.ham_select a:nth-child(7)', function() {
        // // 隱藏所有頁面
        console.log('clickhead');
        $('.footer').hide();
        $('.navbar').hide();
        if (localStorage.loginStatus == 'Login') {
            // window.location.href = 'member.html';
            if (window.location.pathname == '/index.html') {
                window.location.href = './page/member.html';
            } else {
                window.location.href = 'member.html';
            };
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
            localStorage.removeItem('loginStatus');
            $('.nav_logOut').fadeOut();
            $('.mavbar-icon .fas .fa-user').css('color', '#fff');
            location.reload();
        })
        //
    if (localStorage.loginStatus) {
        $('.nav_logOut').fadeIn();
    } else {
        $('.nav_logOut').fadeOut();
    }

});