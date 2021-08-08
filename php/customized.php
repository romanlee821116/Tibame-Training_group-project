<?php

    include("connection.php"); 
    //
    $sql_cusList = 'SELECT product_list, product_class, product_name, product_image_customize FROM product WHERE product_customize = 1 and product_status = 1 order by product_class';
    $cusList = getPDO()->prepare($sql_cusList);
    $cusList->execute();
    $item = $cusList->fetchAll();

    $sql_cardImage = 'SELECT * FROM cardimage';
    $cardImage = getPDO()->prepare($sql_cardImage);
    $cardImage->execute();
    $card = $cardImage->fetchAll();

    $data = [
        'itemList' => $item,
        'cardImage'=> $card,
    ];

    echo json_encode($data);

?>