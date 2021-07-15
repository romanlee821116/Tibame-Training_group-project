// 點擊問題類別按鈕，變換文字及底線顏色
$('#FAQ_transaction').click(function(){
  // 底線顏色
  $('.FAQ_titleBtn').attr('id','FAQ_a');
  // 圖片變換
  $('#FAQ_transactionBtn').attr('src','../images/transaction_h.png');
  $('#FAQ_ingredientsBtn').attr('src','../images/Ingredients_n.png');
  $('#FAQ_transportBtn').attr('src','../images/transport_n.png');
  
  // 文字顏色
  $('#FAQ_transaction > p').css('color','#172852');
  $('#FAQ_ingredients > p').css('color','#cba89a');
  $('#FAQ_transport > p').css('color','#cba89a');

  // 把打開的QA都關掉
  $('.FAQ_outBorder').slideUp();
  $('.FAQ_plus').removeClass("FAQ_spin");
})

$('#FAQ_ingredients').click(function(){
  // 底線顏色
  $('.FAQ_titleBtn').attr('id','FAQ_b');

  // 圖片變換
  $('#FAQ_ingredientsBtn').attr('src','../images/Ingredients_h.png');
  $('#FAQ_transactionBtn').attr('src','../images/transaction_n.png');
  $('#FAQ_transportBtn').attr('src','../images/transport_n.png');

  // 文字顏色
  $('#FAQ_ingredients > p').css('color','#172852');
  $('#FAQ_transaction > p').css('color','#cba89a');
  $('#FAQ_transport > p').css('color','#cba89a');
  
  // 把打開的QA都關掉
  $('.FAQ_outBorder').slideUp();
  $('.FAQ_plus').removeClass("FAQ_spin");
})

$('#FAQ_transport').click(function(){
  // 底線顏色
  $('.FAQ_titleBtn').attr('id','FAQ_c');
  
  // 圖片變換
  $('#FAQ_transportBtn').attr('src','../images/transport_h.png');
  $('#FAQ_transactionBtn').attr('src','../images/transaction_n.png');
  $('#FAQ_ingredientsBtn').attr('src','../images/Ingredients_n.png');
  
  // 文字顏色
  $('#FAQ_transport > p').css('color','#172852');
  $('#FAQ_transaction > p').css('color','#cba89a');
  $('#FAQ_ingredients > p').css('color','#cba89a');
  
  // 把打開的QA都關掉
  $('.FAQ_outBorder').slideUp();
  $('.FAQ_plus').removeClass("FAQ_spin");
})




// 點擊問題類別按鈕，切換Q&A問題
let QBtn = document.getElementsByClassName("FAQ_QBtn");
let classification = document.getElementsByClassName("FAQ_classification");

for(let i = 0; i < QBtn.length; i++){
  QBtn[i].addEventListener("click",function(){
    classification[i].classList.add("FAQ_on");
    $('.FAQ_classification').not(classification[i]).removeClass('FAQ_on');
  })
}




// 點擊問題，開關回答
$('.FAQ_question').click(function(){
  $(this).parent('.FAQ_QAList').children('.FAQ_outBorder').slideToggle();
});




// 點擊問題，加號變減號
let question = document.getElementsByClassName("FAQ_question");
let plus = document.getElementsByClassName("FAQ_plus");

for(let a = 0; a < question.length; a++){
  question[a].addEventListener("click",function(){
    plus[a].classList.toggle("FAQ_spin");
  });
}