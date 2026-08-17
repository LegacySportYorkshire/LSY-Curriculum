import Link from "next/link";

export default function CurriculumPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <header className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <Link
            href="/"
            className="font-semibold text-purple-700 hover:text-purple-900"
          >
            ← Back to Home
          </Link>

          <div className="mt-6">
            <p className="font-bold uppercase tracking-wide text-purple-700">
              Legacy Sport Yorkshire
            </p>

            <h1 className="mt-1 text-4xl font-extrabold text-gray-900 md:text-5xl">
              PE Curriculum
            </h1>

            <p className="mt-3 max-w-3xl text-lg text-gray-600">
              Explore the Legacy Sport Yorkshire curriculum, understand our
              approach and access curriculum content.
            </p>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/curriculum/overview"
            className="rounded-2xl border bg-white p-7 shadow-sm transition hover:border-purple-500 hover:shadow-md"
          >
            <div className="mb-4 text-4xl">🧭</div>

            <h2 className="text-2xl font-extrabold text-gray-900">
              Curriculum Overview
            </h2>

            <p className="mt-3 text-gray-600">
              Understand the thinking, values and learning framework behind the
              curriculum.
            </p>

            <p className="mt-5 font-bold text-purple-700">
              View Overview →
            </p>
          </Link>

          <Link
            href="/curriculum/glossary"
            className="rounded-2xl border bg-white p-7 shadow-sm transition hover:border-purple-500 hover:shadow-md"
          >
            <div className="mb-4 text-4xl">📖</div>

            <h2 className="text-2xl font-extrabold text-gray-900">
              Curriculum Glossary
            </h2>

            <p className="mt-3 text-gray-600">
              Understand the terminology and teaching language used throughout
              the curriculum.
            </p>

            <p className="mt-5 font-bold text-purple-700">
              View Glossary →
            </p>
          </Link>

          <Link
            href="/curriculum/ks1"
            className="rounded-2xl border bg-white p-7 shadow-sm transition hover:border-purple-500 hover:shadow-md"
          >
            <div className="mb-4 text-4xl">📚</div>

            <h2 className="text-2xl font-extrabold text-gray-900">
              KS1 Curriculum
            </h2>

            <p className="mt-3 text-gray-600">
              Access Year 1 and Year 2 PE curriculum content and lesson plans.
            </p>

            <p className="mt-5 font-bold text-purple-700">
              Explore KS1 →
            </p>
          </Link>

          <div className="rounded-2xl border bg-white p-7 opacity-60 shadow-sm">
            <div className="mb-4 text-4xl">🏫</div>

            <h2 className="text-2xl font-extrabold text-gray-900">
              KS2 Curriculum
            </h2>

            <p className="mt-3 text-gray-600">
              Year 3 to Year 6 curriculum content will be added here.
            </p>

            <p className="mt-5 font-bold text-gray-500">
              Coming soon
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}