const songs = [
  { title: "Song 1", src: "songs/song1.mp3", cover: "images/cover1.jpg" },
  { title: "Song 2", src: "songs/song2.mp3", cover: "images/cover2.jpg" },
  { title: "Song 3", src: "songs/song3.mp3", cover: "images/cover3.jpg" },
  { title: "Song 4", src: "songs/song4.mp3", cover: "images/cover4.jpg" },
  { title: "Song 5", src: "songs/song5.mp3", cover: "images/cover5.jpg" },
  { title: "Song 6", src: "songs/song6.mp3", cover: "images/cover6.jpg" }
];

let currentSong = 0;

const audio = document.getElementById("audio");
const songTitle = document.getElementById("song-title");
const cover = document.getElementById("cover");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

function loadSong(index) {
  songTitle.textContent = songs[index].title;
  cover.src = songs[index].cover;
  audio.src = songs[index].src;
  audio.play();
}

prevBtn.addEventListener("click", () => {
  currentSong = (currentSong - 1 + songs.length) % songs.length;
  loadSong(currentSong);
});

nextBtn.addEventListener("click", () => {
  currentSong = (currentSong + 1) % songs.length;
  loadSong(currentSong);
});

// Play next song automatically when one ends
audio.addEventListener("ended", () => {
  currentSong = (currentSong + 1) % songs.length;
  loadSong(currentSong);
});

// Load first song initially
loadSong(currentSong);
