import Link from "next/link";

const years = [
  {
    year: "Year 1",
    description: "Explore the Year 1 PE curriculum.",
  },
  {
    year: "Year 2",
    description: "Explore the Year 2 PE curriculum.",
  },
];

export default function KS1Page() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-5">

          <Link
            href="/"
            className="text-purple-700 font-semibold hover:text-purple-900"
          >
            ← Back to Dashboard
          </Link>

          <div className="mt-6">
            <p className="text-purple-700 font-semibold">
              LSY CURRICULUM
            </p>

            <h1 className="text-4xl font-bold text-gray-900 mt-2">
              KS1 Curriculum
            </h1>

            <p className="text-gray-600 mt-2">
              Explore the PE curriculum for Key Stage 1.
            </p>
          </div>

        </div>
      </header>

      {/* Years */}
      <section className="max-w-7xl mx-auto px-6 py-12">

        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Select a Year Group
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {years.map((item) => (
            <Link
              key={item.year}
              href={
                item.year === "Year 1"
                  ? "/curriculum/ks1/year-1"
                  : "/curriculum/ks1/year-2"
              }
              className="bg-white border rounded-2xl p-8 shadow-sm hover:shadow-md hover:border-purple-500 transition"
            >

              <div className="text-5xl mb-5">
                🎒
              </div>

              <h3 className="text-2xl font-bold text-gray-900">
                {item.year}
              </h3>

              <p className="text-gray-600 mt-2">
                {item.description}
              </p>

              <div className="text-purple-700 font-semibold mt-6">
                Explore {item.year} →
              </div>

            </Link>
          ))}

        </div>

      </section>

    </main>
  );
}