// Sticky Header
$(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
        $('.sticky_h').addClass('sticky');
    } else {
        $('.sticky_h').removeClass('sticky');
    }
});


$('.sticky_h li a').click(function() {
    if ($('.sticky_h').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.sticky_h').removeClass('open-nav');
    }
});

// navigation scroll
$('nav a, .tagline a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});

(function($){

  var $modalOverlay = $('.md-overlay');
  var $modalClose = $('.md-close');

  $('*[data-target-modal]').click(function(){

    var id = $(this).data('target-modal');
    var $modal = $('#'+id);

    if($modal.length){
      $modal.show();
      $modalOverlay.show();
    }

  });

  $modalOverlay.click(function(){
    $(this).hide();
    $('.md-modal:visible').hide();
  });

  $modalClose.click(function(){
    $modalOverlay.trigger('click');
  });


})(jQuery)

// Particle JS
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('callback - particles.js config loaded');
});
