//Global Variables

//Scores
var trivTime = 0;
var rightCount = 0;
var wrongCount = 0;
var qACount = 1;

//Functions

$("#timerBtn").click( function(){
    var counter = 5;
    setInterval(function() {
      counter--;
       if (counter >= 0) {
          span = document.getElementById("count");
       }
       if (counter === 0) {
          alert('Sorry, time is up!');
          clearInterval(counter);
        }
      }, 5000);
 });

 $("#submitBtn").click( function(){
 window.open("totals.html", "_self")
 });

var qA = {
    1:{
        question:'What artist sang the 1986 song “Danger Zone” from Top Gun?',
        answers:['Sting','Kenny Loggins','Michael Jackson'],
        correct:'Kenny Loggins',
        right: 'Correct!',
        wrong: 'Wrong!',
       },
    2:{
        question:'David Hasselhoff starred alongside a car named KITT in Knight Rider. What does KITT stand for?',
        answers:['Knight Industries Two Thousand','Knight Intelligence Transportation Technology','Knight Identity Transport Truck'],
        correct:'Knight Industries Two Thousand',
        right: 'Correct!',
        wrong: 'Wrong!',
    },
    3:{
        question:'on August 1, 1981, MTV launched, and the first video they ever played was this song.',
        answers:['Eye of the Tiger','Video Killed the Radio Star','Thriller'],
        correct:'Video Killed the Radio Star',
        right: 'Correct!',
        wrong: 'Wrong!',
    },
    4:{
        question:'What year does Marty McFly get sent back to in Back to the Future?',
        answers:['1960','1957','1955'],
        correct:'1955',
        right: 'Correct!',
        wrong: 'Wrong!',
    },
    5:{
        question:'The main character "Sonny" Crockett was played by this actor.',
        answers:['Don Johnson','Tom Cruise','Michael Douglas'],
        correct:'Don Johnson',
        right: 'Correct!',
        wrong: 'Wrong!',
    },
    6:{
        question:'This cult classic movie was released in what year?',
        answers:['1983','1985','1988'],
        correct:'1985',
        right: 'Correct!',
        wrong: 'Wrong!',
    },
    7:{
        question:'The four ghosts in this arcade game are Blinky, Pinky, Inky and ________?',
        answers:['Toru','Winky','Clyde'],
        correct:'Clyde',
        right: 'Correct!',
        wrong: 'Wrong!',
    },
};

//Timer