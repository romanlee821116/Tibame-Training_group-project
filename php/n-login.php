<?php

    include('./connection.php');

    $account = $_POST["account"];
    $password = $_POST["password"];

    $sql = "SELECT * FROM member where account = 'wuwuwu@gamil.com' and password = ? ";
    // $sql = "SELECT * FROM member where account = ? and password = ? ";


    $statement = getPDO()->prepare($sql);
    // $statement->bindParam(1, $account);
    $statement->bindParam(1, $password);
    $statement->execute();

    $data = $statement->fetchAll();   
    
    if( count($data) > 0){
        echo "<script>alert('登入成功!'); location.href = '../page/n-member.html';</script>"; 
    }else{
        echo "<script>alert('帳號或密碼錯誤!'); location.href = '../page/n-login.html';</script>";  
    }
    
    

?>