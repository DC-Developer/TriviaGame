$(document).ready(function(){
//global variables 
var time = 0;
var userInput = false;
var correctAnswer = "";
var incorrectAnswer= "";

var $start = $("#start");
//objects that hold each question and answers
var question1 ={
    question: "How old am I?",
    one: 12,
    two: 77,
    three: 25,
    correctAnswer: 25,
    //put a link to the gif that will display after the answer is guessed right
};


var question2 ={
    question: "What's my favorite cartoon?",
    one: "Rick and Morty",
    two: "Futurama",
    three: "Family Guy",
    correctAnswer: "Rick and Morty",
    //put a link to the gif that will display after the answer is guessed right
};


var question3 ={
    question: "What's your favorite movie?",
    one: "Gladiator",
    two: "Anchorman",
    three: "Mean Girls",
    correctAnswer: "Gladiator",
    //put a link to the gif that will display after the answer is guessed right
};
//-------------------------------
//function declarations

//this one starts the program

function start(){
    console.log("Started");
    $("#contentArea").html("");

}


//------------------------------

//begin the program by selecting the start button id, and calling start() 



    $("#start").on("click", function(){
        

        start();
    });

    setTimeout(function(){
        console.log("Blah");
        $("#contentArea").html($start);
    },5000 );
    
});