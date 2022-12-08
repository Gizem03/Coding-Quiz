var currentQuestionIndex = 0;

var questionWrap = document.querySelector("#questions");

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
  console.log(choice, currentQuestion);
  // check choice against answer of the current question
  var result = choice === currentQuestion.answer;

  // write the result back to html feedback id div add set time out
  feedback.innerHTML = result;
  feedback.className = "show";
  setTimeout(function () {
    feedback.className = "hide";
    //move on to next question
    currentQuestionIndex++;
    // call display question
    displayQuestion();
  }, 1000);

  //TODO calculate score and time
}
