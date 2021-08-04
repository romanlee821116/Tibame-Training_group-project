new Vue({
    el: '#app',
    data:{
        accounts: '',
        passwords: '',
        disabled:'',
    },
    methods: {                
        go_member(){                    
            location.href = "./n-member.html"
        }
    },   
})