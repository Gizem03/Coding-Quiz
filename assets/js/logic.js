var currentQuestionIndex = 0;

var questionWrap = document.querySelector("#questions");
var endScreen = document.querySelector("#end-screen");
var finalScore = document.querySelector("#final-score");

var startWrap = document.querySelector("#start-screen");

var questionTitle = document.querySelector("#question-title");

var choicesWrap = document.querySelector("#choices");

var feedback = document.getElementById("feedback");

var startButton = document.querySelector("#start");

startButton.addEventListener("click", startQuiz);

var startingTime = 90;

var currentTime = startingTime;

var intervalId;

function updateTime() {
  currentTime--;
  document.getElementById("time").innerHTML = currentTime;
  if (currentTime === 0) {
    clearInterval(intervalId);
  }
}

function startQuiz() {
  displayQuestion();
  startWrap.className = "hide";
  questionWrap.className = "show";
  intervalId = setInterval(updateTime, 1000);
}

function displayQuestion() {
  // todo check if you are at the end of the quiz
  if (currentQuestionIndex === questions.length) {
    // we are at the end

    questionWrap.className = "hide";
    endScreen.className = "show";

    // stop the timer
    clearInterval(intervalId);
    // use the remaining time as score?
    finalScore.innerText = currentTime;

    return;
  }
  var currentQuestion = questions[currentQuestionIndex];
  questionTitle.innerText = currentQuestion.title;
  choicesWrap.innerHTML = "";
  for (let i = 0; i < currentQuestion.choices.length; i++) {
    var button = document.createElement("button");
    button.className = "choice";
    button.innerText = i + 1 + ".  " + currentQuestion.choices[i];
    button.addEventListener("click", function () {
      checkAnswer(currentQuestion.choices[i]);
    });
    choicesWrap.append(button);
  }
}

function checkAnswer(choice) {
  //get the current question
  var currentQuestion = questions[currentQuestionIndex];

  // check choice against answer of the current question
  var result = choice === currentQuestion.answer;
  if (result === false) {
    currentTime = currentTime - 10;
  }
  // write the result back to html feedback id div add set time out
  feedback.innerText = result;
  feedback.className = "feedback show";
  setTimeout(function () {
    feedback.className = "hide";
    //move on to next question
    currentQuestionIndex++;
    // call display question
    displayQuestion();
  }, 1000);
}
