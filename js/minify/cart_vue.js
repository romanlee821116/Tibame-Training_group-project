new Vue({el:"#cart_app",data:{itemList:[{id:"item_1",itemName:"南投銅鑼燒",img:"../images/cart/banner_matcha_item.png",price:480,item_Quantity:"6",quantity:1,status:!1},{id:"item_2",itemName:"苗栗大福草莓",img:"../images/cart/banner_strawberry_item.png",price:480,item_Quantity:"6",quantity:1,status:!1},{id:"item_3",itemName:"南投銅鑼燒",img:"../images/cart/banner_matcha_item.png",price:480,item_Quantity:"6",quantity:1,status:!1}],customization:[{id:"customization_1",itemName:"四格小資組合",img:"../images/cart/customized_box.png",price:480,quantity:1,detail:["草莓大福(1入)","抹茶大福(1入)","柳橙大福(1入)","巧克力大福(1入)"],detail_Quantity:["1","1","1","1"],status:!1},{id:"customization_2",itemName:"四格小資組合",img:"../images/cart/customized_box.png",price:480,quantity:1,detail:["草莓大福(1入)","柳橙大福(1入)","巧克力大福(1入)"],detail_Quantity:["2","1","1"],status:!1}],delete_bgc:"#a3a3a3",delete_cursor:"default"},methods:{add(t){t.quantity++},sub(t){1<t.quantity&&t.quantity--},delete_Item(t){this.itemList.splice(t,1),0==this.itemList.length&&0==this.customization.length?$(".cart_NoItem").css("display","block"):(0<this.itemList.length||0<this.customization.length)&&$(".cart_NoItem").css("display","none")},delete_Customization(t){this.customization.splice(t,1),0==this.itemList.length&&0==this.customization.length?$(".cart_NoItem").css("display","block"):(0<this.itemList.length||0<this.customization.length)&&$(".cart_NoItem").css("display","none")},delete_All(){for(let t=0;t<this.itemList.length;t++)1==this.itemList[t].status&&(this.itemList.splice([t],1),this.delete_bgc="#a3a3a3",this.delete_cursor="default",t--);for(let t=0;t<this.customization.length;t++)1==this.customization[t].status&&(this.customization.splice([t],1),this.delete_bgc="#a3a3a3",this.delete_cursor="default",t--);0==this.itemList.length&&0==this.customization.length?$(".cart_NoItem").css("display","block"):(0<this.itemList.length||0<this.customization.length)&&$(".cart_NoItem").css("display","none")},choose(t){t.status=!t.status,x=this.itemList.length;for(let t=0;t<this.itemList.length;t++)0==this.itemList[t].status&&x--;y=this.customization.length;for(let t=0;t<this.customization.length;t++)0==this.customization[t].status&&y--;x+y==0?(this.delete_bgc="#a3a3a3",this.delete_cursor="default"):0<x+y&&(this.delete_bgc="#bb866a",this.delete_cursor="pointer")},open(){$(".cart_cartBoard").css("right","0px"),0==this.itemList.length&&0==this.customization.length?$(".cart_NoItem").css("display","block"):(0<this.itemList.length||0<this.customization.length)&&$(".cart_NoItem").css("display","none")},close(){$(".cart_cartBoard").css("right","-600px"),$(".cart_detailBorder").css("display","none"),$(".cart_detailBtn").css("background-color","#bb866a")}},computed:{total_Price(){let i=0;for(let t=0;t<this.itemList.length;t++){var e=this.itemList[t];i+=e.price*e.quantity}for(let t=0;t<this.customization.length;t++){var s=this.customization[t];i+=s.price*s.quantity}return i.toString().replace(/\B(?=(\d{3})+$)/g,",")}}});