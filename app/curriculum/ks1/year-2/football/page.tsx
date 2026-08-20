import Link from "next/link";

const keyTerminology = [
  {
    term: "ABC's",
    definition:
      "Agility (changing direction at speed), Balance (maintaining equilibrium whilst stationary or moving), Coordination (ability to move 2 or more body parts under control, smoothly and efficiently to achieve a skill).",
  },
  {
    term: "Drag Back",
    definition:
      "Move the ball in a different direction by pulling the football backwards with the sole of the foot.",
  },
  {
    term: "Dribble",
    definition:
      "Moving around with the ball at your feet, under control.",
  },
  {
    term: "Jockeying",
    definition:
      "A defensive technique used to not immediately win the ball but instead use your body posture, footwork and spatial awareness to close the space for the attacking player, slow down play and force them to move to a less threatening direction.",
  },
  {
    term: "Penguin Touches",
    definition:
      "Keeping the ball shuffling side to side between your feet like a penguin, a dribbling technique used in KS1.",
  },
  {
    term: "Side Foot Pass",
    definition:
      "Passing the ball with the instep of your foot, the long inside part of the foot. An important passing technique.",
  },
  {
    term: "Shoot",
    definition:
      "The act of trying to score, by kicking the ball towards the goal.",
  },
  {
    term: "Space",
    definition:
      "An open area with no defenders to run into.",
  },
  {
    term: "Toe Taps",
    definition:
      "Tapping the top of the ball with your toes, used in dribbling games.",
  },
];

const gameTerminology = [
  {
    term: "Corner",
    definition:
      "When the ball has been deflected off the pitch past the goal by the defending team, the game will restart with a corner kick taken from the corner of the pitch.",
  },
  {
    term: "Dribble Ins",
    definition:
      "When the ball goes off the pitch, play restarts with the ball being dribbled or kicked back into the pitch.",
  },
  {
    term: "Foul",
    definition:
      "An act committed by a player against another player when trying to win the ball back, but failing to do so and impeding the other player.",
  },
  {
    term: "Free Kick",
    definition:
      "Given to the team who has won a foul, the game restarts with a kick. This may be taken as a shot at goal, but cannot be dribbled from.",
  },
  {
    term: "Goal",
    definition:
      "The way in which to score in football, kicking the ball into the goal or between the posts.",
  },
  {
    term: "Goal Kick",
    definition:
      "If the ball goes out past the goal, last touched by the attacking team. Play will restart with a goal kick for the defending team, taken from in front of the goal.",
  },
  {
    term: "Handball",
    definition:
      "The act of handling the ball. No player other than the goalkeeper can handle the ball. The goalkeeper can only handle the ball within their given area (box). A handball is considered a foul and play will restart with a free kick.",
  },
  {
    term: "Penalty",
    definition:
      "If a foul is committed inside the box, a penalty is given. Penalties are taken by one player from 7 yards away from the goal.",
  },
  {
    term: "Retreat Rule",
    definition:
      "When the ball goes out for a goal kick, the opposing team must retreat back into their own half before play restarts. This is only when the ball leaves the pitch, not if the goalkeeper collects with their hands.",
  },
];

const lessons = [
  {
    number: 1,
    title: "Robin Hood, Minefield Passing & First to Score",
    href: "/curriculum/ks1/year-2/football/lesson-1",
  },
  {
    number: 2,
    title: "Rainbow Rush, Treasure Island & Dribble Knockout",
    href: "/curriculum/ks1/year-2/football/lesson-2",
  },
  {
    number: 3,
    title: "Pass and Go, Minefield Passing & Zone Ball",
    href: "/curriculum/ks1/year-2/football/lesson-3",
  },
  {
    number: 4,
    title:
      "Quick Fire Goals, Passing Relays Into Shooting & 1v1 Channel Attack",
    href: "/curriculum/ks1/year-2/football/lesson-4",
  },
  {
    number: 5,
    title: "Dribble Knockout, Minefield Passing & 4 Corner Football",
    href: "/curriculum/ks1/year-2/football/lesson-5",
  },
  {
    number: 6,
    title: "4 Corner Football & 5-a-Side Football Tournament",
    href: "/curriculum/ks1/year-2/football/lesson-6",
  },
];

