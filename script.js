const askButton = document.getElementById("askButton");
const questionInput = document.getElementById("questionInput");
const questionList = document.getElementById("questionList");

let questions = JSON.parse(localStorage.getItem("questions")) || [];

function renderQuestions() {
  questionList.innerHTML = "";

  questions.forEach(function (question) {
    const newQuestion = document.createElement("li");
    newQuestion.textContent = question;
    questionList.appendChild(newQuestion);
  });
}

askButton.addEventListener("click", function () {
  const questionText = questionInput.value;

  if (questionText.trim() === "") {
    alert("질문을 입력해주세요!");
    return;
  }

  questions.push(questionText);

  localStorage.setItem("questions", JSON.stringify(questions));

  renderQuestions();

  questionInput.value = "";
});

renderQuestions();
