import type { Metadata } from "next";
import { ContactBand, Footer, Header, PageHero, StructuredData, WhatsAppButton } from "../components";
import { experience } from "../data";

export const metadata: Metadata = {
  title: "About Speed 2 Lead | Automotive Lead Response Training",
  description:
    "Learn about Speed 2 Lead's automotive dealership and online marketing experience behind its internet lead response training.",
};

export default function AboutPage() {
  return (
    <>
      <StructuredData />
      <Header />
      <main>
        <PageHero
          title="About Speed 2 Lead"
          intro="Automotive sales experience and online marketing knowledge combined into practical lead response training for dealership teams."
          image="/dealership-training.jpg"
        />
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
            <img className="aspect-[4/3] w-full rounded-md object-cover shadow-crisp" src="/dealership-training.jpg" alt="Dealership lead response discussion" />
          </div>
        </section>
        <ContactBand />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
