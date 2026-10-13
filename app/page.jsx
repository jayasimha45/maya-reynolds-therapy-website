const images = {
  portrait: 'https://dr-maya-reynolds-site-ten.vercel.app/images/Dr.%20Maya%20Reynolds.png',
  office: 'https://dr-maya-reynolds-site-ten.vercel.app/images/office1.jpeg',
  officeDetail: 'https://dr-maya-reynolds-site-ten.vercel.app/images/office2.jpeg',
  calm: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1400&q=85',
  reflection: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1000&q=85',
  outdoors: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=85',
};

const helpCards = [
  {
    image: images.reflection,
    alt: 'A quiet moment of reflection in soft natural light',
    title: 'Anxiety & panic',
    copy: 'For persistent worry, panic, physical tension, and overthinking that make it hard to feel at ease.',
  },
  {
    image: images.outdoors,
    alt: 'A calm open landscape at the end of the day',
    title: 'Trauma & past experiences',
    copy: 'Careful support for the effects of difficult experiences, with attention to safety and steadier day-to-day regulation.',
  },
  {
    image: images.calm,
    alt: 'Gentle light across a quiet landscape',
    title: 'Burnout & perfectionism',
    copy: 'A place to pause, reconnect with yourself, and develop more sustainable ways of living and working.',
  },
];

const services = [
  {
    number: '01',
    title: 'Anxiety therapy in Santa Monica, CA',
    copy: 'Work with chronic worry, panic, and overthinking. CBT and mindfulness-based tools can help you understand what is driving anxiety and build practical ways to feel more grounded.',
  },
  {
    number: '02',
    title: 'Trauma & EMDR therapy',
    copy: 'Process past experiences at a pace that feels safe. EMDR and body-oriented techniques support emotional regulation, stabilization, and a renewed sense of safety.',
  },
  {
    number: '03',
    title: 'Burnout & perfectionism counseling',
    copy: 'Ease the pressure of always pushing through. Therapy offers room to slow down, reconnect with what matters, and develop healthier, more sustainable patterns.',
  },
];

