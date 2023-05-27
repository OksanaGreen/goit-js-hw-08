import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const LocKey = 'feedback-form';
const input = document.querySelector('name');
const textarea = document.querySelector('name');

form.addEventListener(`input`, throttle(handledInput), 500);
form.addEventListener(`submit`, onSubmit);
checkSave();
const data = {};
function handledInput(even) {
  even.preventDefault();

  data[even.target.name] = even.target.value;
  console.log(even.target.name);
  console.log(even.target.value);
  localStorage.setItem(LocKey, JSON.stringify(data));
}
function checkSave() {
  const savedSettings = JSON.parse(localStorage.getItem(LocKey));
  if (savedSettings) {
    if (!even.target.value === null) {
      data.email = input.value;
      data.message = textarea.value;
    }

    console.log(input.value);
    console.log(textarea.value);
  }
  console.log(savedSettings);
  return;
}
function onSubmit(even) {
  even.preventDefault();
  if (input.value === '' || textarea.value === '') {
    return;
  }

  even.currentTarget.reset();
  localStorage.removeItem(LocKey);
}
