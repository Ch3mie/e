function parking(spaces, yes, today) {
  let count = 0;
  for (let i = 0; i < spaces; i++) {
    if (yes[i] === "C" && today[i] === "C") {
      count++;
    }
  }
  return count;
}

console.log(parking(5, "CC..C", ".CCCC"));

//add a yesterday and today

//Make the total amount of parking spaces 100

//allow cars to park in any space

//make some cars disappear from certain spaces but also add new cars to empty spaces

//calculate how many oringinal cars are left
