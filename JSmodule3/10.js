const numberOfCandidates = Number.parseInt(prompt("How many candidates?"));
const candidatesList = [];

for (let i = 0; i < numberOfCandidates; i++) {
    const candidateName = prompt(`Enter the name for candidate ${i + 1}`);
    candidatesList.push({name: candidateName, votes: 0});
}

const numberOfVoters = Number.parseInt(prompt("How many voters?"));

for (let i = 0; i < numberOfVoters; i++) {
    const vote = prompt(`Voter ${(i + 1)} Enter the name of the candidate:`);
    const candidate = candidatesList.find(c => c.name === vote);
    if (candidate) {
        candidate.votes++;
    }
}

candidatesList.sort((a, b) => b.votes - a.votes);

console.log(`The winner is ${candidatesList[0].name} with ${candidatesList[0].votes} votes.`);
console.log(`results:`);
for (i = 0; i < candidatesList.length; i++) {
    console.log(`${candidatesList[i].name}: ${candidatesList[i].votes} votes`)
}