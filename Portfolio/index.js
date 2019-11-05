'use strict'

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 6000); 
}

function rendertemplate(){
    fetch("html.json")
      .then(function(response){
          return response.json();
      })
      .then(function(html){
        console.log(html)
        $('#missionStatement').html(html.header)
        $('.narration.bioOne').html(html.narr1)
        $('.narration.bioTwo').html(html.narr2)
        $('.narration.bioThree').html(html.narr3)   
        $('.narration.topLeft').html(html.quizfunction1)
        $('.narration.bottomRight').html(html.quizfunction2)
        $('#mainFooter').html(html.footer)
      })

}
//run the show shlides function within the renderTemplate function 


$(rendertemplate)