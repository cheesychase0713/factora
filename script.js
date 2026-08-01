let category = "";
let topic = "";
let difficulty = "";

let questionNumber = 0;
let score = 0;
let selectedAnswer = null;
let questions = [];


// -------------------------
// TOPICS
// -------------------------

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



// -------------------------
// START WEBSITE
// -------------------------

window.onload = function(){

    let box = document.getElementById("categories");

    for(let name in topics){

        let button = document.createElement("button");

        button.innerHTML = name;

        button.onclick = function(){

            chooseCategory(name);

        };

        box.appendChild(button);

    }


    showBack(false);

};




// -------------------------
// CATEGORY SELECT
// -------------------------

function chooseCategory(name){

    category = name;

    topic = "";


    hidePages();


    document.getElementById("topics").style.display = "block";


    document.getElementById("categoryTitle").innerHTML = name;


    let box = document.getElementById("topicButtons");

    box.innerHTML = "";


    topics[name].forEach(function(item){


        let button = document.createElement("button");


        button.innerHTML = item;



        button.onclick = function(){

            topic = item;


            hidePages();


            document.getElementById("difficulty").style.display="block";


        };



        box.appendChild(button);


    });


    showBack(true);

}




// -------------------------
// START QUIZ
// -------------------------

function startQuiz(level){

    difficulty = level;


    questionNumber = 0;

    score = 0;

    selectedAnswer = null;


    questions = loadQuestions();


    hidePages();


    document.getElementById("quiz").style.display="block";


    showQuestion();

}





// -------------------------
// LOAD QUESTIONS
// -------------------------

function loadQuestions(){


    if(
        questionBank[category] &&
        questionBank[category][topic] &&
        questionBank[category][topic][difficulty]
    ){

        return questionBank[category][topic][difficulty];

    }


    return [];

}





// -------------------------
// DISPLAY QUESTION
// -------------------------

function showQuestion(){


    let q = questions[questionNumber];


    document.getElementById("number").innerHTML =
    "Question " + (questionNumber + 1) + "/25";



    document.getElementById("question").innerHTML =
    q.question;



    let box = document.getElementById("answers");


    box.innerHTML = "";



    q.answers.forEach(function(answer,index){


        let button = document.createElement("button");


        button.className="answer";


        button.innerHTML =
        String.fromCharCode(65 + index) + ". " + answer;



        button.onclick=function(){


            document.querySelectorAll(".answer").forEach(function(btn){

                btn.style.background="white";

                btn.style.color="black";

            });



            button.style.background="#00c6ff";

            button.style.color="white";


            selectedAnswer=index;


        };



        box.appendChild(button);


    });


}




// -------------------------
// SUBMIT ANSWER
// -------------------------

