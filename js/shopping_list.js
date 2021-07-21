$(document).ready(function() {
    $('.product_product').first().show().siblings().hide();
    // $('.product_area').first().find("i").addClass("yellow").show();
    // $('.product_area').first().find('span').css({ color: '#172852' });
    // $('.product_area').first().find("img").attr('src', "../images/shop1_hov.png");
    // 點擊切換商品分類內容
    $(".product_area").click(function() {
        var index = $(this).index();
        $(".product_product").eq(index).show().siblings().hide();
        $(this).find("i").addClass("yellow").show();
        $(this).find('span').css({ color: '#172852' });
    });
    // 選擇商品分類
    $(".product_area").mouseenter(function() {
        $(this).find("i").addClass("yellow").show();

        if ($(this).data("num") == 1) {
            $(this).find("img").attr('src', "../images/shopping_list/shop1_hov.png");
        } else if ($(this).data("num") == 2) {
            $(this).find("img").attr('src', "../images/shopping_list/shop2_hov.png");
        } else if ($(this).data("num") == 3) {
            $(this).find("img").attr('src', "../images/shopping_list/shop3_hov.png");
        } else if ($(this).data("num") == 4) {
            $(this).find("img").attr('src', "../images/shopping_list/shop4_hov.png");
        } else if ($(this).data("num") == 5) {
            $(this).find("img").attr('src', "../images/shopping_list/shop5_hov.png");
        } else if ($(this).data("num") == 6) {
            $(this).find("img").attr('src', "../images/shopping_list/shop6_hov.png");
        } else if ($(this).data("num") == 7) {
            $(this).find("img").attr('src', "../images/shopping_list/shop7_hov.png");
        }

        $(this).find('span').css({ color: '#172852' });
    }).mouseleave(function() {
        $(this).find("i").addClass("yellow").hide();

        if ($(this).data("num") == 1) {
            $(this).find("img").attr('src', "../images/shopping_list/shop1.png");
        } else if ($(this).data("num") == 2) {
            $(this).find("img").attr('src', "../images/shopping_list/shop2.png");
        } else if ($(this).data("num") == 3) {
            $(this).find("img").attr('src', "../images/shopping_list/shop3.png");
        } else if ($(this).data("num") == 4) {
            $(this).find("img").attr('src', "../images/shopping_list/shop4.png");
        } else if ($(this).data("num") == 5) {
            $(this).find("img").attr('src', "../images/shopping_list/shop5.png");
        } else if ($(this).data("num") == 6) {
            $(this).find("img").attr('src', "../images/shopping_list/shop6.png");
        } else if ($(this).data("num") == 7) {
            $(this).find("img").attr('src', "../images/shopping_list/shop7.png");
        }

        $(this).find('span').css({ color: '#bb866a' });
    })

    // 商品數量增減 
    $(".min").attr("disabled", true);
    $(".add").click(function() {
        var t = $(this).siblings(".num");
        t.val(parseInt(t.val()) + 1);
        $(".min").removeAttr("disabled");
    });
    $(".min").click(function() {
        var t = $(this).siblings(".num");
        if (parseInt(t.val()) > 1) {
            t.val(parseInt(t.val()) - 1)
        } else {
            $(".min").attr("disabled", "disabled")
        }

    });

    // 加入購物車計算總金額
    // function setTotal() {
    //     $(".product_add_cart").click(function() {
    //         let m = $(this).prev().prev().find("span").html().replace(/[^0-9]/g, "");
    //         let n = $(this).prev().find("input").val();
    //         $("#total").append(m * n);
    //     })
    // }
    // setTotal();


    //愛心點擊
    $('.product_heart').click(function() {
        $(this).toggleClass('product_heart_red');
        $(this).toggleClass('product_heart');

    });
    // 照片slider
    $("")

});