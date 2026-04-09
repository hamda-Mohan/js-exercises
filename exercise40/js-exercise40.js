//  video player js
const videoElement = document.querySelector('video');
const playBtn = document.getElementById('play-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const currentTimeEl = document.getElementById('current-time');
const durationTimeEl = document.getElementById('duration');
const progress = document.getElementById('progress');
const progressContainer = document.querySelector('.progress-bar');
const volumeSlider = document.getElementById('volume');
const playSpeed = document.getElementById('speed');
// videos data

const videos = [
    {
        src:"thevideo/V1.mp4",
    },
    {
        src:"thevideo/V2.mp4",
    },
    {
        src:"thevideo/V3.mp4",
    },
    {
        src:"thevideo/V4.mp4",
    },
    {
        src:"thevideo/mine.mp4",
    }
];

let videoIndex = 0;
let isPlaying = false;
let speed = 1;

// load videos 

function loadVideo(video) {
    videoElement.src = video.src;
};
loadVideo(videos[videoIndex]);

// play video
function playVideo() {
    videoElement.play();
    isPlaying = true;
    playBtn.querySelector('i').classList.remove('fa-play');
    playBtn.querySelector('i').classList.add('fa-pause');
}
// pause video
function pauseVideo() {
    videoElement.pause();
    isPlaying = false;
    playBtn.querySelector('i').classList.remove('fa-pause');
    playBtn.querySelector('i').classList.add('fa-play');
}
//  next video
function nextVideo(){
    pauseVideo();
    setTimeout(()=>{
        videoIndex++;
        if(videoIndex >videos.length -1){
            videoIndex = 0;
        }
        loadVideo(videos[videoIndex]);
        playVideo();
    },300)
}

// previous video
function previousVideo(){
    pauseVideo();
    setTimeout(()=>{
        videoIndex--;
        if(videoIndex < 0){
            videoIndex = videos.length -1
        }
        loadVideo(videos[videoIndex]);
        playVideo();
    },300)
}
// update progress bar and time
function updateProgress(e){
    const {duration, currentTime} = e.srcElement;
    if(isNaN(duration)) return;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

    //  duration time
    const durationMinutes = Math.floor(duration / 60);
    const durationSeconds = Math.floor(duration % 60);
    durationTimeEl.textContent = `${durationMinutes}:${durationSeconds < 10 ? '0' : ''}${durationSeconds}`;
    // current time
    const currentMinutes = Math.floor(currentTime / 60);
    const currentSeconds = Math.floor(currentTime % 60);
    currentTimeEl.textContent = `${currentMinutes}:${currentSeconds < 10 ? '0' : ''}${currentSeconds}`;

    // update speed
    // videoElement.playbackRate = speed;

}
function setProgress(e){
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = videoElement.duration;
    if(isNaN(duration)) return;
    videoElement.currentTime = (clickX / width) * duration;
}

//  all event listeners

playBtn.addEventListener('click', () => {
    isPlaying ? pauseVideo() : playVideo();
});

nextBtn.addEventListener('click', () => {
    nextVideo();
});

prevBtn.addEventListener('click', () => {
    previousVideo();
});
progressContainer.addEventListener('click', setProgress);

videoElement.addEventListener('timeupdate', updateProgress);

videoElement.addEventListener('ended', nextVideo);

playSpeed.addEventListener('change', (e) => {
    videoElement.playbackRate = e.target.value;
})

volumeSlider.addEventListener('input', (e) => {
    speed = e.target.value;
    videoElement.volume = speed;
})