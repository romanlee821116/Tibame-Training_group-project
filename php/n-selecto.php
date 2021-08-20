<?php

    include('./connection.php');

    $search = $_POST["search"];

    $sql = "SELECT * FROM order where order_list like ?";
    
    $statement = getPDO()->prepare($sql);
    $statement->bindValue(1, "%".$search."%");
    $statement->execute();
    
    $data = $statement->fetchAll(); 
    echo json_encode($data);  
?>