$(document).ready(function() {
    $(".ham_container").click(function() {
<<<<<<< HEAD
            // console.log('ham click');
            $(".ham_select").find("a").css({ opacity: "1" });
            $(this).toggleClass("ham_change");
            if ($(this).hasClass("ham_change")) {
                $("#ham_myNav").css({ width: "100%" });
                // if(window.location.pathname == '/index.html'){
                //     $('.ham_bar').css('background-color','#fff');
                // }
            } else {
                $(".ham_select").find("a").css({ opacity: "0" });
                $("#ham_myNav").css({ width: "0%" });
                // if(window.location.pathname == '/index.html'){
                //     $('.ham_bar').css('background-color','#bb866a');
                // }
            }
        })
        //判斷當前頁面顏色提示
    let show = window.location.pathname;
    localStorage.setItem("nowPage", JSON.stringify(show));
    //判斷當前是否登入顯示登入/登出連結
=======
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

>>>>>>> wei

});