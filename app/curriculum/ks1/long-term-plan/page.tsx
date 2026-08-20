import Link from "next/link";

type PlanWeek = {
  week: number;
  subject?: string;
  focus?: string[];
  href?: string;
};

type PlanRow = {
  year: "Year 1" | "Year 2";
  weeks: PlanWeek[];
};

type TermPlan = {
  term: string;
  rows: PlanRow[];
};

const plans: TermPlan[] = [
  {
    term: "Autumn 1",
    rows: [
      {
        year: "Year 1",
        weeks: [
          {
            week: 1,
            subject: "Football",
            focus: ["Dribbling", "Stopping", "ABC's"],
            href: "/curriculum/ks1/year-1/football/lesson-1",
          },
          {
            week: 2,
            subject: "Football",
            focus: [
              "Change of direction when dribbling",
              "Start to pass",
              "Looking up when dribbling",
            ],
            href: "/curriculum/ks1/year-1/football/lesson-2",
          },
          {
            week: 3,
            subject: "Football",
            focus: [
              "Passing the ball with the correct technique",
              "Why do we need to pass and move into space?",
              "Communicate with a partner",
            ],
            href: "/curriculum/ks1/year-1/football/lesson-3",
          },
          {
            week: 4,
            subject: "Football",
            focus: [
              "Pass and receive on the move",
              "Change direction and pace to avoid a defender",
              "Pass and receive the ball towards the goal",
              "Know when to shoot",
            ],
            href: "/curriculum/ks1/year-1/football/lesson-4",
          },
          {
            week: 5,
            subject: "Football",
            focus: [
              "Pass and receive on the move",
              "Change direction and pace to avoid a defender",
              "Pass and receive the ball towards the goal",
              "Know when to shoot",
            ],
            href: "/curriculum/ks1/year-1/football/lesson-5",
          },
          {
            week: 6,
            subject: "Football",
            focus: [
              "ABC's when dribbling in a game",
              "Pass and receive into space in a game",
              "Start to understand the rules of the game",
              "Communicate with a team",
            ],
            href: "/curriculum/ks1/year-1/football/lesson-6",
          },
          {
            week: 7,
            subject: "Dance",
            focus: [
              "Hear the beat of the music and move to it",
              "Copying a motif",
              "Identify different ways to move the body",
            ],
            href: "/curriculum/ks1/year-1/dance",
          },
          {
            week: 8,
            subject: "Dance",
            focus: [
              "Copy and perform a motif",
              "Identify dance moves from different styles of dance",
            ],
            href: "/curriculum/ks1/year-1/dance",
          },
        ],
      },

      {
        year: "Year 2",
        weeks: [
          {
            week: 1,
            subject: "Football",
            focus: [
              "Dribbling using both feet",
              "Controlling the ball and stopping using the sole of the foot",
              "ABC's",
              "Start to know where your team mates and defenders are when dribbling and passing",
            ],
          },
          {
            week: 2,
            subject: "Football",
            focus: [
              "Changing direction when dribbling using both feet",
              "Change direction, pass or evade a defender",
              "Passing the ball to evade a defender",
            ],
          },
          {
            week: 3,
            subject: "Football",
            focus: [
              "Correctly weighting a pass to evade a defender",
              "Understand why we need to move in a game and why we need to pass",
              "Communicating when passing and receiving",
            ],
          },
          {
            week: 4,
            subject: "Football",
            focus: [
              "Passing and receiving on the move with a defender or obstacle in play",
              "Change direction at pace to evade a defender",
              "Demonstrate correct shooting technique",
            ],
          },
          {
            week: 5,
            subject: "Football",
            focus: [
              "Pass and receive on the move towards a goal",
              "Change direction and pace to avoid a defender",
              "Know when to shoot",
              "Attacking and defending principles",
            ],
          },
          {
            week: 6,
            subject: "Football",
            focus: [
              "ABC's when dribbling in a game",
              "Pass and receive into space in a game",
              "Change of pace and direction to evade defenders",
              "Understand the rules of the game",
              "Communicate with a team",
            ],
          },
          {
            week: 7,
            subject: "Dance",
            focus: ["Copy and perform movements as part of a motif"],
          },
          {
            week: 8,
            subject: "Dance",
            focus: [
              "Create a motif and start to understand what choreographic devices could be used",
              "Start to move in time with the music",
            ],
          },
        ],
      },
    ],
  },

  {
    term: "Autumn 2",
    rows: [
      {
        year: "Year 1",
        weeks: [
          {
            week: 1,
            subject: "Dance",
            focus: [
              "Copy and perform a motif",
              "Start to perform in time to music",
              "Start to create a motif based upon a stimulus",
            ],
            href: "/curriculum/ks1/year-1/dance",
          },
          {
            week: 2,
            subject: "Dance",
            focus: [
              "Create a motif based upon a stimulus",
              "Identify choreographic devices",
            ],
            href: "/curriculum/ks1/year-1/dance",
          },
          {
            week: 3,
            subject: "Dance",
            focus: [
              "Create a basic motif",
              "Perform in front of a group",
            ],
            href: "/curriculum/ks1/year-1/dance",
          },
          {
            week: 4,
            subject: "Multi Skills",
            focus: [
              "Agility (Tag Rugby)",
              "Be able to accelerate, run at speed and stop",
              "Build agility, balance and spatial awareness",
              "Be able to change direction to evade obstacles",
            ],
          },
          {
            week: 5,
            subject: "Multi Skills",
            focus: [
              "Throwing and Catching (Netball)",
              "Develop basic throwing and catching skills",
              "Start to develop hand-eye co-ordination",
              "Aim and throw towards a target",
            ],
          },
          {
            week: 6,
            subject: "Multi Skills",
            focus: [
              "ABC's",
              "Perform different methods of jumping",
              "Develop balance through fun games",
              "Start to develop co-ordination throughout",
            ],
          },
          {
            week: 7,
            subject: "Multi Skills",
            focus: [
              "Christmas Games",
              "Develop ABC's through Christmas themed games",
              "Promoting teamwork and communication throughout",
            ],
          },
          {
            week: 8,
          },
        ],
      },

      {
        year: "Year 2",
        weeks: [
          {
            week: 1,
            subject: "Dance",
            focus: [
              "Identify different dance steps and the style they are from",
              "Use a music stimulus to create a routine based on a specific style",
            ],
          },
          {
            week: 2,
            subject: "Dance",
            focus: [
              "Create and perform a stimulus using dance moves from a specific dance style",
            ],
          },
          {
            week: 3,
            subject: "Dance",
            focus: [
              "Create, recall and perform a routine in time to the music",
            ],
          },
          {
            week: 4,
            subject: "Multi Skills",
            focus: [
              "Agility (Tag Rugby)",
              "Demonstrate acceleration and stopping",
              "Build agility, balance and spatial awareness whilst playing a game",
              "Be able to change direction to evade a defender",
            ],
          },
          {
            week: 5,
            subject: "Multi Skills",
            focus: [
              "Throwing and Catching (Netball)",
              "Develop throwing and catching technique",
              "Apply skills to a game scenario",
              "Aim and shoot towards a target",
            ],
          },
          {
            week: 6,
            subject: "Multi Skills",
            focus: [
              "ABC's",
              "Perform different methods of jumping",
              "Develop balance through fun games",
              "Start to develop co-ordination throughout",
            ],
          },
          {
            week: 7,
            subject: "Multi Skills",
            focus: [
              "Christmas Games",
              "Develop ABC's through Christmas themed games",
              "Promoting teamwork and communication throughout",
            ],
          },
          {
            week: 8,
          },
        ],
      },
    ],
  },
];

