let inputYear = Number.parseInt(prompt("Enter a year:"))
const result = document.getElementById("result");

const isLeapYear = (inputYear % 4 === 0 && inputYear % 100 !== 0 || inputYear % 100 === 0 && inputYear % 400 === 0)

if (isLeapYear) {
    result.innerHTML =
    "The year " + inputYear + " is a leap year!"
} else if (!isLeapYear) {
    result.innerHTML =
    "The year " + inputYear + " is NOT a leap year."
}