import { AudioLoader } from 'three';

const loader = new AudioLoader();

const boop = 'boop.mp3';
const beep = 'beep.mp3';

function loadAudio(src) {
  loader.load(src, function (buffer) {
    console.log(`Loaded ${src}`);
  });
}

// load beep.mp3 once - should succeed
loadAudio(beep);

// load boop.mp3 twice - second time will throw
loadAudio(boop);
loadAudio(boop);
