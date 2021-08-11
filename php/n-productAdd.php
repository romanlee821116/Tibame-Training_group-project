<?php

    include("./connection.php"); 

    function getFilePath1(){ 
        //Apache實際的根目錄路徑
        $ServerRoot = $_SERVER["DOCUMENT_ROOT"];
        //Apache根目錄之下的檔案存放路徑
        $filePath = "/tfd102_g3/images/shopping_list/";        
        return $ServerRoot.$filePath;
    };

    $cardFile = $_FILES['files'];
    // print_r($cardFile);

    $product_list = $_POST['product_list'];
    $product_class = $_POST['product_class'];
    $product_name = $_POST['product_name'];
    $expiration = $_POST['expiration'];
    $ingredient = $_POST['ingredient'];
    $product_content = $_POST['product_content'];
    $stock = $_POST['stock'];
    $price = $_POST['price'];
    $net_price = $_POST['net_price'];
    $product_customize = $_POST['product_customize'];
    $product_status = $_POST['product_status'];
    $promotion = $_POST['promotion'];
    $promotion2 = $_POST['promotion2'];
    $product_image1 = $_POST['product_image1'];
    $product_image2 = $_POST['product_image2'];
    $product_image3 = $_POST['product_image3'];
    $product_image_topview = $_POST['product_image_topview'];
    $product_image_customize = $_POST['product_image_customize'];


    //新增圖
    for($i=0; $i<count($cardFile["tmp_name"]); $i++){
        //Server上的暫存檔路徑含檔名
        $filePath_Temp = $cardFile["tmp_name"][$i];

        //欲放置的檔案路徑
        $filePath = getFilePath1().$cardFile["name"][$i];

        //將暫存檔搬移到正確位置
        copy($filePath_Temp, $filePath);
    };

    
    //判斷產品編號有沒有被使用過    
    $sql_findCat = 'SELECT product_list FROM product WHERE product_list = ?';
    $findCat = getPDO()->prepare($sql_findCat);
    $findCat->bindValue(1, $_POST['product_list']);
    $findCat->execute();
    $Cat = $findCat->fetchAll();

    //判斷產品名稱有沒有被使用過    
    $sql_findName = 'SELECT product_name FROM product WHERE product_name = ?';
    $findName = getPDO()->prepare($sql_findName);
    $findName->bindValue(1, $_POST['product_name']);
    $findName->execute();
    $Name = $findName->fetchAll();

    if(count($Cat)!=0){
        echo "0";
    }else if(count($Name)!=0){
        echo "1";
    }else if(count($Cat)==0 && count($Name)==0){
        $sql_productAdd = "INSERT INTO product(product_list, product_class, product_name, expiration, ingredient, product_content, stock, price, net_price, product_customize, product_status, promotion, promotion2, product_image1, product_image2, product_image3, product_image_topview, product_image_customize)
        VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"; 
        // 執行
        $statement = getPDO()->prepare($sql_productAdd);
        // //給值
        $statement->bindValue(1, $product_list);
        $statement->bindValue(2, $product_class); 
        $statement->bindValue(3, $product_name);
        $statement->bindValue(4, $expiration);
        $statement->bindValue(5, $ingredient);
        $statement->bindValue(6, $product_content);
        $statement->bindValue(7, $stock);
        $statement->bindValue(8, $price);
        $statement->bindValue(9, $net_price);
        $statement->bindValue(10, $product_customize);
        $statement->bindValue(11, $product_status);
        $statement->bindValue(12, $promotion);
        $statement->bindValue(13, $promotion2);
        $statement->bindValue(14, $product_image1);
        $statement->bindValue(15, $product_image2);
        $statement->bindValue(16, $product_image3);
        $statement->bindValue(17, $product_image_topview);
        $statement->bindValue(18, $product_image_customize);
        $statement->execute();

        echo "2";
    };


?>