var currentQuestionIndex = 0;

var questionWrap = document.querySelector("#questions");

var startWrap = document.querySelector("#start-screen");

var questionTitle = document.querySelector("#question-title");

var choicesWrap = document.querySelector("#choices");

var startButton = document.querySelector("#start");

startButton.addEventListener("click", startQuiz);

function startQuiz() {
  displayQuestion();
  startWrap.className = "hide";
  questionWrap.className = "show";
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
