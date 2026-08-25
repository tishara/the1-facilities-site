import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { PageFooter } from '../components/Footer';
import { useHover } from '../hooks/useHover';
import { ROUTES } from '../routes';

const STEPS = [
  { num: '01', title: 'Training', titleAr: 'التدريب', body: 'Site-ready teams trained to deliver consistent service.' },
  { num: '02', title: 'Inspections', titleAr: 'فحوصات الجودة', body: 'Routine reviews help maintain standards across every space.' },
  { num: '03', title: 'Reporting', titleAr: 'التقارير', body: 'Clear performance updates support faster, better decisions.' },
  { num: '04', title: 'Responsiveness', titleAr: 'سرعة الاستجابة', body: 'Defined communication and escalation keep work moving.' },
];

function CtaButton({ mobile = false }: { mobile?: boolean }) {
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

function QualityAccountabilityDesktop() {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", color: '#111412', overflowX: 'auto', minWidth: 1360 }}>
      <Header activeIndex={4} variant="inner" />

      {/* HERO */}
      <div style={{ position: 'relative', background: '#111412', overflow: 'hidden', padding: '60px 64px 100px', clipPath: 'polygon(0 0, 100% 0, 100% 94%, 0 100%)' }}>
        <img src="/assets/quality-hero.jpg" alt="Inspector reviewing a checklist" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.55 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg, rgba(6,10,8,0.92) 0%, rgba(6,10,8,0.65) 55%, rgba(6,10,8,0.4) 100%)' }} />
        <div style={{ position: 'relative', maxWidth: 760, animation: 'std-rise 0.8s ease-out both' }}>
          <div style={{ fontSize: 12.5, color: '#C9C9C9', letterSpacing: 1, marginBottom: 22 }}><Link to={ROUTES.home} style={{ color: '#C9C9C9' }}>Home</Link> / Why Choose Us</div>
          <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 12, letterSpacing: 3, fontWeight: 600, color: '#8BC53F', marginBottom: 16 }}>QUALITY &amp; ACCOUNTABILITY</div>
          <h1 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 46, fontWeight: 800, color: '#fff', lineHeight: 1.1, margin: '0 0 18px', textTransform: 'uppercase' }}>Quality You Can See.<br />Accountability You Can Measure.</h1>
          <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 24, fontWeight: 600, color: '#8BC53F', marginBottom: 22 }}>جودة تراها. ومساءلة يمكنك قياسها.</div>
          <div style={{ fontSize: 13, color: '#C9C9C9', letterSpacing: 0.5 }}>Live inspections &nbsp;•&nbsp; Clear standards &nbsp;•&nbsp; Proven results</div>
        </div>
      </div>

      {/* 4 STEP RAIL */}
      <div style={{ background: '#FFFFFF', padding: '100px 64px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
          <div style={{ position: 'absolute', top: 15, left: '12.5%', right: '12.5%', height: 2, background: '#E4E2DC' }} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 26, position: 'relative' }}>
            {STEPS.map((s) => (
              <div key={s.num} style={{ textAlign: 'center' }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#8BC53F', color: '#111412', fontFamily: "'Archivo',sans-serif", fontWeight: 800, fontSize: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 22px' }}>{s.num}</div>
                <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 15, fontWeight: 600, textTransform: 'uppercase', marginBottom: 4 }}>{s.title}</div>
                <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 13, fontWeight: 600, color: '#6E9E2E', marginBottom: 12 }}>{s.titleAr}</div>
                <p style={{ fontSize: 13, color: '#3C403D', lineHeight: 1.7, margin: 0 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: '#2A2E2A', padding: '90px 64px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Poppins',sans-serif", fontSize: 28, fontWeight: 700, color: '#fff', letterSpacing: 0.5, textTransform: 'uppercase', margin: '0 0 26px' }}>See the standard for yourself</h2>
        <CtaButton />
      </div>

      <PageFooter />
    </div>
  );
}

function QualityAccountabilityMobile() {
  return (
    <div style={{ width: '100%', maxWidth: 560, margin: '0 auto', background: '#FFFFFF', fontFamily: "'Poppins',sans-serif", color: '#111412', overflowX: 'hidden', position: 'relative' }}>
      <Header activeIndex={4} variant="inner" />

      {/* HERO */}
      <div style={{ position: 'relative', background: '#111412', overflow: 'hidden', padding: '44px 20px 52px', clipPath: 'polygon(0 0, 100% 0, 100% 97%, 0 100%)' }}>
        <img src="/assets/quality-hero.jpg" alt="Inspector reviewing a checklist" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.55 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(6,10,8,0.92) 0%, rgba(6,10,8,0.68) 55%, rgba(6,10,8,0.45) 100%)' }} />
        <div style={{ position: 'relative' }}>
          <div style={{ fontSize: 11.5, color: '#C9C9C9', letterSpacing: 0.5, marginBottom: 16 }}><Link to={ROUTES.home} style={{ color: '#C9C9C9' }}>Home</Link> / Why Choose Us</div>
          <div style={{ fontSize: 11.5, letterSpacing: 3, fontWeight: 600, color: '#8BC53F', marginBottom: 12 }}>QUALITY &amp; ACCOUNTABILITY</div>
          <h1 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 29, fontWeight: 800, color: '#fff', lineHeight: 1.15, margin: '0 0 14px', textTransform: 'uppercase' }}>Quality You Can See. Accountability You Can Measure.</h1>
          <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 19, fontWeight: 600, color: '#8BC53F', marginBottom: 16 }}>جودة تراها. ومساءلة يمكنك قياسها.</div>
          <div style={{ fontSize: 11.5, color: '#C9C9C9', letterSpacing: 0.3 }}>Live inspections &nbsp;•&nbsp; Clear standards &nbsp;•&nbsp; Proven results</div>
        </div>
      </div>

      {/* 4 STEP LIST */}
      <div style={{ background: '#FFFFFF', padding: '48px 20px' }}>
        <div style={{ position: 'relative', paddingLeft: 38 }}>
          <div style={{ position: 'absolute', left: 11, top: 8, bottom: 8, width: 2, background: '#E4E2DC' }} />
          {STEPS.map((s, i) => (
            <div key={s.num} style={{ position: 'relative', paddingBottom: i < STEPS.length - 1 ? 36 : 0 }}>
              <span style={{ position: 'absolute', left: -38, top: 0, width: 24, height: 24, borderRadius: '50%', background: '#8BC53F', color: '#111412', fontFamily: "'Archivo',sans-serif", fontWeight: 800, fontSize: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{s.num}</span>
              <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 14.5, fontWeight: 600, textTransform: 'uppercase', marginBottom: 3 }}>{s.title}</div>
              <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 12, fontWeight: 600, color: '#6E9E2E', marginBottom: 8 }}>{s.titleAr}</div>
              <p style={{ fontSize: 13, color: '#3C403D', lineHeight: 1.7, margin: 0 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: '#2A2E2A', padding: '52px 20px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Poppins',sans-serif", fontSize: 22, fontWeight: 700, color: '#fff', letterSpacing: 0.5, textTransform: 'uppercase', margin: '0 0 22px', lineHeight: 1.35 }}>See the standard for yourself</h2>
        <CtaButton mobile />
      </div>

      <PageFooter />
    </div>
  );
}

export default function QualityAccountability() {
  return (
    <>
      <div className="desktop-only"><QualityAccountabilityDesktop /></div>
      <div className="mobile-only"><QualityAccountabilityMobile /></div>
    </>
  );
}
