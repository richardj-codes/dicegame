let btn = document.querySelector("button");
let leftDice = document.querySelector(".ldice");
let rightDice = document.querySelector(".rdice");
let result = document.querySelector("h3");

btn.addEventListener("click", () => {
	let randL = Math.floor(Math.random() * 6) + 1;
	let randR = Math.floor(Math.random() * 6) + 1;
	let person1 = document.querySelector(".p1");
	let person2 = document.querySelector(".p2");
	if (randL === 1) {
		leftDice.src = "img/dice1.png";
	} else if (randL === 2) {
		leftDice.src = "img/dice2.png";
	} else if (randL === 3) {
		leftDice.src = "img/dice3.png";
	} else if (randL === 4) {
		leftDice.src = "img/dice4.png";
	} else if (randL === 5) {
		leftDice.src = "img/dice5.png";
	} else {
		leftDice.src = "img/dice6.png";
	}
	if (randR === 1) {
		rightDice.src = "img/dice1.png";
	} else if (randR === 2) {
		rightDice.src = "img/dice2.png";
	} else if (randR === 3) {
		rightDice.src = "img/dice3.png";
	} else if (randR === 4) {
		rightDice.src = "img/dice4.png";
	} else if (randR === 5) {
		rightDice.src = "img/dice5.png";
	} else {
		rightDice.src = "img/dice6.png";
	}
	if (randL > randR) {
		result.innerHTML = "Player 1 Wins";
		person1.classList.add("flash");
		person2.classList.remove("flash");
	} else if (randL < randR) {
		result.innerHTML = "Player 2 Wins";
		person2.classList.add("flash");
		person1.classList.remove("flash");
	} else {
		result.innerHTML = "It's A Tie";
		person2.classList.remove("flash");
		person1.classList.remove("flash");
	}
});
