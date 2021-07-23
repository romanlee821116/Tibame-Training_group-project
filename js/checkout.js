$(function(){


  // 按數量增加變色
  $('.checkout_add').mousedown(function(){
    $(this).css('background-color','#172852');
    $(this).css('color','#ffffff');
  });

  $('.checkout_add').mouseup(function(){
    $(this).css('background-color','#ffffff');
    $(this).css('color','#172852');
  });



  // 按數量減少變色
  $('.checkout_less').mousedown(function(){
    let val = $(this).next().val();
    if(val > 1){
      $(this).css('background-color','#172852');
      $(this).css('color','#ffffff');
    }
  });

  $('.checkout_less').mouseup(function(){
    let val = $(this).next().val();
    if(val > 1){
      $(this).css('background-color','#ffffff');
      $(this).css('color','#172852');
    }
  });



  // 若數量大於1，減號變白底
  $('.checkout_add').click(function(){
    let val = $(this).prev().val();
    if(val > 1){
      $(this).siblings('.checkout_less').css('background-color','#ffffff');
    }
  });



  // 數量等於1，減號變灰底
  $('.checkout_less').click(function(){
    let val = $(this).next().val();
    if(val == 1){
      $(this).css('background-color','#c4c4c4');
    }
  });



  // 偵測input手動改數字，改變減號底色
  $('.checkout_quantity').on("keypress keyup blur", function(e){
    // 不能輸入符號
    $(this).val($(this).val().replace(/[^\d].+/, ""));
    if ((e.which < 48 || e.which > 57)) {
        e.preventDefault();
    }
    
    let val = $(this).val();
    // console.log(val);
    if(val == 1){
      $(this).prev('.checkout_less').css('background-color','#c4c4c4');
    }else if(val > 1){
      $(this).prev('.checkout_less').css('background-color','#ffffff');
    }else if(val == 0){
      // console.log('a');
      val = 1;
    }
  });



  // 查看禮盒明細

  $('.checkout_detailBtn').click(function(){
    let open = $(this).parents('.checkout_customization').children('.checkout_detailBorder');
    open.slideToggle();
    // 開關按鈕變色
    let btnColor = $(this).css('background-color');
    if(btnColor == 'rgb(187, 134, 106)'){
      $(this).css('background-color','#cba89a');
    }else if(btnColor == 'rgb(203, 168, 154)'){
      $(this).css('background-color','#bb866a');
    };

  });

  // 輸入折扣碼有值時按鈕會變色
  $('#checkout_discountNumber').on("keypress keyup blur", function(){
    if($(this).val() !== ""){
      $('.checkout_send').css('background-color', '#172852');
      $('.checkout_send').css('cursor', 'pointer');
    }else if($(this).val() == ""){
      $('.checkout_send').css('background-color', '#a3a3a3');
      $('.checkout_send').css('cursor', 'default');
    };
  });


  // 輪播圖左右按鈕
  // 左邊按鈕
  $('.checkout_pushItemBtnL').click(function(){
    let a = parseInt($('.checkout_pushItemList').css('left'));
    let b = a + 195;
    if(a < 0){
      $('.checkout_pushItemList').css('left', b+'px');
    }else if(a > 0){
      $('.checkout_pushItemList').css('left', '0');
    }
  })

  // 右邊按鈕
  $('.checkout_pushItemBtnR').click(function(){
    let a = parseInt($('.checkout_pushItemList').css('left'));
    let b = a - 195;
    if(a < -780){
      $('.checkout_pushItemList').css('left', '0');
    }else{
      $('.checkout_pushItemList').css('left', b+'px');
    }
  })




})



