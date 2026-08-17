import type { DanceLesson } from "./types";

export const lesson2: DanceLesson = {
  number: 2,
  title: "Dance Corners, Dance Add On & Dance Whisper",
  learningObjectives: [
    "Hear the beat in the music and move to it.",
    "Recall a motif and perform it in time with the music.",
    "Begin to identify different dance moves from different styles of dance.",
    "Recall a motif and perform to a partner.",
  ],
  terminology: ["Beat", "Motif", "Theme", "Stimulus"],
  choreographicDevices: ["Unison", "Dynamics", "Tempo"],
  activities: [
    {
      type: "Warm Up",
      icon: "🔥",
      title: "Dance Corners",
      sections: [
        {
          heading: "Set Up",
          blocks: [
            {
              type: "list",
              items: [
                "All children in a space.",
                "Place four coloured cones, one in each corner, or four themed cards in each corner, e.g. Country & Western, Street Dance, Salsa and Fortnite dances.",
                "Demonstrate different steps in each corner for the children to do when they get into the corner for each dance style, e.g. Country & Western: Grapevine.",
              ],
            },
          ],
        },
        {
          heading: "Game",
          blocks: [
            {
              type: "paragraph",
              text: "All children are in the middle dancing to the music. The coach counts down from 10 to 1. When the count reaches 1, all children should be in a corner they choose doing their dance style. Go around and get each corner to demonstrate their style.",
            },
          ],
        },
        {
          heading: "Competition",
          blocks: [
            {
              type: "paragraph",
              text: "When counting down, have one child close their eyes and stand in the middle. At 1, the child chooses a corner to be out without looking.",
            },
            {
              type: "paragraph",
              text: "The children who are out keep dancing in the ‘out zone dance floor’.",
            },
          ],
        },
      ],
    },
    {
      type: "Skill Development",
      icon: "💃",
      title: "Dance Add On",
      sections: [
        {
          heading: "Set Up",
          blocks: [
            {
              type: "list",
              items: [
                "All the class in a big circle.",
                "Can be done in smaller groups.",
                "Music with a constant beat.",
              ],
            },
          ],
        },
        {
          heading: "Game",
          blocks: [
            {
              type: "paragraph",
              text: "The first person starts by doing 2 moves to the beat.",
            },
            {
              type: "paragraph",
              text: "The next person does the 2 moves from the person before them and then adds 2 more. The next person then needs to do the 4 previous moves and add 2 of their own.",
            },
            {
              type: "paragraph",
              text: "The last person will have to do everyone’s moves.",
            },
          ],
        },
        {
          heading: "Progression",
          blocks: [
            {
              type: "callout",
              tone: "blue",
              title: "💡 Make it easier",
              text: "Split the group into smaller groups.",
            },
          ],
        },
      ],
    },
    {
      type: "Game",
      icon: "🎵",
      title: "Dance Whisper",
      sections: [
        {
          heading: "Set Up",
          blocks: [
            {
              type: "paragraph",
              text: "Split the group into groups of 6 lined up so they have their backs to each other.",
            },
          ],
        },
        {
          heading: "Game",
          blocks: [
            { type: "paragraph", text: "Similar to Chinese whispers." },
            {
              type: "paragraph",
              text: "Person 1 turns to person 2 and performs a motif of 8. Person 2 turns to person 3 and performs person 1’s motif to person 3.",
            },
            { type: "paragraph", text: "Continue until everyone has done this." },
            {
              type: "paragraph",
              text: "Person 6 then performs their motif to the first person to see if the motif is correct.",
            },
          ],
        },
        {
          heading: "Progression",
          blocks: [
            {
              type: "callout",
              tone: "blue",
              title: "💡 Increase the challenge",
              text: "Add more people to the group.",
            },
          ],
        },
      ],
    },
  ],
  videoSupport: { available: true },
};
