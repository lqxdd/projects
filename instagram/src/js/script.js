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

  //buttons

  let likeBtn = document.querySelector('#likebtn'),
        saveBtn = document.querySelector('#savebtn'),
        liked = false,
        saved = false;

        likeBtn.addEventListener('click', () => {
        if (liked === false){
          likeBtn.style.filter = 'invert(31%) sepia(41%) saturate(6289%) hue-rotate(340deg) brightness(101%) contrast(88%)';
          liked = true;
        } else {
          likeBtn.style.filter = 'invert(77%) sepia(0%) saturate(6704%) hue-rotate(17deg) brightness(80%) contrast(70%)';
          liked = false;
        }
        });

        saveBtn.addEventListener('click', () => {
          if (saved === false){
            saveBtn.style.filter = 'invert(0%) sepia(0%) saturate(0%) hue-rotate(324deg) brightness(96%) contrast(104%)';
            saved = true;
          } else {
            saveBtn.style.filter = 'invert(77%) sepia(0%) saturate(6704%) hue-rotate(17deg) brightness(80%) contrast(70%)';
            saved = false;
          }
          });

          document.getElementById("date").innerHTML = new Date().toDateString();
          document.querySelector(".modal__img").style.backgroundImage = 'url(img/gradients.jpg)';
    
});

