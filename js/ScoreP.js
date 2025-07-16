
const reBtn=document.getElementById("resetBtn")


//make the button send to
reBtn.addEventListener("click", ()=>
{
    window.location.href="index.html";
    difficulty=1;
})

const totalScore = localStorage.getItem("totalScore") || 0;
document.getElementById("totalScore").textContent = `Total Score: ${totalScore}`;

const cat1 = localStorage.getItem("cat1Score") || 0;
const cat2 = localStorage.getItem("cat2Score") || 0;
const cat3 = localStorage.getItem("cat3Score") || 0;
const cat4 = localStorage.getItem("cat4Score") || 0;

document.querySelectorAll("p1")[0].textContent = `🏅 Sports score:          ${cat1}`;
document.querySelectorAll("p1")[1].textContent = `🗺️ Capital Cities score:  ${cat2}`;
document.querySelectorAll("p1")[2].textContent = `💻 Technology score:      ${cat3}`;
document.querySelectorAll("p1")[3].textContent = `🧠 Logic & Riddles: score ${cat4}`; 


if (totalScore == 20) {
  document.getElementById("ScoreMessage").textContent ="🏆 Perfect 20! You're a champion!";
} else if (totalScore >= 16 ) {
  document.getElementById("ScoreMessage").textContent = "🎉 Excellent!";
} else if (totalScore >= 12) {
  document.getElementById("ScoreMessage").textContent ="👍 Good job!";
} else if (totalScore >= 8) {
  document.getElementById("ScoreMessage").textContent = "💪 Keep practicing!";
} else if (totalScore >= 4) {
  document.getElementById("ScoreMessage").textContent ="🙂 Not bad!";
} else {
  document.getElementById("ScoreMessage").textContent = "😅 Oops! You scored 0. Try again!";
}

