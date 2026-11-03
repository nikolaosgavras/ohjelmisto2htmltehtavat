const userInputBox = document.getElementById("userInputNumber");
const submitButton = document.getElementById("submitNumber")

function checkForPrime(number) {

    if (number <= 1)
    return false;

    // The check for the number 2 and 3
    if (number <= 3)
    return true;

    if (number%2 == 0 || number%3 == 0)
    return false;

    for (var i=5; i*i<=number; i=i+6)
    {
        if (number%i == 0 || number%(i+2) == 0)
         return false;
    }

    return true;

}

submitButton.addEventListener("click", () => {
    let userInput = Number.parseInt(userInputBox.value, 10);
    alert(
        checkForPrime(userInput) 
        ? "The number " + userInput + " is prime!" 
        : "The number " + userInput + " is not prime."
    );
});

