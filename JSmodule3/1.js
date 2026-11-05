const luvutLista = document.getElementById("luvut");

let luku = 0;
let lukulista = [];
for (let i = 0; i < 5; i++) {
    luku = parseInt(prompt("Syötä " + (i + 1) + ". luku:"));
    lukulista.push(luku);
}

for (let i = lukulista.length - 1; i > -1; i--) {
    const li = document.createElement('li');
    li.textContent = lukulista[i];
    luvutLista.appendChild(li);
}

