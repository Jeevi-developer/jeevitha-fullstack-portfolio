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

function VanScene() {
  return (
    <div className="van-scene" aria-hidden="true">
      <svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMax meet" className="van-svg">
        {/* Sky gradient */}
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2a4258" />
            <stop offset="100%" stopColor="#3d5a75" />
          </linearGradient>
          <linearGradient id="roadG" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2a3340" />
            <stop offset="100%" stopColor="#1a2230" />
          </linearGradient>
          <linearGradient id="vanBody" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f0f4f8" />
            <stop offset="100%" stopColor="#c8d4e0" />
          </linearGradient>
          <clipPath id="vanClip">
            <rect x="150" y="150" width="300" height="120" rx="14" />
          </clipPath>
        </defs>

        {/* Sky */}
        <rect width="600" height="260" fill="url(#sky)" />

        {/* Sun glow */}
        <circle cx="470" cy="90" r="36" fill="#e0a549" opacity="0.15" />
        <circle cx="470" cy="90" r="22" fill="#e0a549" opacity="0.25" />

        {/* Distant mountains - layer 1 (parallax slow) */}
        <g className="mountain-far">
          <path d="M0,260 L80,180 L160,220 L240,160 L320,210 L400,170 L480,200 L560,165 L600,195 L600,260 Z" fill="#33485c" opacity="0.6" />
        </g>
        {/* Distant mountains - layer 2 */}
        <g className="mountain-near">
          <path d="M0,260 L60,210 L140,240 L200,200 L280,235 L360,205 L440,230 L520,200 L600,225 L600,260 Z" fill="#2a3a4e" opacity="0.8" />
        </g>

        {/* Scrolling trees */}
        <g className="trees">
          <g className="tree-unit">
            <rect x="20" y="222" width="6" height="20" fill="#1a2a1a" />
            <circle cx="23" cy="215" r="16" fill="#2d4a2d" />
          </g>
          <g className="tree-unit" transform="translate(120,0)">
            <rect x="20" y="222" width="6" height="20" fill="#1a2a1a" />
            <circle cx="23" cy="215" r="14" fill="#264426" />
          </g>
          <g className="tree-unit" transform="translate(260,0)">
            <rect x="20" y="222" width="6" height="20" fill="#1a2a1a" />
            <circle cx="23" cy="215" r="18" fill="#2d4a2d" />
          </g>
          <g className="tree-unit" transform="translate(420,0)">
            <rect x="20" y="222" width="6" height="20" fill="#1a2a1a" />
            <circle cx="23" cy="215" r="15" fill="#264426" />
          </g>
          <g className="tree-unit" transform="translate(540,0)">
            <rect x="20" y="222" width="6" height="20" fill="#1a2a1a" />
            <circle cx="23" cy="215" r="17" fill="#2d4a2d" />
          </g>
        </g>

        {/* Road */}
        <rect x="0" y="260" width="600" height="140" fill="url(#roadG)" />
        <line x1="0" y1="262" x2="600" y2="262" stroke="#4a5666" strokeWidth="2" />

        {/* Road dashes - animated */}
        <g className="road-dashes">
          <rect x="0" y="328" width="40" height="4" rx="2" fill="#e0a549" opacity="0.7" />
          <rect x="80" y="328" width="40" height="4" rx="2" fill="#e0a549" opacity="0.7" />
          <rect x="160" y="328" width="40" height="4" rx="2" fill="#e0a549" opacity="0.7" />
          <rect x="240" y="328" width="40" height="4" rx="2" fill="#e0a549" opacity="0.7" />
          <rect x="320" y="328" width="40" height="4" rx="2" fill="#e0a549" opacity="0.7" />
          <rect x="400" y="328" width="40" height="4" rx="2" fill="#e0a549" opacity="0.7" />
          <rect x="480" y="328" width="40" height="4" rx="2" fill="#e0a549" opacity="0.7" />
          <rect x="560" y="328" width="40" height="4" rx="2" fill="#e0a549" opacity="0.7" />
        </g>

        {/* Roadside posts */}
        <g className="posts">
          <rect x="50" y="270" width="4" height="20" fill="#4a5666" />
          <rect x="250" y="270" width="4" height="20" fill="#4a5666" />
          <rect x="450" y="270" width="4" height="20" fill="#4a5666" />
        </g>

        {/* --- Urbania van --- */}
        <g className="van-group">
          {/* Shadow */}
          <ellipse cx="300" cy="295" rx="140" ry="8" fill="#000" opacity="0.3" />

          {/* Body */}
          <rect x="150" y="155" width="300" height="120" rx="14" fill="url(#vanBody)" />

          {/* Roof accent */}
          <rect x="160" y="152" width="280" height="6" rx="3" fill="#c9821e" />

          {/* Windshield */}
          <path d="M410,165 Q445,165 448,195 L448,205 L410,205 Z" fill="#4a6a8a" opacity="0.85" />
          <path d="M410,165 Q445,165 448,195" fill="none" stroke="#6a8aaa" strokeWidth="1.5" opacity="0.5" />

          {/* Side windows */}
          <g clipPath="url(#vanClip)">
            <rect x="165" y="168" width="55" height="42" rx="5" fill="#4a6a8a" opacity="0.8" />
            <rect x="230" y="168" width="55" height="42" rx="5" fill="#4a6a8a" opacity="0.8" />
            <rect x="295" y="168" width="55" height="42" rx="5" fill="#4a6a8a" opacity="0.8" />
            <rect x="360" y="168" width="40" height="42" rx="5" fill="#4a6a8a" opacity="0.8" />
            {/* Window reflections */}
            <rect x="165" y="170" width="55" height="12" rx="5" fill="#7a9aba" opacity="0.3" />
            <rect x="230" y="170" width="55" height="12" rx="5" fill="#7a9aba" opacity="0.3" />
            <rect x="295" y="170" width="55" height="12" rx="5" fill="#7a9aba" opacity="0.3" />
          </g>

          {/* Lower body accent stripe */}
          <rect x="150" y="238" width="300" height="5" fill="#c9821e" />
          <rect x="150" y="246" width="300" height="2" fill="#a0681a" />

          {/* Brand text */}
          <text x="220" y="226" fontFamily="Manrope, sans-serif" fontSize="13" fontWeight="800" fill="#13202b" letterSpacing="0.5px">INFINITY</text>
          <text x="220" y="240" fontFamily="Manrope, sans-serif" fontSize="8" fontWeight="600" fill="#6b7886" letterSpacing="1.5px">TRAVELLERS</text>

          {/* Door line */}
          <line x1="225" y1="160" x2="225" y2="275" stroke="#a0aabb" strokeWidth="1.5" opacity="0.5" />
          <line x1="290" y1="160" x2="290" y2="275" stroke="#a0aabb" strokeWidth="1.5" opacity="0.5" />
          <line x1="355" y1="160" x2="355" y2="275" stroke="#a0aabb" strokeWidth="1.5" opacity="0.5" />

          {/* Headlight */}
          <circle cx="445" cy="225" r="6" fill="#ffd97a" opacity="0.9" />
          <circle cx="445" cy="225" r="3" fill="#fff8e0" />

          {/* Taillight */}
          <rect x="150" y="220" width="8" height="14" rx="2" fill="#c44030" opacity="0.8" />

          {/* Bumper */}
          <rect x="145" y="268" width="310" height="8" rx="3" fill="#5a6878" />

          {/* --- Wheels --- */}
          <g className="wheel-front">
            <circle cx="400" cy="278" r="26" fill="#1a1a1a" />
            <circle cx="400" cy="278" r="20" fill="#2a2a2a" />
            <circle cx="400" cy="278" r="10" fill="#4a4a4a" />
            <circle cx="400" cy="278" r="5" fill="#6a6a6a" />
            {/* Spokes */}
            <line x1="400" y1="262" x2="400" y2="294" stroke="#3a3a3a" strokeWidth="2" />
            <line x1="384" y1="278" x2="416" y2="278" stroke="#3a3a3a" strokeWidth="2" />
            <line x1="388" y1="266" x2="412" y2="290" stroke="#3a3a3a" strokeWidth="2" />
            <line x1="388" y1="290" x2="412" y2="266" stroke="#3a3a3a" strokeWidth="2" />
          </g>
          <g className="wheel-rear">
            <circle cx="200" cy="278" r="26" fill="#1a1a1a" />
            <circle cx="200" cy="278" r="20" fill="#2a2a2a" />
            <circle cx="200" cy="278" r="10" fill="#4a4a4a" />
            <circle cx="200" cy="278" r="5" fill="#6a6a6a" />
            <line x1="200" y1="262" x2="200" y2="294" stroke="#3a3a3a" strokeWidth="2" />
            <line x1="184" y1="278" x2="216" y2="278" stroke="#3a3a3a" strokeWidth="2" />
            <line x1="188" y1="266" x2="212" y2="290" stroke="#3a3a3a" strokeWidth="2" />
            <line x1="188" y1="290" x2="212" y2="266" stroke="#3a3a3a" strokeWidth="2" />
          </g>
        </g>

        {/* Floating destination labels */}
        <g className="dest-labels">
          <g className="dest-float-1">
            <rect x="50" y="40" width="56" height="22" rx="11" fill="#13202b" opacity="0.75" />
            <text x="78" y="55" textAnchor="middle" fontFamily="Manrope" fontSize="10" fontWeight="700" fill="#e0a549">Ooty</text>
          </g>
          <g className="dest-float-2">
            <rect x="250" y="55" width="72" height="22" rx="11" fill="#13202b" opacity="0.75" />
            <text x="286" y="70" textAnchor="middle" fontFamily="Manrope" fontSize="10" fontWeight="700" fill="#e0a549">Munnar</text>
          </g>
          <g className="dest-float-3">
            <rect x="460" y="35" width="68" height="22" rx="11" fill="#13202b" opacity="0.75" />
            <text x="494" y="50" textAnchor="middle" fontFamily="Manrope" fontSize="10" fontWeight="700" fill="#e0a549">Coorg</text>
          </g>
        </g>
      </svg>
    </div>
  );
}

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const waLink = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hi Infinity Travellers, I would like to plan a trip.')}`;

  function handleEnquiry(e) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get('name') || '';
    const phone = fd.get('phone') || '';
    const dest = fd.get('destination') || '';
    const dates = fd.get('dates') || '';
    const travellers = fd.get('travellers') || '';
    const msg = `Hi Infinity Travellers, I would like to plan a trip.%0a%0aName: ${encodeURIComponent(name)}%0aPhone: ${encodeURIComponent(phone)}%0aDestination: ${encodeURIComponent(dest)}%0aDates: ${encodeURIComponent(dates)}%0aTravellers: ${encodeURIComponent(travellers)}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, '_blank');
  }

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

        <section className="hero" id="top">
          <div className="hero-bg" style={{ '--hero-img': `url(${heroImg})` }} />
          <div className="hero-overlay" />
          <div className="hero-grid">
            <div className="hero-left">
              <p className="hero-eyebrow">Coimbatore • Tamil Nadu • South India</p>
              <h1>Travel, <em>elevated.</em></h1>
              <p className="hero-sub">Thoughtfully managed cab and tour services from Coimbatore — clean vehicles, courteous drivers and seamless support for every kilometre.</p>

              <form className="hero-form" onSubmit={handleEnquiry}>
                <p className="hero-form-title">Plan your journey</p>
                <div className="hero-form-row">
                  <input type="text" name="name" placeholder="Your name" required />
                  <input type="tel" name="phone" placeholder="Phone number" required />
                </div>
                <div className="hero-form-row">
                  <select name="destination" defaultValue="">
                    <option value="" disabled>Destination</option>
                    {destinations.map((d) => <option key={d.name} value={d.name}>{d.name}</option>)}
                    <option value="custom">Custom / other</option>
                  </select>
                  <input type="text" name="dates" placeholder="Travel dates" />
                </div>
                <div className="hero-form-row">
                  <input type="text" name="travellers" placeholder="No. of travellers" />
                  <button type="submit" className="btn btn-amber">Get a quote ↗</button>
                </div>
                <p className="hero-form-note">Opens WhatsApp with your details pre-filled.</p>
              </form>
            </div>
            <div className="hero-right">
              <VanScene />
              <div className="hero-right-badge">
                <span className="badge-pulse" />
                <span>Live fleet — Urbania class</span>
              </div>
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
