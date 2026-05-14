
// Variables for cube movement
const cube = document.querySelector(".cube");
let x = 0;
let y = 0;

function keyHandler(e) {
    const keyPress = e.key;

    // Guard Clause to check if keypress is valid
    if(!keyPress.includes("Arrow")) { return }

    switch (keyPress) {

        case "ArrowUp":
        // cube.style.setProperty('--y', `${y}px`);
        console.log(keyPress);
        break;

        default:
            console.log("Not a valid rotation key.");
    }
}

window.addEventListener("keydown", keyHandler);