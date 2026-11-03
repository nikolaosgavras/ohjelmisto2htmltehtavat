const result = document.getElementById("result");

let confirmUser = confirm("Should I calculate the square root?");
if (confirmUser == true) {
    let userInputNumber = prompt("Input a number");
    if (userInputNumber < 0) {
        result.textContent = "The square root of a negative number is not defined.";
    } else {
        let squareRootOutput = Math.sqrt(userInputNumber)
        result.textContent =
        "The square root of " + userInputNumber + " is: " + squareRootOutput;
    } 
} else if (confirmUser == false) {
    result.textContent = "The square root is not calculated.";
}