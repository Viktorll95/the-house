"use strict";

// Variable that holds the rules, so they won't have to be written again
const rules = `Dear ${npcName},
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
  // a2F.part33();
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
    npcMessage(
      `Okay ${npcName}, so this is going to sound wierd but I'll just go for it`
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
      `When I pull up on the driveway, I have to honk one time, wait in the car for four minutes and knock on the door eight times.`,
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
      "The owner, Mr. Whitaker told me to pull up by his sons house, honk the horn one time, wait for four minutes and then go to the front door and knock eight times.",
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
    } else if (hours < 19 && hours >= 17) {
      npcMessage("I'm actually there soon, text you in a bit!");
    } else if (hours < 17 && hours > 12) {
      npcMessage(
        "I'll be there this eevening at around 19. I'll text you when I'm there"
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
    /*TODO: (<-- Just a highlighter) The following function makes the player lose if the clock has reached 00:00 without the player making certain coices 08/08*/
    clockStrokeTrigger("00:00", scaryFace);
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
    npcMessage("All right, here we are.");
    npcMessage("Ugh I'm a bit hungry, should've stopped for some food");
    npcMessage("Anyway, I'm at the place");
    npcMessage("Imma send you a pic!");
    npcMessage("What do you think?");
    npcMessageAndSetOptText(`<img src="images/house.png" alt=""> The house! `, [
      "Be careful!",
      "Wouldn't enter it for even a million €",
      "Looks great, easy money!",
    ]);
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
    npcMessageAndSetOptText(`That's all it says`, [
      "So the food is fine to eat",
      `So don't eat the food`,
      hasReadRules ? `Thanks` : `Maybe we should have read the rules...`,
    ]);
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

const a2F = {
  askedToBuyFood: false,
  part12: function () {
    npcMessage("Okay I just texted her to come");
    npcMessageAndSetOptText("She will be here in like half an hour!", [
      isHungry ? "Ask her to bring food!" : "Cool!",
      "Hope she likes scary stuff",
      "Just don't forget the rules",
    ]);
    setOpFn([a2F.part13, a2F.part13, a2F.part13]);
    setOpNpcCom([
      isHungry ? "Great idea!" : "🥳",
      "She sure does, even more than me",
      "Thanks for the reminder! 00:00!",
    ]);
  },
  part13: function () {
    if (isHungry && lastChoiceNum === 0) a2F.askedToBuyFood = true;
    npcMessageAndSetOptText("I bet she'll love this place!", [
      "Who is she by the way?",
      "I hope so, I wouldn't 😅",
      "...",
    ]);
    setOpFn([a2F.part13b, a2F.part14, a2F.part14]);
    setOpNpcCom(["Ofc!", "She's crazy about creepy and spooky stuff"]);
  },
  part13b: function () {
    npcMessage(
      "So, we met freshman year. I ended up in the wrong class and didn't realize it until it was too late."
    );
    npcMessage(
      "I was too embarrassed to leave. Then Emily, who I didn't know at the time, raised her hand, and the professor thought she had a question."
    );
    npcMessage(
      "Instead, she just said, 'Sorry, wrong room,' and got up. I saw my chance and quickly said, 'Me too!'"
    );
    npcMessageAndSetOptText(
      "We both walked out laughing, and we've been friends ever since.",
      ["She sounds like fun!", "😂😂😂", "How stupid..."]
    );
    // TODO:TODO:TODO: Implement a function that keeps track of if the npc likes the player
    setOpFn([a2F.part13c, a2F.part13c, a2F.part13c]);
    setOpNpcCom(["She sure is! 😁", "😄👌", "...yeah maybe a bit, anyway..."]);
  },

  part13c: function () {
    npcMessage(
      "I'm going to catch up on my studies while I wait for her, text you in a bit"
    );
    fastForwardClock(`${hours}:${minutes + 30}`, a2F.part14);
  },

  part14: function () {
    npcMessage("She's here!");
    a2F.askedToBuyFood
      ? npcMessage(
          "She says she forgot to buy food thought but she will order us some pizza 🥳"
        )
      : npcMessage(
          "I think I'm going to buy us some food so we don't bankrupt Whitaker 😅"
        );
    npcMessageAndSetOptText(
      `I'm not sure which one I should get thought, which one is your favourite?`,
      ["Margherita", "Pepperoni", "Capricciosa"]
    );
    setOpFn([a2F.part14b, a2F.part14b, a2F.part14b]);
    setOpNpcCom([
      `Ah, you are a vanilla type person 😉 I used to be a bit vanilla myself... So for today Margaritha it is!`,
      `Nice, a bit spicy is excactly what this evening needs 😁 I'll take a pepperoni!`,
      `Then let's try this pizzeria's capricciosa!`,
    ]);
  },

  part14b: function () {
    orderedPizza = true;
    switch (lastChoiceNum) {
      case 0:
        pizzaOrderedStr = "margaritha and pineapple pizza";
      case 1:
        pizzaOrderedStr = "pepperoni and pineapple pizza";
      case 2:
        pizzaOrderedStr = "capricciosa and pineapple pizza";
    }
    npcMessageAndSetOptText(`Emily ordered a pinaepple pizza!`, [
      `Oh that's nasty 😅`,
      `I actually like those`,
      `Who cares`,
    ]);
    setOpFn([a2F.part14c, a2F.part14c, a2F.part14c]);
    setOpNpcCom([
      `Yeah, not my thing either 😂`,
      `Maybe you are as crazy as Emily then 😉`,
      `...`,
    ]);
  },

  part14c: function () {
    npcMessage("We are going to catch up at bit while we wait fyi 😊");
    fastForwardClock(`${hours}:${minutes + 32}`, a2F.part15);
  },
  part15: function () {
    btnOpShow([
      `How’s it going ${npcName}? All good?`,
      `Got your pizza yet?`,
      `${npcName}`,
    ]);
    setOpFn([a2F.part15, a2F.part15, a2F.part15]);
    setOpNpcCom([
      `All good ${playerName}! We haven't got our pizza yet thought, but I found some snacks in my bag 😊`,
      `No pizza yet, but I found some snacks in my bag so we are surviving😊`,
      `Oh sorry! Lost track of time! All good! Altought no pizza yet, but I found some snacks in my bag so we are surviving!`,
    ]);
  },

  part15: function () {
    fastForwardClock("21:24", a2F.part16);
  },
  //TODO: The time is about 21:00 ATP
  part16: function () {
    btnOpShow([
      `${npcName} maybe your friend should leave soon?`,
      `Now you must have gotten your pizzas`,
      `All good?`,
    ]);
    setOpFn([a2F.part16b, a2F.part17, a2F.part17]);
    setOpNpcCom([
      `Chillout ${playerName}, it's not that late yet 😄`,
      "No actually we haven't...",
      "Yep all good! We still haven't gotten our pizza yet doe",
    ]);
  },

  part16b: function () {
    npcMessageAndSetOptText("We still haven't gotten our pizza doe...", [
      "Still really I think your friend should leave",
      "Really? Maybe call them?",
      "That's wierd",
    ]);
    setOpFn([a2F.part16c, a2F.part17, a2F.part17]);
    setOpNpcCom([
      "Hm, really think so?",
      "We tried but got no answer...",
      "Yeah, we actually tried calling but got no answer",
    ]);
  },

  part16c: function () {
    btnOpShow([
      "Yes, what if you forget?",
      "You shouldn't take any risks",
      "Maybe she can stay for a while",
    ]);
    setOpFn([
      a2F.part17,
      a2F.part17 /*<--TODO: The first two functions should lead to another branch in the story*/,
      a2F.part17,
    ]);
    setOpNpcCom([
      "I mean, it wouldn't likely happen but there is a small risk... Maybe it's for the best",
      "Yeah, maybe your right",
      "Yeah, just help me keep track of time and it's all good 😄",
    ]);
  },

  part17: function () {
    npcMessageAndSetOptText(
      "Emily is actually thinking of going to a store to get some more snacks",
      ["Sounds good", "Now? Ar this hour?", "Tell her to not do it"]
    );
    setOpFn([a2F.part17b, a2F.part17b, a2F.part17b]);
    setOpNpcCom(
      [
        "Yep!",
        "Haha yeah, I coulnd't stop her even if I tried",
        "She actually already went. It's impossible to stop that girl when she has an idea",
      ],
      "She said it will take her about 20 minutes"
    );
  },

  part17b: function () {
    fastForwardClock(`${hours}:${minutes + 25}`, a2F.part18);
  },

  part18: function () {
    npcMessageAndSetOptText(
      "It's been 25 minutes, I feel like she should be back now",
      ["She's only 5 mins late", "You should call her", "I think she died"]
    );
    setOpFn([a2F.part18b, a2F.part18b, a2F.part18b]);
    setOpNpcCom([
      "Yeah I guess, but it's not like her to be late",
      "I will",
      "Ha... ha... really. funny",
    ]);
  },

  part18b: function () {
    npcMessage(
      "Just called her, she's not answering, guess I'll give it some more time"
    );
    fastForwardClock(`${hours}:${minutes + 10}`, a2F.part19);
  },

  part19: function () {
    npcMessage(
      "She should have been here fiften minutes ago and she's not, and she doesn't answer her phone"
    );
    npcMessageAndSetOptText("What should I do?", [
      "She's just a bit late, it's fine",
      "Call the police",
      "Go look for her",
    ]);
    setOpFn([a2F.part19b, a2F.part20, a2F.part19b]);
    setOpNpcCom([]);
  },

  part19b: function () {
    if (lastChoiceNum === 0) {
      npcMessage("I'll wait a bit more");
      fastForwardClock(`${hours}:${minutes + 15}`, a2F.part20);
    }
    if (lastChoiceNum === 2) {
      npcMessageAndSetOptText(
        `I guess I could, but I can't go far away from the house`,
        [
          `Yeah you probably shouldn't`,
          `Nevermind, wait inside`,
          `Just try to go a little bit`,
        ]
      );
      setOpFn([]);
      setOpNpcCom([]);
    }
  },

  part19c: function () {
    if (lastChoiceNum === 0 || lastChoiceNum === 1) {
      npcMessage("I'm going to wait a bit longer for her...");
      fastForwardClock(`${hours}:${minutes + 15}`, a2F.part20);
    } else {
      npcMessage(`Okay, I'll look around the neighborhood`);
      fastForwardClock(`${hours}:${minutes + 10}`, a2F.part19d);
    }
  },

  part19d: function () {
    npcMessageAndSetOptText("Still no sign of her, what should I do?", [
      "Go back",
      "I don't know",
      "Keep looking",
    ]);
    setOpFn([a2F.part19e, a2F.part19e, a2F.part19e]);
  },

  part19e: function () {
    if (lastChoiceNum === 2) {
      fastForwardClock(`${hours}:${minutes + 13}`, storyFail.part3);
    } else {
      npcMessage(`I guess I'll go back then`);
      npcMessageAndSetOptText(`Ugh, this doesn't feel good`, [
        `It's going to be fine`,
        `Don't blame yourself`,
        `You should never have invited her`,
      ]);
      setOpFn(a2F.part19f, a2F.part19f, a2F.part19f);
      setOpNpcCom([
        "Thanks, I really neede to hear that actually",
        "Thanks, I really neede to hear that actually",
        "Maybe you are right...",
      ]);
    }
  },

  part19f() {
    npcMessage("As soon as I'm back, I'm calling the police");
    fastForwardClock(`${hours}:${minutes + 5}`, a2F.part19f);
  },

  part20: function () {
    npcMessage("Okay, I'm calling the police now, hold on");
    npcMessageAndSetOptText(
      `"All our operators are busy"... IS THIS A JOKE`,
      [
        "Don't like this, be careful",
        "Just try again in 5 mins",
        "Try calling her again",
      ],
      6000
    );
    setOpFn([a2F.part21, a2F.part21, a2F.part21]);
    setOpNpcCom([
      "Me nether, something feels wrong",
      `Okay... I'm getting a bit stressed thought`,
      `Just tried, still not answering`,
    ]);
  },

  part21: function () {
    npcMessageAndSetOptText("Wow", [
      "Wow?",
      "What's happening?",
      "Everything all right?",
    ]);
    setOpFn([a2F.part22, a2F.part22, a2F.part22]);
  },

  part22: function () {
    npcMessageAndSetOptText("There is was a knock on the door", [
      "Open it then, it's Emily",
      "Ask who it is",
      "Ignore it",
    ]);
    setOpFn([a2F.part25, a2F.part23, a2F.part23]);
  },

  part23: function () {
    if (lastChoiceNum === 1) {
      npcMessage(`I just asked who it is`);
      npcMessage(`Oh, it's Emily`);
    }
    if (lastChoiceNum === 1) {
      npcMessage("Okay");
      npcMessage("I think I'm hearing Emily's voice", 4000);
      npcMessage("Yep, it's definitely her voice");
    }
    npcMessageAndSetOptText("I'm going to let her in", [
      "Do it",
      "What took her so long?",
      "WAIT",
    ]);
    setOpFn([a2F.part26, a2F.part26, a2F.part24]);
    setOpNpcCom([
      "Wonder what took her so long",
      "I don't know, but I'm going to find out",
      undefined,
    ]);
  },

  part24: function () {
    npcMessageAndSetOptText("Wait for what?", [
      "Don't open it, it's not her",
      "Ask her about how you met",
      "Nevermind, just let her in",
    ]);
    setOpFn([a2F.part25, a2F.part25, a2F.part26]);
    setOpNpcCom([undefined, "Very smart!", "Okay, hope you are sure"]);
  },

  part25: function () {
    if (lastChoiceNum === 0) {
      npcMessageAndSetOptText("How can you be so sure?", [
        "The rules says so",
        "I'm just havning a bad feeling",
        "I'm not",
      ]);
      setOpFn([a2F.part25b, a2F.part25b, a2F.part26]);
      setOpNpcCom([
        undefined,
        undefined,
        "If you are not sure, then I'm letting her in",
      ]);
    }
    if (lastChoiceNum === 1) {
      npcMessage("Okay, she answered correctly, I'm letting her in");
      a2F.part26();
    }
  },

  part25b: function () {
    npcMessage("Okay, she sounds pretty pissed");
    npcMessage("I'm trying to convince her but she's calling me crazy", 4000);
    setOpFn([a2F.part25c, a2F.part25c, a2F.part25c]);
    npcMessageAndSetOptText(
      "I wanna let her in, I don't want to lose a friend",
      [
        "Okay. Maybe let her in then",
        "Just make it up to her later",
        "It's not your friend",
      ]
    );
  },

  part25c: function () {
    npcMessage(`Okay, I think she's leaving now`, 4000);
    npcMessageAndSetOptText(`My god, I feel awful`, [
      `You did what was necessary`,
      "Don't worry about it",
      "Shit happens",
    ]);
    setOpFn([
      /* SET NEW FUNCTIONS THAT CONTINUES THIS BRANCH */
    ]);
  },

  part26: function () {
    npcMessage("I'm opening the door");
    npcMessage("Yeah it's her alright", 8000);
    npcMessage(
      "Apparently she dropped her phone, it broke, and therefore she had a hard time finding her way back..."
    );
    npcMessageAndSetOptText("That's a relief", [
      "Good to hear everything worked out",
      "I was scared for a bit there",
      "Tell her she's clumsy",
    ]);
    setOpFn([a2F.part27, a2F.part27, a2F.part27]);
    setOpNpcCom([
      "Yeah, feels like a load is lifted of my shoulders...",
      "Yeah, feels like a load is lifted of my shoulders...",
      "She says that a geek as unadventerous as you aren't allowed to voice an opinion 😅",
    ]);
  },

  part27: function () {
    fastForwardClock(`${hours}:${minutes + 6}`, a2F.part28);
  },

  part28: function () {
    npcMessage(`Hey ${playerName}, it's definitely Emily`);
    npcMessage(`She's as clumsy, funny and adventereus as usual`);
    npcMessageAndSetOptText(
      `The only thing that's different is her horrible music taste, my ears are bleeding 🤣`,
      ["What do you mean", "🤣", "Where is the music playing from?"]
    );
    setOpFn([a2F.part29, a2F.part31, a2F.part30]);
  },

  part29: function () {
    npcMessageAndSetOptText(
      "I mean her horrible boy-band taste in music is awful 😂",
      [
        "I actually like boy-bands",
        "Turn it off!",
        "Where is the music playing from?",
      ]
    );
    setOpFn([a2F.part31, a2F.part31, a2F.part30]);
    setOpNpcCom([
      "Oh... Sorry then... 😅",
      "Yeah, maybe that's for the best",
      undefined,
    ]);
  },

  part30: function () {
    npcMessageAndSetOptText(
      "That's the worst part, it's playing from her awful phone speakers",
      [`Oh, that's a relief`, `Ask her to turn it off`, `...`]
    );
    setOpFn([a2F.part31, a2F.part31, a2F.part31]);
    setOpNpcCom([
      "Oh yeah, you thought it came from the radio... Thanks for having my back!",
      "Yeah, maybe that's for the best",
      undefined,
    ]);
  },
  part31: function () {
    npcMessage(`I think I will be AFK for a while 😊`);
    fastForwardClock("23:33", a2F.part32);
  },
  part32: function () {
    btnOpShow([`${npcName}`, "Hello!", "Are you there?"]);
    setOpFn([a2F.part33, a2F.part33, a2F.part33]);
  },

  part33: function () {
    fastForwardClock("23:41", a2F.part34);
  },

  part34: function () {
    btnOpShow([`${npcName.toUpperCase()}!!`, "Helloooooo", "ANSWER!"]);
    setOpFn([a2F.part35, a2F.part35, a2F.part35]);
    setOpNpcCom([`${playerName}!!`, "Hello to you too!", "Yes?"]);
  },
  part35: function () {
    btnOpShow([
      `Look at the time ${npcName.toUpperCase()}!`,
      "Your friend needs to leave!",
      "Oh, it's nothing",
    ]);
    setOpFn([
      a2F.part36,
      a2F.part36,
      /*TODO: A function that failes the game should be here: */ a2F.part36,
    ]);
  },
  part36: function () {
    npcMessage("OH SH*T");
    npcMessage("Thanks!!!");
    npcMessage("I'll tell her right away");
    npcMessage(`${playerName} you are not going to believe this`);
    npcMessageAndSetOptText(
      `But one of the paintings are upside down. I don’t know it’s been like this before we got here but Emily said she’s sure no painting was upside down when we got here.`,
      ["You need to burn it", "Chop it to pieces", "Nevermind that!"]
    );
    setOpFn([
      a2F.part37,
      a2F.part37 /*TODO: A function that failes the game should be here: */,
      a2F.part37 /*TODO: A function that failes the game should be here: */,
    ]);
  },
  part37: function () {
    npcMessage("Okay I just need to find matchsticks or something...");
    npcMessage("Got it!", 5000);
    fastForwardClock(`${hours}:${minutes + 5}`, a2F.part38);
  },
  part38: function () {
    npcMessage("I never thought I woul'd be doing this...");
    npcMessage(`<img src="images/burning-painting.png" alt="">`);
    npcMessage(`Hope Whitaker doesn't get mad...`, 0, 0);
    npcMessageAndSetOptText(
      "Just said goodbye to Emily as well",
      [`Good NOW GET BACK IN`, `Look at the time!`, `No, why would he be mad?`],
      0,
      0
    );
    setOpFn([a2F.part39, a2F.part39, a2F.part38b]);
    setOpNpcCom([
      "Oh yeah right, it's late",
      "Oh yeah right, it's late, let's get back inside",
      "Cause I burned a painting of his?",
    ]);
  },

  part38b: function () {
    npcMessageAndSetOptText("I'd think he'd be a bit mad", [
      "But you had to",
      "Worry about that later, get inside",
      "Yeah actually he might be pretty pissed",
    ]);
  },
  part38c: function () {
    npcMessageAndSetOptText("Sh*t... Oh well, gotta get back in now...", [
      "Yes, that's for the best",
      "Good!",
      "Clean up the painting first!",
    ]);
    setOpFn([a2F.part39, a2F.part38d, a2F.part38d]);
  },

  part38d: function () {},

  part39: function () {
    npcMessageAndSetOptText("I just need a second...", [
      "Sure, take a rest",
      "Wait...",
      "I was just wondering...",
    ]);
    setOpFn([a2F.part40, a2F.part41, a2F.part41]);
  },

  part40: function () {
    //TODO: Here should the "clocktriggerfunction" (or what it's called), be set to make the player lose if the windows and doors are not closed at 00:00
    fastForwardClock("11:57", a2F.part41);
  },
  part41: function () {
    btnOpShow([
      "Are all doors and windows closed?",
      "Is the radio on?",
      "Nevermind",
    ]);
    setOpFn([a2F.part42, a2F.part45, a2F.part45]);
    setOpNpcCom([undefined, "No, it's not", "Okay"]);
  },
  part42: function () {
    npcMessage("DARN, I forgot about that. Give me a second...");
    fastForwardClock(`${hours}:${minutes + 2}`, a2F.part44);
  },

  part44: function () {
    // TODO: ALL DOORS AND WINDOWS CLOSED: The "clockStrokeTrigger"-function should now be set to underfined 08/08
    clockStrokeTrigger(undefined);
    npcMessage("Okay done");
    npcMessageAndSetOptText("Hopefully I made it in time", [
      "Good work",
      "Now you can rest!",
      "Just saved your life 😉",
    ]);
    setOpFn([a2F.part45, a2F.part45, a2F.part45]);
    setOpNpcCom([
      "Thanks... I'm a bit tired now",
      "Thanks... I'm a bit tired now",
      "The scary thing is that you really might have...",
    ]);
  },
  part45: function () {
    npcMessage("THE LIMIT HAS BEEN REACHED");
  },
};
const a2NoF = {
  askedToBuyFood: false,
  n12: function () {
    npcMessage("Okay I tell her we'll meet up later sometime");
    npcMessageAndSetOptText("I'm gonna study for a while", [
      "Good luck!",
      "What are you studying?",
      "Just don't forget the rules",
    ]);
    setOpFn([a2NoF.n13, a2NoF.n13, a2NoF.n13]);
    setOpNpcCom([
      "Thanks! 😁",
      "Maths 🤦‍♀️",
      "Thanks for the reminder! I won't!",
    ]);
  },
  n13: function () {
    npcMessageAndSetOptText("I bet she'll love this place!", [
      "Who is she by the way?",
      "I hope so, I wouldn't 😅",
      "...",
    ]);
    setOpFn([a2NoF.n13b, a2NoF.n13b, a2NoF.n13b]);
    setOpNpcCom(["Ofc!", "She's crazy about creepy and spooky stuff"]);
  },

  n13b: function () {
    fastForwardClock(`${hours}:${minutes + 30}`, a2NoF.n14);
  },

  n14: function () {
    npcMessage("Done!");
    npcMessage("I'm thinking about ordering some food");
    npcMessage("Thinking I'll get a Pizza");
    npcMessageAndSetOptText(
      `I'm not sure which one I should get thought, which one is your favourite?`,
      ["Margherita", "Pepperoni", "Capricciosa"]
    );
    setOpFn([a2NoF.n14b, a2NoF.n14b, a2NoF.n14b]);
    setOpNpcCom([
      `Ah, you are a vanilla type person 😉 I used to be a bit vanilla myself... So for today Margaritha it is!`,
      `Nice, a bit spicy is excactly what this evening needs 😁 I'll take a pepperoni!`,
      `Then let's try this pizzeria's capricciosa!`,
    ]);
  },

  n14b: function () {
    orderedPizza = true;
    switch (lastChoiceNum) {
      case 0:
        pizzaOrderedStr = "margaritha pizza";
      case 1:
        pizzaOrderedStr = "pepperoni pizza";
      case 2:
        pizzaOrderedStr = "capricciosa pizza";
    }
    npcMessageAndSetOptText(`What do you think about pineapple pizzas btw?`, [
      `Nasty 😅`,
      `I actually like those`,
      `Who cares`,
    ]);
    setOpFn([a2NoF.n14c, a2NoF.n14c, a2NoF.n14c]);
    setOpNpcCom([
      `Yeah, not my thing either 😂`,
      `You must be crazier than me then 😂`,
      `...`,
    ]);
  },

  n14c: function () {
    npcMessage("Let's chill until the pizza is here");
    fastForwardClock(`${hours}:${minutes + 32}`, a2NoF.n15);
  },
  n15: function () {
    btnOpShow([
      `How’s it going ${npcName}? All good?`,
      `Got your pizza yet?`,
      `${npcName}`,
    ]);
    setOpFn([a2NoF.n15, a2NoF.n15, a2NoF.n15]);
    setOpNpcCom([
      `All good ${playerName}! I haven't got our pizza yet thought, but I found some snacks in my bag 😊`,
      `No pizza yet, but I found some snacks in my bag so I'm are surviving😊`,
      `Oh sorry! Lost track of time! All good! Altought no pizza yet, but I found some snacks in my bag so I'm surviving!`,
    ]);
  },

  n15: function () {
    fastForwardClock("21:24", a2NoF.n16);
  },
  //TODO: The time is about 21:00 ATP
  n16: function () {
    btnOpShow([
      `What's up ${npcName}?`,
      `Now you must have gotten your pizzas`,
      `All good?`,
    ]);
    setOpFn([a2NoF.n16b, a2NoF.n17, a2NoF.n17]);
    setOpNpcCom([
      `Nothing much ${playerName}, just studying. Still haven't gotten my pizza yet doe...`,
      "No actually we haven't...",
      "Yep all good! Still haven't gotten my pizza yet doe",
    ]);
  },

  n16b: function () {
    npcMessageAndSetOptText("A bit annoying...", [
      "Still?",
      "Really? Maybe call them?",
      "That's wierd",
    ]);
    setOpFn([a2NoF.n17, a2NoF.n17, a2NoF.n17]);
    setOpNpcCom([
      "Yeah, I even tried calling but no answer",
      "We tried but got no answer...",
      "Yeah, we actually tried calling but got no answer",
    ]);
  },

  n17: function () {
    npcMessage(`Oh well, guess I'll have to settle with my snacks`);
    fastForwardClock(`${hours}:${minutes + 25}`, a2NoF.n21);
  },

  n21: function () {
    npcMessageAndSetOptText("Wow", [
      "Wow?",
      "What's happening?",
      "Everything all right?",
    ]);
    setOpFn([a2NoF.n22, a2NoF.n22, a2NoF.n22]);
  },

  n22: function () {
    npcMessageAndSetOptText("There is was a knock on the door", [
      "Open it!",
      "Ask who it is",
      "Ignore it",
    ]);
    setOpFn([a2NoF.n26, a2NoF.n23, a2NoF.n23]);
    setOpNpcCom([
      "Hm, sounds like the type of knocking Emily would do",
      undefined,
      undefined,
    ]);
  },

  n23: function () {
    if (lastChoiceNum === 1) {
      npcMessage(`I just asked who it is`);
      npcMessage(`Oh, it's Emily`);
    }
    if (lastChoiceNum === 2) {
      npcMessage("Okay");
      npcMessage("I think I'm hearing Emily's voice", 4000);
      npcMessage("Yep, it's definitely her voice");
    }
    npcMessageAndSetOptText("I'm going to let her in", [
      "Do it",
      "What took her so long?",
      "WAIT",
    ]);
    setOpFn([a2NoF.n26, a2NoF.n26, a2NoF.n24]);
  },

  n24: function () {
    npcMessageAndSetOptText("Wait for what?", [
      "Don't open it, it's not her",
      "Ask her about how you met",
      "Nevermind, just let her in",
    ]);
    setOpFn([a2NoF.n25, a2NoF.n25, a2NoF.n26]);
    setOpNpcCom([undefined, "Very smart!", "Okay, hope you are sure"]);
  },

  n25: function () {
    if (lastChoiceNum === 0) {
      npcMessageAndSetOptText("How can you be so sure?", [
        "The rules says so",
        "I'm just havning a bad feeling",
        "I'm not",
      ]);
      setOpFn([a2NoF.n25b, a2NoF.n25b, a2NoF.n26]);
      setOpNpcCom([
        undefined,
        undefined,
        "If you are not sure, then I'm letting her in",
      ]);
    }
    if (lastChoiceNum === 1) {
      npcMessage("Okay, she answered correctly, I'm letting her in");
      a2NoF.n26();
    }
  },

  n25b: function () {
    npcMessage("Okay, she sounds pretty pissed");
    npcMessage("I'm trying to convince her but she's calling me crazy", 4000);
    setOpFn([a2NoF.n25c, a2NoF.n25c, a2NoF.n25c]);
    npcMessageAndSetOptText(
      "I wanna let her in, I don't want to lose a friend",
      [
        "Okay. Maybe let her in then",
        "Just make it up to her later",
        "It's not your friend",
      ]
    );
  },

  n25c: function () {
    npcMessage(`Okay, I think she's leaving now`, 4000);
    npcMessageAndSetOptText(`My god, I feel awful`, [
      `You did what was necessary`,
      "Don't worry about it",
      "Shit happens",
    ]);
    setOpFn([
      /* SET NEW FUNCTIONS THAT CONTINUES THIS BRANCH */
    ]);
  },

  n26: function () {
    npcMessage("I'm opening the door");
    npcMessage("Yeah it's her alright", 8000);
    npcMessage(
      "Apparently she thought of surprising me in the middle of the evening 🤣"
    );
    npcMessageAndSetOptText("That's a relief", [
      "You got a fun friend 😁",
      "I was scared for a bit there",
      "Tell her she's super wierd",
    ]);
    // Here the functions are set back to the a2F-object
    setOpFn([a2F.part27, a2F.part27, a2F.part27]);
    setOpNpcCom([
      "Right? 😉",
      "Yeah, feels like a load is lifted of my shoulders...",
      "Yeah, she's a bit... over-adventerous sometimes ",
    ]);
  },

  // Here continues the a2NoF branch
  n27: function () {
    fastForwardClock(`${hours}:${minutes + 6}`, a2NoF.n28);
  },

  n28: function () {
    npcMessage(`Hey ${playerName}, it's definitely Emily`);
    npcMessage(`She's as clumsy, funny and adventereus as usual`);
    npcMessageAndSetOptText(
      `The only thing that's different is her horrible music taste, my ears are bleeding 🤣`,
      ["What do you mean", "🤣", "Where is the music playing from?"]
    );
    setOpFn([a2NoF.n29, a2NoF.n31, a2NoF.n30]);
  },

  n29: function () {
    npcMessageAndSetOptText(
      "I mean her horrible boy-band taste in music is awful 😂",
      [
        "I actually like boy-bands",
        "Turn it off!",
        "Where is the music playing from?",
      ]
    );
    setOpFn([a2NoF.n31, a2NoF.n31, a2NoF.n30]);
    setOpNpcCom([
      "Oh... Sorry then... 😅",
      "Yeah, maybe that's for the best",
      undefined,
    ]);
  },

  n30: function () {
    npcMessageAndSetOptText(
      "That's the worst part, it's playing from her awful phone speakers",
      [`Oh, that's a relief`, `Ask her to turn it off`, `...`]
    );
    setOpFn([a2NoF.n31, a2NoF.n31, a2NoF.n31]);
    setOpNpcCom([
      "Oh yeah, you thought it came from the radio... Thanks for having my back!",
      "Yeah, maybe that's for the best",
      undefined,
    ]);
  },
  n31: function () {
    npcMessage(`I think I will be AFK for a while 😊`);
    fastForwardClock("23:33", aNo2F.n32);
  },
  n32: function () {
    btnOpShow([`${npcName}`, "Hello!", "Are you there?"]);
    setOpFn([a2NoF.n33, a2NoF.n33, a2NoF.n33]);
  },

  n33: function () {
    fastForwardClock("23:41", a2NoF.n34);
  },

  n34: function () {
    btnOpShow([`${npcName.toUpperCase()}!!`, "Helloooooo", "ANSWER!"]);
    setOpFn([a2NoF.n35, a2NoF.n35, a2NoF.n35]);
    setOpNpcCom([`${playerName}!!`, "Hello to you too!", "Yes?"]);
  },
  n35: function () {
    btnOpShow([
      `Look at the time ${npcName.toUpperCase()}!`,
      "Your friend needs to leave!",
      "Oh, it's nothing",
    ]);
    setOpFn([
      a2NoF.n36,
      a2NoF.n36,
      /*TODO: A function that failes the game should be here: */ a2NoF.n36,
    ]);
  },
  n36: function () {
    npcMessage("OH SH*T");
    npcMessage("Thanks!!!");
    npcMessage("I'll tell her right away");
    npcMessage(`${playerName} you are not going to believe this`);
    npcMessageAndSetOptText(
      `But one of the paintings are upside down. I don’t know it’s been like this before we got here but Emily said she’s sure no painting was upside down when we got here.`,
      ["You need to burn it", "Chop it to pieces", "Nevermind that!"]
    );
    setOpFn([
      a2NoF.n37,
      a2NoF.n37 /*TODO: A function that failes the game should be here: */,
      a2NoF.n37 /*TODO: A function that failes the game should be here: */,
    ]);
  },
  n37: function () {
    npcMessage("Okay I just need to find matchsticks or something...");
    npcMessage("Got it!", 5000);
    fastForwardClock(`${hours}:${minutes + 5}`, a2NoF.n38);
  },
  n38: function () {
    npcMessage("I never thought I woul'd be doing this...");
    npcMessage(`<img src="images/burning-painting.png" alt="">`);
    npcMessage(`Hope Whitaker doesn't get mad...`, 0, 0);
    npcMessageAndSetOptText(
      "Just said goodbye to Emily as well",
      [`Good NOW GET BACK IN`, `Look at the time!`, `No, why would he be mad?`],
      0,
      0
    );
    setOpFn([a2NoF.n39, a2NoF.n39, a2NoF.n38b]);
    setOpNpcCom([
      "Oh yeah right, it's late",
      "Oh yeah right, it's late, let's get back inside",
      "Cause I burned a painting of his?",
    ]);
  },

  n38b: function () {
    npcMessageAndSetOptText("I'd think he'd be a bit mad", [
      "But you had to",
      "Worry about that later, get inside",
      "Yeah actually he might be pretty pissed",
    ]);
  },
  n38c: function () {
    npcMessageAndSetOptText("Sh*t... Oh well, gotta get back in now...", [
      "Yes, that's for the best",
      "Good!",
      "Clean up the painting first!",
    ]);
    setOpFn([a2NoF.n39, a2NoF.n38d, a2NoF.n38d]);
  },

  n38d: function () {},

  n39: function () {
    npcMessageAndSetOptText("I just need a second...", [
      "Sure, take a rest",
      "Wait...",
      "I was just wondering...",
    ]);
    setOpFn([a2NoF.n40, a2NoF.n41, a2NoF.n41]);
  },

  n40: function () {
    //TODO: Here should the "clocktriggerfunction" (or what it's called), be set to make the player lose if the windows and doors are not closed at 00:00
    fastForwardClock("11:57", a2NoF.n41);
  },
  n41: function () {
    btnOpShow([
      "Are all doors and windows closed?",
      "Is the radio on?",
      "Nevermind",
    ]);
    setOpFn([a2NoF.n42, a2NoF.n45, a2NoF.pn45]);
    setOpNpcCom([undefined, "No, it's not", "Okay"]);
  },
  n42: function () {
    npcMessage("DARN, I forgot about that. Give me a second...");
    fastForwardClock(`${hours}:${minutes + 2}`, a2F.n44);
  },

  n44: function () {
    // TODO: ALL DOORS AND WINDOWS CLOSED: The "clockStrokeTrigger"-function should now be set to underfined 08/08
    clockStrokeTrigger(undefined);
    npcMessage("Okay done");
    npcMessageAndSetOptText("Hopefully I made it in time", [
      "Good work",
      "Now you can rest!",
      "Just saved your life 😉",
    ]);
    setOpFn([a2NoF.n45, a2NoF.n45, a2NoF.n45]);
    setOpNpcCom([
      "Thanks... I'm a bit tired now",
      "Thanks... I'm a bit tired now",
      "The scary thing is that you really might have...",
    ]);
  },
  n45: function () {
    npcMessage("THE LIMIT HAS BEEN REACHED");
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
  },
};
