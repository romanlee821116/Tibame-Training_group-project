$(function(){   

    Vue.component('checkBox',{
        template: `
        <div class='custom_popUp_template'>
            <div class="custom_popUp">
                <img src="../images/customized/customized_step_a.png" alt="">
                <h2>請選擇商品</h2>
                <p>禮盒內容尚有空格</p>
                <div>
                    <a href="#"class='custom_btn custom_popUp_close'>返回</a>            
                </div>
            </div>
        </div> 
        `,
    });
    
    Vue.component('checkCard',{
        methods: {
            close(){
                $('.custom_popUp_template').fadeOut();
                $('.custom_popUp_bg').fadeOut();
            }
        },
        template: `
        <div class='custom_popUp_template'>
            <div class="custom_popUp">
                <img src="../images/customized/customized_step_a.png" alt="">
                <h2>卡片尚未選擇</h2>
                <p>請選擇卡片種類</p>
                <div>
                    <a href="#"class='custom_btn custom_popUp_close' @click='close'>返回</a>            
                </div>
            </div>
        </div> 
        `,
    });

    let vm = new Vue({
        el: '#cus_wrap',
        data: {           
            boxImg: [
                {src: '../images/customized/four_boxBodyIn.png', class: 'box1',txt: '四格小資組合', price: '$480'},
                {src: '../images/customized/six_boxBodyIn.png', class: 'box2',txt: '六格家庭組合', price: '$680'},
                {src: '../images/customized/nine_boxBodyIn.png', class: 'box3',txt: '九格派對組合', price: '$980'}
            ],

            category: [
                {type: '所有商品', class:'cus_categoryBtn categoryChoose', id: '0'}, 
                {type: '銅鑼燒', class:'cus_categoryBtn', id: '1'}, 
                {type: '日式餅乾', class:'cus_categoryBtn', id: '2'}, 
                {type: '生菓子', class:'cus_categoryBtn', id: '3'}, 
                {type: '鯛魚燒', class:'cus_categoryBtn', id: '4'},
                {type: '羊羹', class:'cus_categoryBtn', id: '5'},
                {type: '大福', class:'cus_categoryBtn', id: '6'},
                {type: '最中', class:'cus_categoryBtn', id: '7'},
            ],

            cus_item: [
                {txt: '栗子大福',class:'1 cus-item', img: '../images/shopping_list/cuslist_daifuku_chestnut.png', type:'6', id:'38' },
                {txt: '巧克力大福',class:'2 cus-item', img: '../images/shopping_list/cuslist_daifuku_chocolate.png', type:'6', id:'32' },
                {txt: '奶油大福',class:'3 cus-item', img: '../images/shopping_list/cuslist_daifuku_cream.png', type:'6', id:'31' },
                {txt: '芒果大福',class:'4 cus-item', img: '../images/shopping_list/cuslist_daifuku_mango.png', type:'6', id:'34' },
                {txt: '抹茶大福',class:'5 cus-item', img: '../images/shopping_list/cuslist_daifuku_matcha.png', type:'6', id:'35' },
                {txt: '柳橙大福',class:'6 cus-item', img: '../images/shopping_list/cuslist_daifuku_oranges.png', type:'6', id:'36' },
                {txt: '布丁大福',class:'7 cus-item', img: '../images/shopping_list/cuslist_daifuku_pudding.png', type:'6', id:'33' },
                {txt: '紅豆大福',class:'8 cus-item', img: '../images/shopping_list/cuslist_daifuku_redBean.png', type:'6', id:'37' },
                {txt: '毛豆大福',class:'9 cus-item', img: '../images/shopping_list/cuslist_daifuku_soybeans.png', type:'6', id:'30' },
                {txt: '草莓大福',class:'10 cus-item', img: '../images/shopping_list/cuslist_daifuku_strawberry.png', type:'6', id:'39' },
                {txt: '栗子銅鑼燒',class:'11 cus-item', img: '../images/shopping_list/cuslist_dorayaki_chestnut.png', type:'1', id:'7' },
                {txt: '巧克力銅鑼燒',class:'12 cus-item', img: '../images/shopping_list/cuslist_dorayaki_chocolate.png', type:'1', id:'4' },
                {txt: '抹茶銅鑼燒',class:'13 cus-item', img: '../images/shopping_list/cuslist_dorayaki_matcha.png', type:'1', id:'3' },
                {txt: '布丁銅鑼燒',class:'14 cus-item', img: '../images/shopping_list/cuslist_dorayaki_pudding.png', type:'1', id:'5' },
                {txt: '紅豆銅鑼燒',class:'15 cus-item', img: '../images/shopping_list/cuslist_dorayaki_redBean.png', type:'1', id:'6' },
                {txt: '草莓銅鑼燒',class:'16 cus-item', img: '../images/shopping_list/cuslist_dorayaki_strawberry.png', type:'1', id:'1' },
                {txt: '芋泥銅鑼燒',class:'17 cus-item', img: '../images/shopping_list/cuslist_dorayaki_taro.png', type:'1', id:'2' },
                {txt: '生菓子菊',class:'18 cus-item', img: '../images/shopping_list/cuslist_namagashi_chrysanthemum.png', type:'3', id:'17' },
                {txt: '生菓子花火',class:'19 cus-item', img: '../images/shopping_list/cuslist_namagashi_firework.png', type:'3', id:'13' },
                {txt: '生菓子紫陽花',class:'19 cus-item', img: '../images/shopping_list/cuslist_namagashi_hydrangea.png', type:'3', id:'16' },
                {txt: '生菓子桔梗',class:'19 cus-item', img: '../images/shopping_list/cuslist_namagashi_kikyo.png', type:'3', id:'14' },
                {txt: '生菓子寒牡丹',class:'19 cus-item', img: '../images/shopping_list/cuslist_namagashi_peony.png', type:'3', id:'15' },
                {txt: '生菓子櫻',class:'19 cus-item', img: '../images/shopping_list/cuslist_namagashi_sakura.png', type:'3', id:'18' },
                {txt: '巧克力最中',class:'19 cus-item', img: '../images/shopping_list/cuslist_monaka_chocolate.png', type:'7', id:'41' },
                {txt: '抹茶最中',class:'19 cus-item', img: '../images/shopping_list/cuslist_monaka_matcha.png', type:'7', id:'42' },
                {txt: '牛奶最中',class:'19 cus-item', img: '../images/shopping_list/cuslist_monaka_milk.png', type:'7', id:'40' },
                {txt: '花生最中',class:'19 cus-item', img: '../images/shopping_list/cuslist_monaka_peanut.png', type:'7', id:'43' },
                {txt: '紅豆最中',class:'19 cus-item', img: '../images/shopping_list/cuslist_monaka_redBean.png', type:'7', id:'44' },
                {txt: '奶油鯛魚燒',class:'19 cus-item', img: '../images/shopping_list/cuslist_taiyaki_cream.png', type:'4', id:'19' },
                {txt: '綠豆鯛魚燒',class:'19 cus-item', img: '../images/shopping_list/cuslist_taiyaki_greenBean.png', type:'4', id:'22' },
                {txt: '抹茶鯛魚燒',class:'19 cus-item', img: '../images/shopping_list/cuslist_taiyaki_matcha.png', type:'4', id:'20' },
                {txt: '紅豆鯛魚燒',class:'19 cus-item', img: '../images/shopping_list/cuslist_taiyaki_redBean.png', type:'4', id:'21' },
                {txt: '櫻花鯛魚燒',class:'19 cus-item', img: '../images/shopping_list/cuslist_taiyaki_sakura.png', type:'4', id:'23' },
                {txt: '起司羊羹',class:'19 cus-item', img: '../images/shopping_list/cuslist_yokan_cheese.png', type:'5', id:'26' },
                {txt: '巧克力羊羹',class:'19 cus-item', img: '../images/shopping_list/cuslist_yokan_chocolate.png', type:'5', id:'25' },
                {txt: '無花果羊羹',class:'19 cus-item', img: '../images/shopping_list/cuslist_yokan_fig.png', type:'5', id:'28' },
                {txt: '柚子羊羹',class:'19 cus-item', img: '../images/shopping_list/cuslist_yokan_grapefruit.png', type:'5', id:'24' },
                {txt: '開心果羊羹',class:'19 cus-item', img: '../images/shopping_list/cuslist_yokan_pistachio.png', type:'5', id:'29' },
                {txt: '草莓羊羹',class:'19 cus-item', img: '../images/shopping_list/cuslist_yokan_strawberry.png', type:'5', id:'27' },
                {txt: '翡冷翠杏仁脆餅',class:'19 cus-item', img: '../images/shopping_list/cuslist_sweet_almond.png', type:'2', id:'9' },
                {txt: '費南雪',class:'19 cus-item', img: '../images/shopping_list/cuslist_sweet_fernance.png', type:'2', id:'10' },
                {txt: '國王餅',class:'19 cus-item', img: '../images/shopping_list/cuslist_sweet_galette.png', type:'2', id:'12' },
                {txt: '檸檬沙貝蕾',class:'19 cus-item', img: '../images/shopping_list/cuslist_sweet_lemon.png', type:'2', id:'11' },
                {txt: '瑪德蓮',class:'19 cus-item', img: '../images/shopping_list/cuslist_sweet_madeleine.png', type:'2', id:'8' },
            ],
            bagCard: [
                {src: '../images/customized/card_back02.png', class:'choose-card card2', id:'2'},
                {src: '../images/customized/card_back03.png', class:'choose-card card3', id:'3'},
                {src: '../images/customized/card_back01.png', class:'choose-card card1', id:'1'},
                {src: '../images/customized/bag.png', class:'choose-bag', id:'0'},
            ],            
            iconList: [
                {src: '../images/customized/sticker01.png', id:'1'},
                {src: '../images/customized/sticker02.png', id:'2'},
                {src: '../images/customized/sticker03.png', id:'3'},
                {src: '../images/customized/sticker04.png', id:'4'},
                {src: '../images/customized/sticker05.png', id:'5'},
                {src: '../images/customized/sticker06.png', id:'6'},
                {src: '../images/customized/sticker07.png', id:'7'},
                {src: '../images/customized/sticker08.png', id:'8'},
                {src: '../images/customized/sticker09.png', id:'9'},
                {src: '../images/customized/sticker10.png', id:'10'},
                {src: '../images/customized/sticker11.png', id:'11'},
                {src: '../images/customized/sticker13.png', id:'12'},
            ],                 
            message: '',
            content: 'checkBox',
        },
        methods: {                               
            //第一步到第二步
            p1_to_p2(){
                //若有選擇格子才執行
                if($('.selected').length>0){
                    //第一屏收合
                    $('.cus_step1').animate({
                        height: '0vh',
                    },800);
                    // 物件消失
                    $('.cus_step1 > div').fadeOut();
                    //body overflow打開
                    $('body').css('overflowY','auto');
                    //節點替換
                    $('.custom_sideNode_node:nth-child(3)').addClass('before_node');
                    $('.custom_sideNode_node:nth-child(4)').addClass('current_node');
                    $('.custom_sideNode_frontBar').css('height','33%');

                };
                //第一格格子亮
                $('.custom_gridBox:nth-child(1)').addClass('choosenBox');
            },
            //第二步回第一步
            p2_to_p1(){
                let winWidth = $(window).width();
                $('.custom_btn_p1Next').fadeOut();
                $('.cus_step1-box > div').css('opacity','1');
                //把下一步按鈕的select取消
                // $('.custom_btn').removeClass('selected');
                $('.cus_box').removeClass('selected');
                //第一屏展開
                $('.cus_step1').animate({
                    height: '100vh',
                },800);
                //物件回來
                $('.cus_step1_txt').fadeIn();
                $('.cus_step1-box').fadeIn().css('display','grid');
                if(winWidth <=575){
                    $('.cus_step1-box').fadeIn().css('display','flex');
                }
                //body overflow關起來
                $('body').css('overflowY','hidden');
                 //節點替換
                $('.custom_sideNode_node:nth-child(3)').removeClass('before_node');
                $('.custom_sideNode_node:nth-child(4)').removeClass('current_node');
                $('.custom_sideNode_frontBar').css('height','0%');
            },
            countWord(){
                let curLength = $("#custom_cardText").val().length;
                if (curLength > 80) {
                    var num = $("#custom_cardText").val().substr(0, 80);
                    $("#custom_cardText").val(num);
                    alert("超過字數限制，多出的字將被移除！");
                } else {
                    $("#textCount").text(80 - $("#custom_cardText").val().length);
                }
            },
            
        }, 
    });
    //========================================jquery========================================
    var boxSize = 0;
    // var customized= {
    //     "boxType":"",
    //     "productId":[],
    //     "price":[],
    //     "card":"",
    //     "cardType":"",
    //     "cardContent": "",
    //     "iconType":[],
    //     "time": new Date(),        
    // };
    var customized= {
        "id": new Date(),
        "boxType":"",
        "itemName": '',
        "productId":[],
        "price": '',
        "quantity": 1,
        "detail": [],
        "detail_Quantity": [],
        "card":"",
        "cardType":"",
        "cardContent": "",
        "iconType":[],
        "status": false, 
        'img': '../images/cart/customized_box.png',      
    };

    //判斷選到四格六格九格
    $('.cus_step1-box > div').click(function(e){
        $('.custom_btn_p1Next').fadeIn();
        $('.cus_step1-box > div').css('opacity','.5');
        $(this).css('opacity','1');
        $('.cus_box').removeClass('selected');
        //選擇盒子尺寸
            let boxType = $(this).find('img').attr('class');
            if(boxType =='box1'){
                boxSize = 4;
                $('.cus_box').css('display','none');
                $('.four_grid').css('display', 'grid').addClass('selected');
                customized['itemName'] = '四格小資組合';
            }else if(boxType=='box2'){
                boxSize = 6;
                $('.cus_box').css('display','none');
                $('.six_grid').css('display', 'grid').addClass('selected');
                customized['itemName'] = '六格家庭組合';
            }else{
                boxSize = 9;
                $('.cus_box').css('display','none');
                $('.nine_grid').css('display', 'grid').addClass('selected');
                customized['itemName'] = '九格派對組合';
            }        
    })

//=======================第二步=======================
    $('.custom_gridBox').click(function(){
        $('.custom_gridBox').removeClass('choosenBox');
        if($('.choosenBox').length < 1){
        $(this).toggleClass('choosenBox');
        };
    })    
    //hover到客製產品出現詳細資訊
    $('.cus-item').mouseover(function(e){
        $(this).find('.cus_item_img').css('zIndex', '2');
        $(this).find('.cus_item_txt').css({
            display: 'block',
            zIndex: '1',
        });
    }).mouseleave(function(e){
        $(this).find('.cus_item_img').css('zIndex', '0');
        $(this).find('.cus_item_txt').css({
            display: 'none',
            zIndex: '0'
        });
    });
    //商品分類
    $('.cus_categoryBtn').click(function(e){
        e.preventDefault();
        $('.cus_categoryBtn').removeClass('categoryChoose');
        $(this).addClass('categoryChoose');
        let this_type = $(this).attr('data-cat');
        let show_item = `.cus-item[data-itemtype=${this_type}]`;
        $('.cus-item').hide();
        $(show_item).show();
        if(this_type==0){
            $('.cus-item').show();
        }

        console.log(this_type);
        e.preventDefault();
    })
    //商品添加到格子中
    $('.fa-plus').click(function(e){
        let itemPic = $(this).closest('div').prev('div').find('img').attr('src');
        let picSrc = itemPic.replace('cuslist','cusbox');
        let itemTxt = $(this).closest('div').find('p').text();
        let itemId = $(this).closest('div').prev('div').find('img').attr('data-id');
        $('.selected .choosenBox').find('.selected_item').attr('src', picSrc).addClass('haveItem');
        $('.selected .choosenBox').find('.selected_item').attr('data-id', itemId);
        $('.selected .choosenBox').find('.selected_item').attr('data-itemName', itemTxt);
        e.preventDefault(); 
        //顯示提示
        $('.custom_reminder > span').text(`${boxSize-$('.haveItem').length}`)
        $('.custom_reminder').fadeIn();
        setTimeout(function(){
            $('.custom_reminder').fadeOut();
        },1000);
        //自動將選到的格子換成下一格
        let currentBox = parseInt($('.selected .choosenBox').attr('box-id'));        
        let nextBox = `.selected .custom_gridBox[box-id=${currentBox+1}]`
        $('.custom_gridBox').removeClass('choosenBox');
        $(nextBox).addClass('choosenBox');
        if(currentBox == boxSize){
            $('html,body').animate({ scrollTop: 0 },1000); 
            // currentBox = 0;
            $('.selected .custom_gridBox').addClass('choosenBox');  
            $('.custom_reminder').remove();          
        }
    })


//==================選擇內容下一步==================
    $('.s2_nextstep').click(function(){
        // console.log($('.selected .haveItem').length);
        customized['boxType'] = $('.selected .haveItem').length;
        $('.cus_reminderWord').hide();
        if($('.selected .haveItem').length==boxSize){
            //商品清單出現
            $('.custom_itemConfirm_List').fadeIn();
            //隱藏產品
            $('.cus_product_contianer').fadeOut();
            //隱藏分類
            $('.cus_product_category').fadeOut();
            //格子置中
            $('.cus_box').css({
                transform: 'translate(0%, 30px)',
                transition: '1s',
            });
            //商品全亮
            $('.selected .custom_gridBox').addClass('choosenBox');
            $('.choosenBox img').css('animation','none');
            //確認按鈕出現
            $('.cus_confirm_btn').css('display', 'flex');
            //刪除原本上下一步按鈕
            $('.s2_prestep').css('display', 'none');
            $('.s2_nextstep').css('display', 'none');
            // $('.cus_step2_txt>h3').css('display','none');
            $('.cus_step2_txt>h2').text('確認禮盒內容');
            //螢幕限高
            $('body').css({
                // overflowY: 'hidden',
            })
            //在清單秀出禮盒內容            
            // let total_box = $('.selected  img:nth-child(even)')
            let total_box = $('.haveItem');
            console.log(boxSize);
            if(boxSize==4){
                $('.custom_itemConfirm_List > h2').html('四格小資組合 &nbsp $480');
                customized['price']=480;
            }else if(boxSize==6){
                $('.custom_itemConfirm_List > h2').html('六格家庭組合 &nbsp $680');
                customized['price']=680;
            }else{
                $('.custom_itemConfirm_List > h2').html('九格家庭組合 &nbsp $980');
                customized['price']=980;
            }
            //把資料帶入表格中
            let item_array=[]; //商品陣列
            let txt = '';
            let content={
                'name':[],
                'url': [],
                'num': [],
            }
            $(total_box).each(function(){
                let img_url = $(this).attr('src');
                let item_name = $(this).attr('data-itemName');
                
                //若當前這項產品沒有在item_list中的話就加上去
                if(item_array.indexOf(item_name)==-1){
                    item_array.push(item_name);
                    content['name'].push(item_name);
                    content['url'].push(img_url);
                    content['num'].push('1');
                }else{
                    
                    let index = content['name'].indexOf(item_name);
                    let this_num = content['num'][index];
                    content['num'][index] = parseInt(this_num) + 1;
                }
            })
            console.log(content);
            let content_length = content['name'].length;
            for(let i=0; i<content_length; i++){
                itemName = content['name'][i];
                imgUrl = content['url'][i];
                itemNum = content['num'][i];
                let html =`
                    <div data-id=> 
                        <img src="${imgUrl}" alt="">
                        <p>${itemName}</p>
                        <p>x ${itemNum}</p>
                    </div>
                    `;
                    txt+=html;

            }
            $('.custom_itemConfirm_List').append(txt);
            customized['detail'] = content['name'];
            customized['detail_Quantity'] = content['num'];
            //節點替換
            $('.custom_sideNode_node:nth-child(4)').addClass('before_node');
            $('.custom_sideNode_node:nth-child(5)').addClass('current_node');
            $('.custom_sideNode_frontBar').css('height','66%');
        }else{
            $('.custom_popUp').fadeIn();
            $('.custom_popUp_bg').fadeIn();
        }    
    })
//==================內容確認返回上一步==================
    $('.cus_confirm_prestep').click(function(){
        $('.cus_reminderWord').show();
        $('.choosenBox img').css('animation','flash 3s linear infinite');
        //刪除清單
        $('.custom_itemConfirm_List>div').remove();
        //顯示產品
        $('.cus_product_contianer').fadeIn();
        //顯示分類
        $('.cus_product_category').fadeIn();
        //格子回原位
        $('.cus_box').css({
            transform: 'translate(0%, 0%)',
            transition: '1s',
        });
        //綁定變暗第一個亮
        $('.custom_gridBox').removeClass('choosenBox');
        $('.custom_gridBox:nth-child(1)').addClass('choosenBox');  
        //確認按鈕消失
        $('.cus_confirm_btn').css('display', 'none');
        //還原原本上下一步按鈕
        $('.s2_prestep').css('display', 'block');
        $('.s2_nextstep').css('display', 'block');
        $('.cus_step2_txt>h3').text('第二步');
        $('.cus_step2_txt>h2').text('選擇禮盒內容');
        //取消螢幕限高
        $('.cus_step1').animate({
            height: '0vh',
        },800);
        $('.cus_step1>div').css({
            display: 'none',
        });
        $('body').css({
            overflowY: 'auto',
        })

    })
//==================內容確認下一步==================
    $('.cus_confirm_nextstep').click(function(){  
        for(i=0; i<boxSize; i++){
            let item= document.getElementsByClassName('haveItem')[i];
            customized['productId'].push(item.getAttribute('data-id'));
        }
        //固定Y軸
        $('body').css('overflow','hidden');    
        //清單消失
        $('.custom_itemConfirm_List').fadeOut();
         //卡片袋子出現
        $('.cus_bag_card').fadeIn();
        //禮盒變小
        $('.cus_box').css({
            width: '130px',
            height: 'auto',
        });
        let boxTop = $('.selected').offset().top;
        
        console.log(boxTop);
        //蓋子掉下來
        $('.cus_giftbox').animate({
            top: `${boxTop-5}px`,
            opacity: '1',
        },1000);
        //文字隱藏
        $('.cus_step2_txt').css('opacity','0');
        //文字更換
        $('.cus_step2_txt>h2').text('是否製作禮物卡?');
        $('.cus_step2_txt>h3').text('第三步');
        // 第三步文字先隱藏
        $('.cus_step2_txt>h3').css('opacity','0');
        //按鈕隱藏
        $('.cus_confirm_btn').fadeOut();
        
        //兩秒後觸發問要不要禮卡
        setTimeout(function(){            
            //盒子下降後消失
            $('.cus_box').css({
                display: 'none',
            });
            //蓋子下降
            $('.cus_giftbox').css({
                top: '50%',
                transform: 'translate(-50%, -50%)',
                transition: '.5s',
            });
            //問要不要做卡片的title出現
            $('.cus_step2_txt').css('opacity','1');
            //問要不要做卡片的按鈕出現
            $('.cus_giftcard_btn').css('display','flex').fadeIn();
        },1500);
        //節點替換
        $('.custom_sideNode_node:nth-child(5)').addClass('before_node');
        $('.custom_sideNode_node:nth-child(6)').addClass('current_node');
        $('.custom_sideNode_frontBar').css('height','100%');
    });
    //hover不需要(結帳)
    $('.cus_giftcard_stop').stop().mouseenter(function(){
        $('.choose-bag').fadeIn();
        $('.cus_bag_card').css('bottom','-5%');
    }).mouseleave(function(){
        $('.choose-bag').fadeOut();
        $('.cus_bag_card').css('bottom','-100%');
    })
    //hover需要(卡片)
    $('.cus_giftcard_nextstep').stop().mouseenter(function(){
        $('.choose-card').fadeIn();
        $('.cus_bag_card').css('bottom','-5%');
    }).mouseleave(function(){
        $('.choose-card').fadeOut();
        $('.cus_bag_card').css('bottom','-100%');
    })
// ==================是否製作卡片(結帳)==================
    $('.cus_giftcard_stop').click(function(){
        customized['card']=false;
        let boxTop = parseInt($('.selected').offset().top);
        let bagUp = parseInt($(window).height())-boxTop;
        //取消原本按鈕的hover事件
        $('.cus_giftcard_nextstep').unbind('mouseenter mouseleave');
        $('.cus_giftcard_stop').unbind('mouseenter mouseleave');
        // 標題消失
        $('.cus_step2_txt').fadeOut();
        $('.cus_giftcard_btn').fadeOut();
        $('.choose-bag').fadeIn();
        $('.cus_bag_card').css({
            bottom: '52%',
            transform: 'translate(-50%, 0%)',
            transition: '1s',
        });
        setTimeout(function(){
            $('.custom_cart').css('display','flex').fadeIn();            
        },2300);
        //=================================== local storage ======================================================   
        if(localStorage['customized_List'] == null){
            let customized_newArray=[];
            customized_newArray.push(customized);
            localStorage['customized_List'] = [];
            localStorage.setItem('customized_List', JSON.stringify(customized_newArray));
        }else{
            let customized_total = JSON.parse(localStorage.getItem('customized_List'));
            console.log(customized_total);
            customized_total.push(customized); 
            localStorage.setItem('customized_List', JSON.stringify(customized_total));           
        };
    })


//==================是否製作卡片(需要卡片)==================
    $('.cus_giftcard_nextstep').click(function(){
        customized['card']=true;
        let winWidth = $(window).width();
        // 改title文案
        $('.cus_step2_txt>h2').text('選擇禮物卡樣式');
        //第三步文字出現
        $('.cus_step2_txt>h3').css('opacity','1');
        //蓋子透明度變低
        $('.cus_giftbox').css('opacity','.2');
        //取消原本按鈕的hover事件
        $('.cus_giftcard_nextstep').unbind('mouseenter mouseleave');
        $('.cus_giftcard_stop').unbind('mouseenter mouseleave');
        //選擇按鈕消失
        $('.cus_giftcard_btn').fadeOut();
        //卡片進入
        $('.choose-card').fadeIn();
        // $('.cus_bag_card').css('bottom','50%');

        //卡片移動到中間打開
        if(winWidth<575){
            $('.cus_bag_card').css('bottom','50%');
            $('.card2').animate({
                top: '120%', 
                left: '0px',              
            }, 1000);
            $('.card3').animate({
                top: '240%',
                left: '0px',
            }, 1000);
        }else{  
            $('.cus_bag_card').css('bottom','45%');          
            $('.card2').animate({
                top: '120%',
                // left: '-300px',
                left: '-60%'
            }, 1000);
            $('.card3').animate({
                top: '120%',
                left: '60%'
            }, 1000);
        }
        
        //選擇卡片按鈕出現
        setTimeout(function(){
            $('.custom_chooseCard_btn').css('display','flex');
        },1500);   
    })
//==================卡片返回上一步==================
    $('.custom_chooseCard_prep').click(function(){
        $('.choosenCard').css('opacity','1');
        // title文案還原
        $('.cus_step2_txt>h2').text('是否製作禮物卡?');
        //第三步文字消失
        $('.cus_step2_txt>h3').css('opacity','0');
        //蓋子透明度還原
        $('.cus_giftbox').css('opacity','1');
        //綁定原本按鈕的hover事件
        $('.cus_giftcard_nextstep').bind('mouseenter mouseleave');
        $('.cus_giftcard_stop').bind('mouseenter mouseleave');
        //hover不需要(結帳)
        $('.cus_giftcard_stop').mouseenter(function(){
            $('.choose-bag').fadeIn();
            $('.cus_bag_card').css('bottom','-5%');
        }).mouseleave(function(){
            $('.choose-bag').fadeOut();
            $('.cus_bag_card').css('bottom','-100%');
        })
        //hover需要(卡片)
        $('.cus_giftcard_nextstep').mouseenter(function(){
            $('.choose-card').fadeIn();
            $('.cus_bag_card').css('bottom','-5%');
        }).mouseleave(function(){
            $('.choose-card').fadeOut();
            $('.cus_bag_card').css('bottom','-100%');
        })
        //選擇按鈕出現
        $('.cus_giftcard_btn').fadeIn();
        //卡片淡出
        $('.choose-card').fadeOut();
        $('.cus_bag_card').animate({bottom:'-100%'}, 500);
        //卡片校正回歸原味
        $('.card2').animate({
            top: '30px',
            left: '-50px',
        }, 1000);
        $('.card3').animate({
            top: '30px',
            left: '50px',
        }, 1000);
        //選擇卡片按鈕消失
        $('.custom_chooseCard_btn').css('display','none');   
        //textarea消失
        $('.custom_card_textArea').fadeOut();     
    })
    //選擇卡片特效
    $('.choose-card').click(function(){
        $('.choose-card').removeClass('choosenCard');
        $('.choose-card').css('opacity','.5');
        $(this).addClass('choosenCard').css('opacity','1');;        
    })
//==================卡片確認按鈕==================
    $('.custom_chooseCard_next').click(function(){        
        let winWidth = $(window).width();
        if($('.choosenCard').length!=0){
            let cardType = $('.choosenCard').attr('data-cardId');
            customized['cardType']=cardType;
            console.log(cardType);
            if(cardType==1){
                $('.cus_bag_card > pre').css('backgroundColor','#FFF1F4');
            }else if(cardType==2){
                $('.cus_bag_card > pre').css('backgroundColor','#FFF8EB');
            }else{
                $('.cus_bag_card > pre').css('backgroundColor','#EBFFEB');
            }

            // 先取消所有卡片顯示
            $('.cus_bag_card>img').css('display','none');
            //卡片外框置中
            $('.cus_bag_card').css({
                bottom: '40%', 
                transform: 'translate(-50, 50%)',
            });

            //卡片跑回原位
            $('.choosenCard').css({
                display: 'block',
                top: '10px',
                left: '0',
                transition: '.5s',
            });         
            //標題消失，更換標題內容
            setTimeout(function(){            
                $('.cus_step2_txt').fadeOut();            
                $('.custom_chooseCard_btn').fadeOut();
            },1000);
            //標題回歸，卡片左移，填寫欄位出現
            if(winWidth<576){
                setTimeout(function(){
                    $('.cus_step2_txt>h3').text('第四步');
                    $('.cus_step2_txt>h2').text('填寫卡片內容');
                    $('.custom_chooseCard_btn').css('display','flex').fadeIn();
                    $('.cus_step2_txt').fadeIn();
                    $('.custom_card_textArea').fadeIn();
                    $('.cus_bag_card').css({
                        bottom: '60%',
                        left: '50%',
                        width: '250px',
                        height: '140px',
                        transform: 'translate(-50%, 50%)',
                    });
                    $('.choosenCard').css({
                        width:'100%',
                        top: '-10px',                
                    });           
                },1500);
            }else{
                setTimeout(function(){
                    $('.cus_step2_txt>h3').text('第四步');
                    $('.cus_step2_txt>h2').text('填寫卡片內容');
                    $('.custom_chooseCard_btn').css('display','flex').fadeIn();
                    $('.cus_step2_txt').fadeIn();
                    $('.custom_card_textArea').fadeIn();
                    $('.cus_bag_card').css({
                        bottom: '50%',
                        left: '10%',
                        width: '360px',
                        height: '210px',
                        transform: 'translate(0%, 50%)',
                    });
                    $('.choosenCard').css({
                        width:'100%',
                        top: '-10px',                
                    });           
                },1500);
            }
            
            setTimeout(function(){
                $('.choosenCard').css({
                    transform: 'scaleX(-1)',
                    opacity: '0',
                    transition: '2s',
                });
                $('.cus_bag_card > pre').css({
                    opacity: '1',
                    transform: 'scaleX(1)',
                    transition: '2s',
                })
            },1800)

            //禮卡確認按鈕消失
            $('.custom_chooseCard_btn').fadeOut();
            //卡片內容按鈕出現
            $('.cus-cardcontent-btn').css('display','flex').fadeIn();
        }else{
            $('.custom_popUp').fadeIn();
            $('.custom_popUp_bg').fadeIn();
        }
    })
// ==================第四步 : 填寫卡片內容上一步==================
    $('.cus_cardcontent_prestep').click(function(){
        let winWidth = $(window).width();
        // 卡片出現
        $('.choose-card').removeClass('choosenCard');
        $('.choose-card').css({display:'block', opacity: '1', transition:'.5s'});
        //卡片外框置中
        if(winWidth<575){
            $('.cus_bag_card').css({
                width: '240px',
                height: '140px',
                bottom: '50%',
                left: '50%',
                transform: 'translate(-50%, 0%)',
            });
        }else{
            $('.cus_bag_card').css({
                // width: '345px',
                // height: '210px',
                width: '280px',
                height: '160px',
                bottom: '45%',
                left: '50%',
                transform: 'translate(-50%, 0%)',
            });
        }
        
         // 改title文案
        $('.cus_step2_txt>h2').text('選擇禮物卡樣式');
        $('.cus_step2_txt>h3').text('第四步');
         //按鈕更換
        $('.cus-cardcontent-btn').fadeOut();
        $('.custom_chooseCard_btn').css('display','flex').fadeIn();
         //pre消失，卡片轉回來
        $('.choosenCard').css({
            transform: 'scaleX(1)',
            opacity: '1',
            transition: '.5s',
        });
        $('.cus_bag_card > pre').css({
            opacity: '0',
            transform: 'scaleX(-1)',
            transition: '.5s',
        })
        
        //卡片移動到中間打開        
        if(winWidth<575){
            $('.card2').animate({
                top: '120%', 
                left: '0px',              
            }, 1000);
            $('.card3').animate({
                top: '240%',
                left: '0px',
            }, 1000);
        }else{            
            $('.card2').animate({
                top: '120%',
                // left: '-300px',
                left: '-60%'
            }, 1000);
            $('.card3').animate({
                top: '120%',
                left: '60%'
            }, 1000);
        }


         //textArea消失
        $('.custom_card_textArea').fadeOut();
         //禮卡確認按鈕消失
        $('.custom_chooseCard_btn').fadeIn();
    });

    // ==================第五步 : 選擇禮物卡小圖案==================    
    $('.cus_cardcontent_nextstep').click(function(){
        //按鈕出現，前一組按鈕消失
        $('.cus-cardcontent-btn').fadeOut();        
        $('.cus-cardIcon-btn').fadeIn();
        //更換標題
        $('.cus_step2_txt > h3').text('第五步');
        $('.cus_step2_txt > h2').text('選擇禮物卡小圖案');
        //form消失, icon出現
        $('.custom_card_textArea form').css('display','none');
        $('.custom_card_iconList').css('display','grid').fadeIn();
    });
    $('.custom_card_icon').click(function(){
        $(this).toggleClass('choosen_icon');
        icon_src = $(this).attr('src');
        icon_id = $(this).attr('data-icon');
        if($(this).hasClass('choosen_icon')){            
            customized['iconType'].push(icon_id);
            icon_body = `            
                <div id='drag' class="custom_card_IconOnCard drag" >
                    <img src='${icon_src}'  data-icon='${icon_id}'>
                </div>             
            `;           
            $('.cus_bag_card').append(icon_body);
            drag();

        }else{
            console.log('remove-item='+icon_id);
            let this_icon = `.custom_card_IconOnCard img[data-icon=${icon_id}]`;
            $(this_icon).closest('div').remove();
            //刪除iconType陣列中的貼圖id
            let this_id = customized['iconType'].indexOf(icon_id);
            customized['iconType'].slice(this_id,1);
        };
    });
    // ==================第五步 : 選擇禮物卡小圖案上一步================== 
    $('.cus_cardIcon_prestep').click(function(){
        // 按鈕替換
        $('.cus-cardIcon-btn').fadeOut();
        $('.cus-cardcontent-btn').fadeIn();
        //form出現, icon出現
        $('.custom_card_textArea form').fadeIn();
        $('.custom_card_iconList').css('display','none');
        //更換標題
        $('.cus_step2_txt > h3').text('第四步');
        $('.cus_step2_txt > h2').text('填寫卡片內容');
        //刪除貼圖
        $('.custom_card_IconOnCard').fadeOut();
        $('.custom_card_icon').removeClass('choosen_icon');
    })
    // ==================第五步 : 確認卡片內容==================  
    $('.cus_cardIcon_nextstep').click(function(){
        console.log(customized);
        // 按鈕替換
        $('.cus-cardIcon-btn').fadeOut();
        $('.cus-cardConfirm-btn').fadeIn();
        //卡片填寫框消失
        $('.custom_card_textArea').fadeOut();
        //標題替換
        $('.cus_step2_txt > h2').text('確認禮物卡內容');
        //卡片置中
        $('.cus_bag_card').css({
            left: '50%',
            transform: 'translate(-50%, 50%)',
        })
        $("#dragbasic div[id^='drag']").unbind();
    })

    // ==================第五步 : 確認卡片內容上一步================== 
    $('.cus_cardConfirm_prestep').click(function(){
        // 按鈕替換
        $('.cus-cardIcon-btn').fadeIn();
        $('.cus-cardConfirm-btn').fadeOut();
        //標題替換
        $('.cus_step2_txt > h2').text('選擇禮物卡小圖案');
        //卡片換回去
        $('.cus_bag_card').css({
            left: '10%',
            transform: 'translate(0%, 50%)',
        })
        //啟動drag
        drag()
        //卡片填寫框出現
        $('.custom_card_textArea').fadeIn();
    })


    // ==================第五步 : 確認卡片完成================== 
    $('.cus_cardConfirm_nextstep').click(function(){
        //取得卡片內容傳給customized
        let cardContent = $('.cus_bag_card > pre').text();
        console.log(cardContent);
        customized['cardContent']+=cardContent;
        //卡片貼圖、標題、按鈕消失
        $('.custom_card_IconOnCard').fadeOut();
        $('.cus_step2_txt').fadeOut();

        //pre消失，卡片轉回來
        $('.choosenCard').css({
            transform: 'scaleX(1)',
            opacity: '1',
            transition: '1s',                        
        });
        $('.cus_bag_card > pre').css({
            opacity: '0',
            transform: 'scaleX(-1)',
            transition: '1s',           
        });
        setTimeout(function(){
            $('.cus_bag_card').css({
                bottom: '45%',
                left: '50%',
                width: '100px',
                height: '55px',
                borderRadiis: '15px',
                transform: 'rotate(-30deg) translate(-50%, 50%)',
                transition: '.5s',
            });
            $('.choosenCard').css({
                width:'100%',           
            }); 
            $('.cus_giftbox').css({
                opacity: '1',
                transition: '.5s',
            })          
        },1200);
        setTimeout(function(){            
            $('.custom_bag').fadeIn().css({  
                bottom: '55%',
                left: '50%',
                transform: 'translate(-50%, 50%)',
            })
        },2200)
        setTimeout(function(){
            $('.custom_cart').fadeIn();
            $('.custom_popUp_bg').fadeIn();
        },3700) 
        //=================================== local storage ======================================================   
        if(localStorage['customized_List'] == null){
            let customized_newArray=[];
            customized_newArray.push(customized);
            localStorage['customized_List'] = [];
            localStorage.setItem('customized_List', JSON.stringify(customized_newArray));
        }else{
            let customized_total = JSON.parse(localStorage.getItem('customized_List'));
            console.log(customized_total);
            customized_total.push(customized); 
            localStorage.setItem('customized_List', JSON.stringify(customized_total));           
        };
        
    })

    //挑窗關閉
    $('.custom_popUp_close').click(function(){
        $('.custom_popUp').fadeOut();
        $('.custom_popUp_bg').fadeOut();
        console.log('close');
    })    
});


function touchHandler(event) {
    var touch = event.changedTouches[0];
    var simulatedEvent = document.createEvent("MouseEvent");
        simulatedEvent.initMouseEvent({
        touchstart: "mousedown",
        touchmove: "mousemove",
        touchend: "mouseup"
    }[event.type], true, true, window, 1,
        touch.screenX, touch.screenY,
        touch.clientX, touch.clientY, false,
        false, false, false, 0, null);

    touch.target.dispatchEvent(simulatedEvent);
    event.preventDefault();
}

function drag(){
     /* basic */
    $("#dragbasic div[id^='drag']").draggable({
        containment: "#dragbasic",
        stack: ".drag"
    });
}

//滑鼠滾動判斷navbar出現/消失
function navshow(){
    var scrolltop = new Array();
    var index = 0;
    scrolltop[0] = 0;
    $(document).scroll(function(){
        index++;
        scrolltop[index] = $(document).scrollTop();
        if (scrolltop[index] > scrolltop[index - 1]) {
            $('.navbar').slideDown()
        } else {
            $('.navbar').slideUp()
        };
    })
}

// 

