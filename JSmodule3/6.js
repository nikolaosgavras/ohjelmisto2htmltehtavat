const resultsList = document.getElementById("resultslist");

function diceRoll() {
    let result = Math.floor(Math.random() * 6) + 1;
    return result;
}

function createListItem() {
    const li = document.createElement("li");
    li.textContent = dieNumber;
    resultsList.appendChild(li);
}

while (true) {
    dieNumber = diceRoll();
    if (dieNumber === 6) {
        createListItem();
        break;
    } else if (dieNumber != 6) {
        createListItem();
    }
}