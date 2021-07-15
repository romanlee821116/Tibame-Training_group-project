$(function () {

    
    Vue.component('place0', {
        data(){
            return{
                content:'place1'
            }
        },
        methods: {
            close(){
                $('.about_farmerDetail_bg').fadeOut();
                this.$emit('BoxType',this.content);
                console.log('第一個組件content回傳'+this.content);
            }
        },
        template:`
        <div class='about_farmerDetail_bg'>
            <div class='about_farmerDetail_box'>
                <img src="../images/about/farmer1.jpg" alt="">
                <div class='about_farmerDetail_title'>
                    <h2>讓老鷹再次高飛</h2>
                    <h3>屏東 - 老鷹紅豆</h3>
                    <p>友善老鷹農法農友 - 林清源</p>
                </div> 
                <i class="fas fa-times" @click='close'></i>
                <div class='about_farmerDetail_text'>
                    2013年，屏科大鳥類研究人員發現少數農友使用農藥以防鳥害，老鷹誤食被毒死的小鳥而間接死亡。在研究團隊努力下，農友採用機械波種、自然熟成、安全管理方式種植，以保護台灣老鷹生態及土地環境的永續健全，並在2016以「老鷹紅豆」品牌成為東港鎮農會銷售產品之一。<br>
                    <br>
                    小春堂對此理念深感認同，我們提供的所有紅豆物料皆購自於東港鎮農會之老鷹紅豆，在提供優良產品的同時也為台灣的土地盡一份心力。
                </div>
            </div>
        </div>
        `,
    })

    Vue.component('place1', {
        methods: {
            close(){
                $('.about_farmerDetail_bg').fadeOut();
            }
        },
        template:`
        <div class='about_farmerDetail_bg'>
            <div class='about_farmerDetail_box'>
                <img src="../images/about/farmer2.jpg" alt="">
                <div class='about_farmerDetail_title'>
                    <h2>這是一棵樹</h2>
                    <h3>屏東 - 老鷹紅豆</h3>
                    <p>友善老鷹農法農友 - 林清源</p>
                </div> 
                <i class="fas fa-times" @click='close'></i>
                <div class='about_farmerDetail_text'>
                    這是一棵樹這是一棵樹這是一棵樹這是一棵樹這是一棵樹這是一棵樹
                </div>
            </div>
        </div>
        `,
    })


    new Vue({
        el: '#wrap',
        data: {
            people_list: [
                { src: '../images/about/people1.png', class: 'about_people1 people' },
                { src: '../images/about/people2.png', class: 'about_people2 people' },
                { src: '../images/about/people3.png', class: 'about_people3 people' },
                { src: '../images/about/people4.png', class: 'about_people4 people' },
                { src: '../images/about/people5.png', class: 'about_people5 people' },
                { src: '../images/about/people6.png', class: 'about_people6 people' },
            ],
            farmer_list: [
                {class:'custom_farmer_straw'},
                {class:'custom_farmer_mango'},
                {class:'custom_farmer_rebbean'},
                {class:'custom_farmer_rice'},
            ],
            taiwan_list: [
                {place:'taiwanPlace about_place1', country:'苗栗', title:'台灣與歐盟的雙重標章 - 吉光有機草莓園', content:'小春堂所提供的草莓物料來源皆來自吉光有機農園，我們相信，讓消費者、栽種農民雙方都得到充分保障下才能提供最好的商品',fruit:'about_card1'},
                {place:'taiwanPlace about_place2', country:'台南', title:'台灣第一家有機芒果農 - 瑞林有機農場', content:'小春堂與瑞林有機農場合作，同樣秉持所有商品不額外添加任何化學物料，提供最天然的物料給每位消費者。',fruit:'about_card2'},
                {place:'taiwanPlace about_place3', country:'屏東', title:'讓老鷹再次高飛 - 老鷹紅豆', content:'小春堂提供的所有紅豆物料皆購自於東港鎮農會之老鷹紅豆，在提供優良產品的同時也為台灣的土地盡一份心力。',fruit:'about_card3'},
                {place:'taiwanPlace about_place4', country:'台東', title:'全國稻米三冠王 - 池上米', content:'小春堂選用池上鄉農會的三冠米，以最好的品質，打造最美味的產品',fruit:'about_card4'},
            ],
            content: 'place0',            
        },
        methods: {
            showBox: function(index){
                console.log(index); 
                // let next = `place${index+1}`              
                // this.content= next;
                $('.about_farmerDetail_bg').fadeIn()                
                console.log(this.content);
            },
            changeBox(item){
                console.log('changeBox');
                this.content=item;
            }
        },
    })


    //=======================jquery=======================
    

    var controller = new ScrollMagic.Controller();
    var sticky = new TimelineMax();
    sticky.to('.about_street', 0, { scale: '1%',top: '-0px' })
        .to('.about_street', 2, { scale: '2%',top: '-100px' })
        .to('.about_street', 2, { scale: '3%',top: '-200px' })
        .to('.about_street', 1.5, { opacity: '0' })
        
    
    new ScrollMagic.Scene({
        triggerElement: '#keypoint1',
        triggerHook: 0,
        duration: '500%',
    }).setPin('#scene1').setTween(sticky).addIndicators().addTo(controller);
// ==========================================================================
    var stickyMap = new TimelineMax();
    stickyMap.to('.about_taiwan', 0, { scale: '1%' })
            .to('.about_island',2, {scaleY: '1'})
            .to('.about_taiwan', 5, { scale: '3.5%', top: '120%', left: '-20%'}) 
            .to('.about_taiwan', 4, { scale: '3.5%', top: '120%', left: '-20%'})  
            .to('.about_island', 5, {top: '-20%', left:'15%'}) 
            .to('.about_island', 3, {top: '-20%', left:'15%'})   
            .to('.about_island', 5, {top: '-60%', left:'10%'}) 
            .to('.about_island', 3, {top: '-60%', left:'10%'}) 
            .to('.about_island', 5, {top: '-40%', left:'0%'})
            .to('.about_island', 4, {top: '-40%', left:'0%'})
            .to('.about_island', 2, {top: '0%', left:'0%'})
            .to('.about_taiwan', 5, { scale: '1', top: '0%', left: '0%'}) 
            .to('.about_taiwan', 3, { opacity: '0' }) 
        
    
    new ScrollMagic.Scene({
        triggerElement: '#keypoint2',
        triggerHook: 0,
        duration: '1000%',
    }).setPin('#scene2').setTween(stickyMap).addIndicators().addTo(controller);


































})