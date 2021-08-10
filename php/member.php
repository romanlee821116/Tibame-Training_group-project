<?php

    $keyword = isset($_POST['keyword']) ? $_POST['keyword']:''; //用isset去判斷有沒有抓到值，沒有就空值
    // alert($account);
    
    //因為我們的$data是定義在if裡面，所以下面回傳會因為$name的判斷沒過而拿不到$data，所以一開始定義了一個空值
    $data_member=[];
    $data_memberOrder=[];
    $data_memberOrderDetail=[]; 
    $data_memberShippingDiscount=[];
    $data_memberFavorite=[];

    include('connection.php');
    $pdo = getPDO();
    

    if($keyword != ''){
        //建立SQL語法
        $sql_member = "SELECT * FROM member WHERE account = '$keyword'";

        $sql_memberOrder = "SELECT * FROM `order` WHERE account = '$keyword'";

        $sql_memberOrderDetail = 
            "SELECT * FROM order_detail od
            left join `order` o
            on od.order_list = o.order_list
            left join product p
            on od.product_name = p.product_name
            WHERE `account` = :keyword ";

        $sql_memberShippingDiscount = 
            "SELECT * FROM `order` o 
            left JOIN shippingfee s 
            ON o.shipping_id = s.shipping_id
            left JOIN discount d 
            ON o.discount_id = d.discount_id
            WHERE `account` = :keyword ";

        $sql_memberFavorite = 
        "SELECT * from favorite f
        left join product p
        on f.product_name = p.product_name
        where `account` = :keyword";

        //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
        // $statement ->bindValue(1, $account_A);  //第一個問號值
        // -- WHERE account = '$keyword' ";

        // 會員資料庫
        $statement = $pdo->prepare($sql_member);
        $statement -> execute();
        $data_member = $statement->fetchAll();

        // 訂單資料庫
        $statement = $pdo->prepare($sql_memberOrder);
        $statement -> execute();
        $data_memberOrder = $statement->fetchAll();

        // 訂單 & 訂單明細 &產品資料庫
        $statement = $pdo->prepare($sql_memberOrderDetail);
        $statement->bindParam("keyword" , $keyword);
        $statement -> execute();
        $data_memberOrderDetail = $statement->fetchAll();

        // 運費 & 折扣碼
        $statement = $pdo->prepare($sql_memberShippingDiscount);
        $statement->bindParam("keyword" , $keyword);
        $statement -> execute();
        $data_memberShippingDiscount = $statement->fetchAll();

        // 會員收藏商品資料庫
        $statement = $pdo->prepare($sql_memberFavorite);
        $statement->bindParam("keyword" , $keyword);
        $statement -> execute();
        $data_memberFavorite = $statement->fetchAll();

        // 不跑foreach迴圈了，用 json 將資料整包丟給前端，讓前端判斷顯示哪些
    }; 



    // order & orderdetail & ShippingDiscount 三個一起回傳========

    $dataMemberObj = [
        'member' => $data_member,
        'main' => $data_memberOrder,
        'detail'  => $data_memberOrderDetail,
        'shippingDiscount' => $data_memberShippingDiscount,
        'favorite' => $data_memberFavorite,
    ];

    // print_r(json_encode($dataObj));
    echo json_encode($dataMemberObj);


?>