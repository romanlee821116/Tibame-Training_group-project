$(document).ready(function(){
  new Vue({
    el: '#finish_app',
    data: {
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
      shipping: 0,
      total_price: 0,
      itemPrice:0,
    },
    mounted() {
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

      // 清空
      if(localStorage.account){
        let account = localStorage.account;
        localStorage.clear();
        localStorage.setItem('account', account);
      }else if(sessionStorage.account){
        localStorage.clear();
      }
      
    },
  })
})

//jquery
// $(document).ready(function(){
//   let info = JSON.parse(localStorage.getItem('info'))
//   let OC_name = info['deliver_name'];
//   let OC_phone = info['deliver_phone'];
//   let OC_address = info['deliver_address'];
//   let OC_shippingType = info['delivery_type'];
//   let OC_paymentType = info['payment_type'];

//   $('.finish_deliverName').text(OC_name);
//   $('.finish_deliverPhone').text(OC_phone);
//   $('.finish_deliverAddress').text(OC_address);
//   $('.finish_deliveryType').text(OC_shippingType);
//   $('.finish_paymentType').text(OC_paymentType);
// })
