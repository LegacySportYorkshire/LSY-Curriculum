import type { DanceLesson } from "./types";

export const lesson4: DanceLesson = {
  number: 4,
  title: "Theme Game, Create Your Own & Performance",

  learningObjectives: [
    "Hear the beat in the music and move to it.",
    "Recall a motif and perform it in time with the music.",
    "Create a motif based upon a stimulus.",
    "Start to use choreographic devices to add to a motif to develop a routine.",
    "Perform a routine to the rest of the group.",
  ],

  terminology: ["Beat", "Motif", "Theme", "Stimulus"],

  choreographicDevices: ["Unison", "Dynamics", "Tempo"],

  activities: [
    {
      type: "Warm Up",
      icon: "🔥",
      title: "Theme Game",
      sections: [
        {
          heading: "Set Up",
          blocks: [
            {
              type: "list",
              items: ["Split the group into small groups of 2–6."],
            },
          ],
        },
        {
          heading: "Game",
          blocks: [
            {
              type: "paragraph",
              text: "Each group is given a theme that they need to use as a stimulus to create a motif.",
            },
            {
              type: "paragraph",
              text: "Themes can include: theme park, holiday, school etc. or a feeling such as sad, happy, excited or angry.",
            },
            {
              type: "paragraph",
              text: "The group then performs their motif to the rest of the class and the class needs to guess the theme.",
            },
          ],
        },
      ],
    },

    {
      type: "Skill Development",
      icon: "💃",
      title: "Create Your Own",
      sections: [
        {
          heading: "Set Up",
          blocks: [
            {
              type: "paragraph",
              text: "Split the group into small groups: 2 = easier, 6 = harder.",
            },
          ],
        },
        {
          heading: "Game",
          blocks: [
            {
              type: "paragraph",
              text: "Give groups a stimulus. This could be music, a theme or a dance style.",
            },
            {
              type: "paragraph",
              text: "Groups create a motif based on the theme.",
            },
            {
              type: "paragraph",
              text: "Emphasise performance skills including facial expressions, energy and creative flair.",
            },
          ],
        },
      ],
    },

    {
      type: "Game",
      icon: "⭐",
      title: "Performance",
      sections: [
        {
          heading: "Set Up",
          blocks: [
            {
              type: "list",
              items: [
                "Keep the groups from the previous activity.",
                "Set up a 'stage area' and have all the children sit as an audience.",
              ],
            },
          ],
        },
        {
          heading: "Activity",
          blocks: [
            {
              type: "paragraph",
              text: "Each group comes up onto the stage and performs their dance to the rest of the group.",
            },
            {
              type: "paragraph",
              text: "Emphasise creating performance skills — facial expressions, energy and creative flair.",
            },
          ],
        },
      ],
    },
  ],

  videoSupport: { available: true },
};