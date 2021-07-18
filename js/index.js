$(function () {
    var vm1 = new Vue({
        el: '.page2',
        data: {
            text: 'MONOKA',
        },
    });

    var vm2 = new Vue({
        el: '.page3',
        data: {
            p3_list: [
                { class: 'p3-watermark p3-mark1', src: './images/index/aboutus_watercolor_a.png' },
                { class: 'p3-watermark p3-mark2', src: './images/index/aboutus_watercolor_b.png' },
            ],
        }
    });

    var vm3 = new Vue({
        el: '.page4',
        data: {
            p4_list: [
                { class: 'p4-watermark p4-mark1', src: './images/index/product_watercolor_a.png' },
                { class: 'p4-watermark p4-mark2', src: './images/index/product_watercolor_b.png' },
                { class: 'p4-watermark p4-mark3', src: './images/index/product_watercolor_c.png' },
            ],
        }
    })

    var vm4 = new Vue({
        el: '.page5',
        data: {
            p5_list: [
                { class: 'p5-watermark p5-mark1', src: './images/index/customized_watercolor_a.png' },
                { class: 'p5-watermark p5-mark2', src: './images/index/customized_watercolor_b.png' },
                { class: 'p5-watermark p5-mark3', src: './images/index/customized_watercolor_c.png' },
            ],
            manual_list: [
                { src: './images/index/customized_step_a.png', title: '選擇禮盒大小', txt: '提供四格、六格、九格三種禮盒尺寸，可依據你的需求做變化' },
                { src: './images/index/customized_step_b.png', title: '選擇美味點心', txt: '禮盒內的每個格子內皆可選擇乙樣和菓子，打造你的專屬禮盒' },
                { src: './images/index/customized_step_c.png', title: '附加暖心小卡', txt: '客製化卡片可自由選擇樣式並填寫內容，將你的心意傳遞給對方' },
            ],
        }
    })

    var vm5 = new Vue({
        el: '.page6',
        data: {
            p6_list: [
                { class: 'p6-watermark p6-mark1', src: './images/index/news_watercolor_a.png' },
                { class: 'p6-watermark p6-mark2', src: './images/index/news_watercolor_b.png' },
                { class: 'p6-watermark p6-mark3', src: './images/index/news_watercolor_c.png' },
            ],
            card_list: [
                { src: './images/index/news_pic_a.png', time: '2021/06/01', title: '挺防疫，免運活動開跑', txt: '即日起至08/31，輸入折扣碼即可享運費折抵' },
                { src: './images/index/news_pic_b.png', time: '2021/04/15', title: '抹茶銅鑼燒新品上市', txt: '靜岡抹茶與阿里山台茶12號以黃金比例調配' },
                { src: './images/index/news_pic_c.png', time: '2021/02/02', title: '芋頭銅鑼燒新品上市', txt: '嚴選香濃綿密的大甲芋頭，甜而不膩好滋味' },
            ],
        }
    })

    var vm6 = new Vue({
        el: '.page7',
        data: {
            p7_list: [
                { class: 'p7-watermark p7-mark1', src: './images/index/shop_watercolor_a.png' },
                { class: 'p7-watermark p7-mark2', src: './images/index/shop_watercolor_b.png' },
                { class: 'p7-watermark p7-mark3', src: './images/index/shop_watercolor_c.png' },
            ],
            shop_info: [
                { class: 'p7-servicehour', title: '營業時間', txt: '10:00～18:30' },
                { class: 'p7-dayoff', title: '定休日', txt: '星期一' },
                { class: 'p7-tel', title: 'TEL', txt: '02-23667322' },
            ],
        }
    })



    ticker();
    newsCarousel();
    navbar();
})


// 跑馬燈替換
function ticker() {
    let length = 0;
    let index = 0;
    let titleWord = ['MONOKA', 'DORAYAKI', 'DAIFUKU'];
    let bgColor = ['#f1ca96', '#6b8871', '#e09ba9'];
    let bgPic = ['./images/index/banner_monaka_bg.png', './images/index/banner_matcha_bg.png', './images/index/banner_strawberry_bg.png'];
    let itemPic = ['./images/index/banner_monaka_item.png', './images/index/banner_matcha_item.png', './images/index/banner_strawberry_item.png'];
    setInterval(function () {
        $('.p2-progress-solid').width(`${length}%`)
        length += .7;
        if (length >= 100) {
            length = 0;
            index += 1;
            $('.p2-ticker-container>h1').html(`${titleWord[index % 3]}`);
            $('.p2-button>h2').text(`${titleWord[index % 3]}`);
            $('.p2-pic>img').attr('src', `${itemPic[index % 3]}`)
            $('.p2-right').css({
                background: `url(${bgPic[index % 3]})`
            });
            $('.p2-left').css({
                backgroundColor: `${bgColor[index % 3]}`
            });
        }
    }, 30);
}

//商品輪播
function newsCarousel() {
    let winWidth = $(window).width();
    if (winWidth < 767) {
        console.log("小於767");
        $('.p6_carousel').show();
        let index = 0;
        setInterval(function () {
            $('.p6_card_container').animate({
                left: index * -350,
            }, 500);
            let point = `.p6_carousel_point:nth-child(${index + 1})`;
            $('.p6_carousel_point').css('backgroundColor', '#ccc')
            $(point).css('backgroundColor', '#172852');
            index += 1;
            if (index == 3) {
                index = 0;
            };
        }, 3000);
        $('.p6_carousel_point').on('click', function () {
            let this_index = $('.p6_carousel_point').index(this);
            index = this_index;
            $('.p6_card_container').animate({
                left: index * -350,
            }, 500);
            let point = `.p6_carousel_point:nth-child(${index + 1})`;
            $('.p6_carousel_point').css('backgroundColor', '#ccc')
            $(point).css('backgroundColor', '#172852');
        })
    }
}




