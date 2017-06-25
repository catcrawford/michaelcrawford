
  $( document ).ready(function() {

      // function myFunction(x) {
      //     x.classList.toggle('change');
      //
      // }

      $('.menu').on('click', function(){

      $(this).toggleClass('change');

});

$("#my-menu").hide();

$("#hamburger").click(function(e){



$(this).next("#my-menu").slideToggle();

});





});
