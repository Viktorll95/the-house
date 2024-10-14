"use strict";

/////////////
// Here is the clockfunction
const now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();
let clock = `${hours}:${minutes}`;
let triggerStroke = "";
let triggerStrokeFunc;

const clockEl = document.querySelector(".clock");

const updateClockEl = function (hours, minutes) {
  clock = `${String(hours).padStart(2, 0)}:${String(minutes).padStart(2, 0)}`;
  clockEl.textContent = clock;
  if (clock === triggerStroke) {
    triggerStrokeFunc();
    triggerStroke = undefined;
    return true;
  }
};

// Function that takes in a timeString (ex: "00:00") and a function that triggers at that time
const clockStrokeTrigger = function (minutesAndHoursString, func) {
  triggerStroke = minutesAndHoursString;
  triggerStrokeFunc = func;
};

// clockStrokeTrigger("18:30", () => {
//   console.log("test");
// });

const tick = setInterval(() => {
  seconds++;
  if (seconds === 60) {
    minutes++;
    seconds = 0;
    if (minutes === 60) {
      hours++;
      minutes = 0;
      if (hours === 24) hours = 0;
    }
  }
  updateClockEl(hours, minutes);
}, 1000);

function madClock() {
  const madInterval = setInterval(() => {
    const randomHours = String(Math.floor(Math.random() * 24)).padStart(2, "0");
    const randomMinutes = String(Math.floor(Math.random() * 60)).padStart(
      2,
      "0"
    );
    clockEl.textContent = `${randomHours}:${randomMinutes}`;
  }, 100);

  setTimeout(() => {
    clearInterval(madInterval);
    clearInterval(tick);
    clockEl.textContent = "06:66";
    hours = 6;
    minutes = 66;
    seconds = 0;
  }, 5000);
}

//////////
// Give the inputTime like this; fastForwardClock("00:00")
const fastForwardClock = function (minutesAndHoursString, nextfunction) {
  if (!nextfunction)
    console.error(
      "fastForwardClock requires a function value to be passed as a second argument"
    );

  let inputTime = minutesAndHoursString.split(":").map((unit) => Number(unit));

  // Regular expression to match the allowed formats
  const regex = /^(\d{1,2}):(\d{1,2})$/;
  // Test the input string against the regular expression
  if (!regex.test(input)) {
    console.error("Inputed string format is incorrect", minutesAndHoursString);
  }

  // If the time inputed is "18:48+29" ("Which becomes 18:77") this script makes it 19:27
  if (inputTime[1] >= 60) {
    inputTime[0] += Math.trunc(inputTime[1] / 60);
    inputTime[1] = inputTime[1] % 60;
  }
  if (inputTime[0] >= 24) inputTime[0] = inputTime[0] % 24;
  console.log(inputTime[0] + ":" + inputTime[1]);

  let diffHours =
    inputTime[0] - hours >= 0
      ? inputTime[0] - hours
      : inputTime[0] - hours + 24;
  let diffMinutes = inputTime[1] - minutes;

  if (diffMinutes < 0) {
    if (diffHours === 0 && diffMinutes < 0) {
      diffHours = 23;
    }
    diffMinutes = 60 + diffMinutes;
  }
  let totalDiffMinutes = diffHours * 60 + diffMinutes;

  let ffcIntervalPace = 10000 / (totalDiffMinutes + 1) ** 1.1;

  let delay = currTextDelayTotal + 2000;

  //TODO: This 'btnOpHide()'-function may cause bugs, but I don't think so (yet)
  btnOpHide();

  setTimeout(() => {
    ticTac.play();
    const flashClockBlueBg = setInterval(() => {
      clockEl.classList.contains("clock-blue-bgc")
        ? clockEl.classList.remove("clock-blue-bgc")
        : clockEl.classList.add("clock-blue-bgc");
    }, 500);

    const fastForward = setInterval(() => {
      minutes++;

      if (minutes >= 60) {
        hours += Math.trunc(minutes / 60);
        minutes = minutes % 60;
        diffHours--;
        if (hours >= 24) hours = hours % 24;
      }

      // Updates the clock-element. Returns true if "the time matches 'triggerStroke' and then stops the 'fastforward'-function'
      let stopFastForward = updateClockEl(hours, minutes);

      if (
        (inputTime[0] === hours && inputTime[1] === minutes) ||
        stopFastForward
      ) {
        clearInterval(fastForward);
        clearInterval(flashClockBlueBg);
        clockEl.classList.remove("clock-blue-bgc");
        ticTac.pause();
        setTimeout(() => {
          nextfunction();
        }, 2000);
      }
    }, ffcIntervalPace);
  }, delay);
};

