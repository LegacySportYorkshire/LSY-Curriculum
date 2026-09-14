import Link from "next/link";

const keyTerminology = [
  { term: "ABC's", definition: "Agility (changing direction at speed), Balance (maintaining equilibrium whilst stationary or moving), Coordination (ability to move 2 or more body parts under control, smoothly and efficiently to achieve a skill)." },
  { term: "Cruyff Turn", definition: "Drag the ball behind your standing leg with the inside of your foot and simultaneously turn shoulders, to quickly change direction and evade a defender." },
  { term: "Drag Back", definition: "Move the ball in a different direction by pulling the football backwards with the sole of the foot." },
  { term: "Dribble", definition: "Moving around with the ball at your feet, under control." },
  { term: "Jockeying", definition: "A defensive technique used to not immediately win the ball but instead use your body posture, footwork and spatial awareness to close the space for the attacking player to slow down play and force them to move to a less threatening direction." },
  { term: "Set Play", definition: "A corner or free kick, with which a team can restart in possession of the ball." },
  { term: "Side Foot Pass", definition: "Passing the ball with the instep of your foot, the long inside part of the foot. An important passing technique." },
  { term: "Shield", definition: "Getting your body between the defender and the ball, in order to keep possession." },
  { term: "Shoot", definition: "The act of trying to score, by kicking the ball towards the goal." },
  { term: "Space", definition: "An open area with no defenders to run into." },
];

const gameTerminology = [
  { term: "Corner", definition: "When the ball has been deflected off the pitch past the goal by the defending team, the game restarts with a corner kick from the corner of the pitch." },
  { term: "Dribble Ins", definition: "When the ball goes out of play on the sideline the opposite team dribbles the ball back into play." },
  { term: "Foul", definition: "An act committed by a player against another player when trying to win the ball back but failing to do so and impeding the other player." },
  { term: "Free Kick", definition: "Given to the team who has won a foul. The game restarts with a kick. This may be taken as a shot at goal but cannot be dribbled from." },
  { term: "Goal", definition: "The way in which to score in football, kicking the ball into the goal or between the posts." },
  { term: "Goal Kick", definition: "If the ball goes out past the goal, last touched by the attacking team, play restarts with a goal kick for the defending team." },
  { term: "Handball", definition: "The act of handling the ball. No player other than the goalkeeper can handle the ball, and the goalkeeper can only handle it within their area. A handball is a foul and play restarts with a free kick." },
  { term: "Penalty", definition: "If a foul is committed inside the box, a penalty is given. Penalties are taken by one player from 7 yards away from goal." },
  { term: "Retreat Rule", definition: "When the ball goes out for a goal kick, the opposing team must retreat into their own half before play restarts. This only applies when the ball leaves the pitch, not when the goalkeeper collects it." },
];

const lessons = [
  { number: 1, title: "Protect The Gates, Channel Attack & End Ball/Zone Ball", href: "/curriculum/ks2/year-6/football/lesson-1" },
  { number: 2, title: "Dribble Knockout, 2v2 Attacking & Defending & 4 Corner Football", href: "/curriculum/ks2/year-6/football/lesson-2" },
  { number: 3, title: "Protect The Gates, Channel Attack & End Ball/Zone Ball", href: "/curriculum/ks2/year-6/football/lesson-3" },
  { number: 4, title: "Quick Fire Goals, Three Finish Challenge & First To Score", href: "/curriculum/ks2/year-6/football/lesson-4" },
  { number: 5, title: "Passing Gates, Break the Lines & Conditioned Game", href: "/curriculum/ks2/year-6/football/lesson-5" },
  { number: 6, title: "Dribble Knockout & 7-a-side Football Tournament", href: "/curriculum/ks2/year-6/football/lesson-6" },
];

