const audio = document.getElementById("myAudio");
const volumeSlider = document.getElementById("volumeSlider");
const musicSelect = document.getElementById("musicSelect");
const loopCheckbox = document.getElementById("loopCheckbox");

let currentIndex = 0; // Keep track of the current music index

function loadMusic() {
  audio.src = musicSelect.value;
  currentIndex = musicSelect.selectedIndex;
}

function playAudio() {
  audio.play();
  audio.addEventListener("ended", playNext); // Automatically play the next music when the current one ends
}

function pauseAudio() {
  audio.pause();
  audio.removeEventListener("ended", playNext); // Remove the event listener when pausing
}

function setVolume() {
  audio.volume = volumeSlider.value;
}

function setLoop() {
  audio.loop = loopCheckbox.checked;
}

function playNext() {
  currentIndex++;
  if (currentIndex >= musicSelect.options.length) { 
    currentIndex = 0;
  }
  musicSelect.selectedIndex = currentIndex; 
  loadMusic(); 
  playAudio(); 
}

loadMusic(); 
