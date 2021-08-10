var my_back = localStorage.getItem("n-login");
if(my_back !== 'yes'){
    // localStorage.removeItem("n-login")
    // localStorage.setItem("n-login", "no");
    location.href = "./n-login.html"
}

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


var appVue = new Vue({
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
            // {
            //     'member_id':'001',
            //     'account':'Harukadou@gmail.com',
            //     'name':'張昭',
            //     'phone':'0910123456',
            //     'member_status':0,
            //     'register_date':'2021/01/01',
            //     'address':'台北市大安區大安路一段16巷2號',
            //     'gender':'女',
            // },
            {
                'member_id':'',
                'account':'',
                'name':'',
                'phone':'',
                'member_status':'',
                'register_date':'',
                'address':'',
                'gender':'',
            }
        ],
        pages:[
            {page:"<", link: "x"},
            {page:"1", link: "1"},
            {page:"2", link: "2"},
            {page:"3", link: "3"},
            {page:"4", link: "4"},
            {page:"5", link: "5"},
            {page:"...", link: "x"},
            {page:"20", link: "20"},
            {page:">", link: "2"},
        ],
        nowpage:1,
        current_edit:null,
    },
    created:function(){
        this.showMdata(1);
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

            $.ajax({            
                method: "POST",
                url: "../php/n-member_update.php",
                data:{ 
                    account: this.members[n_index].account, // 哪筆會員
                    member_status: this.members[n_index].member_status, // 更新的會員狀態
                },            
                dataType: "text",
                success: function (response) {
                    alert("更新成功");
                },
                error: function(exception) {
                    alert("發生錯誤: " + exception.status);
                }
            });

        },          
        log_out(){
            localStorage.setItem("n-login", "no");
            location.href = "./n-login.html"
        },

        showMdata(gopage){
            console.log(gopage);
            if(isNaN(gopage)) return;
            this.nowpage = gopage;

            $.ajax({
                method: "POST",
                url: "../php/getMemberData.php",
                data:{ 
                    page : gopage,
                },            
                dataType: "json",
                success: function (response) {
                    appVue.pages = response[0];
                    appVue.members = response[1];
                },
                error: function(exception) {
                    alert("發生錯誤: " + exception.status);
                },
            });
        },

    },
    computed: {
        membersd: function() {
            var search = this.member_number;            

            if (search) {
                return this.members.filter(function(product) {                   
                    return String (product.member_id).toLowerCase().indexOf(search) > -1                 
                })                
            }

            return this.members;
        }
    }
    
})