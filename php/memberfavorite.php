<?php

    $keyword = isset($_POST['keyword']) ? $_POST['keyword']:''; //用isset去判斷有沒有抓到值，沒有就空值
    $deleItemPicName = $_POST["deleItemPicName"];

    include("./connection.php"); 
    $pdo = getPDO();

    // 把圖片檔名，轉換成商品名稱
    //建立SQL語法
    $sql_memberFavoriteGetName = 
    "SELECT f.product_name from favorite f
    left join product p
    on f.product_name = p.product_name
    WHERE `account` = :keyword and product_image1 = :picname";

    $statement = $pdo->prepare($sql_memberFavoriteGetName);
    $statement->bindParam("keyword" , $keyword);
    $statement->bindParam("picname" , $deleItemPicName);
    $statement -> execute();
    $data_memberFavoriteGetName = $statement->fetchAll();

    // 找到商品名稱後，刪除favorite資料庫
    $deleItemName = $data_memberFavoriteGetName[0][0];
        
    //建立SQL語法
    $sql_memberFavoriteDele = 
    "DELETE from favorite
    WHERE `account` = :keyword and product_name = :productname";

    $statement = $pdo->prepare($sql_memberFavoriteDele);
    $statement->bindParam("keyword" , $keyword);
    $statement->bindParam("productname" , $deleItemName);
    $statement -> execute();
    $data_memberFavoriteDele = $statement->fetchAll();
    
    echo 'done';


?>