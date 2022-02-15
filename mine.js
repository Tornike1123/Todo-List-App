$(document).ready(function () {
   $('#input').change(function(){
    let input = $(this).val();
    $('ul').append('<li>' + input + '<i class="bi bi-check-lg"></i> <i class="bi bi-trash3"></i> </li>');

   });

   $('ul').on('click', '.bi-trash3', function () {
       $(this).parent('li').fadeOut();
   });
   $('ul').on('click', '.bi-check-lg', function () {
    $(this).parent('li').toggleClass('checked');
});



});