<?php

    include("connection.php");

    
    $product_area_num = intval($_POST["product_area_num"]);

    $account = $_POST["account"];  

    
    $sql_itemList_heart = "SELECT P.*, F.product_name as product_name_heart FROM product as P
                        left join(
                            SELECT * FROM favorite WHERE account = ?) as F 
                        on F.product_name = P.product_name
                        WHERE product_class = ?";

    $sql_itemList_normal = "SELECT * from product WHERE product_class = ?";


    if($account == "ohhhhhhhh"){
        $statement = getPDO()->prepare($sql_itemList_normal);
        $statement ->bindValue( 1 , $product_area_num);
        $statement ->execute();
        $statement = $statement->fetchAll();
        
    }else{
        $statement = getPDO()->prepare($sql_itemList_heart);
        $statement ->bindValue( 1 , $account);
        $statement ->bindValue( 2, $product_area_num);
        $statement ->execute();
        $statement = $statement->fetchAll();
            
    };
    
    echo json_encode($statement);

?>