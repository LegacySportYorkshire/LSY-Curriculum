import Link from "next/link";

const lessons = [
  {
    number: 1,
    title: "Animal Boogie, Marching to the Beat & Dance Mirrors",
    href: "/curriculum/ks1/year-1/dance/lesson-1",
  },
  {
    number: 2,
    title: "Beginner Beats, Rhythm Master & Theme Game",
    href: "/curriculum/ks1/year-1/dance/lesson-2",
  },
  {
    number: 3,
    title: "Style Spotters, What Move Is It Boogie Bear & Motif Makers",
    href: "/curriculum/ks1/year-1/dance/lesson-3",
  },
  {
    number: 4,
    title: "Dance Corners, Rhythm Master & Mini Dance Whispers",
    href: "/curriculum/ks1/year-1/dance/lesson-4",
  },
  {
    number: 5,
    title: "Style Spotters, Jump Aboard the Dance Train & Performance Platform",
    href: "/curriculum/ks1/year-1/dance/lesson-5",
  },
];

const keyTerminology = [
  {
    term: "Beat",
    definition:
      "The counts which make up a song - usually count in 8 (Salsa in 3).",
  },
  {
    term: "Action",
    definition:
      "Any movement within the dance e.g. a turn, leap, a gesture.",
  },
  {
    term: "Balance",
    definition:
      "Being able to maintain equilibrium whilst performing movements.",
  },
  {
    term: "Flexibility",
    definition:
      "Flexibility in dance is the ability of a joint or series of joints to move freely through a full range of motion.",
  },
  {
    term: "Motif",
    definition:
      "A short pattern of movements.",
  },
  {
    term: "Choreography",
    definition:
      "A sequence of steps put together to create a routine (usually combining motifs together).",
  },
  {
    term: "Improvisation",
    definition:
      "Adding personal style, emotion and improvisation to enhance a performance.",
  },
  {
    term: "Co-ordination",
    definition:
      "Coordination in dance is the ability to move different parts of the body in a synchronised and controlled way.",
  },
  {
    term: "Self Expression",
    definition:
      "Being able to capture and communicate your own thoughts and emotions through dance.",
  },
  {
    term: "Stimulus",
    definition:
      "Any external idea, themes, or emotions for choreography - e.g. emotions (happy/sad) or a location (the beach, at school) or a specific song.",
  },
  {
    term: "Strength",
    definition:
      "The ability to produce force and maintain control through movements in dance.",
  },
  {
    term: "Theme",
    definition:
      "The overall theme of the dance performance - similar to stimulus but is more generic.",
  },
  {
    term: "Performance Flair",
    definition:
      "Using your facial expressions to enhance the theme or stimulus e.g. happy stimulus = happy face.",
  },
  {
    term: "Stamina",
    definition:
      "The ability to maintain a sustained amount physical activity.",
  },
];

const choreographicDevices = [
  {
    term: "Unison/Synchronisation",
    definition:
      "Everyone in the group doing the same actions at the same time.",
  },
  {
    term: "Dynamics",
    definition:
      "The different textures of a routine e.g. fast/slow, soft/hard, levels high/low.",
  },
  {
    term: "Ripple",
    definition:
      "When 1 person starts an action and the other follows e.g. a mexican wave.",
  },
  {
    term: "Canon",
    definition:
      "When 1 person or group starts a motif and the same motif is started after the first group. E.g. group 1 starts motif on count 1, group 2 starts same motif on count 4.",
  },
  {
    term: "Repetition",
    definition:
      "When you perform a motif and repeat the same motif (e.g. you repeat the motif which is the chorus of the song).",
  },
  {
    term: "Tempo",
    definition:
      "The speed of which you perform a routine.",
  },
  {
    term: "Climax",
    definition:
      "The most significant part of a routine - e.g. a crescendo in a song. You will create a routine which will emphasise this.",
  },
  {
    term: "Motif Development",
    definition:
      "Taking a motif (small pattern of movements) and using the above devices to create a full routine.",
  },
  {
    term: "Levels",
    definition:
      "Using height of movement to create different effects.",
  },
];

