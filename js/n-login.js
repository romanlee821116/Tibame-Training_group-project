new Vue({
    el: '#app',
    data:{
        accounts: 'wuwuwu@gamil.com',
        passwords: '12312345',
        disabled:'',
    },
    methods: {
        
        go_member(){
            localStorage.setItem("n-login", "yes");
        }
    },            

})