import { useState } from "react";
import { Menu, X, ChevronRight, MapPin, ExternalLink, Landmark, Building2, Factory, University, Clapperboard } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Tech‑Trollhättan – Visual mockup UPDATED: English UI + full info on all interactive buttons
// - Mobile‑first, responsive, grid/flex
// - Accessible (semantic roles, focus styles, keyboard nav)
// - Max text line‑length ~72ch
// - Interactive cards, timeline, simplified SVG map, visual feedback

export default function TechTrollhattanInfoMockupEN() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCard, setActiveCard] = useState<null | { title: string; body: string }>(null);
  const [mapTooltip, setMapTooltip] = useState<null | { x: number; y: number; title: string }>(null);

  const nav = [
    { id: "places", label: "Places" },
    { id: "history", label: "History" },
    { id: "today", label: "Today" },
    { id: "museums", label: "Museums & Heritage" },
    { id: "map", label: "Map" },
    { id: "resources", label: "Resources" },
  ];

  const handleNav = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    }
  };

  const places = [
    {
      title: "Locks & Göta River",
      icon: <Landmark aria-hidden className="w-6 h-6" />,
      body:
        "Trollhätte Canal and locks are Sweden’s oldest major lock system. The area around the Göta River rapids was developed from the 18th century, shaping the city’s industrial/technical profile. The current locks were inaugurated in 1844 and a new channel was completed in 1916.",
      tag: "18th c. • 1844 • 1916",
    },
    {
      title: "Olidan & Håjum Power Stations",
      icon: <Landmark aria-hidden className="w-6 h-6" />,
      body:
        "Olidan (opened 1910) was Sweden’s first large‑scale hydroelectric power plant for electricity production. The national project took ~14 years to build and relied on local industrial expertise, especially from NOHAB.",
      tag: "Hydropower • 1910",
    },
    {
      title: "Innovatum District (NOHAB)",
      icon: <Factory aria-hidden className="w-6 h-6" />,
      body:
        "Former NOHAB engineering works. Today a hub for technology, innovation and culture, housing Innovatum Science Center, museums and business parks.",
      tag: "NOHAB • Industrial heritage",
    },
    {
      title: "Andersinska House (Nordkap)",
      icon: <Building2 aria-hidden className="w-6 h-6" />,
      body:
        "Trollhättan’s oldest preserved residential building from the 18th century, adjacent to historic industrial areas.",
      tag: "18th c. • Heritage",
    },
  ];

  const modern = [
    {
      title: "GKN Aerospace",
      icon: <Factory aria-hidden className="w-6 h-6" />,
      body:
        "Continuing the tradition of advanced aero/space engineering rooted in the city’s flygmotor heritage. Activities include materials, engines and manufacturing innovation.",
      tag: "Aerospace",
    },
    {
      title: "University West",
      icon: <University aria-hidden className="w-6 h-6" />,
      body:
        "Research and education in production technology, robotics and Work‑Integrated Learning, with strong ties to local industry and societal sustainability.",
      tag: "Academia",
    },
    {
      title: "Tech & Innovation Clusters",
      icon: <Factory aria-hidden className="w-6 h-6" />,
      body:
        "Collaborations and companies in environmental tech, smart energy and creative industries. See the municipality’s business pages for initiatives and support.",
      tag: "Innovation",
    },
    {
      title: "Film i Väst / ‘Trollywood’",
      icon: <Clapperboard aria-hidden className="w-6 h-6" />,
      body:
        "Sweden’s film capital: production company, studios and regional investments that earned Trollhättan the nickname ‘Trollywood’.",
      tag: "Creative industry",
    },
  ];

  const timeline = [
    { year: "18th century", text: "Development around the Göta River rapids lays the foundation for an industrial city." },
    { year: "1844", text: "The current locks are inaugurated." },
    { year: "1910", text: "Olidan power station starts operation – Sweden’s first major hydro plant." },
    { year: "1916", text: "New lock channel completed." },
    { year: "1847→", text: "NOHAB founded: steam locomotives, water turbines, armaments; major export orders help weather the 1920s downturn." },
    { year: "1947", text: "First Saab car presented; automotive and aviation grow out of NOHAB’s legacy (→ today’s GKN)." },
    { year: "1990s→", text: "Film i Väst established – ‘Trollywood’ emerges." },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 selection:bg-emerald-200/70">
      {/* Skip link */}
      <a href="#places" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 z-50 bg-white border rounded px-3 py-2 shadow">
        Skip to content
      </a>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto max-w-6xl px-4 flex items-center justify-between h-16">
          <button onClick={() => handleNav("places")} className="text-lg font-semibold tracking-tight focus-visible:ring-2 focus-visible:ring-emerald-600 rounded px-1">
            Tech‑Trollhättan
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main menu">
            {nav.map((n) => (
              <button
                key={n.id}
                onClick={() => handleNav(n.id)}
                className="px-2 py-2 rounded text-sm font-medium text-neutral-700 hover:text-neutral-900 focus-visible:ring-2 focus-visible:ring-emerald-600"
              >
                {n.label}
              </button>
            ))}
          </nav>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded focus-visible:ring-2 focus-visible:ring-emerald-600"
            aria-expanded={menuOpen}
            aria-controls="mobilemenu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              id="mobilemenu"
              aria-label="Main menu mobile"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden border-t bg-white"
            >
              <ul className="px-4 py-2">
                {nav.map((n) => (
                  <li key={n.id}>
                    <button
                      onClick={() => handleNav(n.id)}
                      className="w-full text-left py-3 text-base rounded hover:bg-neutral-100 focus-visible:ring-2 focus-visible:ring-emerald-600"
                    >
                      {n.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* Intro */}
      <section className="mx-auto max-w-6xl px-4 pt-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight">A fact‑based overview of Trollhättan’s technical and industrial heritage</h1>
        <p className="mt-3 text-neutral-700 leading-relaxed max-w-[72ch]">
          This mockup brings together key places, a timeline of industrial milestones, and today’s innovation environments. Content is grounded in local resources and open data.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a href="#history" className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-emerald-600 text-white font-medium hover:bg-emerald-700 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-600">
            View timeline <ChevronRight className="w-4 h-4" />
          </a>
          <a href="#map" className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-neutral-300 bg-white hover:bg-neutral-50 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-600">
            Open map <MapPin className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Main content */}
      <main className="mx-auto max-w-6xl px-4 py-10 space-y-14">
        {/* Places */}
        <section id="places">
          <header className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold">Key historical places</h2>
            <p className="text-neutral-700 max-w-[72ch] mt-2">Click a card to open a short description. (Visual feedback on hover/click)</p>
          </header>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {places.map((p) => (
              <motion.button
                key={p.title}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveCard({ title: p.title, body: p.body })}
                className="group relative rounded-2xl border overflow-hidden bg-white text-left focus-visible:ring-2 focus-visible:ring-emerald-600 p-4"
                aria-label={`Read more about ${p.title}`}
              >
                <div className="flex items-start gap-3">
                  <div className="grid place-items-center w-12 h-12 rounded-xl bg-emerald-50 border text-emerald-700">
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{p.title}</h3>
                    <p className="text-sm text-neutral-700 max-w-[65ch] line-clamp-3">{p.body}</p>
                    <span className="mt-2 inline-flex text-xs px-2 py-1 rounded-full border bg-neutral-50">{p.tag}</span>
                  </div>
                </div>
                <span className="pointer-events-none absolute inset-0 ring-0 group-hover:ring-2 group-hover:ring-emerald-400 rounded-2xl transition" />
              </motion.button>
            ))}
          </div>
        </section>

        {/* History – timeline */}
        <section id="history">
          <header className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold">Technical & industrial history</h2>
            <p className="text-neutral-700 max-w-[72ch] mt-2">Hydropower, heavy engineering (NOHAB), aviation/automotive (Saab → GKN) and the film industry (Trollywood).</p>
          </header>
          <div className="relative border rounded-3xl bg-white p-6 overflow-hidden">
            <ol className="relative">
              {timeline.map((t) => (
                <li key={t.year} className="grid grid-cols-[140px_1fr] gap-4 py-3">
                  <div className="font-semibold text-emerald-700">{t.year}</div>
                  <div className="text-neutral-800 max-w-[72ch]">{t.text}</div>
                </li>
              ))}
            </ol>
            <div aria-hidden className="absolute top-6 left-[140px] bottom-6 w-px bg-neutral-200" />
          </div>
        </section>

        {/* Today – cards */}
        <section id="today">
          <header className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold">Today’s tech & innovation</h2>
            <p className="text-neutral-700 max-w-[72ch] mt-2">Examples of actors and environments in and around Trollhättan.</p>
          </header>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {modern.map((m) => (
              <article key={m.title} className="rounded-2xl border bg-white p-4 hover:shadow-md focus-within:shadow-md">
                <div className="flex items-center gap-3">
                  <div className="grid place-items-center w-12 h-12 rounded-xl bg-emerald-50 border text-emerald-700">
                    {m.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{m.title}</h3>
                    <p className="text-sm text-neutral-700 max-w-[65ch]">{m.body}</p>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="inline-flex text-xs px-2 py-1 rounded-full border bg-neutral-50">{m.tag}</span>
                  <button
                    onClick={() => setActiveCard({ title: m.title, body: m.body })}
                    className="inline-flex items-center gap-1 px-3 py-2 rounded-lg border hover:bg-neutral-50 focus-visible:ring-2 focus-visible:ring-emerald-600"
                    aria-label={`Read more about ${m.title}`}
                  >
                    Read more <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Museums & heritage */}
        <section id="museums">
          <header className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold">Local museums, heritage & education</h2>
            <p className="text-neutral-700 max-w-[72ch] mt-2">Destinations and institutions connected to industry, history and learning.</p>
          </header>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Innovatum Science Center", href: "#", desc: "Exhibitions on technology, industry and sustainability; testbeds and incubators nearby." },
              { title: "Saab Car Museum", href: "#", desc: "Saab’s journey from aviation to automobiles." },
              { title: "Trollhättan City Museum", href: "#", desc: "The city and region’s stories, including canal, locks and industries." },
              { title: "Photo & Association Archive (prismavg)", href: "https://prismavg.se/", desc: "Digitised photos, documents and local narratives." },
              { title: "University West", href: "#", desc: "Research/education in technology and social sustainability." },
            ].map((l) => (
              <a key={l.title} href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} className="group relative rounded-2xl border bg-white p-4 focus-visible:ring-2 focus-visible:ring-emerald-600">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <h3 className="font-medium">{l.title}</h3>
                    <p className="text-sm text-neutral-700 max-w-[65ch]">{l.desc}</p>
                  </div>
                  <ExternalLink aria-hidden className="w-5 h-5 text-neutral-500 group-hover:text-neutral-900" />
                </div>
                <span className="pointer-events-none absolute inset-0 rounded-2xl ring-0 group-hover:ring-2 group-hover:ring-emerald-400 transition" />
              </a>
            ))}
          </div>
        </section>

        {/* Map */}
        <section id="map">
          <header className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold">Interactive map (mockup)</h2>
            <p className="text-neutral-700 max-w-[72ch] mt-2">Click a point to open a short description.</p>
          </header>
          <div className="relative rounded-3xl overflow-hidden border bg-white">
            <svg
              viewBox="0 0 800 420"
              className="w-full h-72 sm:h-96"
              role="img"
              aria-label="Stylised map of Trollhättan"
              onMouseLeave={() => setMapTooltip(null)}
            >
              <rect x="0" y="0" width="800" height="420" fill="#eef2ff" />
              <path d="M100 0 C 200 120, 240 160, 260 210 C 280 260, 350 280, 420 300 C 520 330, 640 360, 800 420" fill="none" stroke="#60a5fa" strokeWidth="22" opacity="0.9" />

              {[
                { x: 240, y: 190, title: "Locks & Göta River", body: places[0].body },
                { x: 330, y: 240, title: "Olidan & Håjum", body: places[1].body },
                { x: 420, y: 300, title: "Innovatum / NOHAB", body: places[2].body },
                { x: 470, y: 320, title: "University West", body: modern[1].body },
                { x: 560, y: 340, title: "GKN Aerospace", body: modern[0].body },
                { x: 280, y: 220, title: "Andersinska House", body: places[3].body },
              ].map((p) => (
                <g key={p.title} tabIndex={0} role="button" aria-label={p.title}>
                  <circle
                    cx={p.x}
                    cy={p.y}
                    r="10"
                    className="cursor-pointer"
                    fill="#059669"
                    onMouseEnter={() => setMapTooltip({ x: p.x, y: p.y, title: p.title })}
                    onFocus={() => setMapTooltip({ x: p.x, y: p.y, title: p.title })}
                    onClick={() => setActiveCard({ title: p.title, body: p.body })}
                  />
                  <circle cx={p.x} cy={p.y} r="18" fill="none" stroke="#10b981" strokeWidth="2" opacity="0.6" />
                </g>
              ))}
            </svg>

            <AnimatePresence>
              {mapTooltip && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  style={{ left: Math.min(Math.max(mapTooltip.x - 60, 8), (typeof window !== 'undefined' ? window.innerWidth : 800) - 160), top: mapTooltip.y - 10 }}
                  className="absolute px-3 py-1.5 rounded bg-emerald-600 text-white text-sm shadow"
                >
                  {mapTooltip.title}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Resources / Open data */}
        <section id="resources">
          <header className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold">Digital resources & open data</h2>
            <p className="text-neutral-700 max-w-[72ch] mt-2">Use these sources to deepen the factual content.</p>
          </header>
          <ul className="space-y-2">
            <li>
              <a className="text-emerald-700 hover:underline" href="https://prismavg.se/" target="_blank" rel="noreferrer">
                prismavg.se
              </a>
              : Photo and story archive.
            </li>
            <li>
              <a className="text-emerald-700 hover:underline" href="https://www.trollhattan.se/startsida/kommun-och-politik/kommunfakta/trollhattans-historia/" target="_blank" rel="noreferrer">
                Trollhättan history (municipality)
              </a>
            </li>
            <li>
              <a className="text-emerald-700 hover:underline" href="https://innovatumsciencecenter.se/kulturarv/trollhattans-historia/" target="_blank" rel="noreferrer">
                Innovatum heritage: Trollhättan’s history
              </a>
            </li>
            <li>
              <a className="text-emerald-700 hover:underline" href="https://www.innovatum.se/wp-content/uploads/2014/05/kortnohabhistorik.pdf" target="_blank" rel="noreferrer">
                NOHAB history (PDF)
              </a>
            </li>
            <li>
              <a className="text-emerald-700 hover:underline" href="https://www.trollhattan.se/startsida/jobbochforetagande/darfor-trollhattan/" target="_blank" rel="noreferrer">
                Business & tech (municipality)
              </a>
            </li>
          </ul>
        </section>
      </main>

      {/* Modal / Info */}
      <AnimatePresence>
        {activeCard && (
          <motion.div
            className="fixed inset-0 z-50"
            role="dialog"
            aria-modal="true"
            aria-label={activeCard.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/40" onClick={() => setActiveCard(null)} />
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              className="absolute left-1/2 -translate-x-1/2 bottom-6 w-[92vw] max-w-2xl bg-white rounded-2xl shadow-xl border p-5"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold">{activeCard.title}</h3>
                <button onClick={() => setActiveCard(null)} className="p-2 rounded hover:bg-neutral-100 focus-visible:ring-2 focus-visible:ring-emerald-600" aria-label="Close">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <p className="mt-2 text-neutral-700 max-w-[72ch]">{activeCard.body}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="mt-12 border-t bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-neutral-600 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p>© 2025 Tech‑Trollhättan</p>
          <nav aria-label="Footer links" className="flex gap-4">
            <a className="hover:text-neutral-900 focus-visible:ring-2 focus-visible:ring-emerald-600 rounded px-1" href="#">Accessibility</a>
            <a className="hover:text-neutral-900 focus-visible:ring-2 focus-visible:ring-emerald-600 rounded px-1" href="#">Contact</a>
            <a className="hover:text-neutral-900 focus-visible:ring-2 focus-visible:ring-emerald-600 rounded px-1" href="#">About</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
