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



    if(questionNumber >= questions.length)

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


const questionBank = {

Sports: {

Soccer: {

Easy: [
{
question:"How many players are on a soccer team on the field?",
answers:["7","9","11","15"],
correct:2
},
{
question:"What object do players try to kick into the goal?",
answers:["Ball","Puck","Bat","Ring"],
correct:0
},
{
question:"Which body part cannot normally be used by field players?",
answers:["Foot","Head","Hand","Chest"],
correct:2
},
{
question:"What is the person who protects the goal called?",
answers:["Forward","Defender","Goalkeeper","Captain"],
correct:2
},
{
question:"What color card means a player is removed from the game?",
answers:["Blue","Red","Green","White"],
correct:1
},
{
question:"How long is a normal soccer match?",
answers:["45 minutes","60 minutes","90 minutes","120 minutes"],
correct:2
},
{
question:"What shape is a soccer field usually?",
answers:["Circle","Rectangle","Triangle","Square"],
correct:1
},
{
question:"Which country is famous for the club FC Barcelona?",
answers:["Spain","Brazil","Germany","Italy"],
correct:0
},
{
question:"What starts each half of a soccer match?",
answers:["Kickoff","Penalty","Corner","Throw-in"],
correct:0
},
{
question:"How many goals does the goalkeeper defend?",
answers:["1","2","3","4"],
correct:0
},
{
question:"What is a shot from the penalty spot called?",
answers:["Free kick","Penalty kick","Corner kick","Goal kick"],
correct:1
},
{
question:"Which sport is also called football in many countries?",
answers:["Soccer","Basketball","Baseball","Hockey"],
correct:0
},
{
question:"What equipment protects a soccer player's legs?",
answers:["Helmet","Shin guards","Gloves","Pads"],
correct:1
},
{
question:"What happens when the ball goes completely over the sideline?",
answers:["Throw-in","Goal","Penalty","Corner"],
correct:0
},
{
question:"How many halves are in a soccer game?",
answers:["1","2","3","4"],
correct:1
},
{
question:"Which position usually scores many goals?",
answers:["Forward","Goalkeeper","Referee","Defender"],
correct:0
},
{
question:"What person enforces the rules during the game?",
answers:["Coach","Referee","Owner","Captain"],
correct:1
},
{
question:"What is the area around the goal called?",
answers:["Penalty area","Center zone","Safety zone","Goal box"],
correct:0
},
{
question:"What country won the 2022 men's FIFA World Cup?",
answers:["Argentina","Brazil","France","Germany"],
correct:0
},
{
question:"What is a score of zero called in soccer?",
answers:["Nil","Blank","Nothing","Empty"],
correct:0
},
{
question:"Which tournament decides the world champion in soccer?",
answers:["FIFA World Cup","Super Bowl","World Series","NBA Finals"],
correct:0
},
{
question:"What footwear do soccer players wear?",
answers:["Cleats","Skates","Boots only","Sandals"],
correct:0
},
{
question:"What does a referee show for a warning?",
answers:["Yellow card","Red card","Blue card","Green card"],
correct:0
},
{
question:"Where does the goalkeeper stand?",
answers:["Goal","Center circle","Sideline","Corner"],
correct:0
},
{
question:"What is the main objective of soccer?",
answers:["Score goals","Hold the ball","Run fastest","Hit opponents"],
correct:0
}
],

Medium: [

{
question:"Which nation has won the most men's FIFA World Cups?",
answers:["Brazil","Germany","France","England"],
correct:0
},
{
question:"How many minutes are added for stoppage time?",
answers:["Always 5","Always 10","Varies","Always 15"],
correct:2
},
{
question:"What does FIFA stand for?",
answers:["International football federation","Football rules group","World soccer team","European league"],
correct:0
},
{
question:"Which player is famous for the 'Hand of God' goal?",
answers:["Pele","Diego Maradona","Messi","Ronaldo"],
correct:1
},
{
question:"What club competition is played in Europe?",
answers:["Champions League","Super Bowl","World Series","Stanley Cup"],
correct:0
}

],

Hard: [

{
question:"Which country won the first FIFA World Cup in 1930?",
answers:["Brazil","Uruguay","Argentina","Italy"],
correct:1
},
{
question:"Which club has won the most UEFA Champions League titles?",
answers:["Barcelona","Liverpool","Real Madrid","Bayern Munich"],
correct:2
},
{
question:"Who holds the record for most men's international goals?",
answers:["Messi","Ronaldo","Pele","Maradona"],
correct:1
},
{
question:"The offside rule mainly prevents what?",
answers:["Unfair attacking position","Fouls","Long shots","Corner kicks"],
correct:0
},
{
question:"Which country hosted the 2014 FIFA World Cup?",
answers:["Brazil","Russia","Qatar","South Africa"],
correct:0
}

]

},

Basketball: {

Easy: [
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
question:"Which player is famous for wearing number 23?",
answers:["Michael Jordan","Tom Brady","Pele","Tiger Woods"],
correct:0
},
{
question:"How many points is a three-pointer worth?",
answers:["1","2","3","4"],
correct:2
},
{
question:"How many quarters are in a basketball game?",
answers:["2","3","4","5"],
correct:2
},
{
question:"What is it called when a player runs without dribbling?",
answers:["Traveling","Passing","Shooting","Blocking"],
correct:0
},
{
question:"What shape is a basketball?",
answers:["Square","Round","Triangle","Oval"],
correct:1
},
{
question:"Which sport is played in the NBA?",
answers:["Basketball","Football","Soccer","Hockey"],
correct:0
},
{
question:"What color is a normal basketball?",
answers:["Orange","Blue","Green","Purple"],
correct:0
}
],

Medium: [
{
question:"How long is an NBA game?",
answers:["40 minutes","48 minutes","60 minutes","90 minutes"],
correct:1
},
{
question:"Who is known as King James?",
answers:["LeBron James","Kobe Bryant","Stephen Curry","Shaq"],
correct:0
},
{
question:"How many teams make the NBA Finals?",
answers:["1","2","4","8"],
correct:1
},
{
question:"What is a double-double?",
answers:["Two wins","Double points only","Double digits in two stats","Two players"],
correct:2
},
{
question:"Which team drafted Kobe Bryant?",
answers:["Lakers","Hornets","Bulls","Celtics"],
correct:1
}
],

Hard: [
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
question:"Which player is the NBA all-time scoring leader?",
answers:["LeBron James","Jordan","Curry","Shaq"],
correct:0
},
{
question:"What team has won the most NBA championships?",
answers:["Lakers","Celtics","Bulls","Warriors"],
correct:1
},
{
question:"What does MVP stand for?",
answers:["Most Valuable Player","Most Victory Points","Maximum Value Player","Major Victory Player"],
correct:0
}
]

},

