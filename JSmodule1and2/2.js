let nimi = prompt("Syötä nimesi:");

if (nimi != null) {
  document.getElementById("tervehdys").innerHTML =
  "Hello, " + nimi + "!";
}