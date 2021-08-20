<?php
include("./connection.php"); 

$keyword = isset($_POST['keyword']) ? $_POST['keyword']:'';
$pdo = getPDO();
$pdata = $pdo->prepare("SELECT product_name from favorite where `account` = :keyword");
$pdata->bindParam("keyword" , $keyword);
$pdata -> execute();
$data_memberFavorite = $pdata->fetchAll();
$response = Array();
foreach($data_memberFavorite as $value){
    array_push($response,rtrim($value['product_name']));
}

print_r(json_encode($response));