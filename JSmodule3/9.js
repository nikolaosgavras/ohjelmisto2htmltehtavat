const numbersList = [2, 7, 4, 1, 5, 18, 39];
let evenNumbersList = [];
function even(numbersList) {
    
    for (const number of numbersList) {
        if (number % 2 === 0) {
            evenNumbersList.push(number);
        }
    };
    return evenNumbersList;
}

even(numbersList);

console.log(`${numbersList} ${evenNumbersList}`);