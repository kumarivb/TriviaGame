// make sure JavaScript doesn't run until the HTML has finished loading
$(document).ready(function() {

// --------------------------- Variables -------------------
var correctAnswCount = 0;
var wrongAnswCount = 0;
var unAnswCount = 0;

// timer
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
    $('.timerContent').html('<h2>You only have ' + timer + ' seconds left!' + '</h2>');
    if (timer === 0) {
        stop();
        check();
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
    $("#startBtn").click(countdown);
    $("#startBtn").on("click", function() {
        $("#startPage").hide();
        $("#triviaContent").show();
        $("#allDone").hide();
    });

    // questions
    for (var i = 0; i < questions.length; i ++) {
        $('.questionsContent').append('<h3>' + questions[i].question + '</h3>');

    // answers, used var=j bacause I think it is standard practice
        for (var j = 0; j < questions[i].answers.length; j ++) {
            $('.questionsContent').append("<input type='radio' name='question-"+i+"' value='"+questions[i].answers[j]+"'>"+questions[i].answers[j]);
        };
    };

    // check if answer is correct
    function check() {
        $.each($("input[name='question-0']:checked"), function() {
            if($(this).val() == questions[0].correctAnsw) {
               correctAnswCount++;
            }
            else {
                wrongAnswCount++;
            }
        });

        $.each($("input[name='question-1']:checked"), function() {
            if($(this).val() == questions[1].correctAnsw) {
               correctAnswCount++;
            }
            else {
                wrongAnswCount++;
            }
        });

        $.each($("input[name='question-2']:checked"), function() {
            if($(this).val() == questions[2].correctAnsw) {
               correctAnswCount++;
            }
            else {
                wrongAnswCount++;
            }
        });

        $.each($("input[name='question-3']:checked"), function() {
            if($(this).val() == questions[3].correctAnsw) {
               correctAnswCount++;
            }
            else {
                wrongAnswCount++;
            }
        });

        $.each($("input[name='question-4']:checked"), function() {
            if($(this).val() == questions[4].correctAnsw) {
               correctAnswCount++;
            }
            else {
                wrongAnswCount++;
            }
        });
        console.log(correctAnswCount);
        console.log(wrongAnswCount);
        console.log(unAnswCount);
    };

    // done button
        $("#doneBtn").click(stop);
        $("#doneBtn").on("click", function() {
        $("#startPage").hide();
        $("#triviaContent").hide();
        $("#allDone").show();
        check();
    });

    // all done

        $(".done").html("<h2>Finished</h2>");
        $(".done").append("<h3>Correct Answers: "+correctAnswCount+"</h3>");
        $(".done").append("<h3>Wrong Answers: "+wrongAnswCount+"</h3>");
        $(".done").append("<h3>Unanswered Questions: "+(questions.length-(wrongAnswCount+correctAnswCount))+"</h3>");




// -------------------- HTML --------------------------------






    initializeGame();
});