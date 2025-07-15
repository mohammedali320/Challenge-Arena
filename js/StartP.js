
const sBtn=document.getElementById("StartBtn")


//make the button send to
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
})

const Medium=document.getElementById("Medium")
//make the button set difficulty level if 1 easy ,if 2 medium and 3 for hard
Medium.addEventListener("click", ()=>
{
    difficulty=2;
    localStorage.setItem("difficulty", difficulty);
})

const Hard=document.getElementById("Hard")
//make the button set difficulty level if 1 easy ,if 2 medium and 3 for hard
Hard.addEventListener("click", ()=>
{
    difficulty=3;
    localStorage.setItem("difficulty", difficulty);
})



