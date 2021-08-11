<?php

  include("./connection.php"); 

  $pdo = getPDO();


  //---------------------------------------------------

  $account = $_POST["account"];
  $member_status = $_POST["member_status"];

  //建立SQL
  $sql = "UPDATE member 
          SET member_status = $member_status
          WHERE account = '$account'";

  //執行
  $pdo->exec($sql);

?>