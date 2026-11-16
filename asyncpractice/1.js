export async function fetchData() {
  try {
    const response = await fetch(
      "https://api.tvmaze.com/search/shows?q=emmerdale",
    );
    if (!response.ok) {
      // Check if the response is successful (status code 200-299)
      throw new Error("HTTP error! status: " + response.status);
    }
    const data = await response.json();
    return data; // This will return a promise that resolves to the data
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

console.log("This message is printed before the data is fetched");
console.log("Fetched data:", await fetchData());