<?php
require_once 'ECPay.Payment.Integration.php';
 
$obj = new \ECPay_AllInOne();
        $orderlist = $_POST['orderlist'];
        $item_Name = $_POST['item_Name'] ? $_POST['item_Name'] : '';
        $item_Price = $_POST['item_Price'] ? $_POST['item_Price']: '';
        $item_Qty = $_POST['item_Qty'] ? $_POST['item_Qty']: '';

        $cus_Name = $_POST['cus_Name'] ? $_POST['cus_Name'] : '';
        $cus_Price = $_POST['cus_Price'] ? $_POST['cus_Price']: '';
        $cus_Qty = $_POST['cus_Qty'] ? $_POST['cus_Qty'] : '';
        $total = $_POST['total'];
 
       //服務參數
       $obj->ServiceURL  = "https://payment-stage.ecpay.com.tw/Cashier/AioCheckOut/V5";   //服務位置
       $obj->HashKey     = '5294y06JbISpM5x9' ;                                           //測試用Hashkey，請自行帶入ECPay提供的HashKey
       $obj->HashIV      = 'v77hoKGq4kWxNNIS' ;                                           //測試用HashIV，請自行帶入ECPay提供的HashIV
       $obj->MerchantID  = '2000132';                                                     //測試用MerchantID，請自行帶入ECPay提供的MerchantID
       $obj->EncryptType = '1';                                                           //CheckMacValue加密類型，請固定填入1，使用SHA256加密


       //基本參數(請依系統規劃自行調整)
    //    $MerchantTradeNo = "Test".time() ;
       $MerchantTradeNo = $orderlist;
       $obj->Send['ReturnURL']         = "http://localhost/tfd102_g3/page/finish.html" ;    //付款完成通知回傳的網址
       $obj->Send['OrderResultURL']    = "http://localhost/tfd102_g3/page/finish.html" ;
       $obj->Send['MerchantTradeNo']   = $MerchantTradeNo;                          //訂單編號
       $obj->Send['MerchantTradeDate'] = date('Y/m/d H:i:s');                       //交易時間
       $obj->Send['TotalAmount']       = $total;                                      //交易金額
       $obj->Send['TradeDesc']         = "小春堂" ;                          //交易描述
       $obj->Send['ChoosePayment']     = ECPay_PaymentMethod::Credit ;              //付款方式:Credit
       $obj->Send['IgnorePayment']     = ECPay_PaymentMethod::GooglePay ;           //不使用付款方式:GooglePay

    if($item_Name!=''){
        for($i=0; $i<count($item_Name); $i++){
            array_push($obj->Send['Items'], 
                array('Name' => $item_Name[$i], 'Price' => (int)$item_Price[$i], 'Currency' => "元", 'Quantity' => (int) $item_Qty[$i])            
            );
        }
    }
    if($cus_Name!=''){
        for($i=0; $i<count($cus_Name); $i++){
            array_push($obj->Send['Items'], 
                array('Name' => $cus_Name[$i], 'Price' => (int)$cus_Price[$i], 'Currency' => "元", 'Quantity' => (int) $cus_Qty[$i])            
            );
        }
    }
 
  
     //訂單的商品資料，資料來源就是頁面A的表單傳遞給後端的POST資料，把這些資料再傳給綠界，就會在刷卡頁面中呈現給客戶看
     //其實這邊的資料主要只有訊息呈現，以及產生發票時會用到，對於刷卡金額及流程都不會有任何影響
   

    $Response = (string)$obj->CheckOutString();
    echo $Response;

    echo '<script>document.getElementById("__ecpayForm").submit();</script>';
    // header("Location: ");
    
   
     //產生訂單(auto submit至ECPay)，此步驟會將前述設定的所有參數都一併傳給綠界，並將客戶導到綠界的刷卡頁面
    // $obj->CheckOut();