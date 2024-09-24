const quote = document.getElementById("quote");
const author = document.getElementById("author");
const apiUrl = "https://stoic-quotes.com/api/quote";

async function getQuote(url) {
  const response = await fetch(url);
  var data = await response.json();
  console.log(data);
  quote.innerHTML = data.text;
  author.innerHTML = "- " + data.author;
}

getQuote(apiUrl);
