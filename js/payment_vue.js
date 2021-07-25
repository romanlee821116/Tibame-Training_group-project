new Vue ({
  el: "#payment_app",
  data: {
    applyData: false,
    // 單項商品
    itemList:[
      {
        id: 'item_1',
        itemName: '苗栗草莓大福',
        img: '../images/checkout/banner_strawberry_item.png',
        price: 480,
        item_Quantity: '6',
        quantity: 1,
        status: false,
      },
      {
        id: 'item_2',
        itemName: '南投銅鑼燒',
        img: '../images/cart/banner_matcha_item.png',
        price: 480,
        item_Quantity: '6',
        quantity: 1,
        status: false,
      },
    ],
    // 禮盒
    customization: [
      {
        id: 'customization_1',
        itemName: '四格小資組合',
        img: '../images/cart/customized_box.png',
        price: 480,
        quantity: 1,
        detail: ['草莓大福(1入)', '抹茶大福(1入)', '柳橙大福(1入)', '巧克力大福(1入)'],
        detail_Quantity: ['1', '1', '1', '1'],
        status: false,
      },
      {
        id: 'customization_2',
        itemName: '四格小資組合',
        img: '../images/cart/customized_box.png',
        price: 480,
        quantity: 1,
        detail: ['草莓大福(1入)', '柳橙大福(1入)', '巧克力大福(1入)'],
        detail_Quantity: ['2', '1', '1'],
        status: false,
      },
    ],
    total_item: 0,
    shipping: 0,
    discount: 0,
    total_price: 0,
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
    },
    count711(){
      this.shipping = 60;
    },
    countShop(){
      this.shipping = 0;
    }
  },
  computed: {
    itemPrice(){
      let total = 0;

      for(let i = 0; i < this.itemList.length; i++){
        let item = this.itemList[i];
        total += item.price * item.quantity;
      };
      for(let a = 0; a < this.customization.length; a++){
        let item2 = this.customization[a];
        total += item2.price * item2.quantity;
      };

      this.total_item = total;
      return total.toString().replace(/\B(?=(\d{3})+$)/g, ',');
    },
    // 訂單總金額
    totalPrice(){
      total_price = this.total_item - this.shipping - this.discount;
      return total_price;
    }
  }
})