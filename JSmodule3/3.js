const ul = document.getElementById("dogs");
let dogsList = [];

for (let i = 0; i < 6; i++) {
    let dog = prompt("Enter the " + (i+1) + ". dog name");
    dogsList.push(dog);
};

dogsList.sort();
dogsList.reverse();

for (let i = 0; i < dogsList.length; i++) {
    const li = document.createElement("li");
    li.textContent = dogsList[i];
    ul.appendChild(li);
};