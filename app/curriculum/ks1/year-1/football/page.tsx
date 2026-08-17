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
      "When the ball is dropped by the player and is 'knocked' forward. This will result in a turn over.",
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
      "If the ball goes out past the goal, last touched by the attacking team. The play will restart with a goal kick for the defending team, taken from in front of the goal.",
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

export default function FootballPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      <header className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <Link
            href="/curriculum/ks1/year-1"
            className="font-semibold text-purple-700 hover:text-purple-900"
          >
            ← Back to Year 1
          </Link>

          <div className="mt-6 flex items-center gap-5">
            <div className="text-6xl" aria-hidden="true">
              ⚽
            </div>

            <div>
              <p className="font-bold uppercase tracking-wide text-purple-700">
                Year 1
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
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold text-purple-700 md:text-4xl">
            Curriculum Overview
          </h2>

          <p className="mt-2 text-lg text-gray-600">
            Year 1 Football learning objectives, rules, terminology and coaching
            guidance.
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
                <li>• Demonstrate basic ball control.</li>
                <li>• Demonstrate basic dribbling.</li>
                <li>• Demonstrate basic passing.</li>
                <li>• Demonstrate shooting in fun small sided games.</li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-xl font-bold text-purple-700">
                Game Play
              </h4>

              <ul className="space-y-3 text-lg leading-relaxed text-gray-700">
                <li>• Start to understand the simple rules of football.</li>
                <li>
                  • Demonstrate how to score a goal through fun small sided
                  games.
                </li>
                <li>
                  • Demonstrate how to dribble with the ball moving towards the
                  goal.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-xl font-bold text-purple-700">
                Social and Emotional
              </h4>

              <ul className="space-y-3 text-lg leading-relaxed text-gray-700">
                <li>• Demonstrate listening and following instructions.</li>
                <li>
                  • Demonstrate communicating to team mates when moving with the
                  ball.
                </li>
                <li>
                  • Demonstrate working as part of a team and supporting others,
                  showing respect for team mates and opponents - learning to win
                  and lose positively.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Football Rules */}
        <div className="mb-8 overflow-hidden rounded-2xl border bg-white shadow-sm">
          <div className="bg-green-100 px-6 py-4">
            <h3 className="text-2xl font-bold text-gray-900">
              ⚽ Football Rules
            </h3>
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
                  • The aim of the game is to get the ball in the opposition&apos;s
                  goal.
                </li>
                <li>
                  • After a goal is scored the game restarts back in the middle
                  of the pitch via a kick from the team who conceded the goal.
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
                  • Dribble ins from the side line if the ball goes out of play.
                </li>
                <li>
                  • When the ball goes out for a goal kick, the opposing team
                  must retreat back into their own half before play restarts.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Coaching Tips */}
        <div className="mb-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-green-50 p-7 shadow-sm">
            <h3 className="mb-5 text-2xl font-extrabold text-green-900">
              💡 Legacy Top Teaching Tips
            </h3>

            <ol className="list-decimal space-y-3 pl-6 text-lg text-gray-800">
              <li>
                The most important skill to learn at this age is ball control,
                using both feet when dribbling with head up.
              </li>
              <li>
                Encourage children to spread out and not all crowd the ball in
                small games.
              </li>
              <li>
                Tackling will naturally take place but at this age is not the
                focus of the learning.
              </li>
              <li>
                It is vital that children learn to respect one another and not
                be aggressive. Teamwork and fair play need to be rewarded.
              </li>
            </ol>
          </div>

          <div className="rounded-2xl border bg-purple-50 p-7 shadow-sm">
            <h3 className="mb-5 text-2xl font-extrabold text-purple-800">
              🔁 Legacy Playback
            </h3>

            <p className="text-lg leading-relaxed text-gray-800">
              It&apos;s ok to repeat. Legacy Playback is included on each lesson
              in case a lesson activity or progression is too advanced.
            </p>
          </div>
        </div>

        {/* Key Terminology */}
        <div className="mb-10">
          <h2 className="mb-6 text-4xl font-extrabold text-gray-900">
            Key Terminology
          </h2>

          <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
            <div className="grid grid-cols-3 bg-purple-700 text-lg font-bold text-white">
              <div className="p-4">Terminology</div>
              <div className="col-span-2 p-4">Definition</div>
            </div>

            {keyTerminology.map(({ term, definition }) => (
              <div
                key={term}
                className="grid grid-cols-3 border-t text-lg"
              >
                <div className="p-4 font-bold text-gray-900">{term}</div>

                <div className="col-span-2 p-4 text-gray-700">
                  {definition}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Game Terminology */}
        <div className="mb-12">
          <h2 className="mb-6 text-4xl font-extrabold text-gray-900">
            Game Terminology
          </h2>

          <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
            <div className="grid grid-cols-3 bg-purple-700 text-lg font-bold text-white">
              <div className="p-4">Terminology</div>
              <div className="col-span-2 p-4">Definition</div>
            </div>

            {gameTerminology.map(({ term, definition }) => (
              <div
                key={term}
                className="grid grid-cols-3 border-t text-lg"
              >
                <div className="p-4 font-bold text-gray-900">{term}</div>

                <div className="col-span-2 p-4 text-gray-700">
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
            Year 1 Football lessons will appear here as they are added to the
            curriculum.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/curriculum/ks1/year-1/football/lesson-1"
              className="group rounded-2xl border bg-white p-6 shadow-sm transition hover:border-purple-500 hover:shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-purple-100 text-xl font-extrabold text-purple-700">
                  1
                </div>

                <div>
                  <p className="text-sm font-bold text-purple-700">LESSON 1</p>

                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-700">
                    Traffic Light Dribbling, Dribble Relays &amp; Sharks and
                    Minnows
                  </h3>
                </div>
              </div>

              <div className="mt-5 font-semibold text-purple-700">
                View Lesson →
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}