import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { PageFooter } from '../components/Footer';
import { useHover } from '../hooks/useHover';
import { ROUTES } from '../routes';

const PILLARS = [
  { num: '01', title: 'Live Data & Dashboards', titleAr: 'بيانات مباشرة ولوحات أداء', body: 'See activity, completion, and performance across every facility.' },
  { num: '02', title: 'Digital Inspections', titleAr: 'فحوصات رقمية', body: 'Standardized mobile inspections create measurable quality records.' },
  { num: '03', title: 'Transparent Reporting', titleAr: 'تقارير شفافة', body: 'Clear reports reveal trends, priorities, and opportunities to improve.' },
  { num: '04', title: 'Faster Response', titleAr: 'استجابة أسرع', body: 'Connected workflows route issues quickly to the accountable team.' },
];

function InspectionChecklistRow({ label, labelAr, checked, mobile }: { label: string; labelAr: string; checked: boolean; mobile?: boolean }) {
  return (
    <div style={{ background: '#fff', borderRadius: 8, padding: mobile ? '10px 12px' : '12px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div>
        <div style={{ fontSize: mobile ? 11 : 12.5, fontWeight: 600, color: '#111412' }}>{label}</div>
        <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: mobile ? 9.5 : 10.5, color: '#6E9E2E' }}>{labelAr}</div>
      </div>
      {checked ? (
        <span style={{ width: mobile ? 18 : 20, height: mobile ? 18 : 20, borderRadius: '50%', background: '#8BC53F', color: '#fff', fontSize: mobile ? 11 : 12, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>✓</span>
      ) : (
        <span style={{ width: mobile ? 18 : 20, height: mobile ? 18 : 20, borderRadius: '50%', border: '2px solid #CFCFCA', flexShrink: 0 }} />
      )}
    </div>
  );
}

function PillarCard({ p, mobile = false }: { p: typeof PILLARS[number]; mobile?: boolean }) {
  const { onMouseEnter, onMouseLeave, mergeStyle } = useHover();
  const base: React.CSSProperties = mobile
    ? { background: '#fff', padding: 24 }
    : { background: '#fff', padding: 32, transition: 'transform 0.25s ease, box-shadow 0.25s ease' };
  const hoverStyle: React.CSSProperties = { transform: 'translateY(-6px)', boxShadow: '0 16px 30px rgba(0,0,0,0.1)' };
  return (
    <div
      style={mobile ? base : mergeStyle(base, hoverStyle)}
      onMouseEnter={mobile ? undefined : onMouseEnter}
      onMouseLeave={mobile ? undefined : onMouseLeave}
    >
      <div style={{ fontFamily: "'Archivo',sans-serif", fontSize: mobile ? 13 : 14, fontWeight: 800, color: '#8BC53F', letterSpacing: 1, marginBottom: mobile ? 8 : 10 }}>{p.num}</div>
      <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: mobile ? 14.5 : 16, fontWeight: 600, textTransform: 'uppercase', marginBottom: 4 }}>{p.title}</div>
      <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: mobile ? 12.5 : 14, fontWeight: 600, color: '#6E9E2E', marginBottom: mobile ? 10 : 12 }}>{p.titleAr}</div>
      <p style={{ fontSize: mobile ? 13 : 14, color: '#3C403D', lineHeight: 1.7, margin: 0 }}>{p.body}</p>
    </div>
  );
}

function RequestDemoCta({ mobile = false }: { mobile?: boolean }) {
  const { onMouseEnter, onMouseLeave, mergeStyle } = useHover();
  const base: React.CSSProperties = mobile
    ? { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: '#8BC53F', color: '#111412', padding: '15px 26px', fontWeight: 600, fontSize: 14, transition: 'gap 0.25s ease, background 0.25s ease' }
    : { display: 'inline-flex', alignItems: 'center', gap: 10, background: '#8BC53F', color: '#111412', padding: '16px 32px', fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: 14, transition: 'background 0.25s ease' };
  const hoverStyle: React.CSSProperties = mobile ? { gap: 14, background: '#9ED84A' } : { background: '#9ED84A' };
  return (
    <Link to={ROUTES.contact} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} style={mergeStyle(base, hoverStyle)}>
      {mobile ? <>Request A Demo <span>→</span></> : <>Request A Demo &nbsp;→</>}
    </Link>
  );
}

