$(document).ready(function() {
    //========================================    AJAX     ========================================
    $.ajax({
        method: 'POST',
        url: '../php/shopping_list_onload.php',
        data:{},
        dataType:'text',
        success: function (data) {      
            // console.log(JSON.parse(data));
            let itemList = JSON.parse(data)
            let html_allItem='';
            for(let i=0; i<itemList.length; i++){
                let product_name = itemList[i]['product_name'];
                let expiration = itemList[i]['expiration'];
                if(expiration=='0'){
                    expiration = 3;
                }else if(expiration =='1'){
                    expiration = 7;
                }else if(expiration =='2'){
                    expiration = 14;
                }else{
                    expiration = 30;
                };
                let ingredient = itemList[i]['ingredient'];
                let price = itemList[i]['price'];
                let product_content = itemList[i]['product_content'];
                let product_image1 = itemList[i]['product_image1'];
                let product_image2 = itemList[i]['product_image2'];
                let product_image3 = itemList[i]['product_image3'];
                let product_list = itemList[i]['product_list'];
                let promotion = itemList[i]['promotion'];
                let stock_status = '';
                let text_class = ''; 
                let btn_class = '';
                if(promotion == '0'){
                    promotion = '新品上市';
                }else{
                    promotion = '熱銷商品';
                }
                let promotion2 = itemList[i]['promotion2'];
                if(promotion2 == '0'){
                    promotion2 = '期間限定商品';
                }else{
                    promotion2 = '人氣商品';
                }
                let stock = parseInt(itemList[i]['stock']);
                if(stock>=10){
                    stock_status = '尚有庫存';
                }else if(stock>0 && stock<10){
                    stock_status = '尚有'+stock+'組商品';
                }else{
                    stock_status = '沒有庫存';
                    text_class='none_stock'
                    btn_class='grey'
                } 

                let item_template=`
                    <div class="product_item">
                        <div class="product_heart"></div>
                        <div class="product_left">
                            <div class="product_img">
                                <img src="../images/shopping_list//${product_image3}" alt="">
                                <img src="../images/shopping_list//${product_image2}" alt="">
                                <img src="../images/shopping_list/${product_image1}" alt="">
                            </div>
                            <div class="product_circle">
                                <div class="circle_grey click"></div>
                                <div class="circle_grey"></div>
                                <div class="circle_grey"></div>
                            </div>
                        </div>
                        <div class="product_right" data-id="${product_list}" data-price="${price}">
                            <p class="product_right_title"><span>${promotion}</span><span> / </span><span>${promotion2}</span></p>
                            <h3 class="product_right_name">${product_name}<span> / (三入)</span></h3>
                            <p class="product_main_content">${product_content}
                            </p>
                            <p class="product_ingredients">成分 : ${ingredient}</p>
                            <p class="product_save_days">保存期限:${expiration}日</p>
                            <p class="product_price"><span>${price}元</span></p>
                            <div class="product_product_num">
                                <div class="product_num_btn">
                                    <button class="min">-</button>
                                    <input type="text" class="num" value="1">
                                    <button class="add">+</button>
                                </div>
                                <p class="product_item_num  ${text_class}">${stock_status}</p>
                            </div>
                            <button class="product_add_cart ${btn_class}">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cart-plus" class="product_svg_cart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M504.717 320H211.572l6.545 32h268.418c15.401 0 26.816 14.301 23.403 29.319l-5.517 24.276C523.112 414.668 536 433.828 536 456c0 31.202-25.519 56.444-56.824 55.994-29.823-.429-54.35-24.631-55.155-54.447-.44-16.287 6.085-31.049 16.803-41.548H231.176C241.553 426.165 248 440.326 248 456c0 31.813-26.528 57.431-58.67 55.938-28.54-1.325-51.751-24.385-53.251-52.917-1.158-22.034 10.436-41.455 28.051-51.586L93.883 64H24C10.745 64 0 53.255 0 40V24C0 10.745 10.745 0 24 0h102.529c11.401 0 21.228 8.021 23.513 19.19L159.208 64H551.99c15.401 0 26.816 14.301 23.403 29.319l-47.273 208C525.637 312.246 515.923 320 504.717 320zM408 168h-48v-40c0-8.837-7.163-16-16-16h-16c-8.837 0-16 7.163-16 16v40h-48c-8.837 0-16 7.163-16 16v16c0 8.837 7.163 16 16 16h48v40c0 8.837 7.163 16 16 16h16c8.837 0 16-7.163 16-16v-40h48c8.837 0 16-7.163 16-16v-16c0-8.837-7.163-16-16-16z"></path></svg>
                                加入購物車
                            </button>
                        </div>
                    </div>
                `;
                html_allItem += item_template;
            }
            $('.product_title').append(html_allItem);

        },
        error: function(exception) {
            alert("數據載入失敗: " + exception.status);
        }
    })
    //========================================local storage========================================
    let cart_item = {
        'productCat': 0,
        'itemName': '',
        'img': '',
        'price': 0,
        'quantity': 1,
        'status': false,
        "id": new Date(),
    };

    $('.product_add_cart').click(function() {
        if ($(this).attr('id') != 'grey') {
            let product_Id = $(this).closest('.product_right').attr('data-id');
            let this_name = $(this).closest('.product_right').find('h3').text();
            this_name = (this_name.split('/')[0]).replace(/\s*/g,"");
            let this_price = $(this).closest('.product_right').find('.product_price').find('span').text();
            let this_img = $(this).closest('.product_right').prev().find('.product_img').find('img').first().attr('src');
            // this_img = this_img.split('/')[3];
            let this_qty = $(this).closest('.product_right').find('.product_product_num').find('input').val();
            cart_item.productCat = product_Id;
            cart_item.itemName = this_name;
            cart_item.img = this_img;
            cart_item.price = parseInt(this_price);
            cart_item.quantity = this_qty;
            // console.log(cart_item);        
            if (localStorage.item_List) {
                let local_itemList = [];
                // console.log(JSON.parse(localStorage.item_List).length);
                for (let i = 0; i < JSON.parse(localStorage.item_List).length; i++) {
                    local_itemList.push(JSON.parse(localStorage.item_List)[i].itemName);
                }
                // console.log(local_itemList);
                if (local_itemList.indexOf(this_name) == -1) {
                    let new_itemList = JSON.parse(localStorage.getItem('item_List'));
                    new_itemList.push(cart_item);
                    localStorage.setItem('item_List', JSON.stringify(new_itemList));
                    $('.product_reminder').fadeIn();
                    setTimeout(function() {
                        $('.product_reminder').fadeOut();
                    }, 1000);
                } else {
                    alert('此產品已在購物車');
                }

            } else {
                let new_itemList = [];
                new_itemList.push(cart_item);
                localStorage['item_List'] = [];
                localStorage.setItem('item_List', JSON.stringify(new_itemList));
                $('.product_reminder').fadeIn();
                setTimeout(function() {
                    $('.product_reminder').fadeOut();
                }, 1000);
            }
        }
    })

    //========================================local storage========================================
    var item_area = $(".product_product");
    // ================================ 抓頁面 ==============================
    var page_show = JSON.parse(localStorage.getItem("product_page_num"));
    $(`.product_product:nth-child(${page_show})`).show().siblings().hide();
    $(`.product_area:nth-child(${page_show})`).find("img").attr("src", `../images/shopping_list/shop${page_show}_hov.png`);
    $(`.product_area:nth-child(${page_show})`).find('span').css({ color: '#172852' });
    $(`.product_area:nth-child(${page_show})`).addClass('yellow');


    // 點擊切換商品分類內容 救救可憐的廢物
    $('.product_area').hover(function() {
        let index = $(this).index();
        // console.log(index);
        $(this).find("img").attr("src", `../images/shopping_list/shop${index+1}_hov.png`);
        $(this).find('span').css({ color: '#172852' });
    }, function() {
        let index = $(this).index();
        if (!($(this).hasClass('yellow'))) {
            $(this).find('span').css({ color: '#bb866a' });
            $(this).find("img").attr("src", `../images/shopping_list/shop${index+1}.png`);
        } else {
            $(this).find('span').css({ color: '#172852' });
        }
    });
    $('.product_area').click(function() {
        let index = $(this).index();
        $(item_area).eq(index).fadeIn(500).show().siblings().hide();
        var prevtarget = $('.yellow');
        if (prevtarget[0]) {
            var tmpIndex = prevtarget.attr("data-num");
            prevtarget.find("img").attr("src", `../images/shopping_list/shop${tmpIndex}.png`);
            prevtarget.find('span').css({ color: '#bb866a' });
        }
        $(this).find("img").attr("src", `../images/shopping_list/shop${index+1}_hov.png`);
        $(this).find('span').css({ color: '#172852' });
        $('.product_area').removeClass('yellow');
        $(this).addClass('yellow');
        $('html, body').animate({
            scrollTop: '0',
        }, 300);
    })

    // 商品數量增減 

    $(".min").attr("disabled", true).css({ backgroundColor: "#ccc" });
    $(".add").click(function() {
        var t = $(this).siblings(".num");
        t.val(parseInt(t.val()) + 1);
        $(this).siblings(".min").removeAttr("disabled").css({ backgroundColor: "white", color: "#172852" });
    });
    $(".min").click(function() {
        var t = $(this).siblings(".num");
        if (parseInt(t.val()) > 1) {
            t.val(parseInt(t.val()) - 1)
        } else {
            $(".min").attr("disabled", "disabled").css({ backgroundColor: "#ccc", color: "black" });
        }

    });
    $(".product_num_btn").find("button").mouseenter(function() {
        $(this).css({ backgroundColor: "#172852", color: "white" })
    }).mouseleave(function() {
        $(this).css({ backgroundColor: "white", color: "#172852" })
    });


    // 購物車icon加數字
    // let count = 0;
    $(".product_add_cart").click(function() {
        // $("#product_counter").html(count += 1).addClass("animated-count");
    })

    //愛心點擊
    $('.product_heart').click(function() {
        $(this).toggleClass('product_heart_red');
        $(this).toggleClass('product_heart');

    });
    // 照片slider
    let index = 0;
    let divWidth = $('.product_img').width();
    $(".product_circle div").click(function() {
        index = ($(this).index());
        $(this).parent().prev('.product_img').animate({
            left: divWidth * index * -1
        });
        $(this).addClass("click").siblings().removeClass("click");
    })

    //回到最上面
    $('.product_backTop').click(function() {
            $('html body').animate({
                scrollTop: '0',
            }, 300);
        })
        //判斷登入登出
    if (localStorage.loginStatus) {
        $('.nav_logOut').fadeIn();
    } else {
        $('.nav_logOut').fadeOut();
    }
    //判斷當前頁面 漢堡連結顏色提示
    if (window.location.pathname == '/page/shopping_list.html') {
        $(".ham_select").find("a:nth-child(4)").css({ color: "#fad689" });
    }
});