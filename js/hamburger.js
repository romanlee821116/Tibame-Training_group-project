$(document).ready(function() {
    console.log('ham run');
    $(".ham_container").click(function() {
            console.log('ham click');
            $(".ham_select").find("a").css({ opacity: "1" });
            $(this).toggleClass("ham_change");
            if ($(this).hasClass("ham_change")) {
                $("#ham_myNav").css({ width: "100%" });
            } else {
                $(".ham_select").find("a").css({ opacity: "0" });
                $("#ham_myNav").css({ width: "0%" });
            }
        })
        //判斷當前頁面顏色提示
        // let show = window.location.pathname;
        // localStorage.setItem("nowPage", JSON.stringify(show));
        // if (window.location.pathname == 'page/shopimg_choose.html') {
        //     console.log("hi")
        // }
        //判斷當前是否登入顯示登入/登出連結

});