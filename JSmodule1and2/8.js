const startInputYear = Number.parseInt(prompt("Enter a starting year:"), 10);
const endInputYear = Number.parseInt(prompt("Enter an end year:"), 10);

function isLeapYear(year) {
    return year % 4 === 0 && year % 100 !== 0 || year % 100 === 0 && year % 400 === 0;
}

let leapYearCounter = 0;
for (let year = startInputYear; year <= endInputYear; year++) {
    if (isLeapYear(year)) {
        const li = document.createElement('li');
        li.textContent = year;
        document.getElementById("leapYearList").appendChild(li);
        leapYearCounter++
    }
}

if (leapYearCounter === 0) {
    alert("No leap years in this range");
}