export default function Year6FootballPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      <header className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <Link href="/curriculum" className="font-semibold text-purple-700 hover:text-purple-900">← Back to Curriculum</Link>
          <div className="mt-6 flex items-center gap-5">
            <div className="text-6xl" aria-hidden="true">⚽</div>
            <div>
              <p className="font-bold uppercase tracking-wide text-purple-700">Year 6</p>
              <h1 className="text-4xl font-extrabold text-gray-900 md:text-5xl">Football</h1>
              <p className="mt-2 text-lg text-gray-600">Curriculum Overview &amp; Lesson Plans</p>
            </div>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold text-purple-700 md:text-4xl">Year 6 Football</h2>
          <p className="mt-2 max-w-4xl text-lg leading-relaxed text-gray-600">
            Demonstrating complete control under pressure, accurate passing with both feet, effective defending, varied shooting techniques, tactical roles, formations and set-play understanding within 7-a-side football.
          </p>
        </div>

        <div className="mb-8 overflow-hidden rounded-2xl border bg-white shadow-sm">
          <div className="bg-purple-700 px-6 py-4 text-white"><h3 className="text-2xl font-bold">Learning Objectives</h3></div>
          <div className="grid gap-8 p-6 md:grid-cols-3 md:p-8">
            <div>
              <h4 className="mb-4 text-xl font-bold text-purple-700">Physical</h4>
              <ul className="space-y-3 text-lg leading-relaxed text-gray-700">
                <li>• Demonstrate complete control when dribbling and changing direction at speed under pressure to evade a defender.</li>
                <li>• Demonstrate frequent, accurate passing and receiving with both feet.</li>
                <li>• Demonstrate effective jockeying, closing down space quickly and using positioning and body shape to delay attackers.</li>
                <li>• Continue to understand and apply the correct tackling technique for each scenario.</li>
                <li>• Demonstrate accurate shooting using various techniques and parts of the foot with placement and power.</li>
                <li>• Demonstrate use of the body when defending or shielding the ball.</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-xl font-bold text-purple-700">Game Play</h4>
              <ul className="space-y-3 text-lg leading-relaxed text-gray-700">
                <li>• Demonstrate understanding of football rules through planning and delivery of a game.</li>
                <li>• Demonstrate understanding of attacker, midfielder, defender and goalkeeper roles with tactical justification.</li>
                <li>• Continue to understand different formations and justify tactical choices by assigning position-specific roles.</li>
                <li>• Continue to understand the relevance of different set-play scenarios such as corners and free kicks.</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-xl font-bold text-purple-700">Social and Emotional</h4>
              <ul className="space-y-3 text-lg leading-relaxed text-gray-700">
                <li>• Demonstrate effective communication in team-based scenarios using various techniques.</li>
                <li>• Apply, Demonstrate and Self-Evaluate teamwork, support and respect, learning to win and lose positively.</li>
                <li>• Apply, Demonstrate and Self-Evaluate own and peers&apos; performance, reflection and feedback.</li>
                <li>• Apply, Demonstrate and Self-Evaluate how to encourage a team mate using praise and motivational language.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-8 overflow-hidden rounded-2xl border bg-white shadow-sm">
          <div className="bg-purple-700 px-6 py-4 text-white"><h3 className="text-2xl font-bold">⚽ Football Rules</h3></div>
          <div className="grid gap-8 p-6 text-lg text-gray-800 md:grid-cols-3 md:p-8">
            <div>
              <h4 className="mb-3 text-xl font-extrabold text-purple-700">Set Up</h4>
              <ul className="space-y-2">
                <li>• 2 teams.</li><li>• 7 players a side.</li><li>• 2 goals, one at each end.</li><li>• 1 team wears bibs.</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-xl font-extrabold text-purple-700">Game</h4>
              <ul className="space-y-2">
                <li>• Play starts with a kick off in the middle of the pitch.</li>
                <li>• The attacking team begins with a pass and must be in its own half at kick off.</li>
                <li>• The ball must completely cross the goal line for a goal to count.</li>
                <li>• After a goal, the team who conceded restarts from the middle.</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-xl font-extrabold text-purple-700">Rules</h4>
              <ul className="space-y-2">
                <li>• No slide tackles.</li>
                <li>• No shirt pulling or grabbing.</li>
                <li>• Use dribble-ins from the sideline.</li>
                <li>• The opposing team takes the dribble-in when the ball goes out.</li>
                <li>• The opposition retreats into its own half for a goal kick when the ball has left the pitch.</li>
                <li>• Deliberate headers are not permitted. A deliberate header results in an indirect free kick; if inside the box, restart with a dribble-in from the nearest sideline.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border bg-green-50 p-7 shadow-sm">
            <h3 className="mb-5 text-2xl font-extrabold text-green-900">💡 Legacy Top Teaching Tips</h3>
            <ol className="list-decimal space-y-4 pl-6 text-lg leading-relaxed text-gray-800">
              <li>Ball control remains the most important skill. Children should maintain close control at speed and while changing direction to create space or evade defenders.</li>
              <li>Encourage children to spread out and use varying passing techniques for accurate long and short passes.</li>
              <li>Develop defending through shadowing, jockeying, tackling and shielding.</li>
              <li>Focus on peer-to-peer constructive feedback and understanding game play and ideas that can help the team.</li>
            </ol>
          </div>
          <div className="rounded-2xl border bg-purple-50 p-7 shadow-sm">
            <h3 className="mb-5 text-2xl font-extrabold text-purple-800">🔁 Legacy Playback</h3>
            <p className="text-lg leading-relaxed text-gray-800">It&apos;s ok to repeat. Legacy Playback allows teachers to revisit previous learning when a new activity or progression is too advanced.</p>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="mb-6 text-3xl font-extrabold text-gray-900">Key Terminology</h2>
          <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
            <div className="grid grid-cols-3 bg-purple-700 text-lg font-bold text-white">
              <div className="p-4">Terminology</div><div className="col-span-2 p-4">Definition</div>
            </div>
            {keyTerminology.map(({ term, definition }) => (
              <div key={term} className="grid grid-cols-3 border-t text-lg">
                <div className="p-4 font-bold text-gray-900">{term}</div>
                <div className="col-span-2 p-4 leading-relaxed text-gray-700">{definition}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="mb-6 text-3xl font-extrabold text-gray-900">Game Terminology</h2>
          <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
            <div className="grid grid-cols-3 bg-purple-700 text-lg font-bold text-white">
              <div className="p-4">Terminology</div><div className="col-span-2 p-4">Definition</div>
            </div>
            {gameTerminology.map(({ term, definition }) => (
              <div key={term} className="grid grid-cols-3 border-t text-lg">
                <div className="p-4 font-bold text-gray-900">{term}</div>
                <div className="col-span-2 p-4 leading-relaxed text-gray-700">{definition}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-3 text-4xl font-extrabold text-purple-700">Lesson Plans</h2>
          <p className="mb-6 text-lg text-gray-600">Select a lesson below to view the complete Year 6 Football lesson plan.</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {lessons.map((lesson) => (
              <Link key={lesson.number} href={lesson.href} className="group rounded-2xl border bg-white p-6 shadow-sm transition hover:border-purple-500 hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-purple-100 text-xl font-extrabold text-purple-700">{lesson.number}</div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wide text-purple-700">Lesson {lesson.number}</p>
                    <h3 className="mt-1 text-xl font-bold leading-snug text-gray-900">{lesson.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
