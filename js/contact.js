$(function(){
  // radio顏色
$('#contact_tel').click(function(){
  $('.contact_fakeClick1').css('display','block');
  $('.contact_fakeClick2').css('display','none');
  $('.contact_fake1').css('border','1.5px solid #172852');
  $('.contact_fake2').css('border','1.5px solid #bb866a');
})

$('#contact_mail').click(function(){
  $('.contact_fakeClick2').css('display','block');
  $('.contact_fakeClick1').css('display','none');
  $('.contact_fake2').css('border','1.5px solid #172852');
  $('.contact_fake1').css('border','1.5px solid #bb866a');
})




// 沒輸入按送出會跳出提示框

$('button').click(function(e){
  let name = $('#contact_yourName').val();
  let phone = $('#contact_yourPhone').val();
  let email = $('#contact_yourEmail').val();
  let content = $('#contact_content').val();


  let fakeClick1 = $('#contact_tel').is(":checked");
  let fakeClick2 = $('#contact_mail').is(":checked");
  var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  let check =0;
  if(name == ""){
    e.preventDefault();
    $('.contact_one').css('display','inline-block');
    $('#contact_yourName').css('border','2px solid #dc3838');
    check = 1;
  }else{
    $('.contact_one').css('display','none');
    $('#contact_yourName').css('border','none');
  };
  if(phone == ""){
    e.preventDefault();
    $('.contact_two').css('display','inline-block');
    $('#contact_yourPhone').css('border','2px solid #dc3838');
    check = 1;
  }else{
    $('.contact_two').css('display','none');
    $('#contact_yourPhone').css('border','none');
  };
  if(email == ""){
    e.preventDefault();
    $('.contact_three').css('display','inline-block');
    $('#contact_yourEmail').css('border','2px solid #dc3838');
    check = 1;
  }else if (!regex.test(email)){
    e.preventDefault();
    $('.contact_three').css('display','inline-block');
    $('#contact_yourEmail').css('border','2px solid #dc3838');
    check = 1;
  }else{
    $('.contact_three').css('display','none');
    $('#contact_yourEmail').css('border','none');
  };
  if(fakeClick1 == false && fakeClick2 == false){
    e.preventDefault();
    $('.contact_four').css('display','inline-block');
    $('.contact_fake1').css('border','2px solid #dc3838');
    $('.contact_fake2').css('border','2px solid #dc3838');
    check = 1;
  }else{
    $('.contact_four').css('display','none');
  };
  if(content == ""){
    e.preventDefault();
    $('.contact_five').css('display','inline-block');
    $('#contact_content').css('border','2px solid #dc3838');
    check = 1;
  }else{
    $('.contact_five').css('display','none');
    $('#contact_content').css('border','none');
  };
  if(check ==0){
    let name = $('#contact_yourName').val();
    let phone = $('#contact_yourPhone').val();
    let email = $('#contact_yourEmail').val();
    let contactWay = $(' input[type="radio"]:checked + label').text();
    let content = $('#contact_content').val();
    body= `
      姓名 : ${name}, \
      電話 : ${phone}, \
      Email : ${email}, \
      聯絡方式 : ${contactWay}, \
      內容 : ${content} /n
    `;
    Email.send({
      SecureToken : "3ad594-3f7c-49dc-9a72-720bb6b58fa6",
      Host : "smtp.elasticemail.com",
      Username : "romanlee821116@gmail.com",
      Password : "6DFB4A34831E82E8F7625B65028BA55A62E0",
      // Password : "roman122715386",
      To : 'romanlee821116@gmail.com',
      From : "romanlee821116@gmail.com",
      Subject : "客戶聯繫資訊",
      Body : body
    }).then(
      $('.contactpopBG').show(),
      $("html, body").animate({scrollTop: '0'}, 500),
      setTimeout(function(){
        $('html, body').css('overflow-y','hidden')
      },600)
      
    );
  }
})
$('.contact_close').click(function(){
  $('.contactpopBG').hide();
  $('body').css('overflow-y','auto'),
  location.reload();
})
})

