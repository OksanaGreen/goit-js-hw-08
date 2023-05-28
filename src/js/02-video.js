import throttle from 'lodash.throttle';
import Vimeo, { Player } from '@vimeo/player';
const iframe = document.querySelector(`#vimeo-player`);
const player = new Vimeo(iframe);
const STOREGE_KEY = 'videoplayer-current-time';

player.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem(STOREGE_KEY, data.seconds);
  }, 1000)
);
// console.log('data.seconds');
const timePause = localStorage.getItem(STOREGE_KEY);
console.log(timePause);
if (timePause) {
  player.setCurrentTime(timePause);
}
player.setCurrentTime(localStorage.getItem(STOREGE_KEY) || 0);
//  const currentTime = JSON.parse(localStorage.getItem(STOREGE_KEY));
//  if (currentTime !== null) {
//    player.setCurrentTime(currentTime);
//  }

// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });
