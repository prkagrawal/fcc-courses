var text = document.getElementById("text");
var author = document.getElementById("author");
var nq = document.getElementById("new-quote");

window.addEventListener("load", work);
nq.addEventListener("click", work);

function work() {
  fetch("https://api.quotable.io/random")
    .then(res => res.json())
    .then(d => {
      text.innerHTML = `${d.content}`;
      author.innerHTML = `- ${d.author}`;
    });
}
