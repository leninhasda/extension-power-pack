let videoPlayer = document.getElementsByTagName("video")[0]
let rateOfChange = 0.25;
let defaultSpeed = 1.0;

window.addEventListener("keyup", (e) => {
    console.log(e.key, e.code);
    if(e.ctrlKey && e.key === "'") { // speedup = CTRL + '
        videoPlayer.playbackRate += rateOfChange;
        console.log("increased", videoPlayer.playbackRate);
    }
    else if(e.ctrlKey && e.key === ";") { // slowdown == CTRL + ;
        videoPlayer.playbackRate -= rateOfChange;
        console.log("decreased", videoPlayer.playbackRate);
    }
    else if(e.ctrlKey && e.key === ".") { // reset = CTRL + .
        videoPlayer.playbackRate = defaultSpeed;
        console.log("reset", videoPlayer.playbackRate);
    }
})