import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { PageFooter } from '../components/Footer';
import { useHover } from '../hooks/useHover';
import { ROUTES } from '../routes';

const DELIVER_ITEMS = [
  { num: '01', title: 'Preventive and routine maintenance', titleAr: 'صيانة وقائية ودورية' },
  { num: '02', title: 'Responsive maintenance and repair support', titleAr: 'دعم سريع لأعمال الصيانة والإصلاح' },
  { num: '03', title: 'Asset care focused on uptime and efficiency', titleAr: 'عناية بالأصول تدعم الاستمرارية والكفاءة' },
];

function ReqProposalCta({ mobile = false }: { mobile?: boolean }) {
  const { onMouseEnter, onMouseLeave, mergeStyle } = useHover();
  const base: React.CSSProperties = mobile
    ? { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: '#8BC53F', color: '#111412', padding: '15px 26px', fontWeight: 600, fontSize: 14, transition: 'gap 0.25s ease, background 0.25s ease' }
    : { display: 'inline-flex', alignItems: 'center', gap: 10, background: '#8BC53F', color: '#111412', padding: '16px 32px', fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: 14, transition: 'background 0.25s ease' };
  const hoverStyle: React.CSSProperties = mobile ? { gap: 14, background: '#9ED84A' } : { background: '#9ED84A' };
  return (
    <Link to={ROUTES.contact} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} style={mergeStyle(base, hoverStyle)}>
      {mobile ? <>Request A Proposal <span style={{ transition: 'transform 0.25s ease' }}>→</span></> : <>Request A Proposal &nbsp;→</>}
    </Link>
  );
}

