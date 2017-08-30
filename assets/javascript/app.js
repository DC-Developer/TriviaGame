$(document).ready(function(){
//global variables 
var time = 0;
var userClick = false;
var correctAnswer = "";
var incorrectAnswer= "";

var $start = $("#start");
//objects that hold each question and answers
//also probably storing these objects into an array is a good idea, so later we can just loop through the array using index number to conveniently display each variable for each timer iteration
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
$("button").on("hover", function(){
   this.css("background", "blue");

});
//this one starts the program

function start(){
    console.log("Started");
    $("#conButton").html("");
    outputObject();
    
}

function outputObject(){
    //declare object that will store in the values of current question and answers
    var currentObj = question1;
    //outputs the question:
    $("#question").append(currentObj.question);
    console.log(currentObj.question);
    //dynamically create new buttons that will store in the answers 
    
    //outputs the answers:
    $("#answers").append("<button>"+currentObj.one+"</button>");
    $("#answers").append("<button>"+currentObj.two+"</button>");
    $("#answers").append("<button>"+currentObj.three+"</button>");
    //need to set a bool variable that sets to true once user actually inputs to run getInput function
   
    getInput(currentObj);
}
function getInput(currentObj){
    //declare variable for userInput
    var userInput= 0;
    //on user click, gets the value of the button and returns 
    console.log(currentObj.correctAnswer);
    $("button").on("click", function(){
       userInput= $(this).html();
       evalInput(userInput, currentObj);
    });
    
}
function evalInput(input, obj){
    
    if(input == obj.correctAnswer){
        console.log("input");
        alert("You are correct");

    }


}
//------------------------------

//begin the program by selecting the start button id, and calling start() 



    $("#start").on("click", function(){
        

        start();
    });

    //setTimeout(function(){
        //console.log("Blah");
       // $("#conButton").html($start);
    //},5000 );
    
});