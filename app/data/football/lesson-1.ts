import type { PELesson } from "./types";

export const footballLesson1: PELesson = {
  number: 1,
  title: "Traffic Light Dribbling, Dribble Relays & Sharks and Minnows",

  learningObjectives: [],

  learningObjectiveGroups: [
    {
      heading: "Physical",
      objectives: [
        "Start to dribble using dominant foot.",
        "Start to control a football by stopping it with the sole of the foot.",
        "Start to develop agility, balance and coordination with a ball at feet.",
      ],
    },
    {
      heading: "Game Play",
      objectives: [
        "Start to understand why we need to look up when dribbling and why this is needed in a game (to be able to see where they need to dribble to and to evade defenders).",
      ],
    },
    {
      heading: "Social and Emotional",
      objectives: [
        "Start to follow simple instructions and listen carefully.",
        "Start to build confidence when dribbling with a ball.",
      ],
    },
  ],

  terminology: [
    "Agility",
    "Balance",
    "Coordination",
    "Toe Taps",
    "Change direction",
  ],

  equipment: ["Cones", "Footballs", "Bibs"],

  coachingReference: {
    title: "How to dribble",
    points: [
      "Light on feet, knees bent, body weight over feet.",
      "Small, frequent touches.",
      "For close control aim to touch the ball with every step.",
      "Head up.",
      "Low centre of gravity.",
      "Always work towards dribbling with both feet.",
    ],
  },

  activities: [
    {
      type: "Warm Up",
      icon: "🚦",
      title: "Traffic Light Dribbling",
      sections: [
        {
          heading: "Activity Details",
          blocks: [
            {
              type: "list",
              items: [
                "Children are given a ball each.",
                "Coach to have 5 different coloured cones.",
                "Red - Stop.",
                "Green - Go.",
                "Orange - Slow Down.",
                "Yellow - Change Direction.",
                "Blue - Toe taps on top of the ball.",
              ],
            },
            {
              type: "paragraph",
              text: "Children are to dribble the ball around the activity area.",
            },
            {
              type: "paragraph",
              text: "When a colour is called out the children should do the relevant action.",
            },
          ],
        },
        {
          heading: "Skill Development - Coaching Points Breakdown",
          blocks: [
            {
              type: "list",
              items: [
                "The children should be using the inside of the foot to dribble the ball.",
                "The ball should be kept close to the feet.",
                "Focus on head up whilst dribbling and not looking down at the floor.",
                "Use both feet where possible.",
              ],
            },
          ],
        },
        {
          heading: "Adaptations and Progressions",
          blocks: [
            {
              type: "list",
              items: [
                "Increase the amount of call outs.",
                "Just hold up the cone and don't call the colour so that the children have to look up to see the change.",
                "Increase the activity space so the pace can increase.",
                "Reduce the activity space so that the control must be tighter.",
              ],
            },
          ],
        },
      ],
    },

    {
      type: "Skill Development",
      icon: "⚽",
      title: "Dribble Relays",
      sections: [
        {
          heading: "Activity Details",
          blocks: [
            {
              type: "list",
              items: [
                "Children set up into teams behind a cone at one end of the activity area.",
                "Each team has a ball.",
                "Each team needs a cone at the other end of the activity area opposite their team.",
              ],
            },
            {
              type: "paragraph",
              text: "Each team one at a time will dribble the ball up towards their cone, around it and dribble it back down.",
            },
            {
              type: "paragraph",
              text: "They will stop the ball and the next person will have their turn.",
            },
            {
              type: "paragraph",
              text: "Progress into a race and the first team for all children to complete the activity wins.",
            },
          ],
        },
        {
          heading: "Skill Development - Coaching Points Breakdown",
          blocks: [
            {
              type: "list",
              items: [
                "Use the inside of the foot when dribbling.",
                "Children use both feet when dribbling.",
                "Head up when moving.",
                "Ball kept under close control.",
                "Children stop the ball with the sole of their foot on top of the ball.",
              ],
            },
          ],
        },
        {
          heading: "Adaptations and Progressions",
          blocks: [
            {
              type: "list",
              items: [
                "Add defenders into the middle of the area that will need to try and kick the ball away.",
                "Add cones in the activity area that the children need to avoid when they're going forwards and backwards.",
                "On the way back the children should stop 3 metres from their team and pass the ball back.",
              ],
            },
          ],
        },
      ],
    },

    {
      type: "Game Play",
      icon: "🦈",
      title: "Sharks and Minnows",
      sections: [
        {
          heading: "Activity Details",
          blocks: [
            {
              type: "list",
              items: [
                "Set up a clear activity area with an 'out zone' all the way around it.",
                "Choose 2 sharks who will have a bib on, no ball and be stood in the middle of the playing area.",
                "The other children will be stood in space with a ball at their feet.",
              ],
            },
            {
              type: "paragraph",
              text: "On 3, 2, 1 the sharks run around and try to tackle/kick the ball away from the other children into the 'out zone'.",
            },
            {
              type: "paragraph",
              text: "If children lose their ball they retrieve it, stand with their feet apart and place the ball on their head.",
            },
          ],
        },
        {
          heading: "Skill Development - Coaching Points Breakdown",
          blocks: [
            {
              type: "list",
              items: [
                "Children should be dribbling with 2 feet, keeping close control.",
                "Children should have their head up when dribbling around.",
                "Sharks need to use the sole of their foot to drag the ball away from another player.",
                "Sharks can also use the side of their foot to kick the ball away from a minnow.",
              ],
            },
          ],
        },
        {
          heading: "Adaptations and Progressions",
          blocks: [
            {
              type: "list",
              items: [
                "Add more sharks.",
                "When the minnows have lost their ball the other minnows can free the minnows with the ball on their head by dribbling the ball through their legs.",
              ],
            },
          ],
        },
      ],
    },
  ],

  learningQuestions: [
    "Can they effectively move with the ball?",
    "Can they control the ball by stopping it with the sole of the foot?",
    "Do they understand that moving with the ball is dribbling?",
    "Can they listen and follow instructions?",
    "Are they increasing their confidence when dribbling?",
  ],

  videoSupport: {
    available: true,
  },
};