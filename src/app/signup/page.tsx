"use client";

export const dynamic = "force-dynamic";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase-browser";

export default function SignupPage() {
  const router = useRouter();
  const supabase = createClient();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    router.push("/dashboard");
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-2">Crée ton compte</h1>
        <p className="text-white/60 mb-8">
          Gratuit, aucune carte bancaire requise.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-klaro-surface border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-klaro-accent"
          />
          <input
            type="password"
            placeholder="Mot de passe (6 caractères min.)"
            required
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-klaro-surface border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-klaro-accent"
          />

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="mt-2 bg-klaro-accent hover:bg-klaro-accent/90 transition rounded-lg px-4 py-3 font-semibold disabled:opacity-50"
          >
            {loading ? "Création..." : "Créer mon compte"}
          </button>
        </form>

        <p className="text-white/50 text-sm mt-6 text-center">
          Déjà un compte ?{" "}
          <a href="/login" className="text-klaro-accent2 underline">
            Se connecter
          </a>
        </p>
      </div>
    </main>
  );
}
