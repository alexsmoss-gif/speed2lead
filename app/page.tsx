import Link from "next/link";
import { ContactBand, Footer, Header, StructuredData, WhatsAppButton } from "./components";
import { outcomes, pillars, stats, whatsappUrl } from "./data";

export default function Home() {
  return (
    <>
      <StructuredData />
      <Header />
      <main>
        <section className="relative overflow-hidden bg-speed-ink text-white">
          <video
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-[62%_center] opacity-68 [filter:saturate(1.08)_contrast(1.06)]"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/lead-hero-car.jpg"
          >
            <source src="/dealership-hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_20%,rgba(215,19,26,.32),transparent_28%),linear-gradient(100deg,rgba(14,14,18,.98)_0%,rgba(14,14,18,.86)_46%,rgba(14,14,18,.42)_100%)]" />
          <div className="section-shell relative grid gap-10 py-14 md:py-18 lg:min-h-[720px] lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="max-w-3xl">
              <h1 className="font-heading text-[clamp(2.55rem,5.8vw,5.1rem)] font-extrabold leading-[1.02] tracking-normal">
                Internet Lead Response Training For Motor Dealers
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/78 md:text-xl">
                Speed 2 Lead trains dealership teams to respond faster, set better appointments, and turn more online enquiries into showroom conversations.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link className="focus-ring inline-flex h-14 items-center justify-center rounded-md bg-speed-red px-8 font-extrabold text-white transition hover:bg-white hover:text-speed-ink" href="/contact">
                  Book Training
                </Link>
                <Link className="focus-ring inline-flex h-14 items-center justify-center rounded-md border border-white/40 px-8 font-extrabold text-white transition hover:border-white hover:bg-white hover:text-speed-ink" href={whatsappUrl}>
                  Chat On WhatsApp
                </Link>
              </div>
            </div>
            <div className="box-hover-glow rounded-md border border-white/12 bg-white/9 p-4 shadow-crisp backdrop-blur">
              <div className="rounded-md bg-white p-5 text-speed-ink sm:p-7">
                <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-speed-red">78% buy from the dealer that calls first</p>
                <h2 className="mt-5 font-heading text-3xl font-extrabold leading-tight md:text-5xl">
                  Fast contact is not a nice-to-have. It is a sales advantage.
                </h2>
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {["First call discipline", "Lead handling scripts", "Appointment setting", "Sold-stock recovery"].map((item) => (
                    <span key={item} className="rounded-md bg-speed-mist px-4 py-3 text-sm font-extrabold text-speed-charcoal">{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-speed-mist py-20">
          <div className="section-shell">
            <div className="mx-auto max-w-5xl text-center">
              <h2 className="font-heading text-4xl font-extrabold leading-tight md:text-6xl">Training Built Around The Way Car Buyers Enquire Today</h2>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-speed-charcoal">
                The homepage now gives a clear overview, while each core topic has its own page for search engines, AI answers, and dealership decision makers.
              </p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {[
                { title: "Lead Response Training", href: "/lead-response-training", body: "Build the habits and scripts needed to contact online prospects while buying intent is highest." },
                { title: "Dealership Sales Training", href: "/dealership-sales-training", body: "Coach sales teams around appointment setting, follow-up quality, and practical lead handling." },
                { title: "Internet Lead Management", href: "/internet-lead-management", body: "Understand the response statistics and process gaps that affect dealership conversion." },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="box-hover-lift rounded-md bg-white p-7 shadow-sm">
                  <h3 className="font-heading text-2xl font-extrabold leading-tight">{item.title}</h3>
                  <p className="mt-4 leading-7 text-speed-charcoal">{item.body}</p>
                  <span className="mt-6 inline-flex font-extrabold text-speed-red">Learn More</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="section-shell">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="font-heading text-4xl font-extrabold leading-tight md:text-6xl">Driving Better Internet Lead Outcomes</h2>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-speed-charcoal">
                Speed 2 Lead focuses on practical improvements that sales teams can use immediately after training.
              </p>
            </div>
            <div className="mt-12 grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <img className="aspect-[4/3] w-full rounded-md object-cover shadow-crisp" src="/homepage-lead-outcomes.png" alt="Dealership consultant responding to an online vehicle lead" />
              <div className="grid gap-4">
                {outcomes.map((item) => (
                  <article key={item.title} className="box-hover-slide rounded-md border border-black/10 p-5">
                    <h3 className="font-heading text-2xl font-extrabold">{item.title}</h3>
                    <p className="mt-2 leading-7 text-speed-charcoal">{item.summary}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-speed-ink py-20 text-white">
          <div className="section-shell">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="font-heading text-4xl font-extrabold leading-tight md:text-6xl">Key Lead Response Signals</h2>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/72">
                These proof points now link into deeper pages that can rank for more specific search intent.
              </p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-4">
              {stats.map((stat) => (
                <article key={stat.label} className="box-hover-pop rounded-md border border-white/12 p-6 text-center">
                  <strong className="font-heading text-4xl font-extrabold text-speed-gold md:text-5xl">{stat.value}</strong>
                  <span className="mt-3 block leading-6 text-white/72">{stat.label}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ContactBand />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
