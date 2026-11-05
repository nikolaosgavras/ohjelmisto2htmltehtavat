let numbersList = [];

while (true) {
    const number = Number.parseInt(prompt("Enter a number (0 to stop and print the list to the console)"));
    if (number === 0) {
        break;
    } else if (!Number.isNaN(number)) {
        numbersList.push(number);
    }
}

numbersList.sort((a, b) => b - a);

for (const number of numbersList) {
    console.log(number);
}