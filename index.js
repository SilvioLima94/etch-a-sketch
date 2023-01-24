function createSquares() {
  for (let i = 0; i < 20; i++) {
    let square = document.createElement("div");
    square.className = "board";
    square.style.width = "50px";
    square.style.height = "50px";
    square.style.backgroundColor = "aqua";
    document.querySelector(".container").appendChild(square);
  }
}

console.log(createSquares());
