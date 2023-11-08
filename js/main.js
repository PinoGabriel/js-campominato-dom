
let play = document.getElementById("buttonPlay")

let containerMain = document.getElementById("container_main")

let level = document.getElementById("level");

const cellaFortunata_easy = getRndInteger(1, 100)
const cellaFortunata_med = getRndInteger(1, 81)
const cellaFortunata_hard = getRndInteger(1, 49)
console.log("cella fortunata hard:", cellaFortunata_hard);
console.log("cella fortunata med:",cellaFortunata_med);
console.log("cella fortunata easy:",cellaFortunata_easy);

const gameOver = document.getElementById("gameOver");



play.addEventListener("click", function () {
    containerMain.innerHTML = ""

    if (level.value == "easy") {
        console.log("selezionato easy");
        generaGriglia(100, "square_easy", cellaFortunata_easy);
    } else if (level.value == "med") {
        console.log("selezionato med");
        generaGriglia(81, "square_medium", cellaFortunata_med)
    } else {
        generaGriglia(49, "square_hard", cellaFortunata_hard)
    }

})



function generaGriglia(numeroCelle, className, cellaFortunata) {
    for (let i = 1; i <= numeroCelle; i++) {
        const div = document.createElement("div");
        div.classList.add(className);
        containerMain.appendChild(div);
        div.innerHTML = i;

        div.addEventListener("click", function () {
            console.log(i);
            div.classList.toggle("square_bg");

            if (i == cellaFortunata) {
                div.classList.remove("square_bg")
                div.classList.add("bg_red")
                gameOver.classList.remove("d-none")
                gameOver.classList.add("d-visible")                
            }
            
        });
    }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }