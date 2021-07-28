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
        //判斷該頁面
    let show = window.location.pathname;
    localStorage.setItem("nowPage", JSON.stringify(show));


});