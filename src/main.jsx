import { StrictMode, useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const PHONE1 = '8525005900';
const PHONE2 = '9159555513';
const EMAIL = 'infinitytravellerscbe@gmail.com';
const ADDRESS = '177G, S.S. Kulam, Coimbatore — 641107';
const WHATSAPP = '91915955513';

const heroImg = 'https://images.pexels.com/photos/8747702/pexels-photo-8747702.jpeg?auto=compress&cs=tinysrgb&w=1600';

const destinations = [
  { name: 'Ooty', tag: 'Queen of the Hills', img: 'https://images.pexels.com/photos/5330349/pexels-photo-5330349.jpeg?auto=compress&cs=tinysrgb&w=1200', nights: '2D / 1N', from: '4,999', blurb: 'Tea gardens, Botanical Garden, Ooty Lake, Doddabetta and Coonoor viewpoints in a comfortable weekend escape.' },
  { name: 'Kodaikanal', tag: 'Princess of the Hills', img: 'https://images.pexels.com/photos/9411154/pexels-photo-9411154.jpeg?auto=compress&cs=tinysrgb&w=1200', nights: '2D / 1N', from: '5,499', blurb: "Kodai Lake, Coaker's Walk, Pine Forest, Pillar Rocks and Bryant Park wrapped in cool misty air." },
  { name: 'Munnar', tag: 'Tea Country', img: 'https://images.pexels.com/photos/36623929/pexels-photo-36623929.jpeg?auto=compress&cs=tinysrgb&w=1200', nights: '3D / 2N', from: '7,999', blurb: 'Rolling tea estates, Mattupetty Dam, Echo Point, Eravikulam National Park and cascading waterfalls.' },
  { name: 'Coorg', tag: 'Scotland of India', img: 'https://images.pexels.com/photos/33046721/pexels-photo-33046721.png?auto=compress&cs=tinysrgb&w=1200', nights: '3D / 2N', from: '8,499', blurb: 'Coffee plantations, Abbey Falls, Dubare Elephant Camp, Madikeri Fort and misty valley viewpoints.' },
  { name: 'Wayanad', tag: 'Wild & Green', img: 'https://images.pexels.com/photos/16573093/pexels-photo-16573093.jpeg?auto=compress&cs=tinysrgb&w=1200', nights: '3D / 2N', from: '7,499', blurb: 'Wildlife sanctuaries, Banasura Sagar Dam, Edakkal Caves, Soochipara Falls and lush bamboo forests.' },
];

const services = [
  { icon: 'car', title: 'Local & Outstation', text: 'Reliable city rides, airport transfers and long-distance travel with experienced, courteous drivers.' },
  { icon: 'clock', title: 'Hourly Packages', text: 'Clear 4H, 8H and 12H tariffs for meetings, shopping, local sightseeing and day rentals.' },
  { icon: 'map', title: 'Curated Tours', text: 'Vehicle-wise fares, accommodation options and day-by-day itineraries for South India circuits.' },
  { icon: 'phone', title: '24/7 Support', text: 'On-trip assistance over WhatsApp and phone — we are one message away, every kilometre.' },
];

const vehicles = [
  { name: 'Sedan', seats: '4 + 1', ac: 'AC', img: 'https://images.pexels.com/photos/4909544/pexels-photo-4909544.jpeg?auto=compress&cs=tinysrgb&w=900', tags: ['Compact', 'Efficient'], best: 'City rides & short trips' },
  { name: 'SUV / Innova', seats: '6 + 1', ac: 'AC', img: 'https://images.pexels.com/photos/19868893/pexels-photo-19868893.jpeg?auto=compress&cs=tinysrgb&w=900', tags: ['Spacious', 'Comfortable'], best: 'Family & outstation tours' },
  { name: 'Tempo Traveller', seats: '12 + 1', ac: 'AC', img: 'https://images.pexels.com/photos/18029603/pexels-photo-18029603.jpeg?auto=compress&cs=tinysrgb&w=900', tags: ['Group travel', 'Pushback seats'], best: 'Group & pilgrimage tours' },
];

const testimonials = [
  { text: 'Smooth and safe trip to Ooty. The driver was polite and knew all the best viewpoints. Highly recommended!', name: 'Arun Kumar', place: 'Coimbatore' },
  { text: 'Booked a 3-day Munnar package for our family. Clean vehicle, comfortable stays and great pricing.', name: 'Priya Sundar', place: 'Chennai' },
  { text: 'Very professional service. The team replied instantly on WhatsApp and arranged everything perfectly.', name: 'Faisal Rahman', place: 'Bangalore' },
  { text: 'Affordable Coorg package with excellent coordination. Felt safe and well looked after throughout.', name: 'Latha Venkatesh', place: 'Coimbatore' },
];

function Icon({ name }) {
  const paths = {
    car: 'M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11M5 11h14a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-1M5 11a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h1m12-7H7m12 7v-2a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2',
    clock: 'M12 7v5l3 2m6-2a9 9 0 1 1-18 0 9 9 0 0 1 18 0',
    map: 'M9 20l-5.45-2.73A1 1 0 0 1 3 16.38V5.36a1 1 0 0 1 1.45-.9L9 7m0 13l6-3m-6 3V7m6 10l5.55 2.78A1 1 0 0 0 22 18.9V7.72a1 1 0 0 0-.55-.9L15 4m0 13V4',
    phone: 'M3 5a2 2 0 0 1 2-2h2.3a1 1 0 0 1 .95.68l1.1 3.3a1 1 0 0 1-.5 1.2l-1.7.9a12 12 0 0 0 5.5 5.5l.9-1.7a1 1 0 0 1 1.2-.5l3.3 1.1a1 1 0 0 1 .68.95V19a2 2 0 0 1-2 2A16 16 0 0 1 3 5z',
  };
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  );
}

