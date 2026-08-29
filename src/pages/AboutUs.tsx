import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { PageFooter } from '../components/Footer';
import { useHover } from '../hooks/useHover';
import { ROUTES } from '../routes';

const STATS = [
  { value: '16,000+', label: 'EMPLOYEES NATIONWIDE', mobileLabel: 'EMPLOYEES NATIONWIDE' },
  { value: '4,000+', label: 'INDEPENDENT SERVICE PROVIDERS', mobileLabel: 'SERVICE PROVIDERS' },
  { value: '50', label: 'STATES SERVED', mobileLabel: 'STATES SERVED' },
];

const SCALE_STATS = [
  { value: '250M+', label: 'SQUARE FEET CLEANED', mobileLabel: 'SQ FT CLEANED' },
  { value: '400+', label: 'LOCATIONS SERVED', mobileLabel: 'LOCATIONS' },
  { value: '1,000+', label: 'TEAM MEMBERS', mobileLabel: 'TEAM MEMBERS' },
];

const CLIENTS = [
  { img: 'client-meijer-trim.png', alt: 'Meijer', h: 44, mh: 38 },
  { img: 'client-target-trim.png', alt: 'Target', h: 40, mh: 34 },
  { img: 'client-annarbor-trim-c.png', alt: 'Ann Arbor Public Schools', h: 58, mh: 50 },
  { img: 'client-emu.webp', alt: 'Eastern Michigan University', h: 40, mh: 32 },
  { img: 'client-umich-trim.png', alt: 'University of Michigan', h: 38, mh: 30 },
  { img: 'client-trinity-trim.png', alt: 'Trinity Health', h: 60, mh: 48 },
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

function AboutUsDesktop() {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", color: '#111412', overflowX: 'auto', minWidth: 1360 }}>
      <Header activeIndex={1} variant="inner" />

      {/* HERO */}
      <div style={{ position: 'relative', background: '#111412', overflow: 'hidden', padding: '60px 64px 100px', clipPath: 'polygon(0 0, 100% 0, 100% 94%, 0 100%)' }}>
        <img src="/assets/about-hero.jpg" alt="The 1 team walking through a modern lobby" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.55 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg, rgba(6,10,8,0.92) 0%, rgba(6,10,8,0.65) 55%, rgba(6,10,8,0.4) 100%)' }} />
        <div style={{ position: 'relative', maxWidth: 760, animation: 'std-rise 0.8s ease-out both' }}>
          <div style={{ fontSize: 12.5, color: '#C9C9C9', letterSpacing: 1, marginBottom: 22 }}><Link to={ROUTES.home} style={{ color: '#C9C9C9' }}>Home</Link> / About Us</div>
          <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 12, letterSpacing: 3, fontWeight: 600, color: '#8BC53F', marginBottom: 16 }}>ABOUT US</div>
          <h1 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 52, fontWeight: 800, color: '#fff', lineHeight: 1.08, margin: '0 0 18px', textTransform: 'uppercase' }}>Built In America.<br />Ready For The World.</h1>
          <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 26, fontWeight: 600, color: '#8BC53F', margin: 0 }}>انطلقنا من أمريكا. ونستعد لخدمة العالم.</div>
        </div>
      </div>

      {/* OUR STORY */}
      <div style={{ background: '#FFFFFF', padding: '90px 64px 60px' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 64, alignItems: 'center' }}>
          <div style={{ animation: 'std-rise 0.7s ease-out both' }}>
            <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 12, letterSpacing: 3, fontWeight: 600, color: '#6E9E2E', marginBottom: 6 }}>UNITED STATES TO MIDDLE EAST</div>
            <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 14, fontWeight: 600, color: '#6E9E2E', marginBottom: 24 }}>من الولايات المتحدة إلى الشرق الأوسط</div>
            <p style={{ fontSize: 15, color: '#3C403D', lineHeight: 1.8, margin: '0 0 10px' }}>Founded in the United States by a visionary facilities management entrepreneur, our company has grown into one of the nation's largest service organizations. Today, we oversee more than 16,000 employees and a network of over 4,000 independent service providers, delivering comprehensive facility solutions across all 50 states.</p>
            <p style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', textAlign: 'right', fontSize: 13.5, color: '#6E9E2E', lineHeight: 1.9, margin: '0 0 18px' }}>تأسست شركتنا في الولايات المتحدة على يد رائد أعمال صاحب رؤية في إدارة المرافق، ونمت لتصبح واحدة من أكبر مؤسسات الخدمات في البلاد. واليوم، نُشرف على أكثر من 16,000 موظف وشبكة تضم أكثر من 4,000 مزوّد خدمة مستقل، لتقديم حلول متكاملة للمرافق في جميع الولايات الخمسين.</p>
            <p style={{ fontSize: 15, color: '#3C403D', lineHeight: 1.8, margin: '0 0 10px' }}>We specialize in healthcare, education, retail, and multifamily housing - industries where quality, consistency, safety, and accountability are essential.</p>
            <p style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', textAlign: 'right', fontSize: 13.5, color: '#6E9E2E', lineHeight: 1.9, margin: 0 }}>نحن متخصصون في قطاعات الرعاية الصحية والتعليم والتجزئة والمجمعات السكنية - وهي قطاعات تُعد فيها الجودة والاتساق والسلامة والمساءلة أموراً أساسية.</p>
          </div>
          <div style={{ animation: 'std-rise 0.8s ease-out 0.1s both' }}>
            <img src="/assets/about-desk.jpg" alt="Operations manager reviewing live dashboards" style={{ width: '100%', height: 380, objectFit: 'cover', display: 'block' }} />
          </div>
        </div>
        <div style={{ maxWidth: 1240, margin: '70px auto 0', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', borderTop: '1px solid #E4E2DC', borderBottom: '1px solid #E4E2DC' }}>
          {STATS.map((s, i) => (
            <div key={s.value} style={{ textAlign: 'center', padding: '34px 12px', borderRight: i < 2 ? '1px solid #E4E2DC' : undefined }}>
              <div style={{ fontFamily: "'Archivo',sans-serif", fontSize: 44, fontWeight: 800, color: '#8BC53F' }}>{s.value}</div>
              <div style={{ fontSize: 13, color: '#3C403D', letterSpacing: 0.5, marginTop: 6 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* PULL QUOTE */}
      <div style={{ background: '#F5F4F0', padding: '80px 64px' }}>
        <div style={{ maxWidth: 840, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontFamily: "'Archivo',sans-serif", fontSize: 60, color: '#8BC53F', lineHeight: 0.4, marginBottom: 10 }}>"</div>
          <p style={{ fontFamily: "'Archivo',sans-serif", fontSize: 26, fontWeight: 600, color: '#111412', lineHeight: 1.5, margin: 0 }}>Our expansion into the Middle East was driven by a clear opportunity to transform traditional facilities management practices. We are bringing the proven systems, operational standards, and technology that fueled our success in the United States to this growing market - adapted to meet its unique needs.</p>
        </div>
      </div>

      {/* SMARTER SYSTEMS */}
      <div style={{ background: '#FFFFFF', padding: '90px 64px' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 56px' }}>
            <h2 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 40, fontWeight: 800, lineHeight: 1.1, margin: '0 0 10px', color: '#111412', textTransform: 'uppercase' }}>Smarter Systems.<br />Clearer Accountability.</h2>
            <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 22, fontWeight: 600, color: '#6E9E2E' }}>أنظمة أذكى. ومساءلة أوضح.</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '0 60px' }}>
            <div style={{ borderTop: '1px solid #E4E2DC', padding: '26px 0' }}>
              <span style={{ fontFamily: "'Archivo',sans-serif", fontSize: 14, fontWeight: 800, color: '#8BC53F', letterSpacing: 1 }}>01</span>
              <p style={{ fontSize: 15, color: '#3C403D', lineHeight: 1.8, margin: '10px 0 0' }}>What makes us different is our technology-driven approach. We provide live operational data and transparent reporting, establish measurable performance standards, and hold every team member accountable for delivering results.</p>
            </div>
            <div style={{ borderTop: '1px solid #E4E2DC', padding: '26px 0' }}>
              <span style={{ fontFamily: "'Archivo',sans-serif", fontSize: 14, fontWeight: 800, color: '#8BC53F', letterSpacing: 1 }}>02</span>
              <p style={{ fontSize: 15, color: '#3C403D', lineHeight: 1.8, margin: '10px 0 0' }}>Supported by highly trained professionals and consistent processes across the globe, we give clients greater visibility, stronger oversight, and confidence that every facility is being maintained to the highest standard.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CLOSING STATEMENT */}
      <div style={{ background: '#111412', padding: '80px 64px', textAlign: 'center' }}>
        <p style={{ fontFamily: "'Archivo',sans-serif", fontSize: 30, fontWeight: 700, color: '#fff', lineHeight: 1.4, maxWidth: 820, margin: '0 auto' }}>We are not simply expanding into a new market. We are introducing a better, smarter, and more accountable way to manage facilities worldwide.</p>
      </div>

      {/* PROVEN AT SCALE */}
      <div style={{ background: '#F5F4F0', padding: '80px 64px' }}>
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 40px' }}>
          <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 13, letterSpacing: 3, color: '#6E9E2E', fontWeight: 600, marginBottom: 10 }}>TRUSTED BY</div>
          <h2 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 32, fontWeight: 800, color: '#111412', margin: 0 }}>Proven At Scale. Trusted To Deliver.</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', maxWidth: 900, margin: '0 auto 50px', textAlign: 'center' }}>
          {SCALE_STATS.map((s) => (
            <div key={s.value}>
              <div style={{ fontFamily: "'Archivo',sans-serif", fontSize: 36, fontWeight: 800, color: '#8BC53F' }}>{s.value}</div>
              <div style={{ fontSize: 12.5, color: '#3C403D', marginTop: 6 }}>{s.label}</div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: 44, maxWidth: 1300, margin: '0 auto' }}>
          {CLIENTS.map((c) => (
            <img key={c.alt} src={`/assets/${c.img}`} alt={c.alt} style={{ height: c.h, width: 'auto', objectFit: 'contain' }} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: '#2A2E2A', padding: '90px 64px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Poppins',sans-serif", fontSize: 28, fontWeight: 700, color: '#fff', letterSpacing: 0.5, textTransform: 'uppercase', margin: '0 0 26px' }}>Ready to bring one accountable team to your facility?</h2>
        <CtaButton />
      </div>

      <PageFooter />
    </div>
  );
}

function AboutUsMobile() {
  return (
    <div style={{ width: '100%', maxWidth: 560, margin: '0 auto', background: '#FFFFFF', fontFamily: "'Poppins',sans-serif", color: '#111412', overflowX: 'hidden', position: 'relative' }}>
      <Header activeIndex={1} variant="inner" />

      {/* HERO */}
      <div style={{ position: 'relative', background: '#111412', overflow: 'hidden', padding: '44px 20px 52px', clipPath: 'polygon(0 0, 100% 0, 100% 97%, 0 100%)' }}>
        <img src="/assets/about-hero.jpg" alt="The 1 team walking through a modern lobby" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.55 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(6,10,8,0.92) 0%, rgba(6,10,8,0.68) 55%, rgba(6,10,8,0.45) 100%)' }} />
        <div style={{ position: 'relative' }}>
          <div style={{ fontSize: 11.5, color: '#C9C9C9', letterSpacing: 0.5, marginBottom: 16 }}><Link to={ROUTES.home} style={{ color: '#C9C9C9' }}>Home</Link> / About Us</div>
          <div style={{ fontSize: 11.5, letterSpacing: 3, fontWeight: 600, color: '#8BC53F', marginBottom: 12 }}>ABOUT US</div>
          <h1 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 32, fontWeight: 800, color: '#fff', lineHeight: 1.1, margin: '0 0 14px', textTransform: 'uppercase' }}>Built In America.<br />Ready For The World.</h1>
          <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 19, fontWeight: 600, color: '#8BC53F' }}>انطلقنا من أمريكا. ونستعد لخدمة العالم.</div>
        </div>
      </div>

      {/* OUR STORY */}
      <div style={{ background: '#FFFFFF', padding: '44px 20px 8px', textAlign: 'center' }}>
        <div style={{ fontSize: 11.5, letterSpacing: 3, fontWeight: 600, color: '#6E9E2E', marginBottom: 8 }}>UNITED STATES TO MIDDLE EAST</div>
        <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 13, fontWeight: 600, color: '#6E9E2E', marginBottom: 20 }}>من الولايات المتحدة إلى الشرق الأوسط</div>
        <img src="/assets/about-desk.jpg" alt="Operations manager reviewing live dashboards" style={{ width: '100%', height: 200, objectFit: 'cover', display: 'block', marginBottom: 20 }} />
        <p style={{ fontSize: 14, color: '#3C403D', lineHeight: 1.75, margin: '0 0 8px', textAlign: 'left' }}>Founded in the United States by a visionary facilities management entrepreneur, our company has grown into one of the nation's largest service organizations. Today, we oversee more than 16,000 employees and a network of over 4,000 independent service providers, delivering comprehensive facility solutions across all 50 states.</p>
        <p style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', textAlign: 'right', fontSize: 12.5, color: '#6E9E2E', lineHeight: 1.85, margin: '0 0 14px' }}>تأسست شركتنا في الولايات المتحدة على يد رائد أعمال صاحب رؤية في إدارة المرافق، ونمت لتصبح واحدة من أكبر مؤسسات الخدمات في البلاد. واليوم، نُشرف على أكثر من 16,000 موظف وشبكة تضم أكثر من 4,000 مزوّد خدمة مستقل، لتقديم حلول متكاملة للمرافق في جميع الولايات الخمسين.</p>
        <p style={{ fontSize: 14, color: '#3C403D', lineHeight: 1.75, margin: '0 0 8px', textAlign: 'left' }}>We specialize in healthcare, education, retail, and multifamily housing - industries where quality, consistency, safety, and accountability are essential.</p>
        <p style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', textAlign: 'right', fontSize: 12.5, color: '#6E9E2E', lineHeight: 1.85, margin: '0 0 24px' }}>نحن متخصصون في قطاعات الرعاية الصحية والتعليم والتجزئة والمجمعات السكنية - وهي قطاعات تُعد فيها الجودة والاتساق والسلامة والمساءلة أموراً أساسية.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', borderTop: '1px solid #E4E2DC', borderBottom: '1px solid #E4E2DC' }}>
          {STATS.map((s, i) => (
            <div key={s.value} style={{ textAlign: 'center', padding: '22px 4px', borderRight: i < 2 ? '1px solid #E4E2DC' : undefined }}>
              <div style={{ fontFamily: "'Archivo',sans-serif", fontSize: 24, fontWeight: 800, color: '#8BC53F' }}>{s.value}</div>
              <div style={{ fontSize: 9.5, color: '#3C403D', letterSpacing: 0.3, marginTop: 6 }}>{s.mobileLabel}</div>
            </div>
          ))}
        </div>
      </div>

      {/* PULL QUOTE */}
      <div style={{ background: '#F5F4F0', padding: '44px 20px', textAlign: 'center' }}>
        <div style={{ fontFamily: "'Archivo',sans-serif", fontSize: 44, color: '#8BC53F', lineHeight: 0.3, marginBottom: 12 }}>"</div>
        <p style={{ fontFamily: "'Archivo',sans-serif", fontSize: 18, fontWeight: 600, color: '#111412', lineHeight: 1.55, margin: 0 }}>Our expansion into the Middle East was driven by a clear opportunity to transform traditional facilities management practices. We are bringing the proven systems, operational standards, and technology that fueled our success in the United States to this growing market - adapted to meet its unique needs.</p>
      </div>

      {/* SMARTER SYSTEMS */}
      <div style={{ background: '#FFFFFF', padding: '44px 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <h2 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 26, fontWeight: 800, lineHeight: 1.15, margin: '0 0 8px', color: '#111412', textTransform: 'uppercase' }}>Smarter Systems.<br />Clearer Accountability.</h2>
          <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 16, fontWeight: 600, color: '#6E9E2E' }}>أنظمة أذكى. ومساءلة أوضح.</div>
        </div>
        <div style={{ borderTop: '1px solid #E4E2DC', padding: '20px 0' }}>
          <span style={{ fontFamily: "'Archivo',sans-serif", fontSize: 13, fontWeight: 800, color: '#8BC53F', letterSpacing: 1 }}>01</span>
          <p style={{ fontSize: 14, color: '#3C403D', lineHeight: 1.75, margin: '8px 0 0' }}>What makes us different is our technology-driven approach. We provide live operational data and transparent reporting, establish measurable performance standards, and hold every team member accountable for delivering results.</p>
        </div>
        <div style={{ borderTop: '1px solid #E4E2DC', borderBottom: '1px solid #E4E2DC', padding: '20px 0' }}>
          <span style={{ fontFamily: "'Archivo',sans-serif", fontSize: 13, fontWeight: 800, color: '#8BC53F', letterSpacing: 1 }}>02</span>
          <p style={{ fontSize: 14, color: '#3C403D', lineHeight: 1.75, margin: '8px 0 0' }}>Supported by highly trained professionals and consistent processes across the globe, we give clients greater visibility, stronger oversight, and confidence that every facility is being maintained to the highest standard.</p>
        </div>
      </div>

      {/* CLOSING STATEMENT */}
      <div style={{ background: '#111412', padding: '48px 20px', textAlign: 'center' }}>
        <p style={{ fontFamily: "'Archivo',sans-serif", fontSize: 20, fontWeight: 700, color: '#fff', lineHeight: 1.45, margin: 0 }}>We are not simply expanding into a new market. We are introducing a better, smarter, and more accountable way to manage facilities worldwide.</p>
      </div>

      {/* PROVEN AT SCALE */}
      <div style={{ background: '#F5F4F0', padding: '44px 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <div style={{ fontSize: 11.5, letterSpacing: 3, color: '#6E9E2E', fontWeight: 600, marginBottom: 8 }}>TRUSTED BY</div>
          <h2 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 24, fontWeight: 800, color: '#111412', margin: 0 }}>Proven At Scale. Trusted To Deliver.</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', marginBottom: 28, textAlign: 'center' }}>
          {SCALE_STATS.map((s) => (
            <div key={s.value}>
              <div style={{ fontFamily: "'Archivo',sans-serif", fontSize: 22, fontWeight: 800, color: '#8BC53F' }}>{s.value}</div>
              <div style={{ fontSize: 9, color: '#3C403D', marginTop: 5 }}>{s.mobileLabel}</div>
            </div>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px 18px', alignItems: 'center', justifyItems: 'center' }}>
          {CLIENTS.map((c) => (
            <img key={c.alt} src={`/assets/${c.img}`} alt={c.alt} style={{ maxWidth: '100%', height: c.mh, objectFit: 'contain' }} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: '#2A2E2A', padding: '52px 20px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Poppins',sans-serif", fontSize: 22, fontWeight: 700, color: '#fff', letterSpacing: 0.5, textTransform: 'uppercase', margin: '0 0 22px', lineHeight: 1.35 }}>Ready to bring one accountable team to your facility?</h2>
        <CtaButton mobile />
      </div>

      <PageFooter />
    </div>
  );
}

export default function AboutUs() {
  return (
    <>
      <div className="desktop-only"><AboutUsDesktop /></div>
      <div className="mobile-only"><AboutUsMobile /></div>
    </>
  );
}
