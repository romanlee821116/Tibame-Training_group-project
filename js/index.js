$(function () {
    var vm1 = new Vue({
        el: '.index_page2',
        data: {
            text: 'MONOKA',
        },
    });

    var vm2 = new Vue({
        el: '.index_page3',
        data: {
            p3_list: [
                { class: 'p3-watermark p3-mark1', src: './images/index/aboutus_watercolor_a.png' },
                { class: 'p3-watermark p3-mark2', src: './images/index/aboutus_watercolor_b.png' },
            ],
        }
    });
    
    var vm3 = new Vue({
        el: '.index_page4',
        data: {
            p4_list: [
                { class: 'p4-watermark p4-mark1', src: './images/index/product_watercolor_a.png' },
                { class: 'p4-watermark p4-mark2', src: './images/index/product_watercolor_b.png' },
                { class: 'p4-watermark p4-mark3', src: './images/index/product_watercolor_c.png' },
            ],
            p4_pic:[
                {src:'./images/shopping_list/daifuku_mango_c_big.png', txt:'芒果大福'},
                {src:'./images/shopping_list/daifuku_strawberry_b_big.png', txt:'草莓大福'},
                {src:'./images/shopping_list/daifuku_soybeans_a_big.png', txt:'毛豆大福'},
                {src:'./images/shopping_list/monaka_chocolate_b_big.png', txt:'巧克力最中'},
                {src:'./images/shopping_list/monaka_matcha_b_big.png', txt:'抹茶最中'},
                {src:'./images/shopping_list/namagashi_chrysanthemum_c_big.png', txt:'生菓子菊'},
                {src:'./images/shopping_list/namagashi_hydrangea_a_big.png', txt:'生菓子繡球花'},
                {src:'./images/shopping_list/namagashi_kikyo_b_big.png', txt:'生菓子桔梗'},
                {src:'./images/shopping_list/namagashi_peony_b_big.png', txt:'生菓子牡丹'},
                {src:'./images/shopping_list/dorayaki_matcha_a_big.png', txt:'抹茶銅鑼燒'},
                {src:'./images/shopping_list/dorayaki_chestnut_b_big.png', txt:'栗子銅鑼燒'},
                {src:'./images/shopping_list/daifuku_chocolate_c_big.png', txt:'巧克力大福'},
                {src:'./images/shopping_list/namagashi_sakura_b_big.png', txt:'生菓子櫻'},
                {src:'./images/shopping_list/monaka_milk_b_big.png', txt:'牛奶最中'},
                {src:'./images/shopping_list/dorayaki_taro_c_big.png', txt:'芋頭銅鑼燒'},
                {src:'./images/shopping_list/namagashi_firework_c_big.png', txt:'生菓子煙花'},
                {src:'./images/shopping_list/dorayaki_pudding_b_big.png', txt:'布丁銅鑼燒'},
            ],
        }
    })

    var vm4 = new Vue({
        el: '.index_page5',
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
        el: '.index_page6',
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
        el: '.index_page7',
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
    indexIntro();
    shopPicChange();
    productPicChange();
})

//進場動畫
function indexIntro(){
    $('.navbar').css('opacity','0');
    index = 0;
    index2 = 0;
    index3 = 0;
    index4 = 0;
    setTimeout(function () {
        setInterval(function () {
            let slogan = '<p>百年を伝わる和風味に</p>'
            if (index < slogan.length) {
                let into = $(slogan).text().slice(index, index + 1);
                index += 1;
                $('.intro_add').append(into).css('color', '#ffffff');
            } else {
                clearInterval();
            }
        }, 100);
    }, 500)

    setTimeout(function () {
        setInterval(function () {
            let slogan = '<p>台湾天然食材と組合せ。</p>'
            if (index2 < slogan.length) {
                let into = $(slogan).text().slice(index2, index2 + 1);
                index2 += 1;
                $('.intro_add2').append(into).css('color', '#ffffff');
            } else {
                clearInterval();
            }
        }, 100);
    }, 1500);

    setTimeout(function () {
        setInterval(function () {
            let slogan = '<p>幸せな味を</p>';
            if (index3 < slogan.length) {
                let into = $(slogan).text().slice(index3, index3 + 1);
                index3 += 1;
                $('.intro_add3').append(into).css('color', '#ffffff');
            } else {
                clearInterval();
            }
        }, 100);
    }, 2500);

    setTimeout(function () {
        setInterval(function () {
            let slogan = '<p>ご堪能ください。</p>';
            if (index4 < slogan.length) {
                let into = $(slogan).text().slice(index4, index4 + 1);
                index4 += 1;
                $('.intro_add4').append(into).css('color', '#ffffff');
            } else {
                clearInterval();
                setTimeout(function(){
                    $('.index_intro').fadeOut(1000);
                    $('.navbar').css('opacity','1');
                    // $('body').css('overflow','auto');
                })
            }
        }, 100);
    }, 3000);
}

// 跑馬燈替換
function ticker() {
    let length = 0;
    let index = 0;
    let titleWord = ['MONOKA', 'DORAYAKI', 'DAIFUKU'];
    let bgColor = ['#f1ca96', '#6b8871', '#e09ba9'];
    let bgPic = ['./images/index/banner_monaka_bg.png', './images/index/banner_matcha_bg.png', './images/index/banner_strawberry_bg.png'];
    let itemPic = ['./images/index/banner_monaka_item.png', './images/index/banner_matcha_item.png', './images/index/banner_strawberry_item.png'];
    setInterval(function () {
        $('.iindex_p2-progressSolid').width(`${length}%`)
        length += .7;
        if (length >= 100) {
            length = 0;
            index += 1;
            $('.index_p2_tickerContainer>h1').html(`${titleWord[index % 3]}`);
            $('.index_p2_button>h2').text(`${titleWord[index % 3]}`);
            $('.index_p2_pic>img').attr('src', `${itemPic[index % 3]}`)
            $('.iindex_p2_right').css({
                background: `url(${bgPic[index % 3]})`
            });
            $('.index_p2_left').css({
                backgroundColor: `${bgColor[index % 3]}`
            });
        }
    }, 30);
}

//商品輪播
function newsCarousel() {
    let winWidth = $(window).width();
    if (winWidth < 767) {
        // console.log("小於767");
        $('.index_p6_carousel').show();
        let index = 0;
        setInterval(function () {
            $('.index_p6_cardContainer').animate({
                left: index * -350,
            }, 500);
            let point = `.index_p6_carousel_point:nth-child(${index + 1})`;
            $('.index_p6_carousel_point').css('backgroundColor', '#ccc')
            $(point).css('backgroundColor', '#172852');
            index += 1;
            if (index == 3) {
                index = 0;
            };
        }, 3000);
        $('.index_p6_carousel_point').on('click', function () {
            let this_index = $('.index_p6_carousel_point').index(this);
            index = this_index;
            $('.index_p6_cardContainer').animate({
                left: index * -350,
            }, 500);
            let point = `.index_p6_carousel_point:nth-child(${index + 1})`;
            $('.index_p6_carousel_point').css('backgroundColor', '#ccc')
            $(point).css('backgroundColor', '#172852');
        })
    }
}

function productPicChange(){
    let index = 0;
    let productPic_list = [
        {src: './images/shopping_list/taiyaki_sakura_c_big.png', name: '櫻花鯛魚燒', price:'3入 $300'},
        {src: './images/shopping_list/dorayaki_strawberry_c_big.png', name: '草莓銅鑼燒', price:'3入 $285'},
        {src: './images/shopping_list/namagashi_firework_c_big.png', name: '生菓子花火', price:'3入 $330'},
        {src: './images/shopping_list/sweet_madeleine_c_big.png', name: '瑪德蓮', price:'3入 $120'},        
    ];
    setInterval(() => {
        index = (index+1) % 4;
        let newSrc = productPic_list[index].src;
        let newName = productPic_list[index].name;
        let newPrice = productPic_list[index].price;
        $('.index_p4_bigPic_img>img').attr('src', newSrc);
        $('.index_p4_bigPic_info > p:first-child').text(newName);
        $('.index_p4_bigPic_info > p:last-child').text(newPrice);
    }, 3000);
}

//店鋪資訊照片
function shopPicChange(){    
    $('.index_p7_shopBtn-right').click(function(){
        let currentSrc = $('.index_p7_bigPic > img').attr('src');
        let srcIndex = currentSrc.substr(-5,1);
        newIndex = (srcIndex+1) % 3;
        let newSrc = `./images/index/shop_pic_${newIndex}.png`;
        $('.index_p7_bigPic > img').attr('src', newSrc);
    })
    $('.index_p7_shopBtn-left').click(function(){
        let currentSrc = $('.index_p7_bigPic > img').attr('src');
        let srcIndex = currentSrc.substr(-5,1);
        newIndex = (srcIndex+2) % 3;
        let newSrc = `./images/index/shop_pic_${newIndex}.png`;
        $('.index_p7_bigPic > img').attr('src', newSrc);
    })
}






