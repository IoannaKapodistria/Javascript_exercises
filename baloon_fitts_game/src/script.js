//ο χρόνος τώρα σε ms
//current time in ms
let start = new Date().getTime();

//ο συνολικός χρόνος του παίχτη
//the player's total time
let totalTime = 0;

//ο αριθμός των προπαθειών
//number of attempts
let attempts = 0;

//το παιχνίδι τελειώνει μετά από τόσες προσπάθειες
//max attempts
const maxAttempts = 10;

var timeafterappear;
var timeofclick;

const restartButton = document.querySelector("#restart");

game_over1 = document.getElementById("gameOver");
//εμφάνισε τον πρώτο κύκλο
//show the first circle
window.onload = function () {
  restartButton.style.display = "block";
  game_over1.style.display = "none";
};

//επιστρέφει ένα τυχαίο χρώμα
//return a random color

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

//Εμφανίζει σε τυχαία θέση έναν κύκλο με τυχαία διάμετρο και χρώμα
//shows a circle in a random position with a random color
function makeShapeAppear() {
  timeafterappear = new Date().getTime();
  //Αντί για σταθερές τιμές, δώστε στις μεταβλητές top, left, width τυχαίες τιμές (που να έχουν νόημα),
  //ώστε οι κύκλοι να εμφανίζονται σε τυχαία θέση και με τυχαία διάμετρο (ούτε τεράστια, ούτε πάρα πολύ μικρή)
  //και να είναι πάντα μέσα στο πλαίσιο
  //Instead of fixed values, for top, left and width use random values (that are sensible), so that the circles
  //always appear in a random position and with a random size (not huge, not tiny) and always in the frame

  var shape = document.querySelector("#shape");
  shape.style.display = "block";
  shape.style.top = getRandomIntInclusive(0, 400); //500- maxwidth
  shape.style.left = getRandomIntInclusive(0, 700); //800-maxwidth
  shape.style.width = getRandomIntInclusive(60, 100);
  shape.style.height = shape.style.width;
  shape.style.backgroundColor = getRandomColor();
}

//περιμένει από 0 ως 2 δευτερόλεπτα και εμφανίζει έναν κύκλο
//waits 0 to 2 sec before showing the circle
function appearAfterDelay() {
  setTimeout(makeShapeAppear, getRandomIntInclusive(0, 2000));

  //προσθέστε κώδικα ώστε το σχήμα να εμφανίζεται μετά από τυχαίο διάστημα 0-2 δευτερολέπτων

  restartButton.style.display = "none";
}

//όταν ο παίχτης κάνει κλικ σε ένα σχήμα πρέπει να γίνουν μια σειρά από πράγματα...
//when the player clicks the shape ...
document.querySelector("#shape").onclick = function () {
  this.style.display = "none";
  timeofclick = new Date().getTime();
  //console.log(timeofclick);
  //console.log("t after appear is: ", timeafterappear);
  var diafora = (timeofclick - timeafterappear) / 1000;

  timeTaken = document.getElementById("timeTaken");
  timeTaken.innerHTML = " " + diafora + " sec";

  //console.log(diafora);
  totalTime += diafora;

  //console.log(totalTime);
  if (attempts < maxAttempts - 1) {
    attempts += 1;
    appearAfterDelay();
  } else {
    shape.style.display = "none";

    totalTime1 = document.getElementById("totalTime");
    totalTime1.innerHTML = " " + totalTime + " sec";

    //game_over1 = document.getElementById("gameOver");
    game_over1.style.display = "block";

    restartButton.style.display = "block";
  }
};

restartButton.addEventListener("click", function () {
  restart();
});

function restart() {
  //reset the global
  appearAfterDelay();

  game_over1.style.display = "none";
  attempts = 0;
  timeTaken = 0;
  totalTime = 0;
  document.querySelector("#timeTaken").innerHTML = "";
  document.querySelector("#totalTime").innerHTML = "";
}
