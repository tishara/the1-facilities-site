import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { PageFooter } from '../components/Footer';
import { useHover } from '../hooks/useHover';
import { ROUTES } from '../routes';

const SECTOR_CARDS = [
  { img: 'sectors-healthcare.jpg', alt: 'Healthcare facility', title: 'Healthcare & Medical Facilities', titleAr: 'مرافق الرعاية الصحية والمنشآت الطبية', body: 'Hospitals • Clinics • Medical offices • Specialty care' },
  { img: 'sectors-hospitality.jpg', alt: 'Hotel lobby', title: 'Hotels & Hospitality', titleAr: 'الفنادق والضيافة', body: 'Hotels • Resorts • Guest facilities • Public spaces' },
  { img: 'sectors-education.jpg', alt: 'University hallway', title: 'Additional & Specialized Sectors', titleAr: 'قطاعات إضافية ومتخصصة', body: 'K-12 schools • Universities • Commercial • Mixed-use' },
];

const EDUCATION_CARDS = [
  { num: '01', title: 'Daily Campus Care', titleAr: 'العناية اليومية بالحرم', body: 'Classrooms, corridors, restrooms, offices, and shared spaces.' },
  { num: '02', title: 'Specialty Floor Care', titleAr: 'العناية المتخصصة بالأرضيات', body: 'Scrubbing, stripping, waxing, and scheduled restorative care.' },
  { num: '03', title: 'Measurable Quality', titleAr: 'جودة قابلة للقياس', body: 'Digital inspections, transparent reporting, and rapid follow-up.' },
];

function SectorCard({ c, mobile = false }: { c: typeof SECTOR_CARDS[number]; mobile?: boolean }) {
  const { onMouseEnter, onMouseLeave, mergeStyle } = useHover();
  const base: React.CSSProperties = mobile
    ? { overflow: 'hidden' }
    : { overflow: 'hidden', transition: 'transform 0.3s ease, box-shadow 0.3s ease' };
  const hoverStyle: React.CSSProperties = { transform: 'translateY(-8px)', boxShadow: '0 18px 34px rgba(0,0,0,0.15)' };
  return (
    <div
      style={mobile ? base : mergeStyle(base, hoverStyle)}
      onMouseEnter={mobile ? undefined : onMouseEnter}
      onMouseLeave={mobile ? undefined : onMouseLeave}
    >
      <div style={{ height: mobile ? 180 : 220, overflow: 'hidden' }}>
        <img src={`/assets/${c.img}`} alt={c.alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div style={{ background: '#F5F4F0', padding: mobile ? 20 : 26 }}>
        <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: mobile ? 15 : 16, fontWeight: 600, textTransform: 'uppercase', marginBottom: 4 }}>{c.title}</div>
        <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: mobile ? 13 : 14, fontWeight: 600, color: '#6E9E2E', marginBottom: mobile ? 10 : 12 }}>{c.titleAr}</div>
        <p style={{ fontSize: mobile ? 13 : 13.5, color: '#3C403D', lineHeight: 1.7, margin: 0 }}>{c.body}</p>
      </div>
    </div>
  );
}

function EducationCard({ c, mobile = false }: { c: typeof EDUCATION_CARDS[number]; mobile?: boolean }) {
  const { onMouseEnter, onMouseLeave, mergeStyle } = useHover();
  const base: React.CSSProperties = mobile
    ? { background: '#fff', padding: 22 }
    : { background: '#fff', padding: 30, transition: 'transform 0.25s ease' };
  const hoverStyle: React.CSSProperties = { transform: 'translateY(-6px)' };
  return (
    <div
      style={mobile ? base : mergeStyle(base, hoverStyle)}
      onMouseEnter={mobile ? undefined : onMouseEnter}
      onMouseLeave={mobile ? undefined : onMouseLeave}
    >
      <div style={{ fontFamily: "'Archivo',sans-serif", fontSize: mobile ? 14 : 15, fontWeight: 800, color: '#8BC53F', marginBottom: mobile ? 8 : 10 }}>{c.num}</div>
      <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: mobile ? 14 : 15, fontWeight: 600, textTransform: 'uppercase', marginBottom: 4 }}>{c.title}</div>
      <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: mobile ? 12 : 13, fontWeight: 600, color: '#6E9E2E', marginBottom: mobile ? 10 : 12 }}>{c.titleAr}</div>
      <p style={{ fontSize: 13, color: '#3C403D', lineHeight: 1.7, margin: 0 }}>{c.body}</p>
    </div>
  );
}

