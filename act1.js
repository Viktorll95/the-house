"use strict";

// Variable that holds the rules, so they won't have to be written again
let rules;
// Variable that keeps track if the player has read the rules
let hasReadRules = false;
let isHungry = true;
let likesPlayer = 0;
let isPissed = false;
let orderedPizza = false;
let pizzaOrderedStr = "";

/////////////////////////////
// The game itself:

const startStory = function () {
  // FIXME:FIXME:FIXME: Uncomment "pre.part1();" and comment out the other function
  pre.part1();
  ////////////////////
  // npcName = "Anna";
  // a3.p1();
  // a2F.part33();
  // a2End.a2EndPart();
  // storyFailDemon.part1();
};

const askToRestart = function () {
  setTimeout(() => {
    restartMessage();
    setOpFn([restartGame]);
  }, 1000);
};

const pre = {
  part1: function () {
    npcName = "Anna";
    // The "rules" variable needs to be set after the npc is given a name
    rules = `Dear ${npcName},
<br>
<br>
Thank you for taking on this overnight task. As always, your safety and the security of the house are of utmost importance. Please adhere strictly to the following rules:
<br>
<br>
1. Close all windows and doors before midnight (00:00).
<br>
2. Do not, under any circumstances, open the door or windows between 00:00 and 06:00.
<br>
3. If your things aren’t where you left them, calmly leave the room, and when you return, they should be back.
<br>
  4. If any of the paintings are upside down, burn them immediately.
  <br>
  5. Do not turn on the radio, if it turns on by itself, turn it off.
  <br>
  6. If you find notes with more rules, follow them, if they are signed by me "Mr. Whitaker", otherwise, don't follow them.
  <br>
  <br>
  Remember, follow these rules exactly as they are. Your safety depends on it.
  <br>
  Thank you for your diligence and discretion. I trust you will find everything in order.
  <br>
  <br>
  Best regards,
  <br>
  Mr. Whitaker`;
    npcMessage(
      `Okay ${playerName}, so this is going to sound wierd but I'll just go for it`
    );
    npcMessage(
      "Just to start, I'm a poor-ish young girl (student-life yay) and I found this job but I would like some advice, okay?"
    );
    npcMessageAndSetOptText(
      "Ready to answer?",
      ["Of course", "Okay", "Not sure"],
      2000
    );
    setOpFn([pre.part2, pre.part2, pre.part2]);
    setOpNpcCom([
      "I'm so glad to hear that",
      "Thanks alot",
      "Okay, well, since you're responding I'm just gonna keep going",
    ]);
  },

  part2: function () {
    npcMessage("First some background");
    npcMessage(
      `So as I said, I’m a student and don’t have much money so naturally I needed to find work.`
    );
    npcMessage(
      `I’ve worked as a barista and as a fast-food staff, and it worked for the time being`
    );
    npcMessage(
      `But running back and forth, breaking my back for (some) screaming customers and coming home smelling like coffee or french fries gets a bit old`
    );
    npcMessage(
      `Especially those days I have to finish assignments later in the evening.`
    );
    npcMessage(`Sorry for the bible 😅`);
    npcMessageAndSetOptText(
      "And now I have actually found a really good gig, and I make decent money too, but there’s a catch",
      [
        "What catch?",
        "Well naturally since we’re texting",
        "Catch is selling your used socks?",
      ]
    );
    setOpFn([pre.part3, pre.part3, pre.part3]);
    setOpNpcCom([
      "Sounds so silly but…",
      "Mhm",
      `Ew no ${playerName}, now I know where your head is at`,
    ]);
  },

  part3: function () {
    npcMessageAndSetOptText(
      "The thing is I do certain tasks for this guy, usually just watching a house. Like just sitting in it.",
      ["Doesn’t sound too weird", "There must be more?", "Where do I sign up??"]
    );
    setOpFn([pre.part4, pre.part4, pre.part4]);
    setOpNpcCom([
      "Well yes, and no",
      "There is",
      "Haha, we don’t live in the same town. I checked 😉",
    ]);
  },

  part4: function () {
    npcMessage(
      "So when I watch his houses, because there seem to be a lot, there are almost always some sorts of rules I have to follow."
    );
    npcMessage(
      `Like “If the attic room is closed, you must also close the door to the cellar” or “check for milk in the refrigerator, if there is milk put on the kitchen sink, otherwise, leave it of for the rest of the stay”`
    );
    npcMessageAndSetOptText("The last one was actually during my last visit", [
      "Do you always follow the rules?",
      "Sounds silly",
      "I’m guessing you have more work planned?",
    ]);
    setOpFn([pre.part5, pre.part5, pre.part5]);
    setOpNpcCom([
      "Yes, always.",
      "Yeah haha, sure does, but I figured I need to follow them anyway",
      "That’s right!",
    ]);
  },

  part5: function () {
    npcMessage(
      "The thing is Mr. Whitaker (the guy), does not strike me as a person you want to disobey, and he has always paid me really good money for what seems to be easy work, although there are some strange rules."
    );
    npcMessageAndSetOptText(
      "And more importantly, he has never tried anything weird",
      [
        "How did you meet him?",
        "I’m sensing some red flags here!",
        "Okay but what’s up this time?",
      ]
    );
    setOpFn([pre.part6, pre.part6, pre.part7]);
    setOpNpcCom([
      "He posted a paper on like an notice board in my town. I just read it and called his number and that was it!",
      "I totally see where you are coming from, but I’ve done this like six times now, and he paid me an all is weel!",
      `I’ll tell you`,
    ]);
  },

  part6: function () {
    npcMessage(
      `I’ve only met Whitaker one time, otherwise he usually leaves the keys in the garden or something and tells me where to pick them up from.`
    );
    npcMessage(
      `This time I’m actually going to pick up the keys from one of Whitakers… Friends? Anyway I got some weird rules as per usual`
    );
    npcMessageAndSetOptText(
      `When I pull up on the driveway, I need to follow specific rules, I'm gonna tell you them later and then you need to help me with them. Okay?`,
      ["Got it", "Are you gonna do it?", "Seems stupid this"]
    ),
      setOpFn([pre.part7, pre.part7, pre.part7]),
      setOpNpcCom([
        "Nice",
        "Ofc, and you are going to help me! 😀",
        "Do you think? Also...",
      ]);
  },

  part7: function () {
    npcMessage(
      "One thing that is out of the ordinary this time is that I’ve actually been ordered to stay over the night, which is my first time staying during nighttime"
    );
    npcMessage(
      "Whitaker expressed how sorry he is that I have to during the night, and says that I will never have to work at night again"
    );
    npcMessageAndSetOptText(
      "I'm getting paid 1000€ for just this night, good deal right?",
      [
        "Absolutely!",
        "Wow, good money!, But it sounds weird",
        "No, don’t do it",
      ]
    );
    setOpFn([act1.part3, act1.part3, act1.part3]);
    setOpNpcCom([
      "Nice! I knew I got a good feeling from you!",
      "Right? But it seems a little wierd. Anyway it’s only one night and as you said, good money!",
      "Well… I really needed the cash since college expenses are piling up, and this job pays really well. Plus, it’s only one night.",
    ]);
  },

  part2b: function () {
    npcMessageAndSetOptText("How hard can it be?", [
      "Well, I got a bad feeling but okay",
      "How much does it pay?",
      "DON'T",
    ]);
    setOpNpcCom([
      "To be honest, me too, but if I'm on alert, and you'll help me, I'm sure it will be fine",
      "I told you, 1000 €! A night!",
    ]);
    setOpFn([pre.part3, pre.part3, pre.part2c]);
  },

  part2c: function () {
    npcMessageAndSetOptText("Weeell okay I won't I guess?", [
      "Well when I think about it. The money is pretty good...",
      "Just kidding, do it!",
      "Yes, absolutely do not do it",
    ]);
    setOpNpcCom([
      "It sure is!",
      "Mhm... I see you are quite the character. Anyway...",
    ]);
    setOpFn([pre.part3, pre.part3, pre.part2d]);
  },

  part2d: function () {
    npcMessageAndSetOptText("Are you sure?", [
      "Yes I am sure",
      "If you want to die then do it",
      "I mean it's your choice",
    ]);
    setOpNpcCom([
      "Okay, well then, I guess that's that then. Bye!",
      "Well argued, okay then I won't",
      "It sure is and you know what? I'll do it",
    ]);
    setOpFn([pre.part2eQuit, pre.part2eQuit, story.part2eContinue]);
  },

  part2eContinue() {
    npcMessage(
      "There’s just one weird rule. I can't open the door between midnight and 6 AM. No matter what. He was really serious about it. Kind of spooky, right? But hey, rules are rules."
    );
    story.part3();
  },

  part2eQuit: function () {
    npcMessageAndSetOptText("I hope you have a great day then. Bye!", [
      "Bye!",
      "See ya!",
      "Good riddance...",
    ]);
  },
};

