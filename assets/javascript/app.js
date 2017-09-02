$(document).ready(function(){

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

var question1 ={
    question: "Who is the Rickest Rick?",
    one: "Evil Rick",
    two: "Doofus Rick",
    three: "Rick Sanchez",
    correctAnswer: "Rick Sanchez",
    image: "https://raw.githubusercontent.com/DC-Developer/TriviaGame/master/assets/images/rick.gif"
    
};
var question2 ={
    question: "Who's never going to dance again?",
    one: "A paraplegic",
    two: "George Michaels",
    three: "both",
    correctAnswer: "George Michaels",
    image: "https://raw.githubusercontent.com/DC-Developer/TriviaGame/master/assets/images/para.gif"
};
var question3 ={
    question: "How many questions are in this question?",
    one: 1,
    two: 2,
    three: 3,
    correctAnswer: 2,
    image: "https://raw.githubusercontent.com/DC-Developer/TriviaGame/master/assets/images/leo.gif"   
};
var question4 ={
    question: "If there are 6 apples and you take away 4, how many do you have??",
    one: "Ten",
    two: "The two that's left",
    three: "The four you took",
    correctAnswer: "The four you took",
    image: "https://raw.githubusercontent.com/DC-Developer/TriviaGame/master/assets/images/giphy.gif"   
};
var question5 ={
    question: "Who is the greatest actor to ever live?",
    one: "Bill Cosby",
    two: "Jean Claude Van Damme",
    three: "Russell Crowe",
    correctAnswer: "Russell Crowe",
    image: "https://raw.githubusercontent.com/DC-Developer/TriviaGame/master/assets/images/maximus.gif"
};
var question6 ={
    question: 'What movie is this line from?: "Nobody makes me bleed my own blood, nobody!"',
    one: "DodgeBall",
    two: "Step Brothers",
    three: "The Hangover part 2",
    correctAnswer: "DodgeBall",
    image: "https://raw.githubusercontent.com/DC-Developer/TriviaGame/master/assets/images/nobody!.gif"
};

storage[0]= question1;
storage[1]= question2;
storage[2]= question3;
storage[3]= question4;
storage[4]= question5;
storage[5]= question6;


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
   
    if(iteration < storage.length){
                    $("#question").html("<section>"+storage[iteration].question+"</section>");
                    $("#question1").html("<button>"+storage[iteration].one+"</button>");
                    $("#question2").html("<button>"+storage[iteration].two+"</button>");
                    $("#question3").html("<button>"+storage[iteration].three+"</button>");
                    runTimer();
                    getInput(storage[iteration]);
    }else{
        end();
    }
           
}

function getInput(currentObj){
    console.log(currentObj);
    var userInput= 0;
   
    $("button").on("click", function(){
        stopTimer();
        userInput= $(this).html();
        evalInput(userInput, currentObj);
       
    });
}

function evalInput(input, obj){
   
    if(input == obj.correctAnswer){
        right++;
        showGif(input, obj.correctAnswer, obj);
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
}

function showGif(result,objCorrectAnswer, obj){
if(result == objCorrectAnswer){
   
    var img = $('<img>');
    img.attr('src', obj.image);
    
    $("#question").html("");
    $("#question1").html("")
    $("#question2").html("")
    $("#question3").html("")
    $("#question2").html(img);
    $("#question3").html("Heyyyy bauceee, you got it!");    
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
    right = 0;
    wrong = 0;
    missed =0;
}
    $("#start").on("click", function(){
        start();
    });
});