import Link from "next/link";

const legacyLeft = [
  {
    letter: "L",
    text: "Learn through Physical Activity & PE",
  },
  {
    letter: "E",
    text: "Enjoyment is key for skill retention",
  },
  {
    letter: "G",
    text: "Grow together cognitively, emotionally & physically",
  },
  {
    letter: "A",
    text: "Active children learn more",
  },
  {
    letter: "C",
    text: "Creativity = high engagement levels",
  },
  {
    letter: "Y",
    text: "You can do it!",
  },
];

const sportRight = [
  {
    letter: "S",
    text: "Skills based games throughout",
  },
  {
    letter: "P",
    text: "Physically Active",
  },
  {
    letter: "O",
    text: "Organised",
  },
  {
    letter: "R",
    text: "Resilience",
  },
  {
    letter: "T",
    text: "Teamwork",
  },
];

const curriculumAreas = [
  {
    heading: "Invasion Games",
    sports: ["Football", "Dodgeball", "Basketball", "Netball", "Tag Rugby"],
  },
  {
    heading: "Creative Arts",
    sports: ["Cheer", "Gymnastics", "Dance"],
  },
  {
    heading: "Strike and Fielding",
    sports: ["Cricket", "Tennis", "Rounders"],
  },
  {
    heading: "ABC's",
    sports: ["Multi Skills", "Athletics"],
  },
];

