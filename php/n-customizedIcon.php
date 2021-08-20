<?php
    include("./connection.php"); 

    $iconFile = $_FILES['files'];
    $iconIndex = explode(',', $_POST['iconIndex'][0]);

    // echo (count($iconIndex));
    // echo(gettype($iconIndex[0]));
    // print_r($iconIndex);

    function getFilePath1(){ 
        //Apache實際的根目錄路徑
        $ServerRoot = $_SERVER["DOCUMENT_ROOT"];
        //Apache根目錄之下的檔案存放路徑
        $filePath = "/tfd102/project/g3/images/customized/";        
        return $ServerRoot.$filePath;
    };


    for($i=0; $i<count($iconIndex); $i++){
        //Server上的暫存檔路徑含檔名
        $filePath_Temp = $iconFile["tmp_name"][$i];

        //欲放置的檔案路徑
        $filePath = getFilePath1().$iconFile["name"][$i];

        //將暫存檔搬移到正確位置
        if(copy($filePath_Temp, $filePath)){

            //建立SQL
            $sql = "UPDATE cardimage
                    SET cardimage = ?
                    WHERE cardimage_id=?
                    ";
            
            //執行
            $statement = getPDO()->prepare($sql);
            $statement->bindValue(1 , $iconFile["name"][$i]);             
            $statement->bindValue(2 , intval($iconIndex[$i]));
            $statement->execute();

            //導頁            
            echo "貼圖樣式更新成功";

        }else{
            echo "貼圖樣式更新失敗";            
        }
    }


    // print_r($_FILES['files']);
    // print_r($_POST['cardIndex'])
?>