let btns = document.querySelectorAll(".beatBtns")
let sound = document.querySelectorAll(".audioFile")

window.addEventListener("keydown", (e)=> {
    let codeKey = e.keyCode
    console.log(codeKey)
    for (let i = 0; i < btns.length; i++) {
        if(btns[i].name == codeKey) {
            // console.log(btns[i], codeKey)
            for (let i = 0; i < sound.length; i++) {
                if(codeKey == btns[i].name) {
                    sound[i].currentTime = 0
                    sound[i].play()

                    setTimeout(() => {
                        btns[i].style.background = "grey"
                        setTimeout(() => {
                            btns[i].style.background = "lightgrey"
                        }, 150);
                    }, 50);
                } else {
                }
            }
        } else {
        }
    }
})