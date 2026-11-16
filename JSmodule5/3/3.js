const form = document.getElementById("searchForm");
const result = document.getElementById("result");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const userSearch = formData.get('q').trim();
    if (userSearch.length === 0) {
        result.textContent = "Please enter a show name.";
        return;
    }
    searchForShow(userSearch);
});

async function searchForShow(query) {
    try {
        result.innerHTML = "";
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`);
        if (!response.ok) {
            throw new Error("Not found. Try another show name.");
        }
        const shows = await response.json(); // convert the loaded text JSON to a JavaScript object / array
        if (shows.length === 0) {
            result.textContent = "No shows found.";
            return;
        }
        for (const show of shows) {
            const article = document.createElement("article");
            const h2 = document.createElement("h2");
            const a = document.createElement("a");
            const img = document.createElement("img");
            const summary = document.createElement("div");
            h2.textContent = show.show.name;
            a.href = show.show.url;
            a.textContent = 'URL';
            a.target = "_blank";
            img.src = show.show.image?.medium;
            img.alt = show.show.name;
            summary.innerHTML = show.show.summary;
            article.append(h2, a, img, summary);
            result.append(article);
        };
        
        
    } catch (error) {
        console.log(error.message);
    }
};
