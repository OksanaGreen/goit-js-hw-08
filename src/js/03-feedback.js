import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const LocKey = 'feedback-form';
const input = document.querySelector('email');
const textarea = document.querySelector('message');

form.addEventListener(`input`, throttle(handledInput), 500);
form.addEventListener(`submit`, onSubmit);
const data = {};
function handledInput(even) {
  even.preventDefault();
  console.log(email.value);
  console.log(message.value);

  data[even.target.name] = even.target.value;
  localStorage.setItem(LocKey, JSON.stringify(data));
}
function checkSave() {
  const savedSettings = JSON.parse(localStorage.getItem(LocKey));
  if (savedSettings) {
    !savedSettings === null;
    data.email = input.value;
    data.message = textarea.value;
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
  console.log(Email);
  console.log(Message);
}
