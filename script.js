const questions = [
    {
        question: "What is the most popular programming language?",
        answers:[
            {text:"Java", correct:false},
            {text:"Python", correct:false},
            {text:"Javascript", correct:true},
            {text:"Cobol", correct:false}
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
        question: "Who was the first programmer?",
        answers:[
            {text:"Steve Jobs", correct:false},
            {text:"Ada Lovelace", correct:false},
            {text:"Charles Babbage", correct:true},
            {text:"Thomas Edison", correct:false}
        ]
    },
    {
        question: "What are the advantages of javascript?",
        answers:[
            {text:"Runs within client browser", correct:false},
            {text:"Simple and easy to learn", correct:false},
            {text:"Client-side, reducing need for servers", correct:false},
            {text:"All of 'em!", correct:true}
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
