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
  console.log(data);
  localStorage.setItem(LocKey, JSON.stringify(data));
  console.log(data);
}
function checkSave() {
  const savedSettings = JSON.parse(localStorage.getItem(data));
  if (savedSettings) {
    console.log(data);
    !data === null;
    input.value = savedSettings.email;
    textarea.value = savedSettings.message;
    console.log(input.value);
    console.log(textarea.value);
  }
  console.log(savedSettings);
  return;
}
function onSubmit(even) {
  even.preventDefault();
  even.currentTarget.reset();
  localStorage.removeItem(LocKey);
  if (even.target.value === null) {
    return;
  }
}
