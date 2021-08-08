$(function(){
    let vm = new Vue({
        el: '#app',
        data:{    
            
            img_names:['圖片01', '圖片02', '圖片03'],
            card_backs:[ '../images/backend/card_back01.png', 
                        '../images/backend/card_back02.png',
                        '../images/backend/card_back03.png'],
    
            tests:[
                // {t1:'圖片01', t2:'../images/backend/card_back01.png'},
                // {t1:'圖片02', t2:'../images/backend/card_back02.png'},
                // {t1:'圖片03', t2:'../images/backend/card_back03.png'},
            ],
    
            ctests:[
                // '../images/backend/sticker01.png',
                // '../images/backend/sticker02.png',
                // '../images/backend/sticker03.png',
                // '../images/backend/sticker04.png',
                // '../images/backend/sticker05.png',
                // '../images/backend/sticker06.png',
                // '../images/backend/sticker07.png',
                // '../images/backend/sticker08.png',
                // '../images/backend/sticker09.png',
                // '../images/backend/sticker10.png',
                // '../images/backend/sticker11.png',
                // '../images/backend/sticker12.png',
            ],
    
            mainbtn: [  
                {name:"會員管理", url: "./n-member.html"},
                {name:"訂單管理", url: "./n-order.html"},
                {name:"商品管理", url: "./n-product.html"},
                {name:"客製化商品管理", url: "./n-customized.html"},
                {name:"消息管理", url: "./n-news.html"},
                {name:"折扣碼管理", url: "./n-discount.html"},
                {name:"Q&A", url: "./n-faq.html"},
            ],
            
            current_edit:null,
        },
    
        methods: {   
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
            log_out(){
                location.href = "./n-login.html"
            },
            fetchData(){
                axios.post('../php/n-customized.php',{
                    action: 'fetchall'
                }).then(function(res){
                    // console.log(res.data);
                    vm.tests = res.data.slice(0,3);
                    for(let i in vm.tests){
                        imgURL = '../images/customized/'+vm.tests[i]['cardimage'];
                        vm.tests[i]['cardimage'] = imgURL;   
                    }
                    vm.ctests = res.data.slice(3);
                    for(let j in vm.ctests){
                        imgURL = '../images/customized/'+vm.ctests[j]['cardimage'];
                        vm.ctests[j]['cardimage'] = imgURL;   
                    }
                })
            }
        
        },
        created(){
            this.fetchData();
        }
        
    })
})
