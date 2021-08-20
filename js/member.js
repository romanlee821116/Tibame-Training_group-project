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

    new Vue({
        el: '.memberAll',
    
    });

    // ===================== vue結束ㄌ =======================

    // 登入後先抓localStorage存的帳號，到資料庫撈出相關資訊
    memberDetailLoad();

    // ------暫時用這個取代vue的click----------
    $('body').on('click', '.receiverDetail>button', function(){
        $('.receiverDetail').fadeOut();
        $('.greyBackground').remove();
        // 可滑動卷軸
        $('body').removeClass('stopScroll');
    });

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


    // 所有input欄位點擊focus時，提示消失
    $('.memberPart2 input').focus(function(){
        // $(this).next().css('display','none');
        $(this).next().next().css('display','none');      
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
    $('.memberOrderDetailHere').hide();
    $('body').on('click', '.memberPart3 .memberOpenDetail', function(){
        // console.log($(this));
        $(this).parent().parent().next().slideToggle("slow");
        $(this).toggleClass('close_detail');
        if( $(this).hasClass('close_detail') ){
            $(this).text('收合明細');
        }else{
            $(this).text('查看明細');
        }
    });

    // 收件人詳細資訊  
    $('body').on('click','.memberReceiverID', function(){
        recevier = $(this).parent().parent().next().next().next();
        recevier.fadeIn(500);
        // 不可滑動卷軸
        $('body').addClass('stopScroll');
        // 背景灰底
        $('body').append("<div class='greyBackground'></div>");
    });


    // ================ 取消訂單查詢 ===================
    // 查看明細 & 收合明細
    // $('.memberOrderDetailAll').hide();
    $('body').on('click', '.memberPart4 .memberOpenDetail', function(){
        console.log($(this));
        $(this).parent().parent().next().slideToggle("slow");
        $(this).toggleClass('close_detail');
        if( $(this).hasClass('close_detail') ){
            $(this).text('收合明細');
        }else{
            $(this).text('查看明細');
        }
    });

    // ================== 收藏管理 ==================
    // 刪除已收藏的商品
    $('body').on('click','.memberLikeHeart',function(event){
        // 防止事件冒泡
        event.stopPropagation();
    
        let deleItem = this;
        $(deleItem).attr('src','../images/member/unfavorite.png')
        $(deleItem).parent().fadeOut(1000);
        setTimeout(function(){
            $(deleItem).parent().remove();
        },1000);

        // 找刪除的圖檔名
        // deleItemSrc = $(deleItem).prev()[0].src;
        deleItemSrc = $(deleItem).prev().prev()[0].src;
        deleItemPicName = deleItemSrc.split('/')[6];

        // =========同步更新資料庫的資料=========
        memberFavoriteDele(deleItemSrc);

        // 如果有資料是空值的話，加上目前沒東西ㄉ文字說明
        if($('.memberLikePack').length==1){
            $(".memberPart5").html("<div class='memberNoContent'>目前尚無收藏任何商品</div>");
        }
        
    });

    // 點擊商品圖，詢問是否前往商品頁面
    $('body').on('click','.memberLikePack',function(){
        console.log('click');
        let memberFavoritePop =
        `<div class='popBG'>
            <div class="type1 memberFavoritePop">
                <img src="../images/member/popup_goProduct_icon.png" alt="">
                <h2>查看商品？</h2>
                <p>現在就前往商品頁查看</p>
                <div>
                    <a class='mainBtn memberFavoriteBack'>返回</a>
                    <a href="./shopping_choose.html" class='mainBtn'>前往商品頁</a>                
                </div>
            </div>
        </div>`

        $('.memberPart5').append(memberFavoritePop);
        $('body').addClass('stopScroll');
    });

    $('body').on('click','.memberFavoriteBack',function(){
        $('.memberPart5').children('div:last-child').remove();
        $('body').removeClass('stopScroll');
    });


    // =============== 關閉彈窗 ==================
    // 會員資料更新
    $('.memberPart1PopClose').click(function(){
        $('.memberPart1Popup').hide();
        $('body').removeClass('stopScroll');
    });

    // 會員密碼更新
    $('.memberPart2PopClose').click(function(){
        $('.memberPart2Popup').hide();
        $('body').removeClass('stopScroll');
    });

    // ============== 搜尋訂單功能 ================
    // 一般訂單
    $('body').on('click','.memberPart3Search',function(){
        // 若有刪除無此訂單的文字，先清除
        $('#memberOrderList3 .memberNoContent').remove();
        // 所有人都先出現
        $("#memberOrderList3 .memberOrder").show();

        let key = $('#memberPart3SearchKey').val();
        if( key != '' ){          
            let result = $("#memberOrderList3").find("div.memberGrid9:contains('"+ key +"')").parent().parent().parent();
            $("#memberOrderList3 .memberOrder").not(result).hide();
            // console.log($("#memberOrderList3").find("div.memberGrid9:contains('"+ key +"')").parent().parent().parent());
            if( result.length <= 0 ){
                $('#memberOrderList3').append("<div class='memberNoContent'>無此訂單編號，請重新輸入</div>");
            }
        }else{
            // $("#memberOrderList3 .memberOrder").show();
        }      
        
    });

    // 取消訂單
    $('body').on('click','.memberPart4Search',function(){       
        // 若有刪除無此訂單的文字，先清除
        $('#memberOrderList4 .memberNoContent').remove();
        // 所有人都先出現
        $("#memberOrderList4 .memberOrder").show();

        let key = $('#memberPart4SearchKey').val();
        if( key != '' ){          
            let result = $("#memberOrderList4").find("div.memberGrid9:contains('"+ key +"')").parent().parent().parent();
            $("#memberOrderList4 .memberOrder").not(result).hide();
            // console.log($("#memberOrderList3").find("div.memberGrid9:contains('"+ key +"')").parent().parent().parent());
            if( result.length <= 0 ){
                $('#memberOrderList4').append("<div class='memberNoContent'>無此訂單編號，請重新輸入</div>");
            }
        }else{
            $("#memberOrderList4 .memberOrder").show();
        } 
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


