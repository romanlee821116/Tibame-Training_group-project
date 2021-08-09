<?php
    //取得PDO物件
    function getPDO(){

        $db_host = "127.0.0.1";
        $db_user = "root";
        $db_pass = "f4a0n1n2y7";
        $db_select = "tfd102_g3";

        //建立資料庫連線物件
        $dsn = "mysql:host=".$db_host.";dbname=".$db_select;

        //建立PDO物件，並放入指定的相關資料
        $pdo = new PDO($dsn, $db_user, $db_pass);

        return $pdo;        
    }

    //上傳檔案的放置位置(路徑)
    function getFilePath(){        

        //Apache實際的根目錄路徑
        $ServerRoot = $_SERVER["DOCUMENT_ROOT"];

        //Apache根目錄之下的檔案存放路徑
        $filePath = "/tfd102_g3/images/";
        
        return $ServerRoot.$filePath;

    }
?>