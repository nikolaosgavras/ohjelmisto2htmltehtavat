fetch("https://api.tvmaze.com/search/shows?q=emmerdale")
  .then((response) => response.json()) // Parse the response as JSON
  .then((data) => {
    console.log("Fetched data:", data); // Log the fetched data
  })
  .catch((error) => {
    console.error("Error fetching data:", error); // Handle any errors that occur during the fetch
  });