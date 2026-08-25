import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { HomeFooter } from '../components/Footer';
import { useHover } from '../hooks/useHover';
import { ROUTES } from '../routes';

const SERVICES = [
  {
    title: 'Cleaning', titleAr: 'النظافة',
    body: "Daily and specialist cleaning programs, designed to meet and exceed the standards our clients expect across every floor and shift.",
    href: ROUTES.cleaning,
    icon: <svg width="30" height="30" viewBox="0 0 32 32" fill="none" stroke="#B9DE7C" strokeWidth={1.6}><path d="M8 26h16" strokeLinecap="round" /><path d="M16 6v14" strokeLinecap="round" /><path d="M11 10c0-3 2-4 5-4s5 1 5 4" strokeLinecap="round" /></svg>,
  },
  {
    title: 'Maintenance & Operations', titleAr: 'الصيانة',
    body: "From cleanliness to safety to health hazards, problems can emerge fast — our planned and reactive maintenance stops them before they spread.",
    href: ROUTES.maintenance,
    icon: <svg width="30" height="30" viewBox="0 0 32 32" fill="none" stroke="#B9DE7C" strokeWidth={1.6}><circle cx="16" cy="16" r="4" /><path d="M16 6v3M16 23v3M6 16h3M23 16h3M9 9l2 2M21 21l2 2M23 9l-2 2M9 23l2-2" strokeLinecap="round" /></svg>,
  },
  {
    title: 'Security', titleAr: 'الأمن',
    body: "Trained security personnel protect your building, residence or event, with coverage for multi-location clients across every site we serve.",
    href: ROUTES.security,
    icon: <svg width="30" height="30" viewBox="0 0 32 32" fill="none" stroke="#B9DE7C" strokeWidth={1.6}><path d="M16 6l9 3v7c0 6-4 9-9 11-5-2-9-5-9-11V9z" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  },
  {
    title: 'Facilities Management', titleAr: 'إدارة المرافق',
    body: "Central coordination of vendors, compliance and assets, giving every facility one accountable team overseeing daily operations.",
    href: ROUTES.facilitiesManagement,
    icon: <svg width="30" height="30" viewBox="0 0 32 32" fill="none" stroke="#B9DE7C" strokeWidth={1.6}><path d="M8 26V12l8-5 8 5v14" strokeLinecap="round" strokeLinejoin="round" /><path d="M13 26v-6h6v6" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  },
  {
    title: 'Integrated Solutions', titleAr: 'حلول متكاملة',
    body: "Every service bundled into a single contract and one point of contact, so nothing falls between the gaps of separate vendors.",
    href: ROUTES.integratedSolutions,
    icon: <svg width="30" height="30" viewBox="0 0 32 32" fill="none" stroke="#B9DE7C" strokeWidth={1.6}><circle cx="12" cy="13" r="5" /><path d="M22 22l6 6" strokeLinecap="round" /></svg>,
  },
  {
    title: 'Specialty Floor Care', titleAr: 'العناية المتخصصة بالأرضيات',
    body: "Stripping, waxing, polishing and specialized care for hard and soft flooring, keeping every surface safe and presentable.",
    href: ROUTES.cleaning,
    icon: <svg width="30" height="30" viewBox="0 0 32 32" fill="none" stroke="#B9DE7C" strokeWidth={1.6}><path d="M16 26v-8M16 18c-4 0-7-3-7-7 4 0 7 2 7 5M16 18c4 0 7-3 7-7-4 0-7 2-7 5" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  },
];

const INDUSTRY_CARDS = [
  { img: 'industry-national-accounts-c.jpg', title: 'National Accounts Cleaning', tag: 'COMMERCIAL PROPERTY' },
  { img: 'industry-school-university-c.jpg', title: 'School & University Cleaning', tag: 'EDUCATION' },
  { img: 'industry-healthcare.jpg', title: 'Healthcare Cleaning', tag: 'HEALTHCARE' },
  { img: 'industry-government-c.jpg', title: 'Government Building Cleaning', tag: 'GOVERNMENT' },
  { img: 'industry-office-building.jpg', title: 'Office & Building Cleaning', tag: 'OFFICES' },
  { img: 'industry-hotel-resort-c.jpg', title: 'Hotel & Resort Cleaning', tag: 'HOSPITALITY' },
];

const PRESIDENT = { img: 'lead-rebhi.jpg', name: 'Rebhi Zuhika', nameAr: 'ربحي زهيكة', role: 'PRESIDENT', roleAr: 'الرئيس' };

const LEADERS = [
  { img: 'lead-faris.jpg', name: 'Faris Al-Khatib', nameAr: 'فارس الخطيب', role: 'VICE PRESIDENT OF OPERATIONS', roleAr: 'نائب الرئيس للعمليات' },
  { img: 'lead-hassan.jpg', name: 'Hassan Al-Sayegh', nameAr: 'حسن الصايغ', role: 'GENERAL MANAGER', roleAr: 'المدير العام' },
  { img: 'lead-omar.jpg', name: 'Omar Al-Rashid', nameAr: 'عمر الراشد', role: 'QUALITY & TRAINING MANAGER', roleAr: 'مدير الجودة والتدريب' },
  { img: 'lead-sami.jpg', name: 'Sami Al-Najjar', nameAr: 'سامي النجار', role: 'CLIENT SERVICES MANAGER', roleAr: 'مدير خدمات العملاء' },
];

const PILLARS = [
  { num: '01', title: 'Live Data & Dashboards', titleAr: 'بيانات مباشرة ولوحات أداء', body: 'See activity, completion and performance across every facility.', bodyAr: 'تابع النشاط والإنجاز والأداء في جميع المنشآت.' },
  { num: '02', title: 'Digital Inspections', titleAr: 'فحوصات رقمية', body: 'Standardized mobile inspections create measurable quality records.', bodyAr: 'فحوصات موحدة عبر الأجهزة المحمولة توثّق الجودة بوضوح.' },
  { num: '03', title: 'Transparent Reporting', titleAr: 'تقارير شفافة', body: 'Clear reports reveal trends, priorities and opportunities to improve.', bodyAr: 'تقارير واضحة تكشف الاتجاهات والأولويات وفرص التحسين.' },
  { num: '04', title: 'Faster Response', titleAr: 'استجابة أسرع', body: 'Connected workflows route issues quickly to the accountable team.', bodyAr: 'مسارات عمل مترابطة توجّه البلاغات سريعًا إلى الفريق المسؤول.' },
];

const SECTORS = [
  { title: 'Healthcare & Medical Facilities', titleAr: 'مرافق الرعاية الصحية والمنشآت الطبية', body: 'Hospitals • Clinics • Medical offices • Specialty care', bodyAr: 'المستشفيات • العيادات • المكاتب الطبية • الرعاية المتخصصة' },
  { title: 'Hotels & Hospitality', titleAr: 'الفنادق والضيافة', body: 'Hotels • Resorts • Guest facilities • Public spaces', bodyAr: 'الفنادق • المنتجعات • مرافق الضيوف • المساحات العامة' },
  { title: 'Additional & Specialized Sectors', titleAr: 'قطاعات إضافية ومتخصصة', body: 'K-12 schools • Universities • Commercial • Mixed-use', bodyAr: 'مدارس من الروضة حتى الثانوية • الجامعات • التجاري • متعدد الاستخدام' },
];

