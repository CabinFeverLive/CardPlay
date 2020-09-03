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
    $('.typedMain').hide();
    $('.artSlide').slick();
  });
  
  $('#backButtonLeft').click(function(){
    $('.page-inner').hide();
  	$("#sec-left").width("50%");
    $('#sec-right').show();
    $('.mainImage').show();
    $('.page-inner').css({opacity:'0', transition:'0s'});
    $('#showButtonLeft').show();
    $('.typeMain').show();
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
    $('.typedMain').hide();
    $('.projectSlide').slick();
  });
  
  $('#backButtonRight').click(function(){
    $('.page-inner').hide();
  	$('#sec-right').width('50%');  
    $('#sec-left').show();
    $('.mainImage').show();
    $('.page-inner').css({opacity:'0', transition:'0s'});
    $('#showButtonRight').show();
    $('#backButtonRight').hide();
    $('.typedMain').show();
  });  

  
  
  $(function(){
    $(".typed").typed({
      strings: ["sleeping I'm Wireframing", "wireframing I'm importing psd files.", "importing PSDs PNGs GIFs, I'm npx creating a React app.","creating react apps I'm running npm install, sometimes even yarn", "using package managers to install the best mods, Im building high fidelity prototypes from said wireframes","populating componetents and creating proper relationships between them with use of props and state, Im gathering other resources from my UI kit to close the prototype", "closing prototypes to pitch for production, I'm testing components using Enzyme / Jest.","testing components, I'm deploying approved sites/apps","deploying...Im...(yawns)...getting sleepy.."],
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
      loopCount: 500,
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

  $(function(){
    $(".typedMain").typed({
      strings: ["All elements on this site are hand drawn digitally by me","All elements were developed and acheived with jQuery..by me","No bootstrap or Material UI for practice although I use BS and tachyons..","...but don't sleep...I get down with React as well"],
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
      loopCount: 500,
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
  
  $(function(){
    $(".typedLeft").typed({
      strings: ["sleeping, I'm drinking coffee", "drinking coffee, I'm plotting.", "plotting, Im creating a group of rough sketeches.", "rough sketching, I'm choosing a color palette to close rough comps", "closing rough comps, I'm selecting from the bunch for final drafts", "finalzing drafts in color and or animation, Im solidifying those plots into scripts", "scripting I'm building the dialog in between the plot points of said script.","dialoging and monologing, im settling down..for sleep.."],
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
      loopCount: 500,
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



