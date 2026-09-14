import type { PELesson } from "../../../KS1/types";

export const footballYear6Lesson2: PELesson = {
  number: 2,
  title: "Dribble Knockout, 2v2 Attacking & Defending & 4 Corner Football",

  learningObjectives: [],

  learningObjectiveGroups: [
    {
      heading: "Physical",
      objectives: [
        "Demonstrate dribbling with complete control at speed, with and without pressure.",
        "Demonstrate accurate weighted passes in a game situation, using both feet and various passing techniques.",
        "Apply, Demonstrate and Self-Evaluate jockeying in 1v1 defending situations.",
        "Continue to apply the correct decision of which tackling technique to implement in any given scenario.",
        "Apply, Demonstrate and Self-Evaluate accurate shots on goal, with adequate placement and power.",
      ],
    },
    {
      heading: "Game Play",
      objectives: [
        "Apply, Demonstrate and Self-Evaluate passing and receiving the ball to move the ball towards a goal.",
        "Apply and Demonstrate passing the ball using the weaker foot.",
        "Demonstrate an understanding of attacking and defending roles and responsibilities in a game and display tactical justification for these.",
      ],
    },
    {
      heading: "Social and Emotional",
      objectives: [
        "Demonstrate effective communication with a team mate with varying stipulations in place.",
        "Demonstrate praise and encouragement of team mates with varying stipulations in place.",
      ],
    },
  ],

  terminology: ["Scan", "Shield", "Accelerate", "Space", "Transition", "Decision making", "Goal Side"],
  equipment: ["Footballs", "Cones", "Goals/large cones"],

  coachingReference: {
    title: "How to defend 1v1",
    points: [
      "Position yourself goal side.",
      "Close down the space and move towards the attacker.",
      "Jockey the player.",
      "Watch the ball and wait for the mistake.",
      "Avoid diving in too early.",
      "Tackle when the attacker makes a poor touch.",
      "If the attacker gets past you, turn and accelerate to get back goal side.",
    ],
  },

  activities: [
    {
      type: "Warm Up",
      icon: "⚡",
      title: "Dribble Knockout",
      sections: [
        {
          heading: "Activity Details",
          blocks: [
            {
              type: "list",
              items: [
                "Set up a coned activity area big enough for every child.",
                "Every child has a ball.",
              ],
            },
            {
              type: "paragraph",
              text: "Every child dribbles around the activity area keeping the ball under control while attempting to kick other children's footballs out of the area.",
            },
            {
              type: "paragraph",
              text: "If a child loses control and their ball is kicked out, they are out. The last child with the ball at their feet is the winner.",
            },
          ],
        },
        {
          heading: "Skill Development - Coaching Points Breakdown",
          blocks: [
            {
              type: "list",
              items: [
                "Use both feet and different parts of the foot to maintain control.",
                "Use your body between the defender and the ball to protect possession.",
                "Use feints and turns to disguise your next movement.",
                "Look for opportunities to attack an opponent's ball when they take a poor touch.",
                "Scan before moving so you can identify the safest space.",
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
                "Provide a safe zone where players cannot be challenged for a few seconds.",
                "Require a turn or skill each time a player changes direction.",
                "Introduce turns such as the drag-back or Cruyff turn.",
              ],
            },
          ],
        },
      ],
    },
    {
      type: "Skill Development",
      icon: "🛡️",
      title: "2v2 Attacking & Defending",
      sections: [
        {
          heading: "Activity Details",
          blocks: [
            {
              type: "list",
              items: [
                "Children work in small groups with 4 playing at a time.",
                "Red cone represents the defender; blue cones represent attackers.",
                "Children change cones clockwise after each turn.",
                "Use 1 ball and 1 goal per group.",
              ],
            },
            {
              type: "paragraph",
              text: "The defender passes the ball to one of the attackers. As soon as the pass is made, the defender becomes active. The attackers work together using dribbling and passing to reach the goal.",
            },
            { type: "paragraph", text: "Progress to shooting with a goalkeeper added." },
          ],
        },
        {
          heading: "Skill Development - Coaching Points Breakdown",
          blocks: [
            {
              type: "list",
              items: [
                "Create width and depth to provide more passing options.",
                "Use the first touch away from pressure and into space.",
                "Recognise and exploit a 2v1 when a defender commits.",
                "Attack with intent and look for opportunities to finish.",
                "Defenders should remain goal side.",
                "When possession is lost, the nearest player applies immediate pressure while teammates recover and support.",
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
                "Increase the playing area to give attackers more decision-making time.",
                "Begin with jockeying before adding tackling.",
                "Introduce a 3-touch limit before passing or shooting.",
              ],
            },
          ],
        },
      ],
    },
    {
      type: "Game Play",
      icon: "⚽",
      title: "4 Corner Football",
      sections: [
        {
          heading: "Activity Details",
          blocks: [
            {
              type: "list",
              items: [
                "Split the group into 4 teams.",
                "Each team sits behind a goal in one corner of the activity space.",
                "Number children in each corner so each team has matching numbers.",
              ],
            },
            {
              type: "paragraph",
              text: "Roll a ball into the middle and call a number. The corresponding player from each team enters the area. Each player tries to score in another team's goal.",
            },
            {
              type: "paragraph",
              text: "A goal earns a point and ends the round. Continue by calling different numbers.",
            },
          ],
        },
        {
          heading: "Skill Development - Coaching Points Breakdown",
          blocks: [
            {
              type: "list",
              items: [
                "React quickly and assess the ball, opponents and goals.",
                "Use changes of speed and direction to create separation.",
                "Jockey the attacker, stay balanced and avoid diving into tackles.",
                "Stay goal-side and protect the most dangerous route to goal.",
                "Get your body over the ball when striking to keep the shot controlled.",
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
                "Reduce the playing area.",
                "Make the goals bigger or smaller.",
                "Call more than one number so players have team mates to support and can use passing.",
              ],
            },
          ],
        },
      ],
    },
  ],

  learningQuestions: [
    "How did you keep control of the ball when dribbling at speed?",
    "How did you decide how much weight to put on your passes?",
    "How did you decide when and how to tackle an opponent?",
    "What signs told you when to switch from attack to defence?",
    "How well did you communicate and encourage your teammates today?",
    "What was one thing you did well when passing or shooting, and one thing you could improve?",
  ],
};
