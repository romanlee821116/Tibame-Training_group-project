Vue.component('double-check', {            
    template: 
        ` 
        <div class="dbc">
            <section></section>
            <p>尚未存檔，是否確認關閉</p>
            <div>
                <button type="button" @click='sure'>確認</button>
                <button type="button" @click='cancel'>取消</button>
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

new Vue({
    el: '#app',
    data:{
        dbcheck:false,

        member_number: '',
        m_status:0,
        member_list:['停權', '正常'],
        mainbtn: [  
            {name:"會員管理", url: "./n-member.html"},
            {name:"訂單管理", url: "./n-order.html"},
            {name:"商品管理", url: "./n-product.html"},
            {name:"客製化商品管理", url: "./n-customized.html"},
            {name:"消息管理", url: "./n-news.html"},
            {name:"折扣碼管理", url: "./n-discount.html"},
            {name:"Q&A", url: "./n-faq.html"},
        ],
        titles: ['會員編號', '帳號', '姓名', '手機', '帳號狀態', '創建時間', '', ],
        members:[
            {
                'member_id':'001',
                'account':'Harukadou@gmail.com',
                'name':'張昭',
                'phone':'0910123456',
                'member_status':0,
                'register_date':'2021/01/01',
                'address':'台北市大安區大安路一段16巷2號',
                'gender':'女',
            },
            {
                'member_id':'002',
                'account':'Harukadouv2@gmail.com',
                'name':'張昭2',
                'phone':'0910123456',
                'member_status':1,
                'register_date':'2021/01/02',
                'address':'台北市大安區大安路一段16巷2號',
                'gender':'女',
            },
            {
                'member_id':'003',
                'account':'Harukadouv3@gmail.com',
                'name':'張昭3',
                'phone':'0910123456',
                'member_status':0,
                'register_date':'2021/01/03',
                'address':'台北市大安區大安路一段16巷2號',
                'gender':'女',
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

            this.m_status = this.members[index].member_status;
        },                 


        f_close(){       
            this.dbcheck=true;
            let edit_z = document.querySelector('.n-member_edit');
            edit_z.style.opacity = 0;
        },  

        sss(){
            this.current_edit = null;
            this.dbcheck=false;
            let edit_z = document.querySelector('.n-member_edit');
            edit_z.style.opacity = 1;

        },

        ccc(){
            this.dbcheck=false;
            let edit_z = document.querySelector('.n-member_edit');
            edit_z.style.opacity = 1;
        },


        f_save(){     

            let n_index = this.$data.current_edit;

            this.members[n_index].member_status = this.m_status;

            this.current_edit = null;

        },          
        log_out(){
            location.href = "./n-login.html"
        }
        
    },
    
})