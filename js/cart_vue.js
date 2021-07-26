$(function(){
  new Vue({
    el: "#cart_app",
    data: {
      // 單項商品
      itemList:[
        {
          id: 'item_1',
          itemName: '南投銅鑼燒',
          img: '../images/cart/banner_matcha_item.png',
          price: 480,
          item_Quantity: '6',
          quantity: 1,
          status: false,
        },
        {
          id: 'item_2',
          itemName: '苗栗大福草莓',
          img: '../images/cart/banner_strawberry_item.png',
          price: 480,
          item_Quantity: '6',
          quantity: 1,
          status: false,
        },
        {
          id: 'item_3',
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
        // 刪除多個後若沒商品顯示無商品
        if(this.itemList.length == 0 && this.customization.length == 0){
          $('.cart_NoItem').css('display','block');
        }else if(this.itemList.length > 0 || this.customization.length > 0){
          $('.cart_NoItem').css('display','none');
        }
      },
      // 刪除(禮盒)
      delete_Customization(index){
        // console.log(index);
        this.customization.splice(index,1);
        // 刪除多個後若沒商品顯示無商品
        if(this.itemList.length == 0 && this.customization.length == 0){
          $('.cart_NoItem').css('display','block');
        }else if(this.itemList.length > 0 || this.customization.length > 0){
          $('.cart_NoItem').css('display','none');
        }
      },
      // 刪除打勾的項目
      delete_All(){
        // 一般商品
        // x = this.itemList.length;
        // y = this.customization.length;
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
  
        // 刪除多個後若沒商品顯示無商品
        if(this.itemList.length == 0 && this.customization.length == 0){
          $('.cart_NoItem').css('display','block');
        }else if(this.itemList.length > 0 || this.customization.length > 0){
          $('.cart_NoItem').css('display','none');
        }
      },
      // checkbox被選擇變色，刪除多個變色
      choose(item){
        // checkbox
        item.status=!item.status;
  
        // 刪除多個
        x = this.itemList.length;
        for(let i = 0; i < this.itemList.length; i++){
          if(this.itemList[i].status == false){
            x--;
          };
        };
  
        y = this.customization.length;
        for(let a = 0; a < this.customization.length; a++){
          if(this.customization[a].status == false){
            y--;
          };
        };
        
        if(x+y == 0){
          this.delete_bgc = '#a3a3a3';
          this.delete_cursor = 'default';
        }else if(x+y > 0){
          this.delete_bgc = '#bb866a';
          this.delete_cursor = 'pointer';
        };
      },
      // 打開購物車
      open(){
        $('.cart_cartBoard').css('right','0px');
        // 若沒商品顯示無商品
        if(this.itemList.length == 0 && this.customization.length == 0){
          $('.cart_NoItem').css('display','block');
        }else if(this.itemList.length > 0 || this.customization.length > 0){
          $('.cart_NoItem').css('display','none');
        }
      },
      close(){
        $('.cart_cartBoard').css('right','-600px');
        // 禮盒細項關起來
        $('.cart_detailBorder').css('display','none');
        // 查看禮盒明細按鈕顏色
        $('.cart_detailBtn').css('background-color','#bb866a');
      }
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
        //=====local storage新增總金額=====
        localStorage['totalPrice'] = '';
        localStorage.setItem('totalPrice', total);
        //================================
        return total.toString().replace(/\B(?=(\d{3})+$)/g, ',');
      },
    },
  });
})
