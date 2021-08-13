<?php

    include("connection.php"); 

    $product_area_num = intval($_POST["product_area_num"]);

    $sql_itemList = "SELECT * FROM product WHERE product_class = ?";
    $statement = getPDO()->prepare($sql_itemList);
    $statement ->bindValue(1,$product_area_num);
    $statement ->execute();
    $statement = $statement->fetchAll();
    echo json_encode($statement);
?>