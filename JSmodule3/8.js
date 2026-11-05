const strings = ["John", "Matthew", "Luke", "Mark"];
const result = document.getElementById("result");

function concat(strings) {
    let concatStrings = "";
    for (const string of strings) {
        concatStrings += string;
    }
    return concatStrings;
}

result.textContent = concat(strings);
