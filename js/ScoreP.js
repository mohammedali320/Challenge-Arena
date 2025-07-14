

const totalScore = localStorage.getItem("totalScore") || 0;
document.getElementById("totalScore").textContent = `Total Score: ${totalScore}`;

const cat1 = localStorage.getItem("cat1Score") || 0;
const cat2 = localStorage.getItem("cat2Score") || 0;
const cat3 = localStorage.getItem("cat3Score") || 0;
const cat4 = localStorage.getItem("cat4Score") || 0;


const reBtn=document.getElementById("resetBtn")


//make the button send to
reBtn.addEventListener("click", ()=>
{
    window.location.href="index.html";
    cat1=0;
    cat2=0;
    cat3=0;
    cat4=0;
})

document.querySelectorAll("p1")[0].textContent = `🏅 Sports score:          ${cat1}`;
document.querySelectorAll("p1")[1].textContent = `🗺️ Capital Cities score:  ${cat2}`;
document.querySelectorAll("p1")[2].textContent = `💻 Technology score:      ${cat3}`;
document.querySelectorAll("p1")[3].textContent = `🧠 Logic & Riddles: score ${cat4}`; 

