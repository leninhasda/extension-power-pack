let videoPlayer = document.getElementsByTagName("video")[0]

document.addEventListener("keyup", (e) => {
    if(e.ctrlKey && e.key === "'") {
        videoPlayer.playbackRate += .5
        console.log("increased", videoPlayer.playbackRate);
    }
    else if(e.ctrlKey && e.key === ";") {
        videoPlayer.playbackRate -= .5
        console.log("decreased", videoPlayer.playbackRate);
    }
    else if(e.ctrlKey && e.key === ".") {
        videoPlayer.playbackRate = 1
        console.log("reset", videoPlayer.playbackRate);
    }
});