console.log("Welcome to Spotify");

let songIndex = 0;
let audioElement = new Audio('./songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');

let myProgressBar = document.getElementById('myProgressBar');
let songs = [
  {
    songName: 'Mi Amor',
    filePath: 'song/1.mp3',
    coverPath: 'covers/1.jpg',
  },
  {
    songName: 'Mi Amor',
    filePath: 'song/1.mp3',
    coverPath: 'covers/1.jpg',
  },
  {
    songName: 'Mi Amor',
    filePath: 'song/1.mp3',
    coverPath: 'covers/1.jpg',
  },
  {
    songName: 'Mi Amor',
    filePath: 'song/1.mp3',
    coverPath: 'covers/1.jpg',
  },
  {
    songName: 'Mi Amor',
    filePath: 'song/1.mp3',
    coverPath: 'covers/1.jpg',
  },
];

masterPlay.addEventListener('click', () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    audioElement.classList.remove('fa-circle-play');
    audioElement.classList.add('fa-circle-pause');
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
  } else {
    audioElement.pause();
    audioElement.classList.remove('fa-circle-pause');
    audioElement.classList.add('fa-circle-play');
    masterPlay.classList.remove('fa-circle-pause');
    masterPlay.classList.add('fa-circle-play');
  }
});

audioElement.addEventListener('timeupdate', () => {
  const progress = (audioElement.currentTime / audioElement.duration) * 100;
  myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
  const seekTime = (myProgressBar.value * audioElement.duration) / 100;
  audioElement.currentTime = seekTime;
});

