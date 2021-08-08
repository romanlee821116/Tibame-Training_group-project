Vue.component('double-check', {            
    template: 
        ` 
        <div class="dbc">
            <section></section>
            <p>尚未存檔，是否確認關閉</p>
            <div>
                <button type="button" @click='cancel'>取消</button>
                <button type="button" @click='sure'>確認</button>
            </div>
        </div>                
        `
    ,
    methods:{
        sure(){
            this.$emit('save')
        },
        cancel(){
            this.$emit('cancel')
        }
    },
});

Vue.component('news-add', {
    data(){
        return{  //組件的變數寫在這裡
            n_sort:0,
            on_off:0,
            n_main_title:'',
            n_sec_title:'',
            n_main_content:'',
            n_sec_content:'',
            img_names:['右上圖', '主題', '圖片01', '圖片02', '圖片03'],
        };
    },

    template: `
        <div>
            <div class="n-news_edit">

                <p>新增消息</p>
                    
                <div class="n-news_news_mid">
                    <ul>                    
                        <li>
                            <section>文章分類:
                                <select name="status" id="" v-model='n_sort'>
                                    <option value="0">新品上市</option>
                                    <option value="1">活動消息</option>
                                    <option value="2">媒體報導</option>
                                    <option value="3">店鋪新資訊</option>
                                </select>
                            </section>
                        
                            <section>上下架:
                                <select name="status" id="" v-model='on_off'>
                                    <option value="0">下架</option>
                                    <option value="1">上架</option>
                                </select>
                            </section>
                        </li>

                        <li>
                            <label for="">主標題:</label>
                            <input type="text" v-model='n_main_title'>
                        </li>

                        <li>
                            <label for="">副標題:</label>
                            <input type="text" v-model='n_sec_title'>
                        </li>

                        <li>
                            <label for="">內文01:</label>
                            <textarea name="" id="" cols="73" rows="5" v-model='n_main_content'></textarea>
                        </li>
                        
                        <li>
                            <label for="">內文02:</label>
                            <textarea name="" id="" cols="73" rows="5" v-model='n_sec_content'></textarea>
                        </li>

                    </ul>
                </div>

                <div class="n-news_news_bot">

                    <div class="n-news_group" v-for='(img_name, index) in img_names'>
                        <label :for='index'>{{img_name}}:</label>
                        <input type="file" :id="index" @change='upload_img'>
                        <p>請選擇圖片上傳</p>
                        <div class="n-news_img">
                            <img src=''>
                            <p>請選擇圖片上傳</p>
                        </div>
                    </div> 

                </div>

                <div class="n-news_editbtn">
                    <button class="n-news_close" @click='n_close'>關閉</button>
                    <button class="n-news_save" @click='n_save'>儲存</button>
                </div>

            </div>

            <div id="hide"></div>
        </div>

    `,
    methods:{
        n_close(){ 
            this.$emit('nclose');
        },  
        n_save(){   

            this.$emit('nsave', this.n_sort, this.on_off, this.n_main_title, this.n_sec_title, this.n_main_content, this.n_sec_content);

        },

        upload_img(e){

            var files = e.target.files || e.dataTransfer.files;
            let file = files[0];

            e.target.nextElementSibling.innerText = file.name;

            let readFile = new FileReader();
            readFile.readAsDataURL(file);
            readFile.addEventListener("load", function () {

                e.target.nextElementSibling.nextElementSibling.querySelector('img').src = readFile.result; 

                e.target.nextElementSibling.nextElementSibling.querySelector('p').style.opacity=0;

            });
        },
    }  
});


