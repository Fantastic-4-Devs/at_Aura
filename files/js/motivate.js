// media controllers
const playPause = document.querySelector("#play-stop");
const backward = document.querySelector("#backward");
const forward = document.querySelector("#forward");

// record player animation
const circleBig = document.querySelector("#circle-bg");
const circleSm = document.querySelector("#circle-sm");

// playing song
const songName = document.querySelector("#song-name");
const audio = document.querySelector("#audio");
const coverArt = document.querySelector("#cover");
const musicbox = document.querySelector("#musicbox");

// control button images
let playImg = "/images/play.svg";
let pauseImg = "/images/pause.svg";

// default controls
playPause.src = playImg;
let isPlaying = true;

const songList = [
    {
        name: "Travel Love Beats",
        source: "./music/Travel Love Beats.mp3",
        cover: "/images/chillhop.jpg"
    },
    {
        name: "Night Sky Unreated",
        source: "./music/Night Sky.mp3",
        cover: "/images/chillhop-2.jpg"
    },
    {
        name: "Be a Music",
        source: "./music/Be a Music.mp3",
        cover: "/images/chillhop-3.jpg"
    },
    {
        name: "Slow Day",
        source: "./music/Slow Day.mp3",
        cover: "/images/chillhop-4.jpg"
    },
    {
        name: "Carti Mangolia",
        source: "./music/Carti mangolia.mp3",
        cover: "/images/chillhop-2.jpg"
    }
];
// helper function
function createEle(ele) {
    return document.createElement(ele);
}
function append(parent, child) {
    return parent.append(child);
}
// creating track list
const ul = createEle('ul')
function createPlayList() {
    songList.forEach((song) => {
        let h3 = createEle('h3');
        let li = createEle('li');

        li.classList.add("track-item");
        h3.innerText = song.name;
        append(li,h3);
        append(ul,li)
    })
    append(musicbox, ul);
}

let songIndex = 0;
// preloaded song
loadMusic(songList[songIndex]);


function loadMusic() {
    coverArt.src = songList[songIndex].cover;
    songName.innerText = songList[songIndex].name;
    audio.src = songList[songIndex].source;
}

function playSong() {
    playPause.src = pauseImg;
    circleBig.classList.add("animate");
    circleSm.classList.add("animate");

    audio.play();
}

function pauseSong() {
    playPause.src = playImg;
    circleBig.classList.remove("animate");
    circleSm.classList.remove("animate");

    audio.pause();
}

function nextPlay() {
    songIndex++;
    if(songIndex > songList.length - 1) {
        songIndex = 0;
    }
    loadMusic(songList[songIndex]);
    playSong()
}

function backPlay() {
    songIndex--;
    if(songIndex < 0) {
        songIndex = songList.length - 1;
    }
    loadMusic(songList[songIndex]);
    playSong()
}
function playHandler() {
    isPlaying = !isPlaying;
    //console.log("Change: ",isPlaying)
    isPlaying ? pauseSong() : playSong();
}


// player event 
playPause.addEventListener("click", playHandler);
backward.addEventListener("click", backPlay);
forward.addEventListener("click", nextPlay);

createPlayList()

const head = document.querySelector('#heading');
const quoteTitle = document.querySelector('#quote-title');
const next = document.querySelector('#next-quote');

const quote = (data) => {
	quoteTitle.textContent=`${data[0].phrase}`
}

const fetchData = () => {
	//Fetches the data from the api
	fetch('https://dulce-affirmations-api.herokuapp.com/affirmation')
	//Converts that to JSON model
	.then(response => response.json())
	//Performs operation on that JSON model
	.then(data => {
	   quote(data);
	})
}

fetchData();

const nextQuote = () => {
	fetchData();
}

next.addEventListener('click', nextQuote);
