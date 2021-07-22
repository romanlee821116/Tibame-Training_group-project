$(function(){

  // radio顏色
  $('#payment_home').click(function(){
    $('.payment_fakeClick1').css('display','block');
    $('.payment_fakeClick2').css('display','none');
    $('.payment_fakeClick3').css('display','none');
    $('.payment_fake1').css('border','1.5px solid #172852');
    $('.payment_fake2').css('border','1.5px solid #bb866a');
    $('.payment_fake3').css('border','1.5px solid #bb866a');
  })

  $('#payment_seven').click(function(){
    $('.payment_fakeClick2').css('display','block');
    $('.payment_fakeClick1').css('display','none');
    $('.payment_fakeClick3').css('display','none');
    $('.payment_fake2').css('border','1.5px solid #172852');
    $('.payment_fake1').css('border','1.5px solid #bb866a');
    $('.payment_fake3').css('border','1.5px solid #bb866a');
  })

  $('#payment_shop').click(function(){
    $('.payment_fakeClick3').css('display','block');
    $('.payment_fakeClick1').css('display','none');
    $('.payment_fakeClick2').css('display','none');
    $('.payment_fake3').css('border','1.5px solid #172852');
    $('.payment_fake1').css('border','1.5px solid #bb866a');
    $('.payment_fake2').css('border','1.5px solid #bb866a');

  })

  $('#payment_online').click(function(){
    $('.payment_fakeClick4').css('display','block');
    $('.payment_fakeClick5').css('display','none');
    $('.payment_fake4').css('border','1.5px solid #172852');
    $('.payment_fake5').css('border','1.5px solid #bb866a');
  })

  $('#payment_cash').click(function(){
    $('.payment_fakeClick5').css('display','block');
    $('.payment_fakeClick4').css('display','none');
    $('.payment_fake5').css('border','1.5px solid #172852');
    $('.payment_fake4').css('border','1.5px solid #bb866a');
  })




  // 收件人資訊
  $('#payment_home').click(function(){
    // console.log('a');
    $('.payment_receiver').css('display','block');
    $('.payment_shop').css('display', 'none');
    $('.payment_shopMapData').css('display', 'none');
  })

  // 711
  $('#payment_seven').click(function(){
    // console.log('a');
    $('.payment_shop').css('display', 'block');
    $('.payment_receiver').css('display','none');
  })

  // 門市自取
  $('#payment_shop').click(function(){
    // console.log('a');
    $('.payment_receiver').css('display','none');
    $('.payment_shop').css('display', 'none');
    $('.payment_shopMapData').css('display', 'none');
  })


  // 門市電子地圖
  $('.payment_shopMap').click(function(){
    $('.payment_shopMapData').css('display', 'block');
  })




  // 線上付款
  $('#payment_online').click(function(){
    $('.payment_credit').css('display', 'block');
  })

  $('#payment_cash').click(function(){
    $('.payment_credit').css('display', 'none');
  })




  // 信用卡卡號只能輸入數字、按backspace會回去上一個
  $(".payment_cardNumber > input").on("keydown", function(e){
    
    // console.log(e.which);
    if((e.which >= 48 && e.which <= 57) || e.which == 8){
      // console.log(e.target.value.length);
      if(e.target.value.length == 0 && e.which == 8){
        $(this).prev().focus();
      }
    }else{
      e.preventDefault();
    }

  });

  // 信用卡卡號自動換下一行
  $(".payment_cardNumber > input").on("keyup", function(e){
    let str = (e.target.value).replace(/\D/g, "");

    $(this).val(str);
    // console.log(str.length);
    
    if(str.length == 4){
      $(this).next().focus();
    }
  });


  // 信用卡轉背面
  $('.payment_turn').focus(function(){
    // console.log('a');
    $('.payment_cardFront').css('transform','rotateY(180deg)');
    $('.payment_cardFront').css('background-image','url("../images/payment/card-back.png")');
    $('.payment_certification').css('visibility','visible');
    $('.payment_certification').css('transform','rotateY(-180deg)');
    $('.payment_number').css('display','none');
    $('.payment_date').css('display','none');
  })

  // 信用卡轉正面

  $('.payment_enterCard').focus(function(){
    // console.log('a');
    $('.payment_cardFront').css('transform','rotateY(0deg)');
    $('.payment_cardFront').css('background-image','url("../images/payment/card-front.png")');
    $('.payment_number').css('display','flex');
    $('.payment_date').css('display','flex');
    $('.payment_certification').css('visibility','hidden');
  })

  $('.payment_year').focus(function(){
    $('.payment_cardFront').css('transform','rotateY(0deg)');
    $('.payment_cardFront').css('background-image','url("../images/payment/card-front.png")');
    $('.payment_number').css('display','flex');
    $('.payment_date').css('display','flex');
    $('.payment_certification').css('visibility','hidden');
  })

  $('.payment_month').focus(function(){
    $('.payment_cardFront').css('transform','rotateY(0deg)');
    $('.payment_cardFront').css('background-image','url("../images/payment/card-front.png")');
    $('.payment_number').css('display','flex');
    $('.payment_date').css('display','flex');
    $('.payment_certification').css('visibility','hidden');
  })

})