/////////////////////////////////////////////////////////////////////////////////////////

const act1 = {
  part3: function () {
    npcMessage(
      "The place itself is an old, kind of creepy house on the outskirts of town."
    );
    npcMessageAndSetOptText(
      "The owner, Mr. Whitaker told me to pull up by his friends house, honk the horn one time, wait for four minutes and then go to the front door and knock eight times.",
      [
        "A bit weird but okay",
        "Just do it, it will be fine",
        "This is how horror movies begin",
      ]
    );
    setOpNpcCom([
      "Sure is, but I’m sure it will be fine",
      "I'm sure of it, but I do feel it's a bit wierd",
      hours > 7 && hours < 20
        ? `Chillout ${playerName}, it’s not even dark yet :)`
        : `Chillout ${playerName}, it will be fine :)`,
    ]);
    setOpFn([act1.part4pre]);
  },

  part4pre: function () {
    if (hours > 19) {
      npcMessage("I'll text you tomorrow when I'm at the house!");
      npcMessage("It will be around 19");
    } else if (hours < 19 && hours >= 17) {
      npcMessage("I'm actually there soon, text you in a bit!");
    } else if (hours < 17 && hours > 12) {
      npcMessage(
        "I'll be there this evening at around 19. I'll text you when I'm there"
      );
    } else if (hours < 6) {
      npcMessage(
        "Sorry for keeping you up at this hour. I'll text you at about 19 when I'm picking up the keys"
      );
    } else {
      npcMessage("I'll text you at about 19 when I'm picking up the keys");
    }
    npcMessage("😉");
    fastForwardClock("19:03", act1.part4);
  },

  part4: function () {
    npcMessage("Okay there we go... What a wierd house"); //TODO: Maybe insert a picture of a house?
    npcMessage(
      "So we where suppose to honk right. Hope the police is not around haha 😅"
    );
    npcMessageAndSetOptText("Okay so let’s honk. How many times?", [
      "One time",
      "Two times",
      "Three times",
    ]);
    setOpFn([act1.part4b, act1.part4b, act1.part4b]);
    setOpNpcCom(["Okay, done"], "Hope that it was the right amount");
  },

  succes: true,

  part4b: function () {
    opt.userChoice === 0 ? (act1.succes = true) : (act1.succes = true);
    npcMessageAndSetOptText(
      "Sooo should we wait in the car or just head out?",
      [
        "Just head out",
        "Wait four minutes in the car",
        "Wait nine minutes in the car",
      ]
    );

    setOpFn([act1.part4c, act1.part4c, act1.part4c]);
    setOpNpcCom([
      "No time to waste!",
      "You'll be hearing from me in four minutes then!",
      "You'll be hearing from me in nine minutes then!",
    ]);
  },

  part4c: function () {
    opt.userChoice[1] && act1.succes
      ? (act1.succes = true)
      : (act1.succes = false);
    if (opt.userChoice[0]) {
      act1.part4d();
    } else if (opt.userChoice[1]) {
      fastForwardClock(`${hours}:${minutes + 4}`, act1.part4d);
    } else if (opt.userChoice[2]) {
      fastForwardClock(`${hours}:${minutes + 9}`, act1.part4d);
    }
  },

  part4d: function () {
    if (opt.userChoice[1] || opt.userChoice[2]) {
      npcMessage("Done with that then!");
    }
    npcMessage("Heading towards the front door now!");
    npcMessage(
      "Seems like an odd place to have a house but the house is even weirder. Or it’s actually really nice. Like an well-kept 1800-house with two stories. But it doesn't all fit the… shady neighborhood."
    );
    npcMessage(`<img src="images/entre.png" alt="">`),
      npcMessageAndSetOptText(
        "Anyway, let’s knock?",
        [
          "Yes, go right ahead for a knock",
          "Knock four times!",
          "Remember to knock eight times",
        ],
        2000
      );
    setOpFn([act1.part4e]);
    setOpNpcCom([
      "Let's!",
      "Okedoke",
      act1.succes === true
        ? " Thank god you helped me, I don't think I would have remembered all of this otherwise"
        : " Right, eight times...",
    ]);
  },

  part4e: function () {
    opt.userChoice[2] && act1.succes
      ? (act1.succes = true)
      : (act1.succes = false);
    if (act1.succes) {
      npcMessage("Someone is coming towards the door!");
      npcMessage('Probably Whitakers "friend"');
      npcMessage("Whoever it is, is enormous. The ground here almost quakes");
      // Maybe insert a picture of a huge guy in doorway?
      npcMessage("He's at the door, hold on...");
      fastForwardClock(`${hours}:${minutes + 2}`, act1.part5);
    } else {
      npcMessage("No answer, maybe we have to wait a minute or two...");
      fastForwardClock(`${hours}:${minutes + 3}`, storyFail.part1);
    }
  },

  part5: function () {
    npcMessage(
      `Okay so there was this huge dude, he asked me some questions about my contacts with Whitaker and now hes about to get the key`
    );
    //TODO: Have a picture of a key in a female hand
    npcMessageAndSetOptText(
      `Okay I got it! Let's go to the house!`,
      [
        "Wait, what happened with the guy?",
        "I'm not too sure about this...",
        "Nice, let's go!",
      ],
      2000
    );
    setOpFn([act1.part5b]);
    setOpNpcCom(
      [
        "Yeah that was strange, he was like super big and asked loads of questions, and then all of a sudden he stopped and just went away and came back with the key. I guess he got happy with the answers",
        "Haha I'd be lying if I said it feels super great, but we're in this now 😉",
        "😁",
      ],
      "Oh I almost forgot"
    );
  },

  part5b: function () {
    npcMessageAndSetOptText("I got a note, must be from Whitaker", [
      "Probably wierd rules again",
      "Let's just go",
      "What does it say?",
    ]);
    setOpFn([act1.part5c, act1.part5c, act1.part5cOff]);
    setOpNpcCom([
      "Probably",
      "I think this is worth checking out",
      "One second...",
    ]);
  },

  part5cOff: function () {
    npcMessageAndSetOptText("Could be those wierd rules", [
      "Okay, what does it say?",
      "Well if you must...",
      "No just skip it, let's go",
    ]);
    setOpFn([act1.part5c, act1.part5c, act1.part5d]);
    setOpNpcCom([
      "I think so too",
      "Then I really 'must'",
      "This is pretty dumb, but okay",
    ]);
  },

  part5c: function () {
    npcMessage(
      "It's from Whitaker all right. Hold on, I'll scan in with my camera"
    );
    npcMessage(rules, 4000, 500);
    npcMessageAndSetOptText(`Well, that's that`, [
      "Okay, I'll try to remember them",
      "Spooky",
      `I don't like this at all`,
    ]);
    setOpFn([act1.part5d, act1.part5d, act1.part5d]);
    setOpNpcCom(
      [
        "Thank you so much! 😄",
        "Sure is",
        "Yeah, it's not the most pleasent way to make money",
      ],
      "It has actually always been fine, and as said, I have always followed the rules"
    );
    hasReadRules = true;
  },

  part5d: function () {
    npcMessage("I'll get back to you in about an hour when I'm at the house");
    fastForwardClock(`${19}:${46}`, act1.part6);
  },

  part6: function () {
    /*TODO: (<-- Just a highlighter) The following function makes the player lose if the clock has reached 00:00 without the player making certain coices 08/08*/
    clockStrokeTrigger("00:00", scaryFace);
    npcMessage("All right, here we are.");
    npcMessage("Ugh I'm a bit hungry, should've stopped for some food");
    npcMessage("Anyway, I'm at the place");
    npcMessage("Imma send you a pic!");
    npcMessage(`<img src="images/house.png" alt="">`);
    npcMessageAndSetOptText(
      `What do you think?`,
      [
        "Be careful!",
        "Wouldn't enter it for even a million €",
        "Looks great, easy money!",
      ],
      0,
      0
    );
    setOpFn([act1.part6b, act1.part6b, act1.part6b]),
      setOpNpcCom([
        "I will",
        "Haha, good thing you won't have too 😉",
        "In less then 24h I'll be rich! (not really, but a tid bit less poor 🥳)",
      ]);
  },

  part6b: function () {
    npcMessage("Let's get inside!");
    fastForwardClock(`${hours}:${minutes + 2}`, act1.part7);
  },

  part7: function () {
    npcMessage("Okay inside!");
    npcMessageAndSetOptText(
      "I don't know what I expected but there is a certain atmoshpere in here",
      ["Can I see?", "What do you mean?", "It's the smell of easy money!"]
    );
    setOpFn([act1.part7b, act1.part7b, act1.part8]);
    setOpNpcCom([
      "Of course, just hold on one second",
      "Well, It's not necessarily bad, but messy and there is a certain smell. I can show you in a minute",
      "I'm pretty sure there is another smell as well 😅",
    ]);
  },

  part7b: function () {
    fastForwardClock(`${hours}:${minutes + 3}`, act1.part8);
  },

  part8: function () {
    npcMessage(`<img src="images/inside-soffa-room.png" alt="">`, undefined, 0);
    npcMessage("Room upstairs", undefined, 0);
    npcMessage(
      `<img src="images/grandfather-clock-room.jpeg" alt="">`,
      undefined,
      4000
    );
    npcMessage("Room downstairs", undefined, 0);
    npcMessage(
      `<img src="images/door-from-inside-house.jpeg" alt="">`,
      undefined,
      4000
    );
    npcMessage("Front door from inside", undefined, 0);
    npcMessageAndSetOptText("So what do you think?", [
      "Looks nice enough",
      "Bad vibes, don't like it",
      "Needs cleaning!",
    ]);
    setOpFn([act1.part9, act1.part9, act1.part9]);
    setOpNpcCom([
      "Yeah, could be better but could also be alot worse",
      "Well, I wasn't really expecting a five star hotell standard so this is nice enough IMO",
      "Yeah, maybe I get paid extra if I help with the cleaning ;)",
    ]);
  },

  part9: function () {
    npcMessage(
      "Oh yeah and I found this note on the table. I'm just gonna scan it with my camera"
    );
    npcMessage(
      `Dear ${npcName},
      <br>
      <br>
      Welcome once again.
      <br>
      Please help yourself to the kitchen and you are more then welcome to invite your friends over if you want to. Just remember the rules.
      <br>
      <br>
      Best regards,
      Mr. Whitaker`,
      4000,
      500
    );
    npcMessage(`That's all it says`);
    npcMessageAndSetOptText(
      `So I'm pretty much starving, do you think the food is fine to eat?`,
      [
        "The food is fine to eat",
        `Don't eat the food`,
        hasReadRules ? `Thanks` : `Maybe we should have read the rules...`,
      ]
    );
    setOpFn([act1.part10a1, act1.part10a2, act1.part9b]);
    setOpNpcCom([
      `Right? Since the note is signed by Whitaker`,
      `Maybe that's for the best, even thought I'm quite hungry`,
      hasReadRules
        ? "I'm the one who should thank you for the help!"
        : "Yes, but lucky for us (or me) I kept the note",
    ]);
  },

  part9b: function () {
    npcMessageAndSetOptText("Should I send you the letter?", [
      "Yes and sorry for being pushy",
      "No, just eat it",
      "Actually no, and don't eat the food",
    ]);
    setOpFn([act1.part9c, act1.part10a1, act1.part10a2]);
  },

  part9c: function () {
    hasReadRules = true;
    npcMessage(rules, 4000);
    npcMessageAndSetOptText("So do you think the food is safe?", [
      "So you can eat the food",
      "So don't eat the food",
      "Some interesting rules there...",
    ]);
    setOpFn([act1.part10a1, act1.part10a2, act1.part10a3]);
    setOpNpcCom([
      "Good stuff!",
      "Aww, guess I'll go hungry, but maybe it's for the best",
      undefined,
    ]);
  },

  part10a1: function () {
    npcMessage("Nice, hold on one sec...");
    isHungry = false;
    npcMessage("That's alot better", 5000);
    npcMessageAndSetOptText("So I was thinking...", [
      "Yeah?",
      "What about?",
      "...",
    ]);
    setOpFn([act1.part11, act1.part11, act1.part11]);
  },

  part10a2: function () {
    npcMessage("Well, can't think about food too much anyway");
    npcMessageAndSetOptText("So I was thinking...", [
      "Yeah?",
      "What about?",
      "...",
    ]);
    setOpFn([act1.part11, act1.part11, act1.part11]);
  },

  part10a3: function () {
    npcMessageAndSetOptText(
      "So do you think I could get a snack or should I avoid it?",
      [
        "Yeah, sure take a snack!",
        "Something is off, you shouldn't",
        "You can decide",
      ]
    );
    setOpFn([act1.part10a1, act1.part10a2, act1.part10a1]);
    setOpNpcCom([
      "A snack it is then!",
      `Maybe that's for the best, unfortunately I'm a bit hungry...`,
      "A snack it is then!",
    ]);
  },

  part11: function () {
    npcMessage("About inviting a friend over");
    npcMessageAndSetOptText("What do you think?", [
      "Yes, sure if you feel like it!",
      `Maybe it's better to not do that`,
      hasReadRules ? `Sure! Just remember the rules` : `No, it's a dumb idea`,
    ]);
    setOpFn([a2F.part12, a2NoF.n12, hasReadRules ? a2F.part12 : a2NoF.n12]);
    setOpNpcCom([
      "I deff do!",
      "Yeah maybe, better not risk anything...",
      hasReadRules
        ? `Yep, and as you know, it's allowed :D (until 00:00 ofc!)`
        : `...Okay, thx for the response sunshine`,
    ]);
  },
};

