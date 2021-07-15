new Vue({
  el: "#cart_app",
  data: {
    // 單項商品
    itemList:[
      {
        id: 'item_1',
        itemName: '南投銅鑼燒',
        img: '../images/banner_matcha_item.png',
        price: 480,
        item_Quantity: '6',
        quantity: 1,
        status: false,
      },
      {
        id: 'item_2',
        itemName: '苗栗大福草莓',
        img: '../images/banner_strawberry_item.png',
        price: 480,
        item_Quantity: '6',
        quantity: 1,
        status: false,
      },
      {
        id: 'item_3',
        itemName: '南投銅鑼燒',
        img: '../images/banner_matcha_item.png',
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
        img: '../images/customized_box.png',
        price: 480,
        quantity: 1,
        detail: ['草莓大福(1入)', '抹茶大福(1入)', '柳橙大福(1入)', '巧克力大福(1入)'],
        detail_Quantity: ['1', '1', '1', '1'],
        status: false,
      },
      {
        id: 'customization_2',
        itemName: '四格小資組合',
        img: '../images/customized_box.png',
        price: 480,
        quantity: 1,
        detail: ['草莓大福(1入)', '柳橙大福(1入)', '巧克力大福(1入)'],
        detail_Quantity: ['2', '1', '1'],
        status: false,
      },
    ],
    delete_bgc: '#a3a3a3',
    delete_cursor: 'default',
  },
  methods: {
    // 數量增加
    add(item){
      // console.log(item.quantity);
      item.quantity++;
    },
    // 數量減少
    sub(item){
      // console.log(item.quantity);
      if(item.quantity > 1){
        item.quantity--;
      };
    },
    // 刪除(單一商品)
    delete_Item(index){
      // console.log(index);
      this.itemList.splice(index,1);
    },
    // 刪除(禮盒)
    delete_Customization(index){
      // console.log(index);
      this.customization.splice(index,1);
    },
    // 刪除打勾的項目
    delete_All(){
      // 一般商品
      for(let i = 0; i < this.itemList.length; i++){
        let item = this.itemList[i].status;
        if(item == true){
          this.itemList.splice([i],1);
          this.delete_bgc = '#a3a3a3';
          this.delete_cursor = 'default';
          // 因為有被減掉的話後面的會往前推，所以要扣掉一個才會算到被往前推的item
          i--;
        };
      };
      // 禮盒
      for(let a = 0; a < this.customization.length; a++){
        let item = this.customization[a].status;
        if(item == true){
          this.customization.splice([a],1);
          this.delete_bgc = '#a3a3a3';
          this.delete_cursor = 'default';
          // 因為有被減掉的話後面的會往前推，所以要扣掉一個才會算到被往前推的item
          a--;
        };
      };
    },
    // checkbox被選擇變色，刪除多個變色
    choose(item){
      // checkbox
      item.status=!item.status;
      // 刪除多個
      for(let i = 0; i < this.itemList.length; i++){
        if(this.itemList[i].status == true){
          this.delete_bgc = '#bb866a';
          this.delete_cursor = 'pointer';
        };
      };
    },
  },
  computed: {
    // 購物車總金額
    total_Price(){
      let total = 0;

      for(let i = 0; i < this.itemList.length; i++){
        let item = this.itemList[i];
        total += item.price * item.quantity;
      };
      for(let a = 0; a < this.customization.length; a++){
        let item2 = this.customization[a];
        total += item2.price * item2.quantity;
      };

      return total.toString().replace(/\B(?=(\d{3})+$)/g, ',');
    },
  },
});