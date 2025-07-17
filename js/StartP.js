
const sBtn=document.getElementById("StartBtn")



sBtn.addEventListener("click", ()=>
{
    window.location.href="GP.html";
})

let difficulty=1;
localStorage.setItem("difficulty", difficulty);
const Easy=document.getElementById("Easy")

//make the button set difficulty level if 1 easy ,if 2 medium and 3 for hard
Easy.addEventListener("click", ()=>
{
    difficulty=1;
    localStorage.setItem("difficulty", difficulty);
    updateSelected(Easy);
})

const Medium=document.getElementById("Medium")

Medium.addEventListener("click", ()=>
{
    difficulty=2;
    localStorage.setItem("difficulty", difficulty);
    updateSelected(Medium);
})

const Hard=document.getElementById("Hard")

Hard.addEventListener("click", ()=>
{
    difficulty=3;
    localStorage.setItem("difficulty", difficulty);
    updateSelected(Hard);
})
const allButtons = [Easy, Medium, Hard];
function updateSelected(selectedBtn) {
  allButtons.forEach(btn => btn.classList.remove("selected"));
  selectedBtn.classList.add("selected");
}


