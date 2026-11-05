const resultsList = document.getElementById("resultslist");
const numberOfSides = Number.parseInt(prompt("Enter the amount of sides for the die:"))

function diceRoll(numberOfSides) {
    let result = Math.floor(Math.random() * numberOfSides) + 1;
    return result;
}

function createListItem() {
    const li = document.createElement("li");
    li.textContent = dieNumber;
    resultsList.appendChild(li);
}

while (true) {
    dieNumber = diceRoll(numberOfSides);
    if (dieNumber === numberOfSides) {
        createListItem();
        break;
    } else if (dieNumber != numberOfSides) {
        createListItem();
    }
}