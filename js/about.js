$(function () {
    // place0
    Vue.component('place0', {
        data() {
            return {
                content: 'place1',
                isHide: true,
            }
        },
        methods: {
            hidden: function () {
                this.$emit('hidden');
            }
        },
        template: `
        <div class='about_farmerDetail_bg' >
            <div class='about_farmerDetail_box'>
                <div class='about_farmerDetail_farmer'>
                    <img src="../images/about/farmer1.jpg" alt="">
                    <p>吉光有機農園 - 謝其吉</p>
                </div>
                
                <div class='about_farmerDetail_title'>
                    <h2>台灣與歐盟的雙重標章</h2>
                    <h3>苗栗 - 吉光有機草莓園</h3>   
                    <div class='about_farmerDetail_text'>
                        因兩、三歲的侄兒常跑到田裡摘草莓吃，讓吉光有機農園負責人謝其吉決心朝無毒栽培發展，使用無農藥栽培管理技術，除了取得台灣有機驗證外，更取得歐盟最高規格Ecocert有機認證。
                        <br><br>
                        小春堂所提供的草莓物料來源皆來自吉光有機農園，我們相信，讓消費者、栽種農民雙方都得到充分保障下才能提供最好的商品。
                    </div>                 
                </div> 

                <i class="fas fa-times" @click.prevent='hidden'></i>                
                
            </div>
        </div>
        `,
    })
    // place1
    Vue.component('place1', {
        data() {
            return {
                content: 'place1',
                isHide: true,
            }
        },
        methods: {
            hidden: function () {
                this.$emit('hidden');
            }
        },
        template: `
        <div class='about_farmerDetail_bg' >
            <div class='about_farmerDetail_box'>
                <div class='about_farmerDetail_farmer'>
                    <img src="../images/about/farmer2.jpg" alt="">
                    <p>瑞林有機農場 - 李順序</p>
                </div>
                
                <div class='about_farmerDetail_title'>
                    <h2>台灣第一家有機芒果農</h2>
                    <h3>台南 - 瑞林有機農場</h3>   
                    <div class='about_farmerDetail_text'>
                        「要用好的心態跟芒果說話，它會聽的到，就會乖乖長大。」瑞林有機農場不使用任何農藥與化學肥料，李順序夫婦抱著「惜福」的心態，用心對待每棵芒果樹，雖然辛苦換得的收入不多，但卻得到心靈上的富足。
                        <br><br>
                        小春堂與瑞林有機農場合作，同樣秉持所有商品不額外添加任何化學物料，提供最天然的物料給每位消費者。
                    </div>                 
                </div> 

                <i class="fas fa-times" @click.prevent='hidden'></i>                
                
            </div>
        </div>
        `,
    })
    // place2
    Vue.component('place2', {
        data() {
            return {
                content: 'place1',
                isHide: true,
            }
        },
        methods: {
            hidden: function () {
                this.$emit('hidden');
            }
        },
        template: `
        <div class='about_farmerDetail_bg' >
            <div class='about_farmerDetail_box'>
                <div class='about_farmerDetail_farmer'>
                    <img src="../images/about/farmer3.jpg" alt="">
                    <p>友善老鷹農法農友 - 林清源</p>
                </div>
                
                <div class='about_farmerDetail_title'>
                    <h2>讓老鷹再次高飛</h2>
                    <h3>屏東 - 老鷹紅豆</h3>   
                    <div class='about_farmerDetail_text'>
                        2013年，屏科大鳥類研究人員發現少數農友使用農藥以防鳥害，而讓老鷹誤食毒死小鳥而間接死亡。在研究團隊努力下，改善以自然熟成、安全管理方式種植，達到保護台灣老鷹生態及土地的永續健全，並在2016以「老鷹紅豆」品牌成為東港鎮農會銷售產品之一。
                        <br><br>
                        小春堂提供的所有紅豆物料皆購自於東港鎮農會之老鷹紅豆，在提供優良產品的同時也為台灣的土地盡一份心力。
                    </div>                 
                </div> 
            <i class="fas fa-times" @click.prevent='hidden'></i>    
        </div>
    </div>
        `,
    })
    // place3
    Vue.component('place3', {
        data() {
            return {
                content: 'place1',
                isHide: true,
            }
        },
        methods: {
            hidden: function () {
                this.$emit('hidden');
            }
        },
        template: `
        <div class='about_farmerDetail_bg' >
            <div class='about_farmerDetail_box'>
                <div class='about_farmerDetail_farmer'>
                    <img src="../images/about/farmer4.jpg" alt="">
                    <p>池上鄉農會 - 池上米</p>
                </div>                
                <div class='about_farmerDetail_title'>
                    <h2>全國稻米三冠王</h2>
                    <h3>台東 - 池上米</h3>   
                    <div class='about_farmerDetail_text'>
                        池上鄉是全國唯一實行稻米分級收購制度的鄉鎮，由池上鄉農會及米糧商共同建立，依據稻穀的品質向契作農民收購，讓多付出心力的稻農得到相對的回饋。此外，池上鄉農會也首創稻米農藥檢測制度，讓消費者不僅吃的美味，也吃得安心健康。
                        <br><br>
                        小春堂選用池上鄉農會的三冠米，以最好的品質，打造最美味的產品。
                    </div>                 
                </div> 
                <i class="fas fa-times" @click.prevent='hidden'></i>    
            </div>
        </div>
        `,
    })

    // ==================================== new Vue ==================================== 
    new Vue({
        el: '#about_wrap',
        data: {
            people_list: [
                { src: '../images/about/character01_1.png', class: 'about_people1 people' },
                { src: '../images/about/character03_1.png', class: 'about_people3 people' },
                { src: '../images/about/character04_1.png', class: 'about_people4 people' },
                // { src: '../images/about/character05_1.png', class: 'about_people5 people' },
                { src: '../images/about/character06_1.png', class: 'about_people6 people' },
                { src: '../images/about/character07_1.png', class: 'about_people7 people' },
            ],
            scene1End: [
                {src:'../images/about/logo.png', class:'about_street_endLogo'},
                // {src:'', class:''},
                {src:'../images/about/cloud01.png', class:'about_cloud1 about_cloud'},
                {src:'../images/about/cloud02.png', class:'about_cloud2 about_cloud'},
                {src:'../images/about/cloud03.png', class:'about_cloud3 about_cloud'},
                {src:'../images/about/cloud04.png', class:'about_cloud4 about_cloud'},
                {src:'../images/about/cloud05.png', class:'about_cloud5 about_cloud'},
                {src:'../images/about/cloud06.png', class:'about_cloud6 about_cloud'},
                {src:'../images/about/cloud07.png', class:'about_cloud7 about_cloud'},
                {src:'../images/about/cloud08.png', class:'about_cloud8 about_cloud'},
            ],
            placePic: [
                { class: 'about_taiwanSpot1', src: '../images/about/product04.png' },
                { class: 'about_taiwanSpot2', src: '../images/about/product01.png' },
                { class: 'about_taiwanSpot3', src: '../images/about/product02.png' },
                { class: 'about_taiwanSpot4', src: '../images/about/product03.png' },
            ],
            placeDeco: [
                { class: 'about_spotDeco1', src: '../images/about/map_balloon01.png' },
                { class: 'about_spotDeco2', src: '../images/about/map_balloon02.png' },
                { class: 'about_spotDeco3', src: '../images/about/map_balloon03.png' },
                { class: 'about_spotDeco4', src: '../images/about/map_dolphin01.png' },
                { class: 'about_spotDeco5', src: '../images/about/map_dolphin02.png' },
                { class: 'about_spotDeco6', src: '../images/about/map_lantern01.png' },
                { class: 'about_spotDeco7', src: '../images/about/map_lantern02.png' },
                { class: 'about_spotDeco8', src: '../images/about/map_lantern03.png' },
                { class: 'about_spotDeco9', src: '../images/about/map_whale.png' },
            ],
            farmer_list: [
                { class: 'custom_farmer_straw' },
                { class: 'custom_farmer_mango' },
                { class: 'custom_farmer_rebbean' },
                { class: 'custom_farmer_rice' },
            ],
            taiwan_list: [
                { place: 'taiwanPlace about_place1', country: '苗栗', title: '台灣與歐盟的雙重標章 - 吉光有機草莓園', content: '小春堂所提供的草莓物料來源皆來自吉光有機農園，我們相信，讓消費者、栽種農民雙方都得到充分保障下才能提供最好的商品', fruit: 'about_card1' },
                { place: 'taiwanPlace about_place2', country: '台南', title: '台灣第一家有機芒果農 - 瑞林有機農場', content: '小春堂與瑞林有機農場合作，同樣秉持所有商品不額外添加任何化學物料，提供最天然的物料給每位消費者。', fruit: 'about_card2' },
                { place: 'taiwanPlace about_place3', country: '屏東', title: '讓老鷹再次高飛 - 老鷹紅豆', content: '小春堂提供的所有紅豆物料皆購自於東港鎮農會之老鷹紅豆，在提供優良產品的同時也為台灣的土地盡一份心力。', fruit: 'about_card3' },
                { place: 'taiwanPlace about_place4', country: '台東', title: '全國稻米三冠王 - 池上米', content: '小春堂選用池上鄉農會的三冠米，以最好的品質，打造最美味的產品', fruit: 'about_card4' },
            ],
            content: 'place0',
            boxDisplay: false,
        },
        methods: {
            showBox: function (index) {
                this.boxDisplay = true;
                this.content = 'place' + (index);
                console.log("目前place=" + this.content);
                // ======禁止滾動
                
            },
            changeBox(item) {
                console.log('changeBox');
                this.content = item;
            },
            hiddenBox: function () {
                this.boxDisplay = false; 
            }
        },
    })


    // ==================================== ScrollMagic ==================================== 

    var controller = new ScrollMagic.Controller();
    var sticky = new TimelineMax();
    sticky.to('.about_street', 0, { scale: '1%', top: '-0px' })
        .to('.about_street', 2, { scale: '2%', top: '-20vh' })
        .to('.about_street', 2, { scale: '3%', top: '-45vh', left: '-2%' })
        .to('.about_street', 1.5, { opacity: '0' })


    new ScrollMagic.Scene({
        triggerElement: '#keypoint1',
        triggerHook: 0,
        duration: '500%',
    }).setPin('#about_scene1').setTween(sticky).addIndicators().addTo(controller);
    // ==========================================================================
    var stickyMap = new TimelineMax();
    stickyMap.to('.about_taiwan', 0, { scale: '1%' })
        .to('.about_island, .about_spot, .about_spotDeco', 2, { scaleY: '1' })
        .to('.about_spot, .about_spotDeco', .5, { opacity: '1' })
        .to('.about_spot, .about_spotDeco', 3, { opacity: '1' })
        // 苗栗
        .to('.about_taiwan', 5, { scale: '3.5%', top: '120%', left: '-20%' })
        .to('.about_taiwan', 4, { scale: '3.5%', top: '120%', left: '-20%' })
        // 台南
        .to('.about_taiwan', 5, { top: '40%', left: '30%' })
        .to('.about_taiwan', 3, { top: '40%', left: '30%' })
        // 屏東
        .to('.about_taiwan', 5, { top: '-125%', left: '10%' })
        .to('.about_taiwan', 3, { top: '-125%', left: '10%' })
        // 台東
        .to('.about_taiwan', 5, { top: '-30%', left: '-30vw' })
        .to('.about_taiwan', 5, { top: '-30%', left: '-30vw' })

        .to('.about_taiwan', 2, { top: '50%', left: '0%' })

        .to('.about_taiwan', 5, { scale: '1', top: '0%', left: '0%' })
        .to('.about_taiwan', 2, { scale: '1', top: '0%', left: '0%' })
        .to('.about_taiwan', 3, { opacity: '0' })
        .to('.about_taiwan_end', 0, { zIndex: '10' })

    new ScrollMagic.Scene({
        triggerElement: '#keypoint2',
        triggerHook: 0,
        duration: '1000%',
    }).setPin('#about_scene2').setTween(stickyMap).addIndicators().addTo(controller);
    // =======================================================================
    navbar();
    popUpShow()
})

