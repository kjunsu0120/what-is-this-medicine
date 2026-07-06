  const askButton = document.getElementById("askButton");
  const questionInput = document.getElementById("questionInput");
  const questionList = document.getElementById("questionList");

  askButton.addEventListener("click", function () {
    const questionText = questionInput.value;

    if (questionText.trim() === "") {
      alert("질문을 입력해주세요!");
      return;
    }

    const newQuestion = document.createElement("li");
    newQuestion.textContent = questionText;

    questionList.appendChild(newQuestion);

    questionInput.value = "";
  });
