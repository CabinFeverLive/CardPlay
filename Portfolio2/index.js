$( document ).ready(function() {
  	$('#backButtonLeft').hide();
    $('#backButtonRight').hide();
    $('.page-inner').hide();
    $('#showButtonLeft').toggleClass('active');
    $('#showButtonRight').toggleClass('active');
    $("#showButtonLeft").click(function() {
    $('.page-inner').show();
  	$('#sec-left').width('100%');
    $('#sec-right').hide();
    $('.mainImage').hide();
    $('.page-inner').css({opacity:'1', transition:'2s'});
    $('#backButtonLeft').show();
    $('#showButtonLeft').hide();
  });
  
  $('#backButtonLeft').click(function(){
    $('.page-inner').hide();
  	$("#sec-left").width("50%");
    $('#sec-right').show();
    $('.mainImage').show();
    $('.page-inner').css({opacity:'0', transition:'0s'});
    $('#showButtonLeft').show();
    $('#backButtonLeft').hide();
  });
  
  $("#showButtonRight").click(function() {
    $('.page-inner').show();
  	$('#sec-right').width('100%');  
    $('#sec-left').hide();
    $('.mainImage').hide();
    $('.page-inner').css({opacity:'1', transition:'2s'})
    $('#backButtonRight').show();
    $('#showButtonRight').hide();
  });
  
  $('#backButtonRight').click(function(){
    $('.page-inner').hide();
  	$('#sec-right').width('50%');  
    $('#sec-left').show();
    $('.mainImage').show();
    $('.page-inner').css({opacity:'0', transition:'0s'});
    $('#showButtonRight').show();
    $('#backButtonRight').hide();
  });  
  
  // function renderLogo(){
  //   fetch("logo.json")
  //     .then(function(response){
  //         return response.json();
  //     })
  //     .then(function(logo){
  //       console.log(logo)
      
  //     })
  //   }
  

});



