<?php

  include("./login_sql.php"); 

  $pdo = getPDO();

  //---------------------------------------------------

  $news_id = $_POST["news_id"];
  $discount_name = $_POST["discount_name"];
  $discount_price = $_POST["discount_price"];
  $news_status = $_POST["news_status"];
  $news_title1 = $_POST["news_title1"];
  $news_title2 = $_POST["news_title2"];
  $news_content1 = $_POST["news_content1"];
  $news_content2 = $_POST["news_content2"];
  $news_image_right = $_POST["news_image_right"];
  $news_image_main = $_POST["news_image_main"];
  $news_image1 = $_POST["news_image1"];
  $news_image2 = $_POST["news_image2"];
  $news_image3 = $_POST["news_image3"];
  $news_update = $_POST["news_update"];

  $new_img_src = $_POST["new_img_src"];
  $new_img = $_POST["new_img"];


  for($i = 0; $i < 5; $i++){
    $imgStr = $new_img_src[$i];
    if($imgStr !== "圖片"){
      // echo "成功";
      // 過濾base64前面的data字串
      $tmp  = base64_decode(explode(',', $imgStr)[1]);

      file_put_contents('../images/news/'.$new_img[$i],$tmp);
    }
  }



  //建立SQL
  $sql = "UPDATE discount as d
            join news as n
              on d.discount_id = n.discount_id
          SET d.discount_name = '$discount_name',
          d.discount_price = $discount_price,
          d.discount_status = $news_status,
          n.news_status = $news_status,
          n.news_title1 = '$news_title1',
          n.news_title2 = '$news_title2',
          n.news_content1 = '$news_content1',
          n.news_content2 = '$news_content2',
          n.news_image_right = '$news_image_right',
          n.news_image_main = '$news_image_main',
          n.news_image1 = '$news_image1',
          n.news_image2 = '$news_image2',
          n.news_image3 = '$news_image3',
          n.news_update = '$news_update'
          WHERE n.news_id = $news_id";

  
  //執行
  $pdo->exec($sql);

?>