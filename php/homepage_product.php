<?php
    include('./connection.php');

    $sql_home_product = getPDO()->query('SELECT product_name, price, product_image1 FROM product WHERE product_status = 1 AND product_class !=7 Order By Rand()');
    $data = $sql_home_product->fetchAll();
    echo json_encode($data);
?>