const questions = [
    {
        text: "Which keyword declares a constant in JavaScript?",
        options: ["var", "let", "const", "static"],
        correctIndex: 2
    },
    {
        text: "Which method is used to log to the console?",
        options: ["print()", "log()", "console()", "console.log()"],
        correctIndex: 3
    },
    {
        text: "Which of these is Not a Javascript data type?",
        options: ["number", "string", "boolean", "character"],
        correctIndex: 3
    }
];

let currentQuesIndex = 0;
let score = 0;

let next = document.getElementById('btn');
let num = document.getElementById('no');
let ques = document.getElementById('question');
let optionlist = document.getElementsByClassName('option');

let selectedOption = null;

// highlight selected option
for (let i = 0; i < optionlist.length; i++) {
    optionlist[i].addEventListener("click", function () {
        selectedOption = i;

        // reset previous selected
        for (let j = 0; j < optionlist.length; j++) {
            optionlist[j].classList.remove("bg-green-500", "bg-red-500", "border-2");
        }

        // add highlight
        optionlist[i].classList.add("border-2", "border-white");
    });
}

next.addEventListener("click", () => {

    if (selectedOption === null) {
        alert("Please select an option");
        return;
    }

    const q = questions[currentQuesIndex];

    // score calculation
    if (selectedOption === q.correctIndex) {
        score++;
    }

    currentQuesIndex++;
    selectedOption = null;

    // last question completed → show result
    if (currentQuesIndex === questions.length) {
        document.querySelector(".container").innerHTML = `
            <h1 class="text-3xl font-bold mb-4">Quiz Completed!</h1>
            <p class="text-xl mb-4">Your Score: <span class="font-bold">${score}</span> / ${questions.length}</p>
            <p class="text-lg">Good job! 🎉</p>
        `;
        return;
    }

    // load next question
    const nextQ = questions[currentQuesIndex];
    num.innerText = currentQuesIndex + 1;
    ques.innerText = nextQ.text;

    for (let i = 0; i < 4; i++) {
        optionlist[i].innerText = nextQ.options[i];
        optionlist[i].classList.remove("border-2", "border-white");
    }
});
