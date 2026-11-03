const classes = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];

let characterName = prompt("Enter your name:")

sortingHat(characterName)

function sortingHat(name) {
    let drawClass = Math.floor(Math.random() * 4);
    if (name != null) {
        document.getElementById("result").innerHTML =
        name + ", You are " + classes[drawClass] + "."
    }
}


