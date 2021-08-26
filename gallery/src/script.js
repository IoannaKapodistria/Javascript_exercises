// Στο εξωτερικό αρχείο vouna.js περιέχεται ένας πίνακας πινάκων δύο στοιχείων,
// το πρώτο από τα οποία είναι μια περιγραφή ενός προορισμού σε Ελλληνικό βουνό
// και το δεύτερο ένα σχετικό URL μιας φωτογραφίας αντίστοιχα στον φάκελο ./img.

function onLoad() {
  var thumbs = document.querySelector(".container > div.mikrografies");
  var array = vouna;

  shuffleArray(array);

  for (let i = 0; i < array.length; i++) {
    var img = document.createElement("img");
    img.src = array[i][1];
    img.setAttribute("title", array[i][0]);

    thumbs.appendChild(img);
  }
}

onLoad();

// Όταν φορτώνει η εφαρμογή, η επιλεγμένη μικρογραφία είναι η 1η στον πίνακα
// thumbs.
// Κάθε μικρογραφία μπορεί να κλικαριστεί. Όταν γίνεται αυτό θα εκτελείται
// η συνάρτηση imgActivate()
const thumbs = document.querySelectorAll(".mikrografies img");
for (let i = 0; i < thumbs.length; i++) {
  var selected_photo = thumbs[i];

  selected_photo.addEventListener("click", imgActivate);
}
// Η συνάρτηση, που καλείται όταν γίνει κλικ σε μια από τις εικόνες του πίνακα
// thumbs, έχει σαν όρισμα ένα event object. Η συνάρτηση:
// - εμφανίζει στην περιοχή panel-main τη μικρογραφία που μόλις πατήθηκε
// - φροντίζει ώστε μόνο η μικρογραφία που μόλις πατήθηκε να έχει διαφάνεια 50%

function imgActivate() {
  let panel = document.querySelector(".panel-main");
  let thumbs = document.querySelectorAll(".mikrografies");
  //thumbs.forEach((element) => element.classList.remove("activeThumb"));
  panel.lastElementChild.remove();

  copy = this.cloneNode(true);

  panel.append(copy);

  var perigrafi = document.querySelector(".container > div.perigrafi");

  for (i in vouna) {
    if (vouna[i][1] == "." + this.src.toString().match(/\/img\/.+\.jpg$/)) {
      console.log("to brika");
      var div = document.createElement("div");
      div.innerHTML = vouna[i][0];
      perigrafi.append(div);
    }
  }

  if (perigrafi.children.length > 1) {
    perigrafi.firstElementChild.remove();
  }
  //this.classList.add("activeThumb");
}

function newPhoto() {
  var thumbs = document.querySelectorAll(".mikrografies img");
  var i = getRandomInt(0, thumbs.length);
  thumbs[i].click();
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

var nea_photo = document.getElementById("nea_photo");
nea_photo.addEventListener("click", newPhoto);
// Επιστρέφει τον πίνακα arr με τυχαία διάταξη στοιχείων
// Returns a shuffled copy of array arr
//shuffle array https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

var proigumeni_photo = document.getElementById("proigumeni_photo");
proigumeni_photo.addEventListener("click", previousPhoto);

function previousPhoto() {
  var thumbs = document.querySelectorAll(".mikrografies img");
  var photo = document.querySelector(".panel-main").firstElementChild;

  for (let i = 0; i < thumbs.length; i++) {
    if (photo.src == thumbs[i].src) {
      if (i != 0) {
        thumbs[i - 1].click();
      } else {
        thumbs[thumbs.length - 1].click();
      }
    }
  }
}

var next_photo = document.getElementById("epomeni_photo");
next_photo.addEventListener("click", nextPhoto);

function nextPhoto() {
  var thumbs = document.querySelectorAll(".mikrografies img");
  var photo = document.querySelector(".panel-main").firstElementChild;

  for (let i = 0; i < thumbs.length; i++) {
    if (photo.src == thumbs[i].src) {
      if (i != thumbs.length - 1) {
        thumbs[i + 1].click();
      } else {
        thumbs[0].click();
      }
    }
  }
}
