const askButton = document.getElementById("askButton");
const questionInput = document.getElementById("questionInput");
const questionList = document.getElementById("questionList");
const questionCount = document.getElementById("questionCount");

const defaultQuestions = [
  "마그네슘은 자기 전에 먹어도 되나요?",
  "비타민D와 오메가3를 같이 먹어도 되나요?",
  "피로할 때 먹기 좋은 영양제는 무엇인가요?"
];

let userQuestions = JSON.parse(localStorage.getItem("userQuestions")) || [];

function saveUserQuestions() {
  localStorage.setItem("userQuestions", JSON.stringify(userQuestions));
}

function deleteQuestion(index) {
  userQuestions.splice(index, 1);
  saveUserQuestions();
  renderQuestions();
}

function renderQuestions() {
  questionList.innerHTML = "";

  defaultQuestions.forEach(function (question) {
    const newQuestion = document.createElement("li");
    newQuestion.textContent = question;
    questionList.appendChild(newQuestion);
    const totalCount = defaultQuestions.length + userQuestions.length;

questionCount.textContent = `전체 질문 ${totalCount}개 · 직접 추가한 질문 ${userQuestions.length}개`;
  });

  userQuestions.forEach(function (question, index) {
    const newQuestion = document.createElement("li");

    const questionText = document.createElement("span");
    questionText.textContent = question;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "삭제";
    deleteButton.className = "delete-button";

    deleteButton.addEventListener("click", function () {
      deleteQuestion(index);
    });

    newQuestion.appendChild(questionText);
    newQuestion.appendChild(deleteButton);

    questionList.appendChild(newQuestion);
  });
}

function addQuestion() {
  const questionText = questionInput.value.trim();

  if (questionText === "") {
    alert("질문을 입력해주세요!");
    return;
  }

  userQuestions.push(questionText);
  saveUserQuestions();
  renderQuestions();

  questionInput.value = "";
}

askButton.addEventListener("click", addQuestion);

questionInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addQuestion();
  }
});
renderQuestions();
