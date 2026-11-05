let numbersList = [];

while (true) {
    const number = Number.parseInt(prompt("Enter a number"));
    if (numbersList.includes(number)) {
        alert("Number has been already entered. Stopping the operation and printing to the console in ASC order.");
        break;
    } else if (!Number.isNaN(number)) {
        numbersList.push(number);
    }
};

numbersList.sort((a, b) => a - b);

for (const number of numbersList) {
    console.log(number);
};