```javascript
for (let i = 0; i <= random; i++) {
  if (i % 3 == 0) {
    opponentChoice = "rock";
  } else if (i % 2 == 0) {
    opponentChoice = "paper";
  } else {
    opponentChoice = "scissors";
  }
}

if (opponentChoice == "rock") {
  if (input == 1) {
    outcome = "win";
  } else if (input == 2) {
    outcome = "lose";
  } else {
    outcome = "draw";
  }
} else if (opponentChoice == "paper") {
  if (input == 2) {
    outcome = "win";
  } else if (input == 0) {
    outcome = "lose";
  } else {
    outcome = "draw";
  }
} else {
  if (input == 0) {
    outcome = "win";
  } else if (input == 1) {
    outcome = "lose";
  } else {
    outcome = "draw";
  }
}


for (let i = 0; i < history.length; i++) {
    if (history[i] == "win") {
      win++;
    } else if (history[i] == "lose") {
      lose++;
    } else {
      draw++;
    }
```

This is an algorithim
