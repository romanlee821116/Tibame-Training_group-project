$(function(){
  new Vue ({
    el: "#OC_app",
    data: {
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
      terms: false,
    },
    methods: {
      // 打勾後圖案、下一頁變底色
      choose(){
        // checkbox
        this.terms=!this.terms;
        if(this.terms == true){
          $('.OC_next').css('background-color', '#172852');
          $('.OC_next').css('cursor', 'pointer');
          $('.OC_next').hover(function(){
            $('.OC_next').css('background-color', '#2e447c');
          },function(){
            $('.OC_next').css('background-color', '#172852');
          });
        }else if(this.terms == false){
          $('.OC_next').css('background-color', '#a3a3a3');
          $('.OC_next').css('cursor', 'default');
          $('.OC_next').hover(function(){
            $('.OC_next').css('background-color', '#a3a3a3');
          });
        }
      },
      // 沒打勾就不能去下一頁
      checkOK(e){
        if($('.OC_next').css('background-color') == 'rgb(163, 163, 163)'){
          e.preventDefault();
        }
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
      // // 訂單總金額
      // totalPrice(){
      //   total_price = this.total_item - this.discount;
      //   return total_price;
      // }
    },
    mounted(){
      // 一般商品
      if(localStorage.item_List) {
        let item = JSON.parse(localStorage.item_List)
        this.itemList =item;
      };
      // 禮盒
      if(localStorage.customized_List) {
        let local_customization = JSON.parse(localStorage.customized_List)
        this.customization = local_customization;
      };
      // 商品總金額
      if(localStorage.subtotal){
        this.itemPrice = localStorage.subtotal;
        this.total_price = localStorage.total;
      };
      // 折扣    
      this.discount = localStorage.discount;

      // 運費
      this.shipping = localStorage.shipping;
      // ====================================================
    }
  })
})
