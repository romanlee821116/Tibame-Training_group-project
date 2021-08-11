<?php

  include("./connection.php"); 

  $pdo = getPDO();


  //---------------------------------------------------

  $news_id = $_POST["news_id"];
  $news_class = $_POST["news_class"];
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
  $sql = "UPDATE news
          SET news_class = $news_class,
          news_status = $news_status,
          news_title1 = '$news_title1',
          news_title2 = '$news_title2',
          news_content1 = '$news_content1',
          news_content2 = '$news_content2',
          news_image_right = '$news_image_right',
          news_image_main = '$news_image_main',
          news_image1 = '$news_image1',
          news_image2 = '$news_image2',
          news_image3 = '$news_image3',
          news_update = '$news_update'
          WHERE news_id = $news_id";

          echo $sql;
  //執行
  $pdo->exec($sql);

?>