const focusAreas = ['Anxiety', 'Panic', 'Trauma', 'Burnout', 'Perfectionism', 'Chronic stress', 'Overthinking'];
const methods = ['CBT', 'EMDR', 'Mindfulness', 'Body-oriented techniques'];
const consultationLink = 'mailto:contact@mayareynolds.com?subject=Consultation%20inquiry%20for%20Dr.%20Maya%20Reynolds';

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="wrap nav">
          <a href="#top" className="brand" aria-label="Dr. Maya Reynolds, home">
            <span className="brand-mark" aria-hidden="true">M</span>
            <span>Dr. Maya Reynolds<small>Clinical Psychology · PsyD</small></span>
          </a>
          <nav className="navlinks" aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#help">Who I help</a>
            <a href="#services">Specialties</a>
            <a href="#approach">Approach</a>
            <a href="#faq">FAQs</a>
          </nav>
          <a className="nav-contact" href="#contact">Let’s talk <span aria-hidden="true">↗</span></a>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-line" />In-person & online therapy · Santa Monica, CA</div>
              <h1>Anxiety & trauma therapy for adults in Santa Monica.</h1>
              <p className="lead">You may look like you’re handling everything, yet inside feel anxious, overwhelmed, or emotionally exhausted. Therapy can offer a warm, steady place to work through what you’re carrying.</p>
              <a className="button button-dark" href={consultationLink}>Schedule a consultation <span aria-hidden="true">↗</span></a>
              <p className="hero-note">A collaborative space for adults across California.</p>
            </div>
            <div className="hero-art relative" aria-label="A calm place to begin therapy">
              <img className="hero-main-image" src={images.office} alt="A comfortable, softly lit therapy office in Santa Monica" />
              <img className="hero-inset-image" src={images.calm} alt="Soft light over a peaceful landscape" />
              <div className="hero-caption"><span className="caption-mark" aria-hidden="true">✳</span><span>Space to pause.<br />Room to grow.</span></div>
            </div>
          </div>
          <div className="hero-bottom-band"><div className="wrap band-inner"><span>Personalized care</span><i /> <span>Evidence-informed methods</span><i /> <span>In-person & telehealth</span></div></div>
        </section>

        <section className="intro section" id="about">
          <div className="wrap intro-grid">
            <div>
              <div className="eyebrow">A place to begin</div>
              <h2>You’re holding onto hope that life can feel lighter.</h2>
            </div>
            <div className="intro-copy">
              <p className="standfirst">When worry, pressure, or old experiences take up too much space, you don’t have to figure everything out alone.</p>
              <p>Dr. Maya Reynolds works with thoughtful, high-achieving adults who feel functional on the outside but overwhelmed inside. Therapy can help you understand the patterns beneath the stress, feel more grounded, and move toward a life that feels more like your own.</p>
              <a className="text-link" href="#approach">Explore how therapy can help <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>

        <section className="section help-section" id="help">
          <div className="wrap">
            <div className="section-heading">
              <div className="eyebrow">Who I help</div>
              <h2>Support for what’s weighing on you.</h2>
              <p>Therapy for adults navigating anxiety, trauma, and the strain of carrying too much for too long.</p>
            </div>
            <div className="help-grid">
              {helpCards.map((card) => (
                <article className="help-card" key={card.title}>
                  <div className="help-image"><img src={card.image} alt={card.alt} /></div>
                  <div className="help-card-copy"><span className="card-overline">Individual therapy for adults</span><h3>{card.title}</h3><p>{card.copy}</p><a href="#services" aria-label={`Explore ${card.title}`}>Explore support <span aria-hidden="true">↗</span></a></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="focus-band" aria-labelledby="focus-title">
          <div className="wrap focus-inner">
            <div className="focus-heading"><div className="eyebrow eyebrow-light">Areas of focus</div><h2 id="focus-title">You deserve a place where your story is heard.</h2></div>
            <div className="focus-list">{focusAreas.map((item) => <span key={item}>{item}</span>)}</div>
          </div>
        </section>

        <section className="section approach-section" id="approach">
          <div className="wrap approach-grid">
            <div className="approach-image"><img src={images.calm} alt="A quiet California landscape in the soft light of morning" /><span className="image-note">Move at a pace that feels right for you.</span></div>
            <div className="approach-copy">
              <div className="eyebrow">How we work</div>
              <h2>Warm, collaborative, and grounded.</h2>
              <p className="standfirst">There’s no one-size-fits-all path through therapy.</p>
              <p>Dr. Reynolds takes time to understand your story and shape the work around your needs. Sessions offer enough structure to feel supportive, with room for reflection and depth. Trauma work is paced carefully, with attention to safety and stabilization.</p>
              <div className="method-label">Approaches may include</div>
              <div className="method-list">{methods.map((method) => <span key={method}>{method}</span>)}</div>
              <a className="text-link" href="#about-dr-maya">Meet Dr. Reynolds <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>

        <section className="story-section" id="about-dr-maya">
          <div className="wrap story-grid">
            <div className="story-image"><img src={images.portrait} alt="Dr. Maya Reynolds, PsyD" /><span className="portrait-stamp">Maya Reynolds<br />PsyD</span></div>
            <div className="story-copy">
              <div className="eyebrow">A thoughtful, steady approach</div>
              <h2>Honoring where you’ve been—and helping shape where you’re headed.</h2>
              <p>Dr. Maya Reynolds is a licensed clinical psychologist in Santa Monica, California. She supports adults working through anxiety, panic, trauma, burnout, and perfectionism.</p>
              <p>Her approach brings together evidence-informed methods and attention to both emotional and physical experiences. The aim is not only to ease symptoms, but to build insight, resilience, and a stronger connection with yourself.</p>
              <a className="button button-outline" href={consultationLink}>Begin with a conversation <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="wrap">
            <div className="section-heading section-heading-left">
              <div className="eyebrow">How I can help</div>
              <h2>Therapy shaped around what you’re carrying.</h2>
              <p>Focused support for adults in Santa Monica and across California.</p>
            </div>
            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card" key={service.number}>
                  <div className="service-top"><span>{service.number}</span><span className="service-arrow" aria-hidden="true">↗</span></div>
                  <h3>{service.title}</h3>
                  <p>{service.copy}</p>
                  <a href={consultationLink}>Talk about this in therapy <span aria-hidden="true">→</span></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="office-section section" id="office">
          <div className="wrap office-grid">
            <div className="office-copy">
              <div className="eyebrow">In-person in Santa Monica</div>
              <h2>A calm space to settle in.</h2>
              <p className="standfirst">The office is a quiet, private space designed to feel grounding.</p>
              <p>Natural light, comfortable seating, and an uncluttered setting make room to pause and focus on what you’re experiencing. In-person sessions are available in Santa Monica, with telehealth for adults throughout California.</p>
              <div className="office-detail"><span className="detail-icon" aria-hidden="true">⌖</span><span><strong>Santa Monica, California</strong><small>In-person sessions & secure telehealth</small></span></div>
              <a className="text-link" href={consultationLink}>Ask about session options <span aria-hidden="true">↗</span></a>
            </div>
            <div className="office-gallery">
              <figure className="office-gallery-main"><img src={images.office} alt="Dr. Reynolds’ Santa Monica therapy office with comfortable seating" /><figcaption>A welcoming place for thoughtful conversation.</figcaption></figure>
              <figure className="office-gallery-secondary"><img src={images.officeDetail} alt="A second view of the softly lit therapy room" /></figure>
            </div>
          </div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="wrap faq-grid">
            <div className="faq-intro"><div className="eyebrow">A few first questions</div><h2>Before you begin.</h2><p>Choosing a therapist is personal. Here are a few details about Dr. Reynolds’ work and approach.</p></div>
            <div className="faq-list">
              <details><summary>Who does Dr. Reynolds work with?</summary><p>She works with adults, including high-achieving people who may feel overwhelmed by anxiety, stress, trauma, burnout, or perfectionism.</p></details>
              <details><summary>What concerns can therapy support?</summary><p>Her practice focuses on anxiety and panic, trauma and past experiences, burnout, perfectionism, and chronic stress.</p></details>
              <details><summary>What approaches are part of therapy?</summary><p>Dr. Reynolds integrates CBT, EMDR, mindfulness-based practices, and body-oriented techniques. The approach is shaped around your needs and paced with care.</p></details>
              <details><summary>Are sessions in person or online?</summary><p>Both options are available: in-person sessions in Santa Monica and telehealth for adults throughout California.</p></details>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-image"><img src={images.officeDetail} alt="Soft light in a calm therapy office" /></div>
          <div className="contact-copy">
            <div className="eyebrow eyebrow-light">Take the first step</div>
            <h2>Ready to explore what support could look like?</h2>
            <p>If you’re tired of feeling stuck in anxiety, stress, or overthinking, a first conversation can help you consider whether therapy feels like the right next step.</p>
            <a className="button button-light" href={consultationLink}>Schedule a consultation <span aria-hidden="true">↗</span></a>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="footer">
        <div className="wrap footer-main">
          <a href="#top" className="brand footer-brand"><span className="brand-mark" aria-hidden="true">M</span><span>Dr. Maya Reynolds<small>Clinical Psychology · PsyD</small></span></a>
          <div className="footer-note"><div className="eyebrow eyebrow-light">A steady place to begin</div><p>Warm, collaborative therapy for adults in Santa Monica and across California.</p></div>
          <div className="footer-nav"><span className="footer-label">Explore</span><a href="#about">About</a><a href="#services">Specialties</a><a href="#approach">Approach</a><a href="#office">Our Office</a><a href="#faq">FAQs</a><a href={consultationLink}>Contact</a></div>
        </div>
        <div className="wrap footer-bottom"><span>© 2026 Dr. Maya Reynolds, PsyD</span><a href="#top">Back to top ↑</a></div>
      </footer>
    </>
  );
}