export default function CurriculumOverviewPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <Link
            href="/curriculum"
            className="font-semibold text-purple-700 hover:text-purple-900"
          >
            ← Back to Curriculum
          </Link>

          <div className="mt-6">
            <p className="font-bold uppercase tracking-wide text-purple-700">
              Legacy Sport Yorkshire
            </p>

            <h1 className="mt-1 text-4xl font-extrabold text-gray-900 md:text-5xl">
              Curriculum Overview
            </h1>

            <p className="mt-3 max-w-3xl text-lg text-gray-600">
              The thinking, values and learning framework that underpin the
              Legacy Sport Yorkshire curriculum.
            </p>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-10">
        {/* Hello from us */}
        <div className="mb-10 rounded-2xl border bg-white p-7 shadow-sm md:p-10">
          <h2 className="mb-6 text-3xl font-extrabold text-gray-900">
            Hello from us...
          </h2>

          <div className="space-y-5 text-lg leading-relaxed text-gray-800">
            <p>
              The joy children can gain from PE, sport and physical activity can
              be huge. That joy creates a passion, that passion becomes a dream
              and dreams can, if nurtured, become a reality.
            </p>

            <p>
              Our experiences when we are young are what shape our future and we
              know that a negative experience in sport and PE at a young age can
              affect healthy lifestyles and happiness in adult life.
            </p>

            <p>
              That is why here at Legacy Sport Yorkshire the team believes in
              the power of sport and Physical Education for every individual. It
              can change lives and our vision is to leave a lasting legacy for
              all in Yorkshire.
            </p>

            <p>
              We use PE as a vehicle to enrich every child and family on their
              journey, whether that is to increase confidence and resilience,
              develop leaders, instil in others a love for being active and
              working together or to nurture sporting talent.
            </p>

            <p>
              We create opportunities in sport, physical activity and the arts
              that will be invaluable to all in shaping their future.
            </p>
          </div>
        </div>

        {/* Legacy Way */}
        <div className="mb-10 rounded-2xl border bg-purple-50 p-7 shadow-sm md:p-10">
          <div className="mb-8">
            <p className="font-bold uppercase tracking-wide text-purple-700">
              The Legacy Way
            </p>

            <h2 className="mt-1 text-3xl font-extrabold text-gray-900 md:text-4xl">
              Success in Every Lesson
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-5">
              {legacyLeft.map((item) => (
                <div key={item.letter} className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-green-100 text-3xl font-black text-green-900">
                    {item.letter}
                  </div>

                  <p className="pt-2 text-xl font-semibold text-gray-900">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-5">
              {sportRight.map((item) => (
                <div key={item.letter} className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-green-100 text-3xl font-black text-green-900">
                    {item.letter}
                  </div>

                  <p className="pt-2 text-xl font-semibold text-gray-900">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Curriculum rationale */}
        <div className="mb-10 rounded-2xl border bg-white p-7 shadow-sm md:p-10">
          <h2 className="mb-6 text-3xl font-extrabold text-gray-900">
            Why use a sports-specific curriculum?
          </h2>

          <div className="space-y-5 text-lg leading-relaxed text-gray-800">
            <p>
              Legacy Sport Yorkshire believes that a sports specific curriculum
              is the most beneficial and has the most positive impact on skill
              attainment and retention, enjoyment and development of a
              physically literate child that wants to continue engaging in
              physical activity outside of school and on their journey into
              adulthood.
            </p>

            <p>
              Our curriculum does focus on fundamental movement skills but via
              game sense lessons. This is because teaching fundamentals within a
              real sport context from as early as EYFS helps the children
              understand why the skill matters as it makes the learning feel
              purposeful.
            </p>

            <p>
              This curriculum will ensure every child develops the physical,
              game play and social and emotional learning that they need to
              thrive across all subjects and in living a happy healthy life.
            </p>
          </div>
        </div>

        {/* Learning domains */}
        <div className="mb-10">
          <div className="mb-6">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Learning Framework
            </h2>

            <p className="mt-2 text-lg text-gray-600">
              Every lesson is designed to develop children across three
              connected areas of learning.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border bg-white p-7 shadow-sm">
              <div className="mb-4 text-4xl" aria-hidden="true">
                🏃
              </div>

              <h3 className="text-2xl font-extrabold text-purple-700">
                Physical
              </h3>

              <p className="mt-3 text-lg leading-relaxed text-gray-700">
                The movement skills, physical competencies and sport-specific
                techniques children are developing within the lesson.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-7 shadow-sm">
              <div className="mb-4 text-4xl" aria-hidden="true">
                🧠
              </div>

              <h3 className="text-2xl font-extrabold text-purple-700">
                Game Play
              </h3>

              <p className="mt-3 text-lg leading-relaxed text-gray-700">
                How children apply their skills within games, understand rules,
                make decisions and begin to recognise space, tactics and
                opposition.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-7 shadow-sm">
              <div className="mb-4 text-4xl" aria-hidden="true">
                🤝
              </div>

              <h3 className="text-2xl font-extrabold text-purple-700">
                Social &amp; Emotional
              </h3>

              <p className="mt-3 text-lg leading-relaxed text-gray-700">
                The confidence, communication, teamwork, resilience and positive
                behaviours children develop through PE and physical activity.
              </p>
            </div>
          </div>
        </div>

        {/* Long Term Planning */}
        <div className="mb-12">
          <div className="mb-6">
            <p className="font-bold uppercase tracking-wide text-purple-700">
              Planning &amp; Progression
            </p>

            <h2 className="mt-1 text-3xl font-extrabold text-gray-900">
              KS1 Long Term Plan
            </h2>

            <p className="mt-2 max-w-3xl text-lg leading-relaxed text-gray-600">
              See how learning is sequenced week by week across Years 1 and 2,
              including the intended activity area and key learning focus.
            </p>
          </div>

          <Link
            href="/curriculum/ks1/long-term-plan"
            className="group block overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:border-purple-500 hover:shadow-lg"
          >
            <div className="grid gap-0 md:grid-cols-3">
              <div className="bg-purple-700 p-8 text-white md:p-10">
                <div className="text-5xl" aria-hidden="true">
                  🗓️
                </div>

                <h3 className="mt-5 text-3xl font-extrabold">
                  KS1 Long Term Plan
                </h3>

                <p className="mt-3 text-lg leading-relaxed text-purple-100">
                  Year 1 and Year 2 curriculum sequencing.
                </p>
              </div>

              <div className="p-8 md:col-span-2 md:p-10">
                <h3 className="text-2xl font-extrabold text-gray-900">
                  See the curriculum journey at a glance
                </h3>

                <p className="mt-3 text-lg leading-relaxed text-gray-700">
                  Explore the weekly curriculum plan across KS1 and move
                  directly into lessons and units that are already available in
                  the app.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="rounded-full bg-purple-100 px-4 py-2 font-semibold text-purple-800">
                    Year 1
                  </span>

                  <span className="rounded-full bg-purple-100 px-4 py-2 font-semibold text-purple-800">
                    Year 2
                  </span>

                  <span className="rounded-full bg-green-100 px-4 py-2 font-semibold text-green-800">
                    Week-by-week progression
                  </span>
                </div>

                <div className="mt-7 font-bold text-purple-700 transition group-hover:translate-x-1">
                  View KS1 Long Term Plan →
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Curriculum Areas */}
        <div className="mb-12">
          <div className="mb-6">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Our Sports
            </h2>

            <p className="mt-2 text-lg text-gray-600">
              The curriculum covers a broad range of activity areas and
              sports-specific learning.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {curriculumAreas.map((area) => (
              <div
                key={area.heading}
                className="rounded-2xl border bg-white p-7 shadow-sm"
              >
                <h3 className="mb-5 text-2xl font-extrabold text-purple-700">
                  {area.heading}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {area.sports.map((sport) => (
                    <span
                      key={sport}
                      className="rounded-full bg-purple-100 px-4 py-2 text-lg font-semibold text-purple-800"
                    >
                      {sport}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
          <Link
            href="/curriculum/glossary"
            className="rounded-xl border bg-white px-6 py-4 text-center font-bold text-purple-700 transition hover:border-purple-500"
          >
            View Curriculum Glossary
          </Link>

          <Link
            href="/curriculum"
            className="rounded-xl bg-purple-700 px-6 py-4 text-center font-bold text-white transition hover:bg-purple-800"
          >
            Access Your Curriculum →
          </Link>
        </div>
      </section>
    </main>
  );
}