import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Photo from "@/components/Photo";
import ScrollEffects from "@/components/ScrollEffects";

const help = [
  { t: "Anxiety & panic", img: "help-anxiety", alt: "A person pausing with a warm mug beside a linen curtain",
    d: "You look fine on the outside, but your mind won’t slow down. I help adults ease constant worry, body tension and trouble sleeping, so you can stop bracing for what might go wrong." },
  { t: "Trauma & past experiences", img: "help-trauma", alt: "A woman looking out a sunlit window beside an armchair with an olive-green throw",
    d: "Whether it was a single event or long-standing patterns from childhood, relationships or chronic stress, we move at a careful pace that puts safety and stability first." },
  { t: "Professionals, creatives & entrepreneurs", img: "help-burnout", alt: "A woman reading at a wooden desk beside a sheer curtain",
    d: "After years of pushing through, many high-achieving people feel disconnected from themselves. Therapy gives you room to slow down and build a more sustainable way of living and working." },
];

const focus = ["Anxiety", "Panic", "Trauma", "Burnout", "Perfectionism", "Overthinking", "Stress", "Sleep difficulty", "Body tension", "Emotional regulation", "Self-trust", "Resilience"];

const services = [
  { t: "Anxiety & panic therapy", d: "Using CBT, mindfulness-based practices and body-oriented techniques, we work on both the thoughts and the physical side of anxiety, so calm carries into your daily life." },
  { t: "Trauma therapy & EMDR", d: "EMDR and other evidence-based methods, paced with care. We focus on safety, stabilization and helping you feel regulated in daily life, not only during sessions." },
  { t: "Burnout & perfectionism counseling", d: "For professionals, creatives and entrepreneurs under high internal pressure. Together we build insight, boundaries and a healthier relationship with work and with yourself." },
];

const faqs = [
  { q: "Do you offer therapy in person in Santa Monica?", a: "Yes. I see clients in person at my quiet, private Santa Monica office at 123th Street 45 W, and I also offer secure telehealth." },
  { q: "Can I meet online if I’m not in Santa Monica?", a: "Telehealth is available for clients located anywhere in California." },
  { q: "What is EMDR and is it right for me?", a: "EMDR is an evidence-based method I use in trauma work. It is one of several approaches I draw on, alongside CBT, mindfulness-based practices and body-oriented techniques. We choose what fits you together." },
  { q: "Who do you work with?", a: "I work with adults dealing with anxiety, panic, trauma and burnout, including high-achieving professionals who feel exhausted or stuck in overthinking despite appearing “functional.”" },
  { q: "What can I expect from sessions?", a: "A warm, collaborative and grounded approach. Sessions have enough structure to feel supportive and enough space for reflection and depth. You’re involved in the process throughout." },
  { q: "Do you work with complex or long-standing trauma?", a: "Yes. I work with single-incident trauma and with longer-standing patterns, always paced carefully with an emphasis on safety and stabilization." },
];

