import Link from "next/link";

const glossarySections = [
  {
    heading: "Curriculum Structure",
    items: [
      {
        term: "Learning Objectives",
        definition:
          "The intended learning for the lesson. These show what children should be working towards during the session and help the coach or teacher identify what progress may look like.",
      },
      {
        term: "Physical",
        definition:
          "The physical skills, movement competencies and sport-specific techniques children are developing within the lesson.",
      },
      {
        term: "Game Play",
        definition:
          "How children apply skills within games. This can include understanding rules, making decisions, recognising space, working with team mates and responding to opposition.",
      },
      {
        term: "Social & Emotional",
        definition:
          "The personal and interpersonal learning developed through PE, including confidence, communication, teamwork, resilience, listening, respect and positive behaviour.",
      },
      {
        term: "Terminology",
        definition:
          "The key words and phrases children should begin to hear, understand and use within the activity or sport.",
      },
      {
        term: "Equipment",
        definition:
          "The equipment required to deliver the lesson or activity.",
      },
    ],
  },

  {
    heading: "Lesson Delivery",
    items: [
      {
        term: "Warm Up",
        definition:
          "The opening activity of the lesson. Warm ups should prepare children physically and mentally while introducing or revisiting skills linked to the main learning.",
      },
      {
        term: "Skill Development",
        definition:
          "The part of the lesson where children practise and develop the key skill or skills being taught.",
      },
      {
        term: "Game / Game Play",
        definition:
          "An opportunity for children to apply their learning in a purposeful, enjoyable and increasingly game-like situation.",
      },
      {
        term: "Activity Details",
        definition:
          "The practical instructions for setting up and delivering an activity, including how the activity works and what the children are expected to do.",
      },
      {
        term: "Coaching Points",
        definition:
          "The key technical or teaching cues that coaches and teachers should emphasise while children are practising a skill.",
      },
      {
        term: "Adaptations",
        definition:
          "Changes that can be made to an activity so that it better meets the needs of the group or individual children.",
      },
      {
        term: "Progressions",
        definition:
          "Ways of developing or increasing the challenge of an activity once children are ready to move on.",
      },
    ],
  },

  {
    heading: "Assessment & Reflection",
    items: [
      {
        term: "Legacy Learning Questions",
        definition:
          "Questions used to help the coach or teacher check understanding, observe progress and encourage children to reflect on what they have learned.",
      },
      {
        term: "Start to",
        definition:
          "Used when children are beginning to experience, understand or demonstrate a skill or concept. The expectation is that learning is emerging rather than fully secure.",
      },
      {
        term: "Demonstrate",
        definition:
          "Used when children are expected to show the skill, understanding or behaviour more consistently and with increasing confidence.",
      },
    ],
  },

  {
    heading: "Legacy Support",
    items: [
      {
        term: "Legacy Playback",
        definition:
          "An opportunity to repeat or revisit a previous activity or progression when children need more time to consolidate their learning before moving on.",
      },
      {
        term: "Video Support",
        definition:
          "Supporting video resources linked to a lesson or activity that can help coaches and teachers understand delivery, organisation or key coaching points.",
      },
      {
        term: "Legacy Top Teaching Tips",
        definition:
          "Additional guidance designed to help teachers and coaches focus on the most important principles for successfully delivering a block of learning.",
      },
    ],
  },
];

export default function CurriculumGlossaryPage() {
  return (
    <main className="min-h-screen bg-stone-50">
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
              Curriculum Glossary
            </h1>

            <p className="mt-3 max-w-3xl text-lg text-gray-600">
              A guide to the language, lesson structure and teaching terminology
              used throughout the Legacy Sport Yorkshire curriculum.
            </p>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-10 rounded-2xl border bg-purple-50 p-7 shadow-sm md:p-9">
          <h2 className="text-2xl font-extrabold text-purple-800">
            How to use this glossary
          </h2>

          <p className="mt-3 text-lg leading-relaxed text-gray-800">
            These definitions explain how recurring terms are used across the
            curriculum. Individual sports may also contain their own
            sport-specific terminology, which can be found within the relevant
            curriculum overview and lesson plans.
          </p>
        </div>

        <div className="space-y-10">
          {glossarySections.map((section) => (
            <section key={section.heading}>
              <h2 className="mb-5 text-3xl font-extrabold text-gray-900">
                {section.heading}
              </h2>

              <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
                {section.items.map((item, index) => (
                  <div
                    key={item.term}
                    className={`grid gap-3 p-6 md:grid-cols-3 md:gap-8 ${
                      index !== 0 ? "border-t" : ""
                    }`}
                  >
                    <div>
                      <h3 className="text-xl font-extrabold text-purple-700">
                        {item.term}
                      </h3>
                    </div>

                    <div className="text-lg leading-relaxed text-gray-700 md:col-span-2">
                      {item.definition}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-between">
          <Link
            href="/curriculum/overview"
            className="rounded-xl border bg-white px-6 py-4 text-center font-bold text-purple-700 transition hover:border-purple-500"
          >
            ← Curriculum Overview
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