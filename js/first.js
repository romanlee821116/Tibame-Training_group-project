$(document).ready(function() {

    //左邊

    $(".first_front_end").hover(function() {
        $(this).css({
            boxShadow: "0px 0px 0px transparent",
            backgroundColor: "transparent",
            border: "0",
        })
        $(this).find("a").css({
            color: "white",
            fontSize: "40px",
            textShadow: "3px 6px 5px black"
        }).text("GO")
        $(".first_all").css({ backgroundImage: 'url("../images/first/first_1.png")' })
        $(".first_img").css({
            opacity: "0"
        })
        $(this).find("img").css({
            opacity: "1",
            transform: "scale(1.5)"
        })
    }, function() {
        $(this).css({
            backgroundColor: "bisque",
            boxShadow: "2px 2px 10px rgba(1, 1, 1, .5)"
        })
        $(this).find("a").css({
            color: "#172852",
            fontSize: "30px",
            textShadow: "0px 0px 0px #172852"
        }).text("前台")
        $(".first_all").css({ backgroundImage: 'url("../images/first/bg.png")' })
        $(".first_img").css({ opacity: "1" })
        $(this).find("img").css({
            opacity: "1",
            transform: "scale(0)"
        })
    })

    //右邊
    $(".first_back_end").hover(function() {
        $(this).css({
            boxShadow: "0px 0px 0px transparent",
            backgroundColor: "transparent",
            border: "0",
        })
        $(this).find("a").css({
            color: "white",
            fontSize: "40px",
            textShadow: "2px 5px 5px black"
        }).text("GO")
        $(".first_all").css({ backgroundImage: 'url("../images/first/first_2.png")' })
        $(".first_img").css({ opacity: "0" })
        $(this).find("img").css({
            opacity: "1",
            transform: "scale(1.3)"
        })
    }, function() {
        $(this).css({
            backgroundColor: "bisque",
            boxShadow: "2px 2px 10px rgba(1, 1, 1, .5)"
        })
        $(this).find("a").css({
            color: "#172852",
            fontSize: "30px",
            textShadow: "0px 0px 0px #172852"
        }).text("後台")
        $(".first_all").css({ backgroundImage: 'url("../images/first/bg.png")' })
        $(".first_img").css({ opacity: "1" })
        $(this).find("img").css({
            opacity: "1",
            transform: "scale(0)"
        })
    })




});