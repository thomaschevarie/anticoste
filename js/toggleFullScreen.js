/* Source: https://www.thewebflash.com/toggling-fullscreen-mode-using-the-html5-fullscreen-api/ */
function toggleFullscreen(elem) {
    elem = elem || document.documentElement;

    if (!document.fullscreenElement) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
            document.querySelector('.fullscreen__text').innerHTML = "NormalScreen";
            document.querySelector('.fullscreen__button .icon').classList.toggle("icon--fullscreen", false);
            document.querySelector('.fullscreen__button .icon').classList.toggle("icon--normalscreen", true);
            localStorage.setItem("fullScreenMode", "on");
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
            document.querySelector('.fullscreen__text').innerHTML = "FullScreen";
            document.querySelector('.fullscreen__button .icon').classList.toggle("icon--fullscreen", true);
            document.querySelector('.fullscreen__button .icon').classList.toggle("icon--normalscreen", false);
            localStorage.setItem("fullScreenMode", "off");
        }
    }
}

document.querySelector('.fullscreen__button').addEventListener('click', function () {
    toggleFullscreen();
});
window.addEventListener("load", function(){
    let fullScreenMode = localStorage.getItem("fullScreenMode");
    // alert(fullScreenMode);
    if(fullScreenMode == "on"){
        /*
        document.querySelector('body').requestFullscreen();
        document.querySelector('.fullscreen__text').innerHTML = "NormalScreen";
        document.querySelector('.fullscreen__button .icon').classList.toggle("icon--fullscreen", false);
        document.querySelector('.fullscreen__button .icon').classList.toggle("icon--normalscreen", true);
        */
    }
})