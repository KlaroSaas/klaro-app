"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase-browser";
import type { User } from "@supabase/supabase-js";

export default function DashboardPage() {
  const router = useRouter();
  const supabase = createClient();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) {
        router.push("/login");
        return;
      }
      setUser(data.user);
      setLoading(false);
    });
  }, [router, supabase]);

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/");
  }

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-white/60">Chargement...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-6 py-10 max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-2xl font-bold">Ton espace Klaro</h1>
        <button
          onClick={handleLogout}
          className="text-sm text-white/60 hover:text-white transition"
        >
          Se déconnecter
        </button>
      </div>

      <div className="bg-klaro-surface rounded-xl p-6 border border-white/10">
        <p className="text-white/60 text-sm mb-1">Connecté en tant que</p>
        <p className="font-medium">{user?.email}</p>
      </div>

      <div className="mt-8 bg-klaro-surface rounded-xl p-6 border border-white/10 border-dashed text-center">
        <p className="text-white/60">
          La création de formation arrive à la prochaine étape 🚧
        </p>
      </div>
    </main>
  );
}
