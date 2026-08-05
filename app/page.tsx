import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <Image
              src="/logo.png"
              alt="Legacy Sport Yorkshire"
              width={70}
              height={70}
            />

            <div>
              <h1 className="text-3xl font-bold text-purple-700">
                LSY Curriculum
              </h1>

              <p className="text-gray-500">
                Legacy Sport Yorkshire
              </p>
            </div>
          </div>

          <button className="rounded-lg bg-purple-700 px-5 py-2 text-white hover:bg-purple-800">
            Login
          </button>
        </div>
      </header>

      <section className="max-w-7xl mx-auto py-20 text-center">
        <h2 className="text-5xl font-bold mb-6">
          Welcome to LSY Curriculum
        </h2>

        <p className="text-xl text-gray-600 mb-10">
          Making PE teaching simple, engaging and consistent.
        </p>

        <button className="rounded-xl bg-purple-700 px-8 py-4 text-white text-xl hover:bg-purple-800">
          Enter Platform
        </button>
      </section>
    </main>
  );
}