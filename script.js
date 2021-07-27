const modalTitleYes = document.querySelector('.modal__titleYes'),
      modalTitle = document.querySelector('.modal__title'),
      modalButtonYes = document.querySelector('.modal__button--yes'),
      modalButtonNo = document.querySelector('.modal__button--no');

modalButtonYes.addEventListener('click', (event) => {
    modalTitle.classList.toggle('active');
    modalTitleYes.classList.toggle('active');
}, {once: true});

modalButtonNo.addEventListener('mouseenter', (event) => {
    lol();
});

let x = 0;

const lol = function () {
    let windowHeight = window.innerHeight;
    modalButtonNo.style.top = (Math.random() * (window.innerHeight - modalButtonNo.getBoundingClientRect().height)) - 'хз что тут' + 'px';
}
