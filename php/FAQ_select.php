<?php

  include("./connection.php"); 

  $pdo = getPDO();

  //---------------------------------------------------

  //建立SQL語法
  $qa = "SELECT * FROM qa";


  //執行並回傳
  $statement = $pdo->prepare($qa);
  $statement->execute(); // 執行

  //抓出全部且依照順序封裝成一個二維陣列
  $data1 = $statement->fetchAll();


  echo json_encode($data1);

?>