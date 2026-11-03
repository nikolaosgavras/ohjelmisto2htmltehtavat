const result = document.getElementById("result");

function diceRoll(times) {
    let sumOfRolls = 0;
    for (let i = 0; i < times; i++) {
        const diceRoll = Math.floor(Math.random() * 6) + 1;
        sumOfRolls += diceRoll;
    }
    return sumOfRolls;
}
let rolledDice = 0;
function simulate(numberOfDice, targetSum) {
    let hits = 0;
    const repetitions = 10000;
    for (let i = 0; i < repetitions; i++) {
        rolledDice = diceRoll(numberOfDice);
        // TODO: if the sum equals targetSum, increase hits
        if (rolledDice === targetSum) {
            hits++
        }
    }
    return probability = hits / repetitions * 100
}
document.getElementById("submitButton").addEventListener("click", () => {
    let userInputDiceRolls = Number.parseInt(document.getElementById("dicerollamount").value, 10);
    let wantedSum = Number.parseInt(document.getElementById("wantedsum").value, 10);
    let probability = simulate(userInputDiceRolls, wantedSum);
    result.textContent = `Probability to get the sum ${wantedSum} with ${userInputDiceRolls} is ${probability.toFixed(2)}%`;
});

