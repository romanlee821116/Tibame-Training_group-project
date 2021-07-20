$(document).ready(function() {
    $(".container").click(function() {
        $(".slime1").fadeIn(500);
        $(".slime2").fadeIn(500);
        $(".slime3").fadeIn(500);
        $(".slime4").fadeIn(500);
        $(".select").find("a").css({ opacity: "1" });
        $(this).toggleClass("change");
        if ($(this).hasClass("change")) {
            $("#myNav").css({ width: "100%" });
        } else {
            $(".select").find("a").css({ opacity: "0" });
            $(".slime1").fadeOut(500);
            $(".slime2").fadeOut(500);
            $(".slime3").fadeOut(500);
            $(".slime4").fadeOut(500);
            $("#myNav").css({ width: "0%" });
        }
    })
});