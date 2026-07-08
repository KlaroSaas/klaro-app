export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <div className="max-w-2xl">
        <span className="inline-block mb-6 px-4 py-1 rounded-full bg-klaro-surface text-klaro-accent2 text-sm font-medium">
          Version bêta — KlaroSaas
        </span>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Vends ta formation en{" "}
          <span className="text-klaro-accent">10 minutes</span>, pas en 10
          jours.
        </h1>
        <p className="text-lg text-white/70 mb-10">
          Pas de tunnel de vente. Pas d&apos;emailing à configurer. Pas de
          menu à 40 options. Juste ta formation, en ligne, vendue.
        </p>
        <a
          href="/signup"
          className="inline-block px-8 py-4 rounded-xl bg-klaro-accent hover:bg-klaro-accent/90 transition font-semibold"
        >
          Créer ma formation gratuitement
        </a>
      </div>
    </main>
  );
}
