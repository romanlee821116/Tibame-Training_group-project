$("#contact_tel").click(function(){$(".contact_fakeClick1").css("display","block"),$(".contact_fakeClick2").css("display","none"),$(".contact_fake1").css("border","1.5px solid #172852"),$(".contact_fake2").css("border","1.5px solid #bb866a")}),$("#contact_mail").click(function(){$(".contact_fakeClick2").css("display","block"),$(".contact_fakeClick1").css("display","none"),$(".contact_fake2").css("border","1.5px solid #172852"),$(".contact_fake1").css("border","1.5px solid #bb866a")}),$("button").click(function(c){var o=$("#contact_yourName").val(),t=$("#contact_yourPhone").val(),n=$("#contact_yourEmail").val(),a=$("#contact_content").val(),s=$("#contact_tel").is(":checked"),e=$("#contact_mail").is(":checked");""==o?(c.preventDefault(),$(".contact_one").css("display","inline-block"),$("#contact_yourName").css("border","2px solid #dc3838")):($(".contact_one").css("display","none"),$("#contact_yourName").css("border","none")),""==t?(c.preventDefault(),$(".contact_two").css("display","inline-block"),$("#contact_yourPhone").css("border","2px solid #dc3838")):($(".contact_two").css("display","none"),$("#contact_yourPhone").css("border","none")),""!=n&&/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(n)?($(".contact_three").css("display","none"),$("#contact_yourEmail").css("border","none")):(c.preventDefault(),$(".contact_three").css("display","inline-block"),$("#contact_yourEmail").css("border","2px solid #dc3838")),0==s&&0==e?(c.preventDefault(),$(".contact_four").css("display","inline-block"),$(".contact_fake1").css("border","2px solid #dc3838"),$(".contact_fake2").css("border","2px solid #dc3838")):$(".contact_four").css("display","none"),""==a?(c.preventDefault(),$(".contact_five").css("display","inline-block"),$("#contact_content").css("border","2px solid #dc3838")):($(".contact_five").css("display","none"),$("#contact_content").css("border","none"))});