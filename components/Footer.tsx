export default function Footer() {
  return (
    <footer id="contact" className="bg-bark text-cream/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl text-cream">Reynolds Therapy</p>
          <p className="mt-1 text-sm text-gold">Dr. Maya Reynolds, PsyD · Licensed Clinical Psychologist</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed">In-person therapy in Santa Monica and secure telehealth for adults across California.</p>
        </div>
        <div>
          <h3 className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] !text-gold">Navigate</h3>
          <ul className="space-y-2 text-sm">
            {[["Home", "#top"], ["About", "#about"], ["Our Office", "#office"], ["FAQs", "#faqs"]].map(([l, h]) => (
              <li key={h}><a href={h} className="hover:text-gold">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] !text-gold">Office</h3>
          <address className="text-sm not-italic leading-relaxed">123th Street 45 W<br />Santa Monica, CA 90401</address>
          <p className="mt-3 text-sm">Telehealth available to clients located in California.</p>
        </div>
      </div>
      <p className="border-t border-cream/10 py-5 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} Dr. Maya Reynolds, PsyD · Licensed Clinical Psychologist
      </p>
    </footer>
  );
}
