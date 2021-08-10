var my_back = localStorage.getItem("n-login");
if(my_back !== 'yes'){
    location.href = "./n-login.html"
}

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


Vue.component('discount-add', {
    data(){
        return{  //組件的變數寫在這裡
            d_number:'',
            on_off:0,
            d_main_title:'',
            d_sec_title:'',
            d_main_content:'',
            d_sec_content:'',
            img_names:['右上圖', '主題', '圖片01', '圖片02', '圖片03'],
            d_money:0,
        };
    },

    template: `
        <div>
            <div class="n-discount_edit">

                <p>新增折扣碼</p>
                
                <div class="n-discount_discount_mid">
                    <ul>                    
                        <li>
                            <label for="">折扣碼號:
                                <input type="text" v-model='d_number' placeholder="請輸入折扣碼號">
                            </label>

                            <label for="">折扣金額:
                                <input type="text" v-model='d_money' placeholder="請輸入折扣金額" @keyup='regular'>
                            </label>
                        
                            <section>上下架:
                                <select name="status" id="" v-model='on_off'>
                                    <option value="0">下架</option>
                                    <option value="1">上架</option>
                                </select>
                            </section>
                        </li>

                        <li>
                            <label for="">主標題:</label>
                            <input type="text" v-model='d_main_title'>
                        </li>

                        <li>
                            <label for="">副標題:</label>
                            <input type="text" v-model='d_sec_title'>
                        </li>

                        <li>
                            <label for="">內文01:</label>
                            <textarea name="" id="" cols="73" rows="5" v-model='d_main_content'></textarea>
                        </li>
                        
                        <li>
                            <label for="">內文02:</label>
                            <textarea name="" id="" cols="73" rows="5" v-model='d_sec_content'></textarea>
                        </li>

                    </ul>
                </div>

                <div class="n-discount_discount_bot">

                    <div class="n-discount_group" v-for='(img_name, index) in img_names'>
                        <label :for='index'>{{img_name}}:</label>
                        <input type="file" :id="index" @change='upload_img'>
                        <p>請選擇圖片上傳</p>
                        <div class="n-discount_img">
                            <img src=''>
                            <p>請選擇圖片上傳</p>
                        </div>
                    </div>

                </div>

                <div class="n-discount_editbtn">
                    <button class="n-discount_close" @click='d_close'>關閉</button>
                    <button class="n-discount_save" @click='d_save'>儲存</button>
                </div>
            </div>

            <div id="hide"></div>
        </div>

    `,
    methods:{
        d_close(){ 
            this.$emit('dclose');
        },  
        d_save(){   

            this.$emit('dsave', this.d_number, this.d_money, this.on_off, this.d_main_title, this.d_sec_title, this.d_main_content, this.d_sec_content);

        },
        regular(e){
            let str = (e.target.value).replace(/\D/g, "");
            e.target.value = str;
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

        discount_number:'',
        on_off_list:['下架', '上架'],
        d_main_title:'',
        d_sec_title:'',
        d_number:'',
        on_off:0,       
        d_main_content:'',
        d_sec_content:'',  
        d_money:0,       

        group1_name:'請選擇圖片上傳',
        group2_name:'請選擇圖片上傳',
        group3_name:'請選擇圖片上傳',
        group4_name:'請選擇圖片上傳',
        group5_name:'請選擇圖片上傳',

        new_img:['請選擇圖片上傳','請選擇圖片上傳','請選擇圖片上傳','請選擇圖片上傳','請選擇圖片上傳'],
        new_img_src:['圖片','圖片','圖片','圖片','圖片'],

        mainbtn: [  
            {name:"會員管理", url: "./n-member.html"},
            {name:"訂單管理", url: "./n-order.html"},
            {name:"商品管理", url: "./n-product.html"},
            {name:"客製化商品管理", url: "./n-customized.html"},
            {name:"消息管理", url: "./n-news.html"},
            {name:"折扣碼管理", url: "./n-discount.html"},
            {name:"Q&A", url: "./n-faq.html"},
        ],
        titles: ['折扣碼編號', '上架日期', '折扣碼號', '標題', '上下架', '最後更新日期', ''],
        discounts:[
            // {
            //     'discount_id':'1234567890',
            //     'create_date':'2021/01/01',
            //     'discount_name':'cscscs',
            //     'news_title1':'新品上市新品上市新品上市新品上市新品上市',
            //     'news_title2':'2新品上市新品上市新品上市新品上市新品上市',
            //     'news_status':0,
            //     'news_update':'2021/03/01 16:16',
            //     'news_content1':'這就是內文',
            //     'news_content2':'2這就是內文',
            //     'discount_price':200,
            //     'news_image_right':'',
            //     'news_image_main':'',
            //     'news_image1':'',
            //     'news_image2':'',
            //     'news_image3':''
            // },
            {
                'news_id':'',
                'create_date':'',
                'discount_name':'',
                'discount_price':'',
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
        this.showDdata(1);
    },

    methods: {
        edit(index){                    
            this.current_edit = index;     

            this.d_number = this.discounts[index].discount_name;
            this.d_money = this.discounts[index].discount_price;
            this.on_off = this.discounts[index].news_status;
            this.d_main_title = this.discounts[index].news_title1;
            this.d_sec_title = this.discounts[index].news_title2;
            this.d_main_content = this.discounts[index].news_content1;
            this.d_sec_content = this.discounts[index].news_content2;

            this.new_img[0] = this.discounts[index].news_image_right;
            this.new_img[1] = this.discounts[index].news_image_main;
            this.new_img[2] = this.discounts[index].news_image1;
            this.new_img[3] = this.discounts[index].news_image2;
            this.new_img[4] = this.discounts[index].news_image3;

            this.img_names[0]['src'] = '../images/news/'+ this.discounts[index].news_image_right;
            this.img_names[1]['src'] = '../images/news/'+ this.discounts[index].news_image_main;
            this.img_names[2]['src'] = '../images/news/'+ this.discounts[index].news_image1;
            this.img_names[3]['src'] = '../images/news/'+ this.discounts[index].news_image2;
            this.img_names[4]['src'] = '../images/news/'+ this.discounts[index].news_image3;

        },


        d_close(){       
            this.dbcheck=true;
            let edit_z = document.querySelector('.n-discount_edit');
            edit_z.style.opacity = 0;

            // 把預設值設回來
            this.new_img_src = ['圖片','圖片','圖片','圖片','圖片'];

            this.new_img[0] = '請選擇圖片上傳';
            this.new_img[1] = '請選擇圖片上傳';
            this.new_img[2] = '請選擇圖片上傳';
            this.new_img[3] = '請選擇圖片上傳';
            this.new_img[4] = '請選擇圖片上傳';
        },  

        sss(){
            this.current_edit = null;
            this.dbcheck=false;
            let edit_z = document.querySelector('.n-discount_edit');
            edit_z.style.opacity = 1;

            this.new_edit = false;
        },

        ccc(){
            this.dbcheck=false;
            let edit_z = document.querySelector('.n-discount_edit');
            edit_z.style.opacity = 1;
        },

        regular(e){
            let str = (e.target.value).replace(/\D/g, "");
            e.target.value = str;
        },


        d_save(){     

            let d_index = this.$data.current_edit;

            this.discounts[d_index].news_status = this.on_off;
            this.discounts[d_index].discount_name = this.d_number;
            this.discounts[d_index].news_title1 = this.d_main_title;
            this.discounts[d_index].news_title2 = this.d_sec_title;
            this.discounts[d_index].news_content1 = this.d_main_content;
            this.discounts[d_index].news_content2 = this.d_sec_content;
            this.discounts[d_index].discount_price = this.d_money;

            this.discounts[d_index].news_image_right = this.new_img[0];
            this.discounts[d_index].news_image_main = this.new_img[1];
            this.discounts[d_index].news_image1 = this.new_img[2];
            this.discounts[d_index].news_image2 = this.new_img[3];
            this.discounts[d_index].news_image3 = this.new_img[4];
            
            let aa = new Date();
            let year = aa.getFullYear();

            let month = aa.getMonth() + 1;
            if(month < 10 ){
                month = '0' + month
            }

            let date = aa.getDate();
            if(date < 10 ){
                date = '0' + date
            }

            let today = year + '-' + month + '-' + date;
            this.discounts[d_index].news_update = today;

            this.current_edit = null;


            $.ajax({            
                method: "POST",
                url: "../php/n-discount_update.php",
                data:{ 
                    news_id: this.discounts[d_index].news_id, //id
                    discount_name: this.discounts[d_index].discount_name, //折扣碼
                    discount_price: this.discounts[d_index].discount_price, // 折扣金額
                    news_status: this.discounts[d_index].news_status, // 折扣碼上下架

                    news_title1: this.discounts[d_index].news_title1, // 主標題
                    news_title2: this.discounts[d_index].news_title2, //副標題
                    news_content1: this.discounts[d_index].news_content1, // 內文1
                    news_content2: this.discounts[d_index].news_content2, // 內文2

                    news_image_right: this.discounts[d_index].news_image_right, // 個別圖片檔名
                    news_image_main: this.discounts[d_index].news_image_main,
                    news_image1: this.discounts[d_index].news_image1,
                    news_image2: this.discounts[d_index].news_image2,
                    news_image3: this.discounts[d_index].news_image3,
                    news_update: this.discounts[d_index].news_update, // 更新日期


                    new_img: this.new_img, // 所有圖片檔名
                    new_img_src: this.new_img_src, // 圖片base64
                },            
                dataType: "text",
                success: function (response) {
                    alert("更新成功");
                },
                error: function(exception) {
                    alert("發生錯誤: " + exception.status);
                }
            });

            // 把預設值設回來
            this.new_img_src = ['圖片','圖片','圖片','圖片','圖片'];
            
            this.new_img[0] = '請選擇圖片上傳';
            this.new_img[1] = '請選擇圖片上傳';
            this.new_img[2] = '請選擇圖片上傳';
            this.new_img[3] = '請選擇圖片上傳';
            this.new_img[4] = '請選擇圖片上傳';


        },  

        upload_img(e){

            var files = e.target.files || e.dataTransfer.files;
            let file = files[0];

            
            this.new_img[e.target.id] = file.name; // 看是第幾個檔案，把檔名存進vueData，以利存進SQL
            e.target.nextElementSibling.innerText = file.name;
            // console.log(file)

            let readFile = new FileReader();
            readFile.readAsDataURL(file);
            
            readFile.addEventListener("load", function () {
                
                e.target.closest('.n-discount_group').querySelector('img').src = readFile.result; 
                appVue.$data.new_img_src[e.target.id] = readFile.result; // 更換的圖檔base64存進vueData

                e.target.closest('.n-discount_group').querySelector('img').nextElementSibling.style.opacity=0;
            
            });
        },

        new_add(){
            this.new_edit = true;
            // this.current_edit = "notnull";
        },
        closeddd(){
            // this.new_edit = false;

            this.dbcheck=true;
            let edit_z = document.querySelector('.n-discount_edit');
            edit_z.style.opacity = 0;
        },
        saveddd(d_number, d_money, on_off, d_main_title, d_sec_title, d_main_content, d_sec_content){
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


            let ddd = 
            {      
                'discount_id':'1234567890',
                'create_date':u_today,   
                'discount_name':d_number,
                'news_title1':d_main_title,
                'news_title2':d_sec_title,
                'news_content1':d_main_content,
                'news_content2':d_sec_content,
                'news_status':parseInt(on_off),
                'news_update':last_today, 
                'discount_price':d_money, 
            }

            console.log(ddd);

            this.discounts.unshift(ddd);
        },
        log_out(){
            localStorage.setItem("n-login", "no");
            location.href = "./n-login.html"
        },  
        showDdata(gopage){
            // console.log(gopage);
            if(isNaN(gopage)) return;
            this.nowpage = gopage;

            $.ajax({
                method: "POST",
                url: "../php/getDiscountData.php",
                data:{ 
                    page : gopage,
                },            
                dataType: "json",
                success: function (response) {
                    appVue.pages = response[0];
                    appVue.discounts = response[1];
                },
                error: function(exception) {
                    alert("發生錯誤: " + exception.status);
                },
            });
        },
        
    },
    computed: {
        discountsd: function() {
            var search = this.discount_number;            

            if (search) {
                return this.discounts.filter(function(product) {                   
                    return String (product.news_id).toLowerCase().indexOf(search) > -1                 
                })                
            }

            return this.discounts;
        }
    }  
    
})