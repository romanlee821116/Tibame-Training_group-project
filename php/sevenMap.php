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
    <link rel="icon" href="../images/index/logo_footer.png">
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
            background: url('../images/payment/seven_shop.png');
            background-position: top;
            background-size: contain;
            background-repeat: no-repeat;
        }
/* 
        .map3_bg img{
            width: 100%; 
            height: auto;
        } */

        .map3_btn{
            width: 18vw;
            height: 8vh;
            position: absolute;
            top: 26%;
            left: 36%;
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
        .shop_svg{
            width: 80%;
            height: 100%;
        }
        @media screen and (max-width: 575px){
            .map3_btn{
            width: 25vw;
            height: 3vh;
            top: 8%;
            left: 32%;
            border-radius: 2px;
            }  
        }
    </style>
</head>
<body>
    <div class="map3_bg" id='map3_btn'>
        <!-- <img src="../images/payment/seven_shop.png"> -->
        <div class='map3_btn' id='shop_btn'>
            <!-- <h3>建盛門市</h3>
            <p style='font-weight: bold'>新竹市東區建中一路52號1樓</p> -->
            <!-- <svg xmlns="http://www.w3.org/2000/svg" width="248" height="72" viewBox="0 0 248 72" > -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 217 44" class='shop_svg'>
            <text id="建盛門市_新竹市東區建中一路52號1樓" data-name="建盛門市
            新竹市東區建中一路52號1樓" transform="translate(0 18)" font-size="17" font-family="YuGothicUI-Bold, Yu Gothic UI" font-weight="700"><tspan x="0" y="0">建盛門市</tspan><tspan y="0" font-family="SegoeUI-Bold, Segoe UI"></tspan><tspan x="0" y="22">新竹市東區建中一路</tspan><tspan y="22" font-family="SegoeUI-Bold, Segoe UI">52</tspan><tspan y="22">號</tspan><tspan y="22" font-family="SegoeUI-Bold, Segoe UI">1</tspan><tspan y="22">樓</tspan></text>
            </svg>

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