export default function DancePage() {
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
              💃
            </div>

            <div>
              <p className="font-bold uppercase tracking-wide text-purple-700">
                Year 1
              </p>

              <h1 className="text-4xl font-extrabold text-gray-900 md:text-5xl">
                Dance
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

          <p className="mt-2 max-w-4xl text-lg leading-relaxed text-gray-600">
            Year 1 Dance develops children&apos;s ability to hear and respond to
            music, copy and create motifs, explore different styles of dance and
            perform with increasing confidence.
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
                Dance Skills
              </h4>
              <ul className="space-y-3 text-lg leading-relaxed text-gray-700">
                <li>• Demonstrate moving to the beat of the music.</li>
                <li>• Demonstrate copying a motif and start to be able to recall the movement.</li>
                <li>• Start to learn choreographic devices.</li>
                <li>• Start to learn different dance steps and understand which dance styles they are from.</li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-xl font-bold text-purple-700">
                Physical
              </h4>
              <ul className="space-y-3 text-lg leading-relaxed text-gray-700">
                <li>• Start to develop balance within moving the body to a beat or music.</li>
                <li>• Start to develop muscular strength to hold body shapes and move to a beat or music.</li>
                <li>• Start to develop cardiovascular endurance in moving continuously to a beat or music.</li>
                <li>• Start to develop gross motor skills when learning dance steps and motifs.</li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-xl font-bold text-purple-700">
                Social and Emotional
              </h4>
              <ul className="space-y-3 text-lg leading-relaxed text-gray-700">
                <li>• Demonstrate working with others when moving to the beat and learning a motif.</li>
                <li>• Demonstrate listening to one another.</li>
                <li>• Demonstrate building confidence when moving to music.</li>
                <li>• Start to develop self expression.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Dance Styles and Relevant Moves */}
        <div className="mb-10">
          <h2 className="mb-6 text-3xl font-extrabold text-gray-900">
            Dance Styles and Relevant Moves
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold text-purple-700">
                Street Dance
              </h3>
              <ul className="space-y-2 text-lg leading-relaxed text-gray-700">
                <li>• Top Rock</li>
                <li>• Twist Cross Over</li>
                <li>• Body Rock</li>
                <li>• Pop &amp; Lock</li>
                <li>• Hop and Head</li>
                <li>• Groove &amp; Character</li>
              </ul>
            </div>

            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold text-purple-700">
                Disco
              </h3>
              <ul className="space-y-2 text-lg leading-relaxed text-gray-700">
                <li>• Disco Finger</li>
                <li>• Body Roll</li>
                <li>• Step &amp; Roll</li>
                <li>• Funky Box</li>
                <li>• Shimmy</li>
                <li>• Funky Chicken</li>
              </ul>
            </div>

            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold text-purple-700">
                Country &amp; Western
              </h3>
              <ul className="space-y-2 text-lg leading-relaxed text-gray-700">
                <li>• Step-touch</li>
                <li>• Grapevine</li>
                <li>• Jazz Square</li>
                <li>• Pivot/Turn</li>
                <li>• Chasse/Rock Step</li>
                <li>• 4 Walls</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Teaching Tips / Playback */}
        <div className="mb-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-green-50 p-7 shadow-sm">
            <h3 className="mb-5 text-2xl font-extrabold text-green-900">
              💡 Legacy Top Teaching Tips
            </h3>

            <ol className="list-decimal space-y-3 pl-6 text-lg leading-relaxed text-gray-800">
              <li>
                Encourage self-expression. There is not always one correct way
                to move.
              </li>
              <li>
                Use choreographic language regularly so children become familiar
                with the terminology.
              </li>
              <li>
                Encourage children to use their whole body and perform movements
                clearly.
              </li>
              <li>
                Give children lots of opportunities to copy, recall and perform
                in front of others.
              </li>
              <li>
                Celebrate confidence, enjoyment and creativity as well as
                technical accuracy.
              </li>
            </ol>
          </div>

          <div className="rounded-2xl border bg-purple-50 p-7 shadow-sm">
            <h3 className="mb-5 text-2xl font-extrabold text-purple-800">
              🔁 Legacy Playback
            </h3>

            <p className="text-lg leading-relaxed text-gray-800">
              It&apos;s ok to repeat. Activities and motifs can be revisited if
              children need more time to build confidence, rhythm, recall or
              performance skills before progressing.
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

        {/* Choreographic Devices */}
        <div className="mb-12">
          <h2 className="mb-6 text-3xl font-extrabold text-gray-900">
            Choreographic Devices
          </h2>

          <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
            <div className="grid grid-cols-3 bg-green-700 text-lg font-bold text-white">
              <div className="p-4">Device</div>
              <div className="col-span-2 p-4">Definition</div>
            </div>

            {choreographicDevices.map(({ term, definition }) => (
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
            Select a lesson below to view the complete Year 1 Dance lesson plan.
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
      </section>
    </main>
  );
}