<?php
    include("./connection.php"); 

    $cardFile = $_FILES['files'];
    $cardIndex = explode(',', $_POST['cardIndex'][0]);


    // echo (count($cardIndex));
    // echo(gettype($cardIndex[0]));
    // print_r($cardIndex);

    function getFilePath1(){ 
        //Apache實際的根目錄路徑
        $ServerRoot = $_SERVER["DOCUMENT_ROOT"];
        //Apache根目錄之下的檔案存放路徑
        $filePath = "/tfd102/project/g3/images/customized/";        
        return $ServerRoot.$filePath;
    };


    for($i=0; $i<count($cardIndex); $i++){
        //Server上的暫存檔路徑含檔名
        $filePath_Temp = $cardFile["tmp_name"][$i];

        //欲放置的檔案路徑
        $filePath = getFilePath1().$cardFile["name"][$i];

        //將暫存檔搬移到正確位置
        if(copy($filePath_Temp, $filePath)){

            //取得POST過來的值
            

            //建立SQL
            $sql = "UPDATE cardimage
                    SET cardimage = ?
                    WHERE cardimage_id=?
                    ";
            
            //執行
            $statement = getPDO()->prepare($sql);
            $statement->bindValue(1 , $cardFile["name"][$i]);             
            $statement->bindValue(2 , intval($cardIndex[$i]));
            $statement->execute();

            //導頁            
            echo "卡片樣式更新成功";

        }else{
            echo "卡片樣式更新失敗";            
        }
    }



    // print_r($_FILES['files']);
    // print_r($_POST['cardIndex'])
?>