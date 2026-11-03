const result = document.getElementById("result");

function diceRoll(times) {
    let sumOfRolls = 0;
    for (let i = 0; i < times; i++) {
        const diceRoll = Math.floor(Math.random() * 6) + 1;
        sumOfRolls += diceRoll;
    }
    return sumOfRolls;
}
document.getElementById("submitButton").addEventListener("click", () => {
    let userInputDiceRolls = Number.parseInt(document.getElementById("dicerollamount").value, 10);
    result.textContent = userInputDiceRolls > 0 ? diceRoll(userInputDiceRolls) : 0;
});