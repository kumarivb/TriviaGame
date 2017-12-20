// make sure JavaScript doesn't run until the HTML has finished loading
$(document).ready(function() {

// --------------------------- Variables -------------------
var correctAnswCount = 0;
var wrongAnswCount = 0;
var unAnswCounter = 0;
var clickedAnsw;

var timer = 60;
var timerCounter;

var countdown = function(){
    timerCounter = setInterval(decrement, 1000);
};

var stop = function(){
    clearInterval(timerCounter);
};

var decrement = function(){
    $('.timerContent').html('<h2>Time remaining: ' + timer + ' Seconds' + '</h2>');
    if (timer === 0) {
        stop();
        $("#triviaContent").hide();
        $("#allDone").show();
        console.log('3rd page');
    };
};

var startBtn;

var questions = [
// question 1
    {
        question: "How many toes does a sloth have on each foot?",
        answers: {
            a: "4",
            b: "7",
            c: "3",
            d: "2",
        },
            correctAnsw: "c",
    },
// question 2
    {
        question: "How many times a week do sloths defecate?",
        answers: {
            a: "1",
            b: "2",
            c: "3",
            d: "4",
        },
            correctAnsw: "a",
    },
// question 3
    {
        question: "A sloth has a _-part stomach.",
        answers: {
            a: "3",
            b: "9",
            c: "6",
            d: "4",
        },
            correctAnsw: "d",
    },
// question 4
    {
        question: "Sloths are great swimmers.",
        answers: {
            a: "True",
            b: "False",
        },
            correctAnsw: "a",
    },
// question 5
    {
        question: "Sloths can live up to how many years?",
        answers: {
            a: "10",
            b: "20",
            c: "30",
            d: "40",
        },
            correctAnsw: "c",
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
    $("#startBtn").click(countdown);
    $("#startBtn").on("click", function() {
        $("#startPage").hide();
        $("#triviaContent").show();
        $("#allDone").hide();
    });


    // timer
;

    // questions


    // done button










// -------------------- HTML --------------------------------






    initializeGame();
});