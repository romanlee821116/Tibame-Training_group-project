<?php
    
    include("./connection.php");   

    //接從ajax傳來的值
    $account = $_POST['account'];
    $orderlist = $_POST['orderlist'];
    $payment= $_POST['payment'];
    $shipping_id= $_POST['shipping_id'];
    $store= $_POST['store'];
    $shipping_address= $_POST['shipping_address'];
    $receiver_name= $_POST['receiver_name'];
    $receiver_phone= $_POST['receiver_phone'];
    $payment_status= $_POST['payment_status'];
    $shipping_status= $_POST['shipping_status'];
    $order_status= $_POST['order_status'];
    $order_date= $_POST['order_date'];
    $discount_id= $_POST['discount_id'];
    $item_List=  $_POST['item_List'];
    $customized_List = $_POST['customized_List'];
    $shipping = $_POST['shipping'];
    $total = $_POST['total'];

    //找disountID
    $sql_discount_id = "SELECT discount_id FROM discount WHERE discount_price = '$discount_id' ";
    $discount_id = getPDO()->query($sql_discount_id);
    $discount_id = $discount_id->fetchAll();
    $discount_id = $discount_id[0]['discount_id'];

    // order資料庫建立訂單
    $sql = "INSERT INTO `order`(order_list, account, payment, shipping_id, store, shipping_address, receiver_name, receiver_phone, payment_status, shipping_status, order_status, order_date, discount_id)
            VALUES(?, ?, ?, ?, ?, ? ,? ,? ,? ,? ,? ,NOW() ,?)";

    // 執行
    $statement = getPDO()->prepare($sql);
    // //給值
    $statement->bindValue(1, $orderlist);
    $statement->bindValue(2, $account); //會員帳號，需要跟member裡面的一樣
    $statement->bindValue(3, $payment);
    $statement->bindValue(4, $shipping_id);
    $statement->bindValue(5, $store);
    $statement->bindValue(6, $shipping_address);
    $statement->bindValue(7, $receiver_name);
    $statement->bindValue(8, $receiver_phone);
    $statement->bindValue(9, $payment_status);
    $statement->bindValue(10, $shipping_status);
    $statement->bindValue(11, $order_status);
    $statement->bindValue(12, $discount_id);
    $statement->execute();


    // order_detail資料庫建立產品清單
    if($item_List!=''){
        for($i=0; $i< count($item_List); $i++ ){
            $product_name = $item_List[$i]['itemName'];
            $quantity = intval($item_List[$i]['quantity']);
            $order_detail_price = intval($item_List[$i]['price']);
            // insert
            $sql_order_detail = "INSERT INTO order_detail(order_list, product_name, quantity, order_detail_price) 
                VALUES(?, ?, ?, ?)";
            //執行
            $statement_order_detail = getPDO()->prepare($sql_order_detail);
            //給值
            $statement_order_detail->bindValue(1, $orderlist);
            $statement_order_detail->bindValue(2, $product_name);
            $statement_order_detail->bindValue(3, $quantity);
            $statement_order_detail->bindValue(4, $order_detail_price);
            $statement_order_detail->execute();
            
    
            //update商品庫存量
            $sql_prodcut = "UPDATE product 
                            SET stock = stock- $quantity
                            WHERE product_name = '$product_name'";
            $result = getPDO()->exec($sql_prodcut);          
            
        }
    }
    

    //客製化
    if($customized_List != ''){
        for($j=0; $j< count($customized_List); $j++ ){
            $product_name = $customized_List[$j]['boxType'];
                if($product_name == 4 ){
                    $product_name = '客製化禮盒一';
                }else if($product_name == 6){
                    $product_name = '客製化禮盒二';
                }else{
                    $product_name = '客製化禮盒三';
                };

            $quantity = intval($customized_List[$j]['quantity']);
            $order_detail_price = intval($customized_List[$j]['price']);
            // order_detail新增
            $sql_customize = "INSERT INTO order_detail(order_list, product_name, quantity, order_detail_price) 
                VALUES(?, ?, ?, ?)";    
            //執行
            $statement_customize = getPDO()->prepare($sql_customize);
            //給值
            $statement_customize->bindValue(1, $orderlist);
            $statement_customize->bindValue(2, $product_name);
            $statement_customize->bindValue(3, $quantity);
            $statement_customize->bindValue(4, $order_detail_price);
            $statement_customize->execute();

            // //找出order_detail_id
            $sql_order_detail_id = "SELECT order_detail_id FROM order_detail WHERE order_list = $orderlist and product_name = '$product_name'"; 
            $order_detail_id = getPDO()->query($sql_order_detail_id);
            $order_detail_id = $order_detail_id->fetchAll();
            $order_detail_id = $order_detail_id[$j]['order_detail_id'];
            // print_r( $order_detail_id);

            // // 將order_detail_id新增到customize
            $sql_customize = "INSERT INTO customize(order_detail_id)
                                VALUES($order_detail_id)";
            getPDO()->exec($sql_customize);

             //找出customize_id
            $sql_customize_id = "SELECT customize_id FROM customize WHERE order_detail_id = $order_detail_id";
            $customize_id = getPDO()->query($sql_customize_id);
            $customize_id = $customize_id->fetchAll();
            $customize_id = $customize_id[0]['customize_id'];

            
            // //商品新增到customize_detail
            for($k=0; $k < count($customized_List[$j]['detail']); $k++){
                $this_name = $customized_List[$j]['detail'][$k];
                $this_qty = intval($customized_List[$j]['detail_Quantity'][$k]);
                //如果單一產品數量>1就要再跑一次
                for($m=0; $m<$this_qty; $m++){
                    $sql_customize_detail = "INSERT INTO customize_detail(customize_id, product_name)
                                        VALUES($customize_id, '$this_name')";
                    getPDO()->exec($sql_customize_detail);
                }
                //產品庫存減少
                $sql_prodcut = "UPDATE product 
                        SET stock = stock- $this_qty
                        WHERE product_name = '$this_name'";
                getPDO()->exec($sql_prodcut);

            }
            // echo '/第一次/';

            if($customized_List[$j]['cardType']!=''){
                //新增到customize_card 卡片樣式
                $cardContent = $customized_List[$j]['cardContent'] ? $customized_List[$j]['cardContent'] : '';
                $cardType = $customized_List[$j]['cardType'];
                $sql_cardType = "INSERT INTO customize_card(customize_id, customize_card_content, cardimage_id)
                                VALUES(?, ?, ?)";
                $sql_cardType=getPDO()->prepare($sql_cardType);
                $sql_cardType->bindValue(1, $customize_id);
                $sql_cardType->bindValue(2, $cardContent);
                $sql_cardType->bindValue(3, $cardType);
                $sql_cardType->execute();

                //新增到customize_card 貼圖樣式
                if($customized_List[$j]['iconType']!=''){
                    for($n=0; $n<count($customized_List[$j]['iconType']); $n++){
                        $iconType = $customized_List[$j]['iconType'][$n];
                        $sql_iconType = "INSERT INTO customize_card(customize_id, customize_card_content, cardimage_id)
                                VALUES(?, ?, ?)";
                        $sql_iconType = getPDO()->prepare($sql_iconType);
                        $sql_iconType ->bindValue(1, $customize_id);
                        $sql_iconType ->bindValue(2, $cardContent);
                        $sql_iconType ->bindValue(3, $iconType);
                        $sql_iconType ->execute();
                    }
                }
            }
        }        
    }


//============
    echo "<script>console.log('購買成功');</script>";
?>