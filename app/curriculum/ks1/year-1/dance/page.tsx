import Link from "next/link";

const lessons = [
  { number: 1, title: "Beginner Beats & Moving to the Beat", available: true },
  {
    number: 2,
    title: "Dance Corners, Dance Add On & Dance Whisper",
    available: true,
  },
  {
    number: 3,
    title: "Rhythm Master, Copy Cat & Dance Battle",
    available: true,
  },
  {
    number: 4,
    title: "Theme Game, Create Your Own & Performance",
    available: true,
  },
  { number: 5, title: "Coming Soon", available: false },
  { number: 6, title: "Coming Soon", available: false },
];

export default function DancePage() {
  return (
    <main className="min-h-screen bg-stone-50">

      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-8">

          <Link
            href="/curriculum/ks1/year-1"
            className="text-purple-700 font-semibold hover:text-purple-900"
          >
            ← Back to Year 1
          </Link>

          <div className="mt-6 flex items-center gap-5">
            <div className="text-6xl">💃</div>

            <div>
              <p className="text-purple-700 font-bold uppercase tracking-wide">
                Year 1
              </p>

              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                Dance
              </h1>

              <p className="text-lg text-gray-600 mt-2">
                Curriculum Overview &amp; Lesson Plans
              </p>
            </div>
          </div>

        </div>
      </header>

      {/* Curriculum Overview */}
      <section className="max-w-7xl mx-auto px-6 py-10">

        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700">
            Curriculum Overview
          </h2>

          <p className="text-lg text-gray-600 mt-2">
            Year 1 Dance curriculum, key terminology and choreographic devices.
          </p>
        </div>

        {/* Learning Objectives */}
        <div className="bg-white rounded-2xl shadow-sm border overflow-hidden mb-8">

          <div className="bg-purple-700 text-white px-6 py-4">
            <h3 className="text-2xl font-bold">
              Learning Objectives
            </h3>
          </div>

          <div className="p-6 md:p-8">

            <div className="grid md:grid-cols-3 gap-8">

              <div>
                <h4 className="text-xl font-bold text-purple-700 mb-4">
                  Physical
                </h4>

                <ul className="space-y-3 text-lg leading-relaxed text-gray-700">
                  <li>• Develop balance while moving the body to a beat or music.</li>
                  <li>• Develop muscular strength to hold body shapes.</li>
                  <li>• Develop cardiovascular endurance through continuous movement.</li>
                  <li>• Develop gross motor skills through dance steps and motifs.</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold text-purple-700 mb-4">
                  Game Play
                </h4>

                <ul className="space-y-3 text-lg leading-relaxed text-gray-700">
                  <li>• Move to the beat of the music.</li>
                  <li>• Copy a motif and begin to recall movement.</li>
                  <li>• Learn choreographic devices.</li>
                  <li>• Learn different dance steps and styles.</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold text-purple-700 mb-4">
                  Social &amp; Emotional
                </h4>

                <ul className="space-y-3 text-lg leading-relaxed text-gray-700">
                  <li>• Work with others when moving to the beat.</li>
                  <li>• Listen to one another.</li>
                  <li>• Build confidence when moving to music.</li>
                  <li>• Develop self-expression.</li>
                </ul>
              </div>

            </div>

          </div>
        </div>

        {/* Terminology and objectives */}
        <div className="bg-green-100 rounded-2xl p-6 md:p-8 mb-10">

          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Terminology &amp; Objectives Across the Dance Curriculum
          </h3>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white rounded-xl p-6">
              <h4 className="text-xl font-bold text-purple-700 mb-4">
                Physical / Cognitive &amp; Emotional
              </h4>

              <ul className="space-y-2 text-lg text-gray-700">
                <li>Agility</li>
                <li>Balance</li>
                <li>Co-ordination</li>
                <li>Flexibility</li>
                <li>Strength</li>
                <li>Teamwork</li>
                <li>Confidence &amp; resilience</li>
                <li>Creative flair &amp; self-expression</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6">
              <h4 className="text-xl font-bold text-purple-700 mb-4">
                Specific Objectives
              </h4>

              <ul className="space-y-3 text-lg text-gray-700">
                <li>• Copy &amp; perform a motif</li>
                <li>• Recognise and include contrasting movements</li>
                <li>• Recall choreographic devices</li>
                <li>• Clap to different beats and music</li>
                <li>• Begin to recognise dance steps and styles</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6">
              <h4 className="text-xl font-bold text-purple-700 mb-4">
                Choreographic Devices
              </h4>

              <ul className="space-y-2 text-lg text-gray-700">
                <li>Unison</li>
                <li>Dynamics</li>
                <li>Canon</li>
                <li>Levels</li>
                <li>Ripple</li>
                <li>Contrast</li>
                <li>Repetition</li>
                <li>Tempo</li>
                <li>Climax</li>
                <li>Motif &amp; Development</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Key Terminology */}
        <div className="mb-10">

          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
            Key Terminology
          </h2>

          <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">

            <div className="grid grid-cols-3 bg-purple-700 text-white font-bold text-lg">
              <div className="p-4">
                Terminology
              </div>

              <div className="p-4 col-span-2">
                Definition
              </div>
            </div>

            {[
              ["Beat", "The counts which make up a song – usually counted in 8."],
              ["Action", "Any movement within the dance, e.g. a turn, leap or gesture."],
              ["Motif", "A short pattern of movements."],
              ["Choreography", "A sequence of steps put together to create a routine."],
              ["Creative Flair", "Adding personal style, emotion and improvisation to enhance a performance."],
              ["Stimulus", "An external idea, theme or emotion used to inspire choreography."],
              ["Theme", "The overall theme of the dance performance."],
              ["Facial Expressions", "Using your face to enhance the theme or stimulus."],
            ].map(([term, definition]) => (
              <div
                key={term}
                className="grid grid-cols-3 border-t text-lg"
              >
                <div className="p-4 font-bold text-gray-900">
                  {term}
                </div>

                <div className="p-4 col-span-2 text-gray-700">
                  {definition}
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* Choreographic Devices */}
        <div className="mb-12">

          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
            Choreographic Devices
          </h2>

          <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">

            <div className="grid grid-cols-3 bg-purple-700 text-white font-bold text-lg">
              <div className="p-4">
                Device
              </div>

              <div className="p-4 col-span-2">
                Definition
              </div>
            </div>

            {[
              [
                "Unison / Synchronisation",
                "Everyone in the group doing the same actions at the same time.",
              ],
              [
                "Dynamics",
                "Different textures of a routine, such as fast/slow, soft/hard and high/low levels.",
              ],
              [
                "Canon",
                "One person or group starts a motif and the same motif is started after the first group.",
              ],
              [
                "Repetition",
                "Performing a motif and repeating the same motif.",
              ],
              [
                "Tempo",
                "The speed at which you perform a routine.",
              ],
              [
                "Climax",
                "The most significant part of a routine, such as a crescendo in a song.",
              ],
              [
                "Motif Development",
                "Taking a small pattern of movements and using choreographic devices to create a full routine.",
              ],
            ].map(([device, definition]) => (
              <div
                key={device}
                className="grid grid-cols-3 border-t text-lg"
              >
                <div className="p-4 font-bold text-gray-900">
                  {device}
                </div>

                <div className="p-4 col-span-2 text-gray-700">
                  {definition}
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* Lesson Plans */}
        <div>

          <h2 className="text-4xl font-extrabold text-purple-700 mb-3">
            Lesson Plans
          </h2>

          <p className="text-lg text-gray-600 mb-6">
            Six individual dance lessons for Year 1.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

           {lessons.map((lesson) =>
  lesson.available ? (
    <Link
      key={lesson.number}
      href={`/curriculum/ks1/year-1/dance/lesson-${lesson.number}`}
      className="group bg-white border rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-purple-500 transition"
    >
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 text-xl font-extrabold">
          {lesson.number}
        </div>

        <div>
          <p className="text-sm font-bold text-purple-700">
            LESSON {lesson.number}
          </p>

          <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-700">
            {lesson.title}
          </h3>
        </div>
      </div>

      <div className="mt-5 text-purple-700 font-semibold">
        View Lesson →
      </div>
    </Link>
  ) : (
    <div
      key={lesson.number}
      className="bg-white border rounded-2xl p-6 shadow-sm opacity-60"
    >
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 text-xl font-extrabold">
          {lesson.number}
        </div>

        <div>
          <p className="text-sm font-bold text-gray-500">
            LESSON {lesson.number}
          </p>

          <h3 className="text-xl font-bold text-gray-700">
            {lesson.title}
          </h3>
        </div>
      </div>

      <div className="mt-5 text-gray-500 font-semibold">
        Not yet published
      </div>
    </div>
  )
)}

          </div>

        </div>

      </section>

    </main>
  );
}