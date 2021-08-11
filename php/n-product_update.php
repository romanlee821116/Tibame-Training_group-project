<?php

  include("./connection.php"); 

  $pdo = getPDO();


  //---------------------------------------------------

  $product_id = $_POST["product_id"];
  $product_class = $_POST["product_class"];
  // $product_name = $_POST["product_name"]; 不可以用
  $expiration = $_POST["expiration"];
  $ingredient = $_POST["ingredient"];
  $product_content = $_POST["product_content"];
  $stock = $_POST["stock"];
  $price = $_POST["price"];
  $net_price = $_POST["net_price"];
  $product_customize = $_POST["product_customize"];
  $product_status = $_POST["product_status"];
  $promotion = $_POST["promotion"];
  $promotion2 = $_POST["promotion2"];
  $product_image1 = $_POST["product_image1"];
  $product_image2 = $_POST["product_image2"];
  $product_image3 = $_POST["product_image3"];
  $product_image_topview = $_POST["product_image_topview"];
  $product_image_customize = $_POST["product_image_customize"];

  $new_img_src = $_POST["new_img_src"];
  $new_img = $_POST["new_img"];


  for($i = 0; $i < 5; $i++){
    $imgStr = $new_img_src[$i];
    if($imgStr !== "圖片"){
      // echo "成功";
      // 過濾base64前面的data字串
      $tmp  = base64_decode(explode(',', $imgStr)[1]);

      file_put_contents('../images/shopping_list/'.$new_img[$i],$tmp);
    }
  }


  //建立SQL
  $sql = "UPDATE product
          SET product_class = $product_class,
          expiration = $expiration,
          ingredient = '$ingredient',
          product_content = '$product_content',
          stock = $stock,
          price = $price,
          net_price = $net_price,
          product_customize = $product_customize,
          product_status = $product_status,
          promotion = $promotion,
          promotion2 = $promotion2,
          product_image1 = '$product_image1',
          product_image2 = '$product_image2',
          product_image3 = '$product_image3',
          product_image_topview = '$product_image_topview',
          product_image_customize = '$product_image_customize'
          WHERE product_id = '$product_id'";

  //執行
  $pdo->exec($sql);

?>