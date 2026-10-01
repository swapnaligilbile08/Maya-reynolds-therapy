const links = [
  ["About", "#about"], ["Services", "#services"], ["Our Office", "#office"], ["FAQs", "#faqs"], ["Contact", "#contact"],
];
export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-tan/30 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-serif text-xl font-semibold text-sage md:text-2xl">Reynolds Therapy</a>
        <nav aria-label="Main" className="hidden gap-8 text-sm font-medium md:flex">
          {links.map(([l, h]) => (
            <a key={h} href={h} className="navlink text-leather transition-colors hover:text-oxblood">{l}</a>
          ))}
        </nav>
        <details className="relative md:hidden">
          <summary className="border border-sage px-4 py-2 text-sm font-medium text-sage" aria-label="Open menu">Menu</summary>
          <nav aria-label="Mobile" className="absolute right-0 mt-2 flex w-52 flex-col gap-1 border border-tan/30 bg-cream p-4 shadow-lg">
            {links.map(([l, h]) => (
              <a key={h} href={h} className="py-2 text-leather hover:text-oxblood">{l}</a>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