const REGIONS = [
  { name: 'The Gulf Cooperation Council (GCC)', body: 'Complete coverage across Saudi Arabia, the UAE, Qatar, Kuwait, Bahrain and Oman.' },
  { name: 'The Levant & North Africa', body: 'Scaled solutions for modern corporate centers and administrative hubs in Egypt and Jordan.' },
  { name: 'Cross-Regional Hubs', body: 'High-standard asset protection and specialized cleaning infrastructure across commercial networks in Turkey.' },
];

const CLIENTS = [
  { img: 'client-meijer-trim.png', alt: 'Meijer', h: 52 },
  { img: 'client-target-trim.png', alt: 'Target', h: 48 },
  { img: 'client-annarbor-trim-c.png', alt: 'Ann Arbor Public Schools', h: 70 },
  { img: 'client-emu.webp', alt: 'Eastern Michigan University', h: 48 },
  { img: 'client-umich-trim.png', alt: 'University of Michigan', h: 44 },
  { img: 'client-trinity-trim.png', alt: 'Trinity Health', h: 74 },
];

function HeroCta({ mobile = false }: { mobile?: boolean }) {
  const { onMouseEnter, onMouseLeave, mergeStyle } = useHover();
  const base: React.CSSProperties = mobile
    ? { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, background: '#8BC53F', color: '#111412', padding: '12px 24px 12px 12px', borderRadius: 50, fontSize: 15, fontWeight: 600, width: 'max-content', margin: '0 auto', transition: 'gap 0.25s ease, background 0.25s ease, box-shadow 0.25s ease' }
    : { display: 'inline-flex', alignItems: 'center', gap: 14, background: '#8BC53F', color: '#111412', padding: '14px 28px 14px 14px', borderRadius: 50, fontFamily: "'Poppins',sans-serif", fontSize: 16, fontWeight: 600, transition: 'gap 0.3s ease, background 0.3s ease, box-shadow 0.3s ease', boxShadow: '0 0 0 rgba(139,197,63,0.5)' };
  const hoverStyle: React.CSSProperties = mobile
    ? { gap: 18, background: '#9ED84A', boxShadow: '0 0 20px rgba(139,197,63,0.5)' }
    : { gap: 22, background: '#9ED84A', boxShadow: '0 0 24px rgba(139,197,63,0.55)' };
  return (
    <Link to={ROUTES.contact} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} style={mergeStyle(base, hoverStyle)}>
      <span style={{ width: mobile ? 30 : 32, height: mobile ? 30 : 32, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, background: '#111412' }}>
        <svg width={mobile ? 15 : 16} height={mobile ? 15 : 16} viewBox="0 0 24 24" fill="none" stroke="#8BC53F" strokeWidth={2}><path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </span>
      Get in touch with us
    </Link>
  );
}

function ServiceCard({ s, mobile = false }: { s: typeof SERVICES[number]; mobile?: boolean }) {
  const { onMouseEnter, onMouseLeave, mergeStyle } = useHover();
  const base: React.CSSProperties = mobile
    ? { flex: '0 0 268px', display: 'flex', flexDirection: 'column', background: '#fff', padding: '24px 20px', textAlign: 'center', boxShadow: '0 10px 24px rgba(0,0,0,0.2)' }
    : { background: '#fff', padding: '34px 20px', textAlign: 'center', boxShadow: '0 10px 24px rgba(0,0,0,0.18)', transition: 'transform 0.25s ease, box-shadow 0.25s ease', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', minHeight: 270 };
  const hoverStyle: React.CSSProperties = { transform: 'translateY(-8px)', boxShadow: '0 18px 34px rgba(0,0,0,0.28)' };
  return (
    <div style={mobile ? base : mergeStyle(base, hoverStyle)} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div style={{ width: mobile ? 56 : 64, height: mobile ? 56 : 64, borderRadius: '50%', background: '#111412', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px' }}>
        {s.icon}
      </div>
      <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 15, fontWeight: 600, letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 4 }}>{s.title}</div>
      <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 14, fontWeight: 600, color: '#6E9E2E', marginBottom: 10 }}>{s.titleAr}</div>
      <p style={{ fontSize: 13, color: '#3C403D', lineHeight: 1.6, margin: '0 0 14px' }}>{s.body}</p>
      <Link to={s.href} style={{ fontSize: 12.5, fontWeight: 600, color: '#8BC53F', marginTop: 'auto' }}>Learn More &nbsp;→</Link>
    </div>
  );
}

function LeaderCard({ l }: { l: typeof LEADERS[number] }) {
  const card = useHover();
  const img = useHover();
  return (
    <div style={{ textAlign: 'center' }}>
      <div
        onMouseEnter={card.onMouseEnter}
        onMouseLeave={card.onMouseLeave}
        style={card.mergeStyle({ overflow: 'hidden', borderRadius: 8, marginBottom: 16, transition: 'transform 0.35s ease, box-shadow 0.35s ease' }, { transform: 'translateY(-6px)', boxShadow: '0 18px 34px rgba(0,0,0,0.45)' })}
      >
        <img
          src={`/assets/${l.img}`}
          alt={l.name}
          onMouseEnter={img.onMouseEnter}
          onMouseLeave={img.onMouseLeave}
          style={img.mergeStyle(
            { width: '100%', aspectRatio: '4/5', objectFit: 'cover', objectPosition: 'center top', border: '2px solid #8BC53F', borderRadius: 8, display: 'block', transition: 'transform 0.5s ease, filter 0.5s ease' },
            { transform: 'scale(1.07)', filter: 'saturate(1.15) contrast(1.05)' }
          )}
        />
      </div>
      <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 15, fontWeight: 600, color: '#fff' }}>{l.name}</div>
      <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", fontSize: 16, fontWeight: 600, color: '#8BC53F', marginTop: 6 }}>{l.nameAr}</div>
      <div style={{ fontSize: 12, color: '#8BC53F', letterSpacing: 0.5, marginTop: 4 }}>{l.role}</div>
      <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", fontSize: 12, color: '#8BC53F', marginTop: 2 }}>{l.roleAr}</div>
    </div>
  );
}

