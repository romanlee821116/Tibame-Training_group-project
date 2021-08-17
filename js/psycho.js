$(document).ready(function () {
    tmpQ = 1;
    psyhoScore = 0;

    ps = new Vue({
        el: '.psycho_resultContent',
        data: {
            alldata: [
                { fairy: '火之精靈', wordText: '最喜歡尋找特殊口味的和菓子，對和菓子的愛比誰都熱情' },
                { fairy: '光之精靈', wordText: '浪漫又充滿神祕性的你，對任何口味的和菓子都充滿好奇' },
                { fairy: '土之精靈', wordText: '對任何事情都充滿規劃的你，最喜歡和朋友們一起享用和菓子' },
                { fairy: '森之精靈', wordText: '總是能捕捉到生活中細微卻美好事物的你，最喜歡使用天然水果製作的和菓子' },
                { fairy: '水之精靈', wordText: '對待他人和自我都很貼心的你，最喜歡獨自一人好好品嘗每個和菓子' },
            ],
            psyhoScorekey: 0,
        },
    })

    $('.psychoQuestionAsn_a').hover(function () { setPicture(true, "a"); }, function () { setPicture() });
    $('.psychoQuestionAsn_b').hover(function () { setPicture(true, "b"); }, function () { setPicture() });
    $('.psychoQuestionAsn_c').hover(function () { setPicture(true, "c"); }, function () { setPicture() });
});

function setPicture(key, type) {
    if (key) {
        $('.psychoQuestion01').css("background-image", "url(../images/psycho/question0" + tmpQ + "_" + type + ".jpg)");
        tmp_type = type;
    } else {
        $('.psychoQuestion01').css("background-image", "url(../images/psycho/question0" + tmpQ + "_topic.jpg)");
    }
}

function chgQuestion(key, type='') {
    $(".psychoQuestionAns").css("opacity", "1");
    if (detectmob() == true && key) {
        $(".psycho_nextbtndisplay").css("display", "flex");
        $(".psychoQuestionAns").not(".psychoQuestionAsn_" + type).css("opacity", ".5");
        return;
    }
    $(".psycho_nextbtndisplay").css("display", "none");
    if(type == '' && tmp_type) type = tmp_type;
    if (type == 'a') {
        psyhoScore = psyhoScore + 1
    }
    else if (type == 'b') {
        psyhoScore = psyhoScore + 2
    }
    else {
        psyhoScore = psyhoScore + 3
    };

    tmpQ++;

    if (tmpQ == 6) {
        // var turn = function () {
        //     $('.psycho_resultContent').fadeIn(700);
        //     $('.psycho_cardRange>div>div').css('transform', 'rotateY(360deg)');
        // }
        if (psyhoScore >= 14) {
            $('.psycho_cardFront').css('background-image', 'url(../images/psycho/card_front_fire.png)')
            ps.psyhoScorekey = 0
        }
        else if (psyhoScore >= 12) {
            $('.psycho_cardFront').css('background-image', 'url(../images/psycho/card_front_light.png)')
            ps.psyhoScorekey = 1
        }
        else if (psyhoScore >= 10) {
            $('.psycho_cardFront').css('background-image', 'url(../images/psycho/card_front_earth.png)')
            ps.psyhoScorekey = 2
        }
        else if (psyhoScore >= 8) {
            $('.psycho_cardFront').css('background-image', 'url(../images/psycho/card_front_plant.png)')
            ps.psyhoScorekey = 3
        }
        else {
            $('.psycho_cardFront').css('background-image', 'url(../images/psycho/card_front_water.png)')
            ps.psyhoScorekey = 4
        }

        var Down = function () {
            $('.psycho_resultScreen').fadeIn();
            $('.psycho_resultBg').css('height', '100vh');
        }
        var Close = function () {
            $('.psycho_loadingScreen').fadeIn(700);
            $('.psycho_questionScreen').hide();
        }
        $('.psycho_question01Screen').hide();
        setTimeout(Close, 200)
        setTimeout("$('.psycho_loadingScreen').fadeOut(700);", 2500)
        setTimeout(Down, 3300)
        setTimeout("$('.psycho_resultContent').fadeIn(700);", 3900)
        setTimeout("$('.psycho_cardRange>div>div').css('transform', 'rotateY(360deg)');", 4200)
    } else {
        $('#psycho_title')[0].innerHTML = 文案[tmpQ][0];
        $('#content1')[0].innerHTML = 文案[tmpQ][1];
        $('#content2')[0].innerHTML = 文案[tmpQ][2];
        $('#content3')[0].innerHTML = 文案[tmpQ][3];

        $('.psychoQuestion01').css("background-image", "url(../images/psycho/question0" + tmpQ + "_topic.jpg)");
        $(".psychoScheduleTop")[0].focus();

    }
    $(".psychoScheduleTop").css("width", (tmpQ - 1) * 20 + "%");

}

function beginQuestion() {
    $('.psycho_questionScreen').fadeIn(700);
    $('.psycho_beginScreen').hide();
}
function psychoLikeHeart(tar) {
    x = $(tar).attr("src");
    if (x == "../images/psycho/favorites_icon_n.png") {
        $(tar).attr("src", "../images/psycho/favorites_icon_h.png");
    } else {
        $(tar).attr("src", "../images/psycho/favorites_icon_n.png");
    }
}


function clickAns() {
    $('.psycho_nextbtndisplay').fadeIn(700);
    $(this).addClass('active');
}


文案 = new Array();
文案[2] = ["2 . 書架上有幾本新書，你隨手拿起了一本，書中的內容是什麼呢?", "天馬行空的奇幻故事", "刺激的冒險故事", "浪漫的愛情故事"];
文案[3] = ["3 . 桌面上擺放著幾個精緻小巧的花瓶，你覺得裡面放的是什麼花?", "白綠色的小雛菊與桔梗", "藍色的玫瑰與繡球花", "色彩繽紛的康乃馨與鳥尾花"];
文案[4] = ["4 . 晚餐時間到了，一個人獨處的你，此刻享用的餐點是?", "迷迭香嫩煎牛排", "黑松露德式香腸", "義式檸檬燉鮮蝦"];
文案[5] = ["5 . 漫長的一天結束了，躺在床上的你做了一個好夢，夢中的場景發生在哪裡呢?", "陽光揮灑的森林小徑", "一望無際的白沙海灘", "夜晚湖畔的星空下"];


function detectmob() {

    if (navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
    ) {
        return true;
    }
    else {
        return false;
    }
}

