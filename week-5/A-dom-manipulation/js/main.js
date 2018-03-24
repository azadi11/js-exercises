var button = document.querySelector("#bgrChangeBtn");
button.addEventListener("click", function() {
  var box = document.querySelector(".jumbotron");
  box.style.backgroundColor = "red";
  alert("hi there");
});
var button2 = document.querySelector("#addTextBtn");
button2.addEventListener("click", function() {
  var newParagraph = document.createElement("p");
  newParagraph.innerText = "look at this";
  newParagraph.id = "myPara";
  addTextBtn.appendChild(newParagraph);
});
