function createSquares(squares) {
  for (let i = 0; i < squares; i++) {
    let square = document.createElement("div");
    //square.className = "square";

    square.style.cssText = "height: 30px; width: 30px; border: 1px solid aqua";

    document.querySelector(".container").appendChild(square);

    square.addEventListener(
      "mouseover",
      (e) => (e.target.style.backgroundColor = "black")
    );
    square.addEventListener(
      "mouseleave",
      (e) => {
        setTimeout(() => {
          e.target.style.backgroundColor = "";
        }, 2000);
      },
      false
    );
  }
}

console.log(createSquares(256));