export default function Home() {
  return (
    <>
      <ScrollEffects />
      <Header />
      <main id="top">
        {/* Top of the page: headline, booking button, two photos */}
        <section className="section pb-8 text-center md:pb-12">
          <div className="hero-in mx-auto max-w-3xl">
            <p className="eyebrow">In-person in Santa Monica &amp; telehealth across CA</p>
            <h1 className="text-4xl font-medium leading-[1.1] md:text-6xl">
              Anxiety &amp; Trauma Therapy in Santa Monica, CA to help you feel calm, steady and <em>yourself</em> again.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed">
              EMDR, CBT and mindfulness-based therapy for adults facing anxiety, trauma and burnout, with Dr. Maya Reynolds, PsyD.
            </p>
            <a href="#contact" className="btn mt-8">Book a consultation</a>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-2">
            <Photo name="hero-1" alt="A woman tending plants by a sunlit window with linen curtains" className="drift aspect-[4/3]" />
            <Photo name="hero-2" alt="A quiet desk by a garden window with an open journal and a warm cup" className="drift aspect-[4/3] [animation-delay:-3.5s]" />
          </div>
        </section>

        {/* Short intro to how Dr. Reynolds works */}
        <section className="section grid items-center gap-12 md:grid-cols-2">
          <div data-reveal>
            <h2 className="text-3xl leading-tight md:text-4xl">You may look “functional” on the outside while feeling exhausted inside.</h2>
            <p className="mt-4 font-serif text-2xl italic text-tan">Therapy can help you finally exhale.</p>
            <p className="mt-6 leading-relaxed">
              Many of the adults I work with are thoughtful, self-aware and high-achieving, yet they feel stuck in overthinking, on edge and worn down. As a licensed clinical psychologist in Santa Monica, I offer a warm, collaborative space to understand what’s happening in both your mind and your body.
            </p>
          </div>
          <Photo name="intro" alt="A woman painting at an easel among olive trees in soft evening light" className="aspect-[4/5]" />
          <p className="leading-relaxed md:col-span-2 md:mx-auto md:max-w-3xl md:text-center">
            My goal isn’t only symptom relief. It’s helping you develop insight, resilience and a stronger relationship with yourself over time.
          </p>
        </section>

        {/* The three kinds of clients she helps */}
        <section className="section">
          <h2 data-reveal className="mb-12 text-center text-3xl md:text-5xl">Who I <em>help</em></h2>
          <div className="grid gap-10 md:grid-cols-3">
            {help.map((h, i) => (
              <article key={h.t} data-reveal style={{ transitionDelay: `${i * 120}ms` }}>
                <Photo name={h.img} alt={h.alt} className="mb-6 aspect-[4/5]" />
                <h3 className="text-2xl">{h.t}</h3>
                <p className="mt-3 leading-relaxed">{h.d}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Green band listing areas of expertise */}
        <section className="bg-sage text-cream">
          <div className="section text-center">
            <h2 className="mx-auto max-w-3xl text-3xl !text-cream md:text-4xl">Slow down, reconnect, and carry less of it alone.</h2>
            <h3 className="mb-8 mt-10 font-sans text-xs font-semibold uppercase tracking-[0.2em] !text-gold">Areas of expertise</h3>
            <ul className="mx-auto flex max-w-4xl flex-wrap justify-center gap-x-6 gap-y-2 font-serif text-2xl italic md:text-4xl">
              {focus.map((f, i) => <li key={f} data-reveal style={{ transitionDelay: `${i * 70}ms` }} className="text-cream/90">{f}</li>)}
            </ul>
          </div>
        </section>

        {/* About Dr. Reynolds */}
        <section id="about" className="section grid items-center gap-12 md:grid-cols-2">
          <Photo name="maya" alt="Dr. Maya Reynolds, PsyD, licensed clinical psychologist in Santa Monica" pos="object-top" className="aspect-[4/5]" />
          <div>
            <p className="eyebrow">How I work</p>
            <h2 data-reveal className="text-3xl md:text-4xl">Meet Dr. Maya Reynolds, PsyD</h2>
            <p className="mt-5 font-serif text-2xl italic text-tan">Warm, collaborative and grounded.</p>
            <p className="mt-5 leading-relaxed">
              I’m a licensed clinical psychologist in Santa Monica, California. My work focuses on anxiety, panic, trauma and burnout. I integrate CBT, EMDR, mindfulness-based practices and body-oriented techniques to help you understand the emotional and physiological sides of what you’re experiencing.
            </p>
            <p className="mt-4 leading-relaxed">
              I believe therapy works best when you feel respected, understood and actively involved. If you want a therapist who combines practical tools with depth-oriented work, and who understands life in a fast-paced environment, I may be a good fit.
            </p>
            <a href="#contact" className="btn mt-8">Book a consultation</a>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="bg-tan/10">
          <div className="section">
            <h2 data-reveal className="mb-4 max-w-2xl text-3xl md:text-5xl">Therapy for anxiety, trauma &amp; burnout in Santa Monica</h2>
            <p className="mb-12 max-w-xl">Evidence-based care, paced to you.</p>
            <div className="grid gap-x-12 gap-y-10 md:grid-cols-3">
              {services.map((s, i) => (
                <article key={s.t} data-reveal style={{ transitionDelay: `${i * 120}ms` }} className="border-t-2 border-gold pt-6">
                  <h3 className="text-2xl">{s.t}</h3>
                  <p className="mt-3 leading-relaxed">{s.d}</p>
                  <a href="#contact" className="mt-4 inline-block text-sm font-semibold text-sage underline underline-offset-4 hover:text-oxblood">Learn more</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Office photos and address */}
        <section id="office" className="section">
          <div data-reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Our Office</p>
            <h2 className="text-3xl md:text-5xl">A calm, private space in Santa Monica</h2>
            <p className="mt-6 leading-relaxed">
              My office is quiet and private, filled with natural light and kept comfortable and uncluttered. Clients often tell me the space itself helps them feel more at ease the moment they arrive.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            <Photo name="office-1" alt="Therapy room with tall windows, natural light and brick walls" className="aspect-[4/3]" />
            <Photo name="office-2" alt="Comfortable sofa, armchair and bookshelf in the Santa Monica office" className="aspect-[4/3]" />
          </div>
          <p className="mt-8 text-center text-sm">
            123th Street 45 W, Santa Monica, CA 90401 · In-person and secure telehealth for California clients
          </p>
        </section>

        {/* Questions and answers (click to open) */}
        <section id="faqs" className="section max-w-3xl">
          <h2 data-reveal className="mb-10 text-center text-3xl md:text-5xl">Frequently asked questions</h2>
          <div className="divide-y divide-tan/40 border-y border-tan/40">
            {faqs.map((f, i) => (
              <details key={f.q} data-reveal style={{ transitionDelay: `${i * 60}ms` }} className="py-5">
                <summary className="flex items-center justify-between gap-6 font-serif text-xl text-sage md:text-2xl">
                  {f.q}<span className="plus text-3xl text-tan" aria-hidden="true">+</span>
                </summary>
                <p className="mt-3 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Final booking call-to-action */}
        <section className="bg-sage text-cream">
          <div className="section grid items-center gap-10 md:grid-cols-2">
            <Photo name="cta" alt="Sage and olive leaves in soft garden light" className="aspect-[4/3]" />
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">Schedule an appointment</p>
              <h2 data-reveal className="text-3xl !text-cream md:text-4xl">Find a Santa Monica therapist who is the right fit for you.</h2>
              <p className="mt-5 leading-relaxed text-cream/85">
                Starting therapy is a big step. Visit my Santa Monica office or meet securely online from anywhere in California, whichever feels easier.
              </p>
              <a href="#contact" className="btn mt-8">Book now</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