function MaintenanceDesktop() {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", color: '#111412', overflowX: 'auto', minWidth: 1360 }}>
      <Header activeIndex={2} variant="inner" />

      {/* HERO */}
      <div style={{ position: 'relative', background: '#111412', overflow: 'hidden', padding: '60px 64px 100px', clipPath: 'polygon(0 0, 100% 0, 100% 94%, 0 100%)' }}>
        <img src="/assets/maintenance-hero.jpg" alt="Maintenance technician with a tablet" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.55 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg, rgba(6,10,8,0.92) 0%, rgba(6,10,8,0.65) 55%, rgba(6,10,8,0.4) 100%)' }} />
        <div style={{ position: 'relative', maxWidth: 760, animation: 'std-rise 0.8s ease-out both' }}>
          <div style={{ fontSize: 12.5, color: '#C9C9C9', letterSpacing: 1, marginBottom: 22 }}><Link to={ROUTES.home} style={{ color: '#C9C9C9' }}>Home</Link> / Services / Maintenance</div>
          <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 12, letterSpacing: 3, fontWeight: 600, color: '#8BC53F', marginBottom: 16 }}>MAINTENANCE &amp; OPERATIONS</div>
          <h1 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 48, fontWeight: 800, color: '#fff', lineHeight: 1.1, margin: '0 0 18px', textTransform: 'uppercase' }}>Keep Every Asset Working At Its Best.</h1>
          <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 26, fontWeight: 600, color: '#8BC53F' }}>نحافظ على كفاءة أصول منشأتك.</div>
        </div>
      </div>

      {/* LIST + STAT */}
      <div style={{ background: '#FFFFFF', padding: '90px 64px' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 70, alignItems: 'center' }}>
          <div style={{ animation: 'std-rise 0.8s ease-out both' }}>
            <img src="/assets/maintenance-hero.jpg" alt="" style={{ width: '100%', height: 400, objectFit: 'cover', display: 'block' }} />
            <div style={{ marginTop: -56, marginLeft: 24, position: 'relative', background: '#111412', color: '#fff', display: 'inline-flex', flexDirection: 'column', padding: '20px 26px' }}>
              <span style={{ fontFamily: "'Archivo',sans-serif", fontSize: 30, fontWeight: 800, color: '#8BC53F' }}>24/7</span>
              <span style={{ fontSize: 11.5, letterSpacing: 1, color: '#C9C9C9' }}>RESPONSE-READY TEAMS</span>
            </div>
          </div>
          <div style={{ animation: 'std-rise 0.7s ease-out 0.1s both' }}>
            <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 12, letterSpacing: 3, fontWeight: 600, color: '#6E9E2E', marginBottom: 28 }}>WHAT WE DELIVER</div>
            {DELIVER_ITEMS.map((item, i) => (
              <div key={item.num} style={{ borderTop: '1px solid #E4E2DC', borderBottom: i === DELIVER_ITEMS.length - 1 ? '1px solid #E4E2DC' : undefined, padding: '20px 0' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
                  <span style={{ fontFamily: "'Archivo',sans-serif", fontSize: 14, fontWeight: 800, color: '#8BC53F' }}>{item.num}</span>
                  <span style={{ fontSize: 15, color: '#111412', fontWeight: 500 }}>{item.title}</span>
                </div>
                <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 13, color: '#6E9E2E', margin: '6px 0 0 28px' }}>{item.titleAr}</div>
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
        <h2 style={{ fontFamily: "'Poppins',sans-serif", fontSize: 28, fontWeight: 700, color: '#fff', letterSpacing: 0.5, textTransform: 'uppercase', margin: '0 0 26px' }}>Stop small issues before they spread</h2>
        <ReqProposalCta />
      </div>

      <PageFooter />
    </div>
  );
}

function MaintenanceMobile() {
  return (
    <div style={{ width: '100%', maxWidth: 560, margin: '0 auto', background: '#FFFFFF', fontFamily: "'Poppins',sans-serif", color: '#111412', overflowX: 'hidden', position: 'relative' }}>
      <Header activeIndex={2} variant="inner" />

      {/* HERO */}
      <div style={{ position: 'relative', background: '#111412', overflow: 'hidden', padding: '44px 20px 52px', clipPath: 'polygon(0 0, 100% 0, 100% 97%, 0 100%)' }}>
        <img src="/assets/maintenance-hero.jpg" alt="Maintenance technician with a tablet" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.55 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(6,10,8,0.92) 0%, rgba(6,10,8,0.68) 55%, rgba(6,10,8,0.45) 100%)' }} />
        <div style={{ position: 'relative' }}>
          <div style={{ fontSize: 11.5, color: '#C9C9C9', letterSpacing: 0.5, marginBottom: 16 }}><Link to={ROUTES.home} style={{ color: '#C9C9C9' }}>Home</Link> / Services / Maintenance</div>
          <div style={{ fontSize: 11.5, letterSpacing: 3, fontWeight: 600, color: '#8BC53F', marginBottom: 12 }}>MAINTENANCE &amp; OPERATIONS</div>
          <h1 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 30, fontWeight: 800, color: '#fff', lineHeight: 1.15, margin: '0 0 14px', textTransform: 'uppercase' }}>Keep Every Asset Working At Its Best.</h1>
          <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 19, fontWeight: 600, color: '#8BC53F' }}>نحافظ على كفاءة أصول منشأتك.</div>
        </div>
      </div>

      {/* IMAGE + BADGE */}
      <div style={{ background: '#FFFFFF', padding: '44px 20px 0' }}>
        <img src="/assets/maintenance-hero.jpg" alt="" style={{ width: '100%', height: 220, objectFit: 'cover', display: 'block' }} />
        <div style={{ marginTop: -36, marginLeft: 14, position: 'relative', background: '#111412', color: '#fff', display: 'inline-flex', flexDirection: 'column', padding: '14px 20px' }}>
          <span style={{ fontFamily: "'Archivo',sans-serif", fontSize: 24, fontWeight: 800, color: '#8BC53F' }}>24/7</span>
          <span style={{ fontSize: 9.5, letterSpacing: 0.8, color: '#C9C9C9' }}>RESPONSE-READY TEAMS</span>
        </div>
      </div>

      {/* WHAT WE DELIVER */}
      <div style={{ background: '#FFFFFF', padding: '24px 20px 44px' }}>
        <div style={{ textAlign: 'center', fontSize: 11.5, letterSpacing: 3, fontWeight: 600, color: '#6E9E2E', marginBottom: 20 }}>WHAT WE DELIVER</div>
        {DELIVER_ITEMS.map((item, i) => (
          <div key={item.num} style={{ borderTop: '1px solid #E4E2DC', borderBottom: i === DELIVER_ITEMS.length - 1 ? '1px solid #E4E2DC' : undefined, padding: '18px 0' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
              <span style={{ fontFamily: "'Archivo',sans-serif", fontSize: 13, fontWeight: 800, color: '#8BC53F' }}>{item.num}</span>
              <span style={{ fontSize: 14, color: '#111412', fontWeight: 500 }}>{item.title}</span>
            </div>
            <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 12, color: '#6E9E2E', margin: '5px 0 0 25px' }}>{item.titleAr}</div>
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
        <h2 style={{ fontFamily: "'Poppins',sans-serif", fontSize: 22, fontWeight: 700, color: '#fff', letterSpacing: 0.5, textTransform: 'uppercase', margin: '0 0 22px', lineHeight: 1.35 }}>Stop small issues before they spread</h2>
        <ReqProposalCta mobile />
      </div>

      <PageFooter />
    </div>
  );
}

export default function Maintenance() {
  return (
    <>
      <div className="desktop-only"><MaintenanceDesktop /></div>
      <div className="mobile-only"><MaintenanceMobile /></div>
    </>
  );
}
