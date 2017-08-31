$(document).ready(function(){
//global variables 
var time = 0;
var userClick = false;
var right = 0;
var wrong= 0;
var time = 0;
var iteration = 0;

var storage = [2];

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
//store objects into array
storage[0]= question1;
storage[1]= question2;
storage[2]= question3;
//-------------------------------
//function declarations

//this one starts the program

function start(){
    console.log("Started");
    $("#conButton").html("");
    outputObject();
    
    
}

function outputObject(cycle){
    //declare object that will store in the values of current question and answers
    //need to add in for-loop that will loop through an array containing the objects
    //this object will also loop into the index of the next array object, based off a return value from the evalInput function
    

            //outputs the question:
            $("#question").html(storage[iteration].question);

            //dynamically create new buttons that will store in the answers 
            //outputs the answers:
            $("#question1").html("<button>"+storage[iteration].one+"</button>");
            $("#question2").html("<button>"+storage[iteration].two+"</button>");
            $("#question3").html("<button>"+storage[iteration].three+"</button>");
            //need to set a bool variable that sets to true once user actually inputs to run getInput function
            
            getInput(storage[iteration]);
            

        


   
    
}
 //on user click, gets the value of the button and passes the value of that and the object into evalInput
function getInput(currentObj){
    //declare variable for userInput
    console.log(currentObj);
    var userInput= 0;
   
    
    $("button").on("click", function(){
       userInput= $(this).html();
       evalInput(userInput, currentObj);
    });
    
}

function evalInput(input, obj){
    //both will output a new message with gif with a setTimeOut of 5 seconds then it goes to next question
    
    if(input == obj.correctAnswer){
        console.log(input);
        
        //use jQuery to write this message to html
        right++;
//call function to display result
        showGif(input, obj.correctAnswer);
        
        iteration++;

        setTimeout(function(){
            outputObject(iteration);
                }, 5000);
       
    }else{

        console.log(input);
        
        wrong++;

        showGif(input, obj.correctAnswer);
       
        iteration++;
       
       setTimeout(function(){
        outputObject(iteration);
     }, 5000);
        
    }

    
// add code that will show the gif associated with the right answer, then loop through the next object and dislay the new question object. all of this will be in a setTimeOut(), and after the countdown, will run the code
//function will also increment and this increment will be sent to the output function to use for the array "storage" index, accessing the next object in the array
//set limit to the amount code will loop based off the array length
}
//function will display image
function showGif(result,objCorrectAnswer){
//first part will show gif if evaluated to true, second will just show a message saying incorrect and the right answer

if(result == objCorrectAnswer){
    //code will display gif to html
    //will call output function with a set delay of 5
    alert("You are correct");
    console.log("Hooray you did it!");
    
}else{
    
    alert("You're wrong!");
    console.log("Wrong!");
    console.log("Correct answer is: "+ objCorrectAnswer);

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