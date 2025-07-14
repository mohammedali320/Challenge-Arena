
const reBtn=document.getElementById("resetBtn")


//make the button send to
reBtn.addEventListener("click", ()=>
{
    window.location.href="index.html";
})

const totalScore = localStorage.getItem("totalScore") || 0;
document.getElementById("totalScore").textContent = `Total Score: ${totalScore}`;
