<?php
    include('./connection.php');

    $sql_home_news = getPDO()->query('SELECT * FROM news WHERE news_status = 1 Order By Rand() LIMIT 3');
    $data = $sql_home_news->fetchAll();
    echo json_encode($data);
?> 