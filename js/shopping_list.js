$(document).ready(function() {
    //========================================local storage========================================
    let cart_item = {
        'productId': 0,
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
            let this_price = $(this).closest('.product_right').find('.product_price').find('span').text();
            let this_img = $(this).closest('.product_right').prev().find('.product_img').find('img').first().attr('src');
            let this_qty = $(this).closest('.product_right').find('.product_product_num').find('input').val();
            cart_item.productId = product_Id;
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
        },300);
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
    $('.product_backTop').click(function(){
        $('html body').animate({
            scrollTop: '0',
        },300);
    })


});