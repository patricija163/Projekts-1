
const sastavdalas = [
  "cepumi", "sviests", "putukrējums", "espresso", "šokolāde"
];


for (let i = 0; i < sastavdalas.length; i++) {
  console.log("Sastāvdaļa: " + sastavdalas[i]);
}


function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (name === "" || email === "") {
    alert("Lūdzu, aizpildi visus laukus!");
    return false;
  }

  if (!email.includes("@")) {
    alert("Lūdzu, ievadi derīgu e-pastu!");
    return false;
  }

  alert("Paldies par pieteikšanos!");
  return true;
}
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const rating = document.getElementById("rating").value;
  const comment = document.getElementById("comment").value.trim();

  const forbiddenWords = ["slikts", "drausmīgs", "nejēdzīgs"];

  if (name === "" || comment === "") {
    alert("Lūdzu, aizpildi visus laukus!");
    return false;
  }

  for (let i = 0; i < forbiddenWords.length; i++) {
    if (comment.includes(forbiddenWords[i])) {
      alert("Komentārā iekļauts neatļauts vārds: " + forbiddenWords[i]);
      return false;
    }
  }

  if (rating < 1 || rating > 5) {
    alert("Lūdzu, ievadi vērtējumu no 1 līdz 5.");
    return false;
  }

  alert("Paldies par atsauksmi, " + name + "!");
  return true;
}