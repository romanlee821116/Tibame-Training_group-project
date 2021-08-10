<?php

  include("./login_sql.php"); 

  $pdo = getPDO();

  //---------------------------------------------------

  $qa_id = $_POST["qa_id"];
  $qa_class = $_POST["qa_class"];
  $question = $_POST["question"];
  $answer = $_POST["answer"];


  //建立SQL
  $sql = "UPDATE qa
          SET qa_class = $qa_class,
          question = '$question',
          answer = '$answer'
          WHERE qa_id = $qa_id";

  //執行
  $pdo->exec($sql);

?>