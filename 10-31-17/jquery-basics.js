function main(){
  //all code should be in here
  //document.getElementById('google').innerHTML='Google';
  $('#google').html('Googoole');
  //let links = document.getElementsByClassName('my-link');
  let links = $('.my-link');
  links[0].innerHTML ="Twitter";
  links[0].href = "http://www.twitter.com";
  links[1].innerHTML ="Linkedin";
  links[1].href = "http://www.Linkedin.com";
  links[1].style.color ="red";


  //button click event
  $('#heading-button').click(function() {
    $('h1').css('color','red');
    $('.my-link').hide();
  });

  //TOGGLE button
  $('#toggle-button').click(function(){
    $('.my-link').toggle();
  })

//hdie and show main text
$('#main-text').hide();
$('#main-text').fadeIn(1000);

//hide project
$('.projects').hide();

//show project by clicking
$('.projects-button').click(function (){
  $(this).next().slideToggle(500);
});



}
$(document).ready(main);
