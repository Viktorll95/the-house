"use strict";

const a3 = {
  p1: function () {
    npcMessage("THE LIMIT HAS BEEN REACHED");
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
    setOpFn([storyFailDemon.part1, storyFailDemon.part1, a3.p4]);
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
    setOpFn([
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
    setOpNpcCom([
      "All right, I will",
      "He said 'no' and repeated this exact adress with the pizzas we ordered",
      "I'll try, thanks",
    ]);
  },

  p6: function () {
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
    setOpFn([a3.p18, a3.p18, a3.p18]);
  },
  p18: function () {
    npcMessage("THE LIMIT HAS BEEN REACHED");
  },
};
