"use strict";

exports.__esModule = true;
exports.playAlertSound = playAlertSound;
exports.formatAMPM = formatAMPM;
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

function formatAMPM(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours %= 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'

  minutes = minutes < 10 ? `0 ${minutes}` : minutes;
  const strTime = `${hours}:${minutes} ${ampm}`;
  return strTime;
}