$(document).ready(function(){

    // navbar();

    // ======================== vue ===========================
    // 變更密碼反饋
    Vue.component('member-error',{
        template:`
        <div class="memberError">
            <p>資料格式不正確</p>
            <div></div>
        </div>
        `,
    }),

    // 訂單查詢的收件人詳細資訊
    Vue.component('receiver-detail',{
        data(){
            return {
                recevierName: '李* 先生/小姐',
                recevierPhone: '0912345678',
                recevierAddress: '******民權東路六段',

                // isActive: false,
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
                // this.isActive = true;
                $('.receiverDetail').fadeOut();
                $('.greyBackground').remove();
                // 可滑動卷軸
                $('body').removeClass('stopScroll');
            },
        },
    });

    new Vue({
        el: '.memberAll',
    
    });

    // ===================== vue結束ㄌ =======================
    

    // ===================== 標題點擊效果 ========================
    // 標題下底線
    $('.memberTitle>h4').click(function(){
        $(this).addClass('mClicked');
        $(this).siblings().removeClass('mClicked');

        // 清空變更密碼的表單
        memberForm0();
    });

    // 各分頁的點擊調整
    $('#memberId').click(function(){
        $('.choosenBar2').css('left','0%');
        $(this).css('color','#172852');
        $(this).siblings().css('color','#cba89a');
        $('.memberPart1').fadeIn(700);
        $('.memberPart1 ~ div').not('.memberPart1').hide();
        // 改底線顏色
        // $(this).css('border-bottom','2px solid #172852');
        // $('.memberTitle>h4').not(this).css('border-bottom','2px solid #cba89a');
    });

    $('#memberPsw').click(function(){
        $('.choosenBar2').css('left','20%');
        $(this).css('color','#172852');
        $(this).siblings().css('color','#cba89a');
        $('.memberPart2').fadeIn(700);
        $('.memberLine ~ div').not('.memberPart2').hide();
    });

    $('#memberOrder').click(function(){
        $('.choosenBar2').css('left','40%');
        $(this).css('color','#172852');
        $(this).siblings().css('color','#cba89a');
        $('.memberPart3').fadeIn(700);
        $('.memberLine ~ div').not('.memberPart3').hide();
    });

    $('#memberRefund').click(function(){
        $('.choosenBar2').css('left','60%');
        $(this).css('color','#172852');
        $(this).siblings().css('color','#cba89a');
        $('.memberPart4').fadeIn(700);
        $('.memberLine ~ div').not('.memberPart4').hide();
    });

    $('#memberLike').click(function(){
        $('.choosenBar2').css('left','80%');
        $(this).css('color','#172852');
        $(this).siblings().css('color','#cba89a');
        $('.memberPart5').fadeIn(700);
        $('.memberLine ~ div').not('.memberPart5').hide();
    });

    // =============== 密碼反饋 ===================
    $('.memberChangePSW').click(function(e){
        // 清空重來
        $('.memberError').css('display','none');
        // $('.memberError').next().children('p').text('資料格式不正確');
        $('input').css('border','2px solid transparent');

        // 設定變數
        let oldPSW = $('.memberOldPSW').val();
        let newPSW = $('.memberNewPSW').val();
        let newPSW2 = $('.memberNewPSW2').val();
        // 正規表示法密碼格式
        let passwordCorrect = /^.{8,16}$/;

        if(oldPSW == ""){
            e.preventDefault();
            $('.memberOldPSW').css('border','2px solid #dc3838');
            $('.memberOldPSW').next().next().css('display','inline-block');
            $('.memberOldPSW').next().next().children('p').text('請輸入資訊');
        }else if(!passwordCorrect.test(oldPSW)){
            e.preventDefault();
            $('.memberOldPSW').css('border','2px solid #dc3838');
            $('.memberOldPSW').next().next().css('display','inline-block');
            $('.memberOldPSW').next().next().children('p').text('資料格式不正確');
        }

        if(newPSW == ""){
            e.preventDefault();
            $('.memberNewPSW').css('border','2px solid #dc3838');
            $('.memberNewPSW').next().next().css('display','inline-block');
            $('.memberNewPSW').next().next().children('p').text('請輸入資訊');
        }else if(!passwordCorrect.test(newPSW)){
            e.preventDefault();
            $('.memberNewPSW').css('border','2px solid #dc3838');
            $('.memberNewPSW').next().next().css('display','inline-block');
            $('.memberNewPSW').next().next().children('p').text('資料格式不正確');
        }

        if(newPSW2 == ""){
            e.preventDefault();
            $('.memberNewPSW2').css('border','2px solid #dc3838');
            $('.memberNewPSW2').next().next().css('display','inline-block');
            $('.memberNewPSW2').next().next().children('p').text('請輸入資訊');
        }else if(!passwordCorrect.test(newPSW2)){
            e.preventDefault();
            $('.memberNewPSW2').css('border','2px solid #dc3838');
            $('.memberNewPSW2').next().next().css('display','inline-block');
            $('.memberNewPSW2').next().next().children('p').text('資料格式不正確');
        }else if(newPSW2 != newPSW ){
            e.preventDefault();
            $('.memberNewPSW2').css('border','2px solid #dc3838');
            $('.memberNewPSW2').next().next().css('display','inline-block');
            $('.memberNewPSW2').next().next().children('p').text('兩次輸入密碼不同');
        }


    });
    // 開眼睛看密碼
    $('.memberPart2 .eye').click(function(){
        let type = $(this).prev().attr('type');
        if( type == 'text'){
            $(this).prev().attr('type','password');
        }else{
            $(this).prev().attr('type','text');
        };
    });


    // ================ 訂單查詢 ===================
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
        recevier = $(this).parent().parent().next().next().next();
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

    // ================== 收藏管理 ==================
    $('.memberLikeHeart').click(function(){
        let deleItem = this;
        $(deleItem).attr('src','../images/member/unfavorite.png')
        $(deleItem).parent().fadeOut(1000);
        setTimeout(function(){
            $(deleItem).parent().remove();
        },1000);
        // $(this).parent().remove();
    });

});

// 清空表單反饋-------------------
function memberForm0(){
    $('.memberError').css('display','none');
    $('.memberError').children('p').text('資料格式不正確');
    $('input').css('border','2px solid transparent');
    // 清除所有input的值
    $('.memberPart2 input').val('');
};

// navbar-------------------
function navbar(){
    var scrolltop = new Array();
    var index = 0;
    scrolltop[0] = 0;
    $(document).scroll(function(){
        index++;
        scrolltop[index] = $(document).scrollTop();
        if (scrolltop[index] > scrolltop[index - 1]) {
            $('.navbar').fadeOut()
        } else {
            $('.navbar').fadeIn()
        };
    })
}