Football: {

Easy:[
{
question:"How many points is a touchdown worth?",
answers:["3","5","6","10"],
correct:2
},
{
question:"Which player usually throws the football?",
answers:["Quarterback","Kicker","Center","Receiver"],
correct:0
},
{
question:"What league is the NFL?",
answers:["Football league","Basketball league","Soccer league","Baseball league"],
correct:0
},
{
question:"How many teams play in a football game?",
answers:["1","2","3","4"],
correct:1
},
{
question:"What shape is a football?",
answers:["Round","Oval","Square","Triangle"],
correct:1
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
question:"What is an interception?",
answers:["A defensive catch","A touchdown","A penalty","A kick"],
correct:0
},
{
question:"How long is a football field?",
answers:["50 yards","75 yards","100 yards","120 yards"],
correct:2
},
{
question:"What happens after a touchdown?",
answers:["Extra point attempt","Game ends","Timeout","Penalty"],
correct:0
}
],

Hard:[
{
question:"Which team has won the most Super Bowls?",
answers:["Patriots","Cowboys","Packers","Chiefs"],
correct:0
},
{
question:"Who has the most career NFL passing yards?",
answers:["Tom Brady","Drew Brees","Joe Montana","Peyton Manning"],
correct:0
},
{
question:"How many downs does a team get?",
answers:["2","3","4","5"],
correct:2
},
{
question:"Which position snaps the ball?",
answers:["Center","Receiver","Safety","Kicker"],
correct:0
},
{
question:"What does MVP mean?",
answers:["Most Valuable Player","Most Victory Player","Maximum Value Point","Major Victory Prize"],
correct:0
}
]

},

"General Sports": {

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
question:"Which sport is played in a swimming pool?",
answers:["Swimming","Basketball","Baseball","Golf"],
correct:0
},
{
question:"Which sport uses a bat and ball?",
answers:["Baseball","Soccer","Hockey","Tennis"],
correct:0
},
{
question:"Which sport has a hoop?",
answers:["Basketball","Football","Golf","Swimming"],
correct:0
},
{
question:"Which sport is played on ice?",
answers:["Hockey","Soccer","Tennis","Golf"],
correct:0
},
{
question:"A golfer uses what to hit the ball?",
answers:["Club","Bat","Racket","Stick"],
correct:0
},
{
question:"A tennis player uses what?",
answers:["Racket","Bat","Glove","Helmet"],
correct:0
},
{
question:"Which sport includes a marathon?",
answers:["Running","Swimming","Golf","Boxing"],
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
question:"Which sport awards the Stanley Cup?",
answers:["Hockey","Football","Basketball","Baseball"],
correct:0
},
{
question:"The Ryder Cup is associated with which sport?",
answers:["Golf","Tennis","Soccer","Basketball"],
correct:0
},
{
question:"How many rings are on the Olympic symbol?",
answers:["3","4","5","6"],
correct:2
},
{
question:"Which sport uses a shuttlecock?",
answers:["Badminton","Tennis","Golf","Soccer"],
correct:0
},
{
question:"What country hosts Wimbledon?",
answers:["England","USA","France","Spain"],
correct:0
},
{
question:"Which sport uses lanes and a track?",
answers:["Track and field","Hockey","Golf","Boxing"],
correct:0
},
{
question:"Which sport has the Masters tournament?",
answers:["Golf","Football","Basketball","Baseball"],
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
question:"Which country has won the most men's FIFA World Cups?",
answers:["Brazil","Germany","France","Spain"],
correct:0
},
{
question:"What sport is the Davis Cup connected to?",
answers:["Tennis","Golf","Soccer","Hockey"],
correct:0
},
{
question:"Which country invented basketball?",
answers:["USA","Canada","England","France"],
correct:1
},
{
question:"What is the maximum break in snooker?",
answers:["100","147","200","250"],
correct:1
},
{
question:"Which athlete is famous for the 'Lightning Bolt' nickname?",
answers:["Usain Bolt","Phelps","Jordan","Messi"],
correct:0
},
{
question:"What sport is the America's Cup associated with?",
answers:["Sailing","Running","Golf","Tennis"],
correct:0
},
{
question:"Which country has hosted the most Summer Olympics?",
answers:["USA","France","China","Japan"],
correct:0
}
]

}

}

};
