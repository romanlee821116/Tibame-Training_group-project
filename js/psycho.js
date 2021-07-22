$(document).ready(function () {

    setPicture();
});

function setPicture() {
    tmpQ = 1;
    $('.psychoQuestion01Asn01').hover(function () {
        $('.psychoQuestion01').css("background-image", "url(../images/psycho/question0" + tmpQ + "_a.jpg)");
    }, function () {
        $('.psychoQuestion01').css("background-image", "url(../images/psycho/question0" + tmpQ + "_topic.jpg)");
    });
    $('.psychoQuestion01Asn02').hover(function () {
        $('.psychoQuestion01').css("background-image", "url(../images/psycho/question0" + tmpQ + "_b.jpg)");
    }, function () {
        $('.psychoQuestion01').css("background-image", "url(../images/psycho/question0" + tmpQ + "_topic.jpg)");
    });
    $('.psychoQuestion01Asn03').hover(function () {
        $('.psychoQuestion01').css("background-image", "url(../images/psycho/question0" + tmpQ + "_c.jpg)");
    }, function () {
        $('.psychoQuestion01').css("background-image", "url(../images/psycho/question0" + tmpQ + "_topic.jpg)");
    });
}

function chgQuestion() {
    tmpQ++;

    if (tmpQ == 6) {
        // var turn = function () {
        //     $('.psycho_resultContent').fadeIn(700);
        //     $('.psycho_cardRange>div>div').css('transform', 'rotateY(360deg)');
        // }
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
        $(tar).attr("src","../images/psycho/favorites_icon_h.png");
    } else {
        $(tar).attr("src","../images/psycho/favorites_icon_n.png");
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