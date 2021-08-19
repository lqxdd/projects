
 const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('[data-close]');


        modalTrigger.forEach(elem => {
            elem.addEventListener('click', () => {
              modal.classList.add('show');
              modal.classList.remove('hide');
          });
          });


        modalCloseBtn.addEventListener('click', () => {
          modalCloseBtn.classList.add('hide');
          modalCloseBtn.classList.remove('show');
        });

    

  modal.addEventListener('click', (e) => {
    if (e.target===modal){
      modal.classList.add('hide');
      modal.classList.remove('show');
    }
  });