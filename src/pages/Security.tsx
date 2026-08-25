import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { PageFooter } from '../components/Footer';
import { useHover } from '../hooks/useHover';
import { ROUTES } from '../routes';

const RAIL_ITEMS = [
  { num: '1', title: 'Site-specific security procedures', titleAr: 'إجراءات أمنية مخصصة لكل موقع' },
  { num: '2', title: 'Qualified personnel and clear escalation paths', titleAr: 'كوادر مؤهلة ومسارات تصعيد واضحة' },
  { num: '3', title: 'Continuous monitoring and incident reporting', titleAr: 'مراقبة مستمرة وتقارير للحوادث' },
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

function SecurityDesktop() {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", color: '#111412', overflowX: 'auto', minWidth: 1360 }}>
      <Header activeIndex={2} variant="inner" />

      {/* HERO */}
      <div style={{ position: 'relative', background: '#111412', overflow: 'hidden', padding: '60px 64px 100px', clipPath: 'polygon(0 0, 100% 0, 100% 94%, 0 100%)' }}>
        <img src="/assets/security-hero.jpg" alt="Uniformed security team outside a glass tower" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.55 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg, rgba(6,10,8,0.92) 0%, rgba(6,10,8,0.65) 55%, rgba(6,10,8,0.4) 100%)' }} />
        <div style={{ position: 'relative', maxWidth: 760, animation: 'std-rise 0.8s ease-out both' }}>
          <div style={{ fontSize: 12.5, color: '#C9C9C9', letterSpacing: 1, marginBottom: 22 }}><Link to={ROUTES.home} style={{ color: '#C9C9C9' }}>Home</Link> / Services / Security</div>
          <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 12, letterSpacing: 3, fontWeight: 600, color: '#8BC53F', marginBottom: 16 }}>SECURITY</div>
          <h1 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 50, fontWeight: 800, color: '#fff', lineHeight: 1.1, margin: '0 0 18px', textTransform: 'uppercase' }}>Protection Built Around<br />Your Facility.</h1>
          <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 26, fontWeight: 600, color: '#8BC53F' }}>حماية مصممة حول احتياجات منشأتك.</div>
        </div>
      </div>

      {/* VERTICAL RAIL LIST */}
      <div style={{ background: '#FFFFFF', padding: '100px 64px' }}>
        <div style={{ maxWidth: 780, margin: '0 auto' }}>
          <div style={{ position: 'relative', paddingLeft: 44 }}>
            <div style={{ position: 'absolute', left: 13, top: 10, bottom: 10, width: 2, background: '#E4E2DC' }} />
            {RAIL_ITEMS.map((item, i) => (
              <div key={item.num} style={{ position: 'relative', paddingBottom: i === RAIL_ITEMS.length - 1 ? undefined : 52 }}>
                <span style={{ position: 'absolute', left: -44, top: 0, width: 28, height: 28, borderRadius: '50%', background: '#8BC53F', color: '#111412', fontFamily: "'Archivo',sans-serif", fontWeight: 800, fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{item.num}</span>
                <div style={{ fontSize: 17, fontWeight: 600, color: '#111412', marginBottom: 6 }}>{item.title}</div>
                <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 14, color: '#6E9E2E' }}>{item.titleAr}</div>
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
        <h2 style={{ fontFamily: "'Poppins',sans-serif", fontSize: 28, fontWeight: 700, color: '#fff', letterSpacing: 0.5, textTransform: 'uppercase', margin: '0 0 26px' }}>Protect your people and your property</h2>
        <ReqProposalCta />
      </div>

      <PageFooter />
    </div>
  );
}

function SecurityMobile() {
  return (
    <div style={{ width: '100%', maxWidth: 560, margin: '0 auto', background: '#FFFFFF', fontFamily: "'Poppins',sans-serif", color: '#111412', overflowX: 'hidden', position: 'relative' }}>
      <Header activeIndex={2} variant="inner" />

      {/* HERO */}
      <div style={{ position: 'relative', background: '#111412', overflow: 'hidden', padding: '44px 20px 52px', clipPath: 'polygon(0 0, 100% 0, 100% 97%, 0 100%)' }}>
        <img src="/assets/security-hero.jpg" alt="Uniformed security team outside a glass tower" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.55 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(6,10,8,0.92) 0%, rgba(6,10,8,0.68) 55%, rgba(6,10,8,0.45) 100%)' }} />
        <div style={{ position: 'relative' }}>
          <div style={{ fontSize: 11.5, color: '#C9C9C9', letterSpacing: 0.5, marginBottom: 16 }}><Link to={ROUTES.home} style={{ color: '#C9C9C9' }}>Home</Link> / Services / Security</div>
          <div style={{ fontSize: 11.5, letterSpacing: 3, fontWeight: 600, color: '#8BC53F', marginBottom: 12 }}>SECURITY</div>
          <h1 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 32, fontWeight: 800, color: '#fff', lineHeight: 1.12, margin: '0 0 14px', textTransform: 'uppercase' }}>Protection Built Around Your Facility.</h1>
          <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 19, fontWeight: 600, color: '#8BC53F' }}>حماية مصممة حول احتياجات منشأتك.</div>
        </div>
      </div>

      {/* VERTICAL RAIL LIST */}
      <div style={{ background: '#FFFFFF', padding: '48px 20px' }}>
        <div style={{ position: 'relative', paddingLeft: 38 }}>
          <div style={{ position: 'absolute', left: 11, top: 8, bottom: 8, width: 2, background: '#E4E2DC' }} />
          {RAIL_ITEMS.map((item, i) => (
            <div key={item.num} style={{ position: 'relative', paddingBottom: i === RAIL_ITEMS.length - 1 ? undefined : 40 }}>
              <span style={{ position: 'absolute', left: -38, top: 0, width: 24, height: 24, borderRadius: '50%', background: '#8BC53F', color: '#111412', fontFamily: "'Archivo',sans-serif", fontWeight: 800, fontSize: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{item.num}</span>
              <div style={{ fontSize: 15, fontWeight: 600, color: '#111412', marginBottom: 6 }}>{item.title}</div>
              <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 13, color: '#6E9E2E' }}>{item.titleAr}</div>
            </div>
          ))}
        </div>
      </div>

      {/* BAND */}
      <div style={{ background: '#8BC53F', padding: '36px 20px', textAlign: 'center' }}>
        <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 14, fontWeight: 700, letterSpacing: 0.5, color: '#111412', textTransform: 'uppercase', marginBottom: 8, lineHeight: 1.4 }}>Consistent Quality. Visible Results. One Accountable Partner.</div>
        <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 13.5, fontWeight: 600, color: '#111412' }}>جودة ثابتة. نتائج واضحة. شريك واحد مسؤول.</div>
      </div>

      {/* CTA */}
      <div style={{ background: '#2A2E2A', padding: '52px 20px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Poppins',sans-serif", fontSize: 22, fontWeight: 700, color: '#fff', letterSpacing: 0.5, textTransform: 'uppercase', margin: '0 0 22px', lineHeight: 1.35 }}>Protect your people and your property</h2>
        <ReqProposalCta mobile />
      </div>

      <PageFooter />
    </div>
  );
}

export default function Security() {
  return (
    <>
      <div className="desktop-only"><SecurityDesktop /></div>
      <div className="mobile-only"><SecurityMobile /></div>
    </>
  );
}
