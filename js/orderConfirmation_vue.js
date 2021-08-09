$(function(){
  new Vue ({
    el: "#OC_app",
    data: {
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
        }else{
          checkOut();
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
        this.itemList = item;
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

      // 訂購人資訊
      if(localStorage.orderer_data){
        let data = JSON.parse(localStorage.orderer_data)
        this.orderer_data = data;
      };

      // 收件人資訊
      if(localStorage.delivery_data){
        let data = JSON.parse(localStorage.delivery_data)
        this.delivery_data = data;
      };

      // 卡片
      if(localStorage.card_data){
        let data = JSON.parse(localStorage.card_data)
        this.card_data = data;
      };

      // 折扣    
      this.discount = localStorage.discount;

      // 運費
      this.shipping = localStorage.shipping;
      // ====================================================

      // 選宅配到府才會顯示收件人資料
      if(this.orderer_data.delivery_type != "宅配到府"){
        $('.OC_recipient').css('display','none');
      }

      // 選信用卡付款才會顯示信用卡資料
      if(this.card_data == ""){
        $('.OC_credit').css('display','none');
      }
    }
  })
})