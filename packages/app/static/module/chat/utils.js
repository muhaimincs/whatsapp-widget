"use strict";

exports.__esModule = true;
exports.playAlertSound = playAlertSound;
const nothing = new Audio('http://touchbasicapp.com/nothing.wav');
const music = new Audio('https://api1.fastagent.io/static/sound/definite.mp3');

function tapped() {
  music.play();
  music.pause();
  music.currentTime = 0;
}

document.addEventListener('touchstart', tapped, false);
document.addEventListener('click', tapped, false);
nothing.play().catch(err => {
  // eslint-disable-next-line no-console
  console.info(`[MCS AUDIO]: ${err}`);
});

function playAlertSound() {
  try {
    return music.play().then(() => {
      document.removeEventListener('touchstart', tapped, false);
      document.removeEventListener('click', tapped, false);
      return true;
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.info(`[MCS AUDIO]: ${err}`);
    return false;
  }
}