$(function(){$("#payment_home").click(function(){$(".payment_fakeClick1").css("display","block"),$(".payment_fakeClick2").css("display","none"),$(".payment_fakeClick3").css("display","none"),$(".payment_fake1").css("border","1.5px solid #172852"),$(".payment_fake2").css("border","1.5px solid #bb866a"),$(".payment_fake3").css("border","1.5px solid #bb866a")}),$("#payment_seven").click(function(){$(".payment_fakeClick2").css("display","block"),$(".payment_fakeClick1").css("display","none"),$(".payment_fakeClick3").css("display","none"),$(".payment_fake2").css("border","1.5px solid #172852"),$(".payment_fake1").css("border","1.5px solid #bb866a"),$(".payment_fake3").css("border","1.5px solid #bb866a")}),$("#payment_shop").click(function(){$(".payment_fakeClick3").css("display","block"),$(".payment_fakeClick1").css("display","none"),$(".payment_fakeClick2").css("display","none"),$(".payment_fake3").css("border","1.5px solid #172852"),$(".payment_fake1").css("border","1.5px solid #bb866a"),$(".payment_fake2").css("border","1.5px solid #bb866a")}),$("#payment_online").click(function(){$(".payment_fakeClick4").css("display","block"),$(".payment_fakeClick5").css("display","none"),$(".payment_fake4").css("border","1.5px solid #172852"),$(".payment_fake5").css("border","1.5px solid #bb866a")}),$("#payment_cash").click(function(){$(".payment_fakeClick5").css("display","block"),$(".payment_fakeClick4").css("display","none"),$(".payment_fake5").css("border","1.5px solid #172852"),$(".payment_fake4").css("border","1.5px solid #bb866a")}),$("#payment_home").click(function(){$(".payment_receiver").css("display","block"),$(".payment_shop").css("display","none"),$(".payment_shopMapData").css("display","none")}),$("#payment_seven").click(function(){$(".payment_shop").css("display","block"),$(".payment_receiver").css("display","none")}),$("#payment_shop").click(function(){$(".payment_receiver").css("display","none"),$(".payment_shop").css("display","none"),$(".payment_shopMapData").css("display","none")}),$(".payment_shopMap").click(function(){$(".payment_shopMapData").css("display","block")}),$("#payment_online").click(function(){$(".payment_credit").css("display","block")}),$("#payment_cash").click(function(){$(".payment_credit").css("display","none")}),$(".payment_cardNumber > input").on("keydown",function(e){48<=e.which&&e.which<=57||8==e.which?0==e.target.value.length&&8==e.which&&$(this).prev().focus():e.preventDefault()}),$(".payment_cardNumber > input").on("keyup",function(e){e=e.target.value.replace(/\D/g,"");$(this).val(e),4==e.length&&$(this).next().focus()})});