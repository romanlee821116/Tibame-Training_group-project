<?php
function getPDO(){
    $db_host = "127.0.0.1";
    $db_user = "root";
    $db_pass = "f4a0n1n2y7";
    $db_select = "tfd102_g3";

    $dsn = "mysql:host=".$db_host.";dbname=".$db_select;
    $pdo = new PDO($dsn, $db_user, $db_pass);
    return $pdo;
}

function getFilePath(){

    $ServerRoot = $_SERVER["DOCUMENT_ROOT"];

    $filePath = "/tfd102_g3/Upload/";

    return $ServerRoot.$filePath;
}

?>