function TechnologyDesktop() {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", color: '#111412', overflowX: 'auto', minWidth: 1360 }}>
      <Header activeIndex={-1} variant="inner" />

      {/* HERO */}
      <div style={{ position: 'relative', background: '#111412', overflow: 'hidden', padding: '60px 64px 100px', clipPath: 'polygon(0 0, 100% 0, 100% 94%, 0 100%)' }}>
        <img src="/assets/tech-hero.jpg" alt="Facilities staff member with a tablet" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.55 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg, rgba(6,10,8,0.92) 0%, rgba(6,10,8,0.65) 55%, rgba(6,10,8,0.4) 100%)' }} />
        <div style={{ position: 'relative', maxWidth: 760, animation: 'std-rise 0.8s ease-out both' }}>
          <div style={{ fontSize: 12.5, color: '#C9C9C9', letterSpacing: 1, marginBottom: 22 }}><Link to={ROUTES.home} style={{ color: '#C9C9C9' }}>Home</Link> / Technology</div>
          <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 12, letterSpacing: 3, fontWeight: 600, color: '#8BC53F', marginBottom: 16 }}>TECHNOLOGY</div>
          <h1 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 50, fontWeight: 800, color: '#fff', lineHeight: 1.1, margin: '0 0 18px', textTransform: 'uppercase' }}>Visibility In Real Time.<br />Accountability At Every Step.</h1>
          <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 24, fontWeight: 600, color: '#8BC53F' }}>رؤية مباشرة. ومساءلة في كل خطوة.</div>
        </div>
      </div>

      {/* DIGITAL INSPECTIONS DEMO */}
      <div style={{ background: '#FFFFFF', padding: '100px 64px' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 70, alignItems: 'center' }}>
          <div style={{ animation: 'std-rise 0.7s ease-out both', display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: 300, background: '#111412', borderRadius: 26, padding: 14, boxShadow: '0 30px 60px rgba(0,0,0,0.25)' }}>
              <div style={{ background: '#F5F4F0', borderRadius: 16, padding: '22px 18px', minHeight: 420 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#8BC53F', animation: 'blip 1.6s ease-in-out infinite' }} />
                  <span style={{ fontFamily: "'Poppins',sans-serif", fontSize: 10, letterSpacing: 1.5, fontWeight: 700, color: '#6E9E2E' }}>THE 1 • LIVE INSPECTION</span>
                </div>
                <div style={{ fontFamily: "'Archivo',sans-serif", fontSize: 17, fontWeight: 800, color: '#111412', margin: '10px 0 2px', textTransform: 'uppercase' }}>Facility Inspection</div>
                <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 12, color: '#6E9E2E', fontWeight: 600, marginBottom: 18 }}>فحص المنشأة</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <InspectionChecklistRow label="Lobby & Entrances" labelAr="الردهة والمداخل" checked />
                  <InspectionChecklistRow label="Restrooms" labelAr="دورات المياه" checked />
                  <InspectionChecklistRow label="Safety & Maintenance" labelAr="السلامة والصيانة" checked={false} />
                </div>
                <div style={{ marginTop: 22, background: '#8BC53F', color: '#111412', textAlign: 'center', padding: 12, borderRadius: 8, fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 12.5, letterSpacing: 1 }}>SUBMIT</div>
              </div>
            </div>
          </div>
          <div style={{ animation: 'std-rise 0.8s ease-out 0.1s both' }}>
            <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 12, letterSpacing: 3, fontWeight: 600, color: '#6E9E2E', marginBottom: 14 }}>DIGITAL INSPECTIONS</div>
            <h2 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 36, fontWeight: 800, lineHeight: 1.15, margin: '0 0 20px', color: '#111412' }}>Every checklist logged, timestamped, and shared the moment it's completed.</h2>
            <p style={{ fontSize: 15, color: '#3C403D', lineHeight: 1.8, margin: 0, maxWidth: 520 }}>Standardized mobile inspections create measurable quality records for every zone of a facility — from lobbies to restrooms to safety-critical areas — so nothing is left to memory.</p>
          </div>
        </div>
      </div>

      {/* 4 CARDS */}
      <div style={{ background: '#F5F4F0', padding: '90px 64px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto 56px', textAlign: 'center' }}>
          <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 12.5, letterSpacing: 3, fontWeight: 600, color: '#6E9E2E', marginBottom: 10 }}>WHAT THE PLATFORM DELIVERS</div>
          <h2 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 36, fontWeight: 800, color: '#111412', margin: 0 }}>One System. Total Visibility.</h2>
        </div>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 26 }}>
          {PILLARS.map((p) => <PillarCard key={p.num} p={p} />)}
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: '#2A2E2A', padding: '90px 64px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Poppins',sans-serif", fontSize: 28, fontWeight: 700, color: '#fff', letterSpacing: 0.5, textTransform: 'uppercase', margin: '0 0 26px' }}>See the platform behind every visit</h2>
        <RequestDemoCta />
      </div>

      <PageFooter />
    </div>
  );
}

