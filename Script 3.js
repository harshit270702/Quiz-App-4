const quizData = [
    {
        question:"How many hearts does an Octopus Have?",
        options: ["Two","Three","One","Zero"],
        answer:"Three"
    },
    {
      question: "How many legs do insects have?",
      options: ["Six", "One", "Three", "Four"],
      answer: "Six"
    },
    {
      question: "How many days are there in a year?",
      options: ["363", "364", "365", "366"],
      answer: "365"
    },
    {
      question: "Which animal is known as the 'King of the Jungle'?",
      options: ["Lion", "Elephant", "Tiger", "Giraffe"],
      answer: "Lion"
    }
  ];
  
  const questionElement = document.querySelector(".question");
  const optionsElement = document.querySelector(".options");
  const submitButton = document.getElementById("submit-btn");
  const resultElement = document.querySelector(".result");
  
  let currentQuestion = 0;
  let score = 0;
  
  function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.textContent = currentQuizData.question;
    optionsElement.innerHTML = '';
  
    for (const option of currentQuizData.options) {
      const radioInput = document.createElement("input");
      radioInput.setAttribute("type", "radio");
      radioInput.setAttribute("name", "option");
      radioInput.setAttribute("value", option);
  
      const label = document.createElement("label");
      label.textContent = option;
      label.appendChild(radioInput);
  
      optionsElement.appendChild(label);
    }
  }
  
  function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
  
    if (!selectedOption) {
      return;
    }
  
    const userAnswer = selectedOption.value;
    const currentQuizData = quizData[currentQuestion];
  
    if (userAnswer === currentQuizData.answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    optionsElement.innerHTML = '';
    submitButton.style.display = 'none';
    resultElement.textContent = `You scored ${score} out of ${quizData.length} questions.`;
  }
  
  loadQuestion();
  submitButton.addEventListener("click", checkAnswer);