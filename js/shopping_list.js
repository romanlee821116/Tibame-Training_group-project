$(document).ready(function() {
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
            this_name = (this_name.split('/')[0]).replace(/\s*/g, "");
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


    //愛心點擊
    $('.product_heart').click(function() {
        $(this).toggleClass('product_heart_red');
        if ($(this).hasClass("product_heart_red")) {
            $('.product_reminder2').fadeIn();
            setTimeout(function() {
                $('.product_reminder2').fadeOut();
            }, 1000);
        } else {
            $('.product_reminder3').fadeIn();
            setTimeout(function() {
                $('.product_reminder3').fadeOut();
            }, 1000);
        }
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


    // =========================== php function =========================================


    //當頁面剛載入的時候，我就要傳送一個ajax請求，向後臺詢問“我收藏了哪些文章”
    $.post('./favor_str.php', null, function(res) {
        //根據返回的字串，進行收藏div的渲染
        let titles = $('#article').children('a');
        let arr = res.split(';');
        arr.pop(); //因為用資料庫用分號隔開的，所以最後會多個分號，轉換的陣列最後一項是空的，要把最後的空字串去掉
        let inner = '';
        for (let i = 0; i < arr.length; i) {
            inner = '<li>'
            arr[i]
            '</li>';
        }
        $('#list').html(inner);
        //迴圈所有的按鈕
        for (let i = 0; i < titles.length; i) {
            let $titleText = $(titles[i]).text();
            let $btn = $(titles[i]).next();
            //如果我所點的這個按鈕對應的文章標題在ajax收到的結果字串裡是存在的，就顯示“已收藏”
            if (res.indexOf($titleText) != -1) {
                $btn.val('已收藏');
            } else { //否則顯示“收藏”
                $btn.val('收藏');
            }
            //為每個按鈕繫結點選事件                
            $btn.click(function() {
                if ($btn.val() == '已收藏') {
                    //如果已收藏，則彈框並終止點選事件函式
                    alert('你已收藏過！')
                    return;
                }
                //走到這裡說明沒有收藏過，那我就要傳送ajax請求，在user_favorite欄位裡儲存title
                $.post('./favorite.php', {
                    'title': $titleText
                }, function(res) {
                    //根據返回的結果，即時地渲染進收藏的div裡，一個個append
                    //注：這裡的res和上面的res是兩個ajax請求的結果，是完全不相同的
                    let arr = res.split(';');
                    arr.pop(); //把最後的空字串去掉
                    $btn.val('已收藏');
                    let $newLi = $('<li>');
                    $newLi.html(arr[arr.length - 1]);
                    $('#list').append($newLi);
                })
            })
        }
    })
});