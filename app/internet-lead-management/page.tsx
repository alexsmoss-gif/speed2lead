import type { Metadata } from "next";
import { ContactBand, Footer, Header, PageHero, StructuredData, WhatsAppButton } from "../components";
import { dealerStats, stats } from "../data";

export const metadata: Metadata = {
  title: "Internet Lead Management Statistics For Dealerships | Speed 2 Lead",
  description:
    "Key internet lead management statistics and response gaps for motor dealerships that want better online enquiry conversion.",
};

export default function InternetLeadManagementPage() {
  return (
    <>
      <StructuredData />
      <Header />
      <main>
        <PageHero
          title="Internet Lead Management Statistics For Dealerships"
          intro="Online buyers move quickly. Dealership lead management needs speed, structure, and consistent follow-up to convert interest into appointments."
        />
        <section className="bg-white py-20">
          <div className="section-shell">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="font-heading text-4xl font-extrabold leading-tight md:text-6xl">Key Statistics For Internet Lead Management</h2>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-speed-charcoal">
                The customer often researches online before stepping into a dealership. The first confident response can decide where they buy.
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
          </div>
        </section>
        <section className="bg-speed-mist py-20">
          <div className="section-shell">
            <h2 className="mx-auto max-w-4xl text-center font-heading text-4xl font-extrabold leading-tight md:text-6xl">Common Dealer Lead Response Gaps</h2>
            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {dealerStats.map((item, index) => (
                <article key={item} className="grid grid-cols-[56px_1fr] gap-4 rounded-md bg-white p-5 shadow-sm">
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
