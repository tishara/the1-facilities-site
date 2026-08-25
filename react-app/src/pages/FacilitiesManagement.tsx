import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { PageFooter } from '../components/Footer';
import { useHover } from '../hooks/useHover';
import { ROUTES } from '../routes';

const STEPS = [
  { num: '01', text: 'Central coordination of services and vendors', textAr: 'تنسيق مركزي للخدمات والموردين' },
  { num: '02', text: 'Performance standards and regular reporting', textAr: 'معايير أداء وتقارير دورية' },
  { num: '03', text: 'A better experience for building occupants', textAr: 'تجربة أفضل لشاغلي المبنى' },
];

function HubDiagram({ size = 380 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 380 380">
      <g stroke="#CFCFCA" strokeWidth={1.5}>
        <line x1={190} y1={190} x2={190} y2={50} />
        <line x1={190} y1={190} x2={320} y2={130} />
        <line x1={190} y1={190} x2={320} y2={260} />
        <line x1={190} y1={190} x2={190} y2={330} />
        <line x1={190} y1={190} x2={60} y2={260} />
        <line x1={190} y1={190} x2={60} y2={130} />
      </g>
      <circle cx={190} cy={190} r={58} fill="#111412" />
      <text x={190} y={185} textAnchor="middle" fill="#8BC53F" fontFamily="Archivo" fontWeight={800} fontSize={14}>THE 1</text>
      <text x={190} y={203} textAnchor="middle" fill="#C9C9C9" fontFamily="Poppins" fontSize={9} letterSpacing={1}>COORDINATION</text>
      <g fontFamily="Poppins" fontSize={11} fontWeight={600} fill="#111412">
        <circle cx={190} cy={50} r={30} fill="#8BC53F" /><text x={190} y={54} textAnchor="middle">Cleaning</text>
        <circle cx={320} cy={130} r={30} fill="#8BC53F" /><text x={320} y={134} textAnchor="middle">Maint.</text>
        <circle cx={320} cy={260} r={30} fill="#8BC53F" /><text x={320} y={264} textAnchor="middle">Security</text>
        <circle cx={190} cy={330} r={30} fill="#8BC53F" /><text x={190} y={334} textAnchor="middle">Vendors</text>
        <circle cx={60} cy={260} r={30} fill="#8BC53F" /><text x={60} y={264} textAnchor="middle">Reports</text>
        <circle cx={60} cy={130} r={30} fill="#8BC53F" /><text x={60} y={134} textAnchor="middle">Assets</text>
      </g>
    </svg>
  );
}

function CtaButton({ mobile = false }: { mobile?: boolean }) {
  const { onMouseEnter, onMouseLeave, mergeStyle } = useHover();
  const base: React.CSSProperties = mobile
    ? { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: '#8BC53F', color: '#111412', padding: '15px 26px', fontWeight: 600, fontSize: 14, transition: 'gap 0.25s ease, background 0.25s ease' }
    : { display: 'inline-flex', alignItems: 'center', gap: 10, background: '#8BC53F', color: '#111412', padding: '16px 32px', fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: 14, transition: 'background 0.25s ease' };
  const hoverStyle: React.CSSProperties = mobile ? { gap: 14, background: '#9ED84A' } : { background: '#9ED84A' };
  return (
    <Link to={ROUTES.contact} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} style={mergeStyle(base, hoverStyle)}>
      {mobile ? <>Request A Proposal <span>→</span></> : <>Request A Proposal &nbsp;→</>}
    </Link>
  );
}

function FacilitiesManagementDesktop() {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", color: '#111412', overflowX: 'auto', minWidth: 1360 }}>
      <Header activeIndex={2} variant="inner" />

      {/* HERO */}
      <div style={{ position: 'relative', background: '#111412', overflow: 'hidden', padding: '60px 64px 100px', clipPath: 'polygon(0 0, 100% 0, 100% 94%, 0 100%)' }}>
        <img src="/assets/facilities-hero.jpg" alt="Facilities coordinator in a bright corridor" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.55 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg, rgba(6,10,8,0.92) 0%, rgba(6,10,8,0.65) 55%, rgba(6,10,8,0.4) 100%)' }} />
        <div style={{ position: 'relative', maxWidth: 760, animation: 'std-rise 0.8s ease-out both' }}>
          <div style={{ fontSize: 12.5, color: '#C9C9C9', letterSpacing: 1, marginBottom: 22 }}><Link to={ROUTES.home} style={{ color: '#C9C9C9' }}>Home</Link> / Services / Facilities Management</div>
          <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 12, letterSpacing: 3, fontWeight: 600, color: '#8BC53F', marginBottom: 16 }}>FACILITIES MANAGEMENT</div>
          <h1 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 46, fontWeight: 800, color: '#fff', lineHeight: 1.1, margin: '0 0 18px', textTransform: 'uppercase' }}>One Team Coordinating<br />The Whole Environment.</h1>
          <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 26, fontWeight: 600, color: '#8BC53F' }}>فريق واحد ينسّق بيئة العمل بالكامل.</div>
        </div>
      </div>

      {/* HUB DIAGRAM + LIST */}
      <div style={{ background: '#FFFFFF', padding: '100px 64px' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 70, alignItems: 'center' }}>
          <div style={{ animation: 'std-rise 0.7s ease-out both', display: 'flex', justifyContent: 'center' }}>
            <HubDiagram size={380} />
          </div>
          <div style={{ animation: 'std-rise 0.8s ease-out 0.1s both' }}>
            <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 12, letterSpacing: 3, fontWeight: 600, color: '#6E9E2E', marginBottom: 28 }}>HOW IT WORKS</div>
            {STEPS.map((s, i) => (
              <div key={s.num} style={{ borderTop: '1px solid #E4E2DC', borderBottom: i === STEPS.length - 1 ? '1px solid #E4E2DC' : undefined, padding: '20px 0' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
                  <span style={{ fontFamily: "'Archivo',sans-serif", fontSize: 14, fontWeight: 800, color: '#8BC53F' }}>{s.num}</span>
                  <span style={{ fontSize: 15, color: '#111412', fontWeight: 500 }}>{s.text}</span>
                </div>
                <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 13, color: '#6E9E2E', margin: '6px 0 0 28px' }}>{s.textAr}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BAND */}
      <div style={{ background: '#8BC53F', padding: '44px 64px', textAlign: 'center' }}>
        <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 16, fontWeight: 700, letterSpacing: 1, color: '#111412', textTransform: 'uppercase', marginBottom: 8 }}>Consistent Quality. Visible Results. One Accountable Partner.</div>
        <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 15, fontWeight: 600, color: '#111412' }}>جودة ثابتة. نتائج واضحة. شريك واحد مسؤول.</div>
      </div>

      {/* CTA */}
      <div style={{ background: '#2A2E2A', padding: '90px 64px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Poppins',sans-serif", fontSize: 28, fontWeight: 700, color: '#fff', letterSpacing: 0.5, textTransform: 'uppercase', margin: '0 0 26px' }}>Put one team behind your whole facility</h2>
        <CtaButton />
      </div>

      <PageFooter />
    </div>
  );
}

