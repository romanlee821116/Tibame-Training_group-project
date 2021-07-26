$(function(){

  console.log('run cart.js');
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
  $('.cart_quantity').on("keypress keyup blur", function(e){
    // 不能輸入符號
    $(this).val($(this).val().replace(/[^\d].+/, ""));
    if ((e.which < 48 || e.which > 57)) {
        e.preventDefault();
    }
    
    let val = $(this).val();
    // console.log(val);
    if(val == 1){
      $(this).prev('.cart_less').css('background-color','#c4c4c4');
    }else if(val > 1){
      $(this).prev('.cart_less').css('background-color','#ffffff');
    }else if(val == 0){
      // console.log('a');
      val = 1;
    }
  });



  // 查看禮盒明細

  $('.cart_detailBtn').click(function(){
    console.log('cusbox open');
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

})



