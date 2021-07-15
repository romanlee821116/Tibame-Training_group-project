$(function(){

    Vue.component('checkBox',{
        template: `
        <div class='custom_popUp_template'>
            <div class="custom_popUp">
                <img src="../images/customized_step_a.png" alt="">
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
                <img src="../images/customized_step_a.png" alt="">
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
        el: '#cus-wrap',
        data: {           
            boxImg: [
                {src: '../images/four_boxBodyIn.png', class: 'box1',txt: '四格小資組合', price: '$480'},
                {src: '../images/six_boxBodyIn.png', class: 'box2',txt: '六格家庭組合', price: '$680'},
                {src: '../images/nine_boxBodyIn.png', class: 'box3',txt: '九格派對組合', price: '$980'}
            ],

            category: [
                {type: '銅鑼燒', class:'', id: '1'}, 
                {type: '鯛魚燒', class:'', id: '2'}, 
                {type: '大福', class:'', id: '3'}, 
                {type: '日式餅乾', class:'', id: '4'},
                {type: '羊羹', class:'', id: '5'},
                {type: '煉切', class:'', id: '6'},
                {type: '最中', class:'', id: '7'},
            ],

            cus_item: [
                {txt: '這是第1個產品',class:'1 cus-item', img: '../images/product_small.png'},
                {txt: '這是第2個產品',class:'2 cus-item', img: '../images/product_small.png'},
                {txt: '這是第3個產品',class:'3 cus-item', img: '../images/product_small.png'},
                {txt: '這是第4個產品',class:'4 cus-item', img: '../images/product_small.png'},
                {txt: '這是第5個產品',class:'5 cus-item', img: '../images/product_small.png'},
                {txt: '這是第6個產品',class:'6 cus-item', img: '../images/product_small.png'},
                {txt: '這是第7個產品',class:'7 cus-item', img: '../images/product_small.png'},
                {txt: '這是第8個產品',class:'8 cus-item', img: '../images/product_small.png'},
                {txt: '這是第9個產品',class:'9 cus-item', img: '../images/product_small.png'},
                {txt: '這是第10個產品',class:'10 cus-item', img: '../images/product_small.png'},
                {txt: '這是第11個產品',class:'11 cus-item', img: '../images/product_small.png'},
                {txt: '這是第12個產品',class:'12 cus-item', img: '../images/product_small.png'},
                {txt: '這是第13個產品',class:'13 cus-item', img: '../images/product_small.png'},
                {txt: '這是第14個產品',class:'14 cus-item', img: '../images/product_small.png'},
                {txt: '這是第15個產品',class:'15 cus-item', img: '../images/product_small.png'},
                {txt: '這是第16個產品',class:'16 cus-item', img: '../images/product_small.png'},
                {txt: '這是第17個產品',class:'17 cus-item', img: '../images/product_small.png'},
                {txt: '這是第18個產品',class:'18 cus-item', img: '../images/product_small.png'},
                {txt: '這是第19個產品',class:'19 cus-item', img: '../images/product_small.png'},
            ],
            bagCard: [
                {src: '../images/testCard1.jpg', class:'choose-card card2', id:'2'},
                {src: '../images/testCard1.jpg', class:'choose-card card3', id:'3'},
                {src: '../images/testCard1.jpg', class:'choose-card card1', id:'1'},
                {src: '../images/testBag.png', class:'choose-bag', id:''},
            ],            
            iconList: [
                {src: '../images/meme1.png', id:'1'},
                {src: '../images/meme1.png', id:'2'},
                {src: '../images/meme1.png', id:'3'},
                {src: '../images/meme2.png', id:'4'},
                {src: '../images/meme2.png', id:'5'},
                {src: '../images/meme2.png', id:'6'},
                {src: '../images/meme3.png', id:'7'},
                {src: '../images/meme3.png', id:'8'},
                {src: '../images/meme3.png', id:'9'},
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
                    $('.cus-step1').animate({
                        height: '0vh',
                    },800);
                    // 物件消失
                    $('.cus-step1 > div').fadeOut();
                    //body overflow打開
                    $('body').css('overflowY','auto');
                    //節點替換
                    $('.custom_sideNode_node:nth-child(3)').addClass('before_node');
                    $('.custom_sideNode_node:nth-child(4)').addClass('current_node');
                    $('.custom_sideNode_frontBar').css('height','25%');

                };
                //第一格格子亮
                $('.custom_gridBox:nth-child(1)').addClass('choosenBox');
            },
            //第二步回第一步
            p2_to_p1(){
                $('.custom_btn_p1Next').fadeOut();
                $('.cus-step1-box > div').css('opacity','1');
                //把下一步按鈕的select取消
                // $('.custom_btn').removeClass('selected');
                $('.cus-box').removeClass('selected');
                //第一屏展開
                $('.cus-step1').animate({
                    height: '100vh',
                },800);
                //物件回來
                $('.cus-step1-txt').fadeIn();
                $('.cus-step1-box').fadeIn().css('display','grid');
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
                    $("#textCount").text(100 - $("#custom_cardText").val().length);
                }
            },
            
        }, 
    });
    //========================================jquery========================================
    let boxSize = 0;
    let item_list= [];
    let cardType=0;
    let icon_list=[];
    

    //判斷選到四格六格九格
    $('.cus-step1-box > div').click(function(e){
        $('.custom_btn_p1Next').fadeIn();
        $('.cus-step1-box > div').css('opacity','.5');
        $(this).css('opacity','1');
        $('.cus-box').removeClass('selected');
        //選擇盒子尺寸
            let boxType = $(this).find('img').attr('class');
            if(boxType =='box1'){
                boxSize = 4;
                $('.cus-box').css('display','none');
                $('.four-grid').css('display', 'grid').addClass('selected');
            }else if(boxType=='box2'){
                boxSize = 6;
                $('.cus-box').css('display','none');
                $('.six-grid').css('display', 'grid').addClass('selected');
            }else{
                boxSize = 9;
                $('.cus-box').css('display','none');
                $('.nine-grid').css('display', 'grid').addClass('selected');
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
        $(this).find('.cus-item-img').css('zIndex', '2');
        $(this).find('.cus-item-txt').css({
            display: 'block',
            zIndex: '1',
        });
    }).mouseleave(function(e){
        $(this).find('.cus-item-img').css('zIndex', '0');
        $(this).find('.cus-item-txt').css({
            display: 'none',
            zIndex: '0'
        });
    });
    //商品添加到格子中
    $('.fa-plus').click(function(e){
        let itemPic = $(this).closest('div').prev('div').find('img').attr('src');
        let itemTxt = $(this).closest('div').find('p').text();
        $('.selected .choosenBox').find('.selected_item').attr('src', itemPic).addClass('haveItem');
        $('.selected .choosenBox').find('.selected_item').attr('data-itemName', itemTxt);
        e.preventDefault();      
        //自動將選到的格子換成下一格
        let currentBox = parseInt($('.selected .choosenBox').attr('box-id'));        
        let nextBox = `.selected .custom_gridBox[box-id=${currentBox+1}]`
        $('.custom_gridBox').removeClass('choosenBox');
        $(nextBox).addClass('choosenBox');
        if(currentBox == boxSize){
            $('html,body').animate({ scrollTop: 0 },1000); 
            // currentBox = 0;
            $('.selected .custom_gridBox').addClass('choosenBox');            
        }
    })

   

//==================選擇內容下一步==================
    $('.s2-nextstep').click(function(){
        console.log($('.selected .haveItem').length);
        if($('.selected .haveItem').length==boxSize){
            //商品清單出現
            $('.custom_itemConfirm_List').fadeIn();
            //隱藏產品
            $('.cus-product-contianer').fadeOut();
            //隱藏分類
            $('.cus-product-category').fadeOut();
            //格子置中
            $('.cus-box').css({
                transform: 'translate(0%, 30px)',
                transition: '1s',
            });
            //商品全亮
            $('.selected .custom_gridBox').addClass('choosenBox');
            //確認按鈕出現
            $('.cus-confirm-btn').css('display', 'flex');
            //刪除原本上下一步按鈕
            $('.s2-prestep').css('display', 'none');
            $('.s2-nextstep').css('display', 'none');
            // $('.cus-step2-txt>h3').css('display','none');
            $('.cus-step2-txt>h2').text('確認禮盒內容');
            //螢幕限高
            $('body').css({
                // overflowY: 'hidden',
            })
            //在清單秀出禮盒內容
            
            let total_box = $('.selected  img:nth-child(even)')
            // let box_amount = $('.selected  img').length;
            let content = '';  
            console.log(boxSize);
            if(boxSize==4){
                $('.custom_itemConfirm_List > h2').html('四格小資組合 &nbsp $480');
            }else if(boxSize==6){
                $('.custom_itemConfirm_List > h2').html('六格家庭組合 &nbsp $680');
            }else{
                $('.custom_itemConfirm_List > h2').html('九格家庭組合 &nbsp $980');
            }
            //把資料帶入表格中
            $(total_box).each(function(){
                let img_url = $(this).attr('src');
                let item_name = $(this).attr('data-itemName');
                // item_list.push(item_name);
                //若當前這項產品沒有在item_list中的話就加上去
                let txt =`
                    <div> 
                        <img src="${img_url}" alt="">
                        <p>${item_name}(1入)</p>
                        <!-- <p>x1</p> -->
                    </div>
                `;
                content += txt;
            })
            $('.custom_itemConfirm_List').append(content);
            //節點替換
            $('.custom_sideNode_node:nth-child(4)').addClass('before_node');
            $('.custom_sideNode_node:nth-child(5)').addClass('current_node');
            $('.custom_sideNode_frontBar').css('height','50%');
        }else{
            $('.custom_popUp').fadeIn();
            $('.custom_popUp_bg').fadeIn();
        }    
    })
//==================內容確認返回上一步==================
    $('.cus-confirm-prestep').click(function(){
        //刪除清單
        $('.custom_itemConfirm_List>div').remove();
        //顯示產品
        $('.cus-product-contianer').fadeIn();
        //顯示分類
        $('.cus-product-category').fadeIn();
        //格子回原位
        $('.cus-box').css({
            transform: 'translate(0%, 0%)',
            transition: '1s',
        });
        //綁定變暗第一個亮
        $('.custom_gridBox').removeClass('choosenBox');
        $('.custom_gridBox:nth-child(1)').addClass('choosenBox');        
       
        //確認按鈕消失
        $('.cus-confirm-btn').css('display', 'none');
        //還原原本上下一步按鈕
        $('.s2-prestep').css('display', 'block');
        $('.s2-nextstep').css('display', 'block');
        $('.cus-step2-txt>h3').text('第二步');
        $('.cus-step2-txt>h2').text('選擇禮盒內容');
        //取消螢幕限高
        $('.cus-step1').animate({
            height: '0vh',
        },800);
        $('.cus-step1>div').css({
            display: 'none',
        });
        $('body').css({
            overflowY: 'auto',
        })

    })
//==================內容確認下一步==================
    $('.cus-confirm-nextstep').click(function(){  
        //固定Y軸
        $('body').css('overflow','hidden');    
        //清單消失
        $('.custom_itemConfirm_List').fadeOut();
         //卡片袋子出現
        $('.cus-bag-card').fadeIn();
        //禮盒變小
        $('.cus-box').css({
            width: '130px',
            height: 'auto',
        });
        //蓋子掉下來
        $('.cus-giftbox').animate({
            top: '210px',
            opacity: '1',
        },1000);
        //文字隱藏
        $('.cus-step2-txt').css('opacity','0');
        //文字更換
        $('.cus-step2-txt>h2').text('是否製作禮物卡?');
        $('.cus-step2-txt>h3').text('第三步');
        // 第三步文字先隱藏
        $('.cus-step2-txt>h3').css('opacity','0');
        //按鈕隱藏
        $('.cus-confirm-btn').fadeOut();
        
        //兩秒後觸發問要不要禮卡
        setTimeout(function(){            
            //盒子下降後消失
            $('.cus-box').css({
                display: 'none',
            });
            //蓋子下降
            $('.cus-giftbox').css({
                top: '50%',
                transform: 'translate(-50%, -50%)',
                transition: '.5s',
            });
            //問要不要做卡片的title出現
            $('.cus-step2-txt').css('opacity','1');
            //問要不要做卡片的按鈕出現
            $('.cus-giftcard-btn').css('display','flex').fadeIn();
        },1500);
        //節點替換
        $('.custom_sideNode_node:nth-child(5)').addClass('before_node');
        $('.custom_sideNode_node:nth-child(6)').addClass('current_node');
        $('.custom_sideNode_frontBar').css('height','75%');
    });
    //hover不需要(結帳)
    $('.cus-giftcard-stop').stop().mouseenter(function(){
        $('.choose-bag').fadeIn();
        $('.cus-bag-card').css('bottom','-5%');
    }).mouseleave(function(){
        $('.choose-bag').fadeOut();
        $('.cus-bag-card').css('bottom','-100%');
    })
    //hover需要(卡片)
    $('.cus-giftcard-nextstep').stop().mouseenter(function(){
        $('.choose-card').fadeIn();
        $('.cus-bag-card').css('bottom','-5%');
    }).mouseleave(function(){
        $('.choose-card').fadeOut();
        $('.cus-bag-card').css('bottom','-100%');
    })
// ==================是否製作卡片(結帳)==================
    $('.cus-giftcard-stop').click(function(){
        //取消原本按鈕的hover事件
        $('.cus-giftcard-nextstep').unbind('mouseenter mouseleave');
        $('.cus-giftcard-stop').unbind('mouseenter mouseleave');
        // 標題消失
        $('.cus-step2-txt').fadeOut();
        $('.cus-giftcard-btn').fadeOut();
        $('.choose-bag').fadeIn();
        $('.cus-bag-card').css({
            bottom: '50%',
            transform: 'translate(-50%, 50%)',
            transition: '2s',
        });
        setTimeout(function(){
            $('.custom_cart').css('display','flex').fadeIn();            
        },3300);

    })


//==================是否製作卡片(需要卡片)==================
    $('.cus-giftcard-nextstep').click(function(){
        // 改title文案
        $('.cus-step2-txt>h2').text('選擇禮物卡樣式');
        //第三步文字出現
        $('.cus-step2-txt>h3').css('opacity','1');
        //蓋子透明度變低
        $('.cus-giftbox').css('opacity','.2');
        //取消原本按鈕的hover事件
        $('.cus-giftcard-nextstep').unbind('mouseenter mouseleave');
        $('.cus-giftcard-stop').unbind('mouseenter mouseleave');
        //選擇按鈕消失
        $('.cus-giftcard-btn').fadeOut();
        //卡片進入
        $('.choose-card').fadeIn();
        // $('.cus-bag-card').css('bottom','50%');
        $('.cus-bag-card').css('bottom','45%');
        //卡片移動到中間打開
        $('.card2').animate({
            top: '220px',
            left: '-300px',
        }, 1000);
        $('.card3').animate({
            top: '220px',
            left: '300px',
        }, 1000);
        //選擇卡片按鈕出現
        setTimeout(function(){
            $('.custom_chooseCard_btn').css('display','flex');
        },1500);   
    })
//==================卡片返回上一步==================
    $('.custom-chooseCard-prep').click(function(){
        $('.choosenCard').css('opacity','1');
        // title文案還原
        $('.cus-step2-txt>h2').text('是否製作禮物卡?');
        //第三步文字消失
        $('.cus-step2-txt>h3').css('opacity','0');
        //蓋子透明度還原
        $('.cus-giftbox').css('opacity','1');
        //綁定原本按鈕的hover事件
        $('.cus-giftcard-nextstep').bind('mouseenter mouseleave');
        $('.cus-giftcard-stop').bind('mouseenter mouseleave');
        //hover不需要(結帳)
        $('.cus-giftcard-stop').mouseenter(function(){
            $('.choose-bag').fadeIn();
            $('.cus-bag-card').css('bottom','-5%');
        }).mouseleave(function(){
            $('.choose-bag').fadeOut();
            $('.cus-bag-card').css('bottom','-100%');
        })
        //hover需要(卡片)
        $('.cus-giftcard-nextstep').mouseenter(function(){
            $('.choose-card').fadeIn();
            $('.cus-bag-card').css('bottom','-5%');
        }).mouseleave(function(){
            $('.choose-card').fadeOut();
            $('.cus-bag-card').css('bottom','-100%');
        })
        //選擇按鈕出現
        $('.cus-giftcard-btn').fadeIn();
        //卡片淡出
        $('.choose-card').fadeOut();
        $('.cus-bag-card').animate({bottom:'-100%'}, 500);
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
    $('.custom-chooseCard-next').click(function(){
        if($('.choosenCard').length!=0){

            let cardType = $('.choosenCard').attr('data-cardId');
            console.log(cardType);
            if(cardType==1){
                $('.cus-bag-card > pre').css('backgroundColor','orange');
            }else if(cardType==2){
                $('.cus-bag-card > pre').css('backgroundColor','pink');
            }else{
                $('.cus-bag-card > pre').css('backgroundColor', '#999');
            }

            // 先取消所有卡片顯示
            $('.cus-bag-card>img').css('display','none');
            //卡片外框置中
            $('.cus-bag-card').css({
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
                $('.cus-step2-txt').fadeOut();            
                $('.custom_chooseCard_btn').fadeOut();
            },1000);
            //標題回歸，卡片左移，填寫欄位出現
            setTimeout(function(){
                $('.cus-step2-txt>h3').text('第四步');
                $('.cus-step2-txt>h2').text('填寫卡片內容');
                $('.custom_chooseCard_btn').css('display','flex').fadeIn();
                $('.cus-step2-txt').fadeIn();
                $('.custom_card_textArea').fadeIn();
                $('.cus-bag-card').css({
                    bottom: '50%',
                    left: '10%',
                    width: '400px',
                    height: '250px',
                    transform: 'translate(0%, 50%)',
                });
                $('.choosenCard').css({
                    width:'100%',
                    top: '-10px',                
                });           
            },1500);

            setTimeout(function(){
                $('.choosenCard').css({
                    transform: 'scaleX(-1)',
                    opacity: '0',
                    transition: '2s',
                });
                $('.cus-bag-card > pre').css({
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
    $('.cus-cardcontent-prestep').click(function(){
        // 卡片出現
        $('.choose-card').removeClass('choosenCard');
        $('.choose-card').css({display:'block', opacity: '1', transition:'.5s'});
        //卡片外框置中
        $('.cus-bag-card').css({
            width: '345px',
            height: '210px',
            bottom: '45%',
            left: '50%',
            transform: 'translate(-50%, 0%)',
        });
         // 改title文案
         $('.cus-step2-txt>h2').text('選擇禮物卡樣式');
         $('.cus-step2-txt>h3').text('第四步');
         //按鈕更換
         $('.cus-cardcontent-btn').fadeOut();
         $('.custom_chooseCard_btn').css('display','flex').fadeIn();
         //pre消失，卡片轉回來
         $('.choosenCard').css({
            transform: 'scaleX(1)',
            opacity: '1',
            transition: '.5s',
        });
        $('.cus-bag-card > pre').css({
            opacity: '0',
            transform: 'scaleX(-1)',
            transition: '.5s',
        })
         //卡片移動到中間打開
         $('.card2').css({
             top: '220px',
             left: '-300px',
         });
         $('.card3').css({
             top: '220px',
             left:' 300px',
             border: '1px solid black',
         });
         //textArea消失
         $('.custom_card_textArea').fadeOut();
         //禮卡確認按鈕消失
         $('.custom_chooseCard_btn').fadeIn();
    });

    // ==================第五步 : 選擇禮物卡小圖案==================    
    $('.cus-cardcontent-nextstep').click(function(){
        //按鈕出現，前一組按鈕消失
        $('.cus-cardcontent-btn').fadeOut();        
        $('.cus-cardIcon-btn').fadeIn();
        //更換標題
        $('.cus-step2-txt > h3').text('第五步');
        $('.cus-step2-txt > h2').text('選擇禮物卡小圖案');
        //form消失, icon出現
        $('.custom_card_textArea form').css('display','none');
        $('.custom_card_iconList').css('display','grid').fadeIn();
    });
    let dragId = 1;
    $('.custom_card_icon').click(function(){
        $(this).toggleClass('choosen_icon');
        icon_src = $(this).attr('src');
        icon_id = $(this).attr('data-icon');
        if($(this).hasClass('choosen_icon')){            
            // icon_src = $(this).attr('src');
            // icon_id = $(this).attr('data-icon');
            icon_body = `            
                <div id='drag' class="custom_card_IconOnCard drag" >
                    <img src='${icon_src}'  data-icon='${icon_id}' class='test'>
                </div>             
            `;           
            $('.cus-bag-card').append(icon_body);
            drag();

        }else{
            console.log('remove-item='+icon_id);
            let this_icon = `.custom_card_IconOnCard img[data-icon=${icon_id}]`;
            $(this_icon).closest('div').remove();
        };
    });
    // ==================第五步 : 選擇禮物卡小圖案上一步================== 
    $('.cus-cardIcon-prestep').click(function(){
        // 按鈕替換
        $('.cus-cardIcon-btn').fadeOut();
        $('.cus-cardcontent-btn').fadeIn();
        //form出現, icon出現
        $('.custom_card_textArea form').fadeIn();
        $('.custom_card_iconList').css('display','none');
        //更換標題
        $('.cus-step2-txt > h3').text('第四步');
        $('.cus-step2-txt > h2').text('填寫卡片內容');
        //刪除貼圖
        $('.custom_card_IconOnCard').fadeOut();
        $('.custom_card_icon').removeClass('choosen_icon');
    })
    // ==================第五步 : 確認卡片內容==================  
    $('.cus-cardIcon-nextstep').click(function(){
        // 按鈕替換
        $('.cus-cardIcon-btn').fadeOut();
        $('.cus-cardConfirm-btn').fadeIn();
        //卡片填寫框消失
        $('.custom_card_textArea').fadeOut();
        //標題替換
        $('.cus-step2-txt > h2').text('確認禮物卡內容');
        //卡片置中
        $('.cus-bag-card').css({
            left: '50%',
            transform: 'translate(-50%, 50%)',
        })
        $("#dragbasic div[id^='drag']").unbind();
    })

    // ==================第五步 : 確認卡片內容上一步================== 
    $('.cus-cardConfirm-prestep').click(function(){
        // 按鈕替換
        $('.cus-cardIcon-btn').fadeIn();
        $('.cus-cardConfirm-btn').fadeOut();
        //標題替換
        $('.cus-step2-txt > h2').text('選擇禮物卡小圖案');
        //卡片換回去
        $('.cus-bag-card').css({
            left: '10%',
            transform: 'translate(0%, 50%)',
        })
        //啟動drag
        drag()
        //卡片填寫框出現
        $('.custom_card_textArea').fadeIn();
    })


    // ==================第五步 : 確認卡片完成================== 
    $('.cus-cardConfirm-nextstep').click(function(){
        //卡片貼圖、標題、按鈕消失
        $('.custom_card_IconOnCard').fadeOut();
        $('.cus-step2-txt').fadeOut();

        //pre消失，卡片轉回來
        $('.choosenCard').css({
            transform: 'scaleX(1)',
            opacity: '1',
            transition: '1s',                        
        });
        $('.cus-bag-card > pre').css({
            opacity: '0',
            transform: 'scaleX(-1)',
            transition: '1s',           
        });
        setTimeout(function(){
            $('.cus-bag-card').css({
                bottom: '45%',
                left: '50%',
                width: '100px',
                height: '75px',
                transform: 'rotate(-30deg) translate(-50%, 50%)',
            });
            $('.choosenCard').css({
                width:'100%',           
            }); 
            $('.cus-giftbox').css({
                opacity: '1',
                transition: '.5s',
            })          
        },1200);
        setTimeout(function(){
            $('.custom_bag').css({                
                bottom: '50%',
                left: '50%',
                transform: 'translate(-50%, 50%)',
            })
        },2000)
        setTimeout(function(){
            $('.custom_cart').fadeIn();
            $('.custom_popUp_bg').fadeIn();
        },4800)        
    })

    //挑窗關閉
    $('.custom_popUp_close').click(function(){
        $('.custom_popUp').fadeOut();
        $('.custom_popUp_bg').fadeOut();
        console.log('close');
    })

});

function drag(){
     /* basic */
     $("#dragbasic div[id^='drag']").draggable({
        containment: "#dragbasic",
        stack: ".drag"
});
}

