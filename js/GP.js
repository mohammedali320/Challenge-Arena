// 20 questions, 5 in each cat, 4 
const questions = [
  //sports
  {
    cat: "Sports",
    question: "Who has won the most ballon d'Or awards in football history?",
    choices: ["Cristiano Ronaldo", "Leo Messi", "Ronaldo Nazario", "Robaldinho"],
    answer: 1,           
  },
  {
    cat: "Sports",
    question: "who wons the 2023 Tour de France?",
    choices: ["Tadej Pogcar", "Promoz Roglic", "Wout Van Aert", "Jonas Vingegard"],
    answer: 3,
  },
   {
    cat: "Sports",
    question: "who has won the most titles in the Classis Physique at Mr. Olympia?",
    choices: ["Chris Bumstead", "Breon Ansley", "Phil Heath", "Arnold Schwarzenegger"],
    answer: 0,
  },
  {
    cat: "Sports",
    question: "How many players are on the court per team in basketball game?",
    choices: ["Four", "Seven", "Five", "six"],
    answer: 2,
  },
   {
    cat: "Sports",
    question: "which cyclist was stripped of seven Tour de France titles for dopping?",
    choices: ["Lance Armstrong", "Alberto Contador", "Chris Froome", "Mathieu van der Poel"],
    answer: 0,
  },
  //Capital Cities
   {
    cat: "Capital Cities",
    question: "What is the capital of Australia?",
    choices: ["Sydney", "Canberra", "Melbourne", "Perth"],
    answer: 1,
  },
   {
    cat: "Capital Cities",
    question: "What is the capital of Canada?",
    choices: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
    answer: 3,
  },
   {
    cat: "Capital Cities",
    question: "What is the capital of Kenya?",
    choices: ["Nairobi", "Mombasa", "Kisuma", "Nakuru"],
    answer: 0,
  },
   {
    cat: "Capital Cities",
    question: "What is the capital of Argentina?",
    choices: ["Buenos Aires", "Cordoba", "Rosario", "Mendoza"],
    answer: 0,
  },
   {
    cat: "Capital Cities",
    question: "What is the capital of Vietnam?",
    choices: ["Hue", "Ho Chi Minh City", "Da Nang", "Hanoi"],
    answer: 3,
  },
//Technology
   {
    cat: "Technology",
    question: "What does CPU stand for?",
    choices: ["Computer Personal Unit", "Central Processing Unit", "Central Performance Unility", "Control Program Unit"],
    answer: 1,
  },
   {
    cat: "Technology",
    question: "Which programming language is primarily used for web development on the client side?",
    choices: ["Phython", "JavaScript", "C++", "Java"],
    answer: 1,
  },
   {
    cat: "Technology",
    question: "What does OS stand for in computing?",
    choices: ["Operating System", "Orginal Setup", "Output Signal", "Open Software"],
    answer: 0,
  },
  {
    cat: "Technology",
    question: `Which part of the computer is considered the "brain"?`,
    choices: ["GPU", "RAM", "CPU", "Mother Board"],
    answer: 2,
  },
 {
    cat: "Technology",
    question: "Which one is open-source software?",
    choices: ["iOS", "Microsoft Office", "Windows 10", "Linux"],
    answer: 3,
  },
// Logic & Riddles
 {
    cat: "Logic & Riddles",
    question: "if two cats catch two mice in two miutes, how namy cats are needed to catch 100 mice in 100 minutes?",
    choices: ["50", "2", "200", "100"],
    answer: 1,
  },
 {
    cat: "Logic & Riddles",
    question: "What begins with T, ends with T, and has T inside it?",
    choices: ["Teapot", "Tent", "Toilet", "Tablet"],
    answer: 0,
  },
 {
    cat: "Logic & Riddles",
    question: "What can fill a room but takes no space?",
    choices: ["Sound", "Light", "Air", "Smell"],
    answer: 1,
  },
 {
    cat: "Logic & Riddles",
    question: "I have numbers but no math, i have pages but no  books, i have codes but no locks. What am I?",
    choices: ["Keyboard", "Computer", "Phone", "Calendar"],
    answer: 3,
  },
 {
    cat: "Logic & Riddles",
    question: "how many colors are there in a rainbow?",
    choices: ["10", "9", "7", "5"],
    answer: 2,
  },
]


const ResetBtn=document.getElementById("ResetBtn")


//make the button send to start page
ResetBtn.addEventListener("click", ()=>
{
    window.location.href="index.html";
})

const scoreBtn=document.getElementById("scoreBtn")


//make the button send to score page
scoreBtn.addEventListener("click", ()=>
{
    window.location.href="ScoreP.html";
})

let currentQuestionIndex = 0;
//import difficulty level
const difficulty = localStorage.getItem("difficulty") || 1;

const totalQuestions = questions.length;

const questionEl = document.getElementById('question');
const choiceBtns = Array.from(document.querySelectorAll('.chBtn'));

//score
const totalScore = document.getElementById('scoreCircle');
let score = 0;
let cat1Score = 0; // Sports
let cat2Score = 0; // Capital Cities
let cat3Score = 0; // Technology
let cat4Score = 0; // Logic & Riddles

//timer
let timerInterval;
let timeLeft = 30;

function startTimer() {
  clearInterval(timerInterval); // clear old timer
  if (difficulty==1)timeLeft = 30;
  else if (difficulty==2)timeLeft = 20;
  else if (difficulty==3)timeLeft = 12;
  
  document.getElementById("timer").textContent = `Time Left: ${timeLeft}`;

  timerInterval = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").textContent = `Time Left: ${timeLeft}`;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      goToNextQuestion(); // auto-skip
    }
  }, 1000);
}

function goToNextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < totalQuestions) {
    loadQuestion(currentQuestionIndex);
    startTimer();
  } else {
    localStorage.setItem("totalScore", score);
    localStorage.setItem("cat1Score", cat1Score);
    localStorage.setItem("cat2Score", cat2Score);
    localStorage.setItem("cat3Score", cat3Score);
    localStorage.setItem("cat4Score", cat4Score);
    
    questionEl.textContent = `Quiz completed!`;
    document.querySelector(".choices").innerHTML = "";
    document.getElementById("timer").textContent = "";
  }
}


//function to update cat score
function updateCategoryScore(category) {
  switch (category) {
    case "Sports":
      cat1Score++;
      break;
    case "Capital Cities":
      cat2Score++;
      break;
    case "Technology":
      cat3Score++;
      break;
    case "Logic & Riddles":
      cat4Score++;
      break;
  }
}


function updateScoreDisplay() {
    document.getElementById('scoreCircle').textContent = score;
}


// Load question into the page
function loadQuestion(index) {
  const q = questions[index];
  questionEl.textContent = q.question;

  choiceBtns.forEach((btn, i) => {
    btn.textContent = q.choices[i];
    btn.classList.remove("correct", "wrong"); // reset button styles
  });
}

// Handle choice selection
choiceBtns.forEach(btn => {
  btn.addEventListener("click", (e) => {
    const selected = parseInt(e.target.dataset.choice);
    const correct = questions[currentQuestionIndex].answer;

    if (selected === correct) {
      e.target.classList.add("correct");
      score++;
      const category = questions[currentQuestionIndex].cat;
      updateCategoryScore(category);
      updateScoreDisplay(); 
    } else {
      e.target.classList.add("wrong");
    }

    
    setTimeout(() => {
    clearInterval(timerInterval);
    goToNextQuestion();
}, 1000);
  });
});

// Start the quiz
loadQuestion(currentQuestionIndex);
startTimer();




