<?php

  include("./connection.php"); 

  $pdo = getPDO();


  //---------------------------------------------------

  $order_list = $_POST["order_list"];
  $payment_status = $_POST["payment_status"];
  $order_status = $_POST["order_status"];
  $shipping_status = $_POST["shipping_status"];

  //建立SQL
  $sql = "UPDATE `order` 
          SET payment_status = $payment_status,
          order_status = $order_status,
          shipping_status = $shipping_status
          WHERE order_list = '$order_list'";

  //執行
  $pdo->exec($sql);

?>