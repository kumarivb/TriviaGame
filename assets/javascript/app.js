// make sure JavaScript doesn't run until the HTML has finished loading
$(document).ready(function() {

// --------------------------- Variables -------------------
var correctAnswCount;
var wrongAnswCount;
var unAnswCounter;

var timer = 60;
var timerCounter;

var countdown = function(){
    timerCounter = setInterval(decrement, 1000);
};

var stop = function(){
    clearInterval(timerCounter);
};

var decrement = function(){
    console.log(timer--);
    $('.timerContent').html('<h2>Time remaining: ' + timer + ' Seconds' + '</h2>');
    if (timer === 0) {
        stop();
        $("#triviaContent").hide();
        $("#allDone").show();
        console.log('out of time');
    };
};

var startBtn;

var questions = [
// question 1
    {
        question: "How many toes does a sloth have on each foot?",
        answers: ["4", "7", "3", "2"],
        correctAnsw: "3",
    },
// question 2
    {
        question: "How many times a week do sloths defecate?",
        answers: ["1", "2", "3", "4"],
        correctAnsw: "1",
    },
// question 3
    {
        question: "A sloth has a _-part stomach.",
        answers: ["3", "9", "6", "4"],
        correctAnsw: "4",
    },
// question 4
    {
        question: "Sloths are great swimmers.",
        answers: ["True", "False"],
        correctAnsw: "True",
    },
// question 5
    {
        question: "Sloths can live up to how many years?",
        answers: ["10", "20", "30", "40"],
        correctAnsw: "30",
    },
];

// -------------------- Functions and Processes -------------
    // initializeGame
    function initializeGame() {
        $("#startPage").show();
        $("#triviaContent").hide();
        $("#allDone").hide();
        correctAnswCounter = 0;
        wrongAnswCounter = 0;
        unAnswCounter = 0;
};

    // start button
    //$("#startBtn").click(countdown);
    $("#startBtn").on("click", function() {
        $("#startPage").hide();
        $("#triviaContent").show();
        $("#allDone").hide();
    });

    // questions
    for (var i = 0; i < questions.length; i ++) {
        $('.questionsContent').append(
            '<h2>' + questions[i].question + '</h2>');

    // answers, used var=j bacause I think it is standard practice
        for (var j = 0; j < questions[i].answers.length; j ++) {
            $('.answerContent').append(
                );
        };
    };


    // done button










// -------------------- HTML --------------------------------






    initializeGame();
});