function TechnologyMobile() {
  return (
    <div style={{ width: '100%', maxWidth: 560, margin: '0 auto', background: '#FFFFFF', fontFamily: "'Poppins',sans-serif", color: '#111412', overflowX: 'hidden', position: 'relative' }}>
      <Header activeIndex={-1} variant="inner" />

      {/* HERO */}
      <div style={{ position: 'relative', background: '#111412', overflow: 'hidden', padding: '44px 20px 52px', clipPath: 'polygon(0 0, 100% 0, 100% 97%, 0 100%)' }}>
        <img src="/assets/tech-hero.jpg" alt="Facilities staff member with a tablet" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.55 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(6,10,8,0.92) 0%, rgba(6,10,8,0.68) 55%, rgba(6,10,8,0.45) 100%)' }} />
        <div style={{ position: 'relative' }}>
          <div style={{ fontSize: 11.5, color: '#C9C9C9', letterSpacing: 0.5, marginBottom: 16 }}><Link to={ROUTES.home} style={{ color: '#C9C9C9' }}>Home</Link> / Technology</div>
          <div style={{ fontSize: 11.5, letterSpacing: 3, fontWeight: 600, color: '#8BC53F', marginBottom: 12 }}>TECHNOLOGY</div>
          <h1 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 29, fontWeight: 800, color: '#fff', lineHeight: 1.15, margin: '0 0 14px', textTransform: 'uppercase' }}>Visibility In Real Time. Accountability At Every Step.</h1>
          <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 19, fontWeight: 600, color: '#8BC53F' }}>رؤية مباشرة. ومساءلة في كل خطوة.</div>
        </div>
      </div>

      {/* DIGITAL INSPECTIONS DEMO */}
      <div style={{ background: '#FFFFFF', padding: '44px 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 28 }}>
          <div style={{ width: '100%', maxWidth: 250, background: '#111412', borderRadius: 22, padding: 12, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}>
            <div style={{ background: '#F5F4F0', borderRadius: 14, padding: '18px 16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#8BC53F', animation: 'blip 1.6s ease-in-out infinite' }} />
                <span style={{ fontFamily: "'Poppins',sans-serif", fontSize: 9, letterSpacing: 1.2, fontWeight: 700, color: '#6E9E2E' }}>THE 1 • LIVE INSPECTION</span>
              </div>
              <div style={{ fontFamily: "'Archivo',sans-serif", fontSize: 15, fontWeight: 800, color: '#111412', margin: '8px 0 2px', textTransform: 'uppercase' }}>Facility Inspection</div>
              <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 11, color: '#6E9E2E', fontWeight: 600, marginBottom: 14 }}>فحص المنشأة</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <InspectionChecklistRow label="Lobby & Entrances" labelAr="الردهة والمداخل" checked mobile />
                <InspectionChecklistRow label="Restrooms" labelAr="دورات المياه" checked mobile />
                <InspectionChecklistRow label="Safety & Maintenance" labelAr="السلامة والصيانة" checked={false} mobile />
              </div>
              <div style={{ marginTop: 18, background: '#8BC53F', color: '#111412', textAlign: 'center', padding: 10, borderRadius: 8, fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: 0.8 }}>SUBMIT</div>
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 11.5, letterSpacing: 3, fontWeight: 600, color: '#6E9E2E', marginBottom: 12 }}>DIGITAL INSPECTIONS</div>
          <h2 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 22, fontWeight: 800, lineHeight: 1.3, margin: '0 0 14px', color: '#111412' }}>Every checklist logged, timestamped, and shared the moment it's completed.</h2>
          <p style={{ fontSize: 14, color: '#3C403D', lineHeight: 1.8, margin: 0, textAlign: 'left' }}>Standardized mobile inspections create measurable quality records for every zone of a facility — from lobbies to restrooms to safety-critical areas — so nothing is left to memory.</p>
        </div>
      </div>

      {/* 4 CARDS */}
      <div style={{ background: '#F5F4F0', padding: '44px 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <div style={{ fontSize: 11.5, letterSpacing: 3, fontWeight: 600, color: '#6E9E2E', marginBottom: 8 }}>WHAT THE PLATFORM DELIVERS</div>
          <h2 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 23, fontWeight: 800, color: '#111412', margin: 0 }}>One System. Total Visibility.</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {PILLARS.map((p) => <PillarCard key={p.num} p={p} mobile />)}
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: '#2A2E2A', padding: '52px 20px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Poppins',sans-serif", fontSize: 22, fontWeight: 700, color: '#fff', letterSpacing: 0.5, textTransform: 'uppercase', margin: '0 0 22px', lineHeight: 1.35 }}>See the platform behind every visit</h2>
        <RequestDemoCta mobile />
      </div>

      <PageFooter />
    </div>
  );
}

export default function Technology() {
  return (
    <>
      <div className="desktop-only"><TechnologyDesktop /></div>
      <div className="mobile-only"><TechnologyMobile /></div>
    </>
  );
}
