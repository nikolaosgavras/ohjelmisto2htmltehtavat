const form = document.getElementById("searchForm");
    form.addEventListener("submit", (e) => {1
        e.preventDefault();
        const formData = new FormData(form);
        const userSearch = formData.get('q').trim();
        if (!userSearch) {
            console.log("Please enter a show name.");
            return;
        }
        searchForShow(userSearch);
    });
    
    async function searchForShow(query) {
        try {
            const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`);
            if (!response.ok) {
                throw new Error("Not found. Try another show name.");
            }
            const json = await response.json(); // convert the loaded text JSON to a JavaScript object / array
            console.log("result", json); // print the result to the console
            
        } catch (error) {
            console.log(error.message);
        };
};