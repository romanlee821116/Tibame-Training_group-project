<?php

    include('./connection.php');
    
    $account = $_POST["account"];
    $password = $_POST["password"];

    // print_r($account);
    // print_r($password);

    $sql = "SELECT * FROM member where account = ? and password = ? ";

    $statement = getPDO()->prepare($sql);
    $statement->bindParam(1, $account);
    $statement->bindParam(2, $password);
    $statement->execute();

    $data = $statement->fetchAll();   
    
    if( count($data) > 0){
        echo $account; 
    }else{
        echo "0";  
    }
    
?>