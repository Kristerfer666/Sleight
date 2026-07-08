export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col items-center justify-center px-6">
      <h1 className="text-6xl font-bold tracking-tight mb-4">Sleight</h1>
      <p className="text-zinc-400 text-xl mb-10">
        A skill map for card and coin magic
      </p>
      <div className="flex gap-4">
        <a
          href="/skills"
          className="bg-zinc-100 text-zinc-950 px-6 py-3 rounded-full font-medium hover:bg-white transition-colors"
        >
          Browse Skills
        </a>
      </div>
    </main>
  );
}
