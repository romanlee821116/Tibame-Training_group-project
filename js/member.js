$(document).ready(function(){

    // ======================== vue ===========================
    // 訂單查詢的收件人詳細資訊
    Vue.component('receiver-detail',{
        data(){
            return {
                recevierName: '李* 先生/小姐',
                recevierPhone: '0912345678',
                recevierAddress: '******民權東路六段',

                isActive: false,
            };
        },
        template: `
            <div class='receiverDetail'>
                <div>
                    <p>收件人姓名：<input disabled type="text" :value='recevierName'></p>
                    <p>收件人電話：<input disabled type="text" :value='recevierPhone'></p>
                    <p>收件人地址：<input disabled type="text" :value='recevierAddress'></p>
                </div>
                <p>部分資訊打***以保護個人隱私</p>
                <button  @click='recevierClose'>確認</button>
            </div>
        `,
        methods: {
            recevierClose(){
                this.isActive = true;
                // console.log('close');
                // console.log(this.isActive);
                $('.receiverDetail').fadeOut();
                $('.greyBackground').remove();
            },
        },
    });

    new Vue({
        el: '.vueOrder',
    
    });

    // ===================== vue結束ㄌ =======================

    // ==============標題點擊效果=================
    $('#memberId').click(function(){
        $('.choosenBar2').css('left','0%');
        $(this).css('color','#172852');
        $(this).siblings().css('color','#cba89a');
        $('.memberPart1').fadeIn(700);
        $('.underLine ~ div').not('.memberPart1').hide();
    });

    $('#memberPsw').click(function(){
        $('.choosenBar2').css('left','20%');
        $(this).css('color','#172852');
        $(this).siblings().css('color','#cba89a');
        $('.memberPart2').fadeIn(700);
        $('.underLine ~ div').not('.memberPart2').hide();
    });

    $('#memberOrder').click(function(){
        $('.choosenBar2').css('left','40%');
        $(this).css('color','#172852');
        $(this).siblings().css('color','#cba89a');
        $('.memberPart3').fadeIn(700);
        $('.underLine ~ div').not('.memberPart3').hide();
    });

    $('#memberRefund').click(function(){
        $('.choosenBar2').css('left','60%');
        $(this).css('color','#172852');
        $(this).siblings().css('color','#cba89a');
        $('.memberPart4').fadeIn(700);
        $('.underLine ~ div').not('.memberPart4').hide();
    });

    $('#memberLike').click(function(){
        $('.choosenBar2').css('left','80%');
        $(this).css('color','#172852');
        $(this).siblings().css('color','#cba89a');
    });
    // ================訂單查詢===================
    // 查看明細 & 收合明細
    $('.memberOrderDetailAll').hide();
    $('.memberOpenDetail').click(function(){
        console.log('kk');
        $(this).parent().parent().next().slideToggle("slow");
        $(this).toggleClass('close_detail');
        if( $(this).hasClass('close_detail') ){
            $(this).text('收合明細');
        }else{
            $(this).text('查看明細');
        }
    });

    // 收件人詳細資訊
    $('.memberReceiverID').click(function(){
        // 出現彈出視窗
        recevier = $(this).parent().parent().parent().next().next().next();
        // $('.receiverDetail').fadeIn(500);
        recevier.fadeIn(500);
        // 不可滑動卷軸
        $('body').addClass('stopScroll');
        // 背景灰底
        $('body').append("<div class='greyBackground'></div>");
    });
    // $('.recevierClose').click(function(){
    //     console.log('close');
    //     $(this).parent().parent().hide();
    //     $('body').removeClass('stopScroll');
    // });


});


