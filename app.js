

const text = document.getElementById('text');
const bird1 = document.getElementById('bird1');
const bird2 = document.getElementById('bird2');
const forest = document.getElementById('forest');
const btn = document.getElementById('btn');
const rocks = document.getElementById('rocks');
const header = document.getElementById('header');

$(document).ready(function() {
    let images = [

        "img/image2.png",
        "img/image1.png"
    ];
    var i = 0;
    window.setInterval(function() {
        $('.image').attr("src", images[i]);
        i = (i==images.length-1) ? 0 : i+1;
    }, 3000);
});

window.addEventListener('scroll', () => {
     const value = window.scrollY;

     text.style.top = 50 + value * -0.5 + '%';
     bird1.style.top = value * -1.5 + 'px';
     bird1.style.left =value * 2 + 'px';
     bird2.style.top = value * -1.5 + 'px';
     bird2.style.left = value * -5 + 'px';
     btn.style.marginTop = value * 1.5 + 'px';
     rocks.style.top = value * -0.12 + 'px';
     forest.style.top = value * 0.25 + 'px';
     header.style.top = value * 0.5 + 'px'
})




const quizData = [
    {
        question: 'Choisir l information réelle',
        options: [' Le changement climatique n est pas dû à l homme.', 'Le changement climatique est dû à l homme.'],
        answer: 'Le changement climatique est dû à l homme.',
    },
    {
        question: 'Choisir l information réelle',
        options: [
            'La nature se régulera seule.',
            'La nature ne se régulera pas seule.',
        ],
        answer: 'La nature ne se régulera pas seule.',
    },
   ];
   
   const quizContainer = document.getElementById('quiz');
   const resultContainer = document.getElementById('result');
   const submitButton = document.getElementById('submit');
   const retryButton = document.getElementById('retry');
   const showAnswerButton = document.getElementById('showAnswer');
   
   let currentQuestion = 0;
   let score = 0;
   let incorrectAnswers = [];
   
   function shuffleArray(array) {
     for (let i = array.length - 1; i > 0; i--) {
       const j = Math.floor(Math.random() * (i + 1));
       [array[i], array[j]] = [array[j], array[i]];
     }
   }
   
   function displayQuestion() {
     const questionData = quizData[currentQuestion];
   
     const questionElement = document.createElement('div');
     questionElement.className = 'question';
     questionElement.innerHTML = questionData.question;
   
     const optionsElement = document.createElement('div');
     optionsElement.className = 'options';
   
     const shuffledOptions = [...questionData.options];
     shuffleArray(shuffledOptions);
   
     for (let i = 0; i < shuffledOptions.length; i++) {
       const option = document.createElement('label');
       option.className = 'option';
   
       const radio = document.createElement('input');
       radio.type = 'radio';
       radio.name = 'quiz';
       radio.value = shuffledOptions[i];
   
       const optionText = document.createTextNode(shuffledOptions[i]);
   
       option.appendChild(radio);
       option.appendChild(optionText);
       optionsElement.appendChild(option);
     }
   
     quizContainer.innerHTML = '';
     quizContainer.appendChild(questionElement);
     quizContainer.appendChild(optionsElement);
   }
   
   function checkAnswer() {
     const selectedOption = document.querySelector('input[name="quiz"]:checked');
     if (selectedOption) {
       const answer = selectedOption.value;
       if (answer === quizData[currentQuestion].answer) {
         score++;
       } else {
         incorrectAnswers.push({
           question: quizData[currentQuestion].question,
           incorrectAnswer: answer,
           correctAnswer: quizData[currentQuestion].answer,
         });
       }
       currentQuestion++;
       selectedOption.checked = false;
       if (currentQuestion < quizData.length) {
         displayQuestion();
       } else {
         displayResult();
       }
     }
   }
   
   function displayResult() {
     quizContainer.style.display = 'none';
     submitButton.style.display = 'none';
     retryButton.style.display = 'inline-block';
     showAnswerButton.style.display = 'inline-block';
     resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}!`;
   }
   
   function retryQuiz() {
     currentQuestion = 0;
     score = 0;
     incorrectAnswers = [];
     quizContainer.style.display = 'block';
     submitButton.style.display = 'inline-block';
     retryButton.style.display = 'none';
     showAnswerButton.style.display = 'none';
     resultContainer.innerHTML = '';
     displayQuestion();
   }
   
   function showAnswer() {
     quizContainer.style.display = 'none';
     submitButton.style.display = 'none';
     retryButton.style.display = 'inline-block';
     showAnswerButton.style.display = 'none';
   
     let incorrectAnswersHtml = '';
     for (let i = 0; i < incorrectAnswers.length; i++) {
       incorrectAnswersHtml += `
         <p>
           <strong>Question:</strong> ${incorrectAnswers[i].question}<br>
           <strong>Your Answer:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
           <strong>Correct Answer:</strong> ${incorrectAnswers[i].correctAnswer}
         </p>
       `;
     }
   
     resultContainer.innerHTML = `
       <p>You scored ${score} out of ${quizData.length}!</p>
       <p>Incorrect Answers:</p>
       ${incorrectAnswersHtml}
     `;
   }
   
   submitButton.addEventListener('click', checkAnswer);
   retryButton.addEventListener('click', retryQuiz);
   showAnswerButton.addEventListener('click', showAnswer);
   
   displayQuestion();



   const bouton = document.getElementById('monBouton');

   bouton.addEventListener('mouseover', () => {
     bouton.classList.add('moved');
   });
   
   bouton.addEventListener('mouseout', () => {
     bouton.classList.remove('moved');
   });




/*theme*/


   // script.js

const colors = [
     ['#fa845c', '#FFB399'],
     ['#528dd9', '#FF0000'],
     ['#FFFACD', '#00FFFF'],
     ['#E6E6FA', '#FF1493']
   ];
   
   function getRandomInt(max) {
     return Math.floor(Math.random() * max);
   }
   
   function changeTheme() {
     const randomIndex = getRandomInt(colors.length);
     const [bgColor, textColor] = colors[randomIndex];
   
     document.body.style.backgroundColor = bgColor;
     document.querySelectorAll('h1, p').forEach(element => {
       element.style.color = textColor;
     });
   }
   
   // Changer le thème aléatoirement lors du chargement initial de la page
   window.addEventListener('load', changeTheme);





   // Fonction pour déplacer aléatoirement les lettres du titre
function bounceLetters() {
     const title = document.getElementById('bouncingTitle');
     const letters = title.textContent.split('');
     title.textContent = '';
   
     letters.forEach((letter, index) => {
       const span = document.createElement('span');
       span.textContent = letter;
       span.style.position = 'relative';
       span.style.top = '0';
   
       const randomDelay = Math.random() * 1000; // Délai aléatoire pour chaque lettre (en millisecondes)
       const randomDuration = (Math.random() * 2) + 1; // Durée aléatoire pour chaque lettre (en secondes)
   
       setTimeout(() => {
         span.style.top = `${Math.random() * 200 - 100}px`; // Déplacement vertical aléatoire
         span.style.transition = `top ${randomDuration}s ease-in-out`;
       }, randomDelay);
   
       title.appendChild(span);
     });
   }
   
   // Appel de la fonction après un délai spécifique (par exemple, 3 secondes)
   setTimeout(bounceLetters, 3000);
   

   
   