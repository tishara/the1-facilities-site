import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { PageFooter } from '../components/Footer';
import { useHover } from '../hooks/useHover';
import { ROUTES } from '../routes';

const PLANNED_MARKETS = [
  { num: '02', name: 'Saudi Arabia', mobileName: 'Saudi Arabia', nameAr: 'السعودية' },
  { num: '03', name: 'United Arab Emirates', mobileName: 'UAE', nameAr: 'الإمارات' },
  { num: '04', name: 'Qatar', mobileName: 'Qatar', nameAr: 'قطر' },
  { num: '05', name: 'Kuwait', mobileName: 'Kuwait', nameAr: 'الكويت' },
  { num: '06', name: 'Bahrain', mobileName: 'Bahrain', nameAr: 'البحرين' },
  { num: '07', name: 'Oman', mobileName: 'Oman', nameAr: 'عُمان' },
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

function MarketCardDesktop({ m }: { m: typeof PLANNED_MARKETS[number] }) {
  const { onMouseEnter, onMouseLeave, mergeStyle } = useHover();
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={mergeStyle({ background: '#fff', padding: 26, transition: 'transform 0.25s ease' }, { transform: 'translateY(-6px)' })}
    >
      <div style={{ fontFamily: "'Archivo',sans-serif", fontSize: 12, fontWeight: 800, color: '#8BC53F', marginBottom: 8 }}>{m.num}</div>
      <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 15, fontWeight: 600 }}>{m.name}</div>
      <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 13, color: '#6E9E2E', margin: '4px 0 10px' }}>{m.nameAr}</div>
      <div style={{ fontSize: 10.5, letterSpacing: 1, color: '#6E736F' }}>PLANNED MARKET</div>
    </div>
  );
}

function ExpansionMarketsDesktop() {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", color: '#111412', overflowX: 'auto', minWidth: 1360 }}>
      <Header activeIndex={-1} variant="inner" />

      {/* HERO */}
      <div style={{ position: 'relative', background: '#111412', overflow: 'hidden', padding: '60px 64px 100px', clipPath: 'polygon(0 0, 100% 0, 100% 94%, 0 100%)' }}>
        <img src="/assets/expansion-hero.jpg" alt="Amman skyline at golden hour" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.65 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg, rgba(6,10,8,0.9) 0%, rgba(6,10,8,0.6) 55%, rgba(6,10,8,0.3) 100%)' }} />
        <div style={{ position: 'relative', maxWidth: 760, animation: 'std-rise 0.8s ease-out both' }}>
          <div style={{ fontSize: 12.5, color: '#C9C9C9', letterSpacing: 1, marginBottom: 22 }}><Link to={ROUTES.home} style={{ color: '#C9C9C9' }}>Home</Link> / Expansion Markets</div>
          <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 12, letterSpacing: 3, fontWeight: 600, color: '#8BC53F', marginBottom: 16 }}>EXPANSION MARKETS</div>
          <h1 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 52, fontWeight: 800, color: '#fff', lineHeight: 1.08, margin: '0 0 18px', textTransform: 'uppercase' }}>Built For The Region.</h1>
          <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 26, fontWeight: 600, color: '#8BC53F', marginBottom: 22 }}>مصممون لخدمة المنطقة.</div>
          <p style={{ fontSize: 15, color: '#C9C9C9', lineHeight: 1.8, maxWidth: 480, margin: 0 }}>Jordan first. A disciplined platform for strategic growth across the Middle East.</p>
          <p style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 14, color: '#B9DE7C', lineHeight: 1.9, maxWidth: 480, margin: '8px 0 0' }}>الأردن أولاً. ومنصة منضبطة للنمو الاستراتيجي في الشرق الأوسط.</p>
        </div>
      </div>

      {/* JORDAN FEATURE */}
      <div style={{ background: '#FFFFFF', padding: '90px 64px 50px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', background: '#111412', padding: '50px 56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 40 }}>
          <div>
            <div style={{ fontFamily: "'Archivo',sans-serif", fontSize: 13, fontWeight: 800, color: '#8BC53F', letterSpacing: 1, marginBottom: 8 }}>01 — FIRST EXPANSION MARKET</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 12 }}>
              <h2 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 38, fontWeight: 800, color: '#fff', margin: 0, textTransform: 'uppercase' }}>Jordan</h2>
              <span style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 24, fontWeight: 600, color: '#8BC53F' }}>الأردن</span>
            </div>
            <p style={{ fontSize: 14.5, color: '#C9C9C9', lineHeight: 1.7, maxWidth: 480, margin: 0 }}>Our regional launch point and foundation for disciplined Middle East growth.</p>
          </div>
          <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 13, fontWeight: 600, color: '#8BC53F', flexShrink: 0 }}>سوق التوسع الأول</div>
        </div>
      </div>

      {/* PLANNED MARKETS GRID */}
      <div style={{ background: '#F5F4F0', padding: '60px 64px 90px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
          {PLANNED_MARKETS.map((m) => (
            <MarketCardDesktop key={m.num} m={m} />
          ))}
        </div>
      </div>

      {/* BAND */}
      <div style={{ background: '#8BC53F', padding: '44px 64px', textAlign: 'center' }}>
        <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 16, fontWeight: 700, letterSpacing: 1, color: '#111412', textTransform: 'uppercase', marginBottom: 8 }}>One Operating Standard. Adapted For Every Market.</div>
        <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 15, fontWeight: 600, color: '#111412' }}>معيار تشغيلي واحد. يتكيف مع كل سوق.</div>
      </div>

      {/* CTA */}
      <div style={{ background: '#2A2E2A', padding: '90px 64px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Poppins',sans-serif", fontSize: 28, fontWeight: 700, color: '#fff', letterSpacing: 0.5, textTransform: 'uppercase', margin: '0 0 26px' }}>Bring The 1 to your market</h2>
        <CtaButton />
      </div>

      <PageFooter />
    </div>
  );
}

