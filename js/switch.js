$(function() {

  function loadTheme(theme) {
    $('link.theme').attr('disabled', true);
    $('link' + '.' + theme).attr('disabled', false);
  }

  $(window).hashchange( function(){
    var theme = location.hash ? location.hash.replace('#', '') : 'default';
    loadTheme(theme);
  });

  $(window).hashchange();
});
