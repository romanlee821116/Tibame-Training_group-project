<?php
    include("connection.php"); 
    // 操作從ajax傳過來的值
    $item_name = $_POST["name"];
    $account = $_POST["account"];

    //建立SQL語法
    if($item_name){

    }else{
        $sql = "INSERT INTO favorite(product_name, account) VALUES (?, ?)";
    }

    //執行
    $statement = getPDO()->prepare($sql);
    //給值
    $statement->bindValue(1 , $item_name);             
    $statement->bindValue(2 , $account);
    $statement->execute();

?>