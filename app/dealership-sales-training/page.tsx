import type { Metadata } from "next";
import { ContactBand, Footer, Header, PageHero, StructuredData, WhatsAppButton } from "../components";
import { outcomes } from "../data";

export const metadata: Metadata = {
  title: "Dealership Sales Training For Online Leads | Speed 2 Lead",
  description:
    "Sales training for motor dealership teams focused on online lead handling, follow-up quality, appointment setting, and better customer contact.",
};

export default function DealershipSalesTrainingPage() {
  return (
    <>
      <StructuredData />
      <Header />
      <main>
        <PageHero
          title="Dealership Sales Training For Online Leads"
          intro="Help your sales team respond with urgency, confidence, and a clear plan when online prospects enquire about vehicles."
          image="/dealership-training.jpg"
        />
        <section className="bg-white py-20">
          <div className="section-shell">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="font-heading text-4xl font-extrabold leading-tight md:text-6xl">Built For Real Dealership Sales Teams</h2>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-speed-charcoal">
                Training connects online marketing reality with practical showroom sales behaviour.
              </p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {outcomes.map((item) => (
                <article key={item.title} className="box-hover-lift rounded-md border border-black/10 p-7">
                  <h3 className="font-heading text-2xl font-extrabold leading-tight">{item.title}</h3>
                  <p className="mt-4 leading-7 text-speed-charcoal">{item.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-speed-mist py-20">
          <div className="section-shell grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <h2 className="font-heading text-4xl font-extrabold leading-tight md:text-6xl">Coach The Moments That Lose Deals</h2>
              <p className="mt-6 text-lg leading-8 text-speed-charcoal">
                Many lead losses happen before a customer ever visits the dealership. Slow response, weak first contact, no appointment request, or no alternative vehicle suggestion can all weaken conversion.
              </p>
              <p className="mt-4 text-lg leading-8 text-speed-charcoal">
                Speed 2 Lead gives managers and sales teams a focused way to improve these moments without adding unnecessary complexity.
              </p>
            </div>
            <img className="aspect-[4/3] w-full rounded-md object-cover shadow-crisp" src="/dealership-training.jpg" alt="Dealership team discussing online leads" />
          </div>
        </section>
        <ContactBand />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
