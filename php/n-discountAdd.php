<?php
    include("./connection.php");  
    
    function getFilePath1(){ 
        //Apache實際的根目錄路徑
        $ServerRoot = $_SERVER["DOCUMENT_ROOT"];
        //Apache根目錄之下的檔案存放路徑
        $filePath = "/tfd102/project/g3/images/news/";        
        return $ServerRoot.$filePath;
    };

    $cardFile = $_FILES['files'];

    $discount_name = $_POST['discount_name'];
    $discount_price = $_POST['discount_price'];
    
    $news_title1 = $_POST['news_title1'];
    $news_title2 = $_POST['news_title2'];
    $news_content1 = $_POST['news_content1'];
    $news_content2 = $_POST['news_content2'];
    $news_image_right = $_POST['news_image_right'];
    $news_image_main = $_POST['news_image_main'];
    $news_image1 = $_POST['news_image1'];
    $news_image2 = $_POST['news_image2'];
    $news_image3 = $_POST['news_image3'];
    $news_status = $_POST['news_status'];

    //新增圖
    for($i=0; $i<count($cardFile["tmp_name"]); $i++){
        //Server上的暫存檔路徑含檔名
        $filePath_Temp = $cardFile["tmp_name"][$i];

        //欲放置的檔案路徑
        $filePath = getFilePath1().$cardFile["name"][$i];

        //將暫存檔搬移到正確位置
        copy($filePath_Temp, $filePath);
    };

    //新增discount
    $sql_discountAdd = "INSERT INTO discount(discount_name, discount_price, discount_status)
                        VALUES(?, ?, ?)";
    // 執行
    $statement1 = getPDO()->prepare($sql_discountAdd);
    // //給值
    $statement1->bindValue(1, $discount_name);
    $statement1->bindValue(2, intval($discount_price)); 
    $statement1->bindValue(3, intval($news_status));
    $statement1->execute();

    //找discount_id
    $sql_discountId = "SELECT discount_id FROM discount WHERE discount_name = '$discount_name'";
    $discount_id = getPDO()->query($sql_discountId);
    $discount_id = $discount_id->fetchAll();
    $discount_id = $discount_id[0]['discount_id'];


    //新增news
    $sql_newsAdd = "INSERT INTO news(news_class, news_title1, news_title2, news_content1, news_content2, discount_id, news_image_right, news_image_main, news_image1, news_image2, news_image3, create_date, news_update, news_status)
        VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW(), ?)"; 
    // 執行
    $statement = getPDO()->prepare($sql_newsAdd);
    // //給值
    $statement->bindValue(1, '1');
    $statement->bindValue(2, $news_title1); 
    $statement->bindValue(3, $news_title2);
    $statement->bindValue(4, $news_content1);
    $statement->bindValue(5, $news_content2);
    $statement->bindValue(6, $discount_id);
    $statement->bindValue(7, $news_image_right);
    $statement->bindValue(8, $news_image_main);
    $statement->bindValue(9, $news_image1);
    $statement->bindValue(10, $news_image2);
    $statement->bindValue(11, $news_image3);
    $statement->bindValue(12, intval($news_status));
    $statement->execute();

    // //找news_id
    // $sql_newstId = "SELECT news_id FROM news ORDER BY news_id DESC LIMIT 0 , 1";
    // $news_id = getPDO()->query($sql_newstId);
    // $news_id = $news_id->fetchAll();
    // $news_id = $news_id[0]['news_id'];

    // //更新di

    

    echo "折扣碼新增成功";


?>