const btn = document.querySelector(".btn");
const test = document.querySelector(".added-content");
btn.addEventListener("click", function (e) {
  let added = document.createElement("button");
  added.classList.add("btn");
  test.appendChild(added);
});
test.addEventListener("click", function (e) {
  if (e.target.matches("button")) {
    console.log(e.target.remove());
  }
});
