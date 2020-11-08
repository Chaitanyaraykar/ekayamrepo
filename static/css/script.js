const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function show_image(src) {
    var img = document.createElement("img");
    img.src = src;
    document.question.appendChild(img);
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}


const questions = [
  {
    question:'Which is the capital of India?', 
    answers: [
      {text: 'New Delhi', correct: true },
      { text: 'Kathmandu', correct: false },
      { text: 'Bonn', correct: false },
      { text: 'Paris', correct: false }

    ]
   
  },
  {
    question: 'Which is the capital of Australia ?',
    answers: [
      { text: 'Canberra', correct: true },
      { text: 'Brasilia', correct: false},
      { text: 'Bonn ', correct: false },
      { text: 'Ottawa', correct: false }
    ]
  },
  {
    question: 'Which is the capital of Brazila ?',
    answers: [
      { text: 'Canberra', correct: false },

      { text: 'Brasilia', correct:true },
      { text: 'Bonn', correct: false },
      { text: 'Paris', correct: false }
    ]
  },
  {
    question: 'Which is the capital of China?',
    answers: [
        { text: 'Beijing', correct: true },

        { text: 'New Delhi', correct:false },
        { text: 'Bonn', correct: false },
        { text: 'Paris', correct: false }

    ]
  },
  {
    question: 'Which is the capital of Nepal?',
    answers: [
        { text: 'Kathmandu', correct: true },

        { text: 'New Delhi', correct:false },
        { text: 'Bonn', correct: false },
        { text: 'Paris', correct: false }

    ]
  },
  {
    question: 'Which is the capital of Germany?',
    answers: [
        { text: 'Bonn', correct: true },

        { text: 'New Delhi', correct:false },
        { text: 'Canberra', correct: false },
        { text: 'Paris', correct: false }

    ]
  },
  {
    question: 'Which is the capital of Canada?',
    answers: [
        { text: 'Ottawa', correct: true },

        { text: 'New Delhi', correct:false },
        { text: 'Bonn', correct: false },
        { text: 'Paris', correct: false }

    ]
  },
  {
    question: 'Which is the capital of France?',
    answers: [
        { text: 'Paris', correct: true },

        { text: 'New Delhi', correct:false },
        { text: 'Bonn', correct: false },
        { text: 'Ottawa', correct: false }

    ]
  },
  {
    question: 'Which is the capital of Croatia?',
    answers: [
        { text: 'Zagreb', correct: true },

        { text: 'Nauru', correct:false },
        { text: 'Sharjah', correct: false },
        { text: 'Nelson', correct: false }

    ]
  },
  {
    question: 'Which is the capital of Sri Lanka?',
    answers: [
        { text: 'Colombo', correct: true },

        { text: 'Nauru', correct:false },
        { text: 'Sharjah', correct: false },
        { text: 'Nelson', correct: false }

    ]
  },
  {
    question: 'Which is the capital of Argentina?',
    answers: [
        { text: 'Buenos Aires', correct: true },

        { text: 'Auckland',correct:false },
        { text: 'Dunedin', correct: false },
        { text: 'Trincomalee', correct: false }

    ]
  },
  {
    question: 'Which is the capital of New Zealand?',
    answers: [
        { text: 'wellington', correct: true },

        { text: 'Bandung',correct:false },
        { text: 'Dunedin', correct: false },
        { text: 'Trincomalee', correct: false }

    ]
  },
  {
    question: 'Which is the capital of Indonesia?',
    answers: [
        { text: 'Jakarta', correct: true },

        { text: ' Zadar', correct:false },
        { text: 'Kandy', correct: false },
        { text: 'Split', correct: false }

    ]
  }

  
 
]