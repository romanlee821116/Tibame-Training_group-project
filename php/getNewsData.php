<?php

// include("./config.php");
include("./connection.php"); 

$nowpage = $_POST["page"];

$pdo = getPDO();
$pagecount = $pdo->query('SELECT * FROM news WHERE discount_id IS NULL ;');
$pagecount = $pagecount->rowCount();
$ndata = $pdo->query('SELECT * FROM news  WHERE discount_id IS NULL LIMIT '.(($nowpage-1)*10).',10;');
$ndata = $ndata->fetchAll();
$allpage = ceil($pagecount/10);

//
$prev = $nowpage-1;
$next = $nowpage+1;
if($nowpage == '1') $prev = 'x';
if($nowpage == $allpage) $next = 'x';

$page_arr[] = ['page'=>'<', 'link'=>$prev];
if($allpage <= 7){
    for($i = 1;$i <= $allpage;$i++){
        $one = ['page'=>$i, 'link'=>$i];
        $page_arr[] = $one;
    }
}
else{
    if($nowpage+3 >= $allpage){
        $page_arr[] = ['page'=>'1', 'link'=>'1'];
        $page_arr[] = ['page'=>'...', 'link'=>'x'];
        for($i = $allpage-4;$i<=$allpage;$i++){
            $one = ['page'=>$i, 'link'=>$i];
            $page_arr[] = $one;
        }
    }
    elseif($nowpage>4){
        for($i = $nowpage-3;$i <= $nowpage+3;$i++){
            $one = ['page'=>$i, 'link'=>$i];
            $page_arr[] = $one;
        }
    }
    else{
        for($i = 1;$i <= 5;$i++){
            $one = ['page'=>$i, 'link'=>$i];
            $page_arr[] = $one;
        }
        $page_arr[] = ['page'=>'...', 'link'=>'x'];
        $page_arr[] = ['page'=>$allpage, 'link'=>$allpage];
    }
}
$page_arr[] = ['page'=>'>', 'link'=>$next];
$response = [$page_arr,$ndata];
print_r(json_encode($response));
// sleep(1);exit;




// function getPDO(){
//     $db_host = "127.0.0.1";
//     $db_user = "root";
//     $db_pass = "wendy729";
//     $db_select = ";

//     $dsn = "mysql:host=".$db_host.";dbname=".$db_select;
//     $pdo = new PDO($dsn, $db_user, $db_pass);
//     return $pdo;
// }

// function getFilePath(){

//     $ServerRoot = $_SERVER["DOCUMENT_ROOT"];

//     $filePath = "/Upload/";

//     return $ServerRoot.$filePath;
// }

?>