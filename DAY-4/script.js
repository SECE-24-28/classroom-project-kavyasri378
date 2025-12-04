const questions=[
    {
        text:"Which keyword declares a constant in JavaScript?",
        options:["var","let","const","static"],
        correctIndex:2
    },
    {
        text:"Which method is used to log to the console?",
        options:["print()","log()","console()","console.log()"],
        correctIndex:3
    },
    {
        text:"Which of these is Not a Javascript data type?",
        options:["number","string","boolean","character"],
        correctIndex:3
    }
];

let currentQuesIndex = 0;

let next = document.getElementById('btn');
let num=document.getElementById('no')
let ques = document.getElementById('question');
let optionlist = document.getElementsByClassName('option');

next.addEventListener("click", (e)=>{

    e.preventDefault();

    const q = questions[currentQuesIndex];
    if(currentQuesIndex!=3){
    num.innerText=currentQuesIndex+1
    }
    ques.innerText = q.text;

    for(let i = 0; i < 4; i++){
        optionlist[i].innerText = q.options[i];
    }

    currentQuesIndex++;
});
