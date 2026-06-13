import Link from "next/link";
import { contactEmail, navItems, phoneNumber, whatsappUrl } from "./data";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur-xl">
      <div className="section-shell flex items-center justify-between gap-6 py-3">
        <Link href="/" className="header-logo-entrance focus-ring inline-flex items-center" aria-label="Speed 2 Lead home">
          <img className="h-12 w-auto max-w-[58vw] sm:h-16 sm:max-w-none" src="/s2l-logo.png" alt="Speed 2 Lead" />
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-extrabold text-speed-charcoal lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} className="focus-ring transition hover:text-speed-red" href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          className="focus-ring hidden h-11 items-center justify-center rounded-md bg-speed-red px-5 text-sm font-extrabold text-white transition hover:bg-speed-ink lg:inline-flex"
          href={whatsappUrl}
        >
          WhatsApp
        </Link>
        <details className="relative lg:hidden">
          <summary className="mobile-menu-summary focus-ring flex h-12 w-12 cursor-pointer list-none items-center justify-center rounded-md border border-black/10 text-speed-ink transition hover:border-speed-red hover:text-speed-red" aria-label="Open menu">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7 fill-none stroke-current stroke-2">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          </summary>
          <nav className="absolute right-0 top-14 z-50 grid w-[min(320px,calc(100vw-40px))] gap-1 rounded-md border border-black/10 bg-white p-3 text-sm font-bold text-speed-charcoal shadow-crisp">
            {navItems.map((item) => (
              <Link key={item.href} className="rounded-md px-4 py-3 transition hover:bg-speed-mist hover:text-speed-red" href={item.href}>
                {item.label}
              </Link>
            ))}
            <Link className="mt-2 rounded-md bg-speed-red px-4 py-3 text-center font-extrabold text-white" href={whatsappUrl}>
              WhatsApp
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-speed-ink text-white">
      <div className="section-shell grid gap-10 py-14 lg:grid-cols-[1fr_1fr_0.8fr]">
        <div>
          <img className="h-16 w-auto rounded-sm bg-white p-2" src="/s2l-logo.png" alt="Speed 2 Lead" />
          <p className="mt-6 max-w-md leading-7 text-white/72">
            Internet lead response training for motor dealership teams that want faster contact, better appointments, and stronger sales outcomes.
          </p>
        </div>
        <div className="grid gap-3 text-white/78 sm:grid-cols-2">
          {["Fast response habits", "Online lead handling", "Sales team coaching", "Dealership-focused training"].map((item) => (
            <span key={item} className="rounded-md border border-white/12 p-4 font-bold">
              {item}
            </span>
          ))}
        </div>
        <div>
          <h2 className="font-heading text-2xl font-extrabold">Contact</h2>
          <div className="mt-5 flex flex-col gap-3">
            <Link className="font-bold text-speed-gold" href={whatsappUrl}>Chat On WhatsApp</Link>
            <a className="font-bold text-white/78" href={`mailto:${contactEmail}`}>{contactEmail}</a>
            <a className="font-bold text-white/78" href={`tel:${phoneNumber.replace(/\s/g, "")}`}>{phoneNumber}</a>
          </div>
        </div>
      </div>
      <div className="section-shell flex flex-col justify-between gap-3 border-t border-white/12 py-6 text-center text-sm text-white/62 md:flex-row md:text-left">
        <span>© 2026 Speed 2 Lead. All rights reserved.</span>
        <span>Proud Member of the Ginger Group.</span>
      </div>
    </footer>
  );
}

export function ContactBand() {
  return (
    <section id="contact" className="bg-speed-red text-white">
      <div className="section-shell grid gap-8 py-16 text-center md:grid-cols-[1fr_auto] md:items-center md:text-left">
        <div>
          <h2 className="font-heading text-4xl font-extrabold leading-tight md:text-5xl">Questions About Lead Response Training?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/88 md:mx-0">
            We help dealership teams improve response strategies, follow-up habits, and sales conversations.
          </p>
        </div>
        <div className="flex flex-col justify-center gap-3 sm:flex-row md:justify-end">
          <Link className="focus-ring inline-flex h-14 items-center justify-center rounded-md bg-white px-7 font-extrabold text-speed-ink transition hover:-translate-y-1" href={whatsappUrl}>
            Chat On WhatsApp
          </Link>
          <a className="focus-ring inline-flex h-14 items-center justify-center rounded-md border border-white px-7 font-extrabold text-white transition hover:-translate-y-1 hover:bg-white hover:text-speed-red" href={`mailto:${contactEmail}`}>
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}

export function WhatsAppButton() {
  return (
    <Link
      aria-label="Chat with Speed 2 Lead on WhatsApp"
      className="focus-ring fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-crisp transition hover:scale-105"
      href={whatsappUrl}
    >
      <svg aria-hidden="true" viewBox="0 0 32 32" className="h-7 w-7 fill-current">
        <path d="M16.02 3.2A12.7 12.7 0 0 0 5.1 25.4L3.2 30l4.78-1.82A12.7 12.7 0 1 0 16.02 3.2Zm0 2.34a10.36 10.36 0 0 1 8.74 15.95 10.35 10.35 0 0 1-12.2 4.03l-.43-.18-2.84 1.08 1.12-2.72-.22-.45A10.36 10.36 0 0 1 16.02 5.54Zm-4.18 5.52c-.24 0-.63.09-.96.45-.33.36-1.26 1.23-1.26 3 0 1.77 1.29 3.48 1.47 3.72.18.24 2.49 3.99 6.15 5.43 3.04 1.2 3.66.96 4.32.9.66-.06 2.13-.87 2.43-1.71.3-.84.3-1.56.21-1.71-.09-.15-.33-.24-.69-.42-.36-.18-2.13-1.05-2.46-1.17-.33-.12-.57-.18-.81.18-.24.36-.93 1.17-1.14 1.41-.21.24-.42.27-.78.09-.36-.18-1.52-.56-2.89-1.78-1.07-.95-1.79-2.13-2-2.49-.21-.36-.02-.55.16-.73.16-.16.36-.42.54-.63.18-.21.24-.36.36-.6.12-.24.06-.45-.03-.63-.09-.18-.81-1.95-1.11-2.67-.29-.7-.59-.6-.81-.61h-.69Z" />
      </svg>
    </Link>
  );
}
