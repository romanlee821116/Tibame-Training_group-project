<?php
    // 電子地圖
    define('HOME_URL', 'http://localhost/tfd102_g3/php/');
    require('./Ecpay.Logistic.Integration.php');
    try {
        $AL = new EcpayLogistics();
        $AL->Send = array(
            'MerchantID' => '2000132',
            'MerchantTradeNo' => 'no' . date('YmdHis'),
            'LogisticsSubType' => EcpayLogisticsSubType::UNIMART,
            'IsCollection' => EcpayIsCollection::NO,
            'ServerReplyURL' => 'http://localhost/tfd102_g3/php/Map_data.php',
            // 'ServerReplyURL' => 'http://localhost/tfd102_g3/php/payment.html',
            'ExtraData' => '測試額外資訊',
            'Device' => EcpayDevice::PC
        );
        // CvsMap(Button名稱, Form target)
        $html = $AL->CvsMap('電子地圖(統一)');
        echo $html;
    } catch(Exception $e) {
        echo $e->getMessage();
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: '微軟正黑體';
            overflow: hidden;
        }
        .map3_bg{
            width: 100vw;
            height: 100vh;
            position: relative;
        }

        .map3_bg img{
            width: 100%; 
            height: auto;
        }

        .map3_btn{
            width: 30vw;
            height: 10vh;
            position: absolute;
            top: 31%;
            left: 32%;
            /* border: 1px solid red; */
            padding: 3px 8px;
            cursor: pointer;
            border-radius: 5px;
            box-shadow: 0px 2px 5px #ccc;
            background-color: #fff;
        }  
        .map3_btn p{
            font-size: bold;
        }
        .map3_btn:hover{
            border: 1px solid #ccc;
        }     
        #__paymentButton{
            display: none;
        } 
    </style>
</head>
<body>
    <div class="map3_bg" id='map3_btn'>
        <img src="../images/payment/seven_shop.png">
        <div class='map3_btn' id='shop_btn'>
            <h3>建盛門市</h3>
            <p style='font-weight: bold'>新竹市東區建中一路52號1樓</p>
        </div>
    </div>
    <script>
        let btn = document.getElementById('shop_btn');
        btn.addEventListener('click', function(){
            document.getElementById("__paymentButton").click();
        })
        
    </script>
</body>

</html>

