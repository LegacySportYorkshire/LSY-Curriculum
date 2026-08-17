import type { DanceLesson } from "./types";

export const lesson1: DanceLesson = {
  number: 1,
  title: "Beginner Beats & Moving to the Beat",
  learningObjectives: [
    "Hear the beat in the music and move to it.",
    "Recall a motif.",
    "Recall a motif to the beat of the music.",
    "Begin to identify different ways to move the body.",
  ],
  terminology: ["Beat", "Motif", "Action", "Facial Expressions"],
  choreographicDevices: ["Unison", "Dynamics", "Tempo"],
  activities: [
    {
      type: "Warm Up",
      icon: "🔥",
      title: "Beginner Beats",
      sections: [
        {
          heading: "Set Up",
          blocks: [
            {
              type: "list",
              items: ["Music required.", "Children should all find a space."],
            },
          ],
        },
        {
          heading: "Game",
          blocks: [
            { type: "paragraph", text: "Play songs which have a dance already made up for you." },
            {
              type: "paragraph",
              text: "Examples include Macarena, 5,6,7,8, Gangnam Style and Kung Fu Fighting.",
            },
            { type: "paragraph", text: "Encourage the children to start moving to the beat of the music." },
            {
              type: "paragraph",
              text: "Use popular songs to encourage action movements to the beat, such as step-togethers, jumps, slides and arm rolls.",
            },
          ],
        },
      ],
    },
    {
      type: "Skill Development",
      icon: "💃",
      title: "What Time Is It, Dance Master?",
      sections: [
        {
          heading: "Set Up",
          blocks: [
            {
              type: "list",
              items: [
                "Music required.",
                "Set up the game like What Time Is It, Mr Wolf?",
                "Children find a space at the back of the room.",
                "One Dance Master stands at the top of the dance space.",
              ],
            },
          ],
        },
        {
          heading: "Game",
          blocks: [
            { type: "paragraph", text: "The Dance Master turns their back to the group." },
            { type: "paragraph", text: "The group moves towards the Dance Master using different dance movements." },
            {
              type: "callout",
              tone: "yellow",
              title: "🛑 Freeze!",
              text: "When the Dance Master turns around, everyone must freeze.",
            },
            {
              type: "callout",
              tone: "red",
              title: "❌ If someone moves",
              text: "The Dance Master sends them back to the starting line.",
            },
            {
              type: "callout",
              tone: "green",
              title: "🏆 Winner",
              text: "The first child to touch the Dance Master wins and becomes the new Dance Master.",
            },
          ],
        },
      ],
    },
    {
      type: "Game",
      icon: "🎵",
      title: "Marching to the Beat",
      sections: [
        {
          heading: "Set Up",
          blocks: [{ type: "paragraph", text: "All children stand in a circle." }],
        },
        {
          heading: "Game",
          blocks: [
            { type: "paragraph", text: "The coach starts marching around the circle clockwise." },
            {
              type: "quote",
              text: "And we go marching... and we go marching... to the beat.",
              note: "Children sing along.",
            },
            { type: "paragraph", text: "The coach calls out an action, for example ‘funky monkey’." },
            { type: "paragraph", text: "The children respond: ‘What’s that you say?’" },
            { type: "paragraph", text: "Other examples include:" },
            { type: "chips", items: ["Funky Chicken", "Smooth Surfer", "Funky DJ", "Disco Diva"] },
            { type: "paragraph", text: "Children move into the circle while showing the action to the chant:" },
            { type: "quote", text: "Oo a oo a a a oo, 1 more time!" },
            { type: "paragraph", text: "Repeat the activity, changing the actions each time." },
          ],
        },
        {
          heading: "Progression",
          blocks: [
            {
              type: "callout",
              tone: "blue",
              title: "💡 Let the children choose their own actions.",
              text: "Examples could include Funky Football or Disco Dancing.",
            },
          ],
        },
      ],
    },
  ],
  videoSupport: { available: true },
};