function submitAnswer(){


    if(selectedAnswer === null){

        return;

    }



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





// -------------------------
// NEXT QUESTION
// -------------------------

function nextQuestion(){


    questionNumber++;

    selectedAnswer=null;



    if(questionNumber >= 25){

        finishQuiz();

    }

    else{

        showQuestion();

    }


}





// -------------------------
// FINISH
// -------------------------

function finishQuiz(){


    hidePages();


    document.getElementById("results").style.display="block";


    document.getElementById("score").innerHTML =
    "You scored " + score + "/25";


    showBack(false);


}





// -------------------------
// HOME
// -------------------------

function goHome(){


    hidePages();


    document.getElementById("home").style.display="block";


    category="";

    topic="";


    showBack(false);


}





// -------------------------
// BACK BUTTON
// -------------------------

function goBack(){


    if(topic !== ""){

        chooseCategory(category);

        topic="";


    }

    else{

        goHome();

    }


}





// -------------------------
// HELPERS
// -------------------------

function hidePages(){

    document.querySelectorAll(".page").forEach(function(page){

        page.style.display="none";

    });

}



function showBack(value){

    document.getElementById("backButton").style.display =
    value ? "block" : "none";

}const questionBank = {

Sports: {

Soccer: {

Easy: [
{
question:"How many players are on a soccer team on the field?",
answers:["7","9","11","15"],
correct:2
},
{
question:"What object is kicked in soccer?",
answers:["Ball","Puck","Bat","Ring"],
correct:0
},
{
question:"What color card removes a player from a soccer game?",
answers:["Blue","Red","Green","White"],
correct:1
},
{
question:"Which part of the body is mostly used to control the ball?",
answers:["Feet","Hands","Shoulders","Knees"],
correct:0
},
{
question:"What is the area where the goalkeeper can use their hands called?",
answers:["Penalty area","Center circle","Corner","Sideline"],
correct:0
}
],

Medium: [
{
question:"How long is a normal soccer match?",
answers:["60 minutes","75 minutes","90 minutes","120 minutes"],
correct:2
},
{
question:"Which country has won the most FIFA World Cups?",
answers:["Brazil","Spain","England","Portugal"],
correct:0
},
{
question:"How often are the FIFA World Cups normally held?",
answers:["Every 2 years","Every 3 years","Every 4 years","Every 5 years"],
correct:2
},
{
question:"What does FIFA stand for?",
answers:["Football International Federation Association","International football organization","Federation of international football associations","Football Institute For Athletes"],
correct:2
},
{
question:"A soccer field is also called a what?",
answers:["Court","Pitch","Arena","Diamond"],
correct:1
}
],

Hard: [
{
question:"Who scored the famous 'Hand of God' goal?",
answers:["Lionel Messi","Diego Maradona","Pele","Zinedine Zidane"],
correct:1
},
{
question:"Which club has won the most UEFA Champions League titles?",
answers:["Barcelona","Manchester United","Real Madrid","Liverpool"],
correct:2
},
{
question:"What is the maximum number of players a team can substitute during many modern competitions?",
answers:["1","3","5","10"],
correct:2
},
{
question:"Which country won the first FIFA World Cup?",
answers:["Brazil","Uruguay","Argentina","Germany"],
correct:1
},
{
question:"The offside rule mainly prevents what?",
answers:["Slow play","Unfair positioning","Long shots","Fouls"],
correct:1
}
]

},



Basketball: {

Easy:[
{
question:"How many players from one team are on the court?",
answers:["3","5","7","10"],
correct:1
},
{
question:"How many points is a free throw worth?",
answers:["1","2","3","4"],
correct:0
},
{
question:"What do players shoot the ball into?",
answers:["Goal","Hoop","Net only","Box"],
correct:1
},
{
question:"Which sport is Michael Jordan famous for?",
answers:["Football","Basketball","Baseball","Tennis"],
correct:1
},
{
question:"What shape is a basketball?",
answers:["Square","Triangle","Round","Oval"],
correct:2
}
],

Medium:[
{
question:"How long is an NBA game?",
answers:["40 minutes","48 minutes","60 minutes","90 minutes"],
correct:1
},
{
question:"How many points is a three pointer worth?",
answers:["1","2","3","4"],
correct:2
},
{
question:"Who is known as King James?",
answers:["LeBron James","Kobe Bryant","Stephen Curry","Shaq"],
correct:0
},
{
question:"What league is the NBA?",
answers:["Soccer league","Basketball league","Football league","Baseball league"],
correct:1
},
{
question:"How many quarters are in an NBA game?",
answers:["2","3","4","5"],
correct:2
}
],

Hard:[
{
question:"Who has won the most NBA championships as a player?",
answers:["Michael Jordan","Bill Russell","Kobe Bryant","Magic Johnson"],
correct:1
},
{
question:"Who invented basketball?",
answers:["James Naismith","Michael Jordan","Larry Bird","Wilt Chamberlain"],
correct:0
},
{
question:"Which team drafted Kobe Bryant?",
answers:["Lakers","Hornets","Bulls","Celtics"],
correct:1
},
{
question:"What is a triple-double?",
answers:["Three fouls","Three points","Double digits in three stats","Three wins"],
correct:2
},
{
question:"Who holds the NBA all-time scoring record?",
answers:["LeBron James","Kareem Abdul-Jabbar","Jordan","Curry"],
correct:0
}
]

}

}

};Sports.Football = {

Easy:[
{
question:"How many points is a touchdown worth?",
answers:["3","5","6","10"],
correct:2
},
{
question:"How many teams play in a football game?",
answers:["1","2","3","4"],
correct:1
},
{
question:"Which player usually throws the ball?",
answers:["Quarterback","Kicker","Center","Linebacker"],
correct:0
},
{
question:"What shape is a football?",
answers:["Round","Oval","Square","Triangle"],
correct:1
},
{
question:"What is the NFL?",
answers:["A football league","A basketball league","A soccer league","A baseball league"],
correct:0
}
],


Medium:[
{
question:"How many yards are needed for a first down?",
answers:["5","10","15","20"],
correct:1
},
{
question:"How many quarters are in an NFL game?",
answers:["2","3","4","5"],
correct:2
},
{
question:"What happens after a touchdown?",
answers:["Faceoff","Extra point attempt","Timeout","Game ends"],
correct:1
},
{
question:"What is an interception?",
answers:["A defensive player catches a pass","A touchdown","A kick","A penalty"],
correct:0
},
{
question:"How long is a football field?",
answers:["50 yards","75 yards","100 yards","150 yards"],
correct:2
}
],


Hard:[
{
question:"Which team has won the most Super Bowls?",
answers:["Patriots","Cowboys","Chiefs","Packers"],
correct:0
},
{
question:"Who has the most career NFL passing yards?",
answers:["Tom Brady","Drew Brees","Joe Montana","Peyton Manning"],
correct:0
},
{
question:"How many downs does a team have to gain 10 yards?",
answers:["2","3","4","5"],
correct:2
},
{
question:"What position snaps the ball to the quarterback?",
answers:["Center","Receiver","Safety","Running back"],
correct:0
},
{
question:"What does MVP stand for?",
answers:["Most Valuable Player","Maximum Victory Point","Most Victory Plays","Major Valuable Person"],
correct:0
}

]

};



Sports["General Sports"] = {

Easy:[
{
question:"Which event happens every four years?",
answers:["Olympics","Super Bowl","NBA Finals","World Series"],
correct:0
},
{
question:"Which sport uses a racket?",
answers:["Tennis","Football","Hockey","Boxing"],
correct:0
},
{
question:"Which sport uses a puck?",
answers:["Soccer","Hockey","Golf","Baseball"],
correct:1
},
{
question:"What sport is played in a pool?",
answers:["Swimming","Golf","Football","Baseball"],
correct:0
},
{
question:"Which sport uses a bat?",
answers:["Baseball","Soccer","Basketball","Hockey"],
correct:0
}
],


Medium:[
{
question:"How long is a marathon?",
answers:["10 miles","20 miles","26.2 miles","50 miles"],
correct:2
},
{
question:"Which tournament is played at Wimbledon?",
answers:["Tennis","Golf","Soccer","Hockey"],
correct:0
},
{
question:"The Tour de France is what sport?",
answers:["Cycling","Running","Swimming","Skiing"],
correct:0
},
{
question:"Which sport has the Stanley Cup?",
answers:["Basketball","Hockey","Football","Baseball"],
correct:1
},
{
question:"A birdie is used in which sport?",
answers:["Badminton","Football","Baseball","Golf"],
correct:0
}
],


Hard:[
{
question:"Which athlete has won the most Olympic gold medals?",
answers:["Usain Bolt","Michael Phelps","Carl Lewis","Simone Biles"],
correct:1
},
{
question:"Which country hosted the first modern Olympics?",
answers:["USA","Greece","France","Italy"],
correct:1
},
{
question:"What is the highest possible score with one dart?",
answers:["60","100","180","200"],
correct:2
},
{
question:"Which country has won the most men's World Cups?",
answers:["Brazil","Germany","France","Spain"],
correct:0
},
{
question:"What sport is the Ryder Cup associated with?",
answers:["Golf","Tennis","Soccer","Basketball"],
correct:0
}

]

};
