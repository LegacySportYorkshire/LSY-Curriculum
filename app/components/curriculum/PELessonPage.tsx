import Link from "next/link";
import type { PELesson, LessonBlock } from "@/app/data/dance/types";

type Props = {
  lesson: PELesson;
  activityName: string;
  activityIcon: string;
  routeBase: string;
  previousLesson?: number;
  nextLesson?: number;
};

const calloutClasses = {
  yellow: "bg-yellow-50 border-yellow-400",
  red: "bg-red-50 border-red-400",
  green: "bg-green-50 border-green-400",
  blue: "bg-blue-50 border-blue-400",
};

function LessonBlockContent({ block }: { block: LessonBlock }) {
  if (block.type === "paragraph") {
    return <p>{block.text}</p>;
  }

  if (block.type === "list") {
    return (
      <ul className="space-y-2">
        {block.items.map((item) => (
          <li key={item} className="flex gap-2">
            <span aria-hidden="true">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "chips") {
    return (
      <div className="flex flex-wrap gap-2">
        {block.items.map((item) => (
          <span
            key={item}
            className="rounded-full bg-gray-100 px-3 py-1 font-semibold text-gray-700"
          >
            {item}
          </span>
        ))}
      </div>
    );
  }

  if (block.type === "quote") {
    return (
      <div className="rounded-xl bg-purple-50 p-5">
        <p className="font-semibold text-purple-900">
          🎶 “{block.text}”
        </p>

        {block.note ? (
          <p className="mt-2 text-gray-600">{block.note}</p>
        ) : null}
      </div>
    );
  }

  return (
    <div
      className={`rounded-r-xl border-l-4 p-5 ${
        calloutClasses[block.tone]
      }`}
    >
      <p className="font-bold">{block.title}</p>
      <p className="mt-1">{block.text}</p>
    </div>
  );
}

export default function PELessonPage({
  lesson,
  activityName,
  activityIcon,
  routeBase,
  previousLesson,
  nextLesson,
}: Props) {
  return (
    <main className="min-h-screen bg-stone-50">
      <header className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <Link
            href={routeBase}
            className="font-semibold text-purple-700 hover:text-purple-900"
          >
            ← Back to {activityName} Lessons
          </Link>

          <div className="mt-7 flex items-center gap-5">
            <div className="text-6xl" aria-hidden="true">
              {activityIcon}
            </div>

            <div>
              <p className="font-bold uppercase tracking-wide text-purple-700">
                Year 1 • {activityName}
              </p>

              <h1 className="mt-1 text-4xl font-extrabold text-gray-900 md:text-5xl">
                Lesson {lesson.number}
              </h1>

              <p className="mt-2 text-xl text-gray-600">
                {lesson.title}
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8 rounded-2xl border bg-white p-7 shadow-sm md:p-9">
          <div className="mb-6 flex items-center gap-3">
            <span className="text-3xl" aria-hidden="true">
              🎯
            </span>

            <h2 className="text-3xl font-extrabold text-gray-900">
              Learning Objectives
            </h2>
          </div>

          {lesson.learningObjectiveGroups?.length ? (
            <div className="grid gap-6 md:grid-cols-3">
              {lesson.learningObjectiveGroups.map((group) => (
                <div
                  key={group.heading}
                  className="rounded-xl bg-purple-50 p-5"
                >
                  <h3 className="mb-3 text-xl font-extrabold text-purple-700">
                    {group.heading}
                  </h3>

                  <ul className="space-y-3 text-lg text-gray-800">
                    {group.objectives.map((objective) => (
                      <li key={objective} className="flex gap-2">
                        <span aria-hidden="true">•</span>
                        <span>{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              {lesson.learningObjectives.map((objective) => (
                <div
                  key={objective}
                  className="rounded-xl bg-purple-50 p-5 text-lg text-gray-800"
                >
                  {objective}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mb-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-7 shadow-sm">
            <h2 className="mb-5 text-2xl font-extrabold text-purple-700">
              📚 Terminology
            </h2>

            <div className="flex flex-wrap gap-3">
              {lesson.terminology.map((term) => (
                <span
                  key={term}
                  className="rounded-full bg-purple-100 px-4 py-2 text-lg font-semibold text-purple-800"
                >
                  {term}
                </span>
              ))}
            </div>
          </div>

          {lesson.choreographicDevices?.length ? (
            <div className="rounded-2xl border bg-white p-7 shadow-sm">
              <h2 className="mb-5 text-2xl font-extrabold text-purple-700">
                🎨 Choreographic Devices
              </h2>

              <div className="flex flex-wrap gap-3">
                {lesson.choreographicDevices.map((device) => (
                  <span
                    key={device}
                    className="rounded-full bg-green-100 px-4 py-2 text-lg font-semibold text-green-800"
                  >
                    {device}
                  </span>
                ))}
              </div>
            </div>
          ) : null}

          {lesson.equipment?.length ? (
            <div className="rounded-2xl border bg-white p-7 shadow-sm">
              <h2 className="mb-5 text-2xl font-extrabold text-purple-700">
                🧰 Equipment
              </h2>

              <div className="flex flex-wrap gap-3">
                {lesson.equipment.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-green-100 px-4 py-2 text-lg font-semibold text-green-800"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ) : null}
        </div>

        {lesson.coachingReference ? (
          <div className="mb-8 rounded-2xl border bg-blue-50 p-7 shadow-sm">
            <h2 className="mb-4 text-2xl font-extrabold text-blue-900">
              💡 {lesson.coachingReference.title}
            </h2>

            <ul className="space-y-2 text-lg text-gray-800">
              {lesson.coachingReference.points.map((point) => (
                <li key={point} className="flex gap-2">
                  <span aria-hidden="true">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {lesson.activities.map((activity) => (
          <article
            key={`${activity.type}-${activity.title}`}
            className="mb-8 overflow-hidden rounded-2xl border bg-white shadow-sm"
          >
            <div className="bg-green-100 px-7 py-5">
              <div className="flex items-center gap-3">
                <span className="text-3xl" aria-hidden="true">
                  {activity.icon}
                </span>

                <div>
                  <p className="text-sm font-bold uppercase tracking-wide text-green-800">
                    {activity.type}
                  </p>

                  <h2 className="text-3xl font-extrabold text-gray-900">
                    {activity.title}
                  </h2>
                </div>
              </div>
            </div>

            <div className="space-y-8 p-7 text-lg leading-relaxed text-gray-800 md:p-9">
              {activity.sections.map((section) => (
                <section key={section.heading}>
                  <h3 className="mb-3 text-xl font-extrabold text-purple-700">
                    {section.heading}
                  </h3>

                  <div className="space-y-4">
                    {section.blocks.map((block, index) => (
                      <LessonBlockContent
                        key={`${section.heading}-${index}`}
                        block={block}
                      />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </article>
        ))}

        {lesson.learningQuestions?.length ? (
          <div className="mb-10 rounded-2xl border bg-purple-50 p-7 shadow-sm md:p-9">
            <h2 className="mb-5 text-2xl font-extrabold text-purple-800">
              ❓ Legacy Learning Questions
            </h2>

            <ul className="space-y-3 text-lg text-gray-800">
              {lesson.learningQuestions.map((question) => (
                <li key={question} className="flex gap-2">
                  <span aria-hidden="true">•</span>
                  <span>{question}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {lesson.videoSupport?.available ? (
          <div className="mb-10 rounded-2xl border bg-white p-8 shadow-sm md:p-10">
            <div className="text-center">
              <div className="mb-4 text-5xl" aria-hidden="true">
                🎥
              </div>

              <h2 className="text-3xl font-extrabold text-gray-900">
                Video Support
              </h2>

              <p className="mt-2 text-lg text-gray-600">
                Supporting video resources for this lesson.
              </p>

              <button
                type="button"
                className="mt-6 rounded-xl bg-purple-700 px-7 py-3 text-lg font-bold text-white transition hover:bg-purple-800"
              >
                {lesson.videoSupport.label ?? "View Video Support"}
              </button>
            </div>
          </div>
        ) : null}

        <nav
          className="flex flex-col justify-between gap-4 sm:flex-row"
          aria-label="Lesson navigation"
        >
          {previousLesson ? (
            <Link
              href={`${routeBase}/lesson-${previousLesson}`}
              className="rounded-xl border bg-white px-6 py-4 text-center font-bold text-purple-700 transition hover:border-purple-500"
            >
              ← Previous Lesson
            </Link>
          ) : (
            <Link
              href={routeBase}
              className="rounded-xl border bg-white px-6 py-4 text-center font-bold text-purple-700 transition hover:border-purple-500"
            >
              ← All {activityName} Lessons
            </Link>
          )}

          {nextLesson ? (
            <Link
              href={`${routeBase}/lesson-${nextLesson}`}
              className="rounded-xl bg-purple-700 px-6 py-4 text-center font-bold text-white transition hover:bg-purple-800"
            >
              Next Lesson →
            </Link>
          ) : (
            <Link
              href={routeBase}
              className="rounded-xl bg-purple-700 px-6 py-4 text-center font-bold text-white transition hover:bg-purple-800"
            >
              All {activityName} Lessons →
            </Link>
          )}
        </nav>
      </section>
    </main>
  );
}