function useReveal() {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setShown(true); io.disconnect(); } }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, shown];
}

function Reveal({ children, className = '' }) {
  const [ref, shown] = useReveal();
  return <div ref={ref} className={`reveal ${shown ? 'in' : ''} ${className}`}>{children}</div>;
}

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const waLink = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hi Infinity Travellers, I would like to plan a trip.')}`;

  return (
    <StrictMode>
      <div className="site">
        <header className={`topbar ${navOpen ? 'open' : ''}`}>
          <div className="bar-inner">
            <a className="logo" href="#top" onClick={() => setNavOpen(false)}>
              <span className="logo-mark">IT</span>
              <span className="logo-text">Infinity Travellers</span>
            </a>
            <nav className={`nav-links ${navOpen ? 'show' : ''}`}>
              <a href="#services" onClick={() => setNavOpen(false)}>Services</a>
              <a href="#destinations" onClick={() => setNavOpen(false)}>Destinations</a>
              <a href="#vehicles" onClick={() => setNavOpen(false)}>Vehicles</a>
              <a href="#reviews" onClick={() => setNavOpen(false)}>Reviews</a>
              <a href="#contact" onClick={() => setNavOpen(false)}>Contact</a>
              <a className="nav-cta" href={`tel:+91${PHONE2}`}>Call now</a>
            </nav>
            <button className="hamburger" aria-label="Menu" onClick={() => setNavOpen(v => !v)}><span /><span /><span /></button>
          </div>
        </header>

        <section className="hero" id="top" style={{ '--hero-img': `url(${heroImg})` }}>
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="hero-eyebrow">Coimbatore • Tamil Nadu • South India</p>
            <h1>Travel, <em>elevated.</em></h1>
            <p className="hero-sub">Thoughtfully managed cab and tour services from Coimbatore — clean vehicles, courteous drivers and seamless support for every kilometre.</p>
            <div className="hero-actions">
              <a className="btn btn-amber" href="#destinations">Explore packages</a>
              <a className="btn btn-ghost" href={waLink} target="_blank" rel="noreferrer">WhatsApp us</a>
            </div>
          </div>
          <div className="hero-scroll">Scroll <span /></div>
        </section>

        <section className="quick-strip">
          <div className="quick-inner">
            <a href={`tel:+91${PHONE1}`}><Icon name="phone" /><span>{PHONE1}</span></a>
            <a href={`tel:+91${PHONE2}`}><Icon name="phone" /><span>{PHONE2}</span></a>
            <a href={`mailto:${EMAIL}`}><span className="dot">✉</span><span>{EMAIL}</span></a>
            <span className="quick-addr"><span className="dot">⌂</span>{ADDRESS}</span>
          </div>
        </section>

        <section className="services" id="services">
          <div className="section-head">
            <p className="kicker">/ What we do</p>
            <h2>Everything your journey needs</h2>
            <p className="lead">From an airport pickup to a seven-day South India circuit, every service is managed with the same care.</p>
          </div>
          <div className="service-grid">
            {services.map((s) => (
              <Reveal key={s.title}>
                <div className="service-card">
                  <div className="service-icon"><Icon name={s.icon} /></div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="destinations" id="destinations">
          <div className="section-head">
            <p className="kicker">/ Tour packages</p>
            <h2>Choose a ready-made South India plan</h2>
            <p className="lead">Curated itineraries with vehicle, stay and sightseeing — sample pricing shown. Call or WhatsApp for a custom quote.</p>
          </div>
          <div className="dest-grid">
            {destinations.map((d, i) => (
              <Reveal key={d.name}>
                <article className={`dest-card ${i === 0 || i === 4 ? 'wide' : ''}`}>
                  <div className="dest-img" style={{ backgroundImage: `url(${d.img})` }}>
                    <span className="dest-nights">{d.nights}</span>
                  </div>
                  <div className="dest-body">
                    <p className="dest-tag">{d.tag}</p>
                    <h3>{d.name}</h3>
                    <p className="dest-blurb">{d.blurb}</p>
                    <div className="dest-foot">
                      <span className="dest-price">From <strong>₹{d.from}</strong> <small>/ person</small></span>
                      <a className="dest-cta" href={waLink} target="_blank" rel="noreferrer">Enquire ↗</a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="vehicles" id="vehicles">
          <div className="section-head light">
            <p className="kicker light">/ Our fleet</p>
            <h2>Travel in comfort</h2>
            <p className="lead light">A well-maintained fleet for every group size — all vehicles air-conditioned and serviced regularly.</p>
          </div>
          <div className="vehicle-grid">
            {vehicles.map((v) => (
              <Reveal key={v.name}>
                <div className="vehicle-card">
                  <div className="vehicle-img" style={{ backgroundImage: `url(${v.img})` }} />
                  <div className="vehicle-body">
                    <div className="vehicle-top"><h3>{v.name}</h3><span className="vehicle-ac">{v.ac}</span></div>
                    <p className="vehicle-seats">{v.seats} seater</p>
                    <div className="vehicle-tags">{v.tags.map((t) => <span key={t}>{t}</span>)}</div>
                    <p className="vehicle-best">Best for: {v.best}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="vehicle-note">Have your own vehicle list and photos? Share them and I will replace these placeholders with your real fleet.</p>
        </section>

        <section className="reviews" id="reviews">
          <div className="section-head">
            <p className="kicker">/ Trusted on the road</p>
            <h2>What travellers say</h2>
          </div>
          <div className="review-grid">
            {testimonials.map((t) => (
              <Reveal key={t.name}>
                <figure className="review-card">
                  <div className="stars">★★★★★</div>
                  <blockquote>{t.text}</blockquote>
                  <figcaption><strong>{t.name}</strong><span>{t.place}</span></figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="contact-inner">
            <div className="contact-left">
              <p className="kicker">/ Plan your journey</p>
              <h2>Let's get you on the road.</h2>
              <p className="contact-lead">Share the essentials — destination, dates and number of travellers. We'll reply on WhatsApp with a clear quote.</p>
              <div className="contact-list">
                <a href={`tel:+91${PHONE1}`}>Phone: {PHONE1}</a>
                <a href={`tel:+91${PHONE2}`}>Phone: {PHONE2}</a>
                <a href={waLink} target="_blank" rel="noreferrer">WhatsApp: {PHONE2}</a>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                <span>{ADDRESS}</span>
              </div>
            </div>
            <form className="contact-form" onSubmit={(e) => { e.preventDefault(); window.open(waLink, '_blank'); }}>
              <h3>Send a quick enquiry</h3>
              <input type="text" name="name" placeholder="Your name" required />
              <input type="tel" name="phone" placeholder="Phone number" required />
              <select name="destination" defaultValue="">
                <option value="" disabled>Preferred destination</option>
                {destinations.map((d) => <option key={d.name} value={d.name}>{d.name}</option>)}
                <option value="custom">Custom / other</option>
              </select>
              <input type="text" name="dates" placeholder="Travel dates (e.g. 15–18 Dec)" />
              <textarea name="notes" rows="3" placeholder="Number of travellers, pickup point, any special requests…" />
              <button type="submit" className="btn btn-amber">Send on WhatsApp ↗</button>
              <p className="form-note">This opens WhatsApp with your details pre-filled. Nothing is stored.</p>
            </form>
          </div>
        </section>

        <footer className="footer">
          <div className="footer-inner">
            <div className="footer-brand">
              <span className="logo-mark">IT</span>
              <div><strong>Infinity Travellers</strong><p>Premium, dependable travel from Coimbatore across Tamil Nadu and South India.</p></div>
            </div>
            <div className="footer-cols">
              <div><h4>Explore</h4><a href="#services">Services</a><a href="#destinations">Destinations</a><a href="#vehicles">Vehicles</a></div>
              <div><h4>Popular</h4><a href="#destinations">Ooty</a><a href="#destinations">Kodaikanal</a><a href="#destinations">Munnar</a></div>
              <div><h4>Contact</h4><a href={`tel:+91${PHONE2}`}>{PHONE2}</a><a href={`mailto:${EMAIL}`}>Email</a><a href={waLink} target="_blank" rel="noreferrer">WhatsApp</a></div>
            </div>
          </div>
          <div className="footer-bottom"><span>© {new Date().getFullYear()} Infinity Travellers, Coimbatore.</span><span>S.S. Kulam, Coimbatore — 641107</span></div>
        </footer>

        <a className="wa-float" href={waLink} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 5L2 22l5.2-1.36a9.9 9.9 0 0 0 4.84 1.26c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2zm5.8 14.1c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.12.1-1.8-.1-.42-.14-.96-.3-1.64-.6-2.88-1.24-4.76-4.14-4.9-4.32-.14-.18-1.18-1.56-1.18-2.98 0-1.42.74-2.12 1-2.4.26-.28.56-.36.74-.36.18 0 .38 0 .54.02.18 0 .42-.06.66.5.24.58.82 2 .9 2.14.06.14.1.3 0 .48-.1.18-.16.3-.3.46-.16.16-.32.36-.46.48-.14.14-.3.3-.14.58.16.28.72 1.2 1.56 1.94 1.06.94 1.96 1.24 2.24 1.38.28.14.44.12.6-.06.16-.18.7-.8.88-1.08.18-.28.36-.24.6-.14.24.1 1.56.74 1.82.88.26.14.44.2.5.32.06.12.06.68-.18 1.36z"/></svg>
        </a>
      </div>
    </StrictMode>
  );
}

createRoot(document.getElementById('root')).render(<App />);
