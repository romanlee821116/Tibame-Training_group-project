<?php

// include("./config.php");
include("./connection.php"); 

$nowpage = $_POST["page"];
$pdo = getPDO();
$pagecount = $pdo->query('SELECT * FROM `order`;');
$pagecount = $pagecount->rowCount();
$odata = $pdo->query('SELECT main.* , sp.shipping_fee, sp.shipping_type, dt.discount_name, dt.discount_price FROM `order` as main inner join discount as dt on main.discount_id = dt.discount_id inner join shippingfee as sp on main.shipping_id = sp.shipping_id ORDER BY order_id LIMIT '.(($nowpage-1)*10).',10;');
$odata = $odata->fetchAll();
foreach($odata as $value){
    if($value["order_list"]){
        $one_od = $pdo->query('SELECT product_name,quantity,order_detail_price FROM order_detail WHERE order_list = "'.$value["order_list"].'";');
        $one_od = $one_od->fetchAll();
        $oDetailData[] = $one_od;
    }
}

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
$response = [$page_arr,$odata,$oDetailData];
print_r(json_encode($response));
// print_r($response);
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