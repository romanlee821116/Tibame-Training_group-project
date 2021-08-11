<?php

    $keyword = isset($_POST['keyword']) ? $_POST['keyword']:''; //用isset去判斷有沒有抓到值，沒有就空值
    
    // 會員修改密碼寫入資料庫=================
    $memberOldPsw = $_POST["memberOldPsw"];
    $memberNewPsw = $_POST["memberNewPsw"];

    include('connection.php');
    $pdo = getPDO();
    

    if($keyword != ''){
        //建立SQL語法
        $sql_memberPassword = "SELECT `password` FROM member WHERE `account` = :keyword";
    
        //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
        // $statement ->bindValue(1, $account_A);  //第一個問號值
        // -- WHERE account = '$keyword' ";

        $statement = $pdo->prepare($sql_memberPassword);
        $statement->bindParam("keyword" , $keyword);
        $statement -> execute();
        $data_memberPassword = $statement->fetchAll();

        // echo $data_memberPassword[0];
        // print_r ($data_memberPassword[0][0]);
        
        
    }; 

    // 回傳資料
    echo json_encode($data_memberPassword);

    //如果輸入的舊密碼跟原本的一樣的話，舊更新資料庫成新密碼
    if( $data_memberPassword[0][0] == $memberOldPsw ){
        //建立SQL語法
        $sql_memberChangePsw = 
        "UPDATE member
        SET `password` = ?
        WHERE account = ?";

        //執行並查詢，會回傳查詢結果的物件
        $statement = $pdo-> prepare($sql_memberChangePsw);
        $statement -> bindValue(1, $memberNewPsw);
        $statement -> bindValue(2, $keyword);
        $statement -> execute();

        // echo 'done';
    }


?>