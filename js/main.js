
let play = document.getElementById("buttonPlay")

let containerMain = document.getElementById("container_main")

let level = document.getElementById("level")

cellaFortunata = getRndInteger(1, 49)
console.log(cellaFortunata);



play.addEventListener("click", function () {
    containerMain.innerHTML = ""

    if (level.value == "easy") {
        console.log("selezionato easy");
        generaGriglia(100, "square_easy", "cellaFortunata");
    } else if (level.value == "med") {
        console.log("selezionato med");
        generaGriglia(81, "square_medium", "cellaFortunata")
    } else {
        generaGriglia(49, "square_hard", "cellaFortunata")
    }

})



function generaGriglia(numeroCelle, className, cellaFortunata) {
    for (let i = 1; i <= numeroCelle; i++) {
        const div = document.createElement("div");
        div.classList.add(className);
        containerMain.appendChild(div);

        div.addEventListener("click", function () {
            console.log(i);
            console.log(cellaFortunata);
            if (div.innerHTML == "") {
                div.innerHTML = i;
            } else {
                div.innerHTML = "";
            }

            if (i == cellaFortunata) {
                div.classList.add("red")
            }
            div.classList.toggle("square_bg");
        });
    }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }