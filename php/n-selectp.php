<?php

    include('./connection.php');

    // $trt = 5;
    $search = $_POST["search"];

    $sql = "SELECT * FROM product where product_id like ?";
    // $sql = "SELECT * FROM product where product_id = ?";

    
    $statement = getPDO()->prepare($sql);
    $statement->bindValue(1, "%".$search."%");
    $statement->execute();
    
    $data = $statement->fetchAll(); 
    echo json_encode($data);  

    

?>