function IndustryCard({ c, mobile = false }: { c: typeof INDUSTRY_CARDS[number]; mobile?: boolean }) {
  return (
    <div style={{ position: 'relative', flex: mobile ? '0 0 260px' : '0 0 340px', height: mobile ? 360 : 470, overflow: 'hidden' }}>
      <img src={`/assets/${c.img}`} alt={c.title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(180deg, rgba(17,20,18,0) 40%, rgba(17,20,18,${mobile ? 0.88 : 0.85}) 100%)` }} />
      <div style={{ position: 'absolute', left: mobile ? 18 : 22, right: mobile ? 18 : 22, bottom: mobile ? 20 : 26, textAlign: mobile ? 'center' : undefined }}>
        <div style={{ fontFamily: "'Archivo',sans-serif", fontSize: mobile ? 20 : 22, fontWeight: 700, color: '#fff', lineHeight: 1.15, marginBottom: mobile ? 10 : 12 }}>{c.title}</div>
        <div style={{ height: 2, width: mobile ? 40 : undefined, background: '#8BC53F', marginBottom: mobile ? 10 : 12, margin: mobile ? '0 auto 10px' : undefined }} />
        <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: mobile ? 10.5 : 11, letterSpacing: 2, color: '#C9C9C9' }}>{c.tag}</div>
      </div>
    </div>
  );
}

function GlobeSvg({ size = 400 }: { size?: number }) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 400 340" style={{ position: 'absolute', inset: 0 }}>
      <defs>
        <pattern id={`regionDots${size}`} width="10" height="10" patternUnits="userSpaceOnUse"><circle cx="1.4" cy="1.4" r="1.3" fill="#1F5C1F" /></pattern>
        <radialGradient id={`globeGrad${size}`} cx="42%" cy="38%" r="65%"><stop offset="0%" stopColor="#CFF29B" /><stop offset="45%" stopColor="#7DBF3F" /><stop offset="100%" stopColor="#173D14" /></radialGradient>
        <radialGradient id={`fadeMask${size}`} cx="50%" cy="42%" r="55%"><stop offset="60%" stopColor="#fff" stopOpacity={1} /><stop offset="100%" stopColor="#fff" stopOpacity={0} /></radialGradient>
        <mask id={`dotMask${size}`}><rect width="400" height="340" fill={`url(#fadeMask${size})`} /></mask>
      </defs>
      <rect width="400" height="340" fill="#0A0F0B" />
      <rect width="400" height="340" fill={`url(#regionDots${size})`} mask={`url(#dotMask${size})`} />
      <circle cx="170" cy="150" r="98" fill={`url(#globeGrad${size})`} />
      <g stroke="#0A0F0B" strokeWidth={0.7} fill="none" opacity={0.55}>
        <ellipse cx="170" cy="150" rx="98" ry="98" />
        <ellipse cx="170" cy="150" rx="70" ry="98" />
        <ellipse cx="170" cy="150" rx="35" ry="98" />
        <path d="M72 150 H268" />
        <path d="M80 108 Q170 130 260 108" />
        <path d="M80 192 Q170 170 260 192" />
      </g>
    </svg>
  );
}

function HomeDesktop() {
  const [openSector, setOpenSector] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    let x = 0;
    let last: number | null = null;
    let raf = 0;
    const step = (t: number) => {
      const el = trackRef.current;
      if (el) {
        if (last !== null && !pausedRef.current) {
          x -= (t - last) * 0.045;
          const half = el.scrollWidth / 2;
          if (half > 0 && -x >= half) x += half;
          el.style.transform = `translateX(${x}px)`;
        }
        last = t;
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  const learnMore = useHover();
  const regionalCta = useHover();

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", color: '#111412', overflowX: 'auto', minWidth: 1360 }}>
      <Header activeIndex={0} variant="home" />

      {/* HERO */}
      <div style={{ position: 'relative', background: '#111412', overflow: 'hidden', padding: '70px 64px 150px', clipPath: 'polygon(0 0, 100% 0, 100% 96%, 0 100%)', marginBottom: 32 }}>
        <video src="/assets/hero-bg.mp4" autoPlay muted loop playsInline poster="/assets/hero-f0.jpg" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg, rgba(6,10,8,0.85) 0%, rgba(6,10,8,0.6) 55%, rgba(6,10,8,0.35) 100%)' }} />
        <svg style={{ position: 'absolute', left: -18, top: -11, width: 340, height: '100%' }} viewBox="0 0 340 700" preserveAspectRatio="none">
          <polygon points="0,0 250,0 0,340" fill="#8BC53F" opacity={0.45} />
          <polygon points="0,0 130,0 0,620" fill="#6E9E2E" opacity={0.4} />
        </svg>
        <svg style={{ position: 'absolute', right: 0, bottom: 0, width: 420, height: 400 }} viewBox="0 0 420 400" preserveAspectRatio="none">
          <polygon points="420,400 130,400 420,110" fill="#8BC53F" opacity={0.42} />
        </svg>
        <div style={{ position: 'relative', maxWidth: 720, paddingTop: 10 }}>
          <h1 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 65, fontWeight: 800, color: '#fff', lineHeight: 1.06, margin: '0 0 14px', textTransform: 'uppercase' }}>Your Facility. <span style={{ color: '#8BC53F' }}>One</span> Partner.</h1>
          <div style={{ width: 70, height: 3, background: '#8BC53F', marginBottom: 26 }} />
          <p style={{ fontFamily: "'Poppins',sans-serif", fontSize: 19, color: '#fff', lineHeight: 1.6, maxWidth: 480, margin: '0 0 14px', fontWeight: 400 }}>Bring cleaning, maintenance, security, and facilities management together under one accountable team.</p>
          <p style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 16, color: '#C9C9C9', lineHeight: 1.9, maxWidth: 480, margin: '0 0 34px' }}>اجمع النظافة والصيانة والأمن وإدارة المرافق تحت مسؤولية فريق واحد.</p>
          <HeroCta />
        </div>
      </div>

      {/* OUR STORY */}
      <div style={{ position: 'relative', background: '#FFFFFF', padding: '36px 64px', overflow: 'hidden' }}>
        <div style={{ position: 'relative', maxWidth: 1240, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center' }}>
          <div style={{ position: 'relative', zIndex: 2, padding: '0 56px 0 0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
              <span style={{ fontFamily: "'Poppins',sans-serif", fontSize: 12, letterSpacing: 3, fontWeight: 600, color: '#6E9E2E' }}>OUR STORY</span>
            </div>
            <h2 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 44, fontWeight: 800, lineHeight: 1.03, margin: '0 0 22px', color: '#111412' }}>Built In America.<br />Ready For The World.</h2>
            <p style={{ fontSize: 15, color: '#3C403D', lineHeight: 1.75, margin: '0 0 10px', maxWidth: 520 }}>Founded in the United States by a visionary facilities management entrepreneur, our company grew into one of the nation's largest service organizations — 16,000+ employees and 4,000+ service providers across all 50 states.</p>
            <p style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 13.5, color: '#6E9E2E', lineHeight: 1.9, margin: '0 0 30px', maxWidth: 520 }}>تأسست شركتنا في الولايات المتحدة، ونمت لتصبح واحدة من أكبر مؤسسات الخدمات في البلاد.</p>
            <Link
              to={ROUTES.aboutUs}
              onMouseEnter={learnMore.onMouseEnter}
              onMouseLeave={learnMore.onMouseLeave}
              style={learnMore.mergeStyle(
                { display: 'inline-flex', alignItems: 'center', gap: 12, fontFamily: "'Poppins',sans-serif", fontSize: 12.5, fontWeight: 600, letterSpacing: 2, color: '#111412', paddingBottom: 8, borderBottom: '2px solid #8BC53F' },
                { gap: 18 }
              )}
            >
              LEARN MORE <span style={{ color: '#8BC53F' }}>→</span>
            </Link>
          </div>
          <div style={{ position: 'relative', padding: '20px 40px 40px 0' }}>
            <img src="/assets/our-story-team.jpg" alt="Business partners shaking hands" style={{ width: '100%', height: 340, objectFit: 'cover', display: 'block' }} />
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <div id="services" style={{ position: 'relative', background: 'linear-gradient(135deg, #1C201B 0%, #2A2E2A 45%, #1C201B 100%)', padding: '90px 64px 0', overflow: 'visible' }}>
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.35 }} preserveAspectRatio="none" viewBox="0 0 1400 700">
          <defs>
            <pattern id="circuitDots" width="26" height="26" patternUnits="userSpaceOnUse"><circle cx="1.2" cy="1.2" r="1.2" fill="#B9DE7C" /></pattern>
          </defs>
          <rect width="1400" height="700" fill="url(#circuitDots)" />
          <g stroke="#8BC53F" strokeWidth={1} fill="none" opacity={0.5}>
            <path d="M-50 700 L500 0" />
            <path d="M100 700 L650 0" />
            <path d="M250 700 L800 0" />
            <path d="M900 700 L1450 0" />
            <path d="M1050 700 L1600 0" />
            <circle cx="500" cy="220" r="3" fill="#B9DE7C" />
            <circle cx="650" cy="380" r="3" fill="#B9DE7C" />
            <circle cx="1050" cy="150" r="3" fill="#B9DE7C" />
            <circle cx="1200" cy="420" r="3" fill="#B9DE7C" />
          </g>
        </svg>
        <div style={{ position: 'relative', textAlign: 'center', maxWidth: 700, margin: '0 auto 0' }}>
          <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 13, letterSpacing: 3, color: '#8BC53F', fontWeight: 600, marginBottom: 12 }}>• WHAT WE DELIVER</div>
          <h2 style={{ fontFamily: "'Poppins',sans-serif", fontSize: 38, fontWeight: 600, color: '#fff', margin: 0 }}>Our Services</h2>
        </div>
        <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 26, maxWidth: 1000, margin: '0 auto', paddingBottom: 70, transform: 'translateY(30px)', zIndex: 2 }}>
          {SERVICES.map((s) => <ServiceCard key={s.title} s={s} />)}
        </div>
      </div>

      {/* REGIONAL REACH */}
      <div style={{ background: '#FFFFFF', padding: '90px 64px' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
          <div style={{ position: 'relative', paddingTop: 14 }}>
            <div style={{ position: 'absolute', left: 0, top: 0, width: '60%', height: 2, background: '#8BC53F' }} />
            <div style={{ position: 'absolute', left: 0, top: 0, width: 2, height: '100%', background: '#8BC53F' }} />
            <div style={{ position: 'relative', marginLeft: 20, aspectRatio: '1/0.86', background: '#0A0F0B', clipPath: 'polygon(0 0, 92% 0, 100% 12%, 100% 100%, 0 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
              <GlobeSvg size={400} />
            </div>
          </div>
          <div>
            <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 13, letterSpacing: 3, color: '#6E9E2E', fontWeight: 600, marginBottom: 14 }}>REGIONAL REACH</div>
            <h2 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 38, fontWeight: 800, lineHeight: 1.12, margin: '0 0 20px', color: '#111412' }}>Expanding Frontiers: Our Middle Eastern Footprint</h2>
            <p style={{ fontSize: 14.5, color: '#3C403D', lineHeight: 1.75, margin: '0 0 22px', maxWidth: 520 }}>We deliver premier janitorial, corporate security and facility services across the region's fastest-growing business hubs. Our strategic coverage ensures your assets remain immaculate, compliant and strictly protected.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 30 }}>
              {REGIONS.map((r) => (
                <p key={r.name} style={{ fontSize: 14, color: '#3C403D', lineHeight: 1.7, margin: 0 }}><strong style={{ color: '#111412' }}>{r.name}:</strong> {r.body}</p>
              ))}
            </div>
            <Link
              to={ROUTES.expansionMarkets}
              onMouseEnter={regionalCta.onMouseEnter}
              onMouseLeave={regionalCta.onMouseLeave}
              style={regionalCta.mergeStyle(
                { display: 'inline-flex', alignItems: 'center', gap: 10, background: '#8BC53F', color: '#111412', padding: '15px 30px', fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: 13.5, letterSpacing: 0.5 },
                { background: '#9ED84A' }
              )}
            >
              LEARN MORE &nbsp;→
            </Link>
          </div>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div id="why-choose-us" style={{ position: 'relative', background: '#111412', padding: '110px 64px', overflow: 'hidden' }}>
        <img src="/assets/team-why-choose-bg-c.jpg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%', left: -2 }} />
        <div style={{ position: 'relative', maxWidth: 1240, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
            <span style={{ fontFamily: "'Poppins',sans-serif", fontSize: 12.5, letterSpacing: 3, fontWeight: 600, color: '#8BC53F' }}>OUR TEAM</span>
          </div>
          <h2 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 42, fontWeight: 800, color: '#fff', margin: '0 0 8px', textTransform: 'uppercase' }}>Professionals<br />You Can Trust.</h2>
          <p style={{ fontSize: 15, color: '#C9C9C9', lineHeight: 1.8, maxWidth: 480, margin: '0 0 10px' }}>Trained teams. Clear standards. A consistent, professional presence in every facility we serve.</p>
          <p style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 14.5, color: '#B9DE7C', lineHeight: 1.9, maxWidth: 480, margin: '0 0 34px' }}>فرق مدرّبة. معايير واضحة. حضور مهني ثابت في كل منشأة نخدمها.</p>
          <div style={{ display: 'inline-flex', flexDirection: 'column', gap: 6, border: '1.5px solid #8BC53F', padding: '16px 26px' }}>
            <span style={{ fontFamily: "'Poppins',sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: 2, color: '#fff' }}>UNIFORMED • TRAINED • ACCOUNTABLE</span>
            <span style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 13.5, fontWeight: 600, color: '#8BC53F' }}>زي موحّد • تدريب • مساءلة</span>
          </div>
        </div>
      </div>

      {/* INDUSTRIES */}
      <div style={{ background: '#F5F4F0', padding: '80px 0 90px', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto 46px', padding: '0 64px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }}>
          <div>
            <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 12.5, letterSpacing: 3, fontWeight: 600, color: '#6E9E2E', marginBottom: 12 }}>FOR DIVERSE INDUSTRIES</div>
            <h2 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 38, fontWeight: 800, lineHeight: 1.1, margin: 0, color: '#111412' }}>Industries We Take<br />Charge Of</h2>
          </div>
          <p style={{ fontSize: 14, color: '#3C403D', lineHeight: 1.8, margin: 0, paddingTop: 6 }}>We tailor our services to meet distinct sector needs, ensuring optimal cleanliness and safety. Whether it's a healthcare facility demanding strict sanitation standards, or a commercial property requiring meticulous attention to detail — discover how we cater to the specific cleaning needs across a broad range of sectors.</p>
        </div>
        <div style={{ overflow: 'hidden' }}>
          <div
            ref={trackRef}
            onMouseEnter={() => (pausedRef.current = true)}
            onMouseLeave={() => (pausedRef.current = false)}
            style={{ display: 'flex', gap: 0, width: 'max-content', willChange: 'transform' }}
          >
            {[...INDUSTRY_CARDS, ...INDUSTRY_CARDS].map((c, i) => <IndustryCard key={i} c={c} />)}
          </div>
        </div>
      </div>

      {/* LEADERSHIP */}
      <div style={{ background: '#111412', padding: '90px 64px' }}>
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 50px' }}>
          <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 13, letterSpacing: 3, color: '#8BC53F', fontWeight: 600, marginBottom: 10 }}>OPERATION TEAM</div>
          <h2 style={{ fontFamily: "'Poppins',sans-serif", fontSize: 34, fontWeight: 600, color: '#fff', margin: 0 }}>Meet Our Operations Leadership</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 20, maxWidth: 1300, margin: '0 auto' }}>
          <LeaderCard l={PRESIDENT} />
          {LEADERS.map((l) => <LeaderCard key={l.name} l={l} />)}
        </div>
      </div>

      {/* VISIBILITY & ACCOUNTABILITY */}
      <div style={{ background: '#FFFFFF', padding: '40px 0 90px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', alignItems: 'stretch', gap: 0 }}>
          <div style={{ position: 'relative', minHeight: 640, overflow: 'hidden' }}>
            <img src="/assets/inspection-tablet.jpg" alt="Facilities specialist running a live digital inspection" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }} />
            <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: '38%', background: 'linear-gradient(180deg, rgba(17,20,18,0) 0%, rgba(17,20,18,0.82) 100%)' }} />
            <div style={{ position: 'absolute', left: 34, bottom: 34, right: 34 }}>
              <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 11.5, letterSpacing: 2.4, color: '#B9DE7C', marginBottom: 8 }}>LIVE FROM SITE</div>
              <div style={{ fontFamily: "'Archivo',sans-serif", fontSize: 26, fontWeight: 800, color: '#FFFFFF', lineHeight: 1.15 }}>Every inspection,<br />recorded and shared.</div>
            </div>
          </div>
          <div style={{ padding: '96px 64px 0 70px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <span style={{ fontFamily: "'Poppins',sans-serif", fontSize: 12, letterSpacing: 3, fontWeight: 600, color: '#6E9E2E' }}>VISIBILITY &amp; ACCOUNTABILITY</span>
            </div>
            <h2 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 42, fontWeight: 800, lineHeight: 1.05, margin: '0 0 10px', color: '#111412', textTransform: 'uppercase' }}>Visibility in real time.<br />Accountability at every step.</h2>
            <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', textAlign: 'right', fontSize: 19, fontWeight: 600, color: '#6E9E2E', lineHeight: 1.7, margin: '0 0 34px', maxWidth: 560 }}>رؤية مباشرة. ومساءلة في كل خطوة.</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 44px' }}>
              {PILLARS.map((p) => (
                <div key={p.num} style={{ borderTop: '1px solid #E4E2DC', padding: '22px 0 4px' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 8 }}>
                    <span style={{ fontFamily: "'Archivo',sans-serif", fontSize: 12, fontWeight: 800, color: '#8BC53F', letterSpacing: 1 }}>{p.num}</span>
                    <span style={{ fontFamily: "'Poppins',sans-serif", fontSize: 13.5, fontWeight: 600, letterSpacing: 1.4, textTransform: 'uppercase', color: '#111412' }}>{p.title}</span>
                  </div>
                  <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', textAlign: 'right', fontSize: 14, fontWeight: 600, color: '#6E9E2E', marginBottom: 10 }}>{p.titleAr}</div>
                  <p style={{ fontSize: 13.5, color: '#3C403D', lineHeight: 1.7, margin: '0 0 6px' }}>{p.body}</p>
                  <p style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', textAlign: 'right', fontSize: 12, color: '#6E9E2E', lineHeight: 1.9, margin: 0 }}>{p.bodyAr}</p>
                </div>
              ))}
            </div>
            <div style={{ margin: '34px 0 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 28 }}>
              <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 14.5, fontWeight: 500, color: '#111412', lineHeight: 1.6 }}>One accountable team, one record of every visit — reviewed with you, not reported at you.</div>
              <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 13.5, fontWeight: 600, color: '#6E9E2E', flexShrink: 0 }}>فريق واحد مسؤول، وسجل واحد لكل زيارة.</div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTORS */}
      <div id="sectors" style={{ background: '#E5E5E1', padding: '100px 64px', position: 'relative', overflow: 'hidden' }}>
        <svg style={{ position: 'absolute', right: 0, top: -140, width: 520, height: 520, opacity: 0.5 }} viewBox="0 0 520 520"><circle cx="380" cy="140" r="300" fill="#DBDBD6" /></svg>
        <div style={{ position: 'relative', maxWidth: 1240, margin: '0 auto', display: 'grid', gridTemplateColumns: '0.95fr 1.05fr', gap: 70, alignItems: 'center' }}>
          <div style={{ position: 'relative', height: 520 }}>
            <img src="/assets/sector-jordan-medical-2.jpg" alt="Arab Medical Centre" style={{ position: 'absolute', left: 0, top: 0, width: '70%', height: '62%', objectFit: 'cover' }} />
            <img src="/assets/sector-university-jordan-2.jpg" alt="The University of Jordan" style={{ position: 'absolute', right: 0, bottom: 0, width: '62%', height: '58%', objectFit: 'cover', borderTop: '6px solid #E5E5E1', borderLeft: '6px solid #E5E5E1' }} />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#6E9E2E' }} />
              <span style={{ fontFamily: "'Poppins',sans-serif", fontSize: 12.5, letterSpacing: 3, fontWeight: 600, color: '#6E9E2E' }}>SECTORS WE SERVE</span>
            </div>
            <h2 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 44, fontWeight: 800, color: '#111412', lineHeight: 1.06, margin: '0 0 8px', textTransform: 'uppercase' }}>Specialized Care For<br />Every Environment.</h2>
            <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', textAlign: 'right', fontSize: 20, fontWeight: 600, color: '#6E9E2E', lineHeight: 1.7, margin: '0 0 30px' }}>عناية متخصصة لكل بيئة.</div>
            {SECTORS.map((sec, i) => {
              const open = openSector === i;
              return (
                <div key={sec.title} onClick={() => setOpenSector(open ? -1 : i)} style={{ borderTop: '1px solid #CFCFCA', padding: '20px 0', cursor: 'pointer' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
                    <span style={{ fontFamily: "'Poppins',sans-serif", fontSize: 20, fontWeight: 400, color: '#6E9E2E', lineHeight: 1, width: 14, flexShrink: 0 }}>{open ? '−' : '+'}</span>
                    <span style={{ fontFamily: "'Poppins',sans-serif", fontSize: 16, fontWeight: 600, letterSpacing: 0.6, textTransform: 'uppercase', color: '#111412' }}>{sec.title}</span>
                    <span style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 15, fontWeight: 600, color: '#6E9E2E', marginLeft: 'auto', flexShrink: 0 }}>{sec.titleAr}</span>
                  </div>
                  {open && (
                    <div style={{ padding: '14px 0 4px 32px' }}>
                      <p style={{ fontSize: 13.5, color: '#3C403D', lineHeight: 1.75, margin: '0 0 6px' }}>{sec.body}</p>
                      <p style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', textAlign: 'right', fontSize: 12.5, color: '#6E9E2E', lineHeight: 1.9, margin: 0 }}>{sec.bodyAr}</p>
                    </div>
                  )}
                </div>
              );
            })}
            <div style={{ borderTop: '1px solid #CFCFCA' }} />
          </div>
        </div>
      </div>

      {/* CTA BANNER */}
      <div style={{ position: 'relative', background: '#2A2E2A', padding: '100px 64px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Poppins',sans-serif", fontSize: 32, fontWeight: 700, color: '#fff', letterSpacing: 1, textTransform: 'uppercase', margin: '0 0 14px' }}>Your Facility. One Partner.</h2>
        <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 26, fontWeight: 600, color: '#8BC53F', margin: '0 0 26px' }}>منشأتك. شريك واحد.</div>
        <p style={{ fontSize: 15, color: '#C9C9C9', maxWidth: 640, margin: '0 auto 14px', lineHeight: 1.7, fontWeight: 300 }}>Bring cleaning, maintenance, security, and facilities management together under one accountable team.</p>
        <p style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 14.5, color: '#C9C9C9', maxWidth: 640, margin: '0 auto 34px', lineHeight: 1.9 }}>اجمع النظافة والصيانة والأمن وإدارة المرافق تحت مسؤولية فريق واحد.</p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
          <Link to={ROUTES.contact} style={{ background: '#8BC53F', color: '#111412', padding: '15px 30px', fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: 14 }}>Start A Conversation Today &nbsp;→</Link>
          <Link to={ROUTES.contact} style={{ border: '1px solid #6E736F', color: '#fff', padding: '15px 30px', fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: 14 }}>Request a Proposal &nbsp;→</Link>
        </div>
      </div>

      {/* TRUSTED BY */}
      <div style={{ background: '#F5F4F0', padding: '64px 64px' }}>
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 40px' }}>
          <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 13, letterSpacing: 3, color: '#6E9E2E', fontWeight: 600, marginBottom: 10 }}>TRUSTED BY</div>
          <h2 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 32, fontWeight: 800, color: '#111412', margin: 0 }}>Proven At Scale</h2>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'nowrap', gap: 44, maxWidth: 1400, margin: '0 auto' }}>
          {CLIENTS.map((c) => (
            <img key={c.alt} src={`/assets/${c.img}`} alt={c.alt} style={{ height: c.h, width: 'auto', objectFit: 'contain' }} />
          ))}
        </div>
      </div>

      <HomeFooter />
    </div>
  );
}

