$(document).ready(function () {
    console.log('new run');

    // ==============標題點擊效果=================
    $('#newsAll_classification_all').click(function () {
        $('.newsChoosenBar2').css('left', '0%');
        $(this).css('color', '#172852');
        $(this).siblings().css('color', '#cba89a');
        $('.newsPart1').fadeIn(700);
        $('.news_blockAll > div').not('.newsPart1').hide();
        ns.showNdata(1);
    });

    $('#newsAll_classification_product').click(function () {
        $('.newsChoosenBar2').css({ left: '20%' });
        console.log('run bar2');
        $(this).css('color', '#172852');
        $(this).siblings().css('color', '#cba89a');
        $('.newsPart2').fadeIn(700);
        $('.news_blockAll > div').not('.newsPart2').hide();
        ns.showNdata(2);
    });

    $('#newsAll_classification_activity').click(function () {
        $('.newsChoosenBar2').css('left', '40%');
        $(this).css('color', '#172852');
        $(this).siblings().css('color', '#cba89a');
        $('.newsPart3').fadeIn(700);
        $('.news_blockAll > div').not('.newsPart3').hide();
        ns.showNdata(3);
    });

    $('#newsAll_classification_report').click(function () {
        $('.newsChoosenBar2').css('left', '60%');
        $(this).css('color', '#172852');
        $(this).siblings().css('color', '#cba89a');
        $('.newsPart4').fadeIn(700);
        $('.news_blockAll > div').not('.newsPart4').hide();
        ns.showNdata(4);
    });

    $('#newsAll_classification_shop').click(function () {
        $('.newsChoosenBar2').css('left', '80%');
        $(this).css('color', '#172852');
        $(this).siblings().css('color', '#cba89a');
        $('.newsPart5').fadeIn(700);
        $('.news_blockAll > div').not('.newsPart5').hide();
        ns.showNdata(5);
    });

    $('.newsAll_classificationTitle>h4').click(function () {
        $(this).addClass('thisClicked');
        $(this).siblings().removeClass('thisClicked');
    });

    var ns = new Vue({
        el: '.news_blockAll',
        data: {
            nsClass: ['新品上市', '活動消息', '媒體報導', '店鋪新資訊'],
            image_url: '../images/news/',
            news: [
                // {
                //     'create_date': '',
                //     'news_class': '',
                //     'news_title1': '',
                //     'news_title2': '',

                // }
            ],
            tap: 1,
            classtype: ''

        },
        created: function () {
            this.showNdata(1);
        },
        methods: {
            showNdata(classcl) {
               
                console.log(classcl);
                if (classcl) {
                    this.classtype = classcl
                    this.tap = 1 
                    console.log(this.tap);
                }


                $.ajax({
                    method: "POST",
                    url: "../php/getNewsList.php",
                    data: {
                        tap: this.tap++,
                        clickcl: this.classtype,

                    },
                    dataType: "json",
                    success: function (response) {
                        ns.news = response[0];
                    },
                    error: function (exception) {
                        alert("發生錯誤: " + exception.status);
                    },
                });
            },
        }
    })
})