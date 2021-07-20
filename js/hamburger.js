$(document).ready(function() {
    $(".container").click(function() {
       
        $(".select").find("a").css({ opacity: "1" });
        $(this).toggleClass("ham_change");
        if ($(this).hasClass("ham_change")) {
            $("#myNav").css({ width: "100%" });
        } else {
            $(".select").find("a").css({ opacity: "0" });
          
            $("#myNav").css({ width: "0%" });
        }
    })
});