import Link from "next/link";

const activities = [
  {
    name: "Dance",
    emoji: "💃",
    description: "Explore Year 1 dance units and lessons.",
    href: "/curriculum/ks1/year-1/dance",
  },
  {
    name: "Football",
    emoji: "⚽",
    description: "Develop fundamental football skills.",
  },
  {
    name: "Basketball",
    emoji: "🏀",
    description: "Explore movement, passing and ball skills.",
  },
  {
    name: "Dodgeball",
    emoji: "🏐",
    description: "Develop throwing, catching and movement skills.",
  },
  {
    name: "Cricket",
    emoji: "🏏",
    description: "Develop basic striking and fielding skills.",
  },
  {
    name: "Rounders",
    emoji: "🥎",
    description: "Explore striking, throwing and fielding.",
  },
  {
    name: "Tennis",
    emoji: "🎾",
    description: "Develop racket and ball control.",
  },
  {
    name: "Gymnastics",
    emoji: "🤸",
    description: "Explore balance, movement and body control.",
  },
  {
    name: "Athletics",
    emoji: "🏃",
    description: "Develop running, jumping and throwing.",
  },
  {
    name: "OAA",
    emoji: "🧭",
    description: "Explore outdoor adventurous activities.",
  },
];

export default function Year1Page() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-5">

          <Link
            href="/curriculum/ks1"
            className="text-purple-700 font-semibold hover:text-purple-900"
          >
            ← Back to KS1 Curriculum
          </Link>

          <div className="mt-6">
            <p className="text-purple-700 font-semibold">
              KS1 CURRICULUM
            </p>

            <h1 className="text-4xl font-bold text-gray-900 mt-2">
              Year 1
            </h1>

            <p className="text-gray-600 mt-2">
              Select an activity to explore the Year 1 PE curriculum.
            </p>
          </div>

        </div>
      </header>

      {/* Activities */}
      <section className="max-w-7xl mx-auto px-6 py-12">

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Year 1 Activities
          </h2>

          <p className="text-gray-500 mt-1">
            Choose an activity to view its curriculum content.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {activities.map((activity) => {
            const card = (
              <>
                <div className="text-5xl mb-5">
                  {activity.emoji}
                </div>

                <h3 className="text-2xl font-bold text-gray-900">
                  {activity.name}
                </h3>

                <p className="text-gray-600 mt-2">
                  {activity.description}
                </p>

                <div className="text-purple-700 font-semibold mt-6">
                  {activity.href ? "View curriculum →" : "Coming soon"}
                </div>
              </>
            );

            if (activity.href) {
              return (
                <Link
                  key={activity.name}
                  href={activity.href}
                  className="bg-white border rounded-2xl p-7 shadow-sm hover:shadow-md hover:border-purple-500 transition"
                >
                  {card}
                </Link>
              );
            }

            return (
              <div
                key={activity.name}
                className="bg-white border rounded-2xl p-7 shadow-sm opacity-75"
              >
                {card}
              </div>
            );
          })}

        </div>

      </section>

    </main>
  );
}