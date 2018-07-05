// Namespace
var LC = LC || {};

// Section Toggle
LC.subMenu = (function ($) {

  function init(){

    var $accordion = $('.accordion');
    var $accordionToggle = $accordion.find('button');

    $accordionToggle.on('click', function(e) {
      e.preventDefault();

      if (!$(this).is('.active')) {
        $(this).addClass('active').attr('aria-expanded', 'true');
        $(this).siblings('.submenu').slideDown(250);
      }
      else {
        $(this).removeClass('active').attr('aria-expanded', 'false');
        $(this).siblings('.submenu').slideUp(250);
      }

    });

  }

  if($('.submenu').length) {
    init();
  }

})(jQuery);
