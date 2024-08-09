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
        storyFailDemon();
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

  p10: function () {
    npcMessage("THE LIMIT HAS BEEN REACHED");
  },
};
