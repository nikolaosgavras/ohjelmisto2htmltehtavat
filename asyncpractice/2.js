import { fetchData } from "./1.js";

async function main() {
  const data = await fetchData(); // Wait for the promise returned by fetchData to resolve
  console.log("Data from fetchData function:", data);
}

main();