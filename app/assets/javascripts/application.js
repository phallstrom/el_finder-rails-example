/*
 * This is a manifest file that'll be compiled into including all the files listed below.
 * Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
 * be included in the compiled file accessible from http://example.com/assets/application.js
 * It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
 * the compiled file.
 *
 *= require jquery.min.js
 *= require jquery-ui.min.js
 *= require jquery_ujs.js
 *= require elfinder/elfinder.min.js
 *= require elfinder/proxy/elFinderSupportVer1.js
 *= require elfinder/i18n/elfinder.ru.js
 */
$(function() {
  var rails_csrf = {};
  rails_csrf[$('meta[name=csrf-param]').attr('content')] = $('meta[name=csrf-token]').attr('content');

  $('#elfinder').elfinder({
    url: '/elfinder',
    transport : new elFinderSupportVer1(),
    customData: rails_csrf,
    // lang: 'ru',
  });
});
