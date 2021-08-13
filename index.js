const quiz = [
    {
        Ques: "Q1:HTML stands for :",
        a: "HighText Machine Language",
        b: "HyperText and links Markup Language",
        c: "HyperText Markup Language",
        d: "None of these",
        ans: "answer3"
    },
    {
        Ques: "Q2:The correct sequence of HTML tags for starting a webpage is",
        a: "Head, Title, HTML, body",
        b: "HTML, Body, Title, Head",
        c: "HTML, Head, Title, Body",
        d: "HTML, Head, Header, Body",
        ans: "answer3"
    },
    {
        Ques: "Q3:Which of the following element is responsible for making the text bold in HTML?",
        a: "<pre>",
        b: "<a>",
        c: "<b>",
        d: "<br>",
        ans: "answer3"
    },
    {
        Ques: "Q4: Which of the following tag is used for inserting the largest heading in HTML?",
        a: "<h3>",
        b: "<h1>",
        c: "<h5>",
        d: "<h6>",
        ans: "answer2"
    }
];
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll(".answer");

const showscore = document.querySelector("#showscore");

const r1 = document.querySelector("#r1");
const r2 = document.querySelector("#r2");
const r3 = document.querySelector("#r3");
const r4 = document.querySelector("#r4");




let quesCount = 0;
let score = 0;
let clickAnswers = [];


const LoadQuestion = () => {
    const quizList = quiz[quesCount];
    question.innerText = quizList.Ques;
    option1.innerText = quizList.a;
    option2.innerText = quizList.b;
    option3.innerText = quizList.c;
    option4.innerText = quizList.d;


}
LoadQuestion();

const getcheckAnswer = () => {
    let answer;

    answers.forEach((curAnsEle) => {
        if (curAnsEle.checked) {
            answer = curAnsEle.id;
        }

    });
    return answer;

};



const deselectAll = () => {
    answers.forEach((curAnsEle) => curAnsEle.checked = false);
}

submit.addEventListener('click', () => {
    const checkedAnswer = getcheckAnswer();
    console.log(checkedAnswer);

    clickAnswers.push(checkedAnswer);
    console.log(clickAnswers);
    console.log(clickAnswers[quesCount]);

    if (checkedAnswer == quiz[quesCount].ans) {
        score++;
    };

    quesCount++;


    deselectAll();

    if (quesCount < quiz.length) {
        LoadQuestion();
    }
    else {
        showscore.innerHTML = `
            <h3>Your score ${score}/${quiz.length}<h3>
            <button class = "btn" onclick="reviewpage()">Review</button>
            
            
        `;
        showscore.classList.remove('scorearea');

    }

    // for (let l in clickAnswers){
    //     console.log(l);
    // }

});


// function selectedanswers(){
//     console.log(clickAnswers);
// }
// console.log("clickAnswers[0]");

// const r1 = document.querySelector("#r1");
// const r2 = document.querySelector("#r2");
// const r3 = document.querySelector("#r3");
// const r4 = document.querySelector("#r4");



function reviewpage () {


    // r1.innerHTML = clickAnswers[0];
    // r2.innerHTML = clickAnswers[1];
    // r3.innerHTML = clickAnswers[2];
    // r4.innerHTML = clickAnswers[3];
    console.log(clickAnswers);
    window.location.href = "review.html";    
    
};

// function lastpage(){
//     document.getElementById("r1").innerHTML= clickAnswers[0];
//     document.getElementById("r2").innerHTML= clickAnswers[1];
//     document.getElementById("r3").innerHTML= clickAnswers[2];
//     document.getElementById("r4").innerHTML= clickAnswers[3]; 
// }

// lastpage();


