import Link from "next/link";

const activities = [
  {
    name: "Football",
    emoji: "⚽",
    description: "Develop Year 2 football skills, tactics and game play.",
    href: "/curriculum/ks1/year-2/football",
  },
  {
    name: "Dance",
    emoji: "💃",
    description: "Explore Year 2 dance units and lessons.",
  },
  {
    name: "Basketball",
    emoji: "🏀",
    description: "Develop movement, passing and ball skills.",
  },
  {
    name: "Dodgeball",
    emoji: "🏐",
    description: "Develop throwing, catching and movement skills.",
  },
  {
    name: "Cricket",
    emoji: "🏏",
    description: "Develop striking, bowling and fielding skills.",
  },
  {
    name: "Rounders",
    emoji: "🥎",
    description: "Develop striking, throwing and fielding.",
  },
  {
    name: "Tennis",
    emoji: "🎾",
    description: "Develop racket skills and ball control.",
  },
  {
    name: "Gymnastics",
    emoji: "🤸",
    description: "Develop balance, movement and body control.",
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

export default function Year2Page() {
  return (
    <main className="min-h-screen bg-gray-50">
      <header className="border-b bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-6 py-5">
          <Link
            href="/curriculum/ks1"
            className="font-semibold text-purple-700 hover:text-purple-900"
          >
            ← Back to KS1 Curriculum
          </Link>

          <div className="mt-6">
            <p className="font-semibold text-purple-700">
              KS1 CURRICULUM
            </p>

            <h1 className="mt-2 text-4xl font-bold text-gray-900">
              Year 2
            </h1>

            <p className="mt-2 text-gray-600">
              Select an activity to explore the Year 2 PE curriculum.
            </p>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Year 2 Activities
          </h2>

          <p className="mt-1 text-gray-500">
            Choose an activity to view its curriculum content.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity) => {
            const card = (
              <>
                <div className="mb-5 text-5xl">
                  {activity.emoji}
                </div>

                <h3 className="text-2xl font-bold text-gray-900">
                  {activity.name}
                </h3>

                <p className="mt-2 text-gray-600">
                  {activity.description}
                </p>

                <div className="mt-6 font-semibold text-purple-700">
                  {activity.href ? "View curriculum →" : "Coming soon"}
                </div>
              </>
            );

            if (activity.href) {
              return (
                <Link
                  key={activity.name}
                  href={activity.href}
                  className="rounded-2xl border bg-white p-7 shadow-sm transition hover:border-purple-500 hover:shadow-md"
                >
                  {card}
                </Link>
              );
            }

            return (
              <div
                key={activity.name}
                className="rounded-2xl border bg-white p-7 opacity-75 shadow-sm"
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