$(document).ready(function(){
//global variables 
var time = 0;
var userClick = false;
var right = 0;
var wrong= 0;
var missed = 0;
var time = 0;
var iteration = 0;

var number = 10;
var intervalId = false;

var storage = [5];

var $start = $("#start");

//objects that hold each question and answers
//also probably storing these objects into an array is a good idea, so later we can just loop through the array using index number to conveniently display each variable for each timer iteration
var question1 ={
    question: "Who is the Rickest Rick?",
    one: "Evil Rick",
    two: "Doofus Rick",
    three: "Rick Sanchez",
    correctAnswer: "Rick Sanchez",
    image: "https://raw.githubusercontent.com/DC-Developer/TriviaGame/master/assets/images/rick.gif"
    //put a link to the gif that will display after the answer is guessed right
};


var question2 ={
    question: "Who's never going to dance again?",
    one: "A paraplegic",
    two: "George Michaels",
    three: "both",
    correctAnswer: "George Micahels",
    image: "https://raw.githubusercontent.com/DC-Developer/TriviaGame/master/assets/images/para.gif"
    //put a link to the gif that will display after the answer is guessed right
};


var question3 ={
    question: "How many questions are in this question?",
    one: 1,
    two: 2,
    three: 3,
    correctAnswer: 2,
    image: "https://raw.githubusercontent.com/DC-Developer/TriviaGame/master/assets/images/leo.gif"
    //put a link to the gif that will display after the answer is guessed right
};
var question4 ={
    question: "If there are 6 apples and you take away 4, how many do you have??",
    one: "Ten",
    two: "The two that's left",
    three: "The four you took",
    correctAnswer: "https://raw.githubusercontent.com/DC-Developer/TriviaGame/master/assets/images/giphy.gif",
    image: ""
    //put a link to the gif that will display after the answer is guessed right
};
var question5 ={
    question: "Who is the greatest actor to ever live?",
    one: "Bill Cosby",
    two: "Jean Claude Van Damme",
    three: "Russell Crowe",
    correctAnswer: "Russell Crowe",
    image: "https://raw.githubusercontent.com/DC-Developer/TriviaGame/master/assets/images/maximus.gif"
    //put a link to the gif that will display after the answer is guessed right
};
var question6 ={
    question: 'What movie is this line from?: "Nobody makes me bleed my own blood, nobody!"',
    one: "DodgeBall",
    two: "Step Brothers",
    three: "The Hangover part 2",
    correctAnswer: "DodgeBall",
    image: "https://raw.githubusercontent.com/DC-Developer/TriviaGame/master/assets/images/nobody!.gif"
    //put a link to the gif that will display after the answer is guessed right
};
//store objects into array
storage[0]= question1;
storage[1]= question2;
storage[2]= question3;
storage[3]= question4;
storage[4]= question5;
storage[5]= question6;
//-------------------------------
//function declarations

//this one starts the program

function start(){
    iteration= 0;
    console.log("Started");
    $("#conButton").html("");
    outputObject();
    
    
}
function runTimer(){
    number = 10;
    if(intervalId === false){
      intervalId = setInterval(decrement, 1000);
}
}
function decrement() {
          
          number--;
    
          $("#conButton").html("<h2>" + number + "</h2>");
    
          if (number === 0) {
    
            stopTimer();
    
            
            missed++;
            
            iteration++;
            outputObject();
          }
         
}
    

function stopTimer(){
        
        clearInterval(intervalId);
            intervalId= false;
}
        
function outputObject(cycle){
    //iteration will loop through the array containing the objects
    //this object will also loop into the index of the next array object, based off a return value from the evalInput function
    
    if(iteration < storage.length){
                    $("#question").html("<section>"+storage[iteration].question+"</section>");
        
                    //dynamically create new buttons that will store in the answers 
                    //outputs the answers:
                    $("#question1").html("<button>"+storage[iteration].one+"</button>");
                    $("#question2").html("<button>"+storage[iteration].two+"</button>");
                    $("#question3").html("<button>"+storage[iteration].three+"</button>");
                    //need to set a bool variable that sets to true once user actually inputs to run getInput function
                    runTimer();
                    getInput(storage[iteration]);

    }else{

        end();
    }
            //outputs the question:

            



   
    
}
 //on user click, gets the value of the button and passes the value of that and the object into evalInput
function getInput(currentObj){
    //declare variable for userInput
    console.log(currentObj);
    var userInput= 0;
   
    
    $("button").on("click", function(){
        stopTimer();
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
        showGif(input, obj.correctAnswer, obj);
        
        
        console.log(iteration);
        
            setTimeout(function(){
                outputObject(iteration);
            }, 1000 * 2.5);

       
       
    }else{

        console.log(input);
        
        wrong++;

        showGif(input, obj.correctAnswer);
       
        
      
            setTimeout(function(){
                outputObject(iteration);
            }, 1000 * 2.5);

        
    }
    iteration++;
  
// add code that will show the gif associated with the right answer, then loop through the next object and dislay the new question object. all of this will be in a setTimeOut(), and after the countdown, will run the code
//function will also increment and this increment will be sent to the output function to use for the array "storage" index, accessing the next object in the array
//set limit to the amount code will loop based off the array length
}
//function will display image
function showGif(result,objCorrectAnswer, obj){
//first part will show gif if evaluated to true, second will just show a message saying incorrect and the right answer

if(result == objCorrectAnswer){
    //code will display gif to html
    var img = $('<img>');
    img.attr('src', obj.image);
    

    $("#question").html("");
    $("#question1").html("")
    $("#question2").html("")
    $("#question3").html("")
   //use object's stored gif
    $("#question").html(img);
    alert("Heyyyy bauceee, you got it!");
    
    console.log("Hooray you did it!");
    
}else{
    $("#question").html("");
    $("#question1").html("")
    $("#question2").html("")
    $("#question3").html("")
   
    $("#question").html('<iframe src="https://giphy.com/embed/1BXa2alBjrCXC" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>');
    $("#question3").html("The correct answer was: "+ objCorrectAnswer);

    
    console.log("Wrong!");
    console.log("Correct answer is: "+ objCorrectAnswer);
    
}


}

function end(){
    $("#question").html("");
    $("#question1").html("Questions correct: "+right);
    $("#question2").html("Questions wrong: "+ wrong);
    $("#question3").html("Questions missed: "+ missed);
    $("#conButton").html($("<button id=restart>Restart</button>"));

    $("#restart").on("click", function(){
        

        start();
    }); 

    alert("GAME ENDED");


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