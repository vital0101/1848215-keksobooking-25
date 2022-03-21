const formAdvert = document.querySelector('.ad-form');
formAdvert.classList.add('.ad-form--disabled');
const elementFormAdvert = formAdvert.children;
[...elementFormAdvert].forEach(
  (element) => {
    element.setAttribute('disabled', 'disabled');
  }
);
const formMapFilter = document.querySelector('.map__filters');
formAdvert.classList.add('.map__filters--disabled');
const elementMapFilter = formMapFilter.children;
[...elementMapFilter].forEach(
  (element) => {
    element.setAttribute('disabled', 'disabled');
  }
);
