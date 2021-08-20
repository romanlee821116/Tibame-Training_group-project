<?php
// include("./config.php");
include('./connection.php');
$pdo = getPDO();
$nID = $_GET['getNews'];
include('../page/news_info.html');

$info = $pdo->query('SELECT * FROM news WHERE news_id = '.$nID.';');
$info = $info->fetchAll();
echo "<script>";
echo "getNews = JSON.parse('".json_encode($info)."');";
echo "</script>";