function StartConversationCta({ mobile = false }: { mobile?: boolean }) {
  const { onMouseEnter, onMouseLeave, mergeStyle } = useHover();
  const base: React.CSSProperties = mobile
    ? { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: '#8BC53F', color: '#111412', padding: '15px 26px', fontWeight: 600, fontSize: 14, transition: 'gap 0.25s ease, background 0.25s ease' }
    : { display: 'inline-flex', alignItems: 'center', gap: 10, background: '#8BC53F', color: '#111412', padding: '16px 32px', fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: 14, transition: 'background 0.25s ease' };
  const hoverStyle: React.CSSProperties = mobile ? { gap: 14, background: '#9ED84A' } : { background: '#9ED84A' };
  return (
    <Link to={ROUTES.contact} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} style={mergeStyle(base, hoverStyle)}>
      {mobile ? <>Start A Conversation Today <span>→</span></> : <>Start A Conversation Today &nbsp;→</>}
    </Link>
  );
}

function SectorsDesktop() {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", color: '#111412', overflowX: 'auto', minWidth: 1360 }}>
      <Header activeIndex={3} variant="inner" />

      {/* HERO */}
      <div style={{ position: 'relative', background: '#111412', overflow: 'hidden', padding: '60px 64px 100px', clipPath: 'polygon(0 0, 100% 0, 100% 94%, 0 100%)' }}>
        <img src="/assets/sectors-hero.jpg" alt="Modern mixed-use building atrium" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.55 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg, rgba(6,10,8,0.92) 0%, rgba(6,10,8,0.65) 55%, rgba(6,10,8,0.4) 100%)' }} />
        <div style={{ position: 'relative', maxWidth: 760, animation: 'std-rise 0.8s ease-out both' }}>
          <div style={{ fontSize: 12.5, color: '#C9C9C9', letterSpacing: 1, marginBottom: 22 }}><Link to={ROUTES.home} style={{ color: '#C9C9C9' }}>Home</Link> / Sectors We Serve</div>
          <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 12, letterSpacing: 3, fontWeight: 600, color: '#8BC53F', marginBottom: 16 }}>SECTORS WE SERVE</div>
          <h1 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 52, fontWeight: 800, color: '#fff', lineHeight: 1.08, margin: '0 0 18px', textTransform: 'uppercase' }}>Specialized Care For<br />Every Environment.</h1>
          <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 26, fontWeight: 600, color: '#8BC53F' }}>عناية متخصصة لكل بيئة.</div>
        </div>
      </div>

      {/* 3 SECTOR CARDS */}
      <div style={{ background: '#FFFFFF', padding: '90px 64px' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 26 }}>
          {SECTOR_CARDS.map((c) => <SectorCard key={c.title} c={c} />)}
        </div>
      </div>

      {/* SCHOOLS & UNIVERSITIES */}
      <div style={{ background: '#F5F4F0', padding: '90px 64px' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 50px' }}>
            <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 12.5, letterSpacing: 3, fontWeight: 600, color: '#6E9E2E', marginBottom: 6 }}>EDUCATION FACILITY SERVICES</div>
            <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 14, fontWeight: 600, color: '#6E9E2E', marginBottom: 20 }}>حلول المرافق التعليمية</div>
            <h2 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 36, fontWeight: 800, color: '#111412', margin: 0 }}>Clean, Safe Spaces Built For Learning.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 26 }}>
            {EDUCATION_CARDS.map((c) => <EducationCard key={c.num} c={c} />)}
          </div>
        </div>
      </div>

      {/* BAND */}
      <div style={{ background: '#8BC53F', padding: '44px 64px', textAlign: 'center' }}>
        <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 16, fontWeight: 700, letterSpacing: 1, color: '#111412', textTransform: 'uppercase', marginBottom: 8 }}>Service Plans Tailored To Each Sector's Needs</div>
        <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 15, fontWeight: 600, color: '#111412' }}>خطط خدمة مصممة وفق احتياجات كل قطاع</div>
      </div>

      {/* CTA */}
      <div style={{ background: '#2A2E2A', padding: '90px 64px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Poppins',sans-serif", fontSize: 28, fontWeight: 700, color: '#fff', letterSpacing: 0.5, textTransform: 'uppercase', margin: '0 0 26px' }}>Find the plan built for your sector</h2>
        <StartConversationCta />
      </div>

      <PageFooter />
    </div>
  );
}

