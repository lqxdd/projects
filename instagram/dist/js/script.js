$(document).ready(function () {
  
    $('ul.menu__tabs').on('click', 'li:not(.menu__tab_active)', function() {
        $(this)
          .addClass('menu__tab_active').siblings().removeClass('menu__tab_active')
          .closest('div.container').find('div.menu__content').removeClass('menu__content_active').eq($(this).index()).addClass('menu__content_active');
        });
});

