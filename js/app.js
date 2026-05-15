
// Variables for cube movement
const cube = document.querySelector(".cube");
let x = 0;
let y = 0;
const step = 90;

function keyHandler(e) {
    const keyPress = e.key;

    // Guard Clause to check if keypress is valid
    if(!keyPress.includes("Arrow")) { return }

    switch (keyPress) {

        case "ArrowUp":
        x = x + step;
        break;

        case "ArrowDown":
        x = x - step;
        break;

        case "ArrowRight":
        y = y - step;
        break;

        case "ArrowLeft":
        y = y + step;
        break;

        default:
            console.log("Not a valid rotation key.");
    }

        cube.style.setProperty('--x', `${x}deg`);
        cube.style.setProperty('--y', `${y}deg`);
        console.log(keyPress);

}

window.addEventListener("keydown", keyHandler);