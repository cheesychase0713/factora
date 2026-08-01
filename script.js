let category = "";
let topic = "";
let difficulty = "";

let questionNumber = 0;
let score = 0;
let selectedAnswer = null;


const topics = {

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



let questions = [

{
question: "What sport uses a hoop and a basketball?",
answers: [
"Soccer",
"Basketball",
"Baseball",
"Golf"
],
correct: 1
},


{
question: "Which planet is known as the Red Planet?",
answers: [
"Earth",
"Mars",
"Jupiter",
"Venus"
],
correct: 1
},


{
question: "Who was the first President of the United States?",
answers: [
"Abraham Lincoln",
"George Washington",
"Thomas Jefferson",
"John Adams"
],
correct: 1
}

];



// Load categories

let categoryBox = document.getElementById("categories");


Object.keys(topics).forEach(function(name){

    let button = document.createElement("button");

    button.innerHTML = name;

    button.onclick = function(){

        chooseCategory(name);

    };

    categoryBox.appendChild(button);

});




// Choose category

function chooseCategory(name){

    category = name;

    hidePages();

    document.getElementById("topics").style.display = "block";

    document.getElementById("categoryTitle").innerHTML = name;

    showBack(true);


    let box = document.getElementById("topicButtons");

    box.innerHTML = "";


    topics[name].forEach(function(item){

        let button = document.createElement("button");

        button.innerHTML = item;


        button.onclick = function(){

            topic = item;

            hidePages();

            document.getElementById("difficulty").style.display = "block";

        };


        box.appendChild(button);

    });

}





// Start quiz

function startQuiz(level){

    difficulty = level;

    questionNumber = 0;

    score = 0;


    hidePages();

    document.getElementById("quiz").style.display = "block";


    showQuestion();

}





// Show question

function showQuestion(){

    let q = questions[questionNumber];


    document.getElementById("number").innerHTML =
    "Question " + (questionNumber + 1) + "/25";


    document.getElementById("question").innerHTML =
    q.question;


    let answerBox = document.getElementById("answers");

    answerBox.innerHTML = "";


    q.answers.forEach(function(answer,index){


        let button = document.createElement("button");

        button.className = "answer";


        button.innerHTML =
        String.fromCharCode(65 + index) + ". " + answer;



        button.onclick = function(){

            selectedAnswer = index;

        };


        answerBox.appendChild(button);


    });


}





// Submit answer

function submitAnswer(){


    let q = questions[questionNumber];


    let buttons = document.querySelectorAll(".answer");


    if(selectedAnswer === q.correct){

        score++;

        nextQuestion();

    }


    else{


        buttons.forEach(function(button,index){


            if(index === q.correct){

                button.classList.add("correct");

            }

            else{

                button.classList.add("wrong");

            }


        });



        setTimeout(function(){

            nextQuestion();

        },3500);


    }


}




// Next question

function nextQuestion(){

    questionNumber++;

    selectedAnswer = null;


    if(questionNumber >= 25){

        finishQuiz();

    }

    else{

        showQuestion();

    }

}





// Finish

function finishQuiz(){

    hidePages();

    document.getElementById("results").style.display = "block";


    document.getElementById("score").innerHTML =
    "You scored " + score + "/25";


    showBack(false);

}





// Back button

function goBack(){

    hidePages();


    if(category !== "" && topic === ""){

        goHome();

    }

    else if(topic !== ""){

        document.getElementById("topics").style.display = "block";

    }

}





// Home

function goHome(){

    hidePages();

    document.getElementById("home").style.display = "block";

    category = "";

    topic = "";

    showBack(false);

}





// Hide all pages

function hidePages(){

    document.querySelectorAll(".page").forEach(function(page){

        page.style.display = "none";

    });

}





// Back button visibility

function showBack(value){

    document.getElementById("backButton").style.display =
    value ? "block" : "none";

}
