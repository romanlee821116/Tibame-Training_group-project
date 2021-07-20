$(function() {
    // hover 效果
    $('.choose_items').mouseover(function() {

        // 加字串到.text
        $('.choose_text').html('<h1>' + $(this).data('hover-text') + '</h1>' + '<p>' + $(this).data('text') + '</p>')

        // .text動畫

        let $h1demoText = $("#animate_text").find("h1");
        let $pdemoText = $("#animate_text").find("p");
        $h1demoText.html($h1demoText.text().replace(/./g, `<span>$&</span>`));
        $pdemoText.html($pdemoText.text().replace(/./g, `<span>$&</span>`));

        TweenMax.staggerFromTo($h1demoText.find("span"), 1, {
            autoAlpha: 0,
            scale: 7,
        }, {
            autoAlpha: 1,
            scale: 1,
        }, 0.05, reset);

        TweenMax.staggerFromTo($pdemoText.find("span"), 1, {
            autoAlpha: 0,
            scale: 7,
        }, {
            autoAlpha: 1,
            scale: 1,
        }, 0.05, reset);

        function reset() {
            TweenMax.to($h1demoText, 1, {
                autoAlpha: 1
            });
            TweenMax.to($pdemoText, 1, {
                autoAlpha: 1
            });
        };


    });



});