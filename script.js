const playBtn = document.querySelector(".fa-play");
const pauseBtn = document.querySelector(".pause");
const resetBtn = document.querySelector(".fa-arrow-rotate-left");
const imgWrapperEl = document.querySelector(".imageWrapper");

playBtn.addEventListener("click", move)
resetBtn.addEventListener("click", reset);


function move() {

    pauseBtn.classList.remove("fa-play");
    pauseBtn.classList.add("fa-pause");

    console.log("moving");
    const interval = setInterval(moveImg, 20);

    function moveImg() {
        let left = imgWrapperEl.getBoundingClientRect().left;
        let top = imgWrapperEl.getBoundingClientRect().top;


        if (left < 532 || left > 532) {
            moveToRight();
        }

        if (top < 434.390625 || top > 434.390625) {
            moveToBottom();
            imgWrapperEl.style.opacity = "1";
        }

        function moveToRight() {
            let leftR = imgWrapperEl.getBoundingClientRect().left;
            // let top = imgWrapperEl.getBoundingClientRect().top;
            imgWrapperEl.style.left = `${leftR + 5}px`;
            if (leftR <= document.body.clientWidth - 350) {
                imgWrapperEl.style.left = `${leftR + 5}px`;
            } else {
                imgWrapperEl.style.left = "40%"
                imgWrapperEl.style.top = "0%"
                imgWrapperEl.style.opacity = "0";
            }
        }

        function moveToBottom() {
            // let left = imgWrapperEl.getBoundingClientRect().left;
            let topB = imgWrapperEl.getBoundingClientRect().top;
            imgWrapperEl.style.left = "40%";
            if (topB <= window.innerHeight - 200) {
                imgWrapperEl.style.top = `${topB + 5}px`;
            }
        }
    }


    // let isMovedToRight = false;
    // function moveImg() {
    //     let left = imgWrapperEl.getBoundingClientRect().left;
    //     let top = imgWrapperEl.getBoundingClientRect().top;

    //     if (isMovedToRight) {
    //         if (top <= window.innerHeight-200) {
    //             imgWrapperEl.style.left = "40%";
    //             imgWrapperEl.style.top = `${top + 5}px`;
    //             console.log(top, window.innerHeight);
    //         }
    //     }

    //     if (!isMovedToRight) {
    //         imgWrapperEl.style.left = `${left + 5}px`;

    //         if (left >= document.body.clientWidth - 350) {
    //             isMovedToRight = true;
    //             imgWrapperEl.style.top = `0%`;
    //         }
    //     }

    // }

    pauseBtn.addEventListener("click", stop)
    let isPaused = false;
    function stop() {

        playBtn.removeEventListener("click", move);

        if (isPaused) {
            pauseBtn.classList.remove("fa-play");
            pauseBtn.classList.add("fa-pause");
            isPaused = false;
            move();
        } else {
            console.log("paused");
            clearInterval(interval);
            pauseBtn.classList.remove("fa-pause");
            pauseBtn.classList.add("fa-play");
            isPaused = true;
        }
    }
}


function reset() {
    imgWrapperEl.style.left = "0px"
    imgWrapperEl.style.top = "40%";
}