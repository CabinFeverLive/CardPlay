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
  
  $(function(){
    $(".typed").typed({
      strings: ["drawing I'm Wireframing", "wireframing I'm importing psd files.", "importing, I'm npx creating a React app."],
      // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
      stringsElement: null,
      // typing speed
      typeSpeed: 30,
      // time before typing starts
      startDelay: 1200,
      // backspacing speed
      backSpeed: 20,
      // time before backspacing
      backDelay: 500,
      // loop
      loop: true,
      // false = infinite
      loopCount: 5,
      // show cursor
      showCursor: false,
      // character for cursor
      cursorChar: "|",
      // attribute to type (null == text)
      attr: null,
      // either html or text
      contentType: 'html',
      // call when done callback function
      callback: function() {},
      // starting callback function before each string
      preStringTyped: function() {},
      //callback for every typed string
      onStringTyped: function() {},
      // callback for reset
      resetCallback: function() {}
    });
  });
  
  

});



