const quizData = [
    {
        question: "What is the capital of India?",
        options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
        answer: 1
    },
    {
        question: "Which language runs in a browser?",
        options: ["Java", "C", "Python", "JavaScript"],
        answer: 3
    },
    {
        question: "HTML stands for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlink Markup Language",
            "None"
        ],
        answer: 0
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const buttons = document.querySelectorAll(".btn");
const nextBtn = document.getElementById("next-btn");

loadQuestion();

function loadQuestion() {
    const current = quizData[currentQuestion];
    questionEl.innerText = current.question;
    buttons.forEach((btn, index) => {
        btn.innerText = current.options[index];
        btn.disabled = false;
    });
    nextBtn.style.display = "none";
}

function selectAnswer(index) {
    const correct = quizData[currentQuestion].answer;
    if (index === correct) {
        score++;
    }
    buttons.forEach(btn => btn.disabled = true);
    nextBtn.style.display = "block";
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        questionEl.innerText = `Quiz Finished! Score: ${score}/${quizData.length}`;
        document.getElementById("answers").style.display = "none";
        nextBtn.style.display = "none";
    }
}
