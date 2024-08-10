"use strict";

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
      "Yes, for sure!",
      "You shouldn't take any risks",
      "Maybe she can stay for a while",
    ]);
    setOpFn([
      a2NoF.n13,
      a2NoF.n13 /*<-- The first two functions leads to the branch a2NoF*/,
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
    setOpFn([
      a2F.part37,
      a2F.part37 /*TODO: A function that failes the game should be here: */,
      a2F.part37 /*TODO: A function that failes the game should be here: */,
    ]);
    npcMessageAndSetOptText(
      `But one of the paintings are upside down. I don’t know it’s been like this before we got here but Emily said she’s sure no painting was upside down when we got here.`,
      ["You need to burn it", "Chop it to pieces", "Nevermind that!"]
    );
  },
  part36fail: function () {
    if (lastChoiceNum === 1) {
      npcMessageAndSetOptText("Right, I'll get on it", [
        "Good!",
        "Or shouldn't you burn it?",
        "Wait, just turn it back?",
      ]);
      setOpFn([storyFailDemon.part1, a2F.part37, storyFailDemon.part1]);
      setOpNpcCom([
        "😁",
        "Yes! Wasn't that what the rules said?",
        "All right, I'll do it",
      ]);
    }
    if (lastChoiceNum === 2) {
      npcMessage("Okay...");
      npcMessageAndSetOptText("Are you sure btw?", [
        "Yes, just take breather",
        "Maybe just say bye to Emily",
        "No, burn the painting",
      ]);
      setOpFn([storyFailDemon.part1, storyFailDemon.part1, a2F.part37]);
    }
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
    npcMessage("There, back inside");
    npcMessageAndSetOptText("I just need a second...", [
      "Sure, take a rest",
      "Not yet! Remember?...",
      "I was just wondering...",
    ]);
    setOpFn([a2F.part40, a2F.part41, a2F.part41]);
  },

  part40: function () {
    fastForwardClock("23:57", a2F.part41);
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
    a2End.a2EndPart();
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
    npcMessage("I'll text you a bit later");
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
    npcMessageAndSetOptText(
      "I wanna let her in, I don't want to lose a friend",
      [
        "Okay. Maybe let her in then",
        "Just make it up to her later",
        "It's not your friend",
      ]
    );
    setOpFn([a2NoF.n26, a2NoF.n25c, a2NoF.n25c]);
  },

  n25c: function () {
    npcMessage(`Okay, I think she's leaving now`, 4000);
    npcMessageAndSetOptText(`My god, I feel awful`, [
      `You did what was necessary`,
      "Don't worry about it",
      "Shit happens",
    ]);
    setOpFn([
      /* The branch a2NoF continues here (a2NoF === act 2 no friend) */
      a2NoF.n27,
      a2NoF.n27,
      a2NoF.n27,
    ]);
    setOpNpcCom([
      "Yeah, I guess so",
      "I'll try, still feel like an ass doe...",
      "Yeah, I guess so",
    ]);
  },

  n26: function () {
    npcMessage("I'm opening the door");
    npcMessage("Yeah it's her alright", 8000);
    npcMessage(
      "Apparently she thought of surprising me in the middle of the evening 🤣"
    );
    npcMessageAndSetOptText("That's a relief", [
      "You got a funny friend 😁",
      "I was scared for a bit there",
      "Tell her she's super wierd",
    ]);
    // Here the functions are set back to the a2F-object (a2F === act 2 friend)
    setOpFn([a2F.part31, a2F.part31, a2F.part31]);
    setOpNpcCom([
      "Right? 😉",
      "Yeah, feels like a load is lifted of my shoulders...",
      "Yeah, she's a bit... over-adventerous sometimes ",
    ]);
  },

  // Here continues the a2NoF branch

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
      "Have you locked the doors?",
      "Oh, it's nothing",
    ]);
    setOpFn([a2NoF.n36, a2NoF.n36, storyFailDemon.part1]);
    setOpNpcCom([undefined, undefined, "Oh, all right!"]);
  },
  n36: function () {
    npcMessage("OH SH*T");
    npcMessage("Thanks!!!");
    npcMessage("I'll make sure to lock the doors and windows!!");
    npcMessage(`${playerName}...`, 5000);
    npcMessage(`You are not going to believe this`);
    npcMessageAndSetOptText(
      `But one of the paintings are upside down. I'm pretty sure this painting wasn't like this when I arrived`,
      ["You need to burn it", "Chop it to pieces", "Nevermind that!"]
    );
    setOpFn([
      a2NoF.n37,
      a2NoF.n36fail /* A function that failes the game */,
      a2NoF.n36fail /* A function that failes the game */,
    ]);
  },

  n36fail: function () {
    if (lastChoiceNum === 1) {
      npcMessageAndSetOptText("Right, I'll get on it", [
        "Good!",
        "Or shouldn't you burn it?",
        "Wait, just turn it back?",
      ]);
      setOpFn([storyFailDemon.part1, a2NoF.n37, storyFailDemon.part1]);
      setOpNpcCom([
        "😁",
        "Yes! Wasn't that what the rules said?",
        "All right, I'll do it",
      ]);
    }
    if (lastChoiceNum === 2) {
      npcMessage("Okay...");
      npcMessageAndSetOptText("Are you sure btw?", [
        "Yes, just take breather",
        "Maybe just say bye to Emily",
        "No, burn the painting",
      ]);
      setOpFn([storyFailDemon.part1, storyFailDemon.part1, a2NoF.n37]);
    }
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
      "Guess I'll make sure to smother the last embers is the only thing I can go now",
      [`Good NOW GET BACK IN`, `Look at the time!`, `No, why would he be mad?`],
      0,
      0
    );
    setOpFn([a2NoF.n42, a2NoF.n39, a2NoF.n38b]);
    setOpNpcCom([
      "Oh yeah right, it's late",
      "Yeah? But do you think I will lose the job cause of this?",
      "Cause I burned a painting of his?",
    ]);
  },

  n38b: function () {
    npcMessageAndSetOptText("I'd think he'd be a bit mad", [
      "But you had to",
      "Worry about that later, get inside",
      "Yeah actually he might be pretty pissed",
    ]);
    setOpFn([a2NoF.n38d, a2NoF.n42, a2NoF.n38c]);
    setOpNpcCom(["Yeah I guess so", undefined, undefined]);
  },
  n38c: function () {
    npcMessageAndSetOptText("Sh*t... Oh well, gotta get back in now...", [
      "Yes, that's for the best",
      "Good!",
      "Clean up the painting first!",
    ]);
    setOpFn([a2NoF.n39, a2NoF.n38d, a2NoF.n40]);
  },

  n38d: function () {
    fastForwardClock(`${hours}:${minutes + 5}`, a2NoF.n41);
  },

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
    fastForwardClock("23:57", a2NoF.n41);
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
    a2End.a2EndPart();
  },
};

const a2End = {
  a2EndPart: function () {
    npcMessage(`I'm gonna chill with my book for a while`);
    fastForwardClock(`${0}:${26}`, a3.p1);
  },
};
