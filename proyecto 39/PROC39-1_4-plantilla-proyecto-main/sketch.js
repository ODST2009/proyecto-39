var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;

var question, contestant, quiz;

function setup() {
  canvas = createCanvas(850, 400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}

function draw() {
  background("pink");

  // Verifica si hay 2 concursantes y actualiza el estado del juego
  if (contestantCount === 2) {
    quiz.update(1); // Cambia el estado del juego a 1
  }

  // Si el estado del juego es 1, empieza la fase de "play"
  if (gameState === 1) {
    clear(); // Limpia el lienzo
    quiz.play(); // Llama al método play de la clase Quiz
  }
}
