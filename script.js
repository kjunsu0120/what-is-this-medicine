const askButton = document.getElementById("askButton");
const questionInput = document.getElementById("questionInput");
const questionList = document.getElementById("questionList");

const defaultQuestions = [
  "마그네슘은 자기 전에 먹어도 되나요?",
  "비타민D와 오메가3를 같이 먹어도 되나요?",
  "피로할 때 먹기 좋은 영양제는 무엇인가요?"
];

let userQuestions = JSON.parse(localStorage.getItem("userQuestions")) || [];

function saveUserQuestions() {
  localStorage.setItem("userQuestions", JSON.stringify(userQuestions));
}

function renderQuestions() {
  questionList.innerHTML = "";

  defaultQuestions.forEach(function (question) {
    const newQuestion = document.createElement("li");
    newQuestion.textContent = question;
    questionList.appendChild(newQuestion);
  });

  userQuestions.forEach(function (question) {
    const newQuestion = document.createElement("li");
    newQuestion.textContent = question;
    questionList.appendChild(newQuestion);
  });
}

askButton.addEventListener("click", function () {
  const questionText = questionInput.value.trim();

  if (questionText === "") {
    alert("질문을 입력해주세요!");
    return;
  }

  userQuestions.push(questionText);
  saveUserQuestions();
  renderQuestions();

  questionInput.value = "";
});

renderQuestions();
