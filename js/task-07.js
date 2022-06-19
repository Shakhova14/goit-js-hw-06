const textEl = document.querySelector("#text");

const inputEl = document.querySelector("#font-size-control");

inputEl.addEventListener("input", (event) => {
  const size = inputEl.value;
  console.log(size);

  textEl.style.fontSize = size + "px";
})