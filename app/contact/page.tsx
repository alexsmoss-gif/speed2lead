import type { Metadata } from "next";
import { Footer, Header, PageHero, StructuredData, WhatsAppButton } from "../components";
import { contactEmail, location, phoneNumber, whatsappUrl } from "../data";

export const metadata: Metadata = {
  title: "Contact Speed 2 Lead | Lead Response Training",
  description:
    "Contact Speed 2 Lead in Edenvale, Gauteng for motor dealership internet lead response training and sales team coaching.",
};

export default function ContactPage() {
  return (
    <>
      <StructuredData />
      <Header />
      <main>
        <PageHero
          title="Contact Speed 2 Lead"
          intro="Talk to us about improving your dealership's online lead response speed, follow-up process, and appointment setting."
          image="/training-team.jpg"
          imagePosition="76% center"
        />
        <section className="bg-white py-20">
          <div className="section-shell grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <div>
              <h2 className="font-heading text-4xl font-extrabold leading-tight md:text-6xl">Book A Training Conversation</h2>
              <p className="mt-6 text-lg leading-8 text-speed-charcoal">
                Share what your team needs help with: first response time, enquiry handling, appointment setting, follow-up, or online lead process improvement.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a className="focus-ring inline-flex h-14 items-center justify-center rounded-md bg-speed-red px-7 font-extrabold text-white transition hover:bg-speed-ink" href={`mailto:${contactEmail}`}>
                  Email Us
                </a>
                <a className="focus-ring inline-flex h-14 items-center justify-center rounded-md border border-black/15 px-7 font-extrabold text-speed-ink transition hover:border-speed-red hover:text-speed-red" href={whatsappUrl}>
                  WhatsApp
                </a>
              </div>
            </div>
            <aside className="rounded-md bg-speed-mist p-7">
              <h3 className="font-heading text-2xl font-extrabold">Contact Details</h3>
              <div className="mt-6 grid gap-4 text-speed-charcoal">
                <a className="font-bold text-speed-red" href={`mailto:${contactEmail}`}>{contactEmail}</a>
                <a className="font-bold text-speed-red" href={`tel:${phoneNumber.replace(/\s/g, "")}`}>{phoneNumber}</a>
                <p className="font-bold">{location}</p>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
