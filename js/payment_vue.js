$(document).ready(function(){
  new Vue ({
    el: "#payment_app",
    data: {
      orderer: false,
      recipient: false,
      // 單項商品
      itemList:[],
      // 禮盒
      customization: [],
      // 個人資料
      orderer_data: [],
      // 收件人資料
      delivery_data: [],
      // 卡片資料
      card_data: [],
      discount: 0,
      total_price: 0,
      itemPrice:0,
      shipping: 0,
    },
    methods: {
      // 同會員資料checkbox
      choose(){
        this.orderer=!this.orderer;
      },
      chooseRecipient(){
        this.recipient=!this.recipient;
      },
      countShipping(){
        this.shipping = 80;
        localStorage.setItem('shipping', this.shipping);
        let new_total = parseInt(localStorage.subtotal) - parseInt(localStorage.discount) + parseInt(localStorage.shipping);
        localStorage.setItem('total', new_total);
        this.total_price = new_total;
      },
      count711(){
        this.shipping = 60;
        localStorage.setItem('shipping', this.shipping);
        let new_total = parseInt(localStorage.subtotal) - parseInt(localStorage.discount) + parseInt(localStorage.shipping);
        localStorage.setItem('total', new_total);
        this.total_price = new_total;
      },
      countShop(){
        this.shipping = 0;
        localStorage.setItem('shipping', this.shipping);
        let new_total = parseInt(localStorage.subtotal) - parseInt(localStorage.discount) + parseInt(localStorage.shipping);
        localStorage.setItem('total', new_total);
        this.total_price = new_total;
      }
    },
    computed: {
      // itemPrice(){
      //   let total = 0;
  
      //   for(let i = 0; i < this.itemList.length; i++){
      //     let item = this.itemList[i];
      //     total += item.price * item.quantity;
      //   };
      //   for(let a = 0; a < this.customization.length; a++){
      //     let item2 = this.customization[a];
      //     total += item2.price * item2.quantity;
      //   };
  
      //   this.total_item = total;
      //   return total.toString().replace(/\B(?=(\d{3})+$)/g, ',');
      // },
      // 訂單總金額
      // totalPrice(){
      //   total_price = this.total_item - this.shipping - this.discount;
      //   return total_price;
      // }
    },
    mounted(){
      // 一般商品
      if(localStorage.item_List) {
        let item = JSON.parse(localStorage.item_List)
        this.itemList = item;
      };
      // 禮盒
      if(localStorage.customized_List) {
        let local_customization = JSON.parse(localStorage.customized_List)
        this.customization = local_customization;
      };

      // 商品總金額、總金額
      if(localStorage.subtotal){     
        this.itemPrice = localStorage.subtotal;
        this.total_price = localStorage.total;
      };

      // 帶入折扣    
      this.discount = localStorage.discount;
      
      // 運費重置
      localStorage.setItem('shipping', this.shipping);

      // 訂購人重置
      localStorage.setItem('orderer_data', this.orderer_data);

      // 收件人重置
      localStorage.setItem('delivery_data', this.delivery_data);

      // 卡片重置
      localStorage.setItem('card_data', this.card_data);


      // ====================================================
    }
  })
})
  
  
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
  $(".payment_cardNumber input").on("keyup", function(e){
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

  // 勾選 同訂購人資料 按紐，套入訂購人資料
  $('.payment_sameOrderer').click(function(){

    let payment_name = $('.payment_name').val();
    let payment_phone = $('.payment_phone').val();
    let payment_address = $('.payment_add').val();

    $('.payment_receiverName').val(payment_name);
    $('.payment_receiverPhone').val(payment_phone);
    $('.payment_receiverAddress').val(payment_address);
  })




  // 按下一頁時，觸發事件
  $('.payment_next').click(function(e){

    // 訂購人資料
    let payment_name = $('.payment_name').val();
    let payment_phone = $('.payment_phone').val();
    let payment_address = $('.payment_add').val();

    // 姓名、電話、地址沒輸入，紅框並停止下一頁
    if(payment_name == ""){
      e.preventDefault();
      $('.payment_name').css('border','2px solid #dc3838');
    }else{
      $('.payment_name').css('border','none');
    };

    if(payment_phone == ""){
      e.preventDefault();
      $('.payment_phone').css('border','2px solid #dc3838');
    }else{
      $('.payment_phone').css('border','none');
    };
    
    if(payment_address == ""){
      e.preventDefault();
      $('.payment_add').css('border','2px solid #dc3838');
    }else{
      $('.payment_add').css('border','none');
    };
    
    // ==========================================================

    // 運送方式跟付款方式是否有選擇(true、false)
    let fakeClick1 = $('#payment_home').is(":checked");
    let fakeClick2 = $('#payment_seven').is(":checked");
    let fakeClick3 = $('#payment_shop').is(":checked");
    let fakeClick4 = $('#payment_online').is(":checked");
    let fakeClick5 = $('#payment_cash').is(":checked");

    // 運送方式沒選，紅框並停止下一頁
    if(fakeClick1 == false && fakeClick2 == false && fakeClick3 == false){
      e.preventDefault();
      $('.payment_fake1').css('border','2px solid #dc3838');
      $('.payment_fake2').css('border','2px solid #dc3838');
      $('.payment_fake3').css('border','2px solid #dc3838');
    };

    // ==============================================================

    // 宅配裡收件人的資料
    let delivery_name = $('.payment_receiverName').val();
    let delivery_phone = $('.payment_receiverPhone').val();
    let delivery_address = $('.payment_receiverAddress').val();

    // 選擇宅配，若訂購人資料沒填寫，紅框並停止下一頁
    if(fakeClick1 == true && delivery_name == ""){
      e.preventDefault();
      $('.payment_receiverName').css('border','2px solid #dc3838');
    }else{
      $('.payment_receiverName').css('border','none');
    };

    if(fakeClick1 == true && delivery_phone == ""){
      e.preventDefault();
      $('.payment_receiverPhone').css('border','2px solid #dc3838');
    }else{
      $('.payment_receiverPhone').css('border','none');
    };

    if(fakeClick1 == true && delivery_address == ""){
      e.preventDefault();
      $('.payment_receiverAddress').css('border','2px solid #dc3838');
    }else{
      $('.payment_receiverAddress').css('border','none');
    };

    // =====================================================================

    // 信用卡資料
    let cardNumber1 = $('#payment_card1').val();
    let cardNumber2 = $('#payment_card2').val();
    let cardNumber3 = $('#payment_card3').val();
    let cardNumber4 = $('#payment_card4').val();

    // 付款方式沒選，紅框並停止下一頁
    if(fakeClick4 == false && fakeClick5 == false){
      e.preventDefault();
      $('.payment_fake4').css('border','2px solid #dc3838');
      $('.payment_fake5').css('border','2px solid #dc3838');
    };

    // =====================================================================

    // 卡號沒輸入，紅框並停止下一頁
    if(fakeClick4 == true && cardNumber1 == ""){
      e.preventDefault();
      $('#payment_card1').css('border','2px solid #dc3838');
    }else{
      $('#payment_card1').css('border','none');
    };

    if(fakeClick4 == true && cardNumber2 == ""){
      e.preventDefault();
      $('#payment_card2').css('border','2px solid #dc3838');
    }else{
      $('#payment_card2').css('border','none');
    };

    if(fakeClick4 == true && cardNumber3 == ""){
      e.preventDefault();
      $('#payment_card3').css('border','2px solid #dc3838');
    }else{
      $('#payment_card3').css('border','none');
    };

    if(fakeClick4 == true && cardNumber4 == ""){
      e.preventDefault();
      $('#payment_card4').css('border','2px solid #dc3838');
    }else{
      $('#payment_card4').css('border','none');
    };

    // ====================================================

    // 卡片有效期限沒輸入，紅框並停止下一頁
    let payment_year = $('.payment_year').val();
    let payment_month = $('.payment_month').val();

    if(fakeClick4 == true && payment_year == null){
      e.preventDefault();
      $('.payment_year').css('border','2px solid #dc3838');
    }else{
      $('.payment_year').css('border','none');
    };

    if(fakeClick4 == true && payment_month == null){
      e.preventDefault();
      $('.payment_month').css('border','2px solid #dc3838');
    }else{
      $('.payment_month').css('border','none');
    };

    // ============================================================

    // 卡片認證碼沒輸入，紅框並停止下一頁
    let payment_turn = $('.payment_turn').val();

    if(fakeClick4 == true && payment_turn == ""){
      e.preventDefault();
      $('.payment_turn').css('border','2px solid #dc3838');
    }else{
      $('.payment_turn').css('border','none');
    };


    // ========================= localStorage ===========================
    // 抓選擇的運送方式
    let delivery_type = $('input[name="transport"]:checked').val();

    // 抓選擇的付款方式
    let payment_type = $('input[name="payment"]:checked').val();

    // 訂購人
    let order_detail = {
      'orderer_name':'',
      'orderer_phone':'',
      'orderer_address':'',
      'delivery_type': '',
      'payment_type':''
    };
    
    // 訂購人資料存進order_detail
    order_detail.orderer_name = payment_name;
    order_detail.orderer_phone = payment_phone;
    order_detail.orderer_address = payment_address;
    order_detail.delivery_type = delivery_type;
    order_detail.payment_type = payment_type;

    // ==================================================

    // if 存宅配收件人資料，else if 購人等於收件人
    if(fakeClick1 == true){
      // 收件人
      let delivery_detail = {
        'delivery_name':'',
        'delivery_phone':'',
        'delivery_address':''
      }
  
      // 收件人資料存進deliver_detail
      delivery_detail.delivery_name = delivery_name;
      delivery_detail.delivery_phone = delivery_phone;
      delivery_detail.delivery_address = delivery_address;

      localStorage.setItem('delivery_data', JSON.stringify(delivery_detail));
    }else if(fakeClick2 == true || fakeClick3 == true){
      // 收件人
      let delivery_detail = {
        'delivery_name':'',
        'delivery_phone':'',
        'delivery_address':''
      }
  
      // 收件人資料存進deliver_detail
      delivery_detail.delivery_name = payment_name;
      delivery_detail.delivery_phone = payment_phone;
      delivery_detail.delivery_address = payment_address;

      localStorage.setItem('delivery_data', JSON.stringify(delivery_detail));
    }

    // ==================================================

    // 選擇信用卡付款的話才存取資料
    if(fakeClick4 == true){
      let card_detail = {
        'cardNumber1': "",
        'cardNumber2': "",
        'cardNumber3': "",
        'cardNumber4': "",
        'cardYear': "",
        'cardMonth': "",
        'cardCertification': ""
      }
  
      card_detail.cardNumber1 = cardNumber1;
      card_detail.cardNumber2 = cardNumber2;
      card_detail.cardNumber3 = cardNumber3;
      card_detail.cardNumber4 = cardNumber4;
      card_detail.cardYear = payment_year;
      card_detail.cardMonth = payment_month;
      card_detail.cardCertification = payment_turn;

      localStorage.setItem('card_data', JSON.stringify(card_detail));

    }





    // 存進localStorage
    localStorage.setItem('orderer_data', JSON.stringify(order_detail));

  })
}) 


