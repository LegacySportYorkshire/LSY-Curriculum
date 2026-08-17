import type { DanceLesson } from "./types";

export const lesson3: DanceLesson = {
  number: 3,
  title: "Rhythm Master, Copy Cat & Dance Battle",

  learningObjectives: [
    "Hear the beat in the music and move to it.",
    "Recall a motif and perform it in time with the music.",
    "Create a motif based upon a stimulus.",
    "Perform a motif to the rest of the group.",
  ],

  terminology: ["Beat", "Motif", "Theme", "Stimulus"],

  choreographicDevices: ["Unison", "Dynamics", "Tempo"],

  activities: [
    {
      type: "Warm Up",
      icon: "🔥",
      title: "Rhythm Master",
      sections: [
        {
          heading: "Set Up",
          blocks: [
            {
              type: "list",
              items: [
                "All children in a circle.",
                "Choose a detective.",
                "Choose a Rhythm Master.",
              ],
            },
          ],
        },
        {
          heading: "Game",
          blocks: [
            {
              type: "paragraph",
              text: "Similar set up to wink murder. The detective leaves the circle and the group decides on a Rhythm Master.",
            },
            {
              type: "paragraph",
              text: "The detective returns to the circle. All children in the circle start by stepping once to each side.",
            },
            {
              type: "paragraph",
              text: "The Rhythm Master changes the dance move as many times as possible and the rest of the circle must copy.",
            },
            {
              type: "paragraph",
              text: "The detective needs to guess who the Rhythm Master is.",
            },
          ],
        },
      ],
    },

    {
      type: "Skill Development",
      icon: "💃",
      title: "Copy Cat",
      sections: [
        {
          heading: "Set Up",
          blocks: [
            {
              type: "paragraph",
              text: "All children in a space. Use a 'windows' formation to get the children used to a formation. Windows is where each row is staggered so that each child is in a gap and doesn't have someone directly in front of them.",
            },
          ],
        },
        {
          heading: "Game",
          blocks: [
            {
              type: "paragraph",
              text: "The coach at the front starts doing dance moves to the beat and the rest of the class copies.",
            },
            {
              type: "paragraph",
              text: "This can be done to famous songs, e.g. Macarena.",
            },
          ],
        },
        {
          heading: "Progression",
          blocks: [
            {
              type: "callout",
              tone: "blue",
              title: "💡 Progress the activity",
              text: "Choose a child to be the person everyone should copy. Use a 4 count and then an 8 count for each motif.",
            },
          ],
        },
      ],
    },

    {
      type: "Game",
      icon: "🎵",
      title: "Dance Battle",
      sections: [
        {
          heading: "Set Up",
          blocks: [
            {
              type: "list",
              items: [
                "Split the class into teams.",
                "Teams stand one behind the other, facing an opposing team.",
                "Music required.",
              ],
            },
          ],
        },
        {
          heading: "Game",
          blocks: [
            {
              type: "paragraph",
              text: "One person from group 1 walks into the middle, creates a count of 8, then walks back to the end of their line.",
            },
            {
              type: "paragraph",
              text: "The first person from the opposite line then walks into the middle, does the same, and walks to the back of their line.",
            },
            {
              type: "paragraph",
              text: "Continue until the music stops.",
            },
          ],
        },
      ],
    },
  ],

  videoSupport: { available: true },
};