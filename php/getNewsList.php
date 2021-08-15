<?php

include("./connection.php");

$nowtap = $_POST["tap"];
$change = $_POST["clickcl"];
$pdo = getPDO();
$ndata = $pdo->query('SELECT * FROM tfd102_g3.news LIMIT '.($nowtap*12).';');
$ndata = $ndata->fetchAll();

if($change == 1){
    $ndata = $pdo->query('SELECT * FROM tfd102_g3.news LIMIT '.($nowtap*12).';');
    $ndata = $ndata->fetchAll();
}
elseif($change == 2){
    $ndata = $pdo->query('SELECT * FROM tfd102_g3.news WHERE news_class = 0 LIMIT '.($nowtap*12).';');
    $ndata = $ndata->fetchAll();
}
elseif($change == 3){
    $ndata = $pdo->query('SELECT * FROM tfd102_g3.news WHERE news_class = 1 LIMIT '.($nowtap*12).';');
    $ndata = $ndata->fetchAll();
}
elseif($change == 4){
    $ndata = $pdo->query('SELECT * FROM tfd102_g3.news WHERE news_class = 2 LIMIT '.($nowtap*12).';');
    $ndata = $ndata->fetchAll();
}
else{
    $ndata = $pdo->query('SELECT * FROM tfd102_g3.news WHERE news_class = 3 LIMIT '.($nowtap*12).';');
    $ndata = $ndata->fetchAll();
}

$response = [$ndata];
print_r(json_encode($response));
// sleep(1);exit;




// function getPDO(){
//     $db_host = "127.0.0.1";
//     $db_user = "root";
//     $db_pass = "wendy729";
//     $db_select = "tfd102_g3";

//     $dsn = "mysql:host=".$db_host.";dbname=".$db_select;
//     $pdo = new PDO($dsn, $db_user, $db_pass);
//     return $pdo;
// }

// function getFilePath(){

//     $ServerRoot = $_SERVER["DOCUMENT_ROOT"];

//     $filePath = "/tfd102_g3/Upload/";

//     return $ServerRoot.$filePath;
// }
