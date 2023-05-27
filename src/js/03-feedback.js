import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const LocKey = 'feedback-form';
const input = document.querySelector('email');
const textarea = document.querySelector('message');

form.addEventListener(`input`, throttle(handledInput), 500);
form.addEventListener(`submit`, onSubmit);
checkSave();
const data = {};
function handledInput(even) {
  even.preventDefault();

  data[even.target.name] = even.target.value;
  console.log(email.value);
  console.log(message.value);
  localStorage.setItem(LocKey, JSON.stringify(data));
  console.log(data);
}
function checkSave() {
  const savedSettings = JSON.parse(localStorage.getItem(LocKey));
  if (savedSettings) {
    !savedSettings === null;
    data.email = input.value;
    data.message = textarea.value;
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
