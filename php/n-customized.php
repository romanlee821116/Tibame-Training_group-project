<?php
    include("./connection.php"); 

    //取得cardimage
    $sql_cardImage = 'SELECT * FROM cardimage';
    $cardImage = getPDO()->prepare($sql_cardImage);
    $cardImage->execute();
    $card = $cardImage->fetchAll();
    echo json_encode($card);
?>