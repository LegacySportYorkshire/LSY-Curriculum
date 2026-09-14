import Link from "next/link";

const years = [
  {
    year: "Year 3",
    description: "Explore the Year 3 PE curriculum.",
    href: "/curriculum/ks2/year-3/football",
    available: true,
  },
  {
    year: "Year 4",
    description: "Explore the Year 4 PE curriculum.",
    href: "/curriculum/ks2/year-4/football",
    available: true,
  },
  {
    year: "Year 5",
    description: "Explore the Year 5 PE curriculum.",
    href: "/curriculum/ks2/year-5/football",
    available: true,
  },
  {
    year: "Year 6",
    description: "Explore the Year 6 PE curriculum.",
    href: "/curriculum/ks2/year-6/football",
    available: true,
  },
];

export default function KS2Page() {
  return (
    <main className="min-h-screen bg-gray-50">
      <header className="border-b bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-6 py-5">
          <Link
            href="/curriculum"
            className="font-semibold text-purple-700 hover:text-purple-900"
          >
            ← Back to Curriculum
          </Link>

          <div className="mt-6">
            <p className="font-semibold text-purple-700">
              LSY CURRICULUM
            </p>

            <h1 className="mt-2 text-4xl font-bold text-gray-900">
              KS2 Curriculum
            </h1>

            <p className="mt-2 text-gray-600">
              Explore the PE curriculum for Key Stage 2.
            </p>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="mb-6 text-2xl font-bold text-gray-900">
          Select a Year Group
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {years.map((item) =>
            item.available ? (
              <Link
                key={item.year}
                href={item.href!}
                className="rounded-2xl border bg-white p-8 shadow-sm transition hover:border-purple-500 hover:shadow-md"
              >
                <div className="mb-5 text-5xl">
                  🎒
                </div>

                <h3 className="text-2xl font-bold text-gray-900">
                  {item.year}
                </h3>

                <p className="mt-2 text-gray-600">
                  {item.description}
                </p>

                <div className="mt-6 font-semibold text-purple-700">
                  Explore {item.year} →
                </div>
              </Link>
            ) : (
              <div
                key={item.year}
                className="rounded-2xl border bg-white p-8 opacity-60 shadow-sm"
              >
                <div className="mb-5 text-5xl">
                  🎒
                </div>

                <h3 className="text-2xl font-bold text-gray-900">
                  {item.year}
                </h3>

                <p className="mt-2 text-gray-600">
                  {item.description}
                </p>

                <div className="mt-6 font-semibold text-gray-500">
                  Coming soon
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </main>
  );
}
