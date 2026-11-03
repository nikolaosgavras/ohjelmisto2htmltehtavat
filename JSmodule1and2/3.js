let luku1 = Number.parseInt(prompt("Syötä ensimmäinen kokonaisluku:"));
let luku2 = Number.parseInt(prompt("Syötä toinen kokonaisluku:"));
let luku3 = Number.parseInt(prompt("Syötä kolmas kokonaisluku:"));

let sum = luku1 + luku2 + luku3;
let tulo = luku1 * luku2 * luku3;
let keskiarvo = sum / 3;

document.getElementById("summa").innerHTML = "Lukujen summa on " + sum;
document.getElementById("tulo").innerHTML = "Lukujen tulo on " + tulo;
document.getElementById("keskiarvo").innerHTML = "Lukujen keskiarvo on " + keskiarvo;