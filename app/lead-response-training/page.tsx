import type { Metadata } from "next";
import { ContactBand, Footer, Header, PageHero, StructuredData, WhatsAppButton } from "../components";
import { pillars } from "../data";

export const metadata: Metadata = {
  title: "Internet Lead Response Training For Car Dealers | Speed 2 Lead",
  description:
    "Fast internet lead response training for motor dealerships that want faster first contact, stronger follow-up, and better appointment setting.",
};

export default function LeadResponseTrainingPage() {
  return (
    <>
      <StructuredData />
      <Header />
      <main>
        <PageHero
          title="Internet Lead Response Training For Car Dealers"
          intro="Train your sales team to act quickly, speak clearly, and turn online enquiries into useful conversations before the prospect moves to another dealer."
          image="/training-team.jpg"
          imagePosition="44% center"
        />
        <section className="bg-speed-mist py-20">
          <div className="section-shell">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="font-heading text-4xl font-extrabold leading-tight md:text-6xl">What The Training Improves</h2>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-speed-charcoal">
                The focus is practical: contact speed, first-call confidence, appointment setting, and follow-up discipline.
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
        <section className="bg-white py-20">
          <div className="section-shell grid gap-12 lg:grid-cols-2 lg:items-center">
            <img className="aspect-[4/3] w-full rounded-md object-cover shadow-crisp" src="/training-team.jpg" alt="Dealership lead response training" />
            <div>
              <h2 className="font-heading text-4xl font-extrabold leading-tight md:text-6xl">From Enquiry To Appointment</h2>
              <p className="mt-6 text-lg leading-8 text-speed-charcoal">
                Internet leads are not just form submissions. They are active buyers comparing vehicles, dealers, prices, and trust signals. A fast, structured response gives the sales team a better chance of setting the next step.
              </p>
              <p className="mt-4 text-lg leading-8 text-speed-charcoal">
                Speed 2 Lead helps teams improve the first response, ask better questions, offer relevant alternatives, and avoid missed opportunities when a vehicle is already sold.
              </p>
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
