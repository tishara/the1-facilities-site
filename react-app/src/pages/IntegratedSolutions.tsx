import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { PageFooter } from '../components/Footer';
import { useHover } from '../hooks/useHover';
import { ROUTES } from '../routes';

const LIST = [
  { num: '01', title: 'A single point of contact and accountability', titleAr: 'نقطة اتصال ومسؤولية واحدة' },
  { num: '02', title: 'Scalable service plans for changing needs', titleAr: 'خطط خدمة مرنة وقابلة للتوسع' },
  { num: '03', title: 'Consistent standards across every location', titleAr: 'معايير موحّدة في جميع المواقع' },
];

const MERGE_ITEMS = ['Cleaning', 'Maintenance', 'Security', 'Facilities Mgmt'];

function MergeDiagram({ mobile = false }: { mobile?: boolean }) {
  const chip: React.CSSProperties = mobile
    ? { background: '#F5F4F0', padding: '11px 16px', fontSize: 12, fontWeight: 600, color: '#111412' }
    : { background: '#F5F4F0', padding: '14px 22px', fontSize: 13, fontWeight: 600, color: '#111412' };
  const plus: React.CSSProperties = mobile ? { color: '#8BC53F', fontSize: 15 } : { color: '#8BC53F', fontSize: 18 };
  const result: React.CSSProperties = mobile
    ? { background: '#111412', color: '#8BC53F', padding: '13px 22px', fontFamily: "'Archivo',sans-serif", fontWeight: 800, fontSize: 13, letterSpacing: 0.5 }
    : { background: '#111412', color: '#8BC53F', padding: '16px 30px', fontFamily: "'Archivo',sans-serif", fontWeight: 800, fontSize: 15, letterSpacing: 0.5 };
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: mobile ? 10 : 14, flexWrap: 'wrap' }}>
      {MERGE_ITEMS.map((item) => (
        <span key={item} style={{ display: 'contents' }}>
          <span style={chip}>{item}</span>
          <span style={plus}>+</span>
        </span>
      ))}
      <span style={plus}>=</span>
      <span style={result}>ONE PARTNER</span>
    </div>
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

function IntegratedSolutionsDesktop() {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", color: '#111412', overflowX: 'auto', minWidth: 1360 }}>
      <Header activeIndex={2} variant="inner" />

      {/* HERO */}
      <div style={{ position: 'relative', background: '#111412', overflow: 'hidden', padding: '60px 64px 100px', clipPath: 'polygon(0 0, 100% 0, 100% 94%, 0 100%)' }}>
        <img src="/assets/integrated-hero.jpg" alt="Supervisor reviewing a clipboard in a hospital corridor" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.55 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg, rgba(6,10,8,0.92) 0%, rgba(6,10,8,0.65) 55%, rgba(6,10,8,0.4) 100%)' }} />
        <div style={{ position: 'relative', maxWidth: 760, animation: 'std-rise 0.8s ease-out both' }}>
          <div style={{ fontSize: 12.5, color: '#C9C9C9', letterSpacing: 1, marginBottom: 22 }}><Link to={ROUTES.home} style={{ color: '#C9C9C9' }}>Home</Link> / Services / Integrated Solutions</div>
          <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 12, letterSpacing: 3, fontWeight: 600, color: '#8BC53F', marginBottom: 16 }}>INTEGRATED SOLUTIONS</div>
          <h1 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 46, fontWeight: 800, color: '#fff', lineHeight: 1.1, margin: '0 0 18px', textTransform: 'uppercase' }}>One Partner. Connected<br />Services. Clear Results.</h1>
          <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 26, fontWeight: 600, color: '#8BC53F' }}>شريك واحد. خدمات مترابطة. نتائج واضحة.</div>
        </div>
      </div>

      {/* MERGE DIAGRAM */}
      <div style={{ background: '#FFFFFF', padding: '90px 64px 60px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', animation: 'std-rise 0.7s ease-out both' }}>
          <MergeDiagram />
        </div>
      </div>

      {/* LIST */}
      <div style={{ background: '#FFFFFF', padding: '20px 64px 90px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 26 }}>
          {LIST.map((item) => (
            <div key={item.num} style={{ borderTop: '3px solid #8BC53F', paddingTop: 20 }}>
              <span style={{ fontFamily: "'Archivo',sans-serif", fontSize: 14, fontWeight: 800, color: '#8BC53F' }}>{item.num}</span>
              <div style={{ fontSize: 15, color: '#111412', fontWeight: 600, margin: '8px 0 6px' }}>{item.title}</div>
              <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 13, color: '#6E9E2E' }}>{item.titleAr}</div>
            </div>
          ))}
        </div>
      </div>

      {/* BAND */}
      <div style={{ background: '#8BC53F', padding: '44px 64px', textAlign: 'center' }}>
        <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 16, fontWeight: 700, letterSpacing: 1, color: '#111412', textTransform: 'uppercase', marginBottom: 8 }}>Consistent Quality. Visible Results. One Accountable Partner.</div>
        <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 15, fontWeight: 600, color: '#111412' }}>جودة ثابتة. نتائج واضحة. شريك واحد مسؤول.</div>
      </div>

      {/* CTA */}
      <div style={{ background: '#2A2E2A', padding: '90px 64px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Poppins',sans-serif", fontSize: 28, fontWeight: 700, color: '#fff', letterSpacing: 0.5, textTransform: 'uppercase', margin: '0 0 26px' }}>Bring every service under one contract</h2>
        <CtaButton />
      </div>

      <PageFooter />
    </div>
  );
}

