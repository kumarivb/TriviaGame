// make sure JavaScript doesn't run until the HTML has finished loading
$(document).ready(function() {

// --------------------------- Variables -------------------
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
            correctAnsw: "30",
    },
];

var correctAnswCount;
var wrongAnswCount;
var unAnswCounter;

var timer;
var timerRunning = false;

var startBtn;

// -------------------- Functions and Processes -------------
    // initializeGame
    function initializeGame() {
        $("#startPage").show();
        $("#questionsContent").hide();
        $("#allDone").hide();
        correctAnswCounter = 0;
        wrongAnswCounter = 0;
        unAnswCounter = 0;

        // start button
        $("#startBtn").on("click", function() {
            $("#startPage").hide();
            $("#questionsContent").show();
            $("#allDone").hide();
        });
    };

    // timer


    // questions


    // done button










// -------------------- HTML --------------------------------






    initializeGame();
});