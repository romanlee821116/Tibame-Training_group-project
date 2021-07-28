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
          img: '../images/shopping_list/daifuku_mango_c_big.png',
          name: '芒果大福',
          price: '$300元/3入',
          id_price: 300,
        },
        {
          img: '../images/shopping_list/dorayaki_chestnut_c_big.png',
          name: '栗子銅鑼燒',
          price: '$285元/3入',
          id_price: 285,
        },
        {
          img: '../images/shopping_list/taiyaki_sakura_c_big.png',
          name: '櫻花鯛魚燒',
          price: '$345元/3入',
          id_price: 345,
        },
        {
          img: '../images/shopping_list/sweet_madeleine_c_big.png',
          name: '瑪德蓮',
          price: '$120元/3入',
          id_price: 120,
        },
        {
          img: '../images/shopping_list/namagashi_kikyo_b_big.png',
          name: '生菓子花火',
          price: '$330元/3入',
          id_price: 330,
        },
        {
          img: '../images/shopping_list/daifuku_strawberry_b_big.png',
          name: '草莓大福',
          price: '$300元/3入',
          id_price: 300,
        },
        {
          img: '../images/shopping_list/monaka_redBean_b_big.png',
          name: '紅豆最中',
          price: '$300元/3入',
          id_price: 300,
        },
        {
          img: '../images/shopping_list/namagashi_sakura_a_big.png',
          name: '生菓子櫻花',
          price: '$330元/3入',
          id_price: 330,
        },
        {
          img: '../images/shopping_list/sweet_lemon_b_big.png',
          name: '檸檬餅乾',
          price: '$180元/12入',
          id_price: 180,
        },
        {
          img: '../images/shopping_list/dorayaki_chocolate_b_big.png',
          name: '巧克力銅鑼燒',
          price: '$285元/3入',
          id_price: 285,
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

        // 若刪光購物車內容，跳出轉移商品頁面提示框
        let item_List = localStorage.item_List;
        let cus_List = localStorage.customized_List;
        // console.log(item_List.length);
        if(item_List.length =='2' && cus_List.length=='2'){
          $('.checkout_popBG').fadeIn();
        }
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

        // 若刪光購物車內容，跳出轉移商品頁面提示框
        let item_List = localStorage.item_List;
        let cus_List = localStorage.customized_List;
        // console.log(item_List.length);
        if(item_List.length =='2' && cus_List.length=='2'){
          $('.checkout_popBG').fadeIn();
        }
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

        // 若刪光購物車內容，跳出轉移商品頁面提示框
        let item_List = localStorage.item_List;
        let cus_List = localStorage.customized_List;
        // console.log(item_List.length);
        if(item_List.length =='2' && cus_List.length=='2'){
          $('.checkout_popBG').fadeIn();
        }
      },
      // 提交折扣
      sendDiscount(){
        if($('#checkout_discountNumber').val() !== ""){
          $('#checkout_discountNumber').val("");
          $('.checkout_discountMoney').removeClass('checkout_none');
          $('.checkout_removeDiscount').removeClass('checkout_none');
          this.discount = 80;

        // ========================== localStorage ==========================
          // 折扣加進去
          let dis = this.discount;
          localStorage.setItem('discount', dis);
          
          // 總金額重算
          let new_price = parseInt(localStorage.total) - parseInt(localStorage.discount);
          localStorage.setItem('total', new_price);
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
      },
      refresh(index){
        // ====================
        let cart_item = {
          'productId': 0,
          'itemName': '',
          'img': '',
          'price': 0,
          'quantity': 1,
          'status': false,
          "id": new Date(),
        };
        console.log(this.recommend[index].name);
        
        let product_Id = '';
        let this_name = this.recommend[index].name;
        let this_price = this.recommend[index].id_price; 
        let this_img = this.recommend[index].img;
        let this_qty = 1;
        cart_item.productId = product_Id;
        cart_item.itemName = this_name;
        cart_item.img = this_img;
        cart_item.price = parseInt(this_price);
        cart_item.quantity = this_qty;
        console.log(cart_item);        
        if(localStorage.item_List){
            let local_itemList= [];
            for(let i=0; i<JSON.parse(localStorage.item_List).length; i++){                    
                local_itemList.push(JSON.parse(localStorage.item_List)[i].itemName);
            }
            console.log(local_itemList);
            if(local_itemList.indexOf(this_name)==-1){
                let new_itemList = JSON.parse(localStorage.getItem('item_List'));
                new_itemList.push(cart_item);
                localStorage.setItem('item_List', JSON.stringify(new_itemList));
                //價格更新
                let new_subtotal = parseInt(localStorage.subtotal) + this_price;
                let new_total = parseInt(localStorage.total) + this_price;
                localStorage.setItem('subtotal', new_subtotal);
                localStorage.setItem('total', new_total);  
                this.itemPrice = new_subtotal;
                this.total_price = new_total; 
            }else{
                alert('此產品已在訂單內容');
            }
            
        }else{
            let new_itemList = [];
            new_itemList.push(cart_item);
            localStorage['item_List'] = [];
            localStorage.setItem('item_List', JSON.stringify(new_itemList));
            //價格更新
            let new_subtotal = parseInt(localStorage.subtotal) + this_price;
            let new_total = parseInt(localStorage.total) + this_price;
            localStorage.setItem('subtotal', new_subtotal);
            localStorage.setItem('total', new_total);  
            this.itemPrice = new_subtotal;
            this.total_price = new_total;
        }
      

        // 呼叫localStorage商品資料        
        let item = JSON.parse(localStorage.item_List)
        this.itemList =item;
        console.log('refresh');
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
      let a = parseInt($('.checkout_pushItemList').css('left'));
      let b = a - 195;
      if(a < -780){
        $('.checkout_pushItemList').css('left', '0');
      }else{
        $('.checkout_pushItemList').css('left', b+'px');
      }
    })

    //============================可能喜歡================================
  //   let cart_item = {
  //     'productId': 0,
  //     'itemName': '',
  //     'img': '',
  //     'price': 0,
  //     'quantity': 1,
  //     'status': false,
  //     "id": new Date(),
  //   };

  //   $('.checkout_pushItem_add').click(function(e){
  //     e.preventDefault();
  //     console.log('add cart');
  //     let product_Id = '';
  //     let this_name = $(this).prev().prev().text();
  //     let this_price = $(this).closest('.checkout_pushItem').attr('data-id_price'); 
  //     let this_img = $(this).closest('.checkout_pushItem').find('img').attr('src');
  //     let this_qty = 1;
  //     cart_item.productId = product_Id;
  //     cart_item.itemName = this_name;
  //     cart_item.img = this_img;
  //     cart_item.price = parseInt(this_price);
  //     cart_item.quantity = this_qty;
  //     // console.log(cart_item);        
  //     if(localStorage.item_List){
  //         let local_itemList= [];
  //         for(let i=0; i<JSON.parse(localStorage.item_List).length; i++){                    
  //             local_itemList.push(JSON.parse(localStorage.item_List)[i].itemName);
  //         }
  //         console.log(local_itemList);
  //         if(local_itemList.indexOf(this_name)==-1){
  //             let new_itemList = JSON.parse(localStorage.getItem('item_List'));
  //             new_itemList.push(cart_item);
  //             localStorage.setItem('item_List', JSON.stringify(new_itemList));              
  //         }else{
  //             alert('此產品已在訂單內容');
  //         }
          
  //     }else{
  //         let new_itemList = [];
  //         new_itemList.push(cart_item);
  //         localStorage['item_List'] = [];
  //         localStorage.setItem('item_List', JSON.stringify(new_itemList));
  //         $('.product_reminder').fadeIn();
  //             setTimeout(function(){
  //                 $('.product_reminder').fadeOut();
  //         },1000);
  //     }
  // })



})    
    
  
  
  

    
  