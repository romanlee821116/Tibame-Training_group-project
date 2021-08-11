<?php
    include("./connection.php");   
    $discount_name = $_POST['discount_name'];

    $sql_discount = "SELECT discount_price FROM discount WHERE discount_name = '$discount_name' and discount_status= 1";
    $discount_price = getPDO()->query($sql_discount);
    $discount_price = $discount_price->fetchAll();
    
    if($discount_price==null){
        echo '0';
    }else{
        $discount_price = $discount_price[0]['discount_price'];
        echo($discount_price);
    };

?>