///////////////////////////////////////////////////////////////////
const storyFail = {
  part1: function () {
    storyFail.part2();
  },
  part2: function () {
    btnOpHide();
    fastForwardClock(`${hours}:${minutes + 3}`, storyFail.part3);
  },
  part3: function () {
    btnOpHide();
    setOpFn([storyFail.part4, storyFail.part4, storyFail.part4]);
    setTimeout(() => {
      btnOpShow([`${npcName}?`, `What's happening?`, "All good?"]);
    }, 3000);
  },

  part4: function () {
    btnOpHide();
    setOpFn([storyFail.part5, storyFail.part5, storyFail.part5]);
    setTimeout(() => {
      btnOpShow([
        `${npcName}??`,
        `${npcName}, "what's happening?`,
        "Hellooooo",
      ]);
    }, 7000);
  },

  part5: function () {
    btnOpHide();
    setTimeout(() => {
      fastForwardClock(`${hours}:${minutes + 6}`, storyFail.part6);
    }, 3000);
  },

  part6: function () {
    btnOpHide();
    setOpFn([storyFail.part6, storyFail.part6, storyFail.part6]);
    btnOpShow([`${npcName} please answer!!`, `HELLO!?`, "What's going on!?"]);
  },

  part6: function () {
    opt.func.length = 0;
    fastForwardClock(`${hours}:${minutes + 3}`, storyFail.part7);
  },
  part7: function () {
    btnOpHide();
    npcMessage(`You won't be hearing from ${npcName} anymore`);

    setTimeout(() => {
      endGameFail();
    }, 7000);
  },
};

