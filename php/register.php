<?php
    
    include("./connection.php"); 
    
    //
    $sql_findAc = 'SELECT account FROM member WHERE account = ?';
    $statement = getPDO()->prepare($sql_findAc);
    $statement->bindValue(1, $_POST["account"]);
    $statement->execute();
    $data = $statement->fetchAll();
    if(count($data)==0){
        $account = $_POST["account"];
        $password = $_POST["password"];
        $name = $_POST["name"];
        $gender = $_POST["gender"];
        $phone = $_POST["phone"];
        $city = $_POST["city"];
        $area = $_POST["area"];
        $address = $_POST["address"];

        //建立SQL
        $insert_member = "INSERT INTO member(account, password, name, gender, phone, city, area, address, register_date, `update`, member_status) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW(), 1)";

        //執行
        $member = getPDO()->prepare($insert_member);

        //給值
        $member->bindValue(1, $account);
        $member->bindValue(2, $password);
        $member->bindValue(3, $name);
        $member->bindValue(4, $gender);
        $member->bindValue(5, $phone);
        $member->bindValue(6, $city);
        $member->bindValue(7, $area);
        $member->bindValue(8, $address);
        $member->execute();


        // echo '註冊成功，請重新登入!'; 
        echo '1';
        // echo "<script>location.href = '../page/login.html';</script>"; 
        // echo '註冊成功，請重新登入';
    }else{
        // echo '此帳號已被註冊，請重新輸入帳號';
        echo '0';
    }
?>
