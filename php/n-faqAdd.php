<?php
    include("./connection.php"); 

    $qa_class = $_POST['qa_class'];
    $question = $_POST['question'];
    $answer = $_POST['answer'];

    // echo $qa_class;
    // echo $question;
    // echo $answer;

    $sql_qaAdd = "INSERT INTO qa(qa_class, question, answer)
                        VALUES(?, ?, ?)";
    // 執行
    $statement = getPDO()->prepare($sql_qaAdd);
    // //給值
    $statement->bindValue(1, $qa_class);
    $statement->bindValue(2, $question); 
    $statement->bindValue(3, $answer); 
    $statement->execute();

    echo "問題新增成功";
?>