//TODO: Continue with storyFailDemon
const storyFailDemon = {
  part1: function () {
    btnOpHide();
    fastForwardClock(`${hours}:${minutes + 3}`, storyFailDemon.part2);
  },
  part2: function () {
    setOpFn([storyFailDemon.part3, storyFailDemon.part3, storyFailDemon.part3]);
    setTimeout(() => {
      btnOpShow([`${npcName}?`, `What's happening?`, "All good?"]);
    }, 3000);
  },
  part3: function () {
    fastForwardClock(`${hours}:${minutes + 3}`, storyFailDemon.part4);
  },

  part4: function () {
    setOpFn([storyFailDemon.part5, storyFailDemon.part5, storyFailDemon.part5]);
    setTimeout(() => {
      btnOpShow([
        `${npcName}??`,
        `${npcName}, what's happening??`,
        "Hellooooo",
      ]);
    }, 7000);
  },

  part5: function () {
    setTimeout(() => {
      fastForwardClock(`${hours}:${minutes + 6}`, storyFailDemon.part6);
    }, 3000);
  },

  part6: function () {
    setOpFn([storyFailDemon.part6, storyFailDemon.part6, storyFailDemon.part6]);
    btnOpShow([
      `${npcName.toUpperCase()} PLEASE ANSWER!!`,
      `HELLO!?`,
      "What's going on!?",
    ]);
  },

  part6: function () {
    opt.func.length = 0;
    fastForwardClock(`${hours}:${minutes + 3}`, storyFailDemon.part7);
  },
  part7: function () {
    btnOpHide();
    scaryFace();

    setTimeout(() => {
      endGameFail();
    }, 7000);
  },
};
