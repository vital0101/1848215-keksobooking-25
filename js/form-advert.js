const formAdvert = document.querySelector('.ad-form');

const pristine = new Pristine(
  formAdvert,
  {
    classTo: 'ad-form__element',
    errorTextParent: 'ad-form__element',
    errorTextClass: 'ad-form__element--error-text',
  }
);

const titleAdvert = formAdvert.querySelector('#title');
const validateTitleAdvert = (value) => value.length >= 30 && value.length <= 100;
const getErrorTitle = () => 'Длина заголовка должна быть от 30 до 100 символов';

pristine.addValidator(
  titleAdvert,
  validateTitleAdvert,
  getErrorTitle,
);

// выбор поля валидации

const typeRoom = formAdvert.querySelector('#type');
const priceRoom = formAdvert.querySelector('#price');
const minPriceHousing = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

// условие валидации поля price

const MAX_PRICE_HOUSING = 100000;
const validatePriceAdvert = () => priceRoom.value >= minPriceHousing[typeRoom.value] && priceRoom.value <= MAX_PRICE_HOUSING;
typeRoom.addEventListener('change', () => {
  priceRoom.placeholder = minPriceHousing[typeRoom.value];
  priceRoom.min = minPriceHousing[typeRoom.value];
});

const getErrorPrice = () => {
  if (priceRoom.value <= minPriceHousing[typeRoom.value]) {
    return `Минимальная цена ${minPriceHousing[typeRoom.value]}`;
  }else if (priceRoom.value >= MAX_PRICE_HOUSING) {
    return `Максимальная цена ${MAX_PRICE_HOUSING}`;
  }
};

pristine.addValidator(
  priceRoom,
  validatePriceAdvert,
  getErrorPrice,
);


const timeIn = formAdvert.querySelector('#timein');
const timeOut = formAdvert.querySelector('#timeout');

// при выборе значения в одном поле, значение в другом поле должно поменяться
timeIn.addEventListener('change', () => {
  if (timeIn.value === '12:00') {
    timeOut[1].removeAttribute('selected', 'selected');
    timeOut[2].removeAttribute('selected', 'selected');
    timeOut[0].setAttribute('selected', 'selected');
    return;
  }
  if (timeIn.value === '13:00') {
    timeOut[0].removeAttribute('selected', 'selected');
    timeOut[2].removeAttribute('selected', 'selected');
    timeOut[1].setAttribute('selected', 'selected');
    return;
  }
  if (timeIn.value === '14:00') {
    timeOut[0].removeAttribute('selected', 'selected');
    timeOut[1].removeAttribute('selected', 'selected');
    timeOut[2].setAttribute('selected', 'selected');
  }
});

timeOut.addEventListener('change', () => {
  if (timeOut.value === '12:00') {
    timeIn[1].removeAttribute('selected', 'selected');
    timeIn[2].removeAttribute('selected', 'selected');
    timeIn[0].setAttribute('selected', 'selected');
    return;
  }
  if (timeOut.value === '13:00') {
    timeIn[0].removeAttribute('selected', 'selected');
    timeIn[2].removeAttribute('selected', 'selected');
    timeIn[1].setAttribute('selected', 'selected');
    return;
  }
  if (timeOut.value === '14:00') {
    timeIn[0].removeAttribute('selected', 'selected');
    timeIn[1].removeAttribute('selected', 'selected');
    timeIn[2].setAttribute('selected', 'selected');
  }
});

const validateTimeInputs = () => timeIn.value === timeOut.value;
const getErrorTextTimeIn = () => 'Время заезда должно соотвествовать времени выезда';
const getErrorTextTimeOut = () => 'Время выезда должно соотвествовать времени заезда';

pristine.addValidator(
  timeIn,
  validateTimeInputs,
  getErrorTextTimeIn,
);

pristine.addValidator(
  timeOut,
  validateTimeInputs,
  getErrorTextTimeOut,
);

const roomsInput = formAdvert.querySelector('#room_number');
const capacityInput = formAdvert.querySelector('#capacity');

const roomsToOption = {
  '1': ['1'],
  '2': ['1', '2'],
  '3': ['1', '2', '3'],
  '100': ['0'],
};

const validateRoomsInput = () => roomsToOption[roomsInput.value].includes(capacityInput.value);

const getRoomsError = () => {
  if (roomsInput.value === '1') {
    return 'Размещение для одного гостя';
  }
  if (roomsInput.value === '2') {
    return 'Размещение от одного до двух гостей';
  }
  if (roomsInput.value === '3') {
    return 'Размещение от одного до трех гостей';
  }
  if (roomsInput.value === '100') {
    return 'Не для гостей';
  }
};

pristine.addValidator(
  capacityInput,
  validateRoomsInput,
  getRoomsError,
);

formAdvert.addEventListener('submit', (evt) => {
  if(!pristine.validate()){
    evt.preventDefault();
  }
});
