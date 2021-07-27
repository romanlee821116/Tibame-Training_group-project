$(document).ready(function(){
  new Vue({
    el: "#checkout_app",
    data: {
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
      recommend:[
        {
          img: '../images/checkout/banner_matcha_item.png',
          name: '南投銅鑼燒',
          price: '$480元/6入',
        },
        {
          img: '../images/checkout/banner_strawberry_item.png',
          name: '苗栗草莓大福',
          price: '$480元/6入',
        },
        {
          img: '../images/checkout/banner_matcha_item.png',
          name: '南投銅鑼燒',
          price: '$480元/6入',
        },
        {
          img: '../images/checkout/banner_strawberry_item.png',
          name: '苗栗草莓大福',
          price: '$480元/6入',
        },
        {
          img: '../images/checkout/banner_matcha_item.png',
          name: '南投銅鑼燒',
          price: '$480元/6入',
        },
        {
          img: '../images/checkout/banner_strawberry_item.png',
          name: '苗栗草莓大福',
          price: '$480元/6入',
        },
        {
          img: '../images/checkout/banner_matcha_item.png',
          name: '南投銅鑼燒',
          price: '$480元/6入',
        },
        {
          img: '../images/checkout/banner_strawberry_item.png',
          name: '苗栗草莓大福',
          price: '$480元/6入',
        },
        {
          img: '../images/checkout/banner_matcha_item.png',
          name: '南投銅鑼燒',
          price: '$480元/6入',
        },
        {
          img: '../images/checkout/banner_strawberry_item.png',
          name: '苗栗草莓大福',
          price: '$480元/6入',
        },
      ],
      delete_bgc: '#a3a3a3',
      delete_cursor: 'default',
      discount: 0,
      total_price: 0,
      itemPrice: 0,
      shipping: 0,
    },
    methods: {
      // checkbox被選擇變色，刪除多個變色
      choose(item){
        // checkbox
        item.status=!item.status;
  
        // 刪除多個變色
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

        // ================= localStorage =====================
        // 更新商品內容
        let itemList = this.itemList;
        let cus = this.customization;
        localStorage.setItem('item_List', JSON.stringify(itemList));
        localStorage.setItem('customized_List', JSON.stringify(cus));

        // 商品總金額重算
        let item_total = 0;
        for(let i = 0; i < this.itemList.length; i++){
          let item = this.itemList[i];
          item_total += item.price * item.quantity;
        };
        for(let a = 0; a < this.customization.length; a++){
          let item2 = this.customization[a];
          item_total += item2.price * item2.quantity;
        };
        
        localStorage.setItem('subtotal', item_total);
        this.itemPrice = item_total;

        // 總金額重算
        let new_total = parseInt(localStorage.subtotal - localStorage.discount);
        localStorage.setItem('total', new_total);
        this.total_price = new_total;
        // ===================================================
      },
      // 數量增加
      add(item){
        // console.log(item.quantity);
        item.quantity++;
        //====================== local storage =====================
        // 更新商品內容
        let itemList = this.itemList;
        let cus = this.customization;
        localStorage.setItem('item_List', JSON.stringify(itemList));
        localStorage.setItem('customized_List', JSON.stringify(cus));

        // 價錢更新
        let this_price = item.price;
        let new_subtotal = parseInt(localStorage.subtotal) + this_price;
        let new_total = parseInt(localStorage.total) + this_price;
        localStorage.setItem('subtotal', new_subtotal);
        localStorage.setItem('total', new_total);  
        this.itemPrice = new_subtotal;
        this.total_price = new_total;
        // ==========================================================
      },
      // 數量減少
      sub(item){
        // console.log(item.quantity);
        if(item.quantity > 1){
          item.quantity--;
          //=================== local storage =======================   
          // 更新商品內容
          let itemList = this.itemList;
          let cus = this.customization;
          localStorage.setItem('item_List', JSON.stringify(itemList));
          localStorage.setItem('customized_List', JSON.stringify(cus));

          // 價錢更新
          let this_price = item.price;
          let new_subtotal = parseInt(localStorage.subtotal) - this_price;
          let new_total = parseInt(localStorage.total) - this_price;
          localStorage.setItem('subtotal', new_subtotal);
          localStorage.setItem('total', new_total);  
          this.itemPrice = new_subtotal;
          this.total_price = new_total;
          // ========================================================
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

        //==================== localStorage =======================   
        // 更新商品內容
        let itemList = this.itemList;
        let cus = this.customization;
        localStorage.setItem('item_List', JSON.stringify(itemList));
        localStorage.setItem('customized_List', JSON.stringify(cus));

        // 商品總金額重算
        let item_total = 0;
        for(let i = 0; i < this.itemList.length; i++){
          let item = this.itemList[i];
          item_total += item.price * item.quantity;
        };
        for(let a = 0; a < this.customization.length; a++){
          let item2 = this.customization[a];
          item_total += item2.price * item2.quantity;
        };
        
        localStorage.setItem('subtotal', item_total);
        this.itemPrice = item_total;

        // 總金額重算
        let new_total = parseInt(localStorage.subtotal - localStorage.discount);
        localStorage.setItem('total', new_total);
        this.total_price = new_total;
        // =========================================================
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
        //=============local storage =======================   
        // 更新商品內容
        let itemList = this.itemList;
        let cus = this.customization;
        localStorage.setItem('item_List', JSON.stringify(itemList));
        localStorage.setItem('customized_List', JSON.stringify(cus));

        // 商品總金額重算
        let item_total = 0;
        for(let i = 0; i < this.itemList.length; i++){
          let item = this.itemList[i];
          item_total += item.price * item.quantity;
        };
        for(let a = 0; a < this.customization.length; a++){
          let item2 = this.customization[a];
          item_total += item2.price * item2.quantity;
        };
        
        localStorage.setItem('subtotal', item_total);
        this.itemPrice = item_total;

        // 總金額重算
        let new_total = parseInt(localStorage.subtotal - localStorage.discount);
        localStorage.setItem('total', new_total);
        this.total_price = new_total;
        // ====================================
      },
      // 提交折扣
      sendDiscount(){
        if($('#checkout_discountNumber').val() !== ""){
          $('.checkout_discountMoney').removeClass('checkout_none');
          $('.checkout_removeDiscount').removeClass('checkout_none');
          this.discount = 80;
          // $('#checkout_discountNumber').val() = "";

        // ========================== localStorage ==========================
          // 折扣加進去
          let dis = this.discount;
          localStorage['discount'] = 0;
          localStorage.setItem('discount', JSON.stringify(dis));
          
          // 總金額重算
          let new_price = parseInt(localStorage.total) - parseInt(localStorage.discount);
          localStorage.setItem('total', JSON.stringify(new_price));
          this.total_price = new_price;    
        // ==================================================================
        }  
      },
      // 移除折扣
      deleteDiscount(){
        $('.checkout_discountMoney').addClass('checkout_none');
        $('.checkout_removeDiscount').addClass('checkout_none');
        this.discount = 0;

        // ========================== localStorage ==========================
        // 折扣減掉
        let dis = this.discount;
        localStorage.setItem('discount', JSON.stringify(dis));

        // 總金額重算
        let new_price = parseInt(localStorage.subtotal);
        localStorage.setItem('total', JSON.stringify(new_price));
        this.total_price = new_price;
        // ==================================================================
      }
    },
    computed: {
      // // 商品總金額
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
      //   this.total_price = this.total_item - this.discount;
      //   return this.total_price;
      // }
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
      // 折扣    
      localStorage.setItem('discount', this.discount);
      
      // 商品總金額、總金額
      if(localStorage.subtotal){     
        this.itemPrice = localStorage.subtotal;
        this.total_price = localStorage.total - localStorage.discount;
      };

      // 運費
      localStorage.setItem('shipping', this.shipping);

      // if(localStorage.discount != 0){
      //   $('.checkout_discountMoney').removeClass('checkout_none');
      //   $('.checkout_removeDiscount').removeClass('checkout_none');
      // }
      // ====================================================
      
    },
  })
})
$(function(){
    // 按數量增加變色
    // console.log('jQuery run');
    $('.checkout_add').mousedown(function(){
      $(this).css('background-color','#172852');
      $(this).css('color','#ffffff');
    });
  
    $('.checkout_add').mouseup(function(){
      $(this).css('background-color','#ffffff');
      $(this).css('color','#172852');
    });
  
  
  
    // 按數量減少變色
    $('.checkout_less').mousedown(function(){
      let val = $(this).next().val();
      if(val > 1){
        $(this).css('background-color','#172852');
        $(this).css('color','#ffffff');
      }
    });
  
    $('.checkout_less').mouseup(function(){
      let val = $(this).next().val();
      if(val > 1){
        $(this).css('background-color','#ffffff');
        $(this).css('color','#172852');
      }
    });
  
  
  
    // 若數量大於1，減號變白底
    $('.checkout_add').click(function(){
      let val = $(this).prev().val();
      if(val > 1){
        $(this).siblings('.checkout_less').css('background-color','#ffffff');
      }
    });
  
  
  
    // 數量等於1，減號變灰底
    $('.checkout_less').click(function(){
      let val = $(this).next().val();
      if(val == 1){
        $(this).css('background-color','#c4c4c4');
      }
    });
  
  
  
    // 偵測input手動改數字，改變減號底色
    $('.checkout_quantity').on("keypress keyup blur", function(e){
      // 不能輸入符號
      $(this).val($(this).val().replace(/[^\d].+/, ""));
      if ((e.which < 48 || e.which > 57)) {
          e.preventDefault();
      }
      
      let val = $(this).val();
      // console.log(val);
      if(val == 1){
        $(this).prev('.checkout_less').css('background-color','#c4c4c4');
      }else if(val > 1){
        $(this).prev('.checkout_less').css('background-color','#ffffff');
      }else if(val == 0){
        // console.log('a');
        val = 1;
      }
    });
  
    $('.checkout_detailBtn').click(function(){
      console.log('btn click');
    })
  
    // 查看禮盒明細
  
    $('.checkout_detailBtn').click(function(){
      console.log('打開明細');
      let open = $(this).parents('.checkout_customization').children('.checkout_detailBorder');
      open.slideToggle();
      // // 開關按鈕變色
      let btnColor = $(this).css('background-color');
      if(btnColor == 'rgb(187, 134, 106)'){
        $(this).css('background-color','#cba89a');
      }else if(btnColor == 'rgb(203, 168, 154)'){
        $(this).css('background-color','#bb866a');
      };
  
    });
  
    // 輸入折扣碼有值時按鈕會變色
    $('#checkout_discountNumber').on("keypress keyup blur", function(){
      if($(this).val() !== ""){
        $('.checkout_send').css('background-color', '#172852');
        $('.checkout_send').css('cursor', 'pointer');
      }else if($(this).val() == ""){
        $('.checkout_send').css('background-color', '#a3a3a3');
        $('.checkout_send').css('cursor', 'default');
      };
    });
  
  
    // 輪播圖左右按鈕
    // 左邊按鈕
    $('.checkout_pushItemBtnL').click(function(){
      console.log('輪播做事');
      let a = parseInt($('.checkout_pushItemList').css('left'));
      let b = a + 195;
      if(a < 0){
        $('.checkout_pushItemList').css('left', b+'px');
      }else if(a > 0){
        $('.checkout_pushItemList').css('left', '0');
      }
    })
  
    // 右邊按鈕
    $('.checkout_pushItemBtnR').click(function(){
      console.log('輪播做事');
      let a = parseInt($('.checkout_pushItemList').css('left'));
      let b = a - 195;
      if(a < -780){
        $('.checkout_pushItemList').css('left', '0');
      }else{
        $('.checkout_pushItemList').css('left', b+'px');
      }
    })
})    
    
  
  
  

    
  