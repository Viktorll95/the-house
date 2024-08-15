"use strict";

const a3 = {
  p1: function () {
    npcMessageAndSetOptText(`${playerName}?`, [
      "Yeah",
      "Something happen?",
      "Yes?",
    ]);
    setOpFn([a3.p2, a3.p2, a3.p2]);
  },

  p2: function () {
    npcMessage("There was a knock on the door");
    npcMessageAndSetOptText(`I'm going to see who it is`, [
      "Do that",
      `No, don't!`,
      "Be careful",
    ]);
    setOpFn([a3.p3, a3.p3, a3.p3]);
    setOpNpcCom([
      `Let's see`,
      `I'm just going to see who it is, I didn't say I was going to open`,
      `Yep!`,
    ]);
  },

  p3: function () {
    npcMessage(`Oh it's the pizza guy!`);
    npcMessage(`Finally`);
    npcMessageAndSetOptText(
      `He says that ${pizzaOrderedStr} was ordered to this adress`,
      [`Nice! Finally!`, `Give him a scolding`, `Don't open the door`]
    );
    setOpFn([a3.p3Fail, a3.p3Fail, a3.p4]);
    setOpNpcCom(
      [
        "Yeah, finally some sweet pizza",
        "Not my kind of thing, but I'm actually inclined to do that...",
      ],
      undefined
    );
  },

  abortFailFunc: false,
  p3Fail: function () {
    npcMessageAndSetOptText(`I'm opening the door now`, [
      "No don't!",
      "WAIT",
      "Let's!",
    ]);
    setOpFn([a3.p4, a3.p4, storyFailDemon.part1]);
    setTimeout(() => {
      if (!p3.abortFailFunc) {
        btnOpHide();
        storyFailDemon.part1();
      }
    }, 5000);
  },

  p4: function () {
    a3.abortFailFunc = true;
    npcMessageAndSetOptText("Why?", [
      "Just a bad feeling",
      "Remember the rules?",
      "Just kidding, open it!",
    ]);
    setOpFn([a3.p5, a3.p5, storyFailDemon.part1]);
    setOpNpcCom([
      "Okay, I mean this whole thing is creepy but I trust you",
      "Something about not letting someone in after 00:00?",
      "I'll open it!",
    ]);
  },

  p5: function () {
    npcMessageAndSetOptText(`${playerName}? He is still at the door`, [
      "Just ignore him",
      `Tell him "wrong house"`,
      "Go do something else then",
    ]);
    setOpFn([a3.p7, a3.p6, a3.p7]);
    setOpNpcCom(["All right, I will", undefined, "I'll try, thanks"]);
  },

  p6: function () {
    npcMessage(
      `He said 'no' and repeated this exact adress with the pizzas we ordered`
    );
    btnOpShow([
      "Tell him to just leave then",
      "Just ignore him",
      "Maybe you should open the door then",
    ]);
    setOpFn([a3.p7, a3.p7, storyFailDemon.part1]);
    setOpNpcCom([undefined, undefined, "All right, I'll open it"]);
  },

  p7: function () {
    fastForwardClock(`${hour}:${minutes + 6}`, a3.p8);
  },
  p8: function () {
    npcMessageAndSetOptText(
      "Okay, I think he left, still feel a bit bad thought",
      [
        "Well done!",
        "Don't feel bad, you had too",
        "At least your as still alive",
      ]
    );
    setOpFn([a3.p9, a3.p9, a3.p9]);
    setOpNpcCom(["Thanks", "I'll try to, thanks", "Ha. ha."]);
  },

  p9: function () {
    fastForwardClock(`${hour}:${minutes + 15}`, a3.p10);
  },

  movieVolume: 0,
  p10: function () {
    npcMessageAndSetOptText(`Maybe I should watch a movie or something`, [
      "Just watch at low volume",
      "Use your phone",
      "Use the tv",
    ]);
    setOpFn([a3.p11, a3.p11, a3.p11]);
    setOpNpcCom(["Okay 🙌", "Okay 🙌", "Okay 🙌,"]);
  },

  p11: function () {
    a3.movieVolume = lastChoiceNum;

    npcMessageAndSetOptText(
      `Which one is your favorite of 'Jurassic park', 'The Dark Knight' and 'The Shawshank Redemption'?`,
      ["Jurassic park", "The Dark Knight", "The Shawshank Redemption"]
    );
    setOpFn([a3.p12, a3.p12, a3.p12]);
    setOpNpcCom([
      "Great movie, and way more horror-y vibes than the later Jurassic world movies",
      "My favorite Batman-movie,fully specked with AAA-actors",
      "A true classic, probably has the highest grade of any movie on IMDB, right?",
    ]);
  },
  movie: "",
  p12: function () {
    npcMessage("Did you know?");
    if (lastChoiceNum === 0) {
      a3.movie = "Jurassic park";
      npcMessage(
        "That the T. rex attack scene where the dinosaur breaks through the glass roof of the car was not in the script."
      );
      npcMessage(
        "The animatronic T. rex malfunctioned and actually broke the glass"
      );
      npcMessage("So the fear of the actors was actually genuine 😅");
    }
    if (lastChoiceNum === 1) {
      a3.movie = "The Dark Knight";
      npcMessage(
        "That the scene where the Joker blows up a hospital was real?. The explosion was real, and Heath Ledger’s improvised reaction to the slight delay in the explosion became an iconic part of the scene."
      );
      npcMessage(
        "Heath Ledger’s just improvised a reaction to the slight delay that wasn't in the script"
      );
      npcMessage(
        "Then the explosion happened after a perfect delay and improvisation and the Jokers reaction to the slight delay in the explosion became an iconic part of the scene. 😁"
      );
    }
    if (lastChoiceNum === 2) {
      a3.movie = "The Shawshank Redemption";
      npcMessage(
        "The movie is now seen as an absolute classic and is at least one of the top three movies in imdb. But on the premiere it was actually a fiasco"
      );
      npcMessage(
        "Since then it achieved popularity throught the word of mouth (since internet was not a thing then) and now it's considered a classic"
      );
      npcMessage("Oh yeah, and it's based on one of Stephen King's books!");
    }
    btnOpShow([
      "You know your movies!",
      "Interesting! Didn't know that",
      "Who cares...",
    ]);
    setOpFn([a3.p13, a3.p13, a3.p13]);
    setOpNpcCom([
      "I'm a bit nerdy I guess 🤓",
      "If you can't tell, I love movies! 😁",
      "...",
    ]);
  },
  p13: function () {
    npcMessage(`All right, I'll guess i can watch ${movie} one more time 😉`);
    fastForwardClock(`${hour}:${minutes + 45}`, a3.p14);
  },
  p14: function () {
    if (a3.movieVolume === 0) {
      npcMessageAndSetOptText(
        "I think I'm hearing something from the kitchen, sounds like music",
        ["It could be the radio", "Go check it out", "Probably nothing"]
      );
      setOpFn([a3.p15, a3.p15, storyFailDemon.part1]);
      setOpNpcCom([
        undefined,
        undefined,
        "All right, i'll just keep watching then",
      ]);
    }
    if (a3.movieVolume === 1) {
      npcMessageAndSetOptText(
        "I think I'm hearing something from the kitchen",
        ["It could be the radio", "Go check it out", "Probably nothing"]
      );
      setOpFn([a3.p15, a3.p15, storyFailDemon.part1]);
      setOpNpcCom([
        undefined,
        undefined,
        "All right, i'll just keep watching then",
      ]);
    }
    if (a3.movieVolume === 2) {
      npcMessageAndSetOptText(
        "I think I heard something, and not from the tv",
        ["Go check it out", "Probably just an old tv", "Probably nothing"]
      );
      setOpFn([a3.p15, storyFailDemon.part1, storyFailDemon.part1]);
      setOpNpcCom([
        undefined,
        "All right, i'll just keep watching then",
        "All right, i'll just keep watching then",
      ]);
    }
  },
  p15: function () {
    npcMessage(
      "The closer I get to the kitchen, the more it sounds like music"
    );
    npcMessage(`Yes it's definitely the radio`);
    npcMessageAndSetOptText(`This is creepy, I haven't even turned it on`, [
      "Turn it off",
      "Leave it as it is",
      "Go out of the room",
    ]);
    setOpFn([a3.p16, storyFailDemon.part1, storyFailDemon.part1]);
    setOpNpcCom(["Turning it off", "Okay", "Okay, leaving the room now"]);
  },
  p16: function () {
    npcMessageAndSetOptText("Damn...", ["What?", "What's happening?", "..."]);
    setOpFn([a3.p17, a3.p17, a3.p17]);
    setOpNpcCom(["I'm sure I left my keys in the tv-room, but there not here"]);
  },
  p17: function () {
    npcMessageAndSetOptText(
      "I'm 99% sure I left them on the table before I went into the kitchen, but they're not here",
      [
        "Just calmly leave the room",
        "Check under the furniture",
        "Just continue watching the movie",
      ]
    );
    setOpFn([a3.p18, a3.p18, storyFailDemon.part1]);
    setOpNpcCom([undefined, undefined, "Okay... I just have to chill I guess"]);
  },
  p18: function () {
    if (lastChoiceNum === 1) {
      npcMessageAndSetOptText("Just checked, it's not there", [
        "Just calmly leave",
        "Continue searching the room",
        "Just continue watching the movie",
      ]);
      setOpFn([a3.p18, storyFailDemon.part1, storyFailDemon.part1]);
      setOpNpcCom([
        undefined,
        "All right, I'll try to find it",
        "Okay... I just have to chill I guess",
      ]);
    } else {
      npcMessage("Okay I will");
      npcMessageAndSetOptText("This is starting to freaking me out", [
        "Understandable, but take it easy",
        "Just breathe and it will be fine",
        "Because it is terrifying!!",
      ]);
      setOpFn([a3.p19, a3.p19, a3.p19]);
    }
  },
  p19: function () {
    fastForwardClock(`${hour}:${minutes + 6}`, a3.p20);
  },
  p20: function () {
    btnOpShow([`${npcName}?`, "All good?", "How's it going?"]);
    setOpFn([a3.p20, a3.p20, a3.p20]);
    setOpNpcCom(
      [`${playerName}!`, "Yep all good", "Going well"],
      "Just started watching the movie in another room"
    );
  },
  p20: function () {
    btnOpShow([
      `Good, just checking`,
      "Found the keys?",
      "Anything more happen",
    ]);
    setOpFn([a3.p21, a3.p21, a3.p21]);
    setOpNpcCom([
      `That's nice of you 😊`,
      "Nope, but haven't gotten back to check",
      "No not yet, but I'm guessing there is more to come",
    ]);
  },
  p21: function () {
    fastForwardClock(`${hour}:${minutes + 59}`, a3.p22);
  },
  p22: function () {
    npcMessage("What a movie! Almays good to see a classic");
    npcMessage("I went back and found my keys as well!");
    npcMessage("But there was a surprise");
    npcMessageAndSetOptText("I found another note...", [
      "Yes?",
      "What does it say?",
      "Aaaaand?",
    ]);
    setOpFn([a3.p23, a3.p23, a3.p23]);
  },
  p23: function () {
    npcMessage(
      `It says ‘If the police comes knocking after you burned a painting, you have to let them in.’`
    );
    npcMessage("Mhm");
    npcMessageAndSetOptText("Oh...", ["?", "Yeah?", "What happened?"], 3000);
    setOpFn([a3.p24, a3.p24, a3.p24]);
  },
  p24: function () {
    npcMessage(`There was a knock on the door`);
    npcMessage("Hold on...");
    npcMessageAndSetOptText(
      "It's the police",
      ["Ask them why there here", , "What are they saying?", "Open the door!"],
      8000
    );
    setOpFn([a3.p25, a3.p25, storyFailDemon.part1]);
  },
  p25: function () {
    npcMessage(`There saying that they are investigating an arson`);
    npcMessage("The say some neighbours have reported heavy smoke and fire");
    npcMessageAndSetOptText("They have to come in and investigate", [
      "Don't open the dooor",
      "Tell them you are innocent",
      "You have to open the door",
    ]);
    setOpFn([a3.p26, a3.p26, storyFailDemon.part1]);
    setOpNpcCom([undefined, undefined, "Okay, I'll open the door"]);
  },
  p25: function () {
    if (lastChoiceNum === 0) {
      npcMessage("Okay");
    }
    if (lastChoiceNum === 0) {
      npcMessage(
        "Just told them, they say that they have to investigate anyway"
      );
    }
    npcMessage(`They even say they've been in contact with Withaker`);
    npcMessage("They know my name! Shit");
    npcMessage(
      "If I don't open the door I can be charged for obstructing justice and be sentenced"
    );
    npcMessageAndSetOptText("What should I do?", [
      "Doesn't matter, DON'T OPEN",
      "Maybe you have to open the door",
      "Call Whitaker",
    ]);
    setOpNpcCom([undefined, "Okay, I'll open it", "No answer..."]);
    setOpFn([a3.p26, storyFailDemon.part1, a3.p26]);
  },
  p26: function () {
    npcMessageAndSetOptText(
      "Last chance, they say, otherwise they will cave in the door",
      ["Stay strong and don't open", "Barricace the door", "Open the door"],
      5000
    );
    setOpNpcCom(["Okay", "I'll do that!", "Okay"]);
    setOpFn([a3.p27, a3.p27, storyFailDemon.part1]);
  },
  p27: function () {
    npcMessage("Holy sh*t, I think the door is gonna come in", 5000);
    npcMessage("The outside of the entré must be completely destroyed");
    npcMessageAndSetOptText("Whitaker is gonna be crazy mad ", [
      "Not your problem",
      "Don't mind and don't open!",
      "Maybe you should open",
    ]);
    setOpNpcCom([
      "I guess not, but it's gonna take some explaining",
      "Okay",
      "Okay, I'll open it",
    ]);
    setOpFn([a3.p28, storyFailDemon.part1, a3.p28]);
  },
  p27: function () {
    npcMessage("Holy sh*t, I think the door is gonna come in", 5000);
    npcMessage("The outside of the entré must be completely destroyed");
    npcMessageAndSetOptText("Whitaker is gonna be crazy mad ", [
      "Not your problem",
      "Don't mind and don't open!",
      "Maybe you should open",
    ]);
    setOpNpcCom([
      "I guess not, but it's gonna take some explaining",
      "Okay",
      "Okay, I'll open it",
    ]);
    setOpFn([a3.p28, storyFailDemon.part1, a3.p28]);
  },

  p28: function () {
    fastForwardClock(`${hour}:${minutes + 6}`, a3.p29);
  },
  p29: function () {
    btnOpShow([
      `${npcName}? All good?`,
      "Is the police still there?",
      "How's it going?",
    ]);

    setOpFn([a3.p30, a3.p30, a3.p30]);
    setOpNpcCom(
      [
        "Well, not all good, but decent",
        "I think so",
        "Good and not good, at the same time",
      ],
      "They've stopped the worst of it, but I still hear noice outside the door, it's like something is outside but I don't know what"
    );
  },
  p30: function () {
    npcMessageAndSetOptText(
      "But they are not charging at the door anymore and no one is talking to me",
      ["Good that", "Stay strong", "Keep the door closed"]
    );
    setOpFn([a3.p31, a3.p31, a3.p31]);
    setOpNpcCom([
      "Yes, still creepy but better than before",
      "Thanks! I'll try!",
      "I will, thanks",
    ]);
  },
  p31: function () {
    fastForwardClock(`${6}:${0}`, success.s1);
  },
  p32: function () {},
};

success = {
  s1: function () {
    npcMessage("I think... I made it troughtout the night");
    npcMessage("I'm going to open the main door");
    npcMessage("Huh it just opened", 5000);
    npcMessage("There is no signs of wear, not even a dent");
    npcMessage("Even the ashes from the burnt painting is gone");
    npcMessage("I think I've done it");
    npcMessage("With your help");
    npcMessageAndSetOptText(
      "Thanks you so much! I don't think I could've done it without you",
      ["You're welcome!", "Glad you're well", "Now, cut contact with Whitaker"]
    );
    setOpFn([success.s2, success.s2, success.s2]);
    setOpNpcCom([
      "😄😄😄",
      "Thanks to you 🤗",
      "Yeah haha, this is my last job from him 😅",
    ]);
  },

  s2: function () {
    setTimeout(() => {
      endGameSuccess();
    }, 1500);
  },
};
