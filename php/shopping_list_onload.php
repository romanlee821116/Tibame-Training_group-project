<?php
    include("./connection.php"); 
    $sql_itemList = "SELECT * FROM product WHERE product_status = 1 and product_class != 7 ORDER BY product_class";
    $statement = getPDO()->query($sql_itemList);
    $statement = $statement->fetchAll();
    echo json_encode($statement);
?>