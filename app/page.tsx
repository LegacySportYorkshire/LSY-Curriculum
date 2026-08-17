import Image from "next/image";
import Link from "next/link";

const curriculumAreas = [
  {
    title: "Curriculum Overview",
    description: "Understand how the curriculum is structured and how to use it.",
    icon: "🧭",
    href: "/curriculum/overview",
  },
  {
    title: "Curriculum Glossary",
    description: "Understand the key language used throughout the curriculum.",
    icon: "📖",
    href: "/curriculum/glossary",
  },
  {
    title: "KS1 Curriculum",
    description: "Explore Year 1 and Year 2 PE curriculum.",
    icon: "📚",
    href: "/curriculum/ks1",
  },
  {
    title: "KS2 Curriculum",
    description: "Explore Year 3 to Year 6 PE curriculum.",
    icon: "🏫",
    href: "/curriculum/ks2",
  },
];

const sports = [
  { name: "Dance", emoji: "💃" },
  { name: "Football", emoji: "⚽" },
  { name: "Basketball", emoji: "🏀" },
  { name: "Dodgeball", emoji: "🏐" },
  { name: "Cricket", emoji: "🏏" },
  { name: "Rounders", emoji: "🥎" },
  { name: "Tennis", emoji: "🎾" },
  { name: "Gymnastics", emoji: "🤸" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <div className="flex items-center gap-4">
            <Image
              src="/logo.png"
              alt="Legacy Sport Yorkshire"
              width={65}
              height={65}
              className="object-contain"
            />

            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-purple-700">
                LSY Curriculum
              </h1>

              <p className="text-gray-500">
                Legacy Sport Yorkshire
              </p>
            </div>
          </div>

          <button className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-lg font-semibold transition">
            Login
          </button>

        </div>
      </header>

      {/* Welcome */}
      <section className="max-w-7xl mx-auto px-6 py-12">

        <div className="bg-white rounded-2xl shadow-sm border p-8 md:p-12">

          <p className="text-purple-700 font-semibold mb-2">
            WELCOME TO LSY CURRICULUM
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            PE teaching made simple.
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl">
            A central platform for accessing curriculum plans, lesson
            resources and pupil assessment.
          </p>

        </div>

      </section>

      {/* Main Areas */}
      <section className="max-w-7xl mx-auto px-6 pb-12">

        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Curriculum Platform
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

      {curriculumAreas.map((area) => (
  <Link
    key={area.title}
    href={area.href}
    className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-purple-500 transition"
  >
    <div className="text-4xl mb-5">
      {area.icon}
    </div>

    <h3 className="text-xl font-bold text-gray-900 mb-2">
      {area.title}
    </h3>

    <p className="text-gray-600 mb-5">
      {area.description}
    </p>

    <span className="text-purple-700 font-semibold">
      Explore →
    </span>
</Link>
))}

</div>

</section>

      {/* Sports */}
      <section className="max-w-7xl mx-auto px-6 pb-16">

        <div className="bg-white border rounded-2xl p-8 shadow-sm">

          <div className="mb-6">

            <h2 className="text-2xl font-bold text-gray-900">
              Curriculum Subjects
            </h2>

            <p className="text-gray-500 mt-1">
              Quickly access your PE activity areas.
            </p>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            {sports.map((sport) => (
              <button
                key={sport.name}
                className="text-left border rounded-xl p-4 hover:border-purple-500 hover:bg-purple-50 transition"
              >

                <div className="text-3xl mb-2">
                  {sport.emoji}
                </div>

                <span className="font-semibold text-gray-800">
                  {sport.name}
                </span>

                <span className="block text-sm text-gray-500 mt-1">
                  View curriculum →
                </span>

              </button>
            ))}

          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="max-w-7xl mx-auto px-6 py-6 text-sm text-gray-500">
          © Legacy Sport Yorkshire · LSY Curriculum
        </div>
      </footer>

    </main>
  );
}