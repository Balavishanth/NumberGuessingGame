let secretNumber = Math.floor(Math.random() * 100) + 1;
let lives = 10;

function gamelogic() {
  const userInput = document.getElementById("number").value;
  const inputBox = document.getElementById("number");
  const messageArea = document.querySelector(".mainnote");

  if (!userInput || userInput < 1 || userInput > 100) {
    messageArea.textContent = "Please enter a number between 1 and 100.";
    return false;
  }

  const guess = Number(userInput);

  if (guess === secretNumber) {
    window.location.href = "win.html";
    return false;
  }

  lives--;

  if (lives <= 0) {
    window.location.href = "lose.html";
    return false;
  }


  if (guess < secretNumber) {
    messageArea.textContent = `Too low! Lives left: ${lives}`;
  } else {
    messageArea.textContent = `Too high! Lives left: ${lives}`;
  }

  inputBox.value = "";
  return false;
}
