const calculate = document.getElementById("start");
const result = document.getElementById("result");

calculate.addEventListener("click", () => {
    let calculation = document.getElementById("calculation").value;
    if (calculation.includes("+")) {
        result.textContent = add(calculation);
    } else if (calculation.includes("-")) {
        result.textContent = sub(calculation);
    } else if (calculation.includes("*")) {
        result.textContent = multi(calculation);
    } else if (calculation.includes("/") || calculation.includes(":")) {
        result.textContent = div(calculation);
    }
});

function add(calculation) {
    const [left, right] = calculation.split("+");
    return Number(left) + Number(right);
}

function sub(calculation) {
    const [left, right] = calculation.split("-");
    return Number(left) - Number(right);
}

function multi(calculation) {
    const [left, right] = calculation.split("*");
    return Number(left) * Number(right);
}

function div(calculation) {
    const [left, right] = calculation.split(/[/:]/);
    return Number(left) / Number(right);
}

// LASKUT MONELLA ERI KERTOIMELLA TMS EI TOIMI ESIM. 7-2*5. TEHT"VÄNANTO EI VAATINUT SITÄ JOTEN EN TEHNYT. 
// "Example inputs: 3+5, 2-78, 3/6, etc…" => ei ole kolmea eri numeroa. https://metropolia-sw.github.io/webdev/assignments.html#js-module-4-dom-and-events