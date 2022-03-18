fetch("	https://api.adviceslip.com/advice")
  .then((response) => response.json())
  .then((data) => {
    var quote = data["slip"]["advice"];
    document.getElementById("quote").innerHTML = `" ${quote} "`;
    var id = data["slip"]["id"];
    document.getElementById("quotenum").innerHTML = `Advice #${id}`;
  });
document.getElementById("btn").addEventListener("click", () => {
  fetch("	https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      var quote = data["slip"]["advice"];
      document.getElementById("quote").innerHTML = `" ${quote} "`;
      var id = data["slip"]["id"];
      document.getElementById("quotenum").innerHTML = `Advice #${id}`;
    });
});
