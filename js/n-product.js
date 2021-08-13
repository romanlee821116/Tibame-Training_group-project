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

Vue.component('product-add', {
    data(){
        return{  //組件的變數寫在這裡
            p_number:'', 
            p_sort:0, 
            p_name:'', 
            p_original:0, 
            p_sell:0, 
            p_stock:0, 
            p_status:0, 
            p_limit:0, 
            on_off:0, 
            p_exp:0, 
            p_customized:0, 
            p_ingredient:'', 
            p_descript:'',
            img_names:[ 
                {img_name : '圖片01', name:'pic1'}, 
                {img_name : '圖片02', name:'pic2'}, 
                {img_name : '圖片03', name:'pic3'}, 
                {img_name : '俯視圖', name:'pic4'}, 
                {img_name : '客製化用圖', name:'pic5'}
            ],
        };
    },

    template: `
        
        <div>
            
            <div class="n-product_edit">
                <p>新增商品</p>
                
                <div class="n-product_edit_left">
                    <ul>
                        <li>
                            <label for="">商品編號:</label>
                            <input type="text" v-model='p_number'>
                        </li>
                        <li>
                            商品類別:
                            <select name="status" id="" v-model='p_sort'>
                                <option value="0">銅鑼燒</option>
                                <option value="1">日式餅乾</option>
                                <option value="2">生菓子</option>
                                <option value="3">鯛魚燒</option>
                                <option value="4">羊羹</option>
                                <option value="5">大福</option>
                                <option value="6">最中</option>
                            </select>
                        </li>
                        <li>
                            <label for="">商品名稱:</label>
                            <input type="text" v-model='p_name'>
                        </li>
                        <li>
                            <label for="">&emsp;&emsp;原價:</label>
                            <input type="text" v-model='p_original' @keyup='regular'>
                        </li>
                        <li>
                            <label for="">&emsp;&emsp;售價:</label>
                            <input type="text" v-model='p_sell' @keyup='regular'>
                        </li>
                        <li>
                            <label for="">庫存數量:</label>
                            <input type="text" v-model='p_stock' @keyup='regular'>
                        </li>
                        <li>
                            商品狀態:
                            <select name="status" id="" v-model='p_status'>
                                <option value="0">新品上市</option>
                                <option value="1">熱銷商品</option>
                            </select>
                            <select name="status" id="" v-model='p_limit'>
                                <option value="0">期間限定商品</option>
                                <option value="1">人氣商品</option>
                            </select>
                        </li>
                        <li>
                            &emsp;上下架:
                            <select name="status" id="" v-model='on_off'>
                                <option value="0">下架</option>
                                <option value="1">上架</option>
                            </select>
                        </li>
                        <li>
                            保存期限:
                            <select name="status" id="" v-model='p_exp'>
                                <option value="0">3日</option>
                                <option value="1">7日</option>
                                <option value="2">14日</option>
                                <option value="3">30日</option>
                            </select>
                        </li>
                        <li>
                            客製化禮盒:
                            <select name="status" id="" v-model='p_customized'>
                                <option value="0">否</option>
                                <option value="1">是</option>
                            </select>
                        </li>
                        <li>
                            <label for="">&emsp;&emsp;成分:</label>
                            <textarea name="" id="" cols="30" rows="5" v-model='p_ingredient'></textarea>
                        </li>
                        <li>
                            <label for="">說明文字:</label>
                            <textarea name="" id="" cols="30" rows="5" v-model='p_descript'></textarea>
                        </li>
                    </ul>
                </div>

                <div class="n-product_edit_right">
                    <form enctype="multipart/form-data">
                        <div class="n-product_group" v-for='(item, index) in img_names'>
                            <label :for='index'>{{item.img_name}}:</label>
                            <input type="file" :id="index" @change='upload_img' class='n-product_Pic' :name='item.name'>
                            <p>請選擇圖片上傳</p>
                            <div class="n-product_img">
                                <img src=''>
                                <p>請選擇圖片上傳</p>
                            </div>
                            <img src="../images/backend/select.png" alt="">
                        </div>
                    </form>
                </div>

                <div class="n-product_editbtn">
                    <button class="n-product_close" @click='p_close'>關閉</button>
                    <button class="n-product_save" @click='p_save'>儲存</button>
                </div>
                
            </div>
            
            <div id="hide"></div>
            
        </div>
        
    `,
    methods:{
        p_close(){ 
            this.$emit('pclose');
        },  
        p_save(){  
            let check = 0;
            $('.n-product_edit input').each(function(){
                let value=$(this).val();
                if(value==''){
                    check +=1;
                }
            });

            if(check==0){
                function getFileName(o){
                    var pos=o.lastIndexOf("\\");
                    return o.substring(pos+1);  
                }
                let form_data = new FormData();
                for(let i=0; i<$('.n-product_Pic').length; i++){
                    form_data.append("files[]", document.getElementsByClassName('n-product_Pic')[i].files[0]);
                }
                let product_image1= $('.n-product_Pic').eq(0).val();
                let product_image2 = $('.n-product_Pic').eq(1).val();
                let product_image3 = $('.n-product_Pic').eq(2).val();
                let product_image_topview = $('.n-product_Pic').eq(3).val();
                let product_image_customize = $('.n-product_Pic').eq(4).val();
                product_image1 = getFileName(product_image1);
                product_image2 = getFileName(product_image2);
                product_image3 = getFileName(product_image3);
                product_image_topview = getFileName(product_image_topview);
                product_image_customize = getFileName(product_image_customize);
                // append
                form_data.append('product_list', this.p_number);
                form_data.append('product_class', this.p_sort);
                form_data.append('product_name', this.p_name);
                form_data.append('expiration', this.p_exp);
                form_data.append('ingredient', this.p_ingredient);
                form_data.append('product_content', this.p_descript);
                form_data.append('stock', this.p_stock);
                form_data.append('price', this.p_sell);
                form_data.append('net_price', this.p_original);
                form_data.append('product_customize', this.p_customized);
                form_data.append('product_status', this.on_off);
                form_data.append('promotion', this.p_status);
                form_data.append('promotion2', this.p_limit);
                form_data.append('product_image1', product_image1);
                form_data.append('product_image2', product_image2);
                form_data.append('product_image3', product_image3);
                form_data.append('product_image_topview', product_image_topview);
                form_data.append('product_image_customize', product_image_customize);
                
                $.ajax({
                    url: '../php/n-productAdd.php',
                    type: 'post',
                    cache: false,
                    data: form_data,
                    processData: false,
                    contentType: false,
                    success: function (res) {
                        if(res=='0'){
                            alert('此商品編號已使用');
                        }else if(res=='1'){
                            alert('此商品名稱已使用');
                        }else{
                            alert("商品新增成功");
                            this.$emit('psave', this.p_number, this.p_sort, this.p_name, this.p_original, this.p_sell, this.p_stock, this.p_status, this.p_limit, this.on_off, this.p_exp, this.p_customized, this.p_ingredient, this.p_descript);
                            window.location.reload();
                        }
                    },
                    error: function (exception) {
                        alert("數據載入失敗: " + exception.status);
                    }
                })
                
            }else{
                alert('請完成所有欄位');
            }

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
        regular(e){

            let str = (e.target.value).replace(/\D/g, "");
            e.target.value = str;
        },
    }  
});


var appVue = new Vue({
    el: '#app',
    data:{
        dbcheck:false,
        new_edit:false,
        img_names:[ 
            {name:'圖片01', src:''},
            {name:'圖片02', src:''},
            {name:'圖片03', src:''},
            {name:'俯視圖', src:''},
            {name:'客製化用圖', src:''},
        ],

        p_number:'',
        p_name:'',
        p_original:null,
        p_sell:null,
        p_stock:null,
        product_number: '',
        auth_text:['正常','停權'],
        choiced:0,
        p_status:0,
        p_limit:0,
        on_off:0,
        p_exp:0,
        p_customized:0,
        p_customized_list:['否', '是'],
        on_off_list:['下架', '上架'],
        p_sort:0,
        p_sort_list:['銅鑼燒', '日式餅乾', '生菓子', '鯛魚燒', '羊羹', '大福', '最中'],
        p_ingredient:'',
        p_descript:'',

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
        titles: ['商品編號', '商品類別', '名稱', '原價', '售價', '庫存數量', '客製化禮盒', '上下架', ''],
        products:[
            // {
            //     'product_id':'1234567890',
            //     'product_class':0,
            //     'product_name':'草莓大福',
            //     'net_price':111,
            //     'price':222,
            //     'stock':333,
            //     'product_customize':0,
            //     'product_status':1,
            //     'expiration':0,
            //     'promotion':0,
            //     'promotion2':0,
            //     'ingredient':'1成分成分成分',
            //     'product_content':'1說明說明說明',
            //     'product_image1':'',
            //     'product_image2':'',
            //     'product_image3':'',
            //     'product_image_topview':'',
            //     'product_image_customize':''
            // },
            {
                'product_id':'',
                'product_class':'',
                'product_name':'',
                'net_price':'',
                'price':'',
                'stock':'',
                'product_customize':'',
                'product_status':'',
                'expiration':'',
                'promotion':'',
                'promotion2':'',
                'ingredient':'',
                'product_content':'',
                'product_image1':'',
                'product_image2':'',
                'product_image3':'',
                'product_image_topview':'',
                'product_image_customize':''
            },
            
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
        this.showPdata(1);
    },

    methods: {
        edit(index){                    
            this.current_edit = index;     

            this.p_number = this.products[index].product_id;
            this.p_name = this.products[index].product_name;
            this.p_original = this.products[index].net_price;
            this.p_sell = this.products[index].price;
            this.p_stock = this.products[index].stock; 
            this.p_status = this.products[index].promotion;
            this.p_limit = this.products[index].promotion2;
            this.on_off = this.products[index].product_status;
            this.p_exp = this.products[index].expiration;
            this.p_customized = this.products[index].product_customize;
            this.p_sort = this.products[index].product_class;
            this.p_ingredient = this.products[index].ingredient;
            this.p_descript = this.products[index].product_content;
            
            this.new_img[0] = this.products[index].product_image1;
            this.new_img[1] = this.products[index].product_image2;
            this.new_img[2] = this.products[index].product_image3;
            this.new_img[3] = this.products[index].product_image_topview;
            this.new_img[4] = this.products[index].product_image_customize;
     
            this.img_names[0]['src'] = '../images/shopping_list/'+ this.products[index].product_image1;
            this.img_names[1]['src'] = '../images/shopping_list/'+ this.products[index].product_image2;
            this.img_names[2]['src'] = '../images/shopping_list/'+ this.products[index].product_image3;
            this.img_names[3]['src'] = '../images/shopping_list/'+ this.products[index].product_image_topview;
            this.img_names[4]['src'] = '../images/shopping_list/'+ this.products[index].product_image_customize;

        },
        p_close(){       
            this.dbcheck=true;
            let edit_z = document.querySelector('.n-product_edit');
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
            let edit_z = document.querySelector('.n-product_edit');
            edit_z.style.opacity = 1;

            this.new_edit = false;
        },

        ccc(){
            this.dbcheck=false;
            let edit_z = document.querySelector('.n-product_edit');
            edit_z.style.opacity = 1;
        }, 
        p_save(){     
            
            let n_index = this.$data.current_edit;

            this.products[n_index].product_status = this.on_off;
            this.products[n_index].product_customize = this.p_customized;
            this.products[n_index].product_name = this.p_name;                    
            this.products[n_index].net_price = this.p_original;
            this.products[n_index].price = this.p_sell;
            this.products[n_index].stock = this.p_stock;
            this.products[n_index].product_class = this.p_sort;
            this.products[n_index].product_id = this.p_number;
            this.products[n_index].ingredient = this.p_ingredient;
            this.products[n_index].product_content = this.p_descript;
            this.products[n_index].promotion = this.p_status;
            this.products[n_index].promotion2 = this.p_limit;
            this.products[n_index].expiration = this.p_exp;

            this.products[n_index].product_image1 = this.new_img[0];
            this.products[n_index].product_image2 = this.new_img[1];
            this.products[n_index].product_image3 = this.new_img[2];
            this.products[n_index].product_image_topview = this.new_img[3];
            this.products[n_index].product_image_customize = this.new_img[4];

            this.current_edit = null;


            $.ajax({            
                method: "POST",
                url: "../php/n-product_update.php",
                data:{ 
                    product_id: this.products[n_index].product_id, // 商品ID
                    product_class: this.products[n_index].product_class, //商品分類
                    product_name: this.products[n_index].product_name, // 商品名稱
                    expiration: this.products[n_index].expiration, //保存期限
                    ingredient: this.products[n_index].ingredient, // 成分
                    product_content: this.products[n_index].product_content, // 說明文字
                    stock: this.products[n_index].stock, // 庫存
                    price: this.products[n_index].price, // 售價
                    net_price: this.products[n_index].net_price, // 原價
                    product_customize: this.products[n_index].product_customize, // 客製化禮盒
                    product_status: this.products[n_index].product_status, // 上下架
                    promotion: this.products[n_index].promotion, // 商品狀態1(新品上市、熱銷商品)
                    promotion2: this.products[n_index].promotion2, // 商品狀態2(期間限定商品、人氣商品)
                    product_image1: this.products[n_index].product_image1, // 圖片1
                    product_image2: this.products[n_index].product_image2, // 圖片2
                    product_image3: this.products[n_index].product_image3, // 圖片3
                    product_image_topview: this.products[n_index].product_image_topview, // 俯視圖
                    product_image_customize: this.products[n_index].product_image_customize, //客製化圖
                
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
            
            this.new_img[e.target.id] = file.name; // 看是第幾個檔案，存進vueData
            e.target.nextElementSibling.innerText = file.name;


            let readFile = new FileReader();
            readFile.readAsDataURL(file);
            readFile.addEventListener("load", function () {
                
                e.target.closest('.n-product_group').querySelector('img').src = readFile.result; 
                appVue.$data.new_img_src[e.target.id] = readFile.result; // 更換的圖檔base64存進vueData

                e.target.closest('.n-product_group').querySelector('img').nextElementSibling.style.opacity=0;
            
            });
        },

        new_add(){
            this.new_edit = true;
            // this.current_edit = "notnull";
        },
        closeppp(){
            // this.new_edit = false;

            this.dbcheck=true;
            let edit_z = document.querySelector('.n-product_edit');
            edit_z.style.opacity = 0;
        },
        saveppp(p_number, p_sort, p_name, p_original, p_sell, p_stock, p_status, p_limit, on_off, p_exp, p_customized, p_ingredient, p_descript){
            
            this.new_edit = false;    

            let ppp = 
            {                              
                'product_id':p_number,
                'product_class':parseInt(p_sort),
                'product_name':p_name,
                'net_price':parseInt(p_original),
                'price':parseInt(p_sell),
                'stock':parseInt(p_stock),
                'product_customize':parseInt(p_customized),
                'product_status':parseInt(on_off),
                'expiration':parseInt(p_exp),
                'promotion':parseInt(p_status),
                'promotion2':parseInt(p_limit),
                'ingredient':p_ingredient,
                'product_content':p_descript,
            }

            // console.log(ppp);

            this.products.unshift(ppp);

        },
        log_out(){
            localStorage.setItem("n-login", "no");
            location.href = "./n-login.html"
        },
        regular(e){

            let str = (e.target.value).replace(/\D/g, "");
            e.target.value = str;
        },
        showPdata(gopage){
            console.log(gopage);
            if(isNaN(gopage)) return;
            this.nowpage = gopage;

            $.ajax({
                method: "POST",
                url: "../php/getProductData.php",
                data:{ 
                    page : gopage,
                },            
                dataType: "json",
                success: function (response) {
                    appVue.pages = response[0];
                    appVue.products = response[1];
                },
                error: function(exception) {
                    alert("發生錯誤: " + exception.status);
                },
            });
        },
        lookfor(){
            const self = this;

            $.ajax({
                method: "POST",
                url: "../php/n-selectp.php",
                data:{ 
                    search: self.product_number
                },            
                dataType: "json",
                success: function (res) {
                    self.products = res
                },
                
            });
        }
    }, 
    // computed: {
    //     productsd: function() {
    //         var search = this.product_number;  
    //         if (search) {
    //             return this.products.filter(function(product) {                   
    //                 return String (product.product_id).toLowerCase().indexOf(search) > -1                 
    //             })                
    //         }
    //         return this.products;
    //     }
    // }   
    updated() {        

        var img_name = this.new_img
        var new_img_name = []

        for( let i =0; i< img_name.length; i++){
            if( img_name[i].length > 1){
                
                let limit_name = img_name[i].substring(0, 10)

                new_img_name.push(limit_name)
            }
        }
        console.log(new_img_name);
        // this.new_img = new_img_name
    },
    
})