function IntegratedSolutionsMobile() {
  return (
    <div style={{ width: '100%', maxWidth: 560, margin: '0 auto', background: '#FFFFFF', fontFamily: "'Poppins',sans-serif", color: '#111412', overflowX: 'hidden', position: 'relative' }}>
      <Header activeIndex={2} variant="inner" />

      {/* HERO */}
      <div style={{ position: 'relative', background: '#111412', overflow: 'hidden', padding: '44px 20px 52px', clipPath: 'polygon(0 0, 100% 0, 100% 97%, 0 100%)' }}>
        <img src="/assets/integrated-hero.jpg" alt="Supervisor reviewing a clipboard in a hospital corridor" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.55 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(6,10,8,0.92) 0%, rgba(6,10,8,0.68) 55%, rgba(6,10,8,0.45) 100%)' }} />
        <div style={{ position: 'relative' }}>
          <div style={{ fontSize: 11.5, color: '#C9C9C9', letterSpacing: 0.5, marginBottom: 16 }}><Link to={ROUTES.home} style={{ color: '#C9C9C9' }}>Home</Link> / Services / Integrated Solutions</div>
          <div style={{ fontSize: 11.5, letterSpacing: 3, fontWeight: 600, color: '#8BC53F', marginBottom: 12 }}>INTEGRATED SOLUTIONS</div>
          <h1 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 29, fontWeight: 800, color: '#fff', lineHeight: 1.15, margin: '0 0 14px', textTransform: 'uppercase' }}>One Partner. Connected Services. Clear Results.</h1>
          <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 19, fontWeight: 600, color: '#8BC53F' }}>شريك واحد. خدمات مترابطة. نتائج واضحة.</div>
        </div>
      </div>

      {/* MERGE DIAGRAM */}
      <div style={{ background: '#FFFFFF', padding: '44px 20px 8px' }}>
        <MergeDiagram mobile />
      </div>

      {/* LIST */}
      <div style={{ background: '#FFFFFF', padding: '28px 20px 44px' }}>
        {LIST.map((item, i) => (
          <div key={item.num} style={{ borderTop: '3px solid #8BC53F', borderBottom: i === LIST.length - 1 ? '1px solid #E4E2DC' : undefined, padding: '18px 0' }}>
            <span style={{ fontFamily: "'Archivo',sans-serif", fontSize: 13, fontWeight: 800, color: '#8BC53F' }}>{item.num}</span>
            <div style={{ fontSize: 14.5, color: '#111412', fontWeight: 600, margin: '8px 0 5px' }}>{item.title}</div>
            <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 12.5, color: '#6E9E2E' }}>{item.titleAr}</div>
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
        <h2 style={{ fontFamily: "'Poppins',sans-serif", fontSize: 22, fontWeight: 700, color: '#fff', letterSpacing: 0.5, textTransform: 'uppercase', margin: '0 0 22px', lineHeight: 1.35 }}>Bring every service under one contract</h2>
        <CtaButton mobile />
      </div>

      <PageFooter />
    </div>
  );
}

export default function IntegratedSolutions() {
  return (
    <>
      <div className="desktop-only"><IntegratedSolutionsDesktop /></div>
      <div className="mobile-only"><IntegratedSolutionsMobile /></div>
    </>
  );
}
