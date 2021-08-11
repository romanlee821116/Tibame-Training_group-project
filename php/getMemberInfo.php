<?php
    include("./connection.php"); 

    $account = $_POST['account'];

    //找member
    $sql_member = "SELECT * FROM member WHERE account = '$account' ";
    $member = getPDO()->query($sql_member);
    $member = $member->fetchAll();

    echo json_encode($member);
?>