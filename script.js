console.log("Spotify clone");

// ! Intialize the variables
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("progressbar");
let gif = document.getElementById("gif");
let songItemPlay = Array.from(document.getElementsByClassName("songItemPlay"));

let songs = [
  {
    songname: "Salam-e-Ishq",
    filepath: "songs/1.mp3",
    coverpath: "covers/1.jpg",
  },
  {
    songname: "Salam-e-Ishq",
    filepath: "songs/2.mp3",
    coverpath: "covers/2.jpg",
  },
  {
    songname: "Salam-e-Ishq",
    filepath: "songs/3.mp3",
    coverpath: "covers/3.jpg",
  },
  {
    songname: "Salam-e-Ishq",
    filepath: "songs/4.mp3",
    coverpath: "covers/4.jpg",
  },
  {
    songname: "Salam-e-Ishq",
    filepath: "songs/5.mp3",
    coverpath: "covers/5.jpg",
  },
  {
    songname: "Salam-e-Ishq",
    filepath: "songs/6.mp3",
    coverpath: "covers/6.jpg",
  },
  {
    songname: "Salam-e-Ishq",
    filepath: "songs/7.mp3",
    coverpath: "covers/7.jpg",
  },
  {
    songname: "Salam-e-Ishq",
    filepath: "songs/8.mp3",
    coverpath: "covers/8.jpg",
  },
  {
    songname: "Salam-e-Ishq",
    filepath: "songs/9.mp3",
    coverpath: "covers/9.jpg",
  },
  {
    songname: "Salam-e-Ishq",
    filepath: "songs/10.mp3",
    coverpath: "covers/10.jpg",
  },
];

//audioElement.play();

//Listening event to play pause button
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause");
    masterPlay.classList.add("fa-play");
    gif.style.opacity = 0;
  }
});

//Listen to timeUpdate event on the input progress bar
audioElement.addEventListener("timeupdate", () => {
  // console.log("TimeUpdated")
  //Seek bar updated
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  // console.log(progress);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlay = () => {
  songItemPlay.forEach((element) => {
    element.classList.remove("fa-pause");
    element.classList.add("fa-play");
  });
};
songItemPlay.forEach((element) => {
  element.addEventListener("click", (e) => {
    makeAllPlay();
    songIndex = parseInt(e.target.id);
    e.target.classList.remove("fa-play");
    e.target.classList.add("fa-pause");
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    audioElement.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
  });
});

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  audioElement.play();
  masterPlay.classList.remove("fa-play");
  masterPlay.classList.add("fa-pause");
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 9;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  audioElement.play();
  masterPlay.classList.remove("fa-play");
  masterPlay.classList.add("fa-pause");
});
