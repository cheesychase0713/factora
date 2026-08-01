let category = "";
let topic = "";
let difficulty = "";

let questionNumber = 0;
let score = 0;
let selectedAnswer = null;


const categories = {
    Sports: [
        "Soccer",
        "Basketball",
        "Football",
        "General Sports"
    ],

    Science: [
        "Biology",
        "Chemistry",
        "Space",
        "General Science"
    ],

    History: [
        "Ancient History",
        "World History",
        "U.S. History",
        "General History"
    ],

    Gaming: [
        "Minecraft",
        "Nintendo",
        "Roblox",
        "General Gaming"
    ],

    Movies: [
        "Action Movies",
        "Animated Movies",
        "Superhero Movies",
        "General Movies"
    ]
};


const questions = [
    {
        question: "What sport uses a hoop?",
        answers: [
            "Soccer",
            "Basketball",
            "Football",
            "Golf"
        ],
        correct: 1
    },

    {
        question: "What planet is known as the Red Planet?",
        answers: [
            "Earth",
            "Mars",
            "Venus",
            "Jupiter"
        ],
        correct: 1
    },

    {
        question: "Who was the first President of the United States?",
        answers: [
            "George Washington",
            "Abraham Lincoln",
            "Thomas Jefferson",
            "John Adams"
        ],
        correct: 0
    }
];


window.onload = function(){

    let box = document.getElementById("categories");

    for(let item in categories){

        let button = document.createElement("button");

        button.innerHTML = item;

        button.onclick = function(){

            chooseCategory(item);

        };

        box.appendChild(button);

    }

    showBack(false);

};



function chooseCategory(name){

    category = name;

    hidePages();

    document.getElementById("topics").style.display="block";

    document.getElementById("categoryTitle").innerHTML=name;

    let box=document.getElementById("topicButtons");

    box.innerHTML="";

    showBack(true);


    categories[name].forEach(function(t){

        let button=document.createElement("button");

        button.innerHTML=t;


        button.onclick=function(){

            topic=t;

            hidePages();

            document.getElementById("difficulty").style.display="block";

        };


        box.appendChild(button);

    });

}



function startQuiz(level){

    difficulty=level;

    questionNumber=0;

    score=0;

    hidePages();

    document.getElementById("quiz").style.display="block";

    showQuestion();

}



function showQuestion(){

    let q=questions[questionNumber % questions.length];


    document.getElementById("number").innerHTML=
    "Question "+(questionNumber+1)+"/25";


    document.getElementById("question").innerHTML=q.question;


    let box=document.getElementById("answers");

    box.innerHTML="";


    q.answers.forEach(function(answer,index){

        let button=document.createElement("button");

        button.className="answer";

        button.innerHTML=
        String.fromCharCode(65+index)+". "+answer;


        button.onclick=function(){

            selectedAnswer=index;

        };


        box.appendChild(button);

    });

}



function submitAnswer(){

    let q=questions[questionNumber % questions.length];

    let buttons=document.querySelectorAll(".answer");


    if(selectedAnswer===q.correct){

        score++;

        nextQuestion();

    }

    else{

        buttons.forEach(function(button,index){

            if(index===q.correct){

                button.classList.add("correct");

            }

            else{

                button.classList.add("wrong");

            }

        });


        setTimeout(nextQuestion,3500);

    }

}



function nextQuestion(){

    questionNumber++;

    selectedAnswer=null;


    if(questionNumber>=25){

        finishQuiz();

    }

    else{

        showQuestion();

    }

}



function finishQuiz(){

    hidePages();

    document.getElementById("results").style.display="block";

    document.getElementById("score").innerHTML=
    "You scored "+score+"/25";

    showBack(false);

}



function goHome(){

    hidePages();

    document.getElementById("home").style.display="block";

    category="";

    topic="";

    showBack(false);

}



function goBack(){

    hidePages();

    if(topic!==""){

        document.getElementById("topics").style.display="block";

        topic="";

    }

    else{

        goHome();

    }

}



function hidePages(){

    let pages=document.querySelectorAll(".page");

    pages.forEach(function(page){

        page.style.display="none";

    });

}



function showBack(value){

    document.getElementById("backButton").style.display=
    value ? "block":"none";

}