function navbar() {
    var scrolltop = new Array();
    var index = 0;
    scrolltop[0] = 0;
    $(document).scroll(function () {
        index++;
        scrolltop[index] = $(document).scrollTop();
        if (scrolltop[index] > scrolltop[index - 1]) {
            $('.navbar').fadeOut()
        } else {
            $('.navbar').fadeIn()
        };
    })
}

function scroll() {
    $(document).on('scroll resize', function () {
        $('.about_street').css({
            width: '100%',
            height: '100%',
        })
    })
}

//滑鼠滾動判斷navbar出現/消失
function popUpShow() {
    var scrolltop = new Array();
    var index = 0;
    let winHeight = $(window).height();
    scrolltop[0] = 0;


    $(document).scroll(function () {
        index++;
        scrolltop[index] = $(document).scrollTop();
        let indexHeight = (scrolltop[index] / winHeight).toFixed(2)
        console.log(indexHeight);

        if (scrolltop[index] > scrolltop[index - 1]) {
            // console.log(scrolltop[index].toFixed(0));
        } else {
            // console.log(scrolltop[index].toFixed(0));
        };

        //介紹一
        if (indexHeight > .75 && indexHeight < 1.85) {
            $('.about_history').fadeIn();
        } else {
            $('.about_history').fadeOut();
        }

        //介紹二
        if (indexHeight > 2.3 && indexHeight < 3.4) {
            $('.about_brand').fadeIn();
        } else {
            $('.about_brand').fadeOut();
        }

        //小農一
        if (indexHeight > 7.25 && indexHeight < 8.25) {
            $('.about_place1').fadeIn();
        } else {
            $('.about_place1').fadeOut();
        }

        //小農二
        if (indexHeight > 9.04 && indexHeight < 10.04) {
            $('.about_place2').fadeIn();
        } else {
            $('.about_place2').fadeOut();
        }

        //小農三
        if (indexHeight > 11 && indexHeight < 11.6) {
            $('.about_place3').fadeIn();
        } else {
            $('.about_place3').fadeOut();
        }

        //小農四
        if (indexHeight > 12.6 && indexHeight < 13.6) {
            $('.about_place4').fadeIn();
        } else {
            $('.about_place4').fadeOut();
        }

    })
}