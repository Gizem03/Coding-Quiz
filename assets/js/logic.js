var currentQuestionIndex = 0;

var questionWrap = document.querySelector("#questions");

var startWrap = document.querySelector("#start-screen");

var questionTitle = document.querySelector("#question-title");

var choicesWrap = document.querySelector("#choices");

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
  var currentQuestion = questions[currentQuestionIndex];
  questionTitle.innerText = currentQuestion.title;
  for (var i = 0; i < currentQuestion.choices.length; i++) {
    var button = document.createElement("button");
    button.className = "choice";
    button.innerText = i + 1 + ".  " + currentQuestion.choices[i];
    choicesWrap.append(button);
  }
}
