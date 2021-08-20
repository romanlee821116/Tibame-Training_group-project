<?php
   
    $Shop_info = [$_POST['CVSAddress'], $_POST['CVSStoreName'],$_POST['CVSStoreID']];
    // echo $_POST['CVSAddress'].'<br>';
    // echo $_POST['CVSStoreName'].'<br>';
    // echo $_POST['CVSStoreID'].'<br>';
    // echo "getNews = JSON.parse('".json_encode($Shop_info)."');";


    echo "<script>";
    echo "localStorage.setItem('CVaddress',  '".$_POST['CVSAddress']."');";
    echo "localStorage.setItem('CVSStoreName',  '".$_POST['CVSStoreName']."');";
    echo "localStorage.setItem('CVSStoreID',  '".$_POST['CVSStoreID']."');";
    // echo "location.href='http://localhost/tfd102_g3/page/payment.html'";
    echo "location.href='https://tibamef2e.com/tfd102/project/g3/page/payment.html'";
    echo "</script>";    
?>