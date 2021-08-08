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
        order_number: '',
        pay_list:['未付款','已付款','付款失敗','退款中','已退款'],
        form_list:['處理中', '已確認', '已完成', '已取消'],
        ship_list:['待出貨', '已出貨', '已送達', '已取貨', '已退貨'],

        mainbtn: [  
            {name:"會員管理", url: "./n-member.html"},
            {name:"訂單管理", url: "./n-order.html"},
            {name:"商品管理", url: "./n-product.html"},
            {name:"客製化商品管理", url: "./n-customized.html"},
            {name:"消息管理", url: "./n-news.html"},
            {name:"折扣碼管理", url: "./n-discount.html"},
            {name:"Q&A", url: "./n-faq.html"},
        ],
        titles: ['編號', '訂單編號', '帳號', '付款狀態', '訂單狀態', '貨運狀態', '訂購日期', '', ],
        orders:[
            // {
            //     'order_id':'001',
            //     'order_list':'1321344fff',
            //     'account':'Harukadou@gmail.com',
            //     'payment_status':0,
            //     'order_status':2,
            //     'shipping_status':3,
            //     'order_date':'2021/01/01',
            //     'receiver_name':'員姓名',
            //     'receiver_phone':'32242424',
            //     'shipping_address':'N/A',
            //     'shipping_type':'宅配服務',
            //     'store':'N/A',
            //     'payment':'線上付款',
            //     'shipping_fee':60,
            //     'discount_id':'edr100'                        
            // },
            {
                'order_id':'',
                'order_list':'',
                'account':'',
                'payment_status':'',
                'order_status':'',
                'shipping_status':'',
                'order_date':'',
                'receiver_name':'',
                'receiver_phone':'',
                'shipping_address':'',
                'shipping_type':'',
                'store':'',
                'payment':'',
                'shipping_fee':'',
                'discount_id':'', 
                'discount_price':'',                        
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
        order_title: ['名稱', '數量', '金額'],
        order_list:[       
            // [
            //     {'product_name':'草莓大福', 'quantity':'2', 'order_detail_price':456},
            //     {'product_name':'藍莓大福', 'quantity':'3', 'order_detail_price':234},
            //     {'product_name':'草莓大福', 'quantity':'4', 'order_detail_price':444}
            // ],
            // [
            //     {'product_name':'草莓大福', 'quantity':'2', 'order_detail_price':456},
            //     {'product_name':'藍莓大福', 'quantity':'3', 'order_detail_price':234},
            //     {'product_name':'草莓大福', 'quantity':'4', 'order_detail_price':444}
            // ],
            [
                {'product_name':'', 'quantity':'', 'order_detail_price':''},
            ],                    
            
        ],
        nowpage:1,
        select_number:'',
        total_cost:null,
        order_cost:null,
    },
    created:function(){
        this.showOdata(1);
    },
    methods: {
        edit(index){                    
            this.current_edit = index;   

            // 訂單編號
            this.select_number = this.orders[index].order_list;

            // 商品總金額
            let tot = this.order_list[index];                    

            for(let i=0; i<tot.length; i++){
                this.total_cost += (tot[i].order_detail_price*1)
            }                    

            // 訂單總金額                    
            this.order_cost = (this.total_cost*1) + (this.orders[index].shipping_fee*1) - (this.orders[index].discount_price*1);

            //狀態
            this.o_pay = this.orders[index].payment_status;
            this.o_form = this.orders[index].order_status;
            this.o_ship = this.orders[index].shipping_status;

            
        },



        // f_close(){                    
        //     this.current_edit = null;
        //     this.total_cost = null;
        // },  

        f_close(){       
            this.dbcheck=true;
            let edit_z = document.querySelector('.n-order_edit');
            edit_z.style.opacity = 0;
        },  

        sss(){
            this.current_edit = null;
            this.dbcheck=false;
            let edit_z = document.querySelector('.n-order_edit');
            edit_z.style.opacity = 1;

            this.total_cost = null;
        },

        ccc(){
            this.dbcheck=false;
            let edit_z = document.querySelector('.n-order_edit');
            edit_z.style.opacity = 1;
        },


        f_save(){     

            let n_index = this.$data.current_edit;

            this.orders[n_index].payment_status = this.o_pay;
            this.orders[n_index].order_status = this.o_form;
            this.orders[n_index].shipping_status = this.o_ship;


            this.current_edit = null;
            this.total_cost = null;

        },     
        log_out(){
            location.href = "./n-login.html"
        },        
       
        showOdata(gopage){
            console.log(gopage);
            if(isNaN(gopage)) return;
            this.nowpage = gopage;

            $.ajax({
                method: "POST",
                url: "../php/getOrderData.php",
                data:{ 
                    page : gopage,
                },            
                dataType: "json",
                success: function (response) {
                    appVue.pages = response[0];
                    appVue.orders = response[1];
                    appVue.order_list = response[2];
                    
                },
                error: function(exception) {
                    alert("發生錯誤: " + exception.status);
                },
            });
        },
    },
    
})