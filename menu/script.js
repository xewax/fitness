$(document).ready(function() {
   $('div').mouseenter(function() {
       $(this).animate({
           width: '+=8rem'
       });
   });
   $('div').mouseleave(function() {
       $(this).animate({
           width: '-=8rem'
       }); 
   });
   $('#newsbeard').click(function() {
    $(this).toggle(100);
    document.location.href='02.html';
   }); 
   $('#gaming').click(function() {
    $(this).toggle(100);
    document.location.href='02.html';
   }); 
   $('#worldnews').click(function() {
    $(this).toggle(100);
    document.location.href='02.html';
   }); 

   $('#culture').click(function() {
    $(this).toggle(100);
    document.location.href='02.html';
    });
});