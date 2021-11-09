const hells = document.querySelector(".hells");
const hellsContainer = document.querySelector(".hells-container");
const scoreBox = document.querySelector(".scorebox");
const resultBox = document.querySelector(".result");
const resultInfo = document.querySelector(".result-info");
const restartBtn = document.querySelector(".restart");

let hellsAll
let timer;
let shapeTimer;
let score = 0;
let clone;
let numberOfHells = 0;


window.onload = function() {
	alert("Score 30 Points By Click On The Hells, You Will Lost The Game If Hells Are Able TO increase To 30")
	timer = setInterval(hellTime, 550)
}

function hellTime() {
	var randomPosY = Math.abs(Math.floor(Math.random()*screen.width - 100));
	var randomPosX = Math.floor(Math.random()*490);
	if (randomPosX < 75) {
		randomPosX = randomPosX + 80	
	}
	var randomImage = Math.floor(Math.random()*9);
	clone = hells.cloneNode(true);
	hellsContainer.appendChild(clone);
	clone.style.top = `${randomPosX}px`;
	clone.style.left = `${randomPosY}px`;
	hellsAll = document.querySelectorAll(".hells");
	clone.children[0].setAttribute("src", `alien${randomImage}.png`)

	console.log(randomImage)


	hellsAll.forEach(clickOnHell);
	function clickOnHell(hell) {
		hell.onclick = function() {
			console.log("jjj");
			hellsContainer.removeChild(this);
			score++;
			scoreBox.innerHTML = score;
		}
	}

	numberOfHells++;

	if (numberOfHells == 30) {
		resultBox.style.transform = "scale(1)";
		resultInfo.innerHTML = "I do need to get a life, But Hells Taked it (Hence, You Lost)";
		clearInterval(timer);
	} else if (score == 30) {
		resultBox.style.transform = "scale(1)";
		resultInfo.innerHTML = "What doesn't kill me, Well Nothing! (Hence, You Won Buddy";
		clearInterval(timer);
	}
	
}

restartBtn.onclick = function(){
	location.reload();
}




