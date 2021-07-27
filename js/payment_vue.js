$(document).ready(function(){
  new Vue ({
    el: "#payment_app",
    data: {
      applyData: false,
      // 單項商品
      itemList:[
        // {
        //   id: 'item_1',
        //   itemName: '苗栗草莓大福',
        //   img: '../images/checkout/banner_strawberry_item.png',
        //   price: 480,
        //   item_Quantity: '6',
        //   quantity: 1,
        //   status: false,
        // },
        // {
        //   id: 'item_2',
        //   itemName: '南投銅鑼燒',
        //   img: '../images/cart/banner_matcha_item.png',
        //   price: 480,
        //   item_Quantity: '6',
        //   quantity: 1,
        //   status: false,
        // },
      ],
      // 禮盒
      customization: [
        // {
        //   id: 'customization_1',
        //   itemName: '四格小資組合',
        //   img: '../images/cart/customized_box.png',
        //   price: 480,
        //   quantity: 1,
        //   detail: ['草莓大福(1入)', '抹茶大福(1入)', '柳橙大福(1入)', '巧克力大福(1入)'],
        //   detail_Quantity: ['1', '1', '1', '1'],
        //   status: false,
        // },
        // {
        //   id: 'customization_2',
        //   itemName: '四格小資組合',
        //   img: '../images/cart/customized_box.png',
        //   price: 480,
        //   quantity: 1,
        //   detail: ['草莓大福(1入)', '柳橙大福(1入)', '巧克力大福(1入)'],
        //   detail_Quantity: ['2', '1', '1'],
        //   status: false,
        // },
      ],
      discount: 0,
      total_price: 0,
      itemPrice:0,
      shipping: 0,
      cardNumber1: "",
      cardNumber2: "",
      cardNumber3: "",
      cardNumber4: "",
      cardYear: "",
      cardDate: "",
      cardCertification: "",
    },
    methods: {
      choose(){
        // checkbox
        this.applyData=!this.applyData;
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
      // 折扣    
      this.discount = localStorage.discount;
      
      // 運費
      localStorage.setItem('shipping', this.shipping);

      // 商品總金額、總金額
      if(localStorage.subtotal){     
        this.itemPrice = localStorage.subtotal;
        this.total_price = localStorage.total;
      };
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
}) 
  
    



