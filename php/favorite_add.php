<?php
    include("connection.php"); 
    // 操作從ajax傳過來的值
    $item_name = $_POST["name"];
    $account = $_POST["account"];

    //建立SQL語法
    $sql_select = "SELECT * FROM favorite WHERE product_name = '$item_name' AND account = '$account'";
    $sql_insert = "INSERT INTO favorite(product_name, account) VALUES (?, ?)";
    // 執行select
    $statement_select = getPDO()->prepare($sql_select);
    $statement_select ->execute();
    $result = $statement_select->fetchAll();
    // 判斷
    if($result){
        echo "已經收藏過了";
    }else{
        // 執行
       $statement_insert = getPDO()->prepare($sql_insert);
       //給值
       $statement_insert->bindValue(1 , $item_name);             
       $statement_insert->bindValue(2 , $account);
       $statement_insert->execute();
    }
    
?>