function ExpansionMarketsMobile() {
  return (
    <div style={{ width: '100%', maxWidth: 560, margin: '0 auto', background: '#FFFFFF', fontFamily: "'Poppins',sans-serif", color: '#111412', overflowX: 'hidden', position: 'relative' }}>
      <Header activeIndex={-1} variant="inner" />

      {/* HERO */}
      <div style={{ position: 'relative', background: '#111412', overflow: 'hidden', padding: '44px 20px 52px', clipPath: 'polygon(0 0, 100% 0, 100% 97%, 0 100%)' }}>
        <img src="/assets/expansion-hero.jpg" alt="Amman skyline at golden hour" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.65 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(6,10,8,0.9) 0%, rgba(6,10,8,0.62) 55%, rgba(6,10,8,0.4) 100%)' }} />
        <div style={{ position: 'relative' }}>
          <div style={{ fontSize: 11.5, color: '#C9C9C9', letterSpacing: 0.5, marginBottom: 16 }}><Link to={ROUTES.home} style={{ color: '#C9C9C9' }}>Home</Link> / Expansion Markets</div>
          <div style={{ fontSize: 11.5, letterSpacing: 3, fontWeight: 600, color: '#8BC53F', marginBottom: 12 }}>EXPANSION MARKETS</div>
          <h1 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 32, fontWeight: 800, color: '#fff', lineHeight: 1.1, margin: '0 0 14px', textTransform: 'uppercase' }}>Built For The Region.</h1>
          <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 19, fontWeight: 600, color: '#8BC53F', marginBottom: 16 }}>مصممون لخدمة المنطقة.</div>
          <p style={{ fontSize: 14, color: '#C9C9C9', lineHeight: 1.8, margin: 0 }}>Jordan first. A disciplined platform for strategic growth across the Middle East.</p>
        </div>
      </div>

      {/* JORDAN FEATURE */}
      <div style={{ background: '#FFFFFF', padding: '44px 20px 8px' }}>
        <div style={{ background: '#111412', padding: '30px 24px' }}>
          <div style={{ fontFamily: "'Archivo',sans-serif", fontSize: 11, fontWeight: 800, color: '#8BC53F', letterSpacing: 1, marginBottom: 10 }}>01 — FIRST EXPANSION MARKET</div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 10 }}>
            <h2 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 26, fontWeight: 800, color: '#fff', margin: 0, textTransform: 'uppercase' }}>Jordan</h2>
            <span style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 18, fontWeight: 600, color: '#8BC53F' }}>الأردن</span>
          </div>
          <p style={{ fontSize: 13.5, color: '#C9C9C9', lineHeight: 1.7, margin: 0 }}>Our regional launch point and foundation for disciplined Middle East growth.</p>
        </div>
      </div>

      {/* PLANNED MARKETS */}
      <div style={{ background: '#F5F4F0', padding: '28px 20px 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {PLANNED_MARKETS.map((m) => (
            <div key={m.num} style={{ background: '#fff', padding: 18 }}>
              <div style={{ fontFamily: "'Archivo',sans-serif", fontSize: 11, fontWeight: 800, color: '#8BC53F', marginBottom: 6 }}>{m.num}</div>
              <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 13, fontWeight: 600 }}>{m.mobileName}</div>
              <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 12, color: '#6E9E2E', margin: '3px 0 8px' }}>{m.nameAr}</div>
              <div style={{ fontSize: 9, letterSpacing: 0.8, color: '#6E736F' }}>PLANNED MARKET</div>
            </div>
          ))}
        </div>
      </div>

      {/* BAND */}
      <div style={{ background: '#8BC53F', padding: '36px 20px', textAlign: 'center' }}>
        <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 14, fontWeight: 700, letterSpacing: 0.5, color: '#111412', textTransform: 'uppercase', marginBottom: 8, lineHeight: 1.4 }}>One Operating Standard. Adapted For Every Market.</div>
        <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 13.5, fontWeight: 600, color: '#111412' }}>معيار تشغيلي واحد. يتكيف مع كل سوق.</div>
      </div>

      {/* CTA */}
      <div style={{ background: '#2A2E2A', padding: '52px 20px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Poppins',sans-serif", fontSize: 22, fontWeight: 700, color: '#fff', letterSpacing: 0.5, textTransform: 'uppercase', margin: '0 0 22px', lineHeight: 1.35 }}>Bring The 1 to your market</h2>
        <CtaButton mobile />
      </div>

      <PageFooter />
    </div>
  );
}

export default function ExpansionMarkets() {
  return (
    <>
      <div className="desktop-only"><ExpansionMarketsDesktop /></div>
      <div className="mobile-only"><ExpansionMarketsMobile /></div>
    </>
  );
}
