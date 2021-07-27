$(document).ready(function() {
    // hover 效果
    $('.choose_select_area a').mouseover(function() {

        // 加字串到.text
        $("#animate_text").html('<h1>' + $(this).find('div').data('hover-text') + '</h1>' + '<p>' + $(this).find('div').data('text') + '</p>')

        // .text動畫
        function text_animate() {
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

        }


    });

    // function load(url, data) {
    //     //alert($(url).attr("href"));
    //     $.ajaxSetup({ cache: false });
    //     $("#content").load($(url).attr("href") + " #content ", data, function(result) {
    //         //alert(result);
    //         //将被加载页的JavaScript加载到本页执行
    //         $result = $(result);
    //         $result.find("script").appendTo('#content');
    //     });
    // }
    // =================== local storage===========================

});