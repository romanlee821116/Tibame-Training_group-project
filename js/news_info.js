$(document).ready(function () {
    var ns = new Vue({
        el: '.newsinfo_contentBox',
        data: {
            image_url: '../images/news/',
            newsInfo: [],
        },
        created: function () {
            this.newsInfo = getNews;
        },
        // methods: {
        //     showNdata() {
               
        //         $.ajax({
        //             method: "POST",
        //             url: "../php/news_info.php",
        //             data: {
        //                 tap: this.tap++,
        //                 clickcl: this.classtype,

        //             },
        //             dataType: "json",
        //             success: function (response) {
        //                 ns.news = response[0];
        //             },
        //             error: function (exception) {
        //                 alert("發生錯誤: " + exception.status);
        //             },
        //         });
        //     },
        // }
    })
})