const questions = [
    {
        question: "Who is the bestest?",
        answers:[
            {test:"A Koala", correct:false},
            {test:"Super Woman", correct:false},
            {test:"You", correct:true},
            {test:"Killer Shark", correct:false}
        ]
    },
    {
        question: "What do I want right now?",
        answers:[
            {test:"Three big burgers", correct:false},
            {test:"2 warm buns", correct:true},
            {test:"A hug", correct:false},
            {test:"A cat", correct:false}
        ]
    },
    {
        question: "Why is the sky blue?",
        answers:[
            {test:"Airheads in the ocean", correct:false},
            {test:"Reflection from the sky", correct:false},
            {test:"Cuz I like blue", correct:true},
            {test:"Idk you tell me", correct:false}
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex+1;
    questionElement.innerHTML = questionNo + ". "+ currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });
}

function resetState(){
    nextButton.style.display="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

startQuiz();
