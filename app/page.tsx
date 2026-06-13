import Link from "next/link";
import { ContactBand, Footer, Header, WhatsAppButton } from "./components";
import { dealerStats, experience, outcomes, pillars, stats, whatsappUrl } from "./data";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden bg-speed-ink text-white">
          <img
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-[64%_center] opacity-58"
            src="/lead-hero-car.jpg"
            alt=""
          />
          <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(14,14,18,.97)_0%,rgba(14,14,18,.82)_46%,rgba(14,14,18,.46)_100%)]" />
          <div className="section-shell relative grid gap-10 py-14 md:py-18 lg:min-h-[720px] lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="max-w-3xl">
              <h1 className="font-heading text-[clamp(2.55rem,5.8vw,5.1rem)] font-extrabold leading-[1.02] tracking-normal">
                78% Buy From The Dealer That Calls First
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/78 md:text-xl">
                Speed 2 Lead trains motor dealership teams to respond to internet leads faster, follow up with purpose, and turn more online enquiries into showroom conversations.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link className="focus-ring inline-flex h-14 items-center justify-center rounded-md bg-speed-red px-8 font-extrabold text-white transition hover:bg-white hover:text-speed-ink" href="#contact">
                  Book Training
                </Link>
                <Link className="focus-ring inline-flex h-14 items-center justify-center rounded-md border border-white/40 px-8 font-extrabold text-white transition hover:border-white hover:bg-white hover:text-speed-ink" href={whatsappUrl}>
                  Chat On WhatsApp
                </Link>
              </div>
            </div>
            <div className="box-hover-glow rounded-md border border-white/12 bg-white/9 p-4 shadow-crisp backdrop-blur">
              <div className="rounded-md bg-white p-5 text-speed-ink sm:p-7">
                <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-speed-red">Internet lead response training</p>
                <h2 className="mt-5 font-heading text-3xl font-extrabold leading-tight md:text-5xl">
                  Faster contact. Better appointments. More useful sales conversations.
                </h2>
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {["First call discipline", "Lead handling scripts", "Appointment setting", "Sold-stock recovery"].map((item) => (
                    <span key={item} className="rounded-md bg-speed-mist px-4 py-3 text-sm font-extrabold text-speed-charcoal">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="overflow-hidden border-y border-black/10 bg-white py-5">
          <div className="flex min-w-max gap-8 text-sm font-extrabold uppercase tracking-[0.18em] text-speed-charcoal">
            {["Internet Leads", "Motor Dealers", "Fast Response", "Appointments", "Follow-Up", "Sales Performance"].map((item) => (
              <span key={item} className="px-3">{item}</span>
            ))}
          </div>
        </section>

        <section id="training" className="bg-speed-mist py-20">
          <div className="section-shell">
            <div className="mx-auto max-w-5xl text-center">
              <h2 className="font-heading text-4xl font-extrabold leading-tight md:text-6xl">Introducing Training On Fast Internet Lead Response Time</h2>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-speed-charcoal">
                We help dealership teams build the habits, language, and urgency needed to engage potential buyers while interest is highest.
              </p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {pillars.map((pillar) => (
                <article key={pillar.title} className="box-hover-lift rounded-md bg-white p-7 shadow-sm">
                  <h3 className="font-heading text-2xl font-extrabold leading-tight">{pillar.title}</h3>
                  <p className="mt-4 leading-7 text-speed-charcoal">{pillar.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="impact" className="bg-white py-20">
          <div className="section-shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <img className="aspect-[4/3] w-full rounded-md object-cover shadow-crisp" src="/training-team.jpg" alt="Sales team training session" />
            </div>
            <div>
              <h2 className="font-heading text-4xl font-extrabold leading-tight md:text-6xl">Driving Success To Elevate Your Internet Lead Response</h2>
              <p className="mt-6 text-lg leading-8 text-speed-charcoal">
                Timely responses can dramatically improve the conversion of enquiries into sales. Speed 2 Lead focuses on practical training your team can use immediately.
              </p>
              <div className="mt-8 grid gap-4">
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
          <div className="section-shell grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <h2 className="font-heading text-4xl font-extrabold leading-tight md:text-6xl">Our Journey And Impact</h2>
              <div className="mt-8 grid gap-4">
                {experience.map((item) => (
                  <p key={item} className="rounded-md border border-white/12 p-5 leading-7 text-white/76">{item}</p>
                ))}
              </div>
            </div>
            <img className="aspect-[4/3] w-full rounded-md object-cover shadow-crisp" src="/dealership-training.jpg" alt="Dealership team discussion" />
          </div>
        </section>

        <section id="stats" className="bg-white py-20">
          <div className="section-shell">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="font-heading text-4xl font-extrabold leading-tight md:text-6xl">Key Statistics For Internet Lead Management</h2>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-speed-charcoal">
                The customer often does the research online before stepping into a dealership. The first confident response can decide where they buy.
              </p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-4">
              {stats.map((stat) => (
                <article key={stat.label} className="box-hover-pop rounded-md border border-black/10 p-6 text-center">
                  <strong className="font-heading text-4xl font-extrabold text-speed-red md:text-5xl">{stat.value}</strong>
                  <span className="mt-3 block leading-6 text-speed-charcoal">{stat.label}</span>
                </article>
              ))}
            </div>
            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {dealerStats.map((item, index) => (
                <article key={item} className="grid grid-cols-[56px_1fr] gap-4 rounded-md bg-speed-mist p-5">
                  <span className="font-heading text-3xl font-extrabold text-speed-red">0{index + 1}</span>
                  <p className="self-center font-bold leading-7 text-speed-charcoal">{item}</p>
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
