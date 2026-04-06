let isPlaying = false;
const audio = new Audio();
let currentIndex = 0;
audio.volume = 0.5;

const songs = [
    {
        author: "Jolin Tsai",
        title: "Nice Song",
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/47/2f/a5/472fa581-1462-4905-c73f-94603e81a7d3/cover.jpg/592x592bb.webp",
        src: "assets/songs/tsai.mp3",
    },
    {
        author: "KESHA",
        title: "Tik Tok",
        cover: "https://i.pinimg.com/1200x/00/97/f4/0097f4e551d651473eaf368925de0672.jpg",
        src: "assets/songs/tiktok.mp3",
    },
    {
        author: "Lala Hsu",
        title: "Nice Song",
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music6/v4/43/52/5e/43525e86-9c47-cb57-5ca5-a374aa7afa40/LaLa.jpg/416x416bb.webp",
        src: "assets/songs/moon.mp3",
    },
    {
        author: "Playboi Carti",
        title: "RatherLie",
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/03/24/10/03241047-f22d-7e64-3932-6df7550acc42/25UMGIM46212.rgb.jpg/592x592bb.webp",
        src: "assets/songs/rather.mp3",
    },
    {
        author: "DRAKE",
        title: "Rich Baby Daddy",
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/21/50/ee/2150ee84-62c3-4190-7dfa-da30abd98ac8/23UM1IM09862.rgb.jpg/592x592bb.webp",
        src: "assets/songs/drake.mp3",
    },
    {
        author: "Lil Uzi Vert",
        title: "Rich Baby Daddy",
        cover: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDJuOXN3c3g1MHRtaWRmcWVrNWMxdHk0MTN2eGprbmhxNXJoYWJlZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/n9141Bk86jRrN6kZ0j/giphy.gif",
        src: "assets/songs/xo.mp3",
    },
];

const boxes = document.querySelectorAll(".music-box");

boxes.forEach(function (box, index) {
    box.addEventListener("click", function () {
        if (currentIndex === index && isPlaying) {
            audio.pause();
            isPlaying = false;
            document.querySelector(".music-bar").style.display = "none";
        } else {
            currentIndex = index;
            document.querySelector(".music-bar").style.display = "flex";
            document.querySelector(".bar-img").src = songs[index].cover;
            document.getElementById("bar-title").textContent = songs[index].title;
            document.getElementById("bar-artist").textContent = songs[index].author;
            audio.src = songs[index].src;
            audio.play();
            isPlaying = true;
            document.querySelector("#play-btn i").className = "fa-solid fa-pause";
        }
    });
});

document.getElementById("play-btn").addEventListener("click", function () {
    isPlaying = !isPlaying;
    if (isPlaying) {
        audio.play();
        document.querySelector("#play-btn i").className = "fa-solid fa-pause";
    } else {
        audio.pause();
        document.querySelector("#play-btn i").className = "fa-solid fa-play";
    }
});

document.getElementById("next-btn").addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % songs.length;
    document.querySelector(".bar-img").src = songs[currentIndex].cover;
    document.getElementById("bar-title").textContent = songs[currentIndex].title;
    document.getElementById("bar-artist").textContent = songs[currentIndex].author;
    audio.src = songs[currentIndex].src;
    audio.play();
    isPlaying = true;
    document.querySelector("#play-btn i").className = "fa-solid fa-pause";
});

document.getElementById("prev-btn").addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + songs.length) % songs.length;
    document.querySelector(".bar-img").src = songs[currentIndex].cover;
    document.getElementById("bar-title").textContent = songs[currentIndex].title;
    document.getElementById("bar-artist").textContent = songs[currentIndex].author;
    audio.src = songs[currentIndex].src;
    audio.play();
    isPlaying = true;
    document.querySelector("#play-btn i").className = "fa-solid fa-pause";
});
