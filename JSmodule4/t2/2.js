const ul = document.getElementById("target");


for (let i = 0; i < 3; i++) {
    let text;
	const li = document.createElement("li");
    if (i === 0) {
        text = "First item";
        li.textContent = text;
    } else if (i === 1) {
        text = "Second item";
        li.textContent = text;
        li.classList.add("my-item");
    } else {
        text = "Third item";
        li.textContent = text;
    }

	
	ul.appendChild(li);
};