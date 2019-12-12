$( document ).ready(function() {
  	$('#backButtonLeft').hide();
    $('#backButtonRight').hide();
    $('.page-inner').hide();
    $('#showButtonLeft').toggleClass('active');
    $('#showButtonRight').toggleClass('active');
  $("#showButtonLeft").click(function() {
    console.log('clicked left section');
    $('.page-inner').show();
  	$('#sec-left').width('100%');
    $('#sec-right').hide();
    $('.mainImage').hide();
    $('.page-inner').css({opacity:'1', transition:'2s'});
    $('#backButtonLeft').show();
    $('#showButtonLeft').hide();
  });
  
  $('#backButtonLeft').click(function(){
    console.log('sections back to half-half');
    $('.page-inner').hide();
  	$("#sec-left").width("50%");
    $('#sec-right').show();
    $('.mainImage').show();
    $('.page-inner').css({opacity:'0', transition:'0s'});
    $('#showButtonLeft').show();
    $('#backButtonLeft').hide();
  });
  
  $("#showButtonRight").click(function() {
    console.log('clicked right section');
    $('.page-inner').show();
  	$('#sec-right').width('100%');  
    $('#sec-left').hide();
    $('.mainImage').hide();
    $('.page-inner').css({opacity:'1', transition:'2s'})
    $('#backButtonRight').show();
    $('#showButtonRight').hide();
  });
  
  $('#backButtonRight').click(function(){
    console.log('sections back to half-half');
    $('.page-inner').hide();
  	$('#sec-right').width('50%');  
    $('#sec-left').show();
    $('.mainImage').show();
    $('.page-inner').css({opacity:'0', transition:'0s'});
    $('#showButtonRight').show();
    $('#backButtonRight').hide();
  });  
  
});



/* $( document ).ready(function() {
  // Handler for .ready() called.
      $(".section1").click(function() {
        $('.page-left').css({transform:'translateX(0%)'})
        $('.section1').css({width:'100%'})
        // $('.page-left').removeAttr('hidden')
        $('.section2').hide()
        $('.page-left').show()
      });


    // $('.backButtonLeft').click(function(){
    //     // $('.section1').css({width:'50%'})
    //     // $('.section2').css({width:'50%'})

    //     // // $('.section1,.section2').css({width:'50%'})
    //     // // $('.section1').css({width:'50%'})
    //     // $('.section2').show()
    //     // $('.page-left').attr(hidden='true')
    //     // $('.page-right').removeAttr('hidden')
    //     // // $('.page-left').hide()

    //     // $('.page-left').css({transform:'translateX(-100%)'})
    //     // $('.section1').css({width:'50%'})
    //     // // $('.page-left').removeAttr('hidden')
    //     // $('.section2').show()
    //     // $('.section2').css({display:'flex'})
    //     // $('.page-left').hide()

    //     $('.page-left').css({transform:'translateX(-100%)'})
    //     $('.section1').css({width:'50%'})
    //     // $('.page-left').removeAttr('hidden')
    //     $('.page-left').hide()
    //     $('.section2').show()

    //     console.log('the back button works')
    // });
});



  function sideClick(){
    // $(".section1").click(function() {
    //     $('.page-left').css({transform:'translateX(0%)'})
    //     $('.section1').css({width:'100%'})
    //     $('.section2').hide()
    //     $('.page-left').removeAttr('hidden')
    //   });

      

      $(".section2").click(function() {
        $('.page-right').css({transform:'translateX(0%)'})

        $('.page-right').css({zIndex: '100'})

        $('.section1').hide()

        $('.container').css({gridTemplateColumns:'100%'})

        $('.container').removeClass('.section1')

        
      });

       $('.backButtonLeft').click(function(){
        // $('.section1').css({width:'50%'})
        $(".section1").width("50%");
        $('.section2').show()
        $('.page-left').attr('hidden')
          // $('.section2').show()
          // $('.page-left').hide()

          // console.log()
      });

      $('.backButtonRight').click(function(){

    });
  }

  // function backClick(){
      // $('.backButtonLeft').click(function(){
      //     $('.page-left').css({transform:'translateX(100%)'})

      //     $('.container').css({gridTemplateColumns:'1fr 1fr'})
      //     console.log('the back button works')
      // });

    $('.backButtonLeft').click(function(){
        $('.page-left').css({transform:'translateX(-100%)'})
        $('.section1').css({width:'50%'})
        $('.page-left').hide()
        $('.section2').show()
        console.log('the back button works')
    });      

      $('.backButtonRight').click(function(){

    });
  // }

  sideClick()
  */