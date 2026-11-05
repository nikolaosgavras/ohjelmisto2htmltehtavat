const ol = document.getElementById("participants");
const participantsAmount = Number.parseInt(prompt("How many participants?"));
let participantNameList = [];

function addParticipants(amount) {
    for (let i = 0; i < amount; i++) {
        let participant = prompt("Enter " + (i + 1) + ". participant name.");
        participantNameList.push(participant);
    };
}

addParticipants(participantsAmount);

participantNameList.sort(); // aakkosjärjestys, käyttäen js:n sort funktiota.


for (let i = 0; i < participantNameList.length; i++) {
    const li = document.createElement("li");
    li.textContent = participantNameList[i];
    ol.appendChild(li);
}

