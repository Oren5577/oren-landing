export default function OrenLandingPage() {
  return (
    <div className="min-h-screen bg-[#f5efe8] text-[#3b2d26]">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#e9dfd3] via-[#f5efe8] to-[#f5efe8]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:px-10 lg:grid-cols-2 lg:py-24">
          <div className="max-w-xl">
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#8a6f5d]">
              Oren
            </p>
            <h1 className="mb-5 text-5xl leading-tight md:text-6xl lg:text-7xl" style={{ fontFamily: 'serif' }}>
              Hair care,
              <br />
              with intention.
            </h1>
            <p className="mb-8 max-w-md text-base leading-7 text-[#6f5a4d] md:text-lg">
              A nourishing ritual designed to restore softness, shine, and calm. Thoughtfully made for hair that deserves more than quick fixes.
            </p>

            <div className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-12 flex-1 rounded-full border border-[#d7c7b8] bg-white/80 px-5 text-sm outline-none placeholder:text-[#9b8576]"
              />
              <button className="h-12 rounded-full bg-[#3b2d26] px-7 text-sm text-white transition hover:opacity-90">
                Join waitlist
              </button>
            </div>

            <p className="mt-4 text-sm text-[#8a6f5d]">
              Launching soon in the UAE.
            </p>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute -right-10 top-10 h-72 w-72 rounded-full bg-[#dcc8b6]/40 blur-3xl" />
            <div className="absolute left-0 top-0 h-56 w-56 rounded-full bg-[#efe4da]/70 blur-3xl" />
            <div className="relative w-full max-w-[520px] overflow-hidden rounded-[2rem] bg-[#ede2d7] shadow-2xl">
              <img
                src="/oren-hero.jpg"
                alt="Oren hair oil bottle"
                className="h-[620px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brand strip */}
      <section className="border-y border-[#e3d7cc] bg-[#f8f3ee]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-6 text-center md:flex-row md:items-center md:justify-between md:px-10 md:text-left">
          <p className="text-sm uppercase tracking-[0.3em] text-[#8a6f5d]">Ritual • Repair • Shine</p>
          <p className="max-w-2xl text-sm leading-7 text-[#6f5a4d]">
            A minimalist, sensorial approach to hair oiling inspired by softness, restraint, and everyday luxury.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-10 lg:grid-cols-2 lg:py-24">
        <div className="overflow-hidden rounded-[2rem] bg-[#e8dbcf] shadow-lg">
          <img
            src="/oren-detail.jpg"
            alt="Oren product mood"
            className="h-full min-h-[420px] w-full object-cover"
          />
        </div>
        <div className="flex items-center">
          <div className="max-w-xl">
            <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#8a6f5d]">The ritual</p>
            <h2 className="mb-5 text-3xl leading-tight md:text-4xl" style={{ fontFamily: 'serif' }}>
              Elevated care for dry, dull, and stressed hair.
            </h2>
            <p className="mb-5 text-base leading-8 text-[#6f5a4d]">
              Oren was imagined as a quiet luxury ritual: warm, clean, and deeply restorative. The formula is positioned as a finishing and treatment oil that supports softness, gloss, and a healthier-looking feel.
            </p>
            <p className="text-base leading-8 text-[#6f5a4d]">
              Designed with a refined aesthetic inspired by apothecary beauty, modern minimalism, and a soft Middle Eastern sensibility.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-7xl px-6 pb-16 md:px-10 lg:pb-24">
        <div className="mb-8 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#8a6f5d]">Why Oren</p>
          <h3 className="text-3xl md:text-4xl" style={{ fontFamily: 'serif' }}>Made to feel beautiful, and work beautifully.</h3>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              title: 'Nourishing finish',
              text: 'Helps smooth the look of frizz and leaves hair looking soft and polished.',
            },
            {
              title: 'Daily ritual',
              text: 'Light enough to become part of a consistent, calming hair care routine.',
            },
            {
              title: 'Luxury feel',
              text: 'Created to feel gift-worthy, display-worthy, and effortlessly premium.',
            },
          ].map((item) => (
            <div key={item.title} className="rounded-[2rem] border border-[#e3d7cc] bg-[#fbf8f4] p-8 shadow-sm">
              <h4 className="mb-3 text-xl" style={{ fontFamily: 'serif' }}>{item.title}</h4>
              <p className="text-sm leading-7 text-[#6f5a4d]">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#e3d7cc] bg-[#f1e7dd]">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center md:px-10 lg:py-20">
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#8a6f5d]">Coming soon</p>
          <h3 className="mb-5 text-3xl md:text-5xl" style={{ fontFamily: 'serif' }}>
            Be first to experience Oren.
          </h3>
          <p className="mx-auto mb-8 max-w-2xl text-base leading-8 text-[#6f5a4d]">
            Join the waitlist for launch updates, first access, and a first look at the full ritual.
          </p>
          <div className="mx-auto flex w-full max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Your email"
              className="h-12 flex-1 rounded-full border border-[#d7c7b8] bg-white/90 px-5 text-sm outline-none placeholder:text-[#9b8576]"
            />
            <button className="h-12 rounded-full bg-[#3b2d26] px-7 text-sm text-white transition hover:opacity-90">
              Notify me
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
