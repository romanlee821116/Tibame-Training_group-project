$(function(){


  // 按數量增加變色
  $('.cart_add').mousedown(function(){
    $(this).css('background-color','#172852');
    $(this).css('color','#ffffff');
  });

  $('.cart_add').mouseup(function(){
    $(this).css('background-color','#ffffff');
    $(this).css('color','#172852');
  });



  // 按數量減少變色
  $('.cart_less').mousedown(function(){
    let val = $(this).next().val();
    if(val > 1){
      $(this).css('background-color','#172852');
      $(this).css('color','#ffffff');
    }
  });

  $('.cart_less').mouseup(function(){
    let val = $(this).next().val();
    if(val > 1){
      $(this).css('background-color','#ffffff');
      $(this).css('color','#172852');
    }
  });



  // 若數量大於1，減號變白底
  $('.cart_add').click(function(){
    let val = $(this).prev().val();
    if(val > 1){
      $(this).siblings('.cart_less').css('background-color','#ffffff');
    }
  });



  // 數量等於1，減號變灰底
  $('.cart_less').click(function(){
    let val = $(this).next().val();
    if(val == 1){
      $(this).css('background-color','#c4c4c4');
    }
  });



  // 偵測input手動改數字，改變減號底色
  $('.cart_quantity').blur(function(){
    let val = $(this).val();
    // console.log(val);
    if(val == 1){
      $(this).prev('.cart_less').css('background-color','#c4c4c4');
    }else if(val > 1){
      $(this).prev('.cart_less').css('background-color','#ffffff');
    };
  });



  // 查看禮盒明細

  $('.cart_detailBtn').click(function(){
    let open = $(this).parents('.cart_customization').children('.cart_detailBorder');
    open.slideToggle();
    // 開關按鈕變色
    let btnColor = $(this).css('background-color');
    if(btnColor == 'rgb(187, 134, 106)'){
      $(this).css('background-color','#cba89a');
    }else if(btnColor == 'rgb(203, 168, 154)'){
      $(this).css('background-color','#bb866a');
    };

  });







  // ====================== 已在VUE寫 ======================

    // 打開購物車
  // $('.noCopy').click(function(){
  //   $('.cart_cartBoard').css('right','0px');
  // });


  // 關掉購物車
  // $('.cart_close').click(function(){
  //   $('.cart_cartBoard').css('right','-600px');
  //   // 禮盒細項關起來
  //   $('.cart_detailBorder').css('display','none');
  //   // 查看禮盒明細按鈕顏色
  //   $('.cart_detailBtn').css('background-color','#bb866a');
  // })


  // 點擊checkbox會打勾，且刪除多個按鈕變顏色
  // $('.cart_itemCB').click(function(){
  //   $(this).toggleClass('cart_choose');
  //   if($('.cart_itemCB').hasClass('cart_choose')){
  //     $('#cart_deleteMany').css('background-color','#bb866a');
  //     $('#cart_deleteMany').css('cursor','pointer');
  //   }else{
  //     $('#cart_deleteMany').css('background-color','#a3a3a3');
  //     $('#cart_deleteMany').css('cursor','default');
  //   }
  // });


  // 刪除多個功能，刪完變灰色
  // $('#cart_deleteMany').click(function(){
  //   if($('.cart_itemCB').hasClass('cart_choose')){
  //     $('.cart_choose').parents('li').remove();
  //     $('#cart_deleteMany').css('background-color','#a3a3a3');
  //     $('#cart_deleteMany').css('cursor','default');
  //   }
  // });

})