function SectorsMobile() {
  return (
    <div style={{ width: '100%', maxWidth: 560, margin: '0 auto', background: '#FFFFFF', fontFamily: "'Poppins',sans-serif", color: '#111412', overflowX: 'hidden', position: 'relative' }}>
      <Header activeIndex={3} variant="inner" />

      {/* HERO */}
      <div style={{ position: 'relative', background: '#111412', overflow: 'hidden', padding: '44px 20px 52px', clipPath: 'polygon(0 0, 100% 0, 100% 97%, 0 100%)' }}>
        <img src="/assets/sectors-hero.jpg" alt="Modern mixed-use building atrium" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.55 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(6,10,8,0.92) 0%, rgba(6,10,8,0.68) 55%, rgba(6,10,8,0.45) 100%)' }} />
        <div style={{ position: 'relative' }}>
          <div style={{ fontSize: 11.5, color: '#C9C9C9', letterSpacing: 0.5, marginBottom: 16 }}><Link to={ROUTES.home} style={{ color: '#C9C9C9' }}>Home</Link> / Sectors We Serve</div>
          <div style={{ fontSize: 11.5, letterSpacing: 3, fontWeight: 600, color: '#8BC53F', marginBottom: 12 }}>SECTORS WE SERVE</div>
          <h1 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 30, fontWeight: 800, color: '#fff', lineHeight: 1.12, margin: '0 0 14px', textTransform: 'uppercase' }}>Specialized Care For Every Environment.</h1>
          <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 19, fontWeight: 600, color: '#8BC53F' }}>عناية متخصصة لكل بيئة.</div>
        </div>
      </div>

      {/* 3 SECTOR CARDS */}
      <div style={{ background: '#FFFFFF', padding: '44px 20px', display: 'flex', flexDirection: 'column', gap: 18 }}>
        {SECTOR_CARDS.map((c) => <SectorCard key={c.title} c={c} mobile />)}
      </div>

      {/* EDUCATION */}
      <div style={{ background: '#F5F4F0', padding: '44px 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: 22 }}>
          <div style={{ fontSize: 11.5, letterSpacing: 3, fontWeight: 600, color: '#6E9E2E', marginBottom: 8 }}>EDUCATION FACILITY SERVICES</div>
          <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 13, fontWeight: 600, color: '#6E9E2E', marginBottom: 16 }}>حلول المرافق التعليمية</div>
          <h2 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 23, fontWeight: 800, color: '#111412', margin: 0, lineHeight: 1.25 }}>Clean, Safe Spaces Built For Learning.</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {EDUCATION_CARDS.map((c) => <EducationCard key={c.num} c={c} mobile />)}
        </div>
      </div>

      {/* BAND */}
      <div style={{ background: '#8BC53F', padding: '36px 20px', textAlign: 'center' }}>
        <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 14, fontWeight: 700, letterSpacing: 0.5, color: '#111412', textTransform: 'uppercase', marginBottom: 8, lineHeight: 1.4 }}>Service Plans Tailored To Each Sector's Needs</div>
        <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 13.5, fontWeight: 600, color: '#111412' }}>خطط خدمة مصممة وفق احتياجات كل قطاع</div>
      </div>

      {/* CTA */}
      <div style={{ background: '#2A2E2A', padding: '52px 20px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Poppins',sans-serif", fontSize: 22, fontWeight: 700, color: '#fff', letterSpacing: 0.5, textTransform: 'uppercase', margin: '0 0 22px', lineHeight: 1.35 }}>Find the plan built for your sector</h2>
        <StartConversationCta mobile />
      </div>

      <PageFooter />
    </div>
  );
}

export default function Sectors() {
  return (
    <>
      <div className="desktop-only"><SectorsDesktop /></div>
      <div className="mobile-only"><SectorsMobile /></div>
    </>
  );
}
