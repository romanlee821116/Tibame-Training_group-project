$(document).ready(function(){
  new Vue({
    el: "#cart_app",
    data: {
      // 單項商品
      itemList:[
        // {
        //   id: 'item_1',
        //   itemName: '南投銅鑼燒',
        //   img: '../images/cart/banner_matcha_item.png',
        //   price: 480,
        //   item_Quantity: '6',
        //   quantity: 1,
        //   status: false,
        // },
        // {
        //   id: 'item_2',
        //   itemName: '苗栗大福草莓',
        //   img: '../images/cart/banner_strawberry_item.png',
        //   price: 480,
        //   item_Quantity: '6',
        //   quantity: 1,
        //   status: false,
        // },
        // {
        //   id: 'item_3',
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
      delete_bgc: '#a3a3a3',
      delete_cursor: 'default',
    },
    methods: {
      // 數量增加
      add(item){
        // console.log(item.quantity);
        item.quantity++;
        //=============local storage =======================
        let customization = this.customization;      
        localStorage.setItem('customized_List', JSON.stringify(customization));
        let itemList = this.itemList;
        localStorage.setItem('item_List', JSON.stringify(itemList));
      // =================================================
      },
      // 數量減少
      sub(item){
        // console.log(item.quantity);
        if(item.quantity > 1){
          item.quantity--;
          //=============local storage =======================
          let customization = this.customization;      
          localStorage.setItem('customized_List', JSON.stringify(customization));
          let itemList = this.itemList;
          localStorage.setItem('item_List', JSON.stringify(itemList));
          // ===================================================
        };
      },
      // 刪除(單一商品)
      delete_Item(index){
        // console.log(index);
        this.itemList.splice(index,1);
        // 刪除多個後若沒商品顯示無商品
        if(this.itemList.length == 0 && this.customization.length == 0){
          $('.cart_NoItem').css('display','block');
        }else{
          $('.cart_NoItem').css('display','none');
        }
        //=============local storage 刪除=======================
        let itemList = this.itemList;
        localStorage.setItem('item_List', JSON.stringify(itemList));
        // ====================================
      },
      // 刪除(禮盒)
      delete_Customization(index){
        // console.log(index);
        this.customization.splice(index,1);
        // 刪除多個後若沒商品顯示無商品
        if(this.itemList.length == 0 && this.customization.length == 0){
          $('.cart_NoItem').css('display','block');
        }else{
          $('.cart_NoItem').css('display','none');
        }
        //=============local storage 刪除=======================
        let customization = this.customization;
        localStorage.setItem('customized_List', JSON.stringify(customization));
        // ====================================
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
        }else{
          $('.cart_NoItem').css('display','none');
        }
        //=============local storage 刪除=======================
        let customization = this.customization;
        localStorage.setItem('customized_List', JSON.stringify(customization));
        let itemList = this.itemList;
        localStorage.setItem('item_List', JSON.stringify(itemList));
        // =====================================================
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
    mounted() {
      var customized = {
        itemName: '四格小資組合',
        img: '../images/cart/customized_box.png',
        price: 480,
        quantity: 1,
        detail: ['草莓大福(1入)', '抹茶大福(1入)', '柳橙大福(1入)', '巧克力大福(1入)'],
        detail_Quantity: ['1', '1', '1', '1'],
        status: false,
        "id": new Date(),
      };
  
      var item = {
        itemName: '銅鑼燒',
        img: '../images/cart/banner_matcha_item.png',
        price: 120,
        quantity: 1,
        status: false,
        "id": new Date(),
      }
  
      // 新增一般
      let item_array = [];
      item_array.push(item);
      localStorage['item_List'] = [];
      localStorage.setItem('item_List', JSON.stringify(item_array));
  
      // 新增客製
      let customized_array = [];
      customized_array.push(customized);
      localStorage['customized_List'] = [];
      localStorage.setItem('customized_List', JSON.stringify(customized_array));
  
  
      //===客製加一
      // let customized_total = JSON.parse(localStorage.getItem('customized_List'));
      // customized_total.push(customized);  
      // localStorage.setItem('customized_List', JSON.stringify(customized_total));
  
      //===一般加一
      // let item_total = JSON.parse(localStorage.getItem('item_List'));
      // item_total.push(item);  
      // localStorage.setItem('item_List', JSON.stringify(item_total));
  
      if (localStorage.customized_List) {
        let cus = JSON.parse(localStorage.customized_List)
        this.customization =cus;
      }
      if (localStorage.item_List) {
        let item = JSON.parse(localStorage.item_List)
        this.itemList =item;
      }
    },
  });
})
    


//================================jQuery================================

$(function(){
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
  