/* Source: https://www.thewebflash.com/toggling-fullscreen-mode-using-the-html5-fullscreen-api/ */
/**
 ** HTML **
 * <button class="fullscreen__button">
      <span class="fullscreen__text screen-reader-only">⇱ FullScreen</span>
      span class="icon icon--fullscreen" aria-hidden="true"></span>
   </button>
 ** CSS **
 * .fullscreen {
            display: none;
        }
   @media(min-width: 600px){
        .fullscreen {
            display: inline-block;
            margin: 0.75rem;
            margin-left: auto;
        }
        .icon{
             display: block;
             width: 1em;
             height: 1em;
             background-size: contain;
             background-repeat: no-repeat;
        }
        .icon--fullscreen{
             background-image: url("images/fullscreen.svg");
       }
       .icon--normalscreen{
            background-image: url("images/normalscreen.svg");
       }
   }
 */
function toggleFullscreen(elem) {
    elem = elem || document.documentElement;

    if (!document.fullscreenElement) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
            document.querySelector('.fullscreen__text').innerHTML = "NormalScreen";
            document.querySelector('.fullscreen__button .icon').classList.toggle("icon--fullscreen", false);
            document.querySelector('.fullscreen__button .icon').classList.toggle("icon--normalscreen", true);
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
            document.querySelector('.fullscreen__text').innerHTML = "FullScreen";
            document.querySelector('.fullscreen__button .icon').classList.toggle("icon--fullscreen", true);
            document.querySelector('.fullscreen__button .icon').classList.toggle("icon--normalscreen", false);
        }
    }
}

document.querySelector('.fullscreen__button').addEventListener('click', function () {
    toggleFullscreen();
});