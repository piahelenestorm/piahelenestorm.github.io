let header = document.getElementById('header');

document.addEventListener('scroll', function() {
  
  // Get the scroll position
  let scrollPos = window.scrollY;
  if ( scrollPos > 140 ) {
    header.style.backgroundColor = "white";
  } else {
    header.style.backgroundColor = "transparent";
  }
 
});

function sleep(ms)  {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const phrases = ['beautiful', 'useful', 'pleasant', 'life-changing'];
const phrases2 = ["design for", "motivate", "inspire"];
const el = document.getElementById("typewriter");
const el2 = document.getElementById("typewriter2");

let sleepTime = 130;

let curPhraseIndex = 0;

const writeLoop = async () =>  {
    while (true) {
        let curWord = phrases[curPhraseIndex];

        for (let i = 0; i < curWord.length; i++) {
            el.innerText = curWord.substring(0, i + 1);
            await sleep(sleepTime);
        }
        await sleep(sleepTime * 10);

        for (let i = curWord.length; i > 0; i--) {
            el.innerText = curWord.substring(0, i - 1);
            await sleep(sleepTime);
        }

        await sleep(sleepTime * 5);

        if (curPhraseIndex === phrases.length - 1) {
            curPhraseIndex = 0;
        }
        else {
            curPhraseIndex++;
        }

    }
};
writeLoop();

const writeLoop2 = async () => {
    while (true) {
        let curWord = phrases2[curPhraseIndex];

        for (let i = 0; i < curWord.length; i++) {
            el2.innerText = curWord.substring(0, i + 1);
            await sleep(sleepTime);
        }
        await sleep(sleepTime * 10);

        for (let i = curWord.length; i > 0; i--) {
            el2.innerText = curWord.substring(0, i - 1);
            await sleep(sleepTime);
        }

        await sleep(sleepTime * 5);

        if (curPhraseIndex === phrases2.length - 1) {
            curPhraseIndex = 0;
        }
        else {
            curPhraseIndex++;
        }

    }
};

writeLoop2();


// Ruth Calendar Animation
var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  var cw = wordArray[currentWord];
  var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }
  
  for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }
  
  currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
  setTimeout(function() {
    cw[i].className = 'letter out';
  }, i*80);
}

function animateLetterIn(nw, i) {
  setTimeout(function() {
    nw[i].className = 'letter in';
  }, 340+(i*80));
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }
  
  wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 4000);
