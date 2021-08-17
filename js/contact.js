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

  if(name == ""){
    e.preventDefault();
    $('.contact_one').css('display','inline-block');
    $('#contact_yourName').css('border','2px solid #dc3838');
  }else{
    $('.contact_one').css('display','none');
    $('#contact_yourName').css('border','none');
  };
  if(phone == ""){
    e.preventDefault();
    $('.contact_two').css('display','inline-block');
    $('#contact_yourPhone').css('border','2px solid #dc3838');
  }else{
    $('.contact_two').css('display','none');
    $('#contact_yourPhone').css('border','none');
  };
  if(email == ""){
    e.preventDefault();
    $('.contact_three').css('display','inline-block');
    $('#contact_yourEmail').css('border','2px solid #dc3838');
  }else if (!regex.test(email)){
    e.preventDefault();
    $('.contact_three').css('display','inline-block');
    $('#contact_yourEmail').css('border','2px solid #dc3838');
  }else{
    $('.contact_three').css('display','none');
    $('#contact_yourEmail').css('border','none');
  };
  if(fakeClick1 == false && fakeClick2 == false){
    e.preventDefault();
    $('.contact_four').css('display','inline-block');
    $('.contact_fake1').css('border','2px solid #dc3838');
    $('.contact_fake2').css('border','2px solid #dc3838');
  }else{
    $('.contact_four').css('display','none');
  };
  if(content == ""){
    e.preventDefault();
    $('.contact_five').css('display','inline-block');
    $('#contact_content').css('border','2px solid #dc3838');
  }else{
    $('.contact_five').css('display','none');
    $('#contact_content').css('border','none');
  };
})
$('.contact_close').click(function(){
  $('.contactpopBG').hide();
  location.reload();
})
})

