const questions = [
    {
        question: "Who is the bestest?",
        answers:[
            {text:"A Koala", correct:false},
            {text:"Super Woman", correct:false},
            {text:"You", correct:true},
            {text:"Killer Shark", correct:false}
        ]
    },
    {
        question: "What do I want right now?",
        answers:[
            {text:"Three big burgers", correct:false},
            {text:"2 warm buns", correct:true},
            {text:"A hug", correct:false},
            {text:"A cat", correct:false}
        ]
    },
    {
        question: "Why is the sky blue?",
        answers:[
            {text:"Airheads in the ocean", correct:false},
            {text:"Reflection from the sky", correct:false},
            {text:"Cuz I like blue", correct:true},
            {text:"Idk you tell me", correct:false}
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
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex+1;
    questionElement.innerHTML = questionNo + ". "+ currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display="block";
}

function showScore(){
    resetState();
    questionElement.innerHTML= `Your score is ${score}`;
    nextButton.innerHTML = "Try Again?";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex< questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();
