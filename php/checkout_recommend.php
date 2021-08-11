<?php
    include("connection.php"); 

    $sql_recommend = "SELECT product_list, product_name, price, product_image1 From product WHERE product_status =1 and stock>10 and product_class != 7 Order By Rand()  Limit 10";
    $recommend = getPDO()->prepare($sql_recommend);
    $recommend->execute();
    $recommend = $recommend->fetchAll();
    echo json_encode($recommend);
?>