function HomeMobile() {
  const [menuOpenSector, setOpenSector] = useState(-1);
  const [openRegion, setOpenRegion] = useState(-1);
  const [openPillar, setOpenPillar] = useState(-1);

  return (
    <div style={{ width: '100%', maxWidth: 560, margin: '0 auto', background: '#FFFFFF', fontFamily: "'Poppins',sans-serif", color: '#111412', overflowX: 'hidden', position: 'relative' }}>
      <Header activeIndex={0} variant="home" />

      {/* HERO */}
      <div style={{ position: 'relative', background: '#111412', overflow: 'hidden', padding: '44px 20px 56px', clipPath: 'polygon(0 0, 100% 0, 100% 97%, 0 100%)' }}>
        <video src="/assets/hero-bg.mp4" autoPlay muted loop playsInline poster="/assets/hero-f0.jpg" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(6,10,8,0.9) 0%, rgba(6,10,8,0.65) 60%, rgba(6,10,8,0.5) 100%)' }} />
        <svg style={{ position: 'absolute', left: 0, top: -8, width: 160, height: '100%' }} viewBox="0 0 160 460" preserveAspectRatio="none">
          <polygon points="0,0 120,0 0,210" fill="#8BC53F" opacity={0.45} />
          <polygon points="0,0 62,0 0,380" fill="#6E9E2E" opacity={0.4} />
        </svg>
        <div style={{ position: 'relative' }}>
          <h1 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 38, fontWeight: 800, color: '#fff', lineHeight: 1.04, margin: '0 0 12px', textTransform: 'uppercase' }}>Your Facility. <span style={{ color: '#8BC53F' }}>One</span> Partner.</h1>
          <div style={{ width: 56, height: 3, background: '#8BC53F', marginBottom: 20 }} />
          <p style={{ fontSize: 15.5, color: '#fff', lineHeight: 1.6, margin: '0 0 12px', fontWeight: 400 }}>Bring cleaning, maintenance, security, and facilities management together under one accountable team.</p>
          <p style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 13.5, color: '#C9C9C9', lineHeight: 1.9, margin: '0 0 20px' }}>اجمع النظافة والصيانة والأمن وإدارة المرافق تحت مسؤولية فريق واحد.</p>
          <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 24, fontWeight: 600, color: '#8BC53F', margin: '0 0 26px' }}>منشأتك. شريك واحد.</div>
          <HeroCta mobile />
        </div>
      </div>

      {/* OUR STORY */}
      <div style={{ background: '#FFFFFF', padding: '44px 20px 40px' }}>
        <div style={{ fontSize: 11.5, letterSpacing: 3, fontWeight: 600, color: '#6E9E2E', marginBottom: 12, textAlign: 'center' }}>OUR STORY</div>
        <h2 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 30, fontWeight: 800, lineHeight: 1.05, margin: '0 0 18px', color: '#111412', textAlign: 'center' }}>Built In America.<br />Ready For The World.</h2>
        <img src="/assets/our-story-team.jpg" alt="Business partners shaking hands" style={{ width: '100%', height: 200, objectFit: 'cover', display: 'block', margin: '0 0 20px' }} />
        <p style={{ fontSize: 14.5, color: '#3C403D', lineHeight: 1.75, margin: '0 0 10px' }}>Founded in the United States by a visionary facilities management entrepreneur, our company grew into one of the nation's largest service organizations — 16,000+ employees and 4,000+ service providers across all 50 states.</p>
        <p style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 13, color: '#6E9E2E', lineHeight: 1.9, margin: '0 0 22px' }}>تأسست شركتنا في الولايات المتحدة، ونمت لتصبح واحدة من أكبر مؤسسات الخدمات في البلاد.</p>
        <Link to={ROUTES.aboutUs} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, fontSize: 12.5, fontWeight: 600, letterSpacing: 2, color: '#111412', paddingBottom: 8, borderBottom: '2px solid #8BC53F', width: 'max-content', margin: '0 auto' }}>
          LEARN MORE <span style={{ color: '#8BC53F' }}>→</span>
        </Link>
      </div>

      {/* SERVICES */}
      <div style={{ position: 'relative', background: 'linear-gradient(150deg, #1C201B 0%, #2A2E2A 50%, #1C201B 100%)', padding: '48px 0 40px', overflow: 'hidden' }}>
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.35 }} preserveAspectRatio="none" viewBox="0 0 390 800">
          <defs><pattern id="mDots" width="24" height="24" patternUnits="userSpaceOnUse"><circle cx="1.2" cy="1.2" r="1.2" fill="#B9DE7C" /></pattern></defs>
          <rect width="390" height="800" fill="url(#mDots)" />
          <g stroke="#8BC53F" strokeWidth={1} fill="none" opacity={0.45}>
            <path d="M-40 800 L300 0" />
            <path d="M120 800 L460 0" />
          </g>
        </svg>
        <div style={{ position: 'relative', textAlign: 'center', marginBottom: 26, padding: '0 20px' }}>
          <div style={{ fontSize: 12, letterSpacing: 3, color: '#8BC53F', fontWeight: 600, marginBottom: 10 }}>WHAT WE DELIVER</div>
          <h2 style={{ fontSize: 28, fontWeight: 600, color: '#fff', margin: 0 }}>Our Services</h2>
        </div>
        <div className="hscroll" style={{ position: 'relative', overflowX: 'auto', overflowY: 'hidden', padding: '0 20px 6px' }}>
          <div style={{ display: 'flex', gap: 12, width: 'max-content', alignItems: 'stretch' }}>
            {SERVICES.map((s) => <ServiceCard key={s.title} s={s} mobile />)}
          </div>
        </div>
      </div>

      {/* REGIONAL REACH */}
      <div style={{ background: '#FFFFFF', padding: '44px 20px', textAlign: 'center' }}>
        <div style={{ fontSize: 11.5, letterSpacing: 3, color: '#6E9E2E', fontWeight: 600, marginBottom: 12 }}>REGIONAL REACH</div>
        <h2 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 28, fontWeight: 800, lineHeight: 1.12, margin: '0 0 18px', color: '#111412' }}>Expanding Frontiers: Our Middle Eastern Footprint</h2>
        <div style={{ position: 'relative', margin: '0 0 20px', aspectRatio: '1/0.8', background: '#0A0F0B', clipPath: 'polygon(0 0, 92% 0, 100% 12%, 100% 100%, 0 100%)', overflow: 'hidden' }}>
          <GlobeSvg size={340} />
        </div>
        <p style={{ fontSize: 14, color: '#3C403D', lineHeight: 1.75, margin: '0 0 18px' }}>We deliver premier janitorial, corporate security and facility services across the region's fastest-growing business hubs. Our strategic coverage ensures your assets remain immaculate, compliant and strictly protected.</p>
        <div style={{ marginBottom: 24, maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
          {REGIONS.map((r, i) => {
            const open = openRegion === i;
            return (
              <div key={r.name} onClick={() => setOpenRegion(open ? -1 : i)} style={{ borderTop: '1px solid #E4E2DC', padding: '16px 0', cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ fontSize: 20, fontWeight: 400, color: '#6E9E2E', lineHeight: 1 }}>{open ? '−' : '+'}</span>
                  <span style={{ fontSize: 13.5, fontWeight: 700, color: '#111412' }}>{r.name}</span>
                </div>
                {open && <p style={{ fontSize: 13.5, color: '#3C403D', lineHeight: 1.7, margin: '10px 0 0' }}>{r.body}</p>}
              </div>
            );
          })}
          <div style={{ borderTop: '1px solid #E4E2DC' }} />
        </div>
        <Link to={ROUTES.expansionMarkets} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: '#8BC53F', color: '#111412', padding: '14px 26px', fontWeight: 600, fontSize: 13.5, letterSpacing: 0.5 }}>LEARN MORE <span>→</span></Link>
      </div>

      {/* OUR TEAM */}
      <div style={{ position: 'relative', background: '#111412', padding: '56px 20px 60px', overflow: 'hidden' }}>
        <img src="/assets/team-why-choose-bg-c.jpg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: '60% 15%' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(10,14,11,0.55) 0%, rgba(10,14,11,0.82) 100%)' }} />
        <div style={{ position: 'relative' }}>
          <div style={{ fontSize: 11.5, letterSpacing: 3, fontWeight: 600, color: '#8BC53F', marginBottom: 12, textAlign: 'center' }}>OUR TEAM</div>
          <h2 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 30, fontWeight: 800, color: '#fff', margin: '0 0 12px', textTransform: 'uppercase', textAlign: 'center' }}>Professionals<br />You Can Trust.</h2>
          <p style={{ fontSize: 14.5, color: '#C9C9C9', lineHeight: 1.8, margin: '0 0 10px' }}>Trained teams. Clear standards. A consistent, professional presence in every facility we serve.</p>
          <p style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 13.5, color: '#B9DE7C', lineHeight: 1.9, margin: '0 0 16px' }}>فرق مدرّبة. معايير واضحة. حضور مهني ثابت في كل منشأة نخدمها.</p>
          <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 20, fontWeight: 600, color: '#8BC53F', margin: '0 0 22px' }}>محترفون جديرون بالثقة.</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: 1.6, color: '#fff' }}>UNIFORMED • TRAINED • ACCOUNTABLE</span>
            <span style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 13, fontWeight: 600, color: '#8BC53F' }}>زي موحّد • تدريب • مساءلة</span>
          </div>
        </div>
      </div>

      {/* INDUSTRIES */}
      <div style={{ background: '#F5F4F0', padding: '44px 0 48px' }}>
        <div style={{ padding: '0 20px', marginBottom: 22, textAlign: 'center' }}>
          <div style={{ fontSize: 11.5, letterSpacing: 3, fontWeight: 600, color: '#6E9E2E', marginBottom: 10 }}>FOR DIVERSE INDUSTRIES</div>
          <h2 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 28, fontWeight: 800, lineHeight: 1.1, margin: '0 0 14px', color: '#111412' }}>Industries We Take<br />Charge Of</h2>
          <p style={{ fontSize: 14, color: '#3C403D', lineHeight: 1.8, margin: 0 }}>We tailor our services to meet distinct sector needs, ensuring optimal cleanliness and safety. Whether it's a healthcare facility demanding strict sanitation standards, or a commercial property requiring meticulous attention to detail — discover how we cater to the specific cleaning needs across a broad range of sectors.</p>
        </div>
        <div className="hscroll" style={{ overflowX: 'auto', overflowY: 'hidden', padding: '0 20px 6px' }}>
          <div style={{ display: 'flex', gap: 12, width: 'max-content' }}>
            {INDUSTRY_CARDS.map((c) => <IndustryCard key={c.title} c={c} mobile />)}
          </div>
        </div>
      </div>

      {/* LEADERSHIP */}
      <div style={{ background: '#111412', padding: '48px 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <div style={{ fontSize: 12, letterSpacing: 3, color: '#8BC53F', fontWeight: 600, marginBottom: 10 }}>OPERATION TEAM</div>
          <h2 style={{ fontSize: 26, fontWeight: 600, color: '#fff', margin: 0 }}>Meet Our Operations Leadership</h2>
        </div>
        <div className="hscroll" style={{ overflowX: 'auto', overflowY: 'hidden', padding: '0 20px 6px', margin: '0 -20px' }}>
          <div style={{ display: 'flex', gap: 14, width: 'max-content' }}>
            {[PRESIDENT, ...LEADERS].map((l) => (
              <div key={l.name} style={{ flex: '0 0 150px', textAlign: 'center' }}>
                <img src={`/assets/${l.img}`} alt={l.name} style={{ width: 150, height: 188, objectFit: 'cover', objectPosition: 'center top', border: '2px solid #8BC53F', borderRadius: 8, display: 'block', marginBottom: 12 }} />
                <div style={{ fontSize: 13, fontWeight: 600, color: '#fff' }}>{l.name}</div>
                <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", fontSize: 13, fontWeight: 600, color: '#8BC53F', marginTop: 5 }}>{l.nameAr}</div>
                <div style={{ fontSize: 9.5, color: '#8BC53F', letterSpacing: 0.5, marginTop: 4 }}>{l.role}</div>
                <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", fontSize: 10, color: '#8BC53F', marginTop: 2 }}>{l.roleAr}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* VISIBILITY & ACCOUNTABILITY */}
      <div style={{ background: '#FFFFFF', padding: '0 0 48px' }}>
        <div style={{ position: 'relative', height: 300, overflow: 'hidden' }}>
          <img src="/assets/inspection-tablet.jpg" alt="Facilities specialist running a live digital inspection" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }} />
          <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: '55%', background: 'linear-gradient(180deg, rgba(17,20,18,0) 0%, rgba(17,20,18,0.85) 100%)' }} />
          <div style={{ position: 'absolute', left: 20, right: 20, bottom: 22 }}>
            <div style={{ fontSize: 11, letterSpacing: 2.4, color: '#B9DE7C', marginBottom: 8 }}>LIVE FROM SITE</div>
            <div style={{ fontFamily: "'Archivo',sans-serif", fontSize: 22, fontWeight: 800, color: '#FFFFFF', lineHeight: 1.15 }}>Every inspection,<br />recorded and shared.</div>
          </div>
        </div>
        <div style={{ padding: '36px 20px 0' }}>
          <div style={{ fontSize: 11.5, letterSpacing: 3, fontWeight: 600, color: '#6E9E2E', marginBottom: 12, textAlign: 'center' }}>VISIBILITY &amp; ACCOUNTABILITY</div>
          <h2 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 27, fontWeight: 800, lineHeight: 1.08, margin: '0 0 10px', color: '#111412', textTransform: 'uppercase', textAlign: 'center' }}>Visibility in real time. Accountability at every step.</h2>
          <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 17, fontWeight: 600, color: '#6E9E2E', lineHeight: 1.7, margin: '0 0 24px' }}>رؤية مباشرة. ومساءلة في كل خطوة.</div>
          {PILLARS.map((p, i) => {
            const open = openPillar === i;
            return (
              <div key={p.num} onClick={() => setOpenPillar(open ? -1 : i)} style={{ borderTop: '1px solid #E4E2DC', padding: '18px 0 4px', cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 8 }}>
                  <span style={{ fontFamily: "'Archivo',sans-serif", fontSize: 12, fontWeight: 800, color: '#8BC53F', letterSpacing: 1 }}>{p.num}</span>
                  <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: 1.2, textTransform: 'uppercase', color: '#111412', flex: 1 }}>{p.title}</span>
                  <span style={{ fontSize: 18, fontWeight: 400, color: '#6E9E2E' }}>{open ? '−' : '+'}</span>
                </div>
                {open && (
                  <>
                    <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', textAlign: 'right', fontSize: 13.5, fontWeight: 600, color: '#6E9E2E', marginBottom: 8 }}>{p.titleAr}</div>
                    <p style={{ fontSize: 13.5, color: '#3C403D', lineHeight: 1.7, margin: '0 0 6px' }}>{p.body}</p>
                    <p style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', textAlign: 'right', fontSize: 12, color: '#6E9E2E', lineHeight: 1.9, margin: '0 0 4px' }}>{p.bodyAr}</p>
                  </>
                )}
              </div>
            );
          })}
          <div style={{ borderTop: '1px solid #E4E2DC', marginTop: 26, paddingTop: 22, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ fontSize: 14.5, fontWeight: 500, color: '#111412', lineHeight: 1.6 }}>One accountable team, one record of every visit — reviewed with you, not reported at you.</div>
            <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 13, fontWeight: 600, color: '#6E9E2E' }}>فريق واحد مسؤول، وسجل واحد لكل زيارة.</div>
          </div>
        </div>
      </div>

      {/* SECTORS */}
      <div style={{ background: '#E5E5E1', padding: '48px 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 12 }}>
          <span style={{ fontSize: 11.5, letterSpacing: 3, fontWeight: 600, color: '#6E9E2E' }}>SECTORS WE SERVE</span>
        </div>
        <h2 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 30, fontWeight: 800, color: '#111412', lineHeight: 1.06, margin: '0 0 8px', textTransform: 'uppercase', textAlign: 'center' }}>Specialized Care For<br />Every Environment.</h2>
        <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 18, fontWeight: 600, color: '#6E9E2E', lineHeight: 1.7, margin: '0 0 20px', textAlign: 'center' }}>عناية متخصصة لكل بيئة.</div>
        <div style={{ position: 'relative', height: 260, marginBottom: 24 }}>
          <img src="/assets/sector-jordan-medical-2.jpg" alt="Arab Medical Centre" style={{ position: 'absolute', left: 0, top: 0, width: '72%', height: '62%', objectFit: 'cover' }} />
          <img src="/assets/sector-university-jordan-2.jpg" alt="The University of Jordan" style={{ position: 'absolute', right: 0, bottom: 0, width: '64%', height: '58%', objectFit: 'cover', borderTop: '6px solid #E5E5E1', borderLeft: '6px solid #E5E5E1' }} />
        </div>
        {SECTORS.map((sec, i) => {
          const open = menuOpenSector === i;
          return (
            <div key={sec.title} onClick={() => setOpenSector(open ? -1 : i)} style={{ borderTop: '1px solid #CFCFCA', padding: '18px 0', cursor: 'pointer' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 20, fontWeight: 400, color: '#6E9E2E', lineHeight: 1 }}>{open ? '−' : '+'}</span>
                <span style={{ fontSize: 14.5, fontWeight: 600, letterSpacing: 0.4, textTransform: 'uppercase', color: '#111412' }}>{sec.title}</span>
              </div>
              <span style={{ display: 'block', fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 13.5, fontWeight: 600, color: '#6E9E2E', marginTop: 4 }}>{sec.titleAr}</span>
              {open && (
                <div style={{ padding: '12px 0 2px 28px' }}>
                  <p style={{ fontSize: 13.5, color: '#3C403D', lineHeight: 1.75, margin: '0 0 6px' }}>{sec.body}</p>
                  <p style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', textAlign: 'right', fontSize: 12.5, color: '#6E9E2E', lineHeight: 1.9, margin: 0 }}>{sec.bodyAr}</p>
                </div>
              )}
            </div>
          );
        })}
        <div style={{ borderTop: '1px solid #CFCFCA' }} />
      </div>

      {/* CTA */}
      <div style={{ background: '#2A2E2A', padding: '52px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#fff', letterSpacing: 0.6, textTransform: 'uppercase', margin: '0 0 12px' }}>Your Facility. One Partner.</h2>
        <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 21, fontWeight: 600, color: '#8BC53F', margin: '0 0 20px' }}>منشأتك. شريك واحد.</div>
        <p style={{ fontSize: 14.5, color: '#C9C9C9', margin: '0 0 12px', lineHeight: 1.7, fontWeight: 300 }}>Bring cleaning, maintenance, security, and facilities management together under one accountable team.</p>
        <p style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 13.5, color: '#C9C9C9', margin: '0 0 26px', lineHeight: 1.9 }}>اجمع النظافة والصيانة والأمن وإدارة المرافق تحت مسؤولية فريق واحد.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Link to={ROUTES.contact} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: '#8BC53F', color: '#111412', padding: '15px 20px', fontWeight: 600, fontSize: 14 }}>Start A Conversation Today <span>→</span></Link>
          <Link to={ROUTES.contact} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, border: '1px solid #6E736F', color: '#fff', padding: '15px 20px', fontWeight: 600, fontSize: 14 }}>Request a Proposal <span>→</span></Link>
        </div>
      </div>

      {/* TRUSTED BY */}
      <div style={{ background: '#F5F4F0', padding: '44px 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: 26 }}>
          <div style={{ fontSize: 12, letterSpacing: 3, color: '#6E9E2E', fontWeight: 600, marginBottom: 10 }}>TRUSTED BY</div>
          <h2 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 26, fontWeight: 800, color: '#111412', margin: 0 }}>Proven At Scale</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px 18px', alignItems: 'center', justifyItems: 'center' }}>
          <img src="/assets/client-meijer-trim.png" alt="Meijer" style={{ maxWidth: '100%', height: 38, objectFit: 'contain' }} />
          <img src="/assets/client-target-trim.png" alt="Target" style={{ maxWidth: '100%', height: 34, objectFit: 'contain' }} />
          <img src="/assets/client-annarbor-trim-c.png" alt="Ann Arbor Public Schools" style={{ maxWidth: '100%', height: 50, objectFit: 'contain' }} />
          <img src="/assets/client-emu.webp" alt="Eastern Michigan University" style={{ maxWidth: '100%', height: 32, objectFit: 'contain' }} />
          <img src="/assets/client-umich-trim.png" alt="University of Michigan" style={{ maxWidth: '100%', height: 30, objectFit: 'contain' }} />
          <img src="/assets/client-trinity-trim.png" alt="Trinity Health" style={{ maxWidth: '100%', height: 48, objectFit: 'contain' }} />
        </div>
      </div>

      <HomeFooter />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <div className="desktop-only"><HomeDesktop /></div>
      <div className="mobile-only"><HomeMobile /></div>
    </>
  );
}
