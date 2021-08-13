<?php

    include('./connection.php');

    $search = $_POST["search"];

    $sql = "SELECT * FROM tfd102_g3.order where order_list like ?";
    
    $statement = getPDO()->prepare($sql);
    $statement->bindValue(1, "%".$search."%");
    $statement->execute();
    
    $data = $statement->fetchAll(); 
    echo json_encode($data);  
?>