function FacilitiesManagementMobile() {
  return (
    <div style={{ width: '100%', maxWidth: 560, margin: '0 auto', background: '#FFFFFF', fontFamily: "'Poppins',sans-serif", color: '#111412', overflowX: 'hidden', position: 'relative' }}>
      <Header activeIndex={2} variant="inner" />

      {/* HERO */}
      <div style={{ position: 'relative', background: '#111412', overflow: 'hidden', padding: '44px 20px 52px', clipPath: 'polygon(0 0, 100% 0, 100% 97%, 0 100%)' }}>
        <img src="/assets/facilities-hero.jpg" alt="Facilities coordinator in a bright corridor" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.55 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(6,10,8,0.92) 0%, rgba(6,10,8,0.68) 55%, rgba(6,10,8,0.45) 100%)' }} />
        <div style={{ position: 'relative' }}>
          <div style={{ fontSize: 11.5, color: '#C9C9C9', letterSpacing: 0.5, marginBottom: 16 }}><Link to={ROUTES.home} style={{ color: '#C9C9C9' }}>Home</Link> / Services / Facilities Mgmt</div>
          <div style={{ fontSize: 11.5, letterSpacing: 3, fontWeight: 600, color: '#8BC53F', marginBottom: 12 }}>FACILITIES MANAGEMENT</div>
          <h1 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 29, fontWeight: 800, color: '#fff', lineHeight: 1.15, margin: '0 0 14px', textTransform: 'uppercase' }}>One Team Coordinating The Whole Environment.</h1>
          <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 19, fontWeight: 600, color: '#8BC53F' }}>فريق واحد ينسّق بيئة العمل بالكامل.</div>
        </div>
      </div>

      {/* HUB DIAGRAM */}
      <div style={{ background: '#FFFFFF', padding: '44px 20px 8px', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '100%', maxWidth: 320 }}>
          <HubDiagram size={320} />
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div style={{ background: '#FFFFFF', padding: '24px 20px 44px' }}>
        <div style={{ textAlign: 'center', fontSize: 11.5, letterSpacing: 3, fontWeight: 600, color: '#6E9E2E', marginBottom: 20 }}>HOW IT WORKS</div>
        {STEPS.map((s, i) => (
          <div key={s.num} style={{ borderTop: '1px solid #E4E2DC', borderBottom: i === STEPS.length - 1 ? '1px solid #E4E2DC' : undefined, padding: '18px 0' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
              <span style={{ fontFamily: "'Archivo',sans-serif", fontSize: 13, fontWeight: 800, color: '#8BC53F' }}>{s.num}</span>
              <span style={{ fontSize: 14, color: '#111412', fontWeight: 500 }}>{s.text}</span>
            </div>
            <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 12, color: '#6E9E2E', margin: '5px 0 0 25px' }}>{s.textAr}</div>
          </div>
        ))}
      </div>

      {/* BAND */}
      <div style={{ background: '#8BC53F', padding: '36px 20px', textAlign: 'center' }}>
        <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 14, fontWeight: 700, letterSpacing: 0.5, color: '#111412', textTransform: 'uppercase', marginBottom: 8, lineHeight: 1.4 }}>Consistent Quality. Visible Results. One Accountable Partner.</div>
        <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 13.5, fontWeight: 600, color: '#111412' }}>جودة ثابتة. نتائج واضحة. شريك واحد مسؤول.</div>
      </div>

      {/* CTA */}
      <div style={{ background: '#2A2E2A', padding: '52px 20px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Poppins',sans-serif", fontSize: 22, fontWeight: 700, color: '#fff', letterSpacing: 0.5, textTransform: 'uppercase', margin: '0 0 22px', lineHeight: 1.35 }}>Put one team behind your whole facility</h2>
        <CtaButton mobile />
      </div>

      <PageFooter />
    </div>
  );
}

export default function FacilitiesManagement() {
  return (
    <>
      <div className="desktop-only"><FacilitiesManagementDesktop /></div>
      <div className="mobile-only"><FacilitiesManagementMobile /></div>
    </>
  );
}
