function createSquares() {
  function btnHandler() {
    document.querySelector(".sketch-container").replaceChildren();
    let userPrompt = parseInt(
      prompt("Enter number of squares to be generated")
    );
    if (userPrompt > 100) return;
    let numberOfSquares = userPrompt * userPrompt;
    return numberOfSquares;
  }

  function clear() {
    return removeAllElements.replaceChildren();
  }

  let btn = document.querySelector(".btn-handler");
  btn.addEventListener("click", btnHandler);

  // let removeAllElements = document.querySelector("container");
  // removeAllElements.addEventListener("click", clear);

  let result = btnHandler();
  console.log(result);

  for (let i = 0; i < result; i++) {
    let square = document.createElement("div");

    square.style.cssText = "height: 30px; width: 30px; border: 1px solid aqua";

    document.querySelector(".sketch-container").appendChild(square);

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

console.log(createSquares());
