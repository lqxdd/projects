$(document).ready(function () {
  
    $('ul.menu__tabs').on('click', 'li:not(.menu__tab_active)', function() {
        $(this)
          .addClass('menu__tab_active').siblings().removeClass('menu__tab_active')
          .closest('div.container').find('div.menu__content').removeClass('menu__content_active').eq($(this).index()).addClass('menu__content_active');
        });

  // modal

  const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('[data-close]');

        modalCloseBtn.addEventListener('click', closeModal);

    modalTrigger.forEach(elem => {
      elem.addEventListener('click', () => {
        modal.classList.add('show');
        modal.classList.remove('hide');
    });
    });

  modal.addEventListener('click', (e) => {
    if (e.target===modal){
      modal.classList.add('hide');
      modal.classList.remove('show');
    }
  });


  function closeModal() {
    modal.classList.add('hide');
    modal.classList.remove('show');
  }

});

