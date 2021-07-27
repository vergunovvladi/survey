const modalTitleYes = document.querySelector('.modal__titleYes'),
      modalTitle = document.querySelector('.modal__title'),
      modalButtonYes = document.querySelector('.modal__button--yes');

modalButtonYes.addEventListener('click', (event) => {
    modalTitle.classList.toggle('active');
    modalTitleYes.classList.toggle('active');
}, {once: true});


