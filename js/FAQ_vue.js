$(document).ready(function(){
  let vv = new Vue({
    el: "#FAQ_app",
    data: {
      trade: [],
      ingredients: [],
      transportation: [],
    },
    methods: {
      // spin(e){
      //   console.log(e);
      //   $('.FAQ_question').find('.FAQ_plus').toggleClass("FAQ_spin")
      // }
    },
    mounted(){
      $.ajax({            
        method: "POST",
        url: "../php/FAQ_select.php",
        data:{ 
        },            
        dataType: "json",
        success: function (data) {
          // alert("更新成功");
          $.each(data, function(index, item) {
            // console.log(data);
            if(item.qa_class == 0){
              // console.log(item.qa_id);
              var a = {qa_id: item.qa_id, qa_class: item.qa_class, Q: item.question, A: item.answer}
              vv.trade.push(a);
            };
            if(item.qa_class == 1){
              // console.log(item.qa_id);
              var a = {qa_id: item.qa_id, qa_class: item.qa_class, Q: item.question, A: item.answer}
              vv.ingredients.push(a);
            };
            if(item.qa_class == 2){
              // console.log(item.qa_id);
              var a = {qa_id: item.qa_id, qa_class: item.qa_class, Q: item.question, A: item.answer}
              vv.transportation.push(a);
            };
          });
        },
        error: function(exception) {
          alert("發生錯誤: " + exception.status);
        }
      });
    },
  })
})


$(function(){
  // 點擊問題類別按鈕，變換文字及底線顏色
  $('#FAQ_transaction').click(function(){
    // 底線顏色
    $('.FAQ_titleBtn').attr('id','FAQ_a');
    // 圖片變換
    $('#FAQ_transactionBtn').attr('src','../images/FAQ/transaction_h.png');
    $('#FAQ_ingredientsBtn').attr('src','../images/FAQ/Ingredients_n.png');
    $('#FAQ_transportBtn').attr('src','../images/FAQ/transport_n.png');
    
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
    $('#FAQ_ingredientsBtn').attr('src','../images/FAQ/Ingredients_h.png');
    $('#FAQ_transactionBtn').attr('src','../images/FAQ/transaction_n.png');
    $('#FAQ_transportBtn').attr('src','../images/FAQ/transport_n.png');

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
    $('#FAQ_transportBtn').attr('src','../images/FAQ/transport_h.png');
    $('#FAQ_transactionBtn').attr('src','../images/FAQ/transaction_n.png');
    $('#FAQ_ingredientsBtn').attr('src','../images/FAQ/Ingredients_n.png');
    
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




  // 點擊問題，開關回答，加號變減號

  // $('.FAQ_classification').on('click','.FAQ_question',function(){
  //   // console.log($(this));
  //   $(this).next('.FAQ_outBorder').slideToggle();
  // });

  
  $('.FAQ_classification').on('click','.FAQ_question',function(){
    $(this).find('.FAQ_plus').toggleClass("FAQ_spin")
    $(this).next('.FAQ_outBorder').stop(true, false).slideToggle();  
  })



  
})