var appVue = new Vue({
    el: '#app',
    data:{
        dbcheck:false,
        new_edit:false,

        img_names:[ 
            {name:'右上', src:''},
            {name:'主題', src:''},
            {name:'圖片01', src:''},
            {name:'圖片02', src:''},
            {name:'圖片03', src:''},
        ],

        news_number:'',
        on_off_list:['下架', '上架'],
        n_sort_list:['新品上市', '活動消息', '媒體報導', '店鋪新資訊'],
        n_main_title:'',
        n_sec_title:'',
        n_sort:0,
        on_off:0,       
        n_main_content:'',
        n_sec_content:'',                  


        mainbtn: [  
            {name:"會員管理", url: "./n-member.html"},
            {name:"訂單管理", url: "./n-order.html"},
            {name:"商品管理", url: "./n-product.html"},
            {name:"客製化商品管理", url: "./n-customized.html"},
            {name:"消息管理", url: "./n-news.html"},
            {name:"折扣碼管理", url: "./n-discount.html"},
            {name:"Q&A", url: "./n-faq.html"},
        ],
        titles: ['文章編號', '上架日期', '文章分類', '標題', '上下架', '最後更新日期', ''],
        newss:[
            // {
            //     'news_id':'1234567890',
            //     'create_date':'2021/01/01',
            //     'news_class':0,
            //     'news_title1':'新品上市新品上市新品上市新品上市新品上市',
            //     'news_title2':'2新品上市新品上市新品上市新品上市新品上市',
            //     'news_status':0,
            //     'news_update':'2021/03/01 16:16',
            //     'news_content1':'這就是內文',
            //     'news_content2':'2這就是內文',
            //     'news_image_right':'',
            //     'news_image_main':'',
            //     'news_image1':'',
            //     'news_image2':'',
            //     'news_image3':''
            // },
            {
                'news_id':'',
                'create_date':'',
                'news_class':'',
                'news_title1':'',
                'news_title2':'',
                'news_status':'',
                'news_update':'',
                'news_content1':'',
                'news_content2':'',
                'news_image_right':'',
                'news_image_main':'',
                'news_image1':'',
                'news_image2':'',
                'news_image3':''
            }            
        ],
        pages:[
            {page:"<", url: "#"},
            {page:"1", url: "#"},
            {page:"2", url: "#"},
            {page:"3", url: "#"},
            {page:"4", url: "#"},
            {page:"5", url: "#"},
            {page:"...", url: "#"},
            {page:"20", url: "#"},
            {page:">", url: "#"},
        ],
        nowpage:1,
        current_edit:null,
    },
    created:function(){
        this.showNdata(1);
    },

    methods: {
        edit(index){                    
            this.current_edit = index;     

            this.n_sort = this.newss[index].news_class;
            this.on_off = this.newss[index].news_status;
            this.n_main_title = this.newss[index].news_title1;
            this.n_sec_title = this.newss[index].news_title2;
            this.n_main_content = this.newss[index].news_content1;
            this.n_sec_content = this.newss[index].news_content2;

            this.img_names[0]['src'] = '../images/news/'+ this.newss[index].news_image_right;
            this.img_names[1]['src'] = '../images/news/'+ this.newss[index].news_image_main;
            this.img_names[2]['src'] = '../images/news/'+ this.newss[index].news_image1;
            this.img_names[3]['src'] = '../images/news/'+ this.newss[index].news_image2;
            this.img_names[4]['src'] = '../images/news/'+ this.newss[index].news_image3;

        },

        n_close(){       
            this.dbcheck=true;
            let edit_z = document.querySelector('.n-news_edit');
            edit_z.style.opacity = 0;
        },  

        sss(){
            this.current_edit = null;
            this.dbcheck=false;
            let edit_z = document.querySelector('.n-news_edit');
            edit_z.style.opacity = 1;

            this.new_edit = false;
        },

        ccc(){
            this.dbcheck=false;
            let edit_z = document.querySelector('.n-news_edit');
            edit_z.style.opacity = 1;
        },

        n_save(){     

            let n_index = this.$data.current_edit;

            this.newss[n_index].news_status = this.on_off;
            this.newss[n_index].news_class = this.n_sort;
            this.newss[n_index].news_title1 = this.n_main_title;
            this.newss[n_index].news_title2 = this.n_sec_title;
            this.newss[n_index].news_content1 = this.n_main_content;
            this.newss[n_index].news_content2 = this.n_sec_content;


            this.current_edit = null;
        },  

        upload_img(e){

            var files = e.target.files || e.dataTransfer.files;
            let file = files[0];

            e.target.nextElementSibling.innerText = file.name;

            let readFile = new FileReader();
            readFile.readAsDataURL(file);
            readFile.addEventListener("load", function () {

                e.target.nextElementSibling.nextElementSibling.querySelector('img').src = readFile.result; 

                e.target.nextElementSibling.nextElementSibling.querySelector('p').style.opacity=0;
             
            });
        },

        new_add(){
            this.new_edit = true;
            // this.current_edit = "notnull";
        },
        closennn(){
            // this.new_edit = false;

            this.dbcheck=true;
            let edit_z = document.querySelector('.n-news_edit');
            edit_z.style.opacity = 0;
        },
        savennn(n_sort, on_off, n_main_title, n_sec_title, n_main_content, n_sec_content){
            this.new_edit = false;

            // console.log(f_sort);

            let today = new Date()
            let y_today = today.getFullYear()
            let m_today = today.getMonth()+1
            if(m_today < 10 ){
                m_today = '0'+m_today
            }
            let d_today = today.getDate()
            if(d_today < 10 ){
                d_today = '0'+d_today
            }
            let h_today = today.getHours()
            if(h_today < 10 ){
                h_today = '0'+h_today
            }
            let min_today = today.getMinutes()
            if(min_today < 10 ){
                min_today = '0'+min_today
            }
            let u_today = y_today +'/'+ m_today +'/'+ d_today      
            let last_today = `${y_today}/${m_today}/${d_today} ${h_today}:${min_today}`


            let nnn = 
            {      
                'news_id':'1234567890',
                'create_date':u_today,  
                'news_class':parseInt(n_sort),
                'news_title1':n_main_title,
                'news_title2':n_sec_title,
                'news_status':parseInt(on_off),
                'news_update':last_today,
                'news_content1':n_main_content,
                'news_content2':n_sec_content,
            }

            // console.log(nnn);

            this.newss.unshift(nnn);
        },
        log_out(){
            location.href = "./n-login.html"
        },
        
        showNdata(gopage){
            console.log(gopage);
            if(isNaN(gopage)) return;
            this.nowpage = gopage;

            $.ajax({
                method: "POST",
                url: "../php/getNewsData.php",
                data:{ 
                    page : gopage,
                },            
                dataType: "json",
                success: function (response) {
                    appVue.pages = response[0];
                    appVue.newss = response[1];
                },
                error: function(exception) {
                    alert("發生錯誤: " + exception.status);
                },
            });
        },
        
        
    },
    
})