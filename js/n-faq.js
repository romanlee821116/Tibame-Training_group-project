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



Vue.component('faq-add', {
    data(){
        return{  //組件的變數寫在這裡
            f_sort:0,
            f_answer: '',
            f_question: '',
        };
    },
    
    template: `
        <div>
            <div class="n-faq_edit">

                <p>新增Q&A</p>            
            
                <ul>                    
                    <li>
                        問題分類:
                        <select name="status" id="" v-model='f_sort'>
                            <option value="0">交易相關</option>
                            <option value="1">食材相關</option>
                            <option value="2">運送相關</option>
                        </select>
                        
                    </li>                    

                    <li>
                        <label for="">&emsp;&emsp;問題:</label>
                        <input type="text" v-model='f_question'>
                    </li>

                    
                    <li>
                        <label for="">&emsp;&emsp;回答:</label>
                        <textarea name="" id="" cols="73" rows="8" v-model='f_answer'></textarea>
                    </li>
                </ul>
                

                <div class="n-faq_editbtn">
                    <button class="n-faq_close" @click='f_close'>關閉</button>
                    <button class="n-faq_save" @click='f_save'>儲存</button>
                </div>

            </div>
            <div id="hide"></div>
        </div>

    `,
    methods:{
        f_close(){ 
            this.$emit('fclose');
        },  
        f_save(){   
            if(this.f_question==''){
                alert('請輸入問題');
            }else if(this.f_answer==''){
                alert('請輸入回答');
            }else{
                $.ajax({
                    method: 'POST',
                    url: '../php/n-faqAdd.php',
                    data:{
                        qa_class: parseInt(this.f_sort),
                        question: this.f_question,
                        answer: this.f_answer
                    },
                    dataType:'text',
                    success: function (data) {     
                        alert(data)
                    },
                    error: function(exception) {
                        alert("數據載入失敗: " + exception.status);
                    }
                })
            }
            this.$emit('fsave', this.f_sort, this.f_question, this.f_answer);
            
        },
    }  
});



new Vue({
    el: '#app',
    data:{
        faq_number:'',
        f_sort_list:['交易相關', '食材相關', '運送相關'],      
        f_sort:0,
        f_question:'',
        f_answer:'',
        new_edit:false,
        dbcheck:false,
        
        mainbtn: [  
            {name:"會員管理", url: "./n-member.html"},
            {name:"訂單管理", url: "./n-order.html"},
            {name:"商品管理", url: "./n-product.html"},
            {name:"客製化商品管理", url: "./n-customized.html"},
            {name:"消息管理", url: "./n-news.html"},
            {name:"折扣碼管理", url: "./n-discount.html"},
            {name:"Q&A", url: "./n-faq.html"},
        ],
        titles: ['問題編號', '問題分類', '問題', '回答', ''],
        faqs:[
            {
                'qa_id':'1234567890',
                'qa_class':0,
                'question':'1新品上市新品上市新品上市新品上市新品上市',
                'answer':'1這就是回答',
            },
            {
                'qa_id':'1234567890',
                'qa_class':1,
                'question':'2新品上市新品上市新品上市新品上市新品上市',
                'answer':'2這就是回答',
            },
            {
                'qa_id':'1234567890',
                'qa_class':2,
                'question':'3新品上市新品上市新品上市新品上市新品上市',
                'answer':'3這就是回答',
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
        current_edit:null,
    },

    methods: {
        edit(index){                    
            this.current_edit = index;  

            this.f_sort = this.faqs[index].qa_class;
            this.f_question = this.faqs[index].question;
            this.f_answer = this.faqs[index].answer;
            
        },


        f_close(){       
            this.dbcheck=true;
            let edit_z = document.querySelector('.n-faq_edit');
            edit_z.style.opacity = 0;
        },  

        sss(){
            this.current_edit = null;
            this.dbcheck=false;
            let edit_z = document.querySelector('.n-faq_edit');
            edit_z.style.opacity = 1;

            this.new_edit = false;
        },

        ccc(){
            this.dbcheck=false;
            let edit_z = document.querySelector('.n-faq_edit');
            edit_z.style.opacity = 1;
        },



        f_save(){     

            let n_index = this.$data.current_edit;
            this.faqs[n_index].qa_class = this.f_sort;
            this.faqs[n_index].question = this.f_question;
            this.faqs[n_index].answer = this.f_answer;
            this.current_edit = null;
        },
        new_add(){
            this.new_edit = true;
            // this.current_edit = "notnull";
        },



        closefff(){
            // this.new_edit = false;

            this.dbcheck=true;
            let edit_z = document.querySelector('.n-faq_edit');
            edit_z.style.opacity = 0;
        },



        savefff(f_sort, f_question, f_answer){
            this.new_edit = false;

            // console.log(f_sort);

            let fff = 
            {
                'qa_id':'1234567890',
                'qa_class':parseInt(f_sort),
                'question':f_question,
                'answer':f_answer,
            }

            // console.log(fff);

            this.faqs.unshift(fff);
        },
        log_out(){
            location.href = "./n-login.html"
        },                 
        
    },
    
})