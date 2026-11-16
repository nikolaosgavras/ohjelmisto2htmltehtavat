async function searchForShow() {
    try {
        const userInputSearch = prompt("Enter the name of the show you want to see the info of:");
        if (!userInputSearch) throw new Error("Error: Please enter a show name.");
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${userInputSearch}`);
        const json = await response.json(); // convert the loaded text JSON to a JavaScript object / array
        console.log("result", json); // print the result to the console
        
    } catch (error) {
        console.log(error.message);
    }
};

searchForShow();