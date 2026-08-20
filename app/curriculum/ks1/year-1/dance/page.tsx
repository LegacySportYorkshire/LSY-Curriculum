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
    term: "Action",
    definition:
      "A movement performed by the body as part of a dance or motif.",
  },
  {
    term: "Beat",
    definition:
      "The steady pulse within music that helps dancers move in time.",
  },
  {
    term: "Motif",
    definition:
      "A short sequence of movements that can be repeated, developed or used as part of a routine.",
  },
  {
    term: "Movement",
    definition:
      "The way the body travels, changes shape or performs an action.",
  },
  {
    term: "Self-Expression",
    definition:
      "Using movement to show ideas, feelings, character or individual interpretation.",
  },
  {
    term: "Co-ordination",
    definition:
      "Using different body parts together smoothly and under control.",
  },
  {
    term: "Style",
    definition:
      "A recognisable way of dancing that may be linked to a particular type of music or movement.",
  },
  {
    term: "Routine",
    definition:
      "A longer sequence of linked dance movements or motifs performed in order.",
  },
  {
    term: "Performance Flair",
    definition:
      "Using energy, expression, confidence and facial expressions to make a performance more engaging.",
  },
  {
    term: "Recall",
    definition:
      "Remembering and repeating movements or motifs that have been learned previously.",
  },
];

const choreographicDevices = [
  {
    term: "Levels",
    definition:
      "Using different heights in movement, for example low, middle and high.",
  },
  {
    term: "Tempo",
    definition:
      "The speed of the movement or music, such as fast or slow.",
  },
  {
    term: "Dynamics",
    definition:
      "The quality or energy of movement, such as strong, soft, sharp or flowing.",
  },
  {
    term: "Repetition",
    definition:
      "Repeating a movement or motif to develop a routine.",
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
                <li>• Hear a beat and move in time with music.</li>
                <li>• Copy, recall and perform a motif.</li>
                <li>• Explore and identify different styles of dance.</li>
                <li>• Create simple motifs using self-expression.</li>
                <li>
                  • Start to use choreographic devices when creating and
                  performing.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-xl font-bold text-purple-700">
                Physical
              </h4>

              <ul className="space-y-3 text-lg leading-relaxed text-gray-700">
                <li>• Develop body awareness when moving to a beat.</li>
                <li>• Develop co-ordination when moving body parts together.</li>
                <li>• Develop balance through shapes and movement.</li>
                <li>• Perform with increasing control and fluency.</li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-xl font-bold text-purple-700">
                Social and Emotional
              </h4>

              <ul className="space-y-3 text-lg leading-relaxed text-gray-700">
                <li>
                  • Develop confidence when dancing and performing in front of
                  others.
                </li>
                <li>• Respond to and follow instructions.</li>
                <li>• Work with peers to create and perform motifs.</li>
                <li>
                  • Show enjoyment, enthusiasm and encouragement towards
                  others.
                </li>
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