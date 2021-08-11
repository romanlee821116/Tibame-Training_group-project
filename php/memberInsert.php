<?php
   
    $keyword = isset($_POST['keyword']) ? $_POST['keyword']:'';
    $memberName = isset($_POST['memberName']) ? $_POST['memberName']:''; //用isset去判斷有沒有抓到值，沒有就空值
    $memberPhone = isset($_POST['memberPhone']) ? $_POST['memberPhone']:''; //用isset去判斷有沒有抓到值，沒有就空值
    $memberCity = isset($_POST['memberCity']) ? $_POST['memberCity']:''; //用isset去判斷有沒有抓到值，沒有就空值
    $memberArea = isset($_POST['memberArea']) ? $_POST['memberArea']:''; //用isset去判斷有沒有抓到值，沒有就空值
    $memberAddress = isset($_POST['memberAddress']) ? $_POST['memberAddress']:''; //用isset去判斷有沒有抓到值，沒有就空值
    $memberGender = isset($_POST['memberGender']) ? $_POST['memberGender']:''; //用isset去判斷有沒有抓到值，沒有就空值

    // $memberCity = mb_substr($memberAddress, 0, 3, 'UTF-8');
    // $memberArea = mb_substr($memberAddress, 3, 3, 'UTF-8');
    // $memberAddress = mb_substr($memberAddress, 6, 20, 'UTF-8');

    
    // alert($account);

    include('connection.php');
    $pdo = getPDO();
    

    if($memberName != '' && $memberPhone != '' && $memberAddress != '' && $memberGender != '' ){
        //建立SQL語法
        $sql_memberNewData = 
        "UPDATE member
        SET name = ?, phone = ?, gender = ?, city = ?, area = ?, address = ?, `update` = NOW()
        WHERE account = ?";

        //執行並查詢，會回傳查詢結果的物件
        $statement = $pdo-> prepare($sql_memberNewData);
        $statement -> bindValue(1, $memberName);
        $statement -> bindValue(2, $memberPhone);
        $statement -> bindValue(3, $memberGender);
        $statement -> bindValue(4, $memberCity);
        $statement -> bindValue(5, $memberArea);
        $statement -> bindValue(6, $memberAddress);
        $statement -> bindValue(7, $keyword);
        $statement -> execute();

        echo 'done';
    }; 


?>