function WeekCard({ item }: { item: PlanWeek }) {
  const content = (
    <>
      <div className="mb-3 flex items-center justify-between gap-3">
        <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-extrabold text-purple-700">
          Week {item.week}
        </span>

        {item.href ? (
          <span className="text-sm font-bold text-purple-700">
            Open →
          </span>
        ) : null}
      </div>

      {item.subject ? (
        <>
          <h4 className="text-xl font-extrabold text-gray-900">
            {item.subject}
          </h4>

          {item.focus ? (
            <ul className="mt-3 space-y-2 text-gray-700">
              {item.focus.map((point) => (
                <li key={point} className="leading-relaxed">
                  • {point}
                </li>
              ))}
            </ul>
          ) : null}
        </>
      ) : (
        <p className="text-gray-400">No curriculum content scheduled.</p>
      )}
    </>
  );

  if (item.href) {
    return (
      <Link
        href={item.href}
        className="block rounded-2xl border bg-white p-5 shadow-sm transition hover:border-purple-500 hover:shadow-md"
      >
        {content}
      </Link>
    );
  }

  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm">
      {content}
    </div>
  );
}

export default function KS1LongTermPlanPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      <header className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <Link
            href="/curriculum/ks1"
            className="font-semibold text-purple-700 hover:text-purple-900"
          >
            ← Back to KS1 Curriculum
          </Link>

          <div className="mt-6">
            <p className="font-bold uppercase tracking-wide text-purple-700">
              Legacy Sport Curriculum
            </p>

            <h1 className="mt-1 text-4xl font-extrabold text-gray-900 md:text-5xl">
              KS1 Long Term Plan
            </h1>

            <p className="mt-3 max-w-3xl text-lg leading-relaxed text-gray-600">
              A week-by-week overview of the planned curriculum journey for
              Years 1 and 2.
            </p>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-10 rounded-2xl border bg-purple-50 p-6 shadow-sm">
          <h2 className="text-2xl font-extrabold text-purple-800">
            How to use the plan
          </h2>

          <p className="mt-3 text-lg leading-relaxed text-gray-700">
            Use this page to see the intended sequence of learning across KS1.
            Where curriculum content has already been added to the app, the
            relevant week can be selected to open the unit or lesson.
          </p>
        </div>

        <div className="space-y-14">
          {plans.map((plan) => (
            <section key={plan.term}>
              <div className="mb-6 flex items-center gap-4">
                <div className="h-10 w-2 rounded-full bg-purple-700" />

                <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl">
                  {plan.term}
                </h2>
              </div>

              <div className="space-y-10">
                {plan.rows.map((row) => (
                  <div key={`${plan.term}-${row.year}`}>
                    <div className="mb-5 flex items-center justify-between">
                      <h3 className="text-2xl font-extrabold text-purple-700">
                        {row.year}
                      </h3>

                      <span className="text-sm font-semibold text-gray-500">
                        8-week block
                      </span>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                      {row.weeks.map((item) => (
                        <WeekCard
                          key={`${plan.term}-${row.year}-${item.week}`}
                          item={item}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:justify-between">
          <Link
            href="/curriculum/overview"
            className="rounded-xl border bg-white px-6 py-4 text-center font-bold text-purple-700 transition hover:border-purple-500"
          >
            ← Curriculum Overview
          </Link>

          <Link
            href="/curriculum/ks1/year-1"
            className="rounded-xl bg-purple-700 px-6 py-4 text-center font-bold text-white transition hover:bg-purple-800"
          >
            Access Year 1 Curriculum →
          </Link>
        </div>
      </section>
    </main>
  );
}