export default function Year2FootballPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <Link
            href="/curriculum/ks1/year-2"
            className="font-semibold text-purple-700 hover:text-purple-900"
          >
            ← Back to Year 2
          </Link>

          <div className="mt-6 flex items-center gap-5">
            <div className="text-6xl" aria-hidden="true">
              ⚽
            </div>

            <div>
              <p className="font-bold uppercase tracking-wide text-purple-700">
                Year 2
              </p>

              <h1 className="text-4xl font-extrabold text-gray-900 md:text-5xl">
                Football
              </h1>

              <p className="mt-2 text-lg text-gray-600">
                Curriculum Overview &amp; Lesson Plans
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-10">
        {/* Overview */}
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold text-purple-700 md:text-4xl">
            Year 2 Football
          </h2>

          <p className="mt-2 max-w-4xl text-lg leading-relaxed text-gray-600">
            Building on Year 1 learning through greater control under pressure,
            accurate passing and receiving, shooting, attacking and defending,
            decision making and small-sided games.
          </p>
        </div>

        {/* Learning Objectives */}
        <div className="mb-8 overflow-hidden rounded-2xl border bg-white shadow-sm">
          <div className="bg-purple-700 px-6 py-4 text-white">
            <h3 className="text-2xl font-bold">Learning Objectives</h3>
          </div>

          <div className="grid gap-8 p-6 md:grid-cols-3 md:p-8">
            <div>
              <h4 className="mb-4 text-xl font-bold text-purple-700">
                Physical
              </h4>

              <ul className="space-y-3 text-lg leading-relaxed text-gray-700">
                <li>• Demonstrate changing direction when dribbling.</li>
                <li>
                  • Demonstrate dribbling with close control under pressure.
                </li>
                <li>
                  • Demonstrate frequent, accurate passing and receiving of the
                  football.
                </li>
                <li>
                  • Demonstrate accurate shooting in small sided games.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-xl font-bold text-purple-700">
                Game Play
              </h4>

              <ul className="space-y-3 text-lg leading-relaxed text-gray-700">
                <li>
                  • Demonstrate understanding the rules of a football game.
                </li>
                <li>
                  • Demonstrate how to score a goal and how to defend in a game
                  of football.
                </li>
                <li>
                  • Demonstrate how to dribble at pace towards a goal and when
                  to pass.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-xl font-bold text-purple-700">
                Social and Emotional
              </h4>

              <ul className="space-y-3 text-lg leading-relaxed text-gray-700">
                <li>
                  • Demonstrate an understanding of why we need to listen and
                  follow instructions to achieve a task.
                </li>
                <li>
                  • Demonstrate communicating to team mates when moving with the
                  ball and passing.
                </li>
                <li>
                  • Demonstrate working as part of a team and supporting others,
                  showing respect for team mates and opponents - learning to win
                  and lose positively.
                </li>
                <li>• Demonstrate how to encourage a team mate.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Football Rules */}
        <div className="mb-8 overflow-hidden rounded-2xl border bg-white shadow-sm">
          <div className="bg-purple-700 px-6 py-4 text-white">
            <h3 className="text-2xl font-bold">⚽ Football Rules</h3>
          </div>

          <div className="grid gap-8 p-6 text-lg text-gray-800 md:grid-cols-3 md:p-8">
            <div>
              <h4 className="mb-3 text-xl font-extrabold text-purple-700">
                Set Up
              </h4>

              <ul className="space-y-2">
                <li>• 2 teams.</li>
                <li>• 5 players a side.</li>
                <li>• 2 goals, one at each end of the pitch.</li>
                <li>• 1 team to wear bibs.</li>
              </ul>
            </div>

            <div>
              <h4 className="mb-3 text-xl font-extrabold text-purple-700">
                Game
              </h4>

              <ul className="space-y-2">
                <li>• Play starts with a kick off in the middle of the pitch.</li>
                <li>
                  • Play starts with a pass from the attacking team. The
                  attacking team has to be in their own half from the kick off.
                </li>
                <li>
                  • The aim of the game is to get the ball in the
                  opposition&apos;s goal.
                </li>
                <li>
                  • After a goal is scored the game restarts in the middle of
                  the pitch via a kick from the team who conceded the goal.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-3 text-xl font-extrabold text-purple-700">
                Rules
              </h4>

              <ul className="space-y-2">
                <li>• No slide tackles at this age.</li>
                <li>• No shirt pulling or grabbing.</li>
                <li>
                  • When the ball goes off the pitch, play restarts with a
                  dribble or kick back into the playing area.
                </li>
                <li>
                  • When the ball goes out for a goal kick, the opposing team
                  must retreat back into their own half before play restarts.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Teaching Tips */}
        <div className="mb-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border bg-green-50 p-7 shadow-sm">
            <h3 className="mb-5 text-2xl font-extrabold text-green-900">
              💡 Legacy Top Teaching Tips
            </h3>

            <ol className="list-decimal space-y-4 pl-6 text-lg leading-relaxed text-gray-800">
              <li>
                Ball control is still the most important skill, however at this
                age children are now moving at pace.
              </li>

              <li>
                Encourage children to spread out and not all crowd the ball in
                small games.
              </li>

              <li>
                Tackling will naturally take place but for Year 2 we look at
                jockeying when defending.
              </li>

              <li>
                Focus on encouraging each other in communication. This helps to
                eradicate a blame culture if children do not win and mistakes
                are made by team mates.
              </li>
            </ol>
          </div>

          <div className="rounded-2xl border bg-purple-50 p-7 shadow-sm">
            <h3 className="mb-5 text-2xl font-extrabold text-purple-800">
              🔁 Legacy Playback
            </h3>

            <p className="text-lg leading-relaxed text-gray-800">
              It&apos;s ok to repeat. Legacy Playback is included within lessons
              so that teachers can revisit previous Year 1 or Year 2 learning if
              an activity or progression is too advanced.
            </p>
          </div>
        </div>

        {/* Key Terminology */}
        <div className="mb-10">
          <h2 className="mb-6 text-3xl font-extrabold text-gray-900">
            Key Terminology
          </h2>

          <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
            <div className="grid grid-cols-3 bg-purple-700 text-lg font-bold text-white">
              <div className="p-4">Terminology</div>
              <div className="col-span-2 p-4">Definition</div>
            </div>

            {keyTerminology.map(({ term, definition }) => (
              <div key={term} className="grid grid-cols-3 border-t text-lg">
                <div className="p-4 font-bold text-gray-900">{term}</div>

                <div className="col-span-2 p-4 leading-relaxed text-gray-700">
                  {definition}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Game Terminology */}
        <div className="mb-12">
          <h2 className="mb-6 text-3xl font-extrabold text-gray-900">
            Game Terminology
          </h2>

          <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
            <div className="grid grid-cols-3 bg-purple-700 text-lg font-bold text-white">
              <div className="p-4">Terminology</div>
              <div className="col-span-2 p-4">Definition</div>
            </div>

            {gameTerminology.map(({ term, definition }) => (
              <div key={term} className="grid grid-cols-3 border-t text-lg">
                <div className="p-4 font-bold text-gray-900">{term}</div>

                <div className="col-span-2 p-4 leading-relaxed text-gray-700">
                  {definition}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lesson Plans */}
        <div>
          <h2 className="mb-3 text-4xl font-extrabold text-purple-700">
            Lesson Plans
          </h2>

          <p className="mb-6 text-lg text-gray-600">
            Select a lesson below to view the complete Year 2 Football lesson
            plan.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {lessons.map((lesson) => (
              <Link
                key={lesson.number}
                href={lesson.href}
                className="group rounded-2xl border bg-white p-6 shadow-sm transition hover:border-purple-500 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-purple-100 text-xl font-extrabold text-purple-700">
                    {lesson.number}
                  </div>

                  <div>
                    <p className="text-sm font-bold text-purple-700">
                      LESSON {lesson.number}
                    </p>

                    <h3 className="mt-1 text-xl font-bold text-gray-900 group-hover:text-purple-700">
                      {lesson.title}
                    </h3>
                  </div>
                </div>

                <div className="mt-5 font-semibold text-purple-700">
                  View Lesson →
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-between">
          <Link
            href="/curriculum/ks1/long-term-plan"
            className="rounded-xl border bg-white px-6 py-4 text-center font-bold text-purple-700 transition hover:border-purple-500"
          >
            ← KS1 Long Term Plan
          </Link>

          <Link
            href="/curriculum/ks1/year-2"
            className="rounded-xl bg-purple-700 px-6 py-4 text-center font-bold text-white transition hover:bg-purple-800"
          >
            Year 2 Curriculum →
          </Link>
        </div>
      </section>
    </main>
  );
}