///////////////

function extractUsername(sentence) {
  // Normalize input by trimming whitespace
  let trimmedSentence = sentence.trim();

  // Define a regex pattern to capture common phrases indicating a name
  let namePattern =
    /(?:my name is|im called|i'm called|name's|names|i am|i'm|im|call me|it's|it is|name is|they call me|go by)\s+([a-zA-Z]+)/i;

  // Execute the pattern on the input sentence
  let match = trimmedSentence.match(namePattern);

  // Check if a match was found with a common phrase
  if (match && match[1]) {
    // Capitalize the first letter of the username and return it
    return match[1].charAt(0).toUpperCase() + match[1].slice(1);
  }

  // If no match is found, check if the input is a standalone name
  let standaloneNamePattern = /^[a-zA-Z]+$/;
  if (standaloneNamePattern.test(trimmedSentence)) {
    // Capitalize the first letter of the standalone name and return it
    return trimmedSentence.charAt(0).toUpperCase() + trimmedSentence.slice(1);
  }

  // Check for a capitalized word in the sentence
  let capitalizedWordPattern = /\b[A-Z][a-z]*\b/;
  let capitalizedWordMatch = trimmedSentence.match(capitalizedWordPattern);
  if (capitalizedWordMatch) {
    return capitalizedWordMatch[0];
  }

  // If no name is found, return the sentence
  return sentence;
}

// A scary face message sent by the npc
const scaryFace = function () {
  madClock();
  setTimeout(() => {
    horrorMetallicScreeches.play();
    chatMessages.innerHTML += `<div class="message blue-bg dark">
  <div class="message-sender">Demon</div>
  <div class="message-text"> <img src="images/scary-face.jpg" alt=""> </div>
  <div class="message-timestamp">${hours}:${minutes}</div>
</div>`;
    setTimeout(() => {
      chatMessages.innerHTML += `<div class="message blue-bg dark">
  <div class="message-sender">Demon</div>
  <div class="message-text"> GAME OVER </div>
  <div class="message-timestamp">${hours}:${minutes}</div>
</div>`;
      chatMessages.lastElementChild.lastElementChild.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  }, 6500);
};

const restartMessage = function () {
  chatMessages.innerHTML += `<div class="message blue-bg bright">
  <div class="message-sender">Developer</div>
  <div class="message-text"> Press "restart" to restart the game</div>
  <div class="message-timestamp">${hours}:${minutes}</div>
</div>`;
  chatMessages.lastElementChild.scrollIntoView({ behavior: "smooth" });
};

const brightMessage = function (text, sender = "Developer", delay = 0) {
  chatMessages.innerHTML += `<div class="message blue-bg bright">
  <div class="message-sender">${sender}</div>
  <div class="message-text"> ${text}</div>
  <div class="message-timestamp">${hours}:${minutes}</div>
</div>`;
  chatMessages.lastElementChild.scrollIntoView({ behavior: "smooth" });
};

const endGameSuccess = function () {
  tada.play();
  brightMessage(
    `Congratulations! You made it to the end of the game and ${npcName} survived!`
  );

  brightMessage(`Press "Play again" if you want to play again`);

  btnOpShow(["Play again", "Play again", "Play again"]);
  setOpFn([restartGame, restartGame, restartGame]);
};

const endGameFail = function () {
  brightMessage(
    `Unfortunately you lost, and you won't know what happened to ${npcName}`
  );

  brightMessage(
    `Consider the choices you made and press "Play again" if you want to give it another try`
  );

  btnOpShow(["Play again", "Play again", "Play again"]);
  setOpFn([restartGame